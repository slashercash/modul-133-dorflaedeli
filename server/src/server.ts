import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import Data from './data/data';
import Product from 'dorflaedeli-product';

let products: Product[] = Data.products;

const app: Express = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../../client/build')));

app
  .get('/products', (_: Request, res: Response) => {
    res.send(products);
  })
  .get('*', (_: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });

app.listen(8080, () => console.log('Server running on port 8080'));
