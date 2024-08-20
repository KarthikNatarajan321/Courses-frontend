const express = require('express');
const app = express();
const port = 3000;

// Sample data
const courses = [
    { id: 1, name: 'Introduction to Programming', description: 'Learn the basics of programming.' },
    { id: 2, name: 'Advanced JavaScript', description: 'Deep dive into JavaScript and its features.' },
    { id: 3, name: 'Web Development with React', description: 'Build modern web applications using React.' }
];

// REST API to get the list of courses
app.get('/api/courses', (req, res) => {
    res.json(courses);
});

app.listen(port, () => {
    console.log(`Courses API is running on http://localhost:${port}`);
});
