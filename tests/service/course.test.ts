import { createCourses, getAllCourses } from '../../src/service/course.service'
import * as repository from '../../src/repository/course.repository';


/* import {getAllCoursesDB} from '../../src/repository/course.repository' */

describe('create Task function', () => {
    test('success', async () => {
        const testRep = jest.spyOn(repository, 'createCoursesDB')
        testRep.mockResolvedValue([{ id: 1, course: 'course' }])

        const result = await createCourses('course');
        expect(testRep).toHaveBeenCalled();
        expect(result).toEqual([{ id: 1, course: 'course' }])
    })
})


/* 
describe('getAllCourses', () => {
    test('success', async () => {
        const testRep = jest.spyOn(repository, 'getAllCoursesDB')
        testRep.mockResolvedValue([{ id: 1, course: 'course' }])

        const result = await getAllCourses()

        expect(testRep).toHaveBeenCalled()
        expect(result).toEqual([{ id: 1, course: 'course' }])
        expect(result.length).toBeGreaterThan(0);
    })
}) */

/* describe('getCourseById', () => {
    test('success', async () => {
const testRep = jest.spyOn(repository, 'getCourseById');
testRep.mockResolved([{id: 1, course: 'course'}])
    })
}) /,0 */

