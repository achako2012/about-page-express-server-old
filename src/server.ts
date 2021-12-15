import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import middlewares from './middlewares.js';
import authRoutes from './routes/auth.js';
import workRoutes from './routes/work.js';
import aboutRoutes from './routes/about.js';
import articlesRoutes from './routes/articles.js';

const server = express();
const PORT = process.env.PORT || '3001';

const uri = process.env.MONGODB_URI
    || 'mongodb+srv://alex:chako2012@cluster0.t6ctu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

await mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const allowedOrigins = ['http://localhost:3000', 'https://aboutalexapp.herokuapp.com'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

server.use(cors(options));

// Data parsing
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  server.use(express.static('client/build'));
}

server.use(middlewares.requestTime);
server.use(middlewares.logger);

const baseService = '/about-page-service';

server.use(baseService, authRoutes);
server.use(baseService, workRoutes);
server.use(baseService, aboutRoutes);
server.use(baseService, articlesRoutes);

server.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
