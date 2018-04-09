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
	//console.log(props.cards)
	return(
  	<div>
      {props.cards.map(card => (<Card {...card} />))}
    </div>
  )
}

class Form extends React.Component {
	handleSubmit = (event) => {
  	event.preventDefault();
  	//console.log("Event: " + this.state.userName);
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    		.then(resp => {
        		this.props.onSubmit(resp.data);
          }
        )
  }
  state = {userName: ''};
	render(){
  	return(
    	<form onSubmit={this.handleSubmit}>
          <input type="text" 
          			 //ref={(input) => this.userNameInput = input} 
                 value={this.state.userName}
                 onChange={(event) => this.setState({userName : event.target.value})}
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
  
  addCard = (cardInfo) => {
  	//console.log(cardInfo);
    //console.log(this.state.cards.concat(cardInfo));
    this.setState(prevState => 
    	({   	
        //cards: Array.prototype.push.apply(prevState.cards, cardInfo)
        cards: prevState.cards.concat(cardInfo)
      })
    )
    //console.log(this.state.cards);
  }
  
  
	render(){
  	return(
      <div>
        <Form onSubmit={this.addCard}/>
        <CardList cards={this.state.cards} />      
      </div>
    )
  }	
}

ReactDOM.render(<App/>, mountNode);
