import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ItineraryCarousel.scss';

export default class ItineraryCarousel extends React.Component {


  render() {

    return (

        <div id='itinerary-card-carousel'>

          <div id='itinerary-card'>

            {
              this.props.Cards.map(card => {

                <Card>

                    <CardHeader
                        title="Call to props for itineraryName"
                        subheader="Call to props for itineraryLocation"
                    />

                    <CardMedia
                        image="IMG route"
                        title=""
                    />





                </Card>
              })
            }

          </div>

        </div>

    )

  }

}