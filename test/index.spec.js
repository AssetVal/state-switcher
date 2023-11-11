"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const index_js_1 = __importStar(require("../index.js"));
const { states, stateAbbreviations, stateMap } = index_js_1.DataSources;
describe('state-switcher', () => {
    describe('Array<states>', () => {
        it('should contain the correct states', () => {
            assert_1.default.deepStrictEqual(states[0], 'American Samoa');
            assert_1.default.deepStrictEqual(states[4], 'Arkansas');
        });
    });
    describe('Array<stateAbbreviations>', () => {
        it('should contain the correct state abbreviations', () => {
            assert_1.default.deepStrictEqual(stateAbbreviations[0], 'AS');
            assert_1.default.deepStrictEqual(stateAbbreviations[4], 'AR');
        });
    });
    describe('Array<stateNameAndAbbrTuple>', () => {
        it('should contain the correct state tuples', () => {
            const stateNameAndAbbrTuple = [...stateMap.entries()];
            assert_1.default.deepStrictEqual(stateNameAndAbbrTuple[0][0], 'American Samoa');
            assert_1.default.deepStrictEqual(stateNameAndAbbrTuple[0][1], 'AS');
            assert_1.default.deepStrictEqual(stateNameAndAbbrTuple[4][0], 'Arkansas');
            assert_1.default.deepStrictEqual(stateNameAndAbbrTuple[4][1], 'AR');
        });
    });
    describe('abbreviateState()', () => {
        it('Should return an abbreviated state if given a long form state, when missing a transform directive', () => {
            assert_1.default.deepStrictEqual((0, index_js_1.default)('California'), 'CA');
            assert_1.default.deepStrictEqual((0, index_js_1.default)('New York'), 'NY');
            assert_1.default.deepStrictEqual((0, index_js_1.default)('Washington'), 'WA');
        });
        it('Should return the long form state if given an abbreviated state, when missing a transform directive', () => {
            assert_1.default.deepStrictEqual((0, index_js_1.default)('CA'), 'California');
            assert_1.default.deepStrictEqual((0, index_js_1.default)('NY'), 'New York');
            assert_1.default.deepStrictEqual((0, index_js_1.default)('WA'), 'Washington');
        });
        it('Should return undefined if given a state that is not in the list, when missing a transform directive', () => {
            // @ts-expect-error - intentionally passing an invalid state
            assert_1.default.deepStrictEqual((0, index_js_1.default)('ZZ'), undefined);
        });
        it('Should return an abbreviated state if given a long form state, when using the \'abbr\' transform directive', () => {
            assert_1.default.deepStrictEqual((0, index_js_1.default)('California', 'abbr'), 'CA');
            assert_1.default.deepStrictEqual((0, index_js_1.default)('New York', 'abbr'), 'NY');
            assert_1.default.deepStrictEqual((0, index_js_1.default)('Washington', 'abbr'), 'WA');
        });
        it('Should return the abbreviated state if given an abbreviated state, when using the \'abbr\' transform directive', () => {
            assert_1.default.deepStrictEqual((0, index_js_1.default)('CA', 'abbr'), 'CA');
            assert_1.default.deepStrictEqual((0, index_js_1.default)('NY', 'abbr'), 'NY');
            assert_1.default.deepStrictEqual((0, index_js_1.default)('WA', 'abbr'), 'WA');
        });
        it('Should return undefined if given a state that is not in the list, when using the \'abbr\' transform directive', () => {
            // @ts-expect-error - intentionally passing an invalid state
            assert_1.default.deepStrictEqual((0, index_js_1.default)('ZZ', 'abbr'), undefined);
        });
        it('Should return an long form state if given a abbreviated state, when using the \'long\' transform directive', () => {
            assert_1.default.deepStrictEqual((0, index_js_1.default)('CA', 'long'), 'California');
            assert_1.default.deepStrictEqual((0, index_js_1.default)('NY', 'long'), 'New York');
            assert_1.default.deepStrictEqual((0, index_js_1.default)('WA', 'long'), 'Washington');
        });
        it('Should return the long form state if given an long form state, when using the \'long\' transform directive', () => {
            assert_1.default.deepStrictEqual((0, index_js_1.default)('California', 'long'), 'California');
            assert_1.default.deepStrictEqual((0, index_js_1.default)('New York', 'long'), 'New York');
            assert_1.default.deepStrictEqual((0, index_js_1.default)('Washington', 'long'), 'Washington');
        });
        it('Should return undefined if given a state that is not in the list, when using the \'long\' transform directive', () => {
            // @ts-expect-error - intentionally passing an invalid state
            assert_1.default.deepStrictEqual((0, index_js_1.default)('ZZ', 'long'), undefined);
        });
    });
});
