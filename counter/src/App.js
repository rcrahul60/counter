import React ,{Component} from 'react';
//import logo from './logo.svg'
import './App.css'


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:1
        }

    }
    increment = () => {
        this.setState({count: this.state.count + 1})
    }
    render(){
        return(
            <div className="App">
                <button onClick= {this.increment} className='counter'>Click count {this.state.count}</button>
               
            </div>
        )
    }
}

export default App;