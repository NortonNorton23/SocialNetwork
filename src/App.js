import './App.css';
import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import MessengerContainer from './components/Messsenger/MessengerContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<HeaderContainer />
				<NavbarContainer />
				<div className='content'>
					<Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
					<Route path='/Messenger' render={() => <MessengerContainer />} />
					<Route path='/News' render={() => <News />} />
					<Route path='/Music' render={() => <Music />} />
					<Route path='/Settings' render={() => <Settings />} />
					<Route path='/Users' render={() => <UsersContainer />} />
					<Route path='/login' render={() => <Login />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
