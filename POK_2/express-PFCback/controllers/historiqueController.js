const { body, validationResult } = require("express-validator");

const Coup = require("../models/coup");
const async = require("async");

exports.index = (req, res) => {
  async.parallel(
    {
      coup_count(callback) {
        Coup.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
      },
    },
    (err, results) => {
      res.render("index", {
        title: "Historique",
        error: err,
        data: results,
      });
    }
  );
};

// Display list of all Books.
exports.coup_list = function (req, res, next) {
    Coup.find()
    .populate("date")
      .exec(function (err, list_coups) {
        if (err) {
          return next(err);
        }
        //Successful, so render
        res.render("coup_list", { title: "Historique de coup", coup_list: list_coups });
      });
  };

// Display Author create form on GET.
exports.coup_create_get = (req, res) => {
  res.render("index");
};

// Handle Author create on POST.
exports.coup_create_post =  [
  // Validate and sanitize fields.
  body("name"),
    // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      res.render("index", {
        coup: req.body,
        errors: errors.array(),
      });
      return;
    }
    // Data from form is valid.

    // Create an Author object with escaped and trimmed data.
    const coup = new Coup({
      name: req.body.name,
      //date: req.body.date,
    });
    coup.save((err) => {
      if (err) {
        return next(err);
      }
      // Successful - redirect to new author record.
      res.redirect(coup.url);
    });
  },
];

// Display Author delete form on GET.
exports.coup_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Joueur delete GET");
};

// Handle Author delete on POST.
exports.coup_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Joueur delete POST");
};

// Display Author update form on GET.
exports.coup_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Joueur update GET");
};

// Handle Author update on POST.
exports.coup_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Joueur update POST");
};