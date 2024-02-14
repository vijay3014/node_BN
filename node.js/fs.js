const fs = require("fs")
// synchronously and asynchronously method

// asynchronously  method

fs.open('uv.txt', (err, data) => {
    if (err) {
        console.log('faild to open file')
    } else {
        console.log('succsessfully to open file')
    }
})

// synchronously method

// fs.openSync('uv.txt')
// console.log('file open sucessfully')