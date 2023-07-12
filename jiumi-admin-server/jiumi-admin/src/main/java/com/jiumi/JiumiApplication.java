package com.jiumi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

/**
 * 启动程序
 *
 * @author jiumi
 */
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class JiumiApplication
{
    public static void main(String[] args)
    {
        // System.setProperty("spring.devtools.restart.enabled", "false");
        SpringApplication.run(JiumiApplication.class, args);
        System.out.println("\n(♥◠‿◠)ﾉﾞ  小象美业启动成功   ლ(´ڡ`ლ)ﾞ  \n" );
    }
}
