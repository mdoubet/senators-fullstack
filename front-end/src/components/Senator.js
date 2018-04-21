import React, { Component } from 'react'

export default class extends Component {
  render () {
    const senator = this.props.senator;
      const partyColor = senator.party.match('Democrat') ? "blue" : (senator.party.match('Republican')) ?  "red" : "green";
      return (
          <div style = {{color:partyColor}}>{senator.person.nickname ? senator.person.nickname : senator.person.firstname} {senator.person.lastname} from {senator.state}</div>
      );
  }
}