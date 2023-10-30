import xml2js from 'xml2js'

export default async function parseXML(xml) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, (error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}