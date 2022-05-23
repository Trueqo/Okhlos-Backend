else {conexion.query(`SELECT * FROM users WHERE email ='${email}'`, (error, results) => {
                    
    if (
        results.length == 0 ||
        !( bcryptjs.compare(password, results[0].password))
    ) {
        console.log("usuario o contraseña incorrecta");
    } else {
        //inicio de sesión OK
        // const id = results[0].id
        // const token = jwt.sign({id:id}, process.env.JWT_SECRETO, {
        //     expiresIn: process.env.JWT_TIEMPO_EXPIRA
        // })
        //generamos el token SIN fecha de expiracion
        //const token = jwt.sign({id: id}, process.env.JWT_SECRETO)
        //    console.log("TOKEN: "+token+" para el USUARIO : "+email)
        console.log('llegué al else')
    }
}
);