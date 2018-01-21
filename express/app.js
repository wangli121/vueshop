
//包引入
const express = require("express");
const bodyParser = require('body-parser');
const multer = require('multer');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const mysql = require('mysql');
const cors = require('cors');

const app = express();//服务器环境
app.listen(4000, () => { console.log('server is runing...') });

//静态页面托管
app.use(express.static('./www'));

//配置中间件
app.use(bodyParser.urlencoded({
  limit: 2 * 1024,//限定
  extended: false //扩展模式
}));

let objMulter = multer({ dest: './upload' });//配置文件保存位置
app.use(objMulter.any());//文件上传类型限定

let arrKeys = [];
for (var i = 0; i < 99999; i++) {
  arrKeys.push('aa' + Math.random());
}
app.use(cookieSession({
  name: 'alex_id',
  keys: arrKeys,
  maxAge: 1000 * 20
}));

//引擎默认输出设置
app.set('view.engine', 'html');
//模板路径设置
app.set('views', './views');
//输出与引擎匹配
app.engine('html', consolidate.ejs);

//链接库

let db = mysql.createConnection({
  host: 'localhost',//库地址，主机名
  port: 3306,//可选参数  端口
  database: 'shop',//指定库名
  user: 'root',
  password: ''
});

app.use(cors({
  "origin": ['http://localhost:8080'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ['Content-Type', 'Authorization']
}));
//响应

//登录
app.use('/login', (req, res) => {
  var sql = `SELECT * FROM USER WHERE username="${req.body.username}"`
  switch (req.body.act) {
    case 'reg':
      db.query(sql, (err, data) => {
        if (err) {
          res.send('0');
        } else {
          if (data.length) {
            res.send('1');
          } else {
            let sql = `INSERT INTO user(username,password) VALUES("${req.body.username}","${req.body.password}")`;
            db.query(sql, (err, data) => {
              res.send('2');
            })
          }
        }
      });
      break;
    case 'login':
      let sql1 = `SELECT * FROM USER WHERE username="${req.body.username}" AND password="${req.body.password}"`;
      db.query(sql1, (err, data) => {
        if (err) {
          res.send('1');
        } else {
          if (data.length) {
            res.send({ 'stat': 2, 'id': data[0] })
          } else {
            res.send('0')
          }
        }
      })
      break;
  }
});
//首页拿内容
app.use('/main', (req, res) => {
  var sql3 = `select * from cartmenu where title='miaosha' OR title='baoyou' 
  OR title='baokuan' OR title='baby' OR title='beautiful' OR title='baihuo' 
  OR title='ziying' OR title='notice'`
  // `select * from cartmenu where title='baby' OR title='beautiful' OR title='baihuo' 
  // OR title='ziying'`
  db.query(sql3, (err, data) => {
    if (err) {
      res.send('没有拿到')
    } else {
      var a = [data[0], data[1], data[2]];
      var b = [data[3], data[4], data[5], data[6]];
      var c = [data[7]];
      res.send({ a: a, b: b, c: c })
    }
  })
});
app.use('/mainpro', (req, res) => {
  sql4 = `select *from cart where title='beautiful'`;
  db.query(sql4, (err, data) => {
    if (err) {
      res.send('访问错误！')
    } else {
      res.send(data)
    }
  })
})
//轮播图
app.use('/lunbo', (req, res) => {
  sql11 = `select src from lunbo`;
  db.query(sql11, (err, data) => {
    if (err) {
      res.send('服务器错误');
    } else {
      res.send(data);
    }
  })
})
//detail详情页
app.use('/detial', (req, res) => {
  sql5 = `select * from cart where cartid=${req.body.cartid}`;
  db.query(sql5, (err, data) => {
    if (err) {
      res.send('服务器错误')
    } else {
      res.send(data)
    }
  })
})
//detail评论接口
app.use('/pinglun', (req, res) => {
  sql6 = `select * from pinglun where cartid=${req.body.cartid}`;
  db.query(sql6, (err, data) => {
    if (err) {
      res.send('服务器错误')
    } else {
      var dat = data.slice(0, 3);
      var long = data.length;
      res.send({ 'long': long, 'dat': dat })
    }
  })
});
//加载跟多评论
app.use('/morepinglun', (req, res) => {
  var start = parseInt(req.body.start);
  sql7 = `select * from pinglun where cartid=${req.body.cartid}`;
  db.query(sql7, (err, data) => {
    if (err) {
      res.send('服务器错误')
    } else {
      var dt = data.slice(start, (start + 3));
      res.send(dt)
    }
  })
});
//加载商品详情页查localstroage
app.use('/setlocalstroage', (req, res) => {
  sql12 = `SELECT shopcart from USER WHERE username='${req.body.uname}'`;
  db.query(sql12, (err, data) => {
    if (err) {
      res.send('服务器错误！')
    } else {
      res.send(data)
    }
  });
})
//加入购物车存库
app.use('/savecart', (req, res) => {
  sql8 = `UPDATE user SET shopcart='${req.body.shopcart}' where username='${req.body.uname}'`;
  db.query(sql8, (err, data) => {
    if (err) {
      res.send('服务器错误！')
    } else {
      //1代表插入成功
      res.send('1');
    }
  })
})
//购物车显示
app.use('/getcart', (req, res) => {
  sql9 = `SELECT shopcart FROM user WHERE username='${req.body.uname}'`;
  db.query(sql9, (err, data) => {
    if (err) {
      res.send('服务器错误！')
    } else {
      if (data[0].shopcart) {
        var str = data[0].shopcart.split(',');
        let counter = {};
        for (let i = 0, len = str.length; i < len; i++) {
          counter[str[i]] ? counter[str[i]]++ : counter[str[i]] = 1;
        }
        var check = '';
        for (var key in counter) {
          check += 'cartid=' + key + ' ' + 'OR' + ' ';
        }
        var newcheck = check.slice(0, check.lastIndexOf('OR'));
        sql10 = `SELECT * FROM cart WHERE ${newcheck}`;
        db.query(sql10, (err, data) => {
          if (err) {
            res.send('服务器错误！')
          } else {
            res.send({ 'data': data, 'cont': counter })
          }
        })
      }
    }
  })
})
//购物车加加减减
app.use('/changecount', (req, res) => {
  switch (req.body.act) {
    case 'add':
      var obj = JSON.parse(req.body.count);
      var str = '';
      for (key in obj) {
        for (var i = 0; i < obj[key]; i++) {
          str += key + ','
        }
      }
      str = str.slice(0, str.length - 1);
      sql14 = `UPDATE user SET shopcart='${str}' where username='${req.body.uname}'`
      db.query(sql14, (err, data) => {
        if (err) {
          req.send('服务器错误')
        } else {
          console.log('修改成功！');
        }
      });
    case 'odd':
      var obj = JSON.parse(req.body.count);
      var str = '';
      for (key in obj) {
        for (var i = 0; i < obj[key]; i++) {
          str += key + ','
        }
      }
      str = str.slice(0, str.length - 1);
      sql15 = `UPDATE user SET shopcart='${str}' where username='${req.body.uname}'`
      db.query(sql15, (err, data) => {
        if (err) {
          req.send('服务器错误')
        } else {
          console.log('修改成功！');
        }
      });
  }
})
//秒杀接口
app.use('/fenglie', (req, res) => {
  sql13 = `SELECT * FROM cart WHERE type = '${req.body.act}'`
  db.query(sql13, (err, data) => {
    if (err) {
      res.send('服务器错误！')
    } else {
      res.send(data)
    }
  })
})
