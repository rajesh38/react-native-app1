import React, {Component} from 'react';
import {Text} from 'react-native';

export default class Timer extends Component {
    constructor(props, context) {
        super(props, context);
        let curTime = this.getTime()
        this.state = {
            time: this.getFormatedTime()
        }
    }
    getTime = () => {
        let curDate = new Date;
        return {
            sec: curDate.getSeconds(),
            min: curDate.getMinutes(),
            hour: curDate.getHours(),
        }
    }
    getFormatedTime = () => {
        let curTime = this.getTime();
        return `${curTime.hour}:${curTime.min}:${curTime.sec}`
    }
    setTime = () => {
        this.setState({time: this.getFormatedTime()});
    }
    componentDidMount () {
        setInterval(() => {
            this.setTime();
        }, 1000);
    }
    render () {
        return (
            <Text style={this.props.style}>Time now: {this.state.time}</Text>
        )
    }
}