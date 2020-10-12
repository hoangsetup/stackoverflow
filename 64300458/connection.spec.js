const conns = require('./connection');
const sinon = require('sinon');
const mysql2 = require('mysql2/promise');

describe('connection', () => {
  afterEach(() => {
    sinon.restore();
  });

  test('Test creatPool function from connection class', async () => {
    const options = {
      host: 'testHost',
      user: 'testUser',
      password: 'testPassword'
    };

    const createPoolStub = sinon.stub(mysql2, 'createPool').returns(sinon.stub().returnsThis());
    const conn = new conns.Connection(options);
    await conn.createPool();
    sinon.assert.calledOnce(createPoolStub);
    sinon.assert.calledWithExactly(createPoolStub, {
      host: 'testHost',
      user: 'testUser',
      password: 'testPassword',
      database: 'my_db',
      ssl: 'Amazon RDS',
      authPlugins: {
        mysql_clear_password: sinon.match.func,
        // mysql_clear_password: () => () => Buffer.from(options.password + '\0'),
      },
    });
  });
});
