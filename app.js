const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./Connection/conns.js');
const blogs = require('./Routes/Blogs-router.js');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.use('/api/v1', blogs);

app.listen(PORT, () => {
    console.log(`Running on server at http://localhost:${PORT}`);
});