import got, { Response} from 'got';
import { Server } from 'http';

import app from './app';

const PORT = 3001;
const URL = `http://localhost:${PORT}`;

describe('e2e', () => {
    let connection: Server;

    beforeAll(() => {
        connection = app().listen(PORT);
    });

    afterAll(() => {
        connection.close();
    })

    test('add', async () => {
        const response: Response = await got.post(`${URL}/api/add`, { json: [1, 2] });
        expect(response.body).toBe('3');
    });

    test('subtract', async () => {
        const response: Response = await got.post(`${URL}/api/subtract`, { json: [1, 2] });
        expect(response.body).toBe('-1');
    });

    test('multiply', async () => {
        const response: Response = await got.post(`${URL}/api/multiply`, { json: [5, 2] });
        expect(response.body).toBe('10');
    });

    test('divide', async () => {
        const response: Response = await got.post(`${URL}/api/divide`, { json: [5, 2] });
        expect(response.body).toBe('2.5');
    });
});