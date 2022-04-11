import axios from 'axios'

const link = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(link)
    return request.then(response => {
      return response.data
    })
  }

const create = newObject => {
    const request = axios.post(link, newObject)
    return request.then(response => {
        return response.data
    })
}

export default { getAll, create } 