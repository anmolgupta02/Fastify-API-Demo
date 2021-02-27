const fastify = require('fastify')({
    logger: true
})

//bring in Routes
const routes = require('./routes/index')

//db
const mongoose = require('mongoose')

//db Connection

mongoose.connect('mongodb://localhost/fastidb').then(
    console.log("MONGO is ready")
).catch(
    err => console.log(err)
)


//routes
fastify.get('/', async(Request, reply) =>{

    return{visiter: "LearnCodeOnline"}
})

routes.forEach((routes, index) => {

    fastify.route(routes)

})


//Server Setup
const start = async() => {

    try{
        await fastify.listen(3000)
        fastify.log.info(`Server is running at ${address}`)

    }catch(error){

    }
}

start()