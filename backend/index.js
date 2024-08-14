const express= require ("express") //taking express for making http server
const cors= require ("cors") //allowing frontend in backend
const mainRouter= require("./routes/index")
const app= express()
app.use(cors())
app.use(express.json())
app.use("/api/v1",mainRouter)
const port=process.env.PORT || 4000
app.listen(port)

