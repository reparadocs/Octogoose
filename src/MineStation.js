import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Progress from 'react-progressbar';


class MineStation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metal: 0,
      cap: 25,
      rate: 0.5,
    };
    this.tick = this.tick.bind(this);
  }

  tick() {
    if (this.state.metal < this.state.cap) {
      this.setState({
        metal: this.state.metal + this.state.rate,
      });
    }
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  render() {
    return (
      <div>
        <div style={{width:200, backgroundColor: 'grey', margin: 'auto', marginTop: 10}}>
          <Progress completed={(this.state.metal / this.state.cap) * 100} />
        </div>
        <p>This is a Mine station. Metal: {this.state.metal} / {this.state.cap} <span style={{color: 'green'}}>(+{this.state.rate})</span></p>

        <RaisedButton label="Store" secondary={true} style={{marginBottom: 10}}/>
      </div>
    );
  }
}

export default MineStation;
