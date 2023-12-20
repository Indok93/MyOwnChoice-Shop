// importerer required moduler og routere herunder
import express from 'express';
import { CategoryRouter } from './Routes/category.router.js';
import { ProductRouter } from './Routes/product.router.js';
import { SyncRouter } from './Routes/sync.router.js';

// Definer porten for serveren at lytte på
const port = process.env.PORT || 4000;
// Opretter express app
const app = express();

app.use(express.urlencoded({ extended: true }));

// Enable JSON parsing middleware
app.use(express.json());

app.use(CategoryRouter, ProductRouter, SyncRouter);

app.listen(port, () => {
    console.log(`Server kører på port http://localhost:${port}`);
});