import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import Data from './data/data';
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
    const id: string = req.params.id;
    const product: Product | undefined = products.find((product) => product.id === id);
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(400).send('no product found with id: ' + id);
    }
  })
  .get('/api/cart', (req: Request, res: Response) => {
    if (!req.session.cart) req.session.cart = new Cart();
    req.session.cart.elements.forEach((element: CartElement) => {
      const product: Product = products.find((product: Product) => element.productId === product.id);
      element.productName = product.productName;
      element.singlePrice = product.specialOffer;
      element.totalPrice = product.specialOffer * element.count;
    });
    req.session.cart.totalCartPrice = req.session.cart.elements.reduce(
      (total: number, element: CartElement) => total + element.totalPrice,
      0
    );
    res.status(200).send(req.session.cart);
  })
  .put('/api/cart/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const product: Product | undefined = products.find((product) => product.id === id);
    if (!product) res.status(400).send('no product found with id: ' + id);
    if (!req.session.cart) req.session.cart = new Cart();
    const index = req.session.cart.elements.findIndex((element: CartElement) => element.productId === product.id);
    if (index >= 0) {
      req.session.cart.elements[index].count++;
    } else {
      req.session.cart.elements.push(
        new CartElement({
          productId: product.id,
          count: 1,
        })
      );
    }
    res.status(200).send('cart updated');
  })
  .delete('/api/cart/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const product: Product | undefined = products.find((product) => product.id === id);
    if (!product) res.status(400).send('no product found with id: ' + id);
    if (!req.session.cart) req.session.cart = new Cart();
    const index = req.session.cart.elements.findIndex((element: CartElement) => element.productId === product.id);
    if (index < 0) res.status(400).send('cart has no element found with id: ' + id);
    if (req.session.cart.elements[index].count === 1) {
      req.session.cart.elements.splice(index);
    } else {
      req.session.cart.elements[index].count--;
    }
    res.status(200).send('cart updated');
  })

  .get('*', (_: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });

app.listen(prodPort, () => console.log('Server running on port ' + prodPort));
