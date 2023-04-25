var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res) {
  res.render('index.html');
});

router.get('/home', function(req, res) {
  res.render('home.html');
});

router.get('/login', function(req, res) {
  res.render('login.html');
});

router.get('/cadastro-usuario', function(req, res) {
  res.render('cadastro-usuario.html');
});

router.get('/edita-usuario', function(req, res) {
  res.render('edita-usuario.html');
});

router.get('/pontos-de-coleta', function(req, res) {
  res.render('todos-pontos.html');
});

router.get('/cadastro-ponto', function(req, res) {
  res.render('cadastro-ponto.html');
});

router.get('/edita-ponto', function(req, res) {
  res.render('edita-ponto.html');
});

router.get('/visualizar-ponto/:id', function(req, res) {
  res.render('visualizar-ponto.html');
});

router.get('/meus-pontos-de-coleta', function(req, res) {
  res.render('meus-pontos.html');
});

/* POST */
router.post('/api/usuarios', function(req, res) {
  console.log(req.body);
  res.send({status:"Ok"});
});

router.post('/api/ponto-coleta', function(req, res) {
  console.log(req.body);
  res.send({status:"Ok"});
});

module.exports = router;
