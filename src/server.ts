import compression from 'compression'
import cors from 'cors'
import 'dotenv/config'
import express, { Application, json, urlencoded } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { connectDB } from './databases/connect_mongo'
import productRoute from './routes/product.route'
import categoryRoute from './routes/category.route'
import authRoute from './routes/auth.route'
import uploadRoute from './routes/upload.route'
import orderRoute from './routes/order.route'
import reviewRoute from './routes/review.route'
import userRoute from './routes/user.route'

const app: Application = express()

app.use(json({ limit: '40mb' }))
app.use(urlencoded({ extended: true }))
app.use(helmet())
app.use(cors())
app.use(compression())
app.use(morgan('combined'))
app.use('/api/v1/products', productRoute)
app.use('/api/v1/categories', categoryRoute)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/file', uploadRoute)
app.use('/api/v1/orders', orderRoute)
app.use('/api/v1/reviews', reviewRoute)
app.use('/api/v1/users', userRoute)
connectDB()

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})