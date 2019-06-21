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
      currentColor: 'default',
    };
  }

  throwShade = () => {
     if(this.state.available){
      this.setState({available: false, currentColor: 'primary'});
     }else{
       this.setState({available: true, currentColor: 'default'});
     }
  };

  render(){
    return(
      <ListItem button className={`timeButton`} id={`${this.props.date + this.props.time}`} onClick={this.throwShade} color={`${this.state.currentColor}`}>
        <ListItemText primary={`${this.props.time}`}/>
      </ListItem>
    );
  }
}
