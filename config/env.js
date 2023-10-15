import * as dotenv from 'dotenv'

dotenv.config()

const env = () =>({
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV
})

export default env
