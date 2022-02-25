module.exports = {
        secretKey: process.env.SECRET_KEY||"jwor9334bg5",
        db: {
            dialect: 'postgres',
            host: "ec2-54-164-238-108.compute-1.amazonaws.com",
            port: 5432,
            database: "d3cdf4arspejua",
            username: "qyeadkeowihxbg",
            password: "7ae7dc8751c5f1ec8085c43b1ac18e56d869f6b98fa8e54fbdb49a4eec200734",
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
        } /*db: {
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
        }*/
}
