const jsonServer = require('json-server');

//create json server using json-server library
const mywatchlistServer= jsonServer.create()

//set up path/route for db.json file
const router = jsonServer.router('db.json')

const middleware= jsonServer.defaults()

//set up port for server app

const port =4000 || process.env.PORT


//use middleware and router in server
mywatchlistServer.use(middleware)
mywatchlistServer.use(router)

//server listen for request from frontend
mywatchlistServer.listen(port,()=> {
    console.log(`watchlist server started at post : ${port}, and waiting for client reqeust!!`);
})