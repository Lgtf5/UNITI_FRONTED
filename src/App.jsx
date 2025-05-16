

import './App.css'
import CategoryButton from './components/buttons/categoryButton'
import ResourceButton from './components/buttons/resourceButton'
import { OkButton, LoginButton } from './components/buttons/squareButton'



function App() {
  

  return (
    <>
      <div className="App">
        <h1>Button Component</h1>
        <OkButton/>
        <LoginButton />
        {/* <SquareButton /> */}
        <CategoryButton/>
        <ResourceButton/>
      </div>
    </>
  )
}

export default App
