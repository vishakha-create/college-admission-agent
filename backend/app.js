
// Express server setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ragService = require('./services/ragService');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/ask', async (req, res) => {
    const { query } = req.body;
    const answer = await ragService.getAnswer(query);
    res.json({ response: answer });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
