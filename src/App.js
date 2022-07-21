import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { UsersContainer } from './components/Users/UsersContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';

function App(props) {

	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Routes>
						<Route path='/' element={<Profile />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/dialogs' element={<DialogsContainer />} >
							<Route path=':id' element={<DialogsContainer />} />
						</Route>
						<Route path="/users" element={ <UsersContainer /> }></Route>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;