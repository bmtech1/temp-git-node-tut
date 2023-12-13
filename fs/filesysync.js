const {readFileSync, writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./first.txt', 'utf8')
const second = readFileSync('./second.txt', 'utf8')

//console.log(first, second)

writeFileSync('./result-sync.txt', 
                'Here is the result :\n' + 
                first + '\n' + second, 
                {flag: 'a'}
                )

console.log('Task done')

const result = readFileSync('./result-sync.txt', 'utf8')

console.log(result)