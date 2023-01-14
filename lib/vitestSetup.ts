import { beforeAll, afterEach, afterAll } from 'vitest';

import { server } from './mock/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
