import {json } from 'body-parser'
import app from "./app";

app.use(json())

app.listen(3001, () => {
    console.log('listening on port 3001')
})