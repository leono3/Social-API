const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtResponse,
  removeThoughtResponse,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/responses").post(addThoughtResponse);

router.route("/:thoughtId/responses/:responseId").delete(removeThoughtResponse);

module.exports = router;
