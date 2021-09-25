import {Alert} from 'react-native';
import {RestClient} from '../../services/network';
import {customisedAction} from '../actions';

export const generalizedEpic = async (
  method,
  url,
  data,
  successCallback,
  failureAction,
) => {
  try {
    let response;
    if (method === 'get') {
      response = await RestClient.get(url);
    } else response = await RestClient.post(url, data);
    const {status, data: resObj, problem} = response;
    console.log(response);

    if (status && status === 200) return successCallback(resObj);

    if (status && (status === 401 || status === 422 || status === 503)) {
      Alert.alert(resObj.msg);
      return customisedAction(failureAction);
    }

    if (problem && problem === 'NETWORK_ERROR') {
      Alert.alert('NETWORK_ERROR');
      return customisedAction(failureAction);
    }

    if (problem && problem === 'TIMEOUT_ERROR') {
      Alert.alert('TIMEOUT_ERROR');
      return customisedAction(failureAction);
    }

    Alert.alert('UNKNOWN_ERROR');
    return customisedAction(failureAction);
  } catch (error) {
    console.log(
      `${failureAction.replace('_FAILURE', '')} Unknown Error`,
      error,
    );
    Alert.alert('Unknown Error');
    return customisedAction(failureAction);
  }
};
