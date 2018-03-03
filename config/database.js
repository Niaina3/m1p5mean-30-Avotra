var crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    url: 'mongodb://localhost:27017/'+this.db,
    secret: crypto,
    db: 'm1p5mean'
}