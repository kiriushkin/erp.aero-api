import 'dotenv/config';
import './sequelize.js';
import './cronjob.js';
import fs from 'fs';
import http from 'http';
import https from 'https';
import cors from 'cors';
import express from 'express';
import routes from './routes.js';
import docs from './docs/index.js';

const { NODE_ENV, SSL_PATH, HOST, PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: '*' }));

app.use('/api', routes);
app.use('/docs', docs);

if (NODE_ENV === 'production') {
  const httpsServer = https.createServer(
    {
      key: fs.readFileSync(`${SSL_PATH}/privkey.pem`),
      cert: fs.readFileSync(`${SSL_PATH}/fullchain.pem`),
    },
    app
  );
  httpsServer.listen(PORT);
}

if (NODE_ENV === 'development') {
  const httpServer = http.createServer(app);
  httpServer.listen(PORT);
}
