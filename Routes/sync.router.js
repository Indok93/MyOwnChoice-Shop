import express from 'express';
import sequelize from '../Config/db.sequelize.js';
import Category from '../Models/category.model.js';
const router = express.Router();


// Syncronize sequelize models
router.get('/sync', (req, res) => {
    sequelize.sync({ force: true});
    res.send({
        message: 'Synkroniser modeller'
    });
});

export { router }