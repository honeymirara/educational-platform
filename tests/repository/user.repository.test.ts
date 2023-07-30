import { createUserDB, getAllUsersDB, getUserByIdDB, updateUserDB, deleteUserDB } from '../../src/repository/user.repository';

const client = {
    query: jest.fn()
};

jest.mock('pg', () => {
    return {
        Pool: jest.fn(() => {
            return {
                connect: jest.fn(() => client)
            }
        })
    }
})

afterEach(() => {
    jest.clearAllMocks()
});

/* describe('testCreateUser', () => {
    test('success', async () => {
        client.query.mockRejectedValue({ rows: [{ id: 13, name: 'lia', surname: 'Bla', email: 'ho@gmail.com', pwd: 'a737375a' }] })
        const result = await createUserDB('lia', 'Bla', 'ho@gmail.com', 'a737375a');
        expect(result).toEqual([{ id: 13, name: 'lia', surname: 'Bla', email: 'ho@gmail.com', pwd: 'a737375a' }] );
        expect(client.query).toHaveBeenCalled();

    }) 
})  */

describe('testGetAllUser', () => {
    test('success', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 12, name: 'Julia', surname: 'Bala', email: 'hoho@gmail.com', pwd: 'asxhi75a' }] });
        const result = await getAllUsersDB();
        expect(result).toEqual([{ id: 12, name: 'Julia', surname: 'Bala', email: 'hoho@gmail.com', pwd: 'asxhi75a' }])
        expect(result.length).toBe(1);
        expect(client.query).toHaveBeenCalled()
    })
})

describe('testGetUserById', () => {
    test('success', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 12, name: 'Julia', surname: 'Bala', email: 'hoho@gmail.com', pwd: 'asxhi75a' }] });
        const result = await getUserByIdDB('Julia');
        expect(result).toEqual([{ id: 12, name: 'Julia', surname: 'Bala', email: 'hoho@gmail.com', pwd: 'asxhi75a' }])
        expect(client.query).toHaveBeenCalled();
        expect(result.length).toBe(1);
    })
})


describe('testUpdateUserDB', () => {
    test('success', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 12, name: 'Julie', surname: 'la', email: 'hoho@gmail.com', pwd: 'asxhi75a' }] });
        const result = await updateUserDB(12, 'Julie', 'la', 'hoho@gmail.com', 'asxhi75a');
        expect(result).toEqual([{ id: 12, name: 'Julie', surname: 'la', email: 'hoho@gmail.com', pwd: 'asxhi75a' }])
        expect(result.length).toBe(1)
    })
});

describe('testDeleteUserDB', () => {
    test('success', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 12, name: 'Julie', surname: 'la', email: 'hoho@gmail.com', pwd: 'asxhi75a' }] });
        const result = await deleteUserDB(12)
        expect(result).toEqual([{ id: 12, name: 'Julie', surname: 'la', email: 'hoho@gmail.com', pwd: 'asxhi75a' }]);
        expect(result.length).toBe(1)
    })
})