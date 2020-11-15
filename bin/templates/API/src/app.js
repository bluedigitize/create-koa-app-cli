const Koa = require('koa');
const router = require('./router');
const bodyParser = require('koa-bodyparser')({
  enableTypes: ['json']
});

const app = new Koa();

app.use(bodyParser);
app.use(router.routes());
app.use(router.allowedMethods());

app.on('error', () => null);

module.exports = app;
