import pool from '../db';
import {iCourse} from '../../src/interfaces/index'

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

export { getAllCoursesDB, createCoursesDB, getCourseByIdDB }