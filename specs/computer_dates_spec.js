const assert = require('assert')
const ComputerDates = require('../client/src/model/computer_dates.js');

describe('ComputerDates', function () {

    beforeEach(function () {
    });

    it('given a specific id a date is returned', function () {
        const actual = ComputerDates['co62427'];
        assert.strictEqual(actual, 1940);
    });

    it('given another id a second date is returned', function () {
        const actual = ComputerDates['co8184137'];
        assert.strictEqual(actual, 1998);
    });

});


