const server = require('./index');
const request = require('supertest');
const Post = require('./post');

describe('index', () => {
  describe('GET - /posts', () => {
    const exec = async () => {
      return await request(server).get('/api/posts/all');
    };

    it('GETs posts and returns status 200', async () => {
      const res = await exec();
      expect(res.status).toBe(200);
    });

    it('should return status 500 when failed to retrieve posts', async () => {
      const mockFind = jest.spyOn(Post, 'find');
      mockFind.mockRejectedValue(new Error('Failed to retrieve posts'));

      const res = await exec();
      expect(res.status).toBe(500);
      mockFind.mockRestore();
    });
  });
})
