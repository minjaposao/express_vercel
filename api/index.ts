const express = require('express')
import { Request, Response } from 'express';

const app = express()

app.get('/', (req: Request, res: Response)=>{
    res.send('Expres to Vercel')
})

app.listen(3000, ()=>console.log('listening on port 3000'))

module.exports = app