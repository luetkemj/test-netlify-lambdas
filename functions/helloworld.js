exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: {
        data: 'hello world'
        event: event,
        context: context,
      }
    });
}
