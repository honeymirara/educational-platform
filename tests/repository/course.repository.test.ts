
import { getAllCoursesDB } from '../../src/repository/course.repository';

const client = {
    query: jest.fn()
}

jest.mock('pg', () => {
    return {
        Pool: jest.fn(() => {
            return {
                connect: jest.fn(() => client)
            }
        })
    }
})