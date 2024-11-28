import 'dotenv/config';
import express from 'express';
import routes from './routes/indexRoutes';

const app = express();
const port = process.env.DB_PORT;

app.use(routes);
app.listen(port);
port ? console.log(`Server on ${port}`) : console.log('Server off');
