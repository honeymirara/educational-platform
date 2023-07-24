import pool from '../db';

async function registrationUserDB(name: string, surname: string, email: string, pwd: string) {
    const client = await pool.connect();
    const sql = 'INSERT INTO users (name, surname, email, pwd) VALUES ($1, $2, $3, $4) RETURNING *';
    const result = (await client.query(sql, [name, surname, email, pwd])).rows;
    return result;
}

async function getByEmailDB(email: string) {
    const client = await pool.connect();
    const sql = 'SELECT * FROM users WHERE email = $1';
    const result = (await client.query(sql, [email])).rows;
    return result;

}




export { registrationUserDB, getByEmailDB}
