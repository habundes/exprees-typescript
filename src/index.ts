import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json()) // middleware transforms req.body to JSON
const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('GET - someone pinged')
  res.send('Pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`🚀  Server is running on port ${PORT}`)
})
