import * as nodemailer from "nodemailer";
import userConfig from "../config/user.json";

// 创建一个SMTP客户端配置
var config = {
    host: 'smtp.126.com',
    port: 25,
    auth: {
        user: '',
        pass: ''
    }
};

// 创建一个SMTP客户端对象
var transporter = nodemailer.createTransport(config);

// 创建一个邮件对象
var mail = {
    // 发件人
    from: 'TMY Blog <{0}>',
    // 主题
    subject: 'I am not Junk Email',
    // 收件人
    to: 'ecnu_wbwang@hotmail.com',
    // 邮件内容，HTML格式
    text: 'Dear XXX, Please come to my office on tomorrow! Thanks!'
};

// 发送邮件
transporter.sendMail(mail, function(error, info){
    if(error) return console.log(error);
    console.log('mail sent:', info.response);
});