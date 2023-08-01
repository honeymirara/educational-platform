import pool from '../db';
import { iUser } from '../interfaces/index'

async function createUserDB(name,surname, email, pwd){
    const client = await pool.connect();
    try {
        client.query('BEGIN');
        const sql = 'INSERT INTO users (name, surname, email, pwd) VALUES ($1, $2, $3, $4) RETURNING*';
        const result = (await client.query(sql, [name, surname, email, pwd])).rows;
        client.query('COMMIT');
        return result;
    } catch (err: any) {
        client.query('ROLLBACK');
        return [];
    }
}

async function getUserByIdDB(id): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'SELECT * FROM users WHERE id = $1'
        const result = (await client.query(sql, [id])).rows;
        client.query('COMMIT');
        return result;
    } catch (err) {
       await  client.query('ROLLBACK');
        return [];
    }
}

async function getAllUsersDB(): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'SELECT * FROM users';
        const result = (await client.query(sql)).rows
        client.query('COMMIT');
        return result;
    } catch (err) {
       await  client.query('ROLLBACK');
        return [];
    }
}

async function updateUserDB(name, surname, email, pwd, id): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        client.query('BEGIN');
        const sql = 'UPDATE users SET name = $1, surname = $2, email = $3, pwd=$4 WHERE id = $5 RETURNING*';
        const result = (await client.query(sql, [name, surname, email, pwd, id])).rows;
        client.query('COMMIT');
        return result;
    } catch (err) {
        client.query('ROLLBACK');
        return [];

    };

}

async function deleteUserDB(id): Promise<iUser[]> {
    const client = await pool.connect();
    try {
       await  client.query('BEGIN');
        const sql = 'DELETE FROM users WHERE id = $1 RETURNING*'
        const result = (await client.query(sql, [id])).rows;
        await client.query('COMMIT');
        return result;

    } catch (err) {
        client.query('ROLLBACK');
        return [];
    }
}

export { createUserDB, getAllUsersDB, getUserByIdDB, updateUserDB, deleteUserDB }
