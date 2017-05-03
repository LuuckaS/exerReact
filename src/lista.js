import React, { Component } from 'react';
import './App.css';

class Listar extends Component {
	constructor(){
		super();
		this.state = {
			lista: "",
		};
	}

	adicionar(){
		this.setState({
			lista: document.getElementById('inform').value,
		});
	}

	remover(){
		this.setState({
			lista:"",
		});
	}

  render() {
    return (
    	<div>
    	<ul>
      		<li> {this.state.lista} </li>
      	</ul>

			<label>Adicione um item</label><br></br>
			<input type="text" id="inform"></input>
			<button onClick={this.adicionar.bind(this)}>Adicionar</button>
			<button onClick={this.remover.bind(this)}>Remover</button>
			<button >Finalizar</button>
		</div>
    );
  }
}

export default Listar;