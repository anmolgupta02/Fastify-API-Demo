const CourseController = require("../controllers/courseController")

const routes = [
    {
        method: 'GET',
        url: '/api/course',
        handler: CourseController.getCourse
    },

    {
        method: 'GET',
        url: '/api/course/:id',
        handler: CourseController.getSingleCourse
    },
    {
        method: 'POST',
        url: '/api/course',
        handler: CourseController.addCourse
    },
    {
        method: 'PUT',
        url: '/api/course/:id',
        handler: CourseController.updateCourse
    },
    {
        method: 'DELETE',
        url: '/api/course/:id',
        handler: CourseController.deleteCourse
    },
]

module.exports = routes