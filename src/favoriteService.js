const uuid = require('uuid');

class FavoriteService {
    constructor() {
        this._favorites = [];
    }

    /**
     * @param {{title: string, movies: string[]}} favorite 
     * @returns 
     */
    addFavorite(favorite) {
        const id = uuid.v4();
        this._favorites = [...this._favorites, { ...favorite, id }]
        return id;
    }

    getById(id) {
        return this._favorites.find(f => f.id === id);
    }

    getAll() {
        return [...this._favorites];
    }
}

module.exports = FavoriteService;