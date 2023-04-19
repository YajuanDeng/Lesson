import React,{Component} from 'react'

export default class Counter extends Component {
  constructor(props){
    super(props)
    this.state ={
      count: props.myCount || 0
    }
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.changeCount(-1);
          }}
        >
          -
        </button>
        <span>{this.state.count}</span>
        <button
          onClick={() => {
            this.changeCount(1);
          }}
        >
          +
        </button>
      </div>
    );
  }
  changeCount(value){
    // this.setState({count:this.state.count + value})

    this.setState((prevState) => {
      return { count: prevState.count + value };
    });
    this.setState((prevState) => {
       return { count: prevState.count + value };
    });

  }
}
