import React from 'react';

class Contador extends React.Component{
    state ={
        numero: 7
    }

    incrementar = () =>{
        this.setState({
            numero: this.state.numero +1
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.numero}</h1>
                <button onClick={this.incrementar}>+</button>
            </div>
        )
    }
}
export default Contador;