import React from 'react';

class AddBtn extends React.Component {
    render() {
        return (
            <div>
                <button className='btn btn-primary' onClick={this.props.random}>Add Random Number</button>
            </div>
            )
        
    }
}
export default AddBtn;