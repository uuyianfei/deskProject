
import { SMTPClient } from 'emailjs';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const client = new SMTPClient({
    user: 'cachina01@163.com',
    password: 'MPcBU6VKAqjCN5XA',
    host: 'smtp.163.com',
    ssl: true,
});

const sendEmail = (obj, callback) => {
 
    client.send(
      {
        text: `name:${obj.name}, email:${obj.email}, subject:${obj.subject}, message:${obj.message}, code:${obj.code}`,
        from: '发件人 <cachina01@163.com>',
        to: '收件人 <nistac@vip.163.com>',
        subject: 'contact us',
      },
      (err, message) => {
        if (err) {
          console.error(err);
          return callback(err);
        }
  
        console.log(message);
        callback(null);
      }
    );
  };
  
  app.post('/sendEmail', (req, res) => {
    const { name, email, subject, message, code } = req.body;
    console.log(req.body,'req.body');
    const obj = {
      name,
      email,
      subject,
      message,
      code
    };
  
    sendEmail(obj, (err) => {
      if (err) {
        return res.status(500).json({ code: 500, message: 'Send Failed:'+err});
      }
  
      res.json({
        code: 200,
        message: 'Send Success'
      });
    });
  });

  app.get('/test', (req, res) => {

      res.json({
        code: 200,
        message: 'Success'
      });
  });
  


app.listen(3000, () => {
    console.log('服务器启动成功');
});
