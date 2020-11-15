const Router = require('koa-router');
const healthcheck = require('./controllers/healthcheck.controller');

const router = new Router();

router.get(
  '/',
  healthcheck.get
);

module.exports = router;
