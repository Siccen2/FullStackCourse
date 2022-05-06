const express = require('express')
const cors = require('cors')
const app = express()
const Blog = require('../model/blog')


app.use(cors())
app.use(express.json())

app.get('/api/blogs', async(request, response) => {
 /* Blog.find({})
    .then(blogs => {
      response.json(blogs)
    })*/
  const blogs = await Blog.find({})
  response.json(blogs)

})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

module.exports = app