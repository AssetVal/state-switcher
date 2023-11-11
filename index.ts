// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Types {
  export type USState = 'American Samoa' | 'Arizona' | 'Alabama' | 'Alaska' | 'Arkansas' | 'California' | 'Colorado' | 'Connecticut' | 'Delaware' | 'Florida' | 'Georgia' | 'Hawaii'
    | 'Idaho' | 'Illinois' | 'Indiana' | 'Iowa' | 'Kansas' | 'Kentucky' | 'Louisiana' | 'Maine' | 'Maryland' | 'Massachusetts' | 'Michigan' | 'Minnesota' | 'Mississippi'
    | 'Missouri' | 'Montana' | 'Nebraska' | 'Nevada' | 'New Hampshire' | 'New Jersey' | 'New Mexico' | 'New York' | 'North Carolina' | 'North Dakota' | 'Northern Mariana Islands'
    | 'Ohio' | 'Oklahoma' | 'Oregon' | 'Pennsylvania' | 'Puerto Rico' | 'Rhode Island' | 'South Carolina' | 'South Dakota' | 'Tennessee' | 'Texas' | 'Utah' | 'Vermont'
    | 'Virginia' | 'Virgin Islands' | 'Washington' | 'West Virginia' | 'Wisconsin' | 'Wyoming';
  export type USStateAbbreviations = 'AS' | 'AZ' | 'AL' | 'AK' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'FL' | 'GA' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA'
    | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'MP' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD'
    | 'TN' | 'TX' | 'UT' | 'VT' | 'VA' | 'VI' | 'WA' | 'WV' | 'WI' | 'WY';
}

type USState = Types.USState;
type USStateAbbreviations = Types.USStateAbbreviations;

const states: Array<USState> = [
  'American Samoa', 'Arizona', 'Alabama', 'Alaska', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Virgin Islands', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
]

const stateAbbreviations: Array<USStateAbbreviations> = [
  'AS', 'AZ', 'AL', 'AK', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
  'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'VI',
  'WA', 'WV', 'WI', 'WY'
];

function isUSState(input: USState | USStateAbbreviations): input is USState {
  return (input as USState).length > 2 && states.includes(input as USState);
}

function isUSStateAbbreviation(input: USState | USStateAbbreviations): input is USStateAbbreviations {
  return (input as USStateAbbreviations).length === 2 && stateAbbreviations.includes(input as USStateAbbreviations);
}

const stateMap = new Map<USState, USStateAbbreviations>([
  ['American Samoa', 'AS'], ['Arizona', 'AZ'], ['Alabama', 'AL'], ['Alaska', 'AK'], ['Arkansas', 'AR'], ['California', 'CA'], ['Colorado', 'CO'], ['Connecticut', 'CT'], ['Delaware', 'DE'],
  ['Florida', 'FL'], ['Georgia', 'GA'], ['Hawaii', 'HI'], ['Idaho', 'ID'], ['Illinois', 'IL'], ['Indiana', 'IN'], ['Iowa', 'IA'], ['Kansas', 'KS'], ['Kentucky', 'KY'], ['Louisiana', 'LA'],
  ['Maine', 'ME'], ['Maryland', 'MD'], ['Massachusetts', 'MA'], ['Michigan', 'MI'], ['Minnesota', 'MN'], ['Mississippi', 'MS'], ['Missouri', 'MO'], ['Montana', 'MT'], ['Nebraska', 'NE'],
  ['Nevada', 'NV'], ['New Hampshire', 'NH'], ['New Jersey', 'NJ'], ['New Mexico', 'NM'], ['New York', 'NY'], ['North Carolina', 'NC'], ['North Dakota', 'ND'],
  ['Northern Mariana Islands', 'MP'], ['Ohio', 'OH'], ['Oklahoma', 'OK'], ['Oregon', 'OR'], ['Pennsylvania', 'PA'], ['Puerto Rico', 'PR'], ['Rhode Island', 'RI'], ['South Carolina', 'SC'],
  ['South Dakota', 'SD'], ['Tennessee', 'TN'], ['Texas', 'TX'], ['Utah', 'UT'], ['Vermont', 'VT'], ['Virginia', 'VA'], ['Virgin Islands', 'VI'], ['Washington', 'WA'], ['West Virginia', 'WV'],
  ['Wisconsin', 'WI'], ['Wyoming', 'WY'],
]);

const convertToAbbreviation = (state: USState): USStateAbbreviations | undefined => {
  const abbreviation = stateMap.get(state);
  if (!abbreviation) {
    throw new Error(`Invalid state: ${state}`);
  }
  return abbreviation;
};

const expandStateAbbreviation = (abbreviation: USStateAbbreviations): USState | undefined => {
  const state = [...stateMap.entries()].find(([, abbr]) => abbr === abbreviation)?.[0];
  if (!state) throw new Error(`Invalid state abbreviation: ${abbreviation}`);

  return state;
}

export default function abbreviateState<
  Text extends USState | USStateAbbreviations = USState | USStateAbbreviations,
  To extends 'long' | 'abbr' = Text extends USState ? 'abbr' : 'long'
>(input: Text, to?: To) {
  if (!to) to = (input.length > 2)
    ? ('abbr' as Text extends USState ? To : never)
    : ('long' as Text extends USStateAbbreviations ? To : never);

  if (to === 'long') {
    if (isUSStateAbbreviation(input)) return expandStateAbbreviation(input) as Text extends USStateAbbreviations ? To extends 'long' ? USState : never : never;
    if (isUSState(input)) return input as unknown as Text extends USState ? To extends 'long' ? USState : never : never;
  }
  if (to === 'abbr') {
    if (isUSState(input)) return convertToAbbreviation(input) as Text extends USState ? To extends 'abbr' ? USStateAbbreviations : never : never;
    if (isUSStateAbbreviation(input)) return input as unknown as Text extends USStateAbbreviations ? To extends 'abbr' ? USStateAbbreviations : never : never;
  }
  return undefined;
}

export const DataSources = { states, stateAbbreviations, stateMap }
export const TypeGuards = { isUSState, isUSStateAbbreviation }

