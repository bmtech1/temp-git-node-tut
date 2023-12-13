const os = require('os')

const user = os.userInfo() 
console.log(user)

//console.log('System info ' + os.uptime() + 'seconds')

const upTimeinHrs = os.uptime/60/60
//console.log(upTimeinHrs)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem()
}

console.log(currentOS)

const path = require('path')

console.log(path.sep)

const filePath = path.join('/testexport1', 'names.js')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)
const absolutePath = path.resolve(__dirname, 'testexport1', 'names.js')
console.log(absolutePath)
