export type USState = 'American Samoa' | 'Arizona' | 'Alabama' | 'Alaska' | 'Arkansas' | 'California' | 'Colorado' | 'Connecticut' | 'Delaware' | 'Florida' | 'Georgia' | 'Hawaii'
                    | 'Idaho' | 'Illinois' | 'Indiana' | 'Iowa' | 'Kansas' | 'Kentucky' | 'Louisiana' | 'Maine' | 'Maryland' | 'Massachusetts' | 'Michigan' | 'Minnesota' | 'Mississippi'
                    | 'Missouri' | 'Montana' | 'Nebraska' | 'Nevada' | 'New Hampshire' | 'New Jersey' | 'New Mexico' | 'New York' | 'North Carolina' | 'North Dakota' | 'Northern Mariana Islands'
                    | 'Ohio' | 'Oklahoma' | 'Oregon' | 'Pennsylvania' | 'Puerto Rico' | 'Rhode Island' | 'South Carolina' | 'South Dakota' | 'Tennessee' | 'Texas' | 'Utah' | 'Vermont'
                    | 'Virginia' | 'Virgin Islands' | 'Washington' | 'West Virginia' | 'Wisconsin' | 'Wyoming';

export const states: Array<USState> = [
  'American Samoa', 'Arizona', 'Alabama', 'Alaska', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Virgin Islands', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
]

export type USStateAbbreviations = 'AS' | 'AZ' | 'AL' | 'AK' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'FL' | 'GA' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA'
                                 | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'MP' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD'
                                 | 'TN' | 'TX' | 'UT' | 'VT' | 'VA' | 'VI' | 'WA' | 'WV' | 'WI' | 'WY';

export const stateAbbreviations: Array<USStateAbbreviations> = [
  'AS', 'AZ', 'AL', 'AK', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
  'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'VI',
  'WA', 'WV', 'WI', 'WY'
];

export type USStateTuples = ['American Samoa', 'AS'] | ['Arizona', 'AZ'] | ['Alabama', 'AL'] | ['Alaska', 'AK'] | ['Arkansas', 'AR'] | ['California', 'CA'] | ['Colorado', 'CO']
                          | ['Connecticut', 'CT'] | ['Delaware', 'DE'] | ['Florida', 'FL'] | ['Georgia', 'GA'] | ['Hawaii', 'HI'] | ['Idaho', 'ID'] | ['Illinois', 'IL']
                          | ['Indiana', 'IN'] | ['Iowa', 'IA'] | ['Kansas', 'KS'] | ['Kentucky', 'KY'] | ['Louisiana', 'LA'] | ['Maine', 'ME'] | ['Maryland', 'MD'] | ['Massachusetts', 'MA']
                          | ['Michigan', 'MI'] | ['Minnesota', 'MN'] | ['Mississippi', 'MS'] | ['Missouri', 'MO'] | ['Montana', 'MT'] | ['Nebraska', 'NE'] | ['Nevada', 'NV']
                          | ['New Hampshire', 'NH'] | ['New Jersey', 'NJ'] | ['New Mexico', 'NM'] | ['New York', 'NY'] | ['North Carolina', 'NC'] | ['North Dakota', 'ND']
                          | ['Northern Mariana Islands', 'MP'] | ['Ohio', 'OH'] | ['Oklahoma', 'OK'] | ['Oregon', 'OR'] | ['Pennsylvania', 'PA'] | ['Puerto Rico', 'PR'] | ['Rhode Island', 'RI']
                          | ['South Carolina', 'SC'] | ['South Dakota', 'SD'] | ['Tennessee', 'TN'] | ['Texas', 'TX'] | ['Utah', 'UT'] | ['Vermont', 'VT'] | ['Virginia', 'VA']
                          | ['Virgin Islands', 'VI'] | ['Washington', 'WA'] | ['West Virginia', 'WV'] | ['Wisconsin', 'WI'] | ['Wyoming', 'WY'];

export const stateNameAndAbbrTuple: Array<USStateTuples> = [
  ['American Samoa', 'AS'], ['Arizona', 'AZ'], ['Alabama', 'AL'], ['Alaska', 'AK'], ['Arkansas', 'AR'], ['California', 'CA'], ['Colorado', 'CO'], ['Connecticut', 'CT'], ['Delaware', 'DE'],
  ['Florida', 'FL'], ['Georgia', 'GA'], ['Hawaii', 'HI'], ['Idaho', 'ID'], ['Illinois', 'IL'], ['Indiana', 'IN'], ['Iowa', 'IA'], ['Kansas', 'KS'], ['Kentucky', 'KY'], ['Louisiana', 'LA'],
  ['Maine', 'ME'], ['Maryland', 'MD'], ['Massachusetts', 'MA'], ['Michigan', 'MI'], ['Minnesota', 'MN'], ['Mississippi', 'MS'], ['Missouri', 'MO'], ['Montana', 'MT'], ['Nebraska', 'NE'],
  ['Nevada', 'NV'], ['New Hampshire', 'NH'], ['New Jersey', 'NJ'], ['New Mexico', 'NM'], ['New York', 'NY'], ['North Carolina', 'NC'], ['North Dakota', 'ND'],
  ['Northern Mariana Islands', 'MP'], ['Ohio', 'OH'], ['Oklahoma', 'OK'], ['Oregon', 'OR'], ['Pennsylvania', 'PA'], ['Puerto Rico', 'PR'], ['Rhode Island', 'RI'], ['South Carolina', 'SC'],
  ['South Dakota', 'SD'], ['Tennessee', 'TN'], ['Texas', 'TX'], ['Utah', 'UT'], ['Vermont', 'VT'], ['Virginia', 'VA'], ['Virgin Islands', 'VI'], ['Washington', 'WA'], ['West Virginia', 'WV'],
  ['Wisconsin', 'WI'], ['Wyoming', 'WY'],
];

export function abbreviateState(input: string, to: undefined): USState | USStateAbbreviations | undefined
export function abbreviateState(input: USState , to: undefined): USStateAbbreviations | undefined
export function abbreviateState(input: USStateAbbreviations , to: undefined): USState | undefined
export function abbreviateState(input: string, to: 'long'): USState | undefined
export function abbreviateState(input: USState | USStateAbbreviations, to: 'long'): USState
export function abbreviateState(input: string, to: 'abbr'): USStateAbbreviations | undefined
export function abbreviateState(input: USState | USStateAbbreviations, to: 'abbr'): USStateAbbreviations
export default function abbreviateState(input: USState | USStateAbbreviations | string, to?: 'long'|'abbr'): USState | USStateAbbreviations | undefined {
  const cleanInput = (stateStr: USState | USStateAbbreviations | string) => {
    // Change the input to only capitalize the first letter in each word
    if (stateStr.length > 2) return stateStr.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()) as USState
    // Change the input to only uppercase
    return stateStr.toUpperCase() as USStateAbbreviations;
  }

  const findAbbreviation = (stateStr: USState): USStateAbbreviations|undefined => {
    for (let i = 0; i < stateNameAndAbbrTuple.length; i++){
      if (stateNameAndAbbrTuple[i][0] === stateStr) return stateNameAndAbbrTuple[i][1];
    }
    return undefined
  }

  const findLongName = (stateStr: USStateAbbreviations): USState|undefined => {
    for (let i = 0; i < stateNameAndAbbrTuple.length; i++){
      if (stateNameAndAbbrTuple[i][1] === stateStr) return stateNameAndAbbrTuple[i][0];
    };
    return undefined
  }

  input = cleanInput(input);

  if (input !== undefined){
    if (to === 'long'){
      // Only try and find the long name if the input is an abbreviation
      if (input.length === 2) return findLongName(input as USStateAbbreviations);
      if (states.includes(input as USState)) return input as USState;
      return undefined;
    }

    if (to === 'abbr' && input != undefined){
      // Only try and find the abbreviation if the input is a long name
      if (input.length > 2) return findAbbreviation(input as USState);
      if (stateAbbreviations.includes(input as USStateAbbreviations)) return input as USStateAbbreviations;
      return undefined;
    }
    // Guess the input type based on size if no transformation directive is given
    if (input.length > 2 && to === undefined) return findAbbreviation(input as USState);
    return findLongName(input as USStateAbbreviations);
  }

  return undefined;
};
