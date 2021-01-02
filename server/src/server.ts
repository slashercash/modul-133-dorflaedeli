import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import Data from './data/data';
import Logic from './logic';
import Cart, { CartElement } from 'dorflaedeli-cart';
import Product from 'dorflaedeli-product';
import session from 'express-session';
declare module 'express-session' {
  interface SessionData {
    cart: Cart;
  }
}

const prodPort: number = 8080;
const devPort: number = 8090;
const products: Product[] = Data.products;

const app: Express = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../client/build')));
app.use(express.static(path.join(__dirname, './data/pictures')));
app.use(session({ secret: 'd0rflæde|1', cookie: { maxAge: 86400000 }, resave: true, saveUninitialized: true }));
app.use(cors({ credentials: true, origin: ['http://localhost:' + prodPort, 'http://localhost:' + devPort] }));
app
  .get('/api/products', (_: Request, res: Response) => {
    res.status(200).send(products);
  })
  .get('/api/products/:id', (req: Request, res: Response) => {
    const product: Product | undefined = products.find((product) => product.id === req.params.id);
    if (product) res.status(200).send(product);
    else res.status(400).send('no product found with id: ' + req.params.id);
  })
  .get('/api/cart', (req: Request, res: Response) => {
    req.session.cart = Logic.refreshCart(req.session.cart, products);
    res.status(200).send(req.session.cart);
  })
  .put('/api/cart/:id', (req: Request, res: Response) => {
    const product: Product | undefined = products.find((product) => product.id === req.params.id);
    if (!product) res.status(400).send('no product found with id: ' + req.params.id);

    req.session.cart = Logic.putCartElement(req.session.cart, product);
    res.status(200).send('cart updated');
  })
  .delete('/api/cart/:id', (req: Request, res: Response) => {
    const product: Product | undefined = products.find((product) => product.id === req.params.id);
    if (!product) res.status(400).send('no product found with id: ' + req.params.id);

    const index: number | undefined = req.session.cart?.elements.findIndex((element: CartElement) => element.productId === product.id);
    if (index === undefined || index < 0) res.status(400).send('cart has no element found with id: ' + product.id);

    req.session.cart = Logic.deleteCartElement(req.session.cart, index);
    res.status(200).send('cart updated');
  })
  .put('/api/purchase', (req: Request, res: Response) => {
    if (Logic.validatePurchase(req.body)) {
      req.session.cart = new Cart();
      res.status(200).send('cart cleared');
    } else res.status(204).send('invalid credentials');
  })
  .get('*', (_: Request, res: Response) => res.sendFile(path.join(__dirname, '../../client/build/index.html')));

app.listen(prodPort, () => console.log('Server running on port ' + prodPort));
