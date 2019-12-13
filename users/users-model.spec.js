const Users = require('./users-model.js');
const db = require('../data/dbConfig.js');

describe('users model', () => {
    describe('insert', () => {
        it('should insert the user into the db', async () => {
            await Users.insert({ firstname: 'liz' });
            await Users.insert({ lastname: 'doyle' });

            const users = await db('users');
            expect(users).toHaveLength(2);
        });

        it('should return the user inserted', async () => {
            let user = await Users.insert({ firstname: 'lizz' });
            expect(user.firstname).toBe('lizz');

            user = await Users.insert({ lastname: 'doyle' });
            expect(user.lastname).toBe('doyle');
        });

        beforeEach(async () => {
            await db('users').truncate();
        })
    });
});