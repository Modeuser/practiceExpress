const http = require('http')
const {readFileSync} = require('fs')

// get all files
// we can use rf-sync here because we're only requesting this when server starts
// not everytime someone makes a request
const homePage = readFileSync('./navbar-app/index.html')

const server = http.createServer((req, res) => {
    const url = req.url
    
    if (url === '/') {
        // home page
        // if we set the content-type to 'text/plain', it'll output the raw html
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    } else if (url == '/about'){
        // return about
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>')
        res.end()
    } else {
        // return 404
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5012)