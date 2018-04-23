import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridList, {GridTile} from 'material-ui/GridList'
import senators from '../data/senators'
import {getSenators, postSenators} from "../data/mongodb";


import Senatorsearcher from './Senatorsearcher'
import Senator from './Senator'
import SenatorCard from './SenatorCard'




export default class extends Component {
  // state = {
  //   senate: "", postMessage:""
  // };
  // renderSenators () {
  //   return senators.map(senator =>
  //     <Senator senator={senator}/>
  //   )
  // }

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);


        this.state = {
            curSenators : '',
            ssValue: ''
        }
    }

    handleSearch(event){
        this.setState({ssValue: event.target.value});
    }

    repubFilter = () => {
        this.setState({curSenators: senators.filter((senator) => senator.party.match('Republican'))})
    }
    demFilter = () => {
        this.setState({curSenators: senators.filter((senator) => senator.party.match('Democrat'))})
    }
    indyFilter =()=>{
        this.setState({curSenators: senators.filter((senator) => senator.party.match('Independent'))})
    }
    resetSenators= () => {
        this.setState({curSenators: senators})
    }

    utahFilter =()=> {
        this.setState({curSenators: senators.filter((senator) => senator.state.match('UT'))})

    }
    seniorUTFilter =()=> {
        this.setState({curSenators: senators.filter((senator) => senator.state.match('UT')&& senator.senator_rank.match('senior'))})

    }



    renderSenators(){
        if (this.state.curSenators === ''){
            return (<h2>Loading Senators. . .</h2>);
        }
        return (

                this.state.curSenators.filter((senator) => { return (
                senator.person.firstname.toLowerCase().match(this.state.ssValue.toLowerCase()) ||
                senator.person.lastname.toLowerCase().match(this.state.ssValue.toLowerCase()) ||
                senator.person.nickname.toLowerCase().match(this.state.ssValue.toLowerCase())
            )
            })
                .map(senator => {

                        return(

                              <SenatorCard senator={senator}/>



                        );
                    }


                    //     {/**/}
                )
        )
    }

  async componentDidMount() {
    const mongoFetch = await getSenators();
    const senators = Object.values(mongoFetch);
    //this.setState({senate: senators.map(senator => <Senator senator={senator}/>)});
    this.setState({curSenators: senators});

    console.log("Will Update ran");
  }

  // postSenate = async ()=> {
  //     postSenators(senators).then(
  //     this.setState({postMessage: "Successful Senators"}));
  // };



  render () {
    const senators = this.renderSenators()
      const styles = {
          root: {
              display: 'flex',
              justifyContent: 'center',
              flexFlow: 'column wrap'

          },
          gridList: {
              flexDirection: 'row',
              justifyContent:'center',
              webkitColumnCount: '3',
              columnCount: '3',
              overflowY: 'auto'
          },
      };
    // return (
    //   <div>
    //       <button onClick = {this.postSenate}>Post Senate</button>
    //     {this.state.senate}
    //     <hr/>
    //       {this.state.postMessage}
    //   </div>
    // );

      return (
          <MuiThemeProvider>
              <div style = {{textAlign : "center", minWidth:"325px", padding:"0px"}}>
                  <Senatorsearcher value = { this.state.ssValue }  onChange = {this.handleSearch}/>
                  <input type = "button" value="Everybody" onClick={this.resetSenators}/>
                  <input type = "button" value="Repubs" onClick={this.repubFilter}/>
                  <input type = "button" value="Dems" onClick={this.demFilter}/>
                  <input type = "button" value="Indys" onClick={this.indyFilter}/>
                  <input type = "button" value="UT" onClick={this.utahFilter}/>
                  <input type = "button" value="senior UT" onClick={this.seniorUTFilter}/>

              </div>
              <div style = {styles.root}>
                <GridList cols={'auto'} cellHeight={'auto'} style = {styles.gridList}>
                  {senators}
                </GridList>
              </div>
          </MuiThemeProvider>
      );
    }
}