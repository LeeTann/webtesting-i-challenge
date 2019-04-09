const { succeed, fail, repair, get} = require('./enhancer.js');
// test away!

describe('Enhancer Testing Project', () => {
    describe('Repair Item Testing', () => {
        test('Repair item to full durability', () => {
            const item1 = {
                name: 'Lambda Shield',
                durability: 75,
                enhancement: 20
            }
        
            const expected = {
                name: 'Lambda Shield',
                durability: 100,
                enhancement: 20
            }
        
            expect(repair(item1).durability)
        })
    })

    describe('Enhance Item Testing', () => {
        test('Enhance item by 1', () => {
            const item2 = {
                name: 'Lambda Sword',
                durability: 80,
                enhancement: 10,
            }

            const expected = {
                name: 'Lambda Sword',
                durability: 80,
                enhancement: 11,
            }

            expect(succeed(item2).enhancement).toBe(expected.enhancement)
        })
    })
})
