import React, { Component } from 'react';
import './BankApp.css';

class BankApp extends Component {
 handleRetrait () {
   console.log("handleRetrait, this.saisie.value : "+this.saisie.value);
   this.props.onRetrait(this.saisie.value);
   this.saisie.value = '';
 }
 handleDepot () {
   console.log("handleDepot, this.saisie.value : "+this.saisie.value);
   this.props.onDepot(this.saisie.value);
   this.saisie.value = '';
 }
 componentDidMount() {
  this.saisie.focus();  
 }

  render() {
    return (
      <div>
        <h1>Votre compte est de : {this.props.compte} euros</h1>  
        <div className="atm">
          Montant : <input type="text" ref={(input) => this.saisie = input}/>
          <button onClick={this.handleRetrait.bind(this)}>RETRAIT</button>
          <button onClick={this.handleDepot.bind(this)}>DEPOT</button>
        </div>
      </div>
    );
  }
}

BankApp.propTypes = {
  compte : React.PropTypes.number,
  onDepot : React.PropTypes.func,
  onRetrait : React.PropTypes.func
}
export default BankApp;
