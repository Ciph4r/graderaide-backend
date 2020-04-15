/******************
 * YOUR CODE HERE *
 ******************/
const Grade = (assignment , score) => {
  return {
    assignment,
    score,
    
  }
}

const Term = (hours) => {
  return {
    hours,
    grades: [],
    addGrade: function (assignment, grade ){
      this.grades.push( Grade(assignment, grade))
    },
  }
}


const Course = (name) => {
  return {
    name,
    terms: [],
    addTerm : function(hrs){
      this.terms.push(Term(hrs))
    },
  }
}

const Student = (name, course , term = 1) => {
  return {
    name,
    course,
    term,
    courses: [],
    addCourse: function(obj){
    this.courses.push(Course(obj))
    },
    getAverage: function(crs,idx){
      let allAverageGrade = []
      const average = (array) => {
        let total = 0
        let count = 0
        for (const num of array){
          total += num.score
          count ++
        }
        return total/count
      }
    for (const course of this.courses){
      if (course.name === crs){
        if (idx !== undefined){
        return average(course.terms[idx].grades)
        }else {
          return average(course.terms[this.term-1].grades)
      }
        // {
        //   for (const grade of course.terms){
        //     console.log('grade')
        //     console.log(grade)
        //     allAverageGrade.push(average(grade.grades))
          
        //   }
        //   return allAverageGrade.reduce((a,b) => a+b)/allAverageGrade.length
        // }  

    } else{ 
      // return this.getAverage(this.courses)
      for (const course of this.courses){
        if (this.course === course.name){
          return average(course.terms[this.term-1].grades)
        }
      }

    }
    }
  


    }
  }
  
}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof Grade === 'undefined') {
  Grade = undefined;
}

if (typeof Term === 'undefined') {
  Term = undefined;
}

if (typeof Course === 'undefined') {
  Course = undefined;
}

if (typeof Student === 'undefined') {
  Student = undefined;
}


module.exports = {
  Grade,
  Term,
  Course,
  Student,
}
