import React, { Component } from 'react'
import senators from '../data/senators'
import {getSenators, postSenators} from "../data/mongodb";

import Senator from './Senator'

export default class extends Component {
  state = {
    senate: "", postMessage:""
  };
  renderSenators () {
    return senators.map(senator =>
      <Senator senator={senator}/>
    )
  }

  async componentWillUpdate() {
    const mongoFetch = await getSenators();
    const senators = Object.values(mongoFetch)
    this.setState({senate: senators.map(senator => <Senator senator={senator}/>)});

  }

  postSenate = async ()=> {
      postSenators(senators).then(
      this.setState({postMessage: "Successful Senators"}));
  };



  render () {
    // const senators = this.renderSenators()
    
    return (
      <div>
          <button onClick = {this.postSenate}>Post Senate</button>
        {this.state.senate}
        <hr/>
          {this.state.postMessage}
      </div>
    );
  }
}