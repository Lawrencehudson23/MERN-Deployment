const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config({path: __dirname + '/../.env'});
console.log("key:"+process.env.SECRET_KEY);

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}));

require("./config/mongoose.config");
const pirateRoutes = require("./routes/pirate.routes");
const userRoutes = require('./routes/user.routes');
pirateRoutes(app);
userRoutes(app);

app.listen(5000, () => console.log("The server is all fired up on port 5000🔥"))