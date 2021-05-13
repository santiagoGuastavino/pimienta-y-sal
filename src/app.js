let express = require('express');
let app = express();
let path = require('path');

let mainRouter = require('./routes/main');
let productRouter = require('./routes/product');

app.set('view engine', 'ejs');
let viewsPath = path.resolve('./src/views');
app.set('views', path.join(__dirname, 'views'));

let publicPath = path.resolve('public');
app.use(express.static(publicPath));

app.use('/', mainRouter);
app.use('/detail', productRouter);

app.listen(3001, () => console.log('Server running: 3001'));