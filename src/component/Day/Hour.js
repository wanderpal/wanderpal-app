import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";


export default class Hour extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: true,
      eventName: null,
      available: true,
    };
  }

  throwShade = () => {
     if(this.state.available){
      this.setState({available: false});
     }else{
       this.setState({available: true});
     }
  }

  render(){
    return(
      <ListItem button className={`clicked timeButton`} id={`${this.props.date + this.props.time}`} onClick={this.throwShade}>
        <ListItemText primary={`${this.props.time}`}/>
      </ListItem>
    );
  }
}
