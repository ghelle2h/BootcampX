SELECT cohorts.name as cohort, avg(max(completed_at) - max(started_at)) as average_assistance_time
FROM assistance_requests
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohort
ORDER BY average_assistance_time;