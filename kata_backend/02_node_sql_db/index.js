import express from 'express';
import routes from './routers/index.js';
import { showTime} from './middlewares/index.js';
import { errors } from 'celebrate';
import dotenv from 'dotenv';
import expressWinston from 'express-winston';
import winston from 'winston'; // for transports.Console

dotenv.config({ path: '.env' });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express-winston logger makes sense BEFORE the router
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

app.get("/", [showTime], (_, res) => res.status(200).json({ message: "Hello World" }));
app.use('/api/v1', routes);
app.use(errors());
// express-winston logger makes sense BEFORE the router
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
