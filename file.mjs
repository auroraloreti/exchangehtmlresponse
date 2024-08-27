import { createServer } from "node:http"

const server = createServer((req,res) => {
    console.log('request received')

    Response.statusCode = 200 

    Response.setHeader('content-type', 'text/html')

    Response.end('<html><body><h1>richiesta inviata con successo</h1></body></html>')
} ) 

server.listen (3000, () => {
    console.log(`server running at http//localhost:3000`)
})