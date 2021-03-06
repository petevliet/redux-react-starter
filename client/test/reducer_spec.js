import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/js/reducer';

describe ('reducer', () => {

  it('handles SET_STATE', () => {
      const initialState = Map();
      const action = {
        type: 'SET_STATE',
        state: Map({
          name: 'Peter'
        })
      };

      const nextState = reducer(initialState, action);

      expect(nextState).to.equal(fromJS({
        name: 'Peter'
      }));
  });

});
