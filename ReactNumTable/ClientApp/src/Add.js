import React from 'react';

class Add extends React.Component {
    render() {
        const { number, onSelectNumber } = this.props;
        return (
            <tr>
                <td>{number.num}</td>
                <td>{number.add === true ?
                    <button onClick={onSelectNumber} className='btn btn-primary'>Add</button> : <button onClick={onSelectNumber} className='btn btn-danger'>Remove</button> }</td>
            </tr>
            
            )
    }

}
export default Add;