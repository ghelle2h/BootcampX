const { Pool } = require('pg');

const pool = new Pool({
  user: 'hamzaghelle',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id as id, students.name as student, cohorts.name as cohort 
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3]};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.student} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
});

