import React from "react"

// class StatefulGreeting extends React.Component{
//     render(){
//         return <h1>Hello, {this.props.greeting}</h1>
//     }
// }


class StatefulGreeting extends React.Component{

    // instanciating the old state
    constructor(props){
        super(props);
        this.state = {
            introduction:"Hello!",
            buttonText: "Exit",
            count: 0
        }
    }
// The setState merges the new state with the old state
// The setState is asynchronous
handleClick(){
    this.setState((prevState, prevProps) => {
        console.log('previous state', prevState)
        console.log('previous props', prevProps)
        return{
            // setting a ternary condition to change the state based on the value
            introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
        }
    }, () =>{
        // to resolve this, we callback the new state
        console.log('text new state', this.state.introduction);
        console.log('button new state', this.state.buttonText);
    });
    // this however renders the old state, why?
    console.log(this.state.introduction);
    console.log(this.state.buttonText);
}

handleIncrement(){
    this.setState((prevState, prevProps) => {
        console.log('previous state', prevState)
        console.log('previous props', prevProps)
        return{
            count: prevState.count +1
        }
    }, () => {
        console.log('current count', this.state.count)
    })
}

// Anytime you need to run some code after the state update is complete, place the code in a callback function as the second parameter to  
// setState, NOT immediately after the setState  call. If you place it after the setState call like we did in the previous component,
// the code  may execute before the state update is finished.

    render(){
        return(
            <div>
                <h1>{this.state.introduction}, {this.props.greeting}</h1>
                {/* using the onClick method to change the state when the button is clicked */}
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.handleIncrement()}>Increment</button>
                <p>You have clicked {this.state.count} times</p>
            </div>
            
        ) 
    }
}

export default StatefulGreeting