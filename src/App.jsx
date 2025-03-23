
import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users'
import Friends from './Friends'
import './App.css'
import { Suspense } from 'react'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {
  const friendsPromise = fetchFriends();

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

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h3>Friends Are Coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => alert('click 3')}>Click Me 3</button>
      <button onClick={() => (handleAdd5(10))}>Add 5</button>
    </>
  )
}

export default App
