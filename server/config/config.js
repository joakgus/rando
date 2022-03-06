module.exports = {
        secretKey: process.env.SECRET_KEY||"jwor9334bg5", 
        db: {
            dialect: 'postgres',
            host: process.env.DB_HOST || 'ec2-54-164-238-108.compute-1.amazonaws.com',
            port: process.env.DB_PORT || 5432 ,
            database: process.env.DB_NAME || 'd3cdf4arspejua', 
            username: process.env.DB_USERNAME || 'qyeadkeowihxbg',
            password: process.env.DB_PASSWORD || '7ae7dc8751c5f1ec8085c43b1ac18e56d869f6b98fa8e54fbdb49a4eec200734',
            dialectOptions: {
                 ssl: {
                    //  require: true,
                    //require: false,
                    rejectUnauthorized: true 
                } 



            },
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }
}
