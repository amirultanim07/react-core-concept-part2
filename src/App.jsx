
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'

function App() {

  function handleClick() {
    alert('I am Clicked.')
  }

  const handleClick2 = () => {
    alert('Click 2')
  }
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>

      <h3>Vite + React</h3>
      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => alert('click 3')}>Click Me 3</button>
      <button onClick={()=>(handleAdd5(10))}>Add 5</button>
    </>
  )
}

export default App
