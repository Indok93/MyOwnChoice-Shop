import express from 'express';
import ProductController from '../Controllers/product.controller.js';
const controller = new ProductController();
const router = express.Router();

// Get list of all products
router.get('/products', async (req, res) => {
    const result = await controller.listAll();
    res.json(result);
});

// Get a single product by id (details)
router.get('/products/:id([0-9]*)', async (req, res) => {
    const result = await controller.getOne(req.params.id);
    res.json(result);
});

// Create a new product
router.post('/products', async (req, res) => {
    try {
        console.log(req.body); // Add this line for logging
        const { ProductName, Description, Price, Stock } = req.body;

        if (!ProductName || !Description || !Price || !Stock) {
            res.status(400).json({ error: 'Invalid request. ProductName, Description, Price, and Stock are required fields.' });
            return;
        }

        const result = await controller.create({ ProductName, Description, Price, Stock });

        res.status(201).json({
            message: 'Product created successfully',
            newId: result.id
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Update a product by id
router.put('/products', async (req, res) => {
    try {
        await controller.update(req.body);
        res.send({
            message: 'Product updated successfully'
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Delete a product by id
router.delete('/products/:id([0-9]*)', async (req, res) => {
    try {
        await controller.delete(req.params.id);
        res.send({
            message: 'Product deleted successfully'
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

export { router as ProductRouter }