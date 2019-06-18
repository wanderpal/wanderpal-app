import React from 'react';
import Day from '../Day/Day';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
//import {object} from "prop-types";


class Itinerary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            itineraryHeaderStyle: {
                backgroundColor: '#008080',
                // backgroundImage://img link here
            },
            testItinerary: {
                itineraryName: 'test',
                itineraryLocation: 'lab',
                arrayOfDays: [
                    {
                     date: '4/20',
                     hours:[
                         {filled: false, eventName: null, hourTime:'9am'},
                         {filled: true, eventName: 'breakfast', hourTime:'10am'},
                         {filled: false, eventName: null, hourTime:'11am'},
                         {filled: true, eventName: 'hike', hourTime:'12pm'},
                         {filled: true, eventName: 'hike', hourTime:'1pm'},
                         {filled: false, eventName: null, hourTime:'2pm'},
                         {filled: true, eventName: 'dinner', hourTime:'3pm'},
                         {filled: false, eventName: null, hourTime:'4pm'},
                     ],
                    },
                    {
                        date: '4/21',
                        hours:[
                            {filled: false, eventName: null, hourTime:'9am'},
                            {filled: false, eventName: null, hourTime:'10am'},
                            {filled: false, eventName: null, hourTime:'11am'},
                            {filled: true, eventName: 'run', hourTime:'12am'},
                            {filled: true, eventName: 'stretch', hourTime:'1pm'},
                            {filled: true, eventName: 'snack', hourTime:'2pm'},
                            {filled: true, eventName: 'yoga', hourTime:'3pm'},
                            {filled: true, eventName: 'yoga', hourTime:'4pm'},
                        ],
                    },
                ],
            }
        }
    };

    render(){
        return(
            <div>
                <Navigation />
                <div id="itineraryHeader" style={this.state.itineraryHeaderStyle}>
                    <h1>{this.state.testItinerary.itineraryName}</h1>
                    <h3>{this.state.testItinerary.itineraryLocation}</h3>
                </div>
                <div>
                    {
                        this.state.testItinerary.arrayOfDays.map(day =>
                            <Day
                                date={day.date}
                                hours={day.hours}
                            />
                        )
                        /*this.props.days.map(day => {
                            <Day
                                date={day.date}
                                hours={day.hours}
                            />
                        })*/
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return{
        days: state,
        //itineraryBackgroundImage: ,
    }
};
const mapDispatchToProps = dispatch => {
    return{

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
