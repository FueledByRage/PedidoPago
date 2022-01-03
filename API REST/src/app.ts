import express from "express";
import { router } from "./routes";
import * as path from 'path';

const app = express();
app.use(express.json());

app.use(router)
app.use('/upload', express.static(path.resolve(__dirname, 'uploads')));

export { app };