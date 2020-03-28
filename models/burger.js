const orm = require("../config/orm.js");

module.exports.getAll = orm.getAll



module.exports.insertOne = function (burger_name, callback) {
    orm.insertOne(burger_name, callback)
    // console.log(res)
}




// module.exports.updateOne = orm.updateOne({ devoured: 1, id: 4 }, function (res) {
//     console.log(res)
// })

module.exports.updateOne = function (burger_id) {
  orm.updateOne({ devoured: 1, id: burger_id }, function (res) {
      console.log(res)
  })
}

// module.exports.addBurger = async function (burgerName) {
//   return new Promise(function(resolve, reject) {
//     orm.insertOne()
//   });
// }


// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var cat = {
//   all: function(cb) {
//     orm.all("cats", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("cats", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("cats", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = cat;
