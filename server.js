const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json())

app.get('/', (req, res) => {
    res.send("A simple app that lets users add, share and edit football information created using express and mysql");
});

const dataRoutes = require('./routes/story_routes')

app.use('/api/v1/stories', dataRoutes)

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});