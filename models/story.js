'user strict';
var dbConn = require('../config/db');

//Story object create
var Story = function(story) {
    this.league = story.league;
    this.team = story.team;
    this.biggest_rival = story.biggest_rival;
    this.best_player = story.best_player;
    this.best_moment = story.best_moment;
    this.best_story = story.best_story;
    this.created_at = new Date();
    this.updated_at = new Date();
};
Story.create = function(newStory, result) {
    dbConn.query("INSERT INTO stories set ?", newStory, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Story.findById = function(id, result) {
    dbConn.query("Select * from stories where id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Story.findAll = function(result) {
    dbConn.query("Select * from stories", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('stories : ', res);
            result(null, res);
        }
    });
};
Story.update = function(id, story, result) {
    dbConn.query("UPDATE stories SET league=?,team=?,biggest_rival=?,best_player=?,best_moment=?,best_story=? WHERE id = ?", [story.league, story.team, story.biggest_rival, story.best_player, story.best_moment, story.best_story, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Story.delete = function(id, result) {
    dbConn.query("DELETE FROM stories WHERE id = ?", [id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Story;