const { body, validationResult } = require("express-validator");

const Joueur = require("../models/joueur");

// Display list of all Authors.
exports.joueur_list = (req, res) => {
  res.send("NOT IMPLEMENTED: Joueur list");
};

// Display detail page for a specific Author.
exports.joueur_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Joueur detail: ${req.params.id}`);
};

// Display Author create form on GET.
exports.joueur_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Joueur create GET");
};

// Handle Author create on POST.
exports.joueur_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Joueur create POST");
};

// Display Author delete form on GET.
exports.joueur_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Joueur delete GET");
};

// Handle Author delete on POST.
exports.joueur_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Joueur delete POST");
};

// Display Author update form on GET.
exports.joueur_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Joueur update GET");
};

// Handle Author update on POST.
exports.joueur_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Joueur update POST");
};
