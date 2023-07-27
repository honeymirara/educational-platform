
import { getAllCoursesDB, createCoursesDB, getCourseByIdDB, updateCourseDB, deleteCourseDB } from '../../src/repository/course.repository';

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

afterEach(() => {
    jest.clearAllMocks();
})

describe('testGetAllCourses', () => {
    test('success', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, title: 'javascript' }, { id: 2, title: 'ruby' }] });
        const result = await getAllCoursesDB();
        expect(result).toEqual([{ id: 1, title: 'javascript' }, { id: 2, title: 'ruby' }])
        expect(result.length).toBe(2);
    })
});

describe('testCreateCourses', () => {
    test('success', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 3, title: 'java' }] });
        const result = await createCoursesDB('java');

        expect(result).toEqual([{ id: 3, title: 'java' }])
        expect(client.query).toHaveBeenCalled();
        expect(result.length).toBe(1)
    })
});

describe('getCourseById', () => {
    test('success', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 3, title: 'java' }] });
        const result = await getCourseByIdDB('java');
        expect(client.query).toHaveBeenCalled();
        expect(result).toEqual([{ id: 3, title: 'java' }])
    })
})

describe('updateCourse', () => {
    test('success', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 3, title: 'php' }] });
        const result = await updateCourseDB(3, 'php');
        expect(client.query).toHaveBeenCalled();
        expect(result).toEqual([{ id: 3, title: 'php' }]);
        expect(result.length).toBe(1);
    })
})

describe('deleteCourse', () => {
    test('success', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 3, title: 'php' }] });
        const result = await deleteCourseDB(3);
        expect(client.query).toHaveBeenCalled();
        expect(result).toEqual([{ id: 3, title: 'php' }]);
        expect(result.length).toBe(1);
    })
})

