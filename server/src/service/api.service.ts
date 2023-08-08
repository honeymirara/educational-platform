import { registrationUserDB, getByEmailDB } from '../repository/api.repository'
import bcrypt from 'bcrypt';
import { iUser } from '../interfaces'

async function registrationUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const existingUser = await getByEmailDB(email);

    if (existingUser.length) throw new Error('user with this email already exists');
    const hashed = await bcrypt.hash(pwd, 10);
    const data = await registrationUserDB(name, surname, email, hashed);
    if (!data.length) throw new Error('user does not create');
    return data;
}
async function authorizationUser(email, pwd): Promise<iUser[]> {
    const foundUser = await getByEmailDB(email);
    if (!foundUser.length) throw new Error('this user does not exist');

    const isMatched = await bcrypt.compare(pwd, foundUser[0].pwd);
    if (!isMatched) throw new Error('password is wrong');

    return foundUser;
}
export { registrationUser, authorizationUser };



