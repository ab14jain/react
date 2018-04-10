class Button extends React.Component {
	//constructor(props){
  	//super(props);
    //this.state = {counter:7};
  //}
  // state = {counter:0};
  handleClick = () => {
  	this.props.onClickFunction(this.props.incrementvalue);
  }  
	render(){
  	return (<button onClick={this.handleClick}>+{this.props.incrementvalue}</button>)
  }
}

const Result = (props) => {
	return (
  	<div>{props.counter}</div>
  )
}

class App extends React.Component {
	state = { counter: 0 };
  
  incrementCounter = (incrementvalue) => {
  	this.setState((prevState) => ({
    	counter: prevState.counter + incrementvalue
    }))
  }
	render(){
    return (
    	<div>
        <Button incrementvalue={1} onClickFunction={this.incrementCounter}/>
        <Button incrementvalue={5} onClickFunction={this.incrementCounter}/>
        <Button incrementvalue={10} onClickFunction={this.incrementCounter}/>
        <Button incrementvalue={100} onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>  
      )
  }
}
ReactDOM.render(<App Title="Go"/>, mountNode);
