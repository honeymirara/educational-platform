import { createUserDB, getAllUsersDB, getUserByIdDB, updateUserDB, deleteUserDB } from '../repository/user.repository';
import { iUser } from '../interfaces/index'

async function createUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const data = await createUserDB(name, surname, email, pwd)
    if (!data.length) throw new Error('does not exists');
    return data;

}

async function getAllUsers(): Promise<iUser[]> {
    const data = await getAllUsersDB();
    return data;
}

async function getUserById(id): Promise<iUser[]> {
    const data = await getUserByIdDB(id);
    return data;
}

async function updateUser(name, surname, email, pwd, id): Promise<iUser[]> {
    const data = await updateUserDB(name, surname, email, pwd, id);
    return data;
}

async function deleteUser(id): Promise<iUser[]> {
    const data = await deleteUserDB(id);
    return data;
}


export { createUser, getAllUsers, getUserById, updateUser, deleteUser }