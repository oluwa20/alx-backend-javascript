export default function updateStudentGradeByCity(arry, city, newGrades) {
  return arry
    .filter((a) => a.location === city)
    .map((person) => {
      const grades = newGrades.filter((a) => a.studentId === person.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...person,
        grade,
      };
    });
}
