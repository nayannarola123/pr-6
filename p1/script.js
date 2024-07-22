class School {

    student(studentName, studentEmail, studentContact) {
        console.log(`Student Name: ${studentName}`);
        console.log(`Student Email: ${studentEmail}`);
        console.log(`Student Contact: ${studentContact}`);
    }

    faculty(facultyName, facultyEmail, facultyContact) {
        console.log(`Faculty Name: ${facultyName}`);
        console.log(`Faculty Email: ${facultyEmail}`);
        console.log(`Faculty Contact: ${facultyContact}`);
    }

    peon(peonName, peonEmail, peonContact) {
        console.log(`Peon Name: ${peonName}`);
        console.log(`Peon Email: ${peonEmail}`);
        console.log(`Peon Contact: ${peonContact}`);
    }
}
    const s1 = new School();
    s1.student("arpit", "akradadiya@gmail.com", "9837595276");
    s1.faculty("nayan", "nayannarola@gmail.com", "9510392980");
    s1.peon("prince", "prince123@gmail.com", "8490741472");

