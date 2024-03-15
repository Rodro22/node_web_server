const { envs } = require('./config/env')
const { startServer } = require('./server/server')


const main = () =>{
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}




//Funcion agnostica autoconvocada y asyncronic
//Agnostica porque no tiene nombre
//Autoconvocada porque se ejecuta con los parentesis finales
( async () => {
    main()

})() //con estos parentesis se autoconvoca