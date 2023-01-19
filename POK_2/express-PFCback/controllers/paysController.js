const Pays = require("../models/pays");
const Joueur = require("../models/joueur");

const async = require("async");

exports.index = (req, res) => {
  async.parallel(
    {
      pays_count(callback) {
        Pays.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
      },
      joeur_count(callback) {
        Joueur.countDocuments({}, callback);
      },
    },
    (err, results) => {
      res.render("index", {
        title: "Accueil PFC",
        error: err,
        data: results,
      });
    }
  );
};


// Display list of all Authors.
exports.pays_list = (req, res) => {
  res.send("NOT IMPLEMENTED: Pays list");
};

// Display detail page for a specific Author.
exports.pays_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Pays detail: ${req.params.id}`);
};

// Display Author create form on GET.
exports.pays_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Pays create GET");
};

// Handle Author create on POST.
exports.pays_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Pays create POST");
};

// Display Author delete form on GET.
exports.pays_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Pays delete GET");
};

// Handle Author delete on POST.
exports.pays_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Pays delete POST");
};

// Display Author update form on GET.
exports.pays_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Joueur update GET");
};

// Handle Author update on POST.
exports.pays_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Pays update POST");
};
