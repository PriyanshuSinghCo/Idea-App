const express = require("express");
const app = express();


const PORT = 7070;

app.use(express.json());

const idea_route = require("./routers/ideas.routes");
app.use("/idea_app/v1", idea_route);


app.listen(PORT, () => {
    
    console.log(`Server started running on the port number: ${PORT}`);
});