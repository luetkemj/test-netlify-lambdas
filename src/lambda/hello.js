exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringigy({
        envVars: process.env.BUTTER,
        hello: 'world',
      }),
    });
}
