const express = require("express");
const path = require('path');
const app = express();

app.use(
    express.static(__dirname + '/static')
);

app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname+'/examples/routing.html'));
});

app.get("/about", function(request, response) {
    response.sendFile(path.join(__dirname+'/examples/routing.html'));
});

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

app.get('/state', function(request, response) {
    response.sendFile(path.join(`${__dirname}/examples/state.html`));
});

app.get('/state-update', function(request, response) {
    response.sendFile(path.join(`${__dirname}/examples/state_update.html`));
});

app.get('/res-man', function(request, response) {
    response.sendFile(path.join(`${__dirname}/examples/resource_management.html`));
});

app.get('/form', function(request, response) {
    response.sendFile(path.join(`${__dirname}/examples/forms.html`));
});

app.get('/validation', function(request, response) {
    response.sendFile(path.join(`${__dirname}/examples/validation.html`));
});

app.get('/validation-ref', function(request, response) {
    response.sendFile(path.join(`${__dirname}/examples/validationRef.html`));
});

app.get('/hook', function(request, response) {
    response.sendFile(path.join(`${__dirname}/examples/hook.html`));
});



app.listen(3000);
