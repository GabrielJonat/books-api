import './helpers.js';

describe('Routes books', () => {
  it('deve responder 200 na raiz', async () => {
    const res = await global.request.get('/');
    global.expect(res.status).to.equal(200);
  });
});