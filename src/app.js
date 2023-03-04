const express = require('express')
const app = express()
const path = require('path')

const mainRouter = require('./routes/main')
const productRouter = require('./routes/product')

app.set('view engine', 'ejs')
const viewsPath = path.resolve('./src/views')
app.set('views', path.join(viewsPath))

const publicPath = path.resolve('public')
app.use(express.static(publicPath))

app.use('/', mainRouter)
app.use('/detail', productRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running @ ${PORT}`))
