import {switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';

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
      switchMap(async ({payload: {email, password, navigation}}) => {
        return generalizedEpic(
          'post',
          END_POINTS.login,
          {email, password},
          resObj => {
            navigation.navigate('HomeScreen');
            return customisedAction(LOGIN_SUCCESS, {session: resObj});
          },
          LOGIN_FAILURE,
        );
      }),
    );
}
