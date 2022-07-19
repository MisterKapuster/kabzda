import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(props) {

	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Routes>
						<Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
						<Route path='/dialogs' element={<Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData } />} >
							<Route path=':id' element={<Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData }  />} />
						</Route>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;