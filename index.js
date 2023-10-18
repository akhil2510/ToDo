import Koa from 'koa'
import router from './router.js'
import bodyParser  from 'koa-bodyparser';

const app = new Koa()

// start the server

app.use(bodyParser());

app.use(router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Koa server is running on port ${PORT}`);
});


export default app 