var express = require('express');
var router = express.Router();

const joueur_controller = require("../controllers/joueurController");
const pays_controller = require("../controllers/paysController");
const coup_controller= require ("../controllers/historiqueController")

//GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET catalog home page.
//router.get("/", coup_controller.index);

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get("/coup/create", coup_controller.coup_create_get);

// POST request for creating Author.
router.post("/coup/create", coup_controller.coup_create_post);

// GET request to delete Author.
router.get("/coup/:id/delete", coup_controller.coup_delete_get);

// POST request to delete Author.
router.post("/coup/:id/delete", coup_controller.coup_delete_post);

// GET request for list of all Authors.
router.get("/historique", coup_controller.coup_list);

module.exports = router;

