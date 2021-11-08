const fs = require('fs');

const requestHandler = (req, res) => {
    const requestUrl = req.url;
    const requestMethod = req.method;
    if (requestUrl === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (requestUrl === '/message' && requestMethod === 'POST') {
        const requestBody = [];
        req.on('data', (chunk) => {
            requestBody.push(chunk);
        });
        // *** for handling bigger messages ***
        // return req.on('end', () => {
        //     const parsedBody = Buffer.concat(requestBody).toString();
        //     fs.writeFile('message.txt', parsedBody.split('=')[1], err => {
        //         res.statusCode = 302;
        //         res.setHeader('Location', '/');
        //         return res.end();
        //     });    
        // });
        req.on('end', () => {
            const parsedBody = Buffer.concat(requestBody).toString();
            fs.writeFileSync('message.txt', parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Test</title></head>');
    res.write('<body><h1>Hello! this is first nodeJs server.</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;