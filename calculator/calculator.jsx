import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num1: "", num2: "", result: 0}
        this.setNum1 = this.setNum1.bind(this)
        this.setNum2 = this.setNum2.bind(this)
        this.add = this.add.bind(this)
        this.subtract = this.subtract.bind(this)
        this.clear = this.clear.bind(this)
    }

    setNum1(e){
        e.preventDefault()
        this.setState({num1: e.target.value})
    }

    setNum2(e){
        e.preventDefault()
        this.setState({num2: e.target.value})
    }

    add(e){
        e.preventDefault()
        let final = parseInt(this.state.num1) + parseInt(this.state.num2) 
        this.setState({result: final})
    }

    subtract(e){
        e.preventDefault()
        let final = parseInt(this.state.num1) - parseInt(this.state.num2) 
        this.setState({result: final})
    }

    clear(e){
        e.preventDefault() 
        this.setState({ num1: "", num2: "", result: 0})
    }
    render() {
        return (
            <div>
                <h1>{this.state.result}</h1>
                <input onChange={this.setNum1} value={this.state.num1} /> 
                <input onChange={this.setNum2} value={this.state.num2} />
                <br />
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.clear}>Clear</button>
            </div>
        );
    }
}

export default Calculator;