describe('Create session', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('creates the session', async () => {
    const req = {
      unitAmount: 100,
      imageUrl: '',
      metadata: {
        userId: '1'
      }
    };

    jest.doMock('stripe', () => {
      return jest.fn(() => ({
        checkout: {
          sessions: {
            create: jest.fn(() => Promise.resolve({
              sessionId: '123' // 
            })),
          },
        },
      }));
    });

    const { CreateSessionRequest } = require('./index');
    const resp = await CreateSessionRequest(req);
    expect(resp.sessionId).toBe('123');
  });
});
