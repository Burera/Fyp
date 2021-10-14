import {combineEpics} from 'redux-observable';
import {sessionEpic} from './allEpics/sessionEpic';

export default combineEpics(sessionEpic.login, sessionEpic.SignUp);
