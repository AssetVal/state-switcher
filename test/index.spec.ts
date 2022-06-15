import assert from 'assert';
import abbreviateState, { stateNameAndAbbrTuple, states, stateAbbreviations } from '../index.js';

describe('state-switcher', function() {
  describe('Array<states>', function() {
    it('should contain the correct states', function() {
      assert.deepStrictEqual(states[0], 'American Samoa');
      assert.deepStrictEqual(states[4], 'Arkansas');
    });
  })

  describe('Array<stateAbbreviations>', function() {
    it('should contain the correct state abbreviations', function() {
      assert.deepStrictEqual(stateAbbreviations[0], 'AS');
      assert.deepStrictEqual(stateAbbreviations[4], 'AR');
    });
  })

  describe('Array<stateNameAndAbbrTuple>', function() {
    it('should contain the correct state tuples', function() {
      assert.deepStrictEqual(stateNameAndAbbrTuple[0][0], 'American Samoa');
      assert.deepStrictEqual(stateNameAndAbbrTuple[0][1], 'AS');
      assert.deepStrictEqual(stateNameAndAbbrTuple[4][0], 'Arkansas');
      assert.deepStrictEqual(stateNameAndAbbrTuple[4][1], 'AR');
    });
  })

  describe('abbreviateState()', function() {
    it('Should return an abbreviated state if given a long form state, when missing a transform directive', function() {
      assert.deepStrictEqual(abbreviateState('California'), 'CA');
      assert.deepStrictEqual(abbreviateState('New York'), 'NY');
      assert.deepStrictEqual(abbreviateState('Washington'), 'WA');
    })

    it('Should return the long form state if given an abbreviated state, when missing a transform directive', function() {
      assert.deepStrictEqual(abbreviateState('CA'), 'California');
      assert.deepStrictEqual(abbreviateState('NY'), 'New York');
      assert.deepStrictEqual(abbreviateState('WA'), 'Washington');
    });

    it('Should return undefined if given a state that is not in the list, when missing a transform directive', function() {
      assert.deepStrictEqual(abbreviateState('ZZ'), undefined);
    });

    it('Should return an abbreviated state if given a long form state, when using the \'abbr\' transform directive', function() {
      assert.deepStrictEqual(abbreviateState('California', 'abbr'), 'CA');
      assert.deepStrictEqual(abbreviateState('New York', 'abbr'), 'NY');
      assert.deepStrictEqual(abbreviateState('Washington', 'abbr'), 'WA');
    })

    it('Should return the abbreviated state if given an abbreviated state, when using the \'abbr\' transform directive', function() {
      assert.deepStrictEqual(abbreviateState('CA', 'abbr'), 'CA');
      assert.deepStrictEqual(abbreviateState('NY', 'abbr'), 'NY');
      assert.deepStrictEqual(abbreviateState('WA', 'abbr'), 'WA');
    });

    it('Should return undefined if given a state that is not in the list, when using the \'abbr\' transform directive', function() {
      assert.deepStrictEqual(abbreviateState('ZZ', 'abbr'), undefined);
    });

    it('Should return an long form state if given a abbreviated state, when using the \'long\' transform directive', function() {
      assert.deepStrictEqual(abbreviateState('CA', 'long'), 'California');
      assert.deepStrictEqual(abbreviateState('NY', 'long'), 'New York');
      assert.deepStrictEqual(abbreviateState('WA', 'long'), 'Washington');
    });

    it('Should return the long form state if given an long form state, when using the \'long\' transform directive', function() {
      assert.deepStrictEqual(abbreviateState('California', 'long'), 'California');
      assert.deepStrictEqual(abbreviateState('New York', 'long'), 'New York');
      assert.deepStrictEqual(abbreviateState('Washington', 'long'), 'Washington');
    });

    it('Should return undefined if given a state that is not in the list, when using the \'long\' transform directive', function() {
      assert.deepStrictEqual(abbreviateState('ZZ', 'long'), undefined);
    });
  })
})
