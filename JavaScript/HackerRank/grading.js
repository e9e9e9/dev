// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

function gradingStudents(grades) {
    // Write your code here
    return grades.map(grade => {
        if (grade > 37) {
            if (grade % 5 == 3) {
                grade += 2;
            } else if (grade % 5 == 4) {
                grade += 1;
            }
        }
        return grade;
    });
}

gradingStudents([73, 67, 38, 33]);