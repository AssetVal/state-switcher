var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "assert", "../index.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const assert_1 = __importDefault(require("assert"));
    const index_js_1 = __importStar(require("../index.js"));
    describe('state-switcher', function () {
        describe('Array<states>', function () {
            it('should contain the correct states', function () {
                assert_1.default.deepStrictEqual(index_js_1.states[0], 'American Samoa');
                assert_1.default.deepStrictEqual(index_js_1.states[4], 'Arkansas');
            });
        });
        describe('Array<stateAbbreviations>', function () {
            it('should contain the correct state abbreviations', function () {
                assert_1.default.deepStrictEqual(index_js_1.stateAbbreviations[0], 'AS');
                assert_1.default.deepStrictEqual(index_js_1.stateAbbreviations[4], 'AR');
            });
        });
        describe('Array<stateNameAndAbbrTuple>', function () {
            it('should contain the correct state tuples', function () {
                assert_1.default.deepStrictEqual(index_js_1.stateNameAndAbbrTuple[0][0], 'American Samoa');
                assert_1.default.deepStrictEqual(index_js_1.stateNameAndAbbrTuple[0][1], 'AS');
                assert_1.default.deepStrictEqual(index_js_1.stateNameAndAbbrTuple[4][0], 'Arkansas');
                assert_1.default.deepStrictEqual(index_js_1.stateNameAndAbbrTuple[4][1], 'AR');
            });
        });
        describe('abbreviateState()', function () {
            it('Should return an abbreviated state if given a long form state, when missing a transform directive', function () {
                assert_1.default.deepStrictEqual(index_js_1.default('California'), 'CA');
                assert_1.default.deepStrictEqual(index_js_1.default('New York'), 'NY');
                assert_1.default.deepStrictEqual(index_js_1.default('Washington'), 'WA');
            });
            it('Should return the long form state if given an abbreviated state, when missing a transform directive', function () {
                assert_1.default.deepStrictEqual(index_js_1.default('CA'), 'California');
                assert_1.default.deepStrictEqual(index_js_1.default('NY'), 'New York');
                assert_1.default.deepStrictEqual(index_js_1.default('WA'), 'Washington');
            });
            it('Should return undefined if given a state that is not in the list, when missing a transform directive', function () {
                assert_1.default.deepStrictEqual(index_js_1.default('ZZ'), undefined);
            });
            it('Should return an abbreviated state if given a long form state, when using the \'abbr\' transform directive', function () {
                assert_1.default.deepStrictEqual(index_js_1.default('California', 'abbr'), 'CA');
                assert_1.default.deepStrictEqual(index_js_1.default('New York', 'abbr'), 'NY');
                assert_1.default.deepStrictEqual(index_js_1.default('Washington', 'abbr'), 'WA');
            });
            it('Should return the abbreviated state if given an abbreviated state, when using the \'abbr\' transform directive', function () {
                assert_1.default.deepStrictEqual(index_js_1.default('CA', 'abbr'), 'CA');
                assert_1.default.deepStrictEqual(index_js_1.default('NY', 'abbr'), 'NY');
                assert_1.default.deepStrictEqual(index_js_1.default('WA', 'abbr'), 'WA');
            });
            it('Should return undefined if given a state that is not in the list, when using the \'abbr\' transform directive', function () {
                assert_1.default.deepStrictEqual(index_js_1.default('ZZ', 'abbr'), undefined);
            });
            it('Should return an long form state if given a abbreviated state, when using the \'long\' transform directive', function () {
                assert_1.default.deepStrictEqual(index_js_1.default('CA', 'long'), 'California');
                assert_1.default.deepStrictEqual(index_js_1.default('NY', 'long'), 'New York');
                assert_1.default.deepStrictEqual(index_js_1.default('WA', 'long'), 'Washington');
            });
            it('Should return the long form state if given an long form state, when using the \'long\' transform directive', function () {
                assert_1.default.deepStrictEqual(index_js_1.default('California', 'long'), 'California');
                assert_1.default.deepStrictEqual(index_js_1.default('New York', 'long'), 'New York');
                assert_1.default.deepStrictEqual(index_js_1.default('Washington', 'long'), 'Washington');
            });
            it('Should return undefined if given a state that is not in the list, when using the \'long\' transform directive', function () {
                assert_1.default.deepStrictEqual(index_js_1.default('ZZ', 'long'), undefined);
            });
        });
    });
});
