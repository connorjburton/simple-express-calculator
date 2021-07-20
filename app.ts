import express, { Request, Response } from 'express';

import Calculator from './calc';

function parseBody(body: string[]): number[] {
    return body.map((val) => parseInt(val, 10));
}

export default function(): express.Application {
    const app = express();
    app.use(express.json());
    // Cast results to strings otherwise express thinks we are trying to send a status
    app.post('/api/add', (req: Request, res: Response): Response => {
        const body = parseBody(req.body);
        return res.send(String(Calculator.add(body)))
    });
    app.post('/api/subtract', (req: Request, res: Response): Response => {
        const body = parseBody(req.body);
        return res.send(String(Calculator.subtract(body)))
    });
    app.post('/api/divide', (req: Request, res: Response): Response => {
        const body = parseBody(req.body);
        return res.send(String(Calculator.divide(body)))
    });
    app.post('/api/multiply', (req: Request, res: Response): Response => {
        const body = parseBody(req.body);
        return res.send(String(Calculator.multiply(body)))
    });
    return app;
}