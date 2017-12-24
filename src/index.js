import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 5
        };
         this.operation=this.operation.bind(this);
    }
    operation(term){
        let n=this.state.number;
        if(term==="sub" && n>0)
        {
            this.setState({number:n-1});
        }

        if(term==="add" && n<99)
        {
            this.setState({number:n+1});
        }
    if(term==="increase"){
                setInterval(()=>{
            { if(this.state.number<100)
                this.setState({number:this.state.number+1});
            }
        },1000)

    }
    if(term==="decrease"){
        setInterval(()=>{
            { if(this.state.number>0)
                this.setState({number:this.state.number-1});
            }
        },1000)
        }
    }



    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <Button sub={this.operation}/>
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.querySelector('.container-fluid'));