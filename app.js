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
/* ------------------------------------------------------- */
// app.listen(PORT, ()=> {console.log('Running: http://127.0.0.1:8000')})
app.listen(PORT, ()=> {console.log(`Running: http://${HOST}:${PORT}`)})