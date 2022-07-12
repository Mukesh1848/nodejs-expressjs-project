import express from 'express';
const app = express();
const port = process.env.PORT || "3000";
import web from './routes/web.js'


// set template ingine 
app.set('view engine' ,'ejs');

// using static files 
 app.use(express.static('public')); // for public folder  and also static files like:- style.css and script.js

// Load router 
app.use('/',web);

app.listen(port,()=>{
        console.log('listeing to the port of http://localhost:3000');
});