import React, { Component } from 'react';
import './App.css';


class Listar extends Component {
	constructor(){
		super();
		this.state = {
			lista: "",
			numero: "",
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


	finalizar(){

		if( this.state.lista === ""){
			alert("Lista vazia!");
		}
		else{
			this.setState({
				numero:1,
			});
		}
		
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
			<button onClick={this.finalizar.bind(this)}>Finalizar</button>
			<div><br></br>{this.state.numero}</div>	
		</div>
    );
  }
}

export default Listar;