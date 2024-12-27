import express from "express";
const app = express();
const PORT = 8383;
let data=['Ashish']

//MiddleWare

app.use(express.json())

//Endpoint : HTTP VERBS(methods) && Routes (or paths)

app.get("/", (req, res) => {
	res.send(`<!DOCTYPE html>
        <html>
            <head>
                <title>Homepage</title>
                <style>
                    .header {
                        background-color: darkcyan;
                        padding: 20px;
                        text-align: center;
                        border-radius: 50px;
                        font-size:50px;
                    }
                        .dash{
                        background:coral;
                        padding:20px;
                        text-align:center;
                        border-radius:100px;
                        cursor:pointer;
                        color:white;
                        }
                        .dash:hover {
                        background: #ff6f47;
                        }

                </style>
            </head>
            <body>
                <h1 class="header">Hello from Homepage</h1>
                <span>
                <a href="/dashboard"><button class="dash"> dashboard </button></a></
                span>
                <span>
                <a href="/api/data"><button class="dash"> api-data </button></a></
                span>

                 <h1>Data</h1>
                <p class="header">
                ${data}
            </body>
        </html>
    `);
	console.log("Yay i hit an endpoint", req.method);
});

//Type 1: Website endpoints
/*
 These endpoints are for sending back html and they typically come when a user enters a url in a browser
 */

app.get("/dashboard", (req, res) => {
	console.log("at dashboard");
	res.send(`<!DOCTYPE html>
        <html>
            <head>
                <title>Dashboard</title>
                <style>
                    .header {
                        background-color: lightblue;
                        padding: 20px;
                        text-align: center;
                        border-radius: 50px;
                    }
                        .home{
                        background:coral;
                        padding:20px;
                        text-align:center;
                        border-radius:100px;
                        cursor:pointer;
                        color:white;
                        }
                        .home:hover {
                        background: #ff6f47;
                        }

                </style>
            </head>
            <body>
                <h1 class="header">Hello from Dashboard</h1>
                <span>
 <a href="/"><button class="home" value="dashboard"> Homepage </button></a>
</span>
            </body>
        </html>
    `);
});

//Type 2: API endpoints(non-visual)

//CRUD-method : CREATE(post) REDUCE(get) UPDATE(put) DELETE(delete)

app.get('/api/data',(req,res)=>{
  console.log('this one is for data')
  res.send(data)
})

app.post('/api/data',(req,res)=>{
const newEntry=req.body
console.log(newEntry)
data.push(newEntry.name)
res.sendStatus(201)
})



app.listen(PORT, () => console.log(`Server has Started on: ${PORT}`));
