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


app.all('/',(req, res)=> {

    // res.send('welcome to express')
    res.send({
        message: 'run all'
    })
    
})



/* ------------------------------------------------------- */
// app.listen(PORT, ()=> {console.log('Running: http://127.0.0.1:8000')})
app.listen(PORT, ()=> {console.log(`Running: http://${HOST}:${PORT}`)})