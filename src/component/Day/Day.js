import React from 'react';
import { Paper } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Hour from './Hour';


export default class Day extends React.Component{

    render(){
        return(
            <div>
                <Paper className="dayPaper">
                    <Typography component="h5">
                      {this.props.date}
                    </Typography>
                    <List component="div" className="hoursList">
                        {this.props.hours.map(hour=>
                          <Hour
                            time = {hour}
                            date = {this.props.date}
                          />
                        )}
                    </List>
                </Paper>
            </div>
        );
    }
}

// onClick={throwShade(this.props.date + hour)