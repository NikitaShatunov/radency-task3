import { Task } from "./add-new-note"

export const calculateAmountOfCategories = (items: Task[]) => {
  let hash = new Set<string>()
  let unarchive = new Map<string, number>()
  let archive = new Map<string, number>()

  for (let key of items) {
    hash.add(key.category)
    if (!key.archived) {
      if (unarchive.has(key.category)) {
        unarchive.set(key.category, unarchive.get(key.category)! + 1)
      } else {
        unarchive.set(key.category, 1) 
      }
    } else {
      if (archive.has(key.category)) {
        archive.set(key.category, archive.get(key.category)! + 1)
      } else {
        archive.set(key.category, 1)
      }
    }
  }
  const unarchiveObj = Object.fromEntries(unarchive)
  const archiveObj = Object.fromEntries(archive)
  const namesOfCategories: string[] = Array.from(hash)

  return { unarchiveObj, archiveObj, namesOfCategories }
};
