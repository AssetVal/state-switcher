export type USState = 'American Samoa' | 'Arizona' | 'Alabama' | 'Alaska' | 'Arkansas' | 'California' | 'Colorado' | 'Connecticut' | 'Delaware' | 'Florida' | 'Georgia' | 'Hawaii' | 'Idaho' | 'Illinois' | 'Indiana' | 'Iowa' | 'Kansas' | 'Kentucky' | 'Louisiana' | 'Maine' | 'Maryland' | 'Massachusetts' | 'Michigan' | 'Minnesota' | 'Mississippi' | 'Missouri' | 'Montana' | 'Nebraska' | 'Nevada' | 'New Hampshire' | 'New Jersey' | 'New Mexico' | 'New York' | 'North Carolina' | 'North Dakota' | 'Northern Mariana Islands' | 'Ohio' | 'Oklahoma' | 'Oregon' | 'Pennsylvania' | 'Puerto Rico' | 'Rhode Island' | 'South Carolina' | 'South Dakota' | 'Tennessee' | 'Texas' | 'Utah' | 'Vermont' | 'Virginia' | 'Virgin Islands' | 'Washington' | 'West Virginia' | 'Wisconsin' | 'Wyoming';
export type USStateAbbreviations = 'AS' | 'AZ' | 'AL' | 'AK' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'FL' | 'GA' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'MP' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VA' | 'VI' | 'WA' | 'WV' | 'WI' | 'WY';
declare function isUSState(input: USState | USStateAbbreviations): input is USState;
declare function isUSStateAbbreviation(input: USState | USStateAbbreviations): input is USStateAbbreviations;
export default function abbreviateState<Text extends USState | USStateAbbreviations = USState | USStateAbbreviations, To extends 'long' | 'abbr' = Text extends USState ? 'abbr' : 'long'>(input: Text, to?: To): (Text extends USStateAbbreviations ? To extends "long" ? USState : never : never) | (Text extends USState ? To extends "long" ? USState : never : never) | (Text extends USState ? To extends "abbr" ? USStateAbbreviations : never : never) | (Text extends USStateAbbreviations ? To extends "abbr" ? USStateAbbreviations : never : never) | undefined;
export declare const DataSources: {
    states: USState[];
    stateAbbreviations: USStateAbbreviations[];
    stateMap: Map<USState, USStateAbbreviations>;
};
export declare const TypeGuards: {
    isUSState: typeof isUSState;
    isUSStateAbbreviation: typeof isUSStateAbbreviation;
};
export {};
