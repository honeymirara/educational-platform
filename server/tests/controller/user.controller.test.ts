import request from 'supertest';
import app from '../../src/app';
let id;

test('POST', async () => {
    const res = await request(app).post('/user').send({ name: 'Julia', surname: ' Bala', email: 'gs@.gmailcom', pwd: 'hs8hd8' });
    id = res.body[0].id
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body).toEqual([{ id: id, name: 'Julia', surname: ' Bala', email: 'gs@.gmailcom', pwd: 'hs8hd8' }])
})

test('GET', async () => {
    const res = await request(app).get('/user')

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
})

test('GET/:id', async () => {
    const res = await request(app).get(`/user/${id}`);

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
})

test('UPDATE', async () => {
    const res = await request(app).get(`/user/${id}`).send({ name: 'Julia', surname: ' Bala', email: 'gs@.gmailcom', pwd: 'hs8hd8' });
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body).toEqual([{ id: id, name: 'Julia', surname: ' Bala', email: 'gs@.gmailcom', pwd: 'hs8hd8' }])
})

test('DELETE', async () => {
    const res = await request(app).get(`/user/${id}`)
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
})