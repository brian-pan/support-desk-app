const express = require("express");
const router = express.Router({ mergeParams: true });
const { getNotes } = require("../controllers/noteController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getNotes).post(protect, addNote);

module.exports = router;

// api/tickets/:ticketId/notes
// go to ticketRoute and do:
//    const noteRouter = require("./noteRoutes");
//    router.use("/:ticketId/notes, noteRouter");
