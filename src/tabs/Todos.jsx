import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
 }
  onSubmit = (text) => {
    const todo = {
      text,
      id: nanoid()
    }
    this.setState(prevState=>({todos:[...prevState.todos,todo]}))
  }

  deleteTodo = (id) => {
    this.setState(prevState=>({todos: prevState.todos.filter(todo=>todo.id !==id)}))
  } 


  
  render() {
    return <>
      <SearchForm onSubmit={this.onSubmit} />
      <Grid>
        {this.state.todos.map((todo,index) => {
         return <GridItem key={todo.id}>
           <Todo text={todo.text} counter={index + 1} deleteTodo={this.deleteTodo} id={todo.id} />
          </GridItem>;
        })}
      </Grid>
    </>;
  }
}
