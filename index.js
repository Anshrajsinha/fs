const fs = require('fs')

const filesName = fs.readdirSync(__dirname + "/dir/")

console.log(filesName)