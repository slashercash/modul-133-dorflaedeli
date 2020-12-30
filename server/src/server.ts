import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import Data from './data/data';
import Cart, { parseCart } from 'dorflaedeli-cart';
import Product from 'dorflaedeli-product';
import session from 'express-session';
declare module 'express-session' {
  interface SessionData {
    cart: Cart;
  }
}

const products: Product[] = Data.products;

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../client/build')));
app.use(express.static(path.join(__dirname, './data/pictures')));
app.use(session({ secret: 'd0rflæde|1', cookie: { maxAge: 86400000 }, resave: true, saveUninitialized: true }));

app
  .get('/api/products', (_: Request, res: Response) => {
    res.status(200).send(products);
  })
  .get('/api/products/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const product: Product | undefined = products.find((product) => product.id === id);
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(400).send('no product found with id: ' + id);
    }
  })
  .get('/api/cart', (req: Request, res: Response) => {
    if (!req.session.cart) {
      req.session.cart = new Cart();
    }
    res.status(200).send(req.session.cart);
  })
  .post('/api/cart', (req: Request, res: Response) => {
    const cart: Cart | undefined = parseCart(req.body);
    if (cart) {
      req.session.cart = cart;
      res.status(200).send('cart updated');
    } else {
      res.status(400).send('bad request');
    }
  })
  .get('*', (_: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });

app.listen(8080, () => console.log('Server running on port 8080'));
