const assert = require('assert');

const Rooster = require('../index');

describe('Rooster describe block', () => {

    describe('.announceDawn', function() {
        it('returns a rooster call', function() {

            //expected value
            const expected = 'cock-a-doodle-doo!';
            // storing announceDawn variable for comparisons
            const announceDawn = Rooster.announceDawn();
            //verify outcome
            assert.equal(expected, announceDawn);
        });

        describe('.timeAtDawn', function() {

            //strict Equal testing assert
            it('returns hours in string format', () => {
                 //expected value
                const expected = '22';
                // storing timeAtDawn variable for comparisons
                const timeAtDawn = Rooster.timeAtDawn(22);
                //verify outcome
                assert.strictEqual(expected, timeAtDawn);   
            });

            //error testing assert
            it('should return an error', () => {
                //verify outcome
                assert.throws(
                    () => {
                        //storing timeAtDawn variable for comparisons
                        const timeAtDawn = Rooster.timeAtDawn(24);
                    },
                    RangeError
                )
            });
        });

    });


});