const { succeed, fail, repair, get} = require('./enhancer.js');
// test away!

test('Repair item to full durability', () => {
    const item1 = {
        name: 'Lambda Shield',
        durability: 75,
        enhancement: '[+5] Lambda Shield'
    }

    const expected = {
        name: 'Lambda Shield',
        durability: 100,
        enhancement: '[+5] Lambda Shield'
    }

    expect(repair(item1.durability))
})