import express from 'express';
import { readFileSync } from 'fs';
import path from 'path';

const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


