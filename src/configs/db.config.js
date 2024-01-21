const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("conectado exitosamente a mongosh"))
.catch(console.log);