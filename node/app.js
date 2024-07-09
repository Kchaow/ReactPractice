const express = require("express");
const path = require('path');
const app = express();

app.use(
    express.static(__dirname + '/static')
);

app.get("/hello", function(request, response) {
    response.sendFile(path.join(__dirname+'/examples/hello.html'));
});

app.get("/time", function(request, response) {
    response.sendFile(path.join(__dirname+'/examples/time.html'));
});

app.get('/component', function(request, response) {
    response.sendFile(path.join(`${__dirname}/examples/component_example.html`));
});

app.get('/prop', function(request, response) {
    response.sendFile(path.join(`${__dirname}/examples/prop_example.html`));
});

app.get('/event', function(request, response) {
    response.sendFile(path.join(`${__dirname}/examples/event.html`));
});

app.listen(3000);
