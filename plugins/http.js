import axios from 'axios'

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('post', async (route, data) => {
    const response = await axios.post(`http://localhost:3001/${route}`, data)
      return response
  }),
  inject('getAll', async (route) => {
    const response = await axios.get(`http://localhost:3001/${route}`)
      return response
  }),
  inject('get', async (route, id) => {
    const response = await axios.get(`http://localhost:3001/${route}/${id}`)
      return response
  })
}
