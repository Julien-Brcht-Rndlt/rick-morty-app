import { useState } from 'react'
import './App.css';
import CharacterList from './components/CharacterList'

function App() {

  const [isActive, setIsActive] = useState(false)

  const handleChangeBtn = () => {
      setIsActive(!isActive)
  }

  return (
    <div className="App">
      <CharacterList
        isActive={isActive}
        handler={handleChangeBtn}
      />
    </div>
  );
}

export default App;
