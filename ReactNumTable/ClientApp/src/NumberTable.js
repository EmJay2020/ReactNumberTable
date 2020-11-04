import React from 'react';
import Add from './Add';
import AddBtn from './AddBtn';

class NumberTable extends React.Component {

    state = {

        numbers: [],
        selectedNumbers: [],
        number: {
            num: 0,
            add: true
        }
    };

    onSelectNumber = num => {
        const { selectedNumbers } = this.state;
        if (num.add) {
            num.add = false;
            this.setState({ selectedNumbers: [...selectedNumbers, num] })
        }
        else {
            const result = selectedNumbers.filter(x => x.num !== num.num);
            num.add = true;
            this.setState({ selectedNumbers: [...result] })
        }
        
    }

    random = () => {
        const { numbers } = this.state;
         let num = Math.floor(Math.random() * 10000) + 1;
        this.setState({ numbers: [...numbers, { num: num, add: true }] });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <AddBtn random={this.random} />
                <br />
                <br/>
                <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Add/Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.numbers.map((p, i) =>
                        <Add key={i} number={p}
                            onSelectNumber={() => this.onSelectNumber(p)} />
                    )}
                </tbody>
                </table>
                <ul>
                    {this.state.selectedNumbers.map((p, i) => <li key={i}>{p.num}</li>)}
                </ul>
            </div>
            );
     
    }

}
export default NumberTable;