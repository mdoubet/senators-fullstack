import pkg from './package'
import Joi from 'joi'

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

    server.route({
      method: 'POST',
      path: '/v1/senators',
      options: {
        tags: ['api'],
        validate:
          {payload: Joi.array().required()}
      },
      async handler(request, h) {
        const content = request.payload;
        return await senators.insert(content);
      }
    })

  }
}
