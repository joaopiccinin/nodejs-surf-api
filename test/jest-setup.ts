import { SetupServer } from '@src/server';
import supertest from 'supertest';

let server: SetupServer;
beforeAll(async () => {
    server = new SetupServer();
    await server.init();
    global.testRequest = supertest(
        server.getApp()
    ) as unknown as supertest.SuperTest<supertest.Test>;
});

afterAll(async () => await server.close());
