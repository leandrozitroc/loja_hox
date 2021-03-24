import * as bodyParser from "body-parser";
import * as express from "express";

import { dbConfig } from "./Database/database";
import CreateAcc1 from './routes/createAcoount'
import Login from './routes/login'
import AuthJwt from './middleware/Authmid' //middleware para jwt token(nao utilizado para testes)
import Category from "./routes/categories"
import Products from "./routes/produts"
const app = express();
app.use(require("cors")());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

/*dbConfig.sync({force:true}).then(()=>{
    console.log('Everything ok')//(USADO PARA CRIAR OS DBs)
})*/
app.get('/', (req,res)=>{
    res.send("hello Loja Hox")
})
//login/account
app.post('/createAccount', CreateAcc1.createacc)
app.post('/login', Login.trueLogin)
//categories
app.post('/addCategory', Category.addCategory)
app.delete('/delCategory', Category.delCategory)
app.put('/updateCategory', Category.updateCategory)
app.get('/showCategory', Category.showCategory)
app.get('/indexCategory', Category.indexCategorys)
// Products
app.post('/createProduct', Products.createProds)
app.put('/updateProducts', Products.updateProducts)
app.delete('/deleteProducts', Products.deleteProducts)
app.get('/showProduct',Products.showProduct)
app.get('/indexProducts', Products.indexProducts)
app.get('/indexByCategory', Products.indexByCategory)



app.listen(8050, ()=>{
    console.log('Connected to port 8050')
})


