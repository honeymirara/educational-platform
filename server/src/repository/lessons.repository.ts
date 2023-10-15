import pool from '../db'
import { iLessons } from '../interfaces/index'

async function getAllLessonDB(): Promise<iLessons[]> {
    const client = await pool.connect();
    try {
        const sql = `SELECT * FROM lessons`
        const data = (await client.query(sql)).rows;
        client.query('COMMIT');
        return data;
    } catch (err) {
        await client.query('ROLLBACK');
        return [];
    }
}

async function getLessonByIdDB(course_id: string): Promise<iLessons[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `SELECT * FROM lessons WHERE course_id = $1`
        const data = (await client.query(sql, [course_id])).rows;
        client.query('COMMIT');
        return data;
    } catch (err) {
        await client.query('ROLLBACK');
        return [];
    }
}

async function createLessonDB(course_id: string, title: string): Promise<iLessons[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `INSERT INTO lessons (course_id, title) 
    VALUES ($1, $2) RETURNING *`
        const data = (await client.query(sql, [course_id, title])).rows;
        client.query('COMMIT');
        return data;
    } catch (err) {
        await client.query('ROLLBACK');
        return [];
    }
}

async function updateLessonDB(id: string, course_id: string, title: string): Promise<iLessons[]> {
    const client = await pool.connect();
    try {
        client.query('BEGIN');
        const sql = `UPDATE lessons 
    SET course_id = $2, title = $3
    WHERE id = $1
    RETURNING *`

        const data = (await client.query(sql, [id, course_id, title])).rows
        client.query('COMMIT');
        return data;
    } catch (err) {
        client.query('ROLLBACK');
        return [];

    };
}

async function deleteLessonDB(id: string): Promise<iLessons[]> {
    const client = await pool.connect();
    try {
        client.query('BEGIN');
        const sql = `DELETE FROM lessons 
    WHERE id = $1
    RETURNING *`
        const data = (await client.query(sql, [id])).rows
        client.query('COMMIT');
        return data;
    } catch (err) {
        client.query('ROLLBACK');
        return [];
    };
}


export { getAllLessonDB, getLessonByIdDB, createLessonDB, updateLessonDB, deleteLessonDB }