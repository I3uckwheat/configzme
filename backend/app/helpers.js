// TODO refactor to middleware
exports.extractUserCredentials = {
  fromBasicAuth(authHeader) {
    // get credentials from basic auth headers
    const credentials = authHeader.split(' ')[1];

    // Username and Password are in the format 'username:password'
    return new Buffer.from(credentials, 'base64').toString('utf8').split(/:(.+)/, 2);
  }
}
