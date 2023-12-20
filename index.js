import express from 'express';
import { CategoryRouter } from './Routes/category.router.js';
import { ProductRouter } from './Routes/product.router.js';
import { SyncRouter } from './Routes/sync.router.js';

const port = process.env.PORT || 4000;
const app = express();
app.use(express.urlencoded({ extended: true }));

// Enable JSON parsing middleware
app.use(express.json());

app.use(CategoryRouter, ProductRouter, SyncRouter);

app.listen(port, () => {
    console.log(`Server kører på port http://localhost:${port}`);
});