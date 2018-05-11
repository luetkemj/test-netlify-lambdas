// sign with default (HMAC SHA256)
const jwt = require('jsonwebtoken');

exports.handler = function(event, context, callback) {
  const token = jwt.sign({ foo: 'barder is the best oh boy YEEHA' }, 'SECRET');

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      token,
    })
  });
}
