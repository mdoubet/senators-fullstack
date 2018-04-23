import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleToggle = (event, toggle) => {
        this.setState({expanded: toggle});
    };

    handleExpand = () => {
        this.setState({expanded: true});
    };

    handleReduce = () => {
        this.setState({expanded: false});
    };



    render() {
        const senator = this.props.senator;
        const partyColor = senator.party.match('Democrat') ? "blue" : (senator.party.match('Republican')) ?  "red" : "green";
        const partyAvatarURL = senator.party.match('Democrat') ? "https://ih0.redbubble.net/image.16160087.3594/flat,1000x1000,075,f.jpg"
            : (senator.party.match('Republican')) ?  "https://exfranshare.s3.amazonaws.com/uploads/post/avatar/4602/Republican_Party_Facts.jpg"
                : "https://demchron-wpengine.netdna-ssl.com/wp-content/uploads/Logo-Independent-American.jpg";
        const senatorName = senator.person.firstname.concat((senator.person.nickname ?  ` "${senator.person.nickname}" ${senator.person.lastname}` : ` ${senator.person.lastname}`))

        const renderDetails = () => {
            return (
                <article>
                    <h4>phone number: {senator.phone} </h4>
                    <h4>website: <a href = {senator.website}> {senator.website}</a> </h4>
                </article>
            )
        };
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{borderRadius:'20px', width: '360px'}}>
                <CardHeader
                    title= {senatorName}
                    titleColor = '#F0F0F0'
                    style = {{'background-color':partyColor}}
                    subtitle = {senator.description}
                    subtitleColor = '#C3C3C3'
                    avatar={partyAvatarURL}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                {/*<CardText>*/}
                    {/*<Toggle*/}
                        {/*toggled={this.state.expanded}*/}
                        {/*onToggle={this.handleToggle}*/}
                        {/*labelPosition="right"*/}
                        {/*label="This toggle controls the expanded state of the component."*/}
                    {/*/>*/}
                {/*</CardText>*/}
                {/*<CardMedia*/}
                    {/*expandable={true}*/}
                    {/*overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}*/}
                {/*>*/}

                {/*</CardMedia>*/}
                <CardTitle title={senatorName} subtitle={senator.description} expandable={true} />
                <CardText expandable={true}>
                    {renderDetails()}
                    <CardActions>
                        <FlatButton label="hide details" onClick={this.handleReduce} />
                    </CardActions>
                </CardText>

            </Card>
        );
    }
}


