import { Dispatch, AnyAction } from 'redux';
import { INVERT_FLAG } from 'Types';

export const changeFlag = (currentFlag: boolean) => (dispatch: Dispatch<AnyAction>): void => {
  dispatch({
    type: INVERT_FLAG,
    payload: !currentFlag
  });
};

export default null;
