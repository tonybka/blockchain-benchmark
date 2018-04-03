'user strict'

var express = require('express');
var http = require('http');
var websocket = require('ws');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var routemain = require('./routes');
var routeapi_v1 = require('./api/routes/route_api_v1');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routemain);
app.use('/api/v1', routeapi_v1);


app.use(function (err, req, res, next) {

    let errorType = typeof err,
        code = 500,
        msg = {
            message: "EXCEPTION: Internal Server Error"
        };

    switch (err.name) {
        case "UnauthorizedError":
            code = err.status;
            msg = {"message": "Access Denined"};
            break;
        case "BadRequestError":
        case "UnauthorizedAccessError":
        case "NotFoundError":
            code = err.status;
            msg = err.inner;
            break;
        default:
            msg = {
                message: "EXCEPTION: Unknown Internal Server Error"
                , detail: err.message
            };
            break;
    }

    return res.status(code).json(msg);

});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});






