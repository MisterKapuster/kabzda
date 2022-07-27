import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { UsersContainer } from './components/Users/UsersContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';

function App(props) {

	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				<div className="app-wrapper-content">
					<Routes>
						<Route path='/profile' element={<ProfileContainer />}>
							<Route path=':userId' element={<ProfileContainer />} />
						</Route>
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