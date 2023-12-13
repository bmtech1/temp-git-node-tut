const http = require('http')
const _ = require('lodash')

const server = http.createServer((req, res) => {
    //console.log(req)
    if(req.url === '/') {
        res.end('This is the home page!!!! Welcome Again')
    }
    else if(req.url === '/about') {
        res.end('This is our ABOUT Page!!!!')
    }
    else {
        res.end('<h1>Oops</h1>' +
        '<p>Page cannot be found</p>'
        )
    }
    
})

server.listen(5000)
