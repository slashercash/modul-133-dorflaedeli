import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const app: Express = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../../client/build')));

app.get('*', (_: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.listen(8080, () => console.log('Server running on port 8080'));
