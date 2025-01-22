import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';

// Route Import
import projectRoutes from './routes/projectRoutes';
import taskRoutes from './routes/taskRoutes';
import searchRoutes from './routes/searchRoutes';
import userRoutes from './routes/userRoutes';
import teamRoutes from './routes/teamRoutes';

// Config

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginEmbedderPolicy({ policy: 'require-corp' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});


app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
app.use("/search", searchRoutes);
app.use("/users", userRoutes);
app.use("/teams", teamRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 