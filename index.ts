export type USState = 'American Samoa' | 'Arizona' | 'Alabama' | 'Alaska' | 'Arkansas' | 'California' | 'Colorado' | 'Connecticut' | 'Delaware' | 'Florida' | 'Georgia' | 'Hawaii'
                    | 'Idaho' | 'Illinois' | 'Indiana' | 'Iowa' | 'Kansas' | 'Kentucky' | 'Louisiana' | 'Maine' | 'Maryland' | 'Massachusetts' | 'Michigan' | 'Minnesota' | 'Mississippi'
                    | 'Missouri' | 'Montana' | 'Nebraska' | 'Nevada' | 'New Hampshire' | 'New Jersey' | 'New Mexico' | 'New York' | 'North Carolina' | 'North Dakota' | 'Northern Mariana Islands'
                    | 'Ohio' | 'Oklahoma' | 'Oregon' | 'Pennsylvania' | 'Puerto Rico' | 'Rhode Island' | 'South Carolina' | 'South Dakota' | 'Tennessee' | 'Texas' | 'Utah' | 'Vermont'
                    | 'Virginia' | 'Virgin Islands' | 'Washington' | 'West Virginia' | 'Wisconsin' | 'Wyoming';

export type USStateAbbreviations = 'AS' | 'AZ' | 'AL' | 'AK' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'FL' | 'GA' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA'
                                 | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'MP' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD'
                                 | 'TN' | 'TX' | 'UT' | 'VT' | 'VA' | 'VI' | 'WA' | 'WV' | 'WI' | 'WY';

export type USStateTuples = ['American Samoa', 'AS'] | ['Arizona', 'AZ'] | ['Alabama', 'AL'] | ['Alaska', 'AK'] | ['Arkansas', 'AR'] | ['California', 'CA'] | ['Colorado', 'CO']
                          | ['Connecticut', 'CT'] | ['Delaware', 'DE'] | ['Florida', 'FL'] | ['Georgia', 'GA'] | ['Hawaii', 'HI'] | ['Idaho', 'ID'] | ['Illinois', 'IL']
                          | ['Indiana', 'IN'] | ['Iowa', 'IA'] | ['Kansas', 'KS'] | ['Kentucky', 'KY'] | ['Louisiana', 'LA'] | ['Maine', 'ME'] | ['Maryland', 'MD'] | ['Massachusetts', 'MA']
                          | ['Michigan', 'MI'] | ['Minnesota', 'MN'] | ['Mississippi', 'MS'] | ['Missouri', 'MO'] | ['Montana', 'MT'] | ['Nebraska', 'NE'] | ['Nevada', 'NV']
                          | ['New Hampshire', 'NH'] | ['New Jersey', 'NJ'] | ['New Mexico', 'NM'] | ['New York', 'NY'] | ['North Carolina', 'NC'] | ['North Dakota', 'ND']
                          | ['Northern Mariana Islands', 'MP'] | ['Ohio', 'OH'] | ['Oklahoma', 'OK'] | ['Oregon', 'OR'] | ['Pennsylvania', 'PA'] | ['Puerto Rico', 'PR'] | ['Rhode Island', 'RI']
                          | ['South Carolina', 'SC'] | ['South Dakota', 'SD'] | ['Tennessee', 'TN'] | ['Texas', 'TX'] | ['Utah', 'UT'] | ['Vermont', 'VT'] | ['Virginia', 'VA']
                          | ['Virgin Islands', 'VI'] | ['Washington', 'WA'] | ['West Virginia', 'WV'] | ['Wisconsin', 'WI'] | ['Wyoming', 'WY'];

export const states: Array<USStateTuples> = [
  ['American Samoa', 'AS'],
  ['Arizona', 'AZ'],
  ['Alabama', 'AL'],
  ['Alaska', 'AK'],
  ['Arkansas', 'AR'],
  ['California', 'CA'],
  ['Colorado', 'CO'],
  ['Connecticut', 'CT'],
  ['Delaware', 'DE'],
  ['Florida', 'FL'],
  ['Georgia', 'GA'],
  ['Hawaii', 'HI'],
  ['Idaho', 'ID'],
  ['Illinois', 'IL'],
  ['Indiana', 'IN'],
  ['Iowa', 'IA'],
  ['Kansas', 'KS'],
  ['Kentucky', 'KY'],
  ['Louisiana', 'LA'],
  ['Maine', 'ME'],
  ['Maryland', 'MD'],
  ['Massachusetts', 'MA'],
  ['Michigan', 'MI'],
  ['Minnesota', 'MN'],
  ['Mississippi', 'MS'],
  ['Missouri', 'MO'],
  ['Montana', 'MT'],
  ['Nebraska', 'NE'],
  ['Nevada', 'NV'],
  ['New Hampshire', 'NH'],
  ['New Jersey', 'NJ'],
  ['New Mexico', 'NM'],
  ['New York', 'NY'],
  ['North Carolina', 'NC'],
  ['North Dakota', 'ND'],
  ['Northern Mariana Islands', 'MP'],
  ['Ohio', 'OH'],
  ['Oklahoma', 'OK'],
  ['Oregon', 'OR'],
  ['Pennsylvania', 'PA'],
  ['Puerto Rico', 'PR'],
  ['Rhode Island', 'RI'],
  ['South Carolina', 'SC'],
  ['South Dakota', 'SD'],
  ['Tennessee', 'TN'],
  ['Texas', 'TX'],
  ['Utah', 'UT'],
  ['Vermont', 'VT'],
  ['Virginia', 'VA'],
  ['Virgin Islands', 'VI'],
  ['Washington', 'WA'],
  ['West Virginia', 'WV'],
  ['Wisconsin', 'WI'],
  ['Wyoming', 'WY'],
];

export default function abbreviateState(input: USState|USStateAbbreviations): USState|USStateAbbreviations|undefined {
  if (input.length > 2){ // Converting to abbreviation
    input = input.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()) as USState;

    for (let i = 0; i < states.length; i++){
      if (states[i][0] === input) return states[i][1];
    }
  } else { // Converting to full name
    input = input.toUpperCase() as USStateAbbreviations;

    for (let i = 0; i < states.length; i++){
      if (states[i][1] === input) return (states[i][0]);
    }
  }

  return undefined;
};
