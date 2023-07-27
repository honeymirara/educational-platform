import pool from '../db';
import { iCourse } from '../../src/interfaces/index'

async function getAllCoursesDB() {
    const client = pool.connect();
    try {
        client.query('BEGIN');
        const sql = 'SELECT * FROM courses';
        const result = (await client.query(sql)).rows
        return result;

    } catch (err) {
        client.query('ROLLBACK');
        return [];
    }
}

async function createCoursesDB(title) {
    const client = pool.connect();
    try {
        client.query('BEGIN');
        const sql = 'INSERT INTO courses (title) VALUES ($1) RETURNING*';
        const result = (await client.query(sql, [title])).rows;
        client.query('COMMIT');
        return result;

    } catch (err) {
        client.query('ROLLBACK');
        return [];
    }
}

async function getCourseByIdDB(id) {
    const client = pool.connect();
    try {
        client.query('BEGIN');
        const sql = 'SELECT * FROM courses WHERE id =$1 RETURNING*';
        const result = (await client.query(sql, [id])).rows;
        client.query('COMMIT');
        return result;

    } catch (err) {
        client.query('ROLLBACK');
        return [];
    }
}

async function updateCourseDB(id, title) {
    const client = pool.connect();
    const sql = 'UPDATE courses SET  title= $1 WHERE id = $2 RETURNING*';
    const result = (await client.query(sql, [title, id])).rows;
    return result;
}

async function deleteCourseDB(id) {
const client = await pool.connect();
const sql = 'DELETE FROM courses WHERE id = $1 RETURNING*';
const result = (await client.query(sql, [id])).rows;
return result;
}

export { getAllCoursesDB, createCoursesDB, getCourseByIdDB, updateCourseDB, deleteCourseDB}