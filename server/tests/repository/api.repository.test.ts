import { getByEmailDB, registrationUserDB } from '../../src/repository/api.repository';


const client = {
    query: jest.fn()
}

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
})

describe('testReg', () => {
    test('success', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 13, name: 'lia', surname: 'Bla', email: 'ho@gmail.com', pwd: 'a737375a' }] });
        const result = await registrationUserDB('lia', 'Bla', 'ho@gmail.com', 'a737375a');
        expect(result).toEqual([{ id: 13, name: 'lia', surname: 'Bla', email: 'ho@gmail.com', pwd: 'a737375a' }]);
        expect(client.query).toHaveBeenCalled();
        expect(result.length).toBe(1)
    })
})

describe('testGetByEmail', () => {
    test('success', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 13, name: 'lia', surname: 'Bla', email: 'ho@gmail.com', pwd: 'a737375a' }] });
        const result = await getByEmailDB('ho@gmail.com');
        expect(result).toEqual([{ id: 13, name: 'lia', surname: 'Bla', email: 'ho@gmail.com', pwd: 'a737375a' }]);
        expect(client.query).toHaveBeenCalled();
        expect(result.length).toBe(1)
    })
})