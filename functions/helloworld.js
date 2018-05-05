exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: json.stringify({
        data: 'hello world'
        event: event,
        context: context,
      }),
    });
}
