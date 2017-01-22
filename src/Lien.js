import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Lien extends Component {
    renderSpan() {
        return (
            <span>{this.props.texte}</span>
        )
    }
    renderLink() {
        return (
             <Link activeClassName="active" to="/home">{this.props.texte}</Link>
        )
    }
    render() {
        
    }
}
  
Lien.propTypes={
    texte : React.PropTypes.string
}