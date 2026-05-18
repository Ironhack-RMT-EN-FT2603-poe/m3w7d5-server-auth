const router = require("express").Router();

// ℹ️ Organize and connect all your route files here.
const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes)

const privateExampleRoutes = require("./example-private-routes.routes")
router.use("/private-example", privateExampleRoutes)

module.exports = router;
