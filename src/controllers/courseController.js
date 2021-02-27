const Course = require("../models/Course")

exports.getCourse = async (res,reply) =>{

    try {
        const course = await Course.find()
        return course
    } catch (error) {
        throw console.error();
    }
}


//getting single Course

exports.getSingleCourse = async (req,reply) => {
    try {
        const courseID = req.params.id
        const course = await Course.findById(courseID)
        return course
    } catch (error) {
        
    }
}


//add a new course

exports.addCourse = async (req,reply) => {
    try {
       const course = new Course(req.body)
        course.save()
        return "Course Added Succesfully.!"
    } catch (error) {
        
    }
}

//update an existing course

exports.updateCourse = async(req, reply) => {
    try {
      const courseID = req.params.id
      const course = req.body
      const {...updatedCourse} = course
      const update = await Course.findByIdAndUpdate(courseID, updatedCourse, {new : true})
      return update
    } catch (error) {  
        throw error     
    }
}

//Deleting an existing course
exports.deleteCourse = async(req,reply) =>{

    try {
        const courseID = req.params.id 
        const course = Course.findByIdAndRemove(courseID)
        return course +"\n Course Deleted Successfully"
    } catch (error) {
        
    }
   
}