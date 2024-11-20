"use strict"
/* -------------------------------------------------------
    EXPRESSJS
------------------------------------------------------- */

/* ------------------------------------------------------- */


const express = require('express')

const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

/* ------------------------------------------------------- */
// app.get('/',(req, res)=> {

//     // res.send('welcome to express')
//     res.send({
//         message: 'welcome to express'
//     })
    
// })

// app.post('/',(req, res)=> {

//     // res.send('welcome to express')
//     res.send({
//         message: 'run post'
//     })
    
// })

// app.put('/',(req, res)=> {

//     // res.send('welcome to express')
//     res.send({
//         message: 'run put'
//     })
    
// })

// app.delete('/',(req, res)=> {

//     // res.send('welcome to express')
//     res.send({
//         message: 'run delete'
//     })
    
// })


// app.all('/',(req, res)=> {

//     // res.send('welcome to express')
//     res.send({
//         message: 'run all'
//     })
    
// })


// app.route('/route')
// .get((req,res)=> { res.send ({ message: 'get' })})
// .post((req,res)=> { res.send ({ message: 'post' })})
// .put((req,res)=> { res.send ({ message: 'put' })})
// .delete((req,res)=> { res.send ({ message: 'delete' })})


/* ------------------------------------------------------- */
app.get('/', (req, res) => res.send('/ = root (home)'))


app.get('/abc(x)?123', (req, res) => res.send('/abc(x)123'))
app.get('/abc*123', (req, res)=> res.send('/abc*123'))


/* ------------------------------------------------------- */
// app.listen(PORT, ()=> {console.log('Running: http://127.0.0.1:8000')})
app.listen(PORT, ()=> {console.log(`Running: http://${HOST}:${PORT}`)})