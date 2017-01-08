import React, { Component } from 'react';
import BankApp from './BankApp';

class BankAppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            compte : 100
        }
    }
    render() {
        return (
            <BankApp 
                compte={this.state.compte}
                onDepot={ (montant) => { console.log("depot "+montant) }}
                onRetrait={ (montant) => { console.log("retrait "+montant) }}
            />
        )
    }
}

export default BankAppContainer;