require('dotenv').config();
const config = require('./src/configs/db.config');
const express = require('express')

const app = express();
const PORT = parseInt(process.env.PORT);

const remindersRouter = require ('./src/routes/reminders.routes')

app.use(express.json());
app.use('/reminders',remindersRouter);

app.listen(PORT, () => {
    console.log("Api escuchando en el puerto " + PORT);
});

