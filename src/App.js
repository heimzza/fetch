import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    users:[],
    isLoading: true
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(users => users.data).then(users => {
        // console.log(users);
        this.setState({
          users: users,
          isLoading: false
        });
      })
    }, 3000);
    
  }

  render () {
    const{isLoading} = this.state;
    return (
      <div className='App'>
        <h1>Users</h1>
        {isLoading ? 'Loading...' : ''}
        {
          this.state.users.map(user =>
            <div key={user.id}>
              {
                user.name
              }
              &nbsp;-&nbsp;@
              {
                user.username
              }
            </div>
            )
        }
      </div>
    )
  }
  
}

export default App;
