import pkg from './package'

export default {
  pkg,
  dependencies: ['mongo'],
  register(server, options = {}) {
    const { db } = server.plugins['mongo']
    const senators = db.get('Senators')
    
    server.route({
      method: 'GET',
      path: '/v1/senators',
      options: {
        tags: ['api']
      },
      async handler(request, h) {
        return await senators.find({})
      }
    })
  }
}
