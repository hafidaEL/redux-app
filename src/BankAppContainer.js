import React, { Component } from 'react';
import BankApp from './BankApp';
import bankStore from './bankStore';
import constants from './constants';

class BankAppContainer extends Component {
    constructor(props) {
        super(props);
      /*  this.state = {
            compte : 0
        }*/
        bankStore.dispatch({ type: constants.CREATION_COMPTE });
        this.state = { compte : bankStore.getState().compte } ;
    }
    componentDidMount() {
        this.unsubscribe = bankStore.subscribe( () => this.setState ({ compte : bankStore.getState().compte }) ) 
    }
    componentWillUnmount() {
       this.unsubscribe();
    }
    
    render() {
        return (
            <BankApp 
                compte={this.state.compte}
                onDepot={ (montant) => bankStore.dispatch({ type: constants.DEPOT_COMPTE , montant  }) }
                onRetrait={ (montant) => bankStore.dispatch({ type: constants.RETRAIT_COMPTE , montant }) }
            />
        )
    }
}

export default BankAppContainer;