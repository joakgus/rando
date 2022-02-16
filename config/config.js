module.exports = {
    development: {
        secretKey: process.env.SECRET_KEY,
        db: {
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            },
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }
    },
    production:{
        use_env_variable: DATABASE_URL,
        dialect: 'postgres',
        operatorsAliases: false
    }
}
