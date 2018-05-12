const jwt = require('jsonwebtoken');

function meta(event, context) {
  if (event.queryStringParameters.meta === 'true') {
    return {
      event,
      context,
    }
  }
}

function isAuthorized(username, password) {
  if (username === 'user' && password === 'password') {
    return true;
  }
}

exports.handler = function(event, context, callback) {
  const { httpMethod } = event;

  switch (httpMethod) {
    case 'POST': {
      const { username, password } = JSON.parse(event.body);

      if (isAuthorized(username, password)) {
        return callback(null, {
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              token: jwt.sign({ username }, 'SECRET'),
            },
            meta: meta(event, context),
          })
        });
      } else {
        return callback(null, {
          statusCode: 401,
          body: 'Unauthorized',
        });
      }
    }

    default:
      return callback(null, {
        statusCode: 404,
        body: 'Not Found',
      });
  }
}
