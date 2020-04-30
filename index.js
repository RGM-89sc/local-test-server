const Koa = require('koa')
const app = new Koa()
const static = require('koa-static')
const path = require('path')
const port = 3000
const staticPath = './static'
app.use(static(
    path.join( __dirname, staticPath)
))

app.listen(port, () => {
	console.log(`listening ${port}`)
})