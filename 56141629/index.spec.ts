import moment from 'moment';
import validateDate from './index';

describe("validateDate()", () => {
    const today = moment('16-05-2019', 'DD-MM-YYYY');

    beforeEach(() => {
        jest.useFakeTimers().setSystemTime(today.valueOf());
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('is same or after today', () => {
        expect(validateDate({ date: '15-05-2019' })).toBeFalsy();
        expect(validateDate({ date: '16-05-2019' })).toBeTruthy();
        expect(validateDate({ date: '17-05-2019' })).toBeTruthy();
    });
});