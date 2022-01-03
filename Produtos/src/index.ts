import { app } from "./app";
import * as dotenv from 'dotenv'
dotenv.config({path: '/src/.env'})

app.listen(process.env.PORT, ()=>{
    console.log('Running start')
})