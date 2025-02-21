import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
