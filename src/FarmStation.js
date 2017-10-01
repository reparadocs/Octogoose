import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Progress from 'react-progressbar';


class FarmStation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: 0,
      cap: 50,
      rate: 2,
    };
    this.tick = this.tick.bind(this);
  }

  tick() {
    if (this.state.food < this.state.cap) {
      this.setState({
        food: this.state.food + this.state.rate,
      });
    }
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  render() {
    return (
      <div style={{height: 50}}>
        <div style={{ width:200, backgroundColor: 'grey', margin: 'auto', marginTop: 10}}>
          <Progress completed={(this.state.food / this.state.cap) * 100} />
        </div>
        <p>
          This is a Farm station. Food: {this.state.food} / {this.state.cap} <span style={{color: 'green'}}>(+{this.state.rate})</span>
        </p>
        <RaisedButton label="Store" secondary={true} style={{marginBottom: 10}}/>

      </div>
    );
  }
}

export default FarmStation;
