console.clear();

const PORT = 3200;

const express = require('express');
const cors = require('cors');
const FavoriteService = require('./favoriteService');

const app = express();

app.use(express.json());
app.use(cors());

const favService = new FavoriteService();

app.post('/favorite', (req, res) => {
    const id = favService.addFavorite(req.body);
    res.json({ id });
});

app.get('/favorite', (req, res) => {
    res.json(favService.getAll());
});

app.get('/favorite/:id', (req, res) => {
    const id = req.params.id;
    const fav = favService.getById(id);
    if (fav) {
        res.json(fav);
    } else {
        res.sendStatus(404);
    }
});

app.listen(PORT, () => {
    console.log(`Your express app is listening on ${PORT} port, send requests to http://localhost:${PORT}/`);
});
