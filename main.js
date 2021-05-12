const { clear } = require("console");
const express = require("express");

const app = express();
const port = 3000;
app.use(express.json())
const users = ["John", "Mark"];
// const users = [];

const logUsers = (req, res, next) => {
    console.log(users);
        next();
    // if(users === []){
    //     next("error")
    // }else{
    //     console.log(users);
    //     next();
    // }
}
const logMethod = (req, res, next) => {
    console.log(req.method);
    next();
}
app.use(logUsers);
app.use("/users", logMethod)
app.get("/users", (req, res, next) => {
  res.json(users);
});
// app.use((err,req, res, next)=>{
//     res.status(404);
//     console.log("No users");
//     // res.json("No users")
// })
// clear()


app.post("/users/create", (req, res) =>{
    const name = req.body.name;
    users.push(name);
    res.json(users)
})
app.listen(port, () => {
//   console.log(`app listening at http://localhost:${port}`);
});
