import React, { Component } from 'react';
import './App.css';


class Formulario extends Component {
	render() {
		return (
		<form>
			<label>Adicione um item</label><br></br>
			<input type="text" id="inform"></input>
			<button>Adicionar</button>
		</form>
		);
	}
}

export default Formulario;