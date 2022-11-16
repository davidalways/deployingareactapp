import React from 'react'
import { remove } from './javaScript'


class Logic extends React.Component {
    constructor(props) {
        console.log('Constructor')
        super(props);

        this.state = {
            date: new Date()
        }
    }

    remove() {
        let myHead = document.getElementById('head')
        if (myHead.style.display === 'block') {
            myHead.style.display = 'none'
        } else {
            myHead.style.display = 'block'
        }
    }

    render() {
        console.log('render')

        return (
            <div>
                <button onClick={this.remove}> STOP </button>
                <h1 id='head'>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }

    componentDidMount() {
        console.log('mounts only once, when the component mounts');
        let interval = 1000;
        this.intervalID = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, interval);
    }

    componentWillUnmount() {
        console.log('unmount now');
        clearInterval(this.intervalID);

    }


}





export default Logic;