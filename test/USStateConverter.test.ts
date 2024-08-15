import { describe, it, expect } from 'vitest';
import { abbreviateState, DataSources } from '../src/USStateConverter';

describe('state-switcher', () => {
  describe('Array<states>', () => {
    it('should contain the correct states', () => {
      expect([...DataSources.states]).toContain('American Samoa');
      expect([...DataSources.states]).toContain('Arkansas');
    });
  });

  describe('Array<stateAbbreviations>', () => {
    it('should contain the correct state abbreviations', () => {
      expect([...DataSources.stateAbbreviations]).toContain('AS');
      expect([...DataSources.stateAbbreviations]).toContain('AR');
    });
  });

  describe('Array<stateNameAndAbbrTuple>', () => {
    it('should contain the correct state tuples', () => {
      const stateNameAndAbbrTuple = [...DataSources.stateMap.entries()];
      expect(stateNameAndAbbrTuple[0][0]).toBe('American Samoa');
      expect(stateNameAndAbbrTuple[0][1]).toBe('AS');
      expect(stateNameAndAbbrTuple[4][0]).toBe('Arkansas');
      expect(stateNameAndAbbrTuple[4][1]).toBe('AR');
    });
  });

  describe('abbreviateState()', () => {
    it('Should return an abbreviated state if given a long form state, when missing a transform directive', async () => {
      expect(await abbreviateState('California')).toBe('CA');
      expect(await abbreviateState('New York')).toBe('NY');
      expect(await abbreviateState('Washington')).toBe('WA');
    });

    it('Should return the long form state if given an abbreviated state, when missing a transform directive', async () => {
      expect(await abbreviateState('CA')).toBe('California');
      expect(await abbreviateState('NY')).toBe('New York');
      expect(await abbreviateState('WA')).toBe('Washington');
    });

    it('Should match when given an something close to a state', async () => {
      expect(await abbreviateState('Hawai', 'abbr')).toBe('HI');
      expect(await abbreviateState('DF', 'long')).toBe('Delaware');
    });

    it('Should fail when the fuzzy match is too far off', async () => {
      await expect(async () => await abbreviateState('ZZZ')).rejects.toThrowError('[StateSwitcher] Invalid state: ZZZ');
    });

    it('Should return an abbreviated state if given a long form state, when using the \'abbr\' transform directive', async () => {
      expect(await abbreviateState('California', 'abbr')).toBe('CA');
      expect(await abbreviateState('New York', 'abbr')).toBe('NY');
      expect(await abbreviateState('Washington', 'abbr')).toBe('WA');
    });

    it('Should return the abbreviated state if given an abbreviated state, when using the \'abbr\' transform directive', async () => {
      expect(await abbreviateState('CA', 'abbr')).toBe('CA');
      expect(await abbreviateState('NY', 'abbr')).toBe('NY');
      expect(await abbreviateState('WA', 'abbr')).toBe('WA');
    });

    it('Should return undefined if given a state that is not in the list, when using the \'abbr\' transform directive', async () => {
      await expect(async () => await abbreviateState('ZZ', 'abbr')).rejects.toThrowError(/^\[StateSwitcher\] Invalid state: ZZ/);
    });

    it('Should return a long form state if given an abbreviated state, when using the \'long\' transform directive', async () => {
      expect(await abbreviateState('CA', 'long')).toBe('California');
      expect(await abbreviateState('NY', 'long')).toBe('New York');
      expect(await abbreviateState('WA', 'long')).toBe('Washington');
    });

    it('Should return the long form state if given a long form state, when using the \'long\' transform directive', async () => {
      expect(await abbreviateState('California', 'long')).toBe('California');
      expect(await abbreviateState('New York', 'long')).toBe('New York');
      expect(await abbreviateState('Washington', 'long')).toBe('Washington');
    });

    it('Should return undefined if given a state that is not in the list, when using the \'long\' transform directive', async () => {
      await expect(async () => await abbreviateState('QQ', 'long')).rejects.toThrowError('[StateSwitcher] Invalid state abbreviation: QQ');
    });
  });
});
