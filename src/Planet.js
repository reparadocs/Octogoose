import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Station from './Station.js';

class Planet extends Component {
  render() {
    return (
      <Card style={{width: 500}}>
        <CardHeader
          title="Planet"
        />
        <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
          <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/exo-neptune_art_1080.jpg" alt="" />
        </CardMedia>
        <CardText>
          This is a planet.
        </CardText>
        <Station />
        <Station />
        <Station />
      </Card>
    );
  }
}

export default Planet;
