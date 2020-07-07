import React ,{Component} from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header';
import About from './components/pages/About';
import { BrowserRouter as Router ,Route} from 'react-router-dom'
import { v4 as uuid } from 'uuid';
import './App.css';

class App extends Component{
 state = {
    todos:[
      {
        id: uuid(),
        title:' First To do',
        isCompleted :false
      },
      {
        id: uuid(),
        title:'Second To do',
        isCompleted :false
      },
      {
        id: uuid(),
        title:'Third To do',
        isCompleted :false
      }
    ]
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo =>{
      if(todo.id === id){
        todo.isCompleted = !todo.isCompleted
      }
      return todo;
    }) });
    
  }
  //Delete Todo
  deleteTodo = (id) =>{
    this.setState({todos :[...this.state.todos.filter(todo =>
      todo.id !== id)] });
  }
  //Add Todo 
  addTodo = (title) =>{
    const newTodo = {
      id : uuid(),
      title,
      isCompleted :false
    }
    this.setState({ todos:[...this.state.todos ,newTodo] });
  }
  render(){
    return (
      <div className='App'>
        <Router>
        <div className='container'>
        <Header />
        <Route exact path='/' render={ props => (
          <React.Fragment>
             <AddTodo  addTodo = {this.addTodo}/>
          <Todos todos = {this.state.todos} 
             markComplete = {this.markComplete}
             deleteTodo = {this.deleteTodo}/>
          </React.Fragment>
        )} />
        <Route path='/about' component={About} >
          
        </Route>
         </div>
      </Router>
      </div>
    );
  }
}
export default App;
