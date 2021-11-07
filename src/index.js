const express = require('express'); /* Principal server dependency, server module */
const app = express(); /* Real server, applicacion core */ 
const path = require('path'); /* Dependecy to acces global route of views, applies for all systms */

<<<<<<< HEAD
app.set('port', process.env.port || 4000) /* Global variable from express, asigning the port */
app.set('views', path.join(__dirname, 'views'))
=======
app.set('port', 4000) /* Global variable from express, asigning the port */
app.set('views', path.join(__dirname, 'views')) /* Re-asinging views path */
>>>>>>> 5ba3ca7ba0216b02398525afb6c67a2710a19e8a
app.set('view engine', 'ejs'); /* View engine, to use enriched HTML */

/* Middlewares: authentication stuff */

/* Routes: Main page routes */
<<<<<<< HEAD
app.use(require('./routes'));
=======
app.use(require('./views/routes'));
>>>>>>> 5ba3ca7ba0216b02398525afb6c67a2710a19e8a

/* Static Files */
app.use(express.static(path.join(__dirname, 'public')));

/* Listening server, on asingned ports */
app.listen(app.get('port'), () => {
    console.log('Server on port' , app.get('port')); /* Making know that's running correctly */
})