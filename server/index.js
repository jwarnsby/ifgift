const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');

const config = require('./config');
const router = require('./router');

const PORT = 3000;

app.use(serve(config.clientPath));
app.use(bodyParser());
app.use(router.routes());

app.listen(PORT, () => {
  console.log(`Server kickin it at http://localhost:${PORT}`);
})