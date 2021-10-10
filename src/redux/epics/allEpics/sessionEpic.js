import {switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {RestClient} from '../../../services/network';
import {customisedAction} from '../../actions';
import {generalizedEpic} from '../generalizedEpic';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  END_POINTS,
} from '../../../Constants';

export class sessionEpic {
  static login = action$ =>
    action$.pipe(
      ofType(LOGIN),
      switchMap(async ({payload: {username, password, navigation}}) => {
        return generalizedEpic(
          'post',
          END_POINTS.SignIn,
          {username, password},
          resObj => {
            RestClient.setHeader('Authorization', resObj.token);
            navigation.navigate('HomeScreen');
            return customisedAction(LOGIN_SUCCESS, {session: resObj});
          },
          LOGIN_FAILURE,
        );
      }),
    );
}
