const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../controllers/blogs')
const helper = require('../test/test_helper')
const Blog = require('../model/blog')

const api = supertest(app)

beforeEach(async () => {
  await Blog.deleteMany({})
  let blogObject = new Blog(helper.initialBlogs[0])
  await blogObject.save()
  blogObject = new Blog(helper.initialBlogs[1])
  await blogObject.save()
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
},100000)

test('some blog amount', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body).toHaveLength(helper.initialBlogs.length)
})

/*test('the first note is about HTTP methods', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body[1].title).toBe('Maryee3')
})*/

afterAll(() => {
  mongoose.connection.close()
})