const { Router } = require("express");
const router = Router();

router.route("/").get().post();
router.route("/:id").get().put().delete();

module.exports = router;
