'use strict';

const Story = require('../models/story');

exports.findAll = function(req, res) {
    Story.findAll(function(err, story) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', story);
        res.send(story);
    });
};


exports.create = function(req, res) {
    const new_story = new Story(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Story.create(new_story, function(err, story) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Story added successfully!", data: story });
        });
    }
};


exports.findById = function(req, res) {
    Story.findById(req.params.id, function(err, story) {
        if (err)
            res.send(err);
        res.json(story);
    });
};


exports.update = function(req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Story.update(req.params.id, new Story(req.body), function(err) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Story updated successfully' });
        });
    }

};


exports.delete = function(req, res) {
    Story.delete(req.params.id, function(err) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Story successfully deleted' });
    });
};