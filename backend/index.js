import path from 'path'
import express from 'express'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'

import { connectToDatabase } from './config/db.js'

config()
const port = process.env.PORT || 5000

connectToDatabase()

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use( cookieParser() );

app.get( "/", ( req, res ) =>
{
  res.send( "Hello World from MERN e-commerce" )
} );

app.listen(port, () => console.log(`Server running on port: ${port}`));
