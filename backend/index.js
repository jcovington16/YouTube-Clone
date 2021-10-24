const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const cors = require('cors');
const comment = require('./routes/comments');

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/comment', comment);


const port = process.env.PORT || 5001;
app.listen(port,() => {
    console.log(`Server started on port: ${port}`);
})
