const Blog = require('../model/blog')

const initialBlogs = [
  {
    title: 'somethigfgdfgdng',
    author: 'Martin',
    url: 'www.gfas.fi',
    likes: 4
  },
  {
    title: 'somethereing',
    author: 'Marsertin',
    url: 'www.gfasss.fi',
    likes: 5
  }

]

const nonExistingId = async () => {
  const blog = new Blog({ content: 'willremovethissoon', date: new Date() })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const BlogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, nonExistingId, BlogsInDb
}