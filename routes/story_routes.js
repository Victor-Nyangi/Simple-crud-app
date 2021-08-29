const express = require('express')
const router = express.Router()
const storyController = require('../controllers/story_controller');

// Retrieve all stories
router.get('/', storyController.findAll);

// Create a new story
router.post('/', storyController.create);

// Retrieve a single story using an id
router.get('/:id', storyController.findById);

// Update a story using an id
router.put('/:id', storyController.update);

// Delete a story using an id
router.delete('/:id', storyController.delete);

module.exports = router