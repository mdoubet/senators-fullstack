import React, { Component } from 'react'
import senators from '../data/senators'
import {getSenators} from "../data/mongodb";

import Senator from './Senator'

export default class extends Component {
  state = {
    senators: ""
  };
  renderSenators () {
    return senators.map(senator =>
      <Senator senator={senator}/>
    )
  }

  async componentWillMount() {
    const mongoFetch = await getSenators();
    const senators = Object.values(mongoFetch)
    this.setState({senate: senators.map(senator => <Senator senator={senator}/>)});
    
  }

  render () {
    const senators = this.renderSenators()
    
    return (
      <div>
        {this.state.senate}
      </div>
    );
  }
}