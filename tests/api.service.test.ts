import * as repository from "../src/repository/api.repository";
import { registrationUser, authorizationUser } from "../src/service/api.service"
import bcrypt from "bcrypt"


describe('registrationUser', () => {
    test('success', async () => {
        const testGetByEmail = jest.spyOn(repository, "getByEmailDB")
        const testBcrypt = jest.spyOn(bcrypt, "hash")
        const testRegistration = jest.spyOn(repository, "registrationUserDB")

        testGetByEmail.mockResolvedValue([]);
        testBcrypt.mockResolvedValue('78dh7h2i9xa2e');
        testRegistration.mockResolvedValue([{
            id: 1,
            "name": "test_name",
            "surname": "test_surname",
            "email": "test@gmail",
            "pwd": "78dh7h2i9xa2e"
        }])


        const result = await registrationUser("test_name", "test_surname", "test@gmail", "386862")
        expect(result).toEqual([{
            id: 1,
            "name": "test_name",
            "surname": "test_surname",
            "email": "test@gmail",
            "pwd": "78dh7h2i9xa2e"
        }])
    })
})


describe('registrationUser', () => {
    test('success', async () => {
        const testGetByEmail = jest.spyOn(repository, 'getByEmailDB');
        const testBcrypt = jest.spyOn(bcrypt, 'hash');
        const testRegistrtion = jest.spyOn(repository, 'registrationUserDB')

        testGetByEmail.mockResolvedValue([]);
        testBcrypt.mockResolvedValue('78a6ag7s');
        testRegistrtion.mockResolvedValue([{
            id: 1,
            "name": "test_name",
            "surname": "test_surname",
            "email": "test@gmail",
            "pwd": "78dh7h2i9xa2e"
        }])

        const result = await registrationUser("test_name", "test_surname", "test@gmail", "78dh7h2i9xa2e");
        expect(result).toEqual([{
            id: 1,
            "name": "test_name",
            "surname": "test_surname",
            "email": "test@gmail",
            "pwd": "78dh7h2i9xa2e"
        }])
    })
    test('error', async () => {
        const mockGetByEmail = jest.spyOn(repository, "getByEmailDB");
        mockGetByEmail.mockResolvedValue([{
            id: 2,
            "name": "hbgj",
            "surname": "jhu",
            "email": "gvyf@gmail",
            "pwd": "yguyhv780se",
        }])

        try {
            await registrationUser("hbgj", "jhu", "gvyf@gmail", "yguyhv780se");

        } catch (err: any) {
            expect(mockGetByEmail).toBeCalled()
            expect(mockGetByEmail).toHaveBeenCalledWith("gvyf@gmail")
            expect(err.message).toBe('user with this email already exists')
        }
    })
})
 


/* describe('authorization', () => {
    test('success', async () => {
        const testAuthorizationUser = jest.spyOn(repository, 'getByEmailDB');
        const testMatched = jest.spyOn(bcrypt, 'compare');

        testAuthorizationUser.mockResolvedValue([{
            id: 2,
            "name": "hbgj",
            "surname": "jhu",
            "email": "gvyf@gmail",
            "pwd": "yguyhv780se",

        }])

        testMatched.mockResolvedValue("yguyhv780se");

        const result = await authorizationUser("gvyf@gmail", "yguyhv780se");
        expect(result).toEqual([{
            id: 2,
            "name": "hbgj",
            "surname": "jhu",
            "email": "gvyf@gmail",
            "pwd": "yguyhv780se",

        }])
    })

    test('success', async () => {
        const testFound = jest.spyOn(repository, "getByEmailDB");


        testFound.mockResolvedValue([]);
        try {
            await authorizationUser("gvyf@gmail", "yguyhv780se");
        } catch (err: any) {
            expect(err.message).toBe('this user does not exist')
        }
    })

    test('success', async () => {
        const mockAuthorization = jest.spyOn(repository, 'getByEmailDB');
        const mockBcrypt = jest.spyOn(bcrypt, 'compare');

        mockAuthorization.mockResolvedValue([{
            id: 2,
            "name": "hbgj",
            "surname": "jhu",
            "email": "gvyf@gmail",
            "pwd": "yguyhv780se",
        }])
        mockBcrypt.mockResolvedValue(false);

        try {
            await authorizationUser("gvyf@gmail", "yguyhv780se")
        } catch (err: any) {
            expect(err.message).toBe('this user does not exist')
        }

    })
}) */