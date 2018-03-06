const assert = require('assert')
const ComputerObject = require('../client/src/model/computer_object.js');

describe('ComputerObject', function () {
    let computerObject;
    beforeEach(function () {
        const mockObject = {
            id: 'co62427',
            attributes: {title:[{value: 'Components from Colossus project, 1940-1945'}],
                            options: {option1: 'Components from Colossus project'},
                            description:[{value: 'Components from Colossus project,' +
                                ' (valve in holder; resistor; capacitor),designed by Tommy Flowers and made' +
                                ' by the Government Code and Ciphers School at Bletchley Park, 1940-1945'}],
                            multimedia: [{processed: {large_thumbnail: {location: 'AWS image'}} }],
                            name: [{value: 'computer component'}]
            }
        };
        computerObject = new ComputerObject(mockObject);
    });

    it('should have an id', function () {
        const actual = computerObject.id;
        assert.strictEqual(actual, 'co62427');
    });

    it('should have a date', function () {
        const actual = computerObject.date;
        assert.strictEqual(actual, 1940);
    });

    it('should have a name', function () {
        const actual = computerObject.name;
        assert.strictEqual(actual, 'Components from Colossus project, 1940-1945');
    });

    it('should have a first description', function () {
        const actual = computerObject.description1;
        assert.strictEqual(actual, 'Components from Colossus project');
    });

    it('should have a second description', function () {
        const actual = computerObject.description2;
        assert.strictEqual(actual, 'Components from Colossus project, (valve in holder; resistor; capacitor),designed by Tommy Flowers and made by the Government Code and Ciphers School at Bletchley Park, 1940-1945');
    });

    it('should have an image', function () {
        const actual = computerObject.image;
        assert.strictEqual(actual, 'AWS image');
    });

    it('should have a type', function () {
        const actual = computerObject.type;
        assert.strictEqual(actual, 'computer component');
    });

});
