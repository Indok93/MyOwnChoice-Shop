import express from 'express';
import CategoryController from '../Controllers/category.controller.js';
const controller = new CategoryController();
const router = express.Router();

// Get list of all categories
router.get('/categories', async (req, res) => {
    const result = await controller.listAll();
    res.json(result);
});

// Get a single category by id (details)
router.get('/categories/:id([0-9]*)', async (req, res) => {
    const result = await controller.getOne(req.params.id);
    res.json(result);
});

// Create a new category
router.post('/categories', async (req, res) => {
    try {
        console.log(req.body); // Add this line for logging
        const { title, is_active } = req.body;

        if (!title || typeof is_active !== 'boolean') {
            res.status(400).json({ error: 'Invalid request. Title and is_active are required fields.' });
            return;
        }

        const result = await controller.create({ title, is_active });

        res.status(201).json({
            message: 'Category created successfully',
            newId: result.id
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a category by id
router.put('/categories', async (req, res) => {
    try {
        await controller.update(req.body);
        res.send({
            message: 'Category updated successfully'
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Delete a category by id
router.delete('/categories/:id([0-9]*)', async (req, res) => {
    try {
        await controller.delete(req.params.id);
        res.send({
            message: 'Category deleted successfully'
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

export { router as CategoryRouter }