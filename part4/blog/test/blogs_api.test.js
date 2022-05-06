const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
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
},10000)

test('some blog amount', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body).toHaveLength(helper.initialBlogs.length)
})

test('a specific Blog can be viewed', async () => {
  const blogsAtStart = await helper.blogsInDb()

  const blogToView = blogsAtStart[0]

  const resultblog = await api
    .get(`/api/blogs/${blogToView.id}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const processedBlogToView = JSON.parse(JSON.stringify(blogToView))

  expect(resultblog.body).toEqual(processedBlogToView)
})

test('a valid blog can be added ', async () => {
  const newBlog = {
    title: 'sometherdfing',
    author: 'Marfdsfsertin',
    url: 'www.gfafdsss.fi',
    likes: 4
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

  const title = blogsAtEnd.map(n => n.title)
  expect(title).toContain(
    'sometherdfing'
  )
})


/*test('the first note is about HTTP methods', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body[1].title).toBe('Maryee3')
})*/

afterAll(() => {
  mongoose.connection.close()
})