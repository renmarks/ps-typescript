import { isPoint } from '../../../src/2D/types';

describe('isPoint', () => {
    it('type guard should function correctly', () => {
        const fail1 = {x: "test", y: "test"};
        const fail2 = {x: 4, y: "test"};
        const fail3 = {x: "test", y: 1};
        const fail4 = {x: null, y: undefined};
        const fail5 = {x: 2, y: null};
        const fail6 = {x: undefined, y: 0};
        const success = {x: 3, y: 9};

        expect(isPoint(fail1)).toBeFalsy();
        expect(isPoint(fail2)).toBeFalsy();
        expect(isPoint(fail3)).toBeFalsy();
        expect(isPoint(fail4)).toBeFalsy();
        expect(isPoint(fail5)).toBeFalsy();
        expect(isPoint(fail6)).toBeFalsy();
        expect(isPoint(success)).toBeTruthy();
    });
});
