import React from 'react';
import './App.css';
import Header from './components/Header';
import IncreaseTodo from './components/IncreaseTodo';
import Todos from './components/Todos';

import { Provider } from './context';

function App() {
	return (
		<Provider>
			<div>
				<Header />
				<IncreaseTodo />
				<Todos />
			</div>
		</Provider>
	);
}

export default App;
