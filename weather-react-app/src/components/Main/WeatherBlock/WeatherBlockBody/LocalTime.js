import React from 'react';

class LocalTime extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            timeZone: this.props.timeZone
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        const {date, timeZone} = this.state;
        const dateOptions = { timeZone: timeZone, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const day = date.toLocaleString('en-GB', dateOptions).toUpperCase();
        const time = date.toLocaleTimeString('en-GB', { timeZone: timeZone});
        return (    
            <span>{day}, {time}</span>
        )
    }
}

export default LocalTime;