const koa = require('koa');
const Router = require('koa-router');
const port = 3000;
const app = new koa();
const router = new Router();

const index = async (ctx) => {
    ctx.body = "<h1>Index sayfasına hoşgeldiniz</h1>";
}
const hakkimda = async (ctx) => {
    ctx.body = "<h1>Hakkimda sayfasına hoşgeldiniz</h1>";
}
const iletisim = async (ctx) => {
    ctx.body = "<h1>İletişim sayfasına hoşgeldiniz</h1>";
}

router
.get("/", index)
.get("/iletisim", iletisim)
.get("/hakkimda", hakkimda);

app.use(router.routes())
.use(router.allowedMethods());

app.listen(port, () => console.log(`Sunucu ${port} da başladı`));