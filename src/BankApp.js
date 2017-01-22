import React, { Component } from 'react';
import './BankApp.css';
import CheckboxWithLabel from './CheckboxWithLabel';
//import Lien from './Lien';
import { Link } from 'react-router';


class BankApp extends Component {
 handleRetrait () {
   this.props.onRetrait(this.saisie.value);
   this.saisie.value = '';
 }
 handleDepot () {
   this.props.onDepot(this.saisie.value);
   this.saisie.value = '';
 }
 componentDidMount() {
  this.saisie.focus();  
 }

  render() {

    const classTrue = this.props.showInfo ? '' : 'hidden' ;
    const classFalse = this.props.showInfo ? 'hidden' : '' ;
    return (
      <div>
          <Link activeClassName="active" to="/home">Home</Link>{" "}
          <Link activeClassName="active" to="/about">About</Link>{" "}
          <Link activeClassName="active" to="/contact">Contact</Link>
      
        <h1>Votre compte est de : {this.props.compte} euros</h1>  
        <CheckboxWithLabel labelOn="ON" labelOff="OFF"   />
        <div className="atm">
          Montant : <input type="text" ref={(input) => this.saisie = input}/>
          <button onClick={this.handleRetrait.bind(this)}>RETRAIT</button>
          <button onClick={this.handleDepot.bind(this)}>DEPOT</button>
        </div>
        showInfo : [{this.props.showInfo}]

        <div className={classTrue} >cette div s affiche quand showInfo est vrai </div>
        <div className={classFalse} >cette div s affiche quand showInfo est faux </div>

        <div onClick={this.props.onToggle}>Infos supplémentaires</div>

      </div>
    );
  }
}

BankApp.propTypes = {
  compte : React.PropTypes.number,
  showInfo : React.PropTypes.bool,
  onDepot : React.PropTypes.func,
  onRetrait : React.PropTypes.func,
  onToggle: React.PropTypes.func
}
export default BankApp;
