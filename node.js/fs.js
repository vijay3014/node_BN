const fs = require("fs")

const {add ,product} = require("./basic.js")
const { log } = require("console")
const { METHODS } = require("http")

// const{product} = require("./basic.js")
// console.log(add(5,3));

// synchronously and asynchronously method

// asynchronously  method

// fs.open('uv.txt', (err, data) => {
//     if (err) {
//         console.log('faild to open file')
//     } else {
//         console.log('succsessfully to open file')
//     }
// })

// synchronously method

// fs.openSync('uv.txt')
// console.log('file open sucessfully')

// read method

// let t1 = performance.now()
// console.log('product is:',product(5,3))
// fs.readFile('uv.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log('faild to read file')
//     } else {
//         console.log(data)
//     }
// })

// let data = fs.readFileSync('uv.txt','utf-8');
// console.log(data);
// console.log('addition is :',add(15,13))
// let t2 = performance.now()
// console.log('time diffrence is :',t2-t1)

// write Method

// let txt =`#include <stdio.h>
// int main() {
//     printf("welcome to my world");
//     printf("so nice to see you");
// };`

// fs.writeFile('uv.c', txt, (err,data) => {
//     if (err) console.log("faild to write file")
//     else
//         console.log("file written  successfully")
//     })

// fs.writeFileSync('uv.c',txt);

// console.log("file written  successfully")

// Append Method

// let txt =`good morning`;
// fs.appendFile("uv.c",txt,(err,data)=>{
//     if(err)console.log("Faild to append text in the file")
//     else console.log("text appended Successfully")
// })

// fs.appendFileSync("uv.c",txt);
// console.log("Text Appeneded Successfully")

// close METHODS