const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.use(express.json());
app.use(require('./routes'))

mongoose.connect('mongodb+srv://ikotiev:mosremonting06@cluster0.tlczq6f.mongodb.net/Apteka?retryWrites=true&w=majority',
    () => {
        console.log('MongoDB связь установлена');
        app.listen(4000, () => {
            console.log('сервер запущен http://localhost:4000');
        })
    }
)