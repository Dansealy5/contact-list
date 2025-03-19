import { useState } from 'react'
import './App.css'
import Contactlist from './components/Contactlist'
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  return (
    <>
    {selectedContactId ? (
      <SelectedContact
      setSelectedContactId={setSelectedContactId}
      selectedContactId={selectedContactId} />
    ) : (
      <Contactlist 
      setSelectedContactId={setSelectedContactId}/>
    )}
    </>
  )
}

export default App
