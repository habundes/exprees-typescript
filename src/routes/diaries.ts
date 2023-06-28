import express from 'express'
import * as diaryService from '../services/diariesService'
import toNewDiaryEntry from '../utils/utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesNoSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const diary = diaryService.findById(Number(id))
  return diary != null ? res.send(diary) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    console.log(req.body)
    const newDiary = toNewDiaryEntry(req.body)
    const addedDiary = diaryService.addDiary(newDiary)

    res.json(addedDiary)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
