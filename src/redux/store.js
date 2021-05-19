import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import messengerReducer from "./messenger-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
	profilePage: profileReducer,
	messengerPage: messengerReducer,
	navbar: navbarReducer,
	usersPage: usersReducer,
	authReducer: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;