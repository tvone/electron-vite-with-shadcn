import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

export default function Test(): JSX.Element {
  const [fileUrl, setFileUrl] = useState('')
  async function openFile(): Promise<void> {
    try {
      const response = await window.versions.ping()
      console.log(response) // prints out 'pong'
      const result = await window.api.openFile()
      if (!result.canceled) {
        console.log(result.filePaths) // Handle selected file paths
        setFileUrl(result.filePaths)
      }
    } catch (error) {
      console.error('Error opening file dialog:', error)
    }
  }
  return (
    <div>
      <Link className="no-underline" to="/">
        Redirect Home
      </Link>
      <Button>Hihi</Button>
      <button className="bg-blue-500" onClick={openFile}>
        Open file
      </button>
      <p>URL : {fileUrl}</p>
    </div>
  )
}
