// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('comments.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
}
);

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
}
);
// In the terminal, run the comments.js file using Node.js. Open a web browser and navigate to http://localhost:3000. You should see the comments.html file displayed in the browser.

