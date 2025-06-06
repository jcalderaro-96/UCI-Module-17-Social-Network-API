// updated routes/api/thoughtRoutes.js with full Thought routes linked to controller

const router = require('express').Router(); // create router
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController'); // import Thought controller methods

// /api/thoughts - GET all thoughts
router.get('/', getAllThoughts);

// /api/thoughts/:id - GET thought by id
router.get('/:id', getThoughtById);

// /api/thoughts - POST create new thought
router.post('/', createThought);

// /api/thoughts/:id - PUT update thought by id
router.put('/:id', updateThought);

// /api/thoughts/:id - DELETE thought by id
router.delete('/:id', deleteThought);

// /api/thoughts/:thoughtId/reactions - POST add reaction to thought
router.post('/:thoughtId/reactions', addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId - DELETE reaction from thought
router.delete('/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router; // export router
// end of file
