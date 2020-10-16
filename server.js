const express = require('express');
const dotenv = require('dotenv');

//Load environment vars
dotenv.config({ path: './config/config.env' });

const app = express();

//Load routes
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/bootcamps', require('./routes/bootcamps'));
app.use('/api/v1/courses', require('./routes/courses'));
app.use('/api/v1/reviews', require('./routes/reviews'));
app.use('/api/v1/users', require('./routes/users'));

app.get('/', (req, res) => {
    res.json({
        name: 'Eric Schumann',
        age: 38,
        occupation: 'Programmer'
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`));