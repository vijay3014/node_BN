const http = require('http');
const fs = require('fs');
// const data = fs.readFileSync('./hello.json', 'utf-8');
const data = require('./hello.json');
const port = 4567;
// console.log(data);
const app = http.createServer();

// app.on('request', (req, res) => {
//     // console.log(req.url);
//     // res.end(data);
//     //switch (req.url) {
//     // case '/':
//           res.setHeader('Content-type', 'text/html');
//           res.write('<h3 style="color:blue">Welcome to NODEJS</h3>');
//     break;
//     case '/product':
//            res.setHeader('Content-type', 'application/json');
//            res.end(data);
//      break;
//      case '/user':
//            res.setHeader('Content-type', 'text/html');
//            res.write('<h3 style="color:green">Welcome to User Page</h3>');
//            res.end();
//      break;
//      default:
//            res.setHeader('Content-type', 'text/html');
//            res.write('<h3 style="color:red">Page Not Found</h3>');
//            res.end();
//        }
//   })
      
             app.on('request', (req, res) => {
                // console.log(req.url);
                let items = req.url.split('/');
                console.log(items);
                if (items[1] === '') {
                    res.setHeader('Content-type', 'text/html');
                    res.write('<h3 style="color:blue">Welcome to NODEJS</h3>');
                    res.end();
                }
                else if (items[1] === 'user') {
                    res.setHeader('Content-type', 'text/html');
                    res.write('<h3 style="color:green">Welcome to User Page</h3>');
                    res.end();
                }
                else if (items[1] === 'product') {
                    res.setHeader('Content-type', 'application/json');
                    if(items.length === 3) {
                        let id = Number(items[2]);
                        let products = data[id-1];
                        res.end(JSON.stringify(products));
                    }else
                    res.end(JSON.stringify(data));
                } else {
                    res.setHeader('Content-type', 'text/html');
                    res.write('<h3 style="color:red">Page Not Found</h3>');
                    res.end();
                }
            })
            app.listen(port, () => {
                console.log('Server Start at port http://localhost:4567');
            });