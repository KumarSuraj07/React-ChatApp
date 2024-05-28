const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "3e843852-469a-4894-9c50-955ae2bdd86b" } }
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }

    return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);

// c122e357-131d-4379-9b10-92a44f861d9d 
// 9cf62874-177b-4aad-9c0b-03888149359e