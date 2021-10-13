SELECT teachers.name as teacher, cohorts.name FROM (
  SELECT cohorts.name 
  FROM cohorts
  WHERE cohorts.name = 'JUL02'
) as cohort
FROM teachers
ORDER BY teacher;

