// import parseXML from '../../utils/xml-parser'
import { useState, useEffect } from 'react'
import xml2js from 'xml2js'



export async function getServerSideProps() {
  const res = await fetch('https://medium.com/feed/@maikelvbk')
  console.log('res:',res)
  const xmlData = await res.text()
  console.log('xmlData:',xmlData)
  return {
    props: {
      xmlData
    }
  }
}

async function parseXML(xml) {
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

const MediumPosts = ({xmlData}) => {
  console.log('component loaded')
  const [parsedData, setParsedData] = useState(null)
  console.log('mediumPosts:',xmlData)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await parseXML(xmlData)
        setParsedData(jsonData)
      } catch (e) {
        console.error('Error parsing XML:', e)
      }
    }

    fetchData()
  }, [xmlData])

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
