export type USState = 'American Samoa' | 'Arizona' | 'Alabama' | 'Alaska' | 'Arkansas' | 'California' | 'Colorado' | 'Connecticut' | 'Delaware' | 'Florida' | 'Georgia' | 'Hawaii'
  | 'Idaho' | 'Illinois' | 'Indiana' | 'Iowa' | 'Kansas' | 'Kentucky' | 'Louisiana' | 'Maine' | 'Maryland' | 'Massachusetts' | 'Michigan' | 'Minnesota' | 'Mississippi'
  | 'Missouri' | 'Montana' | 'Nebraska' | 'Nevada' | 'New Hampshire' | 'New Jersey' | 'New Mexico' | 'New York' | 'North Carolina' | 'North Dakota' | 'Northern Mariana Islands'
  | 'Ohio' | 'Oklahoma' | 'Oregon' | 'Pennsylvania' | 'Puerto Rico' | 'Rhode Island' | 'South Carolina' | 'South Dakota' | 'Tennessee' | 'Texas' | 'Utah' | 'Vermont'
  | 'Virginia' | 'Virgin Islands' | 'Washington' | 'West Virginia' | 'Wisconsin' | 'Wyoming';
export type USStateAbbreviations = 'AS' | 'AZ' | 'AL' | 'AK' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'FL' | 'GA' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA'
  | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'MP' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD'
  | 'TN' | 'TX' | 'UT' | 'VT' | 'VA' | 'VI' | 'WA' | 'WV' | 'WI' | 'WY';

export default class USStateConverter {
  public static readonly states: Array<USState> = [
    'American Samoa', 'Arizona', 'Alabama', 'Alaska', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Virgin Islands', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ]

  public static readonly stateAbbreviations: Array<USStateAbbreviations> = [
    'AS', 'AZ', 'AL', 'AK', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
    'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'VI',
    'WA', 'WV', 'WI', 'WY'
  ];

  private constructor() { }

  public static getStates(): Array<USState> {
    return this.states;
  }

  public static getStateAbbreviations(): Array<USStateAbbreviations> {
    return this.stateAbbreviations;
  }

  public static isUSState(input: USState | USStateAbbreviations | string): input is USState {
    return (input as USState).length > 2 && this.states.includes(input as USState);
  }

  public static isUSStateAbbreviation(input: USState | USStateAbbreviations | string): input is USStateAbbreviations {
    return (input as USStateAbbreviations).length === 2 && this.stateAbbreviations.includes(input as USStateAbbreviations);
  }

  public static stateMap = new Map<USState, USStateAbbreviations>([
    ['American Samoa', 'AS'], ['Arizona', 'AZ'], ['Alabama', 'AL'], ['Alaska', 'AK'], ['Arkansas', 'AR'], ['California', 'CA'], ['Colorado', 'CO'], ['Connecticut', 'CT'], ['Delaware', 'DE'],
    ['Florida', 'FL'], ['Georgia', 'GA'], ['Hawaii', 'HI'], ['Idaho', 'ID'], ['Illinois', 'IL'], ['Indiana', 'IN'], ['Iowa', 'IA'], ['Kansas', 'KS'], ['Kentucky', 'KY'], ['Louisiana', 'LA'],
    ['Maine', 'ME'], ['Maryland', 'MD'], ['Massachusetts', 'MA'], ['Michigan', 'MI'], ['Minnesota', 'MN'], ['Mississippi', 'MS'], ['Missouri', 'MO'], ['Montana', 'MT'], ['Nebraska', 'NE'],
    ['Nevada', 'NV'], ['New Hampshire', 'NH'], ['New Jersey', 'NJ'], ['New Mexico', 'NM'], ['New York', 'NY'], ['North Carolina', 'NC'], ['North Dakota', 'ND'],
    ['Northern Mariana Islands', 'MP'], ['Ohio', 'OH'], ['Oklahoma', 'OK'], ['Oregon', 'OR'], ['Pennsylvania', 'PA'], ['Puerto Rico', 'PR'], ['Rhode Island', 'RI'], ['South Carolina', 'SC'],
    ['South Dakota', 'SD'], ['Tennessee', 'TN'], ['Texas', 'TX'], ['Utah', 'UT'], ['Vermont', 'VT'], ['Virginia', 'VA'], ['Virgin Islands', 'VI'], ['Washington', 'WA'], ['West Virginia', 'WV'],
    ['Wisconsin', 'WI'], ['Wyoming', 'WY'],
  ]);

  protected static async convertToAbbreviation(state: USState | string): Promise<USStateAbbreviations> {
    let stateToMatch = `${state}`.trim();
    if (!this.isUSState(stateToMatch)) {
      try {
        if (this.isUSStateAbbreviation(stateToMatch)) {
          return stateToMatch as USStateAbbreviations;
        }

        const { default: fuzzySearch } = await import('fuzzyset.js');
        const fuzzyDict = fuzzySearch(this.states);
        const matches = fuzzyDict.get(stateToMatch);
        if (!matches || matches[0][0] < 0.7) throw new Error(`Invalid state: ${stateToMatch}`);
        const [bestMatch] = matches;
        stateToMatch = bestMatch[1];
      } catch (error) {
        throw new Error(`[StateSwitcher] Invalid state: ${stateToMatch}`);
      }
    }
    if (!stateToMatch || !this.isUSState(stateToMatch)) throw new Error(`Invalid state: ${stateToMatch}`);
    const abbreviation = this.stateMap.get(stateToMatch);
    if (!abbreviation) throw new Error(`Invalid state: ${stateToMatch}`);

    return abbreviation;
  }

  protected static async expandStateAbbreviation(abbreviation: USStateAbbreviations | string): Promise<USState> {
    let abbr = `${abbreviation}`.trim();
    if (!this.isUSStateAbbreviation(abbr)) {
      try {
        if (this.isUSState(abbr)) {
          return abbr as USState;
        }

        const { default: fuzzySearch } = await import('fuzzyset.js');
        const fuzzyDict = fuzzySearch(this.stateAbbreviations);
        const matches = fuzzyDict.get(abbr);
        if (!matches) throw new Error(`Invalid state abbreviation: ${abbr}`);
        if (matches.length > 1 && matches[0][0] < 0.6) throw new Error(`Invalid state abbreviation: ${abbr}`);
        const [bestMatch] = matches;
        abbr = bestMatch[1];
      } catch (error) {
        throw new Error(`[StateSwitcher] Invalid state abbreviation: ${abbr}`);
      }
    }
    if (!abbr || !this.isUSStateAbbreviation(abbr)) throw new Error(`Invalid state abbreviation: ${abbr}`);
    const state = [...this.stateMap.entries()].find(([, stateAbbr]) => stateAbbr === abbr)?.[0];
    if (!state) throw new Error(`Invalid state abbreviation: ${abbr}`);

    return state;
  }

  public static async convert<
    Text extends USState | USStateAbbreviations | string = USState | USStateAbbreviations | string,
    To extends 'long' | 'abbr' = Text extends USState ? 'abbr' : 'long'
  >(
    input: Text, to?: To
  ) {
    if (!to) {
      to = (input.length > 2)
        ? ('abbr' as Text extends USState ? To : never)
        : ('long' as Text extends USStateAbbreviations ? To : never);
    }
    if (to === 'long') {
      return USStateConverter.expandStateAbbreviation(input) as Text extends USStateAbbreviations
        ? Promise<USState>
        : To extends 'long'
        ? Promise<USState>
        : never
    };
    // Return as abbreviation
    if (to === 'abbr') {
      return USStateConverter.convertToAbbreviation(input) as Text extends USState
        ? Promise<USStateAbbreviations>
        : To extends 'abbr'
        ? Promise<USStateAbbreviations>
        : never
    }
    throw new Error(`Invalid conversion: ${input} to ${to}`);
  }
}

export const DataSources = {
  states: USStateConverter.states,
  stateAbbreviations: USStateConverter.stateAbbreviations,
  stateMap: USStateConverter.stateMap
}
export const TypeGuards = {
  isUSState: USStateConverter.isUSState,
  isUSStateAbbreviation: USStateConverter.isUSStateAbbreviation
}

export const abbreviateState = USStateConverter.convert;
