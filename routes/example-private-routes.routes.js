const router = require("express").Router();

const verifyToken = require("../middlewares/auth.middlewares")

//! EXAMPLE OF HOW A PRIVATE ROUTE MIGHT LOOK LIKE
router.get("/", verifyToken, (req, res) => {

  console.log(req.payload)

  // imagine this route is for getting the details of user profile
  // User.findById(req.payload._id)

  // imagine that this route is for creating a document
  // Document.create({ ... some info, owner: req.payload._id})

  // imagine that this route is for deleting a document (only for the owner)
  // Document.findById(documentId)
  // conditional: document.owner == req.payload._id (only then, delete the document)

  res.send("sending super secret information")

})

module.exports = router;