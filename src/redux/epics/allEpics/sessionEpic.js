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
  SIGNUP,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
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

  static SignUp = action$ =>
    action$.pipe(
      ofType(SIGNUP),
      switchMap(
        async ({
          payload: {
            username,
            password,
            navigation,
            email,
            number,
            first_name,
            last_name,
          },
        }) => {
          return generalizedEpic(
            'post',
            END_POINTS.SignUp,
            {username, password, email, number, first_name, last_name},
            resObj => {
              navigation.navigate('SignIn');
              return customisedAction(SIGNUP_SUCCESS);
            },
            SIGNUP_FAILURE,
          );
        },
      ),
    );
}
