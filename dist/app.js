"use strict";

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _DataApi = _interopRequireDefault(require("./DataApi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var {
  data
} = require('../data/data');

_DataApi.default.init(data);

var app = (0, _express.default)();
app.use(_express.default.static('public'));
app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
  res.render('index');
});
app.get('/data', (req, res) => {
  res.send(_DataApi.default.getAllData());
});
app.get('/users', (req, res) => {
  res.send(_DataApi.default.getUsers());
});
app.get('/points', (req, res) => {
  res.send(_DataApi.default.getPoints());
});
app.get('/user/:id', (req, res) => {
  var id = req.params.id;
  res.send(_DataApi.default.getUser(id));
});
app.get('/point/:id', (req, res) => {
  var id = req.params.id;
  res.send(_DataApi.default.getUser(id));
  /*test*/
});
app.get('/user/points/:id', (req, res) => {
  var id = req.params.id;
  res.send(_DataApi.default.getUserPoint(id));
});
app.listen(_config.default.port, function listenHandler() {
  console.info(`Running  on ${_config.default.port}...`);
});