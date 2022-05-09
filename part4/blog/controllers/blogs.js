const blogRouter = require('express').Router()
const { request } = require('express')
const Blog = require('../model/blog')



blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)

})

blogRouter.get('/:id', async (request, response, next) => {
  try {
    const blog = await Blog.findById(request.params.id)
    if (blog) {
      response.json(blog.toJSON())
    } else {
      response.status(404).end()
    }
  } catch (exception) {
    next(exception)
  }
})

blogRouter.post('/', async (request, response) => {
  const body = request.body
  if(!body.title && !body.url) {
    response.status(400).send('Bad Request')
  } else {
    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes:body.likes === undefined ? 0 : body.likes
    })
    const savedBlog = await blog.save()
    response.status(201).json(savedBlog) 
  }
})



module.exports = blogRouter