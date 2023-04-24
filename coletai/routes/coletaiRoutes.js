var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/home', function(req, res, next) {
  res.render('home.html');
});

router.get('/login', function(req, res, next) {
  res.render('login.html');
});

router.get('/cadastro-usuario', function(req, res, next) {
  res.render('cadastro-usuario.html');
});

router.get('/edita-usuario', function(req, res, next) {
  res.render('edita-usuario.html');
});

router.get('/pontos-de-coleta', function(req, res, next) {
  res.render('todos-pontos.html');
});

router.get('/cadastro-ponto', function(req, res, next) {
  res.render('cadastro-ponto.html');
});

router.get('/edita-ponto', function(req, res, next) {
  res.render('edita-ponto.html');
});

router.get('/visualizar-ponto/:id', function(req, res, next) {
  res.render('visualizar-ponto.html');
});

router.get('/meus-pontos-de-coleta', function(req, res, next) {
  res.render('meus-pontos.html');
});

/* POST */
router.post('/api/usuarios', function(req, res, next) {
  console.log(req.body);
  res.send({status:"Ok"});
});

router.post('/api/ponto-coleta', function(req, res, next) {
  console.log(req.body);
  res.send({status:"Ok"});
});

/* PUT */
router.put('/edita-usuario/:id', function(req, res, next) {});

router.put('/edita-ponto/:id', function(req, res, next) {});

/* DELETE */
router.delete('/edita-ponto/:id', function(req, res, next) {});

module.exports = router;
