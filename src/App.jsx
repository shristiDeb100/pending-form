import { useState } from 'react'
import PendingServiceForm from './components/pages/form/pendingservice/pendingservice';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <PendingServiceForm/>
      </div>
      
    
  )
}

export default App
