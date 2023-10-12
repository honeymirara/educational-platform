import pool from '../db'

async function getAllLessonDB() {
    const client = await pool.connect();

    const sql = `SELECT * FROM lessons`

    const data = (await client.query(sql)).rows;

    return data;
}

async function getLessonByIdDB(course_id: string) {
    const client = await pool.connect();

    const sql = `SELECT * FROM lessons WHERE course_id = $1`

    const data = (await client.query(sql, [course_id])).rows;

    return data;
}

async function createLessonDB(course_id: string, title: string) {
    const client = await pool.connect();

    const sql = `INSERT INTO lessons (course_id, title) 
    VALUES ($1, $2) RETURNING *`

    const data = (await client.query(sql, [course_id, title])).rows;
    return data;
}

async function updateLessonDB(id: string, course_id: string, title: string) {
    const client = await pool.connect();

    const sql = `UPDATE lessons 
    SET course_id = $2, title = $3
    WHERE id = $1
    RETURNING *`

    const data = (await client.query(sql, [id, course_id, title])).rows

    return data;
}

async function deleteLessonDB(id: string) {
    const client = await pool.connect();

    const sql = `DELETE FROM lessons 
    WHERE id = $1
    RETURNING *`

    const data = (await client.query(sql, [id])).rows

    return data;
}


export { getAllLessonDB, getLessonByIdDB, createLessonDB, updateLessonDB, deleteLessonDB }