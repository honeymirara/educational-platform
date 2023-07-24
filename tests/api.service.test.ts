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
})