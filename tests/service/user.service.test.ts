import * as repository from "../../src/repository/user.repository";
import { createUser } from '../../src/service/user.service';

describe('createUser_function', () => {
    test('success', async () => {
        const testRep = jest.spyOn(repository, "createUserDB");
        testRep.mockResolvedValue([{
            id: 1,
            "name": "test_name",
            "surname": "test_surname",
            "email": "test@gmail",
            "pwd": "test",
        }]);
        const result = await createUser("test_name", "test_surname", "test@gmail", "test")
        expect(result).toEqual([{
            id: 1,
            "name": "test_name",
            "surname": "test_surname",
            "email": "test@gmail",
            "pwd": "test",
        }])
        expect(result.length).toBe(1)
        expect(testRep).toHaveBeenCalled();
    })

    test('success', async () => {
        const testRep = jest.spyOn(repository, "createUserDB")
        testRep.mockResolvedValue([])
        try {
            await createUser("test_name", "test_surname", "test@gmail", "test");

        } catch (err: any) {

            expect(err.message).toBe('does not exists');
        }




    })


})