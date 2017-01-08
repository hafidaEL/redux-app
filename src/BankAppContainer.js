import React, { Component } from 'react';
import BankApp from './BankApp';
import bankStore from './bankStore';
import constants from './constants';
import bankActionCreators from './bankActionCreators';

class BankAppContainer extends Component {
    constructor(props) {
        super(props);
      /*  this.state = {
            compte : 0
        }*/
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
                onDepot={ (montant) => bankStore.dispatch(bankActionCreators.depotSurCompte(montant)) }
                onRetrait={ (montant) => bankStore.dispatch(bankActionCreators.retraitSurCompte(montant)) }
            />
        )
    }
}

export default BankAppContainer;