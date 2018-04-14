import React, { Component } from 'react'
import senators from '../data/senators'
import Senator from './Senator'

export default class extends Component {
  renderSenators () {
    return senators.map(senator =>
      <Senator senator={senator}/>
    )
  }
  render () {
    const senators = this.renderSenators()
    
    return (
      <div>
        {senators}
      </div>
    );
  }
}