import React, { Component } from 'react';
import './App.css';

var arrayLista = [
];

class Listar extends Component {
	constructor(){
		super();
		this.state = {
			lista: "",
			msg: "",
			qtdItens: arrayLista.length,
			estado: false,
		};
	}

	adicionar(aux){
		this.setState({
			lista: aux.target.value,
		});


	}

	handleSubmit(e){
		e.preventDefault();
		arrayLista.push({nome: this.state.lista});
		
		this.setState({
			lista: "",	
		});


	}

	remover(){
		arrayLista.pop();
		this.setState({
			lista:"",
			msg:"",
			estado: false, 
		});
	}


	finalizar(){

		if( arrayLista.length === 0){
			alert("Lista vazia!");
		}
		else{
			this.setState({
				msg: "A lista tem "+arrayLista.length+" elemento(s)",
				qtdItens: this.state.qtdItens + 1,
				estado: true,
			});
		}
		
	}



  render() {
  	const mostrarMensagem = this.state.estado ? <Mensagem itens={"A lista tem "+arrayLista.length+" elemento(s)"} /> : null;
    return (
    	<div>
    		<form onSubmit={this.handleSubmit.bind(this)}>
						<label>Adicione um item</label><br />
						<input type="text" id="inform" value={this.state.lista} onChange={this.adicionar.bind(this)} />
						<button>Adicionar</button>
				</form>
				<button onClick={this.remover.bind(this)}>Remover</button>
				<button onClick={this.finalizar.bind(this)}>Finalizar</button>	
			
				<Linha />	

				{mostrarMensagem}
					
				
		</div>
    );
  }
}

class Linha extends Component {
	render() {
    	return (
    			<ul>
				{arrayLista.map((teste)=>{
					return(
						<li> {teste.nome} </li>
					); 
				}

				)}
				</ul>
			);
	}		
}

class Mensagem extends Component {
	constructor(){
		super();
			this.state = {
				msg: "",
		};
	}
	render() {
    	return (
				<p> {this.props.itens} </p>

			);
	}		
}

export default Listar;