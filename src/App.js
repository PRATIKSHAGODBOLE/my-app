
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import PracticeTodo from './Components/PracticeTodo'
import StateHook from './Assigments/StateHook'
import Todo from './Assigments/Todo'

function App() {
  return (
      <div className='container'>
          <StateHook /><br></br>
         <Todo />
        {/* <PracticeTodo/> */}
     </div>
  )
}

export default App;

