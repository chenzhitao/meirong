package com.jiumi.pay;

import com.alipay.api.internal.util.AlipaySignature;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

import java.security.Security;

/**
 *@author xudong.liu
 * @data 2020/10/16
 */
public class TestAlipay {
    public static void main(String[] args) throws Exception {
        if (Security.getProvider("BC") == null) {
            Security.addProvider(new BouncyCastleProvider());
        }
        Security.addProvider(new BouncyCastleProvider());
        String publicKey = AlipaySignature.getAlipayPublicKey("D:/CSR/appCertPublicKey_2021002100634042.crt");
        System.out.println("应用公钥的值:"+publicKey);


        String alipaypublicKey = AlipaySignature.getAlipayPublicKey("D:/CSR/alipayCertPublicKey_RSA2.crt");
        System.out.println("支付宝公钥:"+alipaypublicKey);
       /* AlipayFundTransToaccountTransferModel model = new AlipayFundTransToaccountTransferModel();
        model.setOutBizNo(StringUtils.getOutTradeNo());
        model.setPayeeType("ALIPAY_LOGONID");
        model.setPayeeAccount("diqaox4611@sandbox.com");
        model.setAmount("40.00");
        model.setPayeeRealName("沙箱环境");
        model.setPayerShowName("桂壮云课堂");
        model.setPayerRealName("沙箱环境");
        model.setRemark("提现");
        //构造client
        CertAlipayRequest certAlipayRequest = new CertAlipayRequest();
//设置网关地址
        certAlipayRequest.setServerUrl("https://openapi.alipaydev.com/gateway.do");
//设置应用Id
        certAlipayRequest.setAppId("2016102200740684");
//设置应用私钥
        certAlipayRequest.setPrivateKey("MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCaP2Fda4+9rkz8RLkosvFM+pChQf4XojwcoW/JKqbJ9rpcTKy52P1gr5IYlG18NFDACY4EmbY+qemKVWRdHBFlcCvmlC7wGKkE4Nxj84ozCOrmsYqe0AZGHwi04q1SpfxD5XZZ0uYFLMessiedeQh/cTKhfCG5QzKau9ymDUhjmdX9WT4+HqS34QuvDfdpDPZTg7gVm2WL5FypWBFl8C0DkeXaW2BnEdS81SsrWvyLvKzsI0rsa+hJ0eYaXKnaACmqw9OeJ15/E2y4MfGi5Hv34tyc/9bvv5A7m281/csLfBlpiQzKVCL4CpcYBA7tCRnCd7kCIm57d2WQM6j9i3UZAgMBAAECggEADhwcIPqU5IoMOstikKmFzz/geQ/bWXgavZe67RD8vt7V/1l4N2v1CaIl4B+7wC/c7yQwnJUfCa5rUZ8sFiRaJwhSy73kaUwoMe0L3AzMKIz5R+8Xuh1XZZSzLDDMIBJU+DUGVYMoTXLiNRb67rnCoD3PntwHDbZq66KhtYLji1DDCvQAM4nfPmoR+/XgNm3vebQfflxDexKrbg+5GbQyDjwkIcL1HpKVEsXtnT53Z4QO6dvsSChoIQnomRxmAfE8bqLDuhzRMHOu46M88derNiVD+4jrqZH1YHG/WuIy3MZ/SxF/4q3xZlUVwcij6OkNUS+WoXBU1izuiHOszd3cDQKBgQD1V1xAb4D+fXDUodn3R1upow4N/ptIrWcQy3mQ/TXmRnn0VoBKmzwr5ZsZ4scss4hbOg2Ja1xBIb48K7kuiHIN7OB5qSKbQNz3R2GViZ4wj1PUX25IKf09hFvhIyCZvPwW17VKAkCKIaG2sIkTTIRi55R3LnxJN59tpCjTi/bhCwKBgQCg8uSlAY505RsXqgMDffc/+rxp40F0OTmtXg4FtREOvNQztSxPVhMUmyUKnVaBqFC9kKf2XbeLw/A8hzbBuFQ7FzZ6KOvat7+wcQWglva86z/8HyBCnQmNf+adYHkb/9O/CIFu0j88P07z1t+lLJVbws7ElHOIGV1h+mGi8kyg6wKBgCtJZZps0fqU0VKC1/08Ft0gSruHX4h8J8Ib1HATbO4bIytME8iWCRDJqwrvKysk5fsKjBbh3V4UgQcGw96E7nKsh5KPl+6CjDoI2xvSMxnoP+cpi0CqP+cZskhPtVHKuUOifXb4XMDCXFDqZtUD3BvDNjus9PrKGJP0sctZV46vAoGAGmAzwCbFJbr1+abO35+hCUcZ4XBwpY9LOHIVcjH+HaAsVlz2afn9Hn9eTqMCLjVbJfWy0NkC31C46fJussh2ZUikkNhr7mf2bf/XoD2dKdCTp8miC8iYbCvtqxTIRCJknQXT0El8O29UjPlFpVftEiCWqfh6Bm/BsfDKV13F2QkCgYAkuNjgkPwssPLMLA6B08M9a+KcUa66MkD9GU1PtjdHexKKXpGWMOJpP+0s4Vm6/3rOFY9UZhmr5YblDDsAAMnD+dxwcO1CeEkowEa1s35nOsCK9ferTLVDn/HM4i4YsHlFAip9NgBOVLrxuIh30pgOUncRbCRGGJCqmbAbIwq0cw==");
//设置请求格式，固定值json
        certAlipayRequest.setFormat("json");
//设置字符集
        certAlipayRequest.setCharset("utf-8");
//设置签名类型
        certAlipayRequest.setSignType("RSA2");
//设置应用公钥证书路径
        certAlipayRequest.setCertPath("D:/CSRMY/appCertPublicKey_2016102200740684.crt");
//设置支付宝公钥证书路径
        certAlipayRequest.setAlipayPublicCertPath("D:/CSRMY/alipayCertPublicKey_RSA2.crt");
//设置支付宝根证书路径
        certAlipayRequest.setRootCertPath("D:/CSRMY/alipayRootCert.crt");
//构造client
        AlipayClient alipayClient = new DefaultAlipayClient(certAlipayRequest);
//构造API请求
//        AlipayTradeQueryRequest request = new AlipayTradeQueryRequest();
        AlipayFundTransToaccountTransferRequest request = new AlipayFundTransToaccountTransferRequest();
        request.setBizModel(model);
//发送请求
        AlipayFundTransToaccountTransferResponse response = alipayClient.certificateExecute(request);
        System.out.println(response.getBody());*/
    }
}
