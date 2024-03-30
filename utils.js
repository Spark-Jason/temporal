const os = require("os")
const user = os.userInfo()

console.log(user)

const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)
console.log(path.basename)

const {readFileSync, writeFileSync} =require("fs")

const first = readFileSync('./content/first.txt', "utf8")
const second = readFileSync('./content/second.txt','utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here i the result : ${first}, ${second}`
)