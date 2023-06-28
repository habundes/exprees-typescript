import diaryData from './diaries.json'
import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => {
  return diaries
}

export const getEntriesNoSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility
  }))
}

// export const findById = (id: number): DiaryEntry | undefined => {
//   const entry = diaries.find(d => d.id === id)
//   return entry
// }

export const findById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id)
  if (entry !== undefined) {
    const { comment, ...restEntry } = entry
    return restEntry
  }
  return entry
}

export const addDiary = (diaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...diaryEntry
  }
  diaries.push(newDiaryEntry)
  return newDiaryEntry
}
