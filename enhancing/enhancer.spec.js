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

    describe('Successful Enhancement Item Testing', () => {
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

    describe('Fail Enhancement Testing', () => {
        test('Enhancement lvl is greater than 16, enhancment lvl decreased by 1', () => {
            const item3 = {
                name: 'Lambda Chest',
                durability: 90,
                enhancement: 18
            }
            
            const expected = {
                name: 'Lambda Chest',
                durability: 80,
                enhancement: 17
            }

            expect(fail(item3).enhancement).toBe(expected.enhancement)
        })

        test('Enhancement is greater than 14, durability decreased by 10', () => {
            const item4 = {
                name: 'Lambda Pants',
                durability: 90,
                enhancement: 18
            }
            
            const expected = {
                name: 'Lambda Pants',
                durability: 80,
                enhancement: 17
            }

            expect(fail(item4).durability).toBe(expected.durability)
        })

        test('Enhancement is less than 15, durability decreased by 5', () => {
            const item5 = {
                name: 'Lambda Helmet',
                durability: 90,
                enhancement: 10
            }
            
            const expected = {
                name: 'Lambda Helmet',
                durability: 85,
                enhancement: 10
            }

            expect(fail(item5).durability).toBe(expected.durability)
        })
    })

    describe('Get Enhancement Item Testing', () => {
        test('Get New Enhanced Item', () => {
            const item6 = {
                name: 'Lambda Arms',
                durability: 70,
                enhancement: 10,
            }

            const expected = {
                name: '[+10]Lambda Arms',
                durability: 70,
                enhancement: 10,
            }

            expect(get(item6).name).toBe(expected.name)
        })
    })
})
