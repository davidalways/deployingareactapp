import React from 'react';

class Something extends React.Component{
    render(){
        return (
            <div>
                <h1>A collection of email Inputs</h1>
                <input type="text" placeholder={this.props.placeholder} onChange={this.props.onChange} />
            </div>
        )
    }
}

export default Something