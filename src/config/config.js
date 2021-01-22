// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-80607e513006a22f9bb72e0434bcbcf693ef1c7f.cdmbgyo9qrd8.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: 'v(e9u$qZ7Yx!7LKrfB4y*Lb`6QB4A%ir'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}