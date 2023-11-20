// import parseXML from '../../utils/xml-parser'
import { useState, useEffect } from 'react'
import { parseString } from 'xml2js'

const MediumPosts = () => {
  const [parsedData, setParsedData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {

        const parseStringCallback = (err, res) => {
          if (err) {
            console.warn('err', err)
          } else {
            const entries = res.rss.channel[0].item.map((item) => {
              console.log(item)
              return item.title
              // return cleanParsedXMLEntry(item)
            })
            console.info('entries', entries)
          }
        }

        const corsProxy = 'https://cors.eu.org/'
        const res = await fetch(corsProxy + 'https://medium.com/feed/@maikelvbk')
          .then((res) => res.text()
            .then((data) => parseString(data, parseStringCallback))
            .catch((err) => console.warn('data err', err))
            .finally(() => console.info('data complete')))
          .catch((err) => console.warn('res err', err))
          .finally(() => console.info('res complete'))

        // const cleanParsedXMLEntry = (entry) => {
        //   const media = entry['media:group'][0]
        //   return {
        //     author: entry.author[0].name[0],
        //     id: entry['yt:videoId'][0],
        //     link: entry.link[0].$.href,
        //     name: entry.title[0],
        //     publishDate: entry.published[0],
        //     thumbnailUrl: media['media:thumbnail'][0].$.url,
        //   }
        // }

        console.log(res)
        setParsedData(res)
        
      } catch (e) {
        console.error('Error parsing XML:', e)
      }
    }

    fetchData()
  }, [])

  if (!parsedData) return <div>Loading...</div>

  // Now parsedData contains the JSON representation of your Medium posts
  // You can map over it to display them as needed
  
  return (
    <div>
      {/* Display your parsed data here */}
      <pre>{JSON.stringify(parsedData, null, 2)}</pre>
    </div>
  )
}

export default MediumPosts
