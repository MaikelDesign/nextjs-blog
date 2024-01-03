import fs from 'fs'
import { postsDirectory } from './get-sorted-post-data'

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  
  // Returns an array, of objects, that looks like this:
  // id here is needed because of the dynamic rout file [id].js
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}