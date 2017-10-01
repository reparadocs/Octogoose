import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import ResearchStation from './ResearchStation.js';
import MineStation from './MineStation.js';
import FactoryStation from './FactoryStation.js';
import FarmStation from './FarmStation.js';

const StationTypes = {
  NONE: 0,
  RESEARCH: 1,
  FARM: 2,
  MINE: 3,
  FACTORY: 4,
};

class Station extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: StationTypes.NONE,
    };
  }
  render() {
    var type_variance =
      <div>
        Build:
        <RaisedButton
          label="Research"
          primary={true}
          onTouchTap={() =>{
            this.setState({type: StationTypes.RESEARCH});
          }}
          style={{margin: 10}}
        />
        <RaisedButton
          label="Farm"
          primary={true}
          onTouchTap={() => {
            this.setState({type: StationTypes.FARM})
          }}
        />
        <RaisedButton
          label="Mine"
          primary={true}
          onTouchTap={() => {
            this.setState({type: StationTypes.MINE})
          }}
          style={{margin: 10}}
        />
        <RaisedButton
          label="Factory"
          primary={true}
          onTouchTap={() => { this.setState({
            type: StationTypes.FACTORY})
          }}
        />
      </div>;

    switch (this.state.type) {
      case StationTypes.RESEARCH:
        type_variance = <ResearchStation />;
        break;
      case StationTypes.FARM:
        type_variance = <FarmStation />;
        break;
      case StationTypes.MINE:
        type_variance = <MineStation />;
        break;
      case StationTypes.FACTORY:
        type_variance = <FactoryStation />;
        break;
      default:
        break;
    }

    return (
      <div >
        <Divider />
        <div>
        { type_variance }
        </div>
      </div>
    );
  }
}

export default Station;
