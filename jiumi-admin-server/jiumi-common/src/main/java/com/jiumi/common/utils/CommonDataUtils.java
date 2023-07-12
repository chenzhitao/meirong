package com.jiumi.common.utils;

import com.jiumi.common.exception.CustomException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 通用的数据处理工具类
 *
 * @author rongguan
 * @date 2021/2/23
 */
public class CommonDataUtils {
    private static final Logger logger = LoggerFactory.getLogger(CommonDataUtils.class);



    public static void checkPhone(String phone) {
        if (StringUtils.isEmpty(phone)) {
            throw new CustomException("请输入手机号");
        }
        try {
            isChinaPhoneLegal(phone);
        } catch (Exception e) {
            throw new CustomException("手机号不合法");
        }
    }

    public static void checkPhoneCode(String code) {
        if (StringUtils.isEmpty(code)) {
            throw new CustomException("请输入验证码");
        }
        if (code.length() != 6) {
            throw new CustomException("验证码位长度正确");
        }
    }


    public static boolean isChinaPhoneLegal(String str) {
        // ^ 匹配输入字符串开始的位置
        // \d 匹配一个或多个数字，其中 \ 要转义，所以是 \\d
        // $ 匹配输入字符串结尾的位置
        String regExp = "^1[3|4|5|6|7|8|9][0-9]\\d{8}$";
        //  String regExp = "/^1[3|4|5|6|7|8|9][0-9]\\d{8}$/";
        Pattern p = Pattern.compile(regExp);
        Matcher m = p.matcher(str);
        return m.matches();
    }

    /***
     * 字符串转为逗号分隔的集合
     * */
    public static List<String> strToList(String str) {
        if (StringUtils.isEmpty(str)) {
            return null;
        }
        return Arrays.asList(str.split(","));
    }




    //根据文件链接把文件下载下来并且转成字节码
    public static byte[] getImageFromURL(String urlPath) {
        byte[] data = null;
        InputStream is = null;
        HttpURLConnection conn = null;
        try {
            URL url = new URL(urlPath);
            conn = (HttpURLConnection) url.openConnection();
            conn.setDoInput(true);
            // conn.setDoOutput(true);
            conn.setRequestMethod("GET");
            conn.setConnectTimeout(6000);
            is = conn.getInputStream();
            if (conn.getResponseCode() == 200) {
                data = readInputStream(is);
            } else {
                data = null;
            }
        } catch (MalformedURLException e) {
            logger.error("MalformedURLException", e);
        } catch (IOException e) {
            logger.error("IOException", e);
        } finally {
            try {
                if (is != null) {
                    is.close();
                }
            } catch (IOException e) {
                logger.error("IOException", e);
            }
            conn.disconnect();
        }
        return data;
    }


    public static byte[] readInputStream(InputStream is) {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        int length = -1;
        try {
            while ((length = is.read(buffer)) != -1) {
                baos.write(buffer, 0, length);
            }
            baos.flush();
        } catch (IOException e) {
            logger.error("IOException", e);
        }
        byte[] data = baos.toByteArray();
        try {
            is.close();
            baos.close();
        } catch (IOException e) {
            logger.error("IOException", e);
        }
        return data;
    }

    public static boolean isBiggerDate(Date date1, Date date2) {
        return date1.getTime() > date2.getTime();
    }

    public static boolean isBiggerDate1(Date date1, Date date2) {
        return date1.getTime() >= date2.getTime();
    }


    private static final String CRON_DATE_FORMAT = "ss mm HH dd MM ? yyyy";

    /***
     *
     * @param date 时间
     * @return cron类型的日期
     */
    public static String getCron(final Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat(CRON_DATE_FORMAT);
        String formatTimeStr = "";
        if (date != null) {
            formatTimeStr = sdf.format(date);
        }
        return formatTimeStr;
    }

    /***
     *
     * @param cron Quartz cron的类型的日期
     * @return Date日期
     */

    public static Date getDate(final String cron) {
        if (cron == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat(CRON_DATE_FORMAT);
        Date date = null;
        try {
            date = sdf.parse(cron);
        } catch (ParseException e) {
            return null;// 此处缺少异常处理,自己根据需要添加
        }
        return date;
    }


}
