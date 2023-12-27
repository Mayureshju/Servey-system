const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 4000;
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
//cookie-parser - what is this and why we need this ?
const cookieParser = require("cookie-parser")
app.use(cookieParser());
app.use(express.json());

require("./config/database").connect();



//route import and mount
const user = require("./routes/user");
app.use("/api", user);

//actuivate
app.get("/",()=>{
    `<h1>Heloo</h1>`
})

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})