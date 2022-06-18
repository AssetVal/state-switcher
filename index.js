(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.states = [
        'American Samoa', 'Arizona', 'Alabama', 'Alaska', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
        'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
        'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Virgin Islands', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];
    exports.stateAbbreviations = [
        'AS', 'AZ', 'AL', 'AK', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
        'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'VI',
        'WA', 'WV', 'WI', 'WY'
    ];
    exports.stateNameAndAbbrTuple = [
        ['American Samoa', 'AS'], ['Arizona', 'AZ'], ['Alabama', 'AL'], ['Alaska', 'AK'], ['Arkansas', 'AR'], ['California', 'CA'], ['Colorado', 'CO'], ['Connecticut', 'CT'], ['Delaware', 'DE'],
        ['Florida', 'FL'], ['Georgia', 'GA'], ['Hawaii', 'HI'], ['Idaho', 'ID'], ['Illinois', 'IL'], ['Indiana', 'IN'], ['Iowa', 'IA'], ['Kansas', 'KS'], ['Kentucky', 'KY'], ['Louisiana', 'LA'],
        ['Maine', 'ME'], ['Maryland', 'MD'], ['Massachusetts', 'MA'], ['Michigan', 'MI'], ['Minnesota', 'MN'], ['Mississippi', 'MS'], ['Missouri', 'MO'], ['Montana', 'MT'], ['Nebraska', 'NE'],
        ['Nevada', 'NV'], ['New Hampshire', 'NH'], ['New Jersey', 'NJ'], ['New Mexico', 'NM'], ['New York', 'NY'], ['North Carolina', 'NC'], ['North Dakota', 'ND'],
        ['Northern Mariana Islands', 'MP'], ['Ohio', 'OH'], ['Oklahoma', 'OK'], ['Oregon', 'OR'], ['Pennsylvania', 'PA'], ['Puerto Rico', 'PR'], ['Rhode Island', 'RI'], ['South Carolina', 'SC'],
        ['South Dakota', 'SD'], ['Tennessee', 'TN'], ['Texas', 'TX'], ['Utah', 'UT'], ['Vermont', 'VT'], ['Virginia', 'VA'], ['Virgin Islands', 'VI'], ['Washington', 'WA'], ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'], ['Wyoming', 'WY'],
    ];
    function abbreviateState(input, to) {
        const cleanInput = (stateStr) => {
            // Change the input to only capitalize the first letter in each word
            if (stateStr.length > 2)
                return stateStr.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
            // Change the input to only uppercase
            return stateStr.toUpperCase();
        };
        const findAbbreviation = (stateStr) => {
            for (let i = 0; i < exports.stateNameAndAbbrTuple.length; i++) {
                if (exports.stateNameAndAbbrTuple[i][0] === stateStr)
                    return exports.stateNameAndAbbrTuple[i][1];
            }
            return undefined;
        };
        const findLongName = (stateStr) => {
            for (let i = 0; i < exports.stateNameAndAbbrTuple.length; i++) {
                if (exports.stateNameAndAbbrTuple[i][1] === stateStr)
                    return exports.stateNameAndAbbrTuple[i][0];
            }
            ;
            return undefined;
        };
        input = cleanInput(input);
        if (input !== undefined) {
            if (to === 'long') {
                // Only try and find the long name if the input is an abbreviation
                if (input.length === 2)
                    return findLongName(input);
                if (exports.states.includes(input))
                    return input;
                return undefined;
            }
            if (to === 'abbr' && input != undefined) {
                // Only try and find the abbreviation if the input is a long name
                if (input.length > 2)
                    return findAbbreviation(input);
                if (exports.stateAbbreviations.includes(input))
                    return input;
                return undefined;
            }
            // Guess the input type based on size if no transformation directive is given
            if (input.length > 2 && to === undefined)
                return findAbbreviation(input);
            return findLongName(input);
        }
        return undefined;
    }
    exports.default = abbreviateState;
    ;
});
