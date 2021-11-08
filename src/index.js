const express = require('express'); /* Principal server dependency, server module */
const app = express(); /* Real server, applicacion core */ 
const path = require('path'); /* Dependecy to acces global route of views, applies for all systms */

app.set('port', process.env.PORT) /* Global variable from express, asigning the port */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs'); /* View engine, to use enriched HTML */

/* Middlewares: authentication stuff */

/* Routes: Main page routes */
app.use(require('./routes/index'));

/* Static Files */
app.use(express.static(path.join(__dirname, 'public')));

/* Listening server, on asingned ports */
app.listen(app.get('port'), () => {
    console.log('Server on port' , app.get('port')); /* Making know that's running correctly */
})