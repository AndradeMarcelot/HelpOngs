const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController'); 
const IncidentController = require('./controllers/IncidentController'); 
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;


/**
 * Query Params:  http://localhost:3333/users?name="Marcelo"&idade=27   filtros e paginação após '?'  /users
 * Route Params: usado para identificar recursos    /users/:id
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * NoSQL: MongoDB, CounchDB, etc
  * Driver: SELECT * FROM users  (Pacote oficial do BD para Node)
  * Query Builder: table('user').select('*').where()    Iremos usar o KNEX.JS - knexjs.org
  */