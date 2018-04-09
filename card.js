const Card = (props) => {
		return(
    	<div style={{margin:'1em'}}>
        <img className="profileImg" src={props.avatar_url}></img>
        <div style={{display:'inline-block', marginLeft:10}}>
          <div style={{fontSize:'1.25em', fontWeight:'bold'}}>{props.name}</div>
          <div>{props.company}</div>
        </div>
      </div>
    )
}

const CardList = (props) => {
	return(
  	<div>
      {props.cards.map(card => (<Card {...card} />))}
    </div>
  )
}

class Form extends React.Component {
	handleSubmit = (event) => {
  	event.oreventDefault();
  	console.log("Event: " + this.userNameInput);
  }
	render(){
  	return(
    	<form onSubmit={this.handleSubmit}>
          <input type="text" 
          			 ref={(input) => this.userNameInput = input}          			  
                 placeholder="Enter GitHub Name"/>
          <button type="submit">Add Card</button>
      </form>
    )
  }
}

class App extends React.Component {
	state ={
  	cards: [
    	{
  		name:"Abhishek",
      avatar_url:"https://avatars3.githubusercontent.com/u/4331796?v=4",
      company:"Brillio"
  },
  {
  		name:"Antoine Niek",
      avatar_url:"https://avatars2.githubusercontent.com/u/550884?v=4",
      company:"AdGear Technologies Inc."
  }
    ]
  }
	render(){
  	return(
      <div>
        <Form />
        <CardList cards={this.state.cards} />      
      </div>
    )
  }	
}

ReactDOM.render(<App/>, mountNode);
