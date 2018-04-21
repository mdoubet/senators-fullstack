import React, { Component } from 'react';

export default class extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onChange(event);

    }
    handleSubmit() {
        this.setState({value: ''})
    }



    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Find Senator:
                    <input type="text" value={this.props.ssValue} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Reset" />
            </form>
        )
    }
}