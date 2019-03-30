import express from 'express';
import mysql from 'mysql';

const envVars = [
    'NODEJS_MYSQL_USER',
    'NODEJS_MYSQL_PW',
];

function envErr(strings, envExp) {
  return `Please define the ${envExp} variable in your shell environment.`;
}

for (let envVar of envVars) {
  if (!process.env.NODEJS_MYSQL_USER) throw Error(envErr`${envVar}`);
}

console.log('Connecting to local mysql instance...');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.NODEJS_MYSQL_USER,
  password : process.env.NODEJS_MYSQL_PW,
  database : 'Instabuy',
  port     : 3306 | process.env.NODEJS_MYSQL_PORT,
});

db.connect((err) => {
  if (err) throw err;

  console.log('MySQL Connection successful!');
  console.log('Configuring graceful shutdown operations...');
  process.once('SIGUSR2', () => {
    console.log('Closing database connection...');
    db.end((err) => {
      if (err) throw err;

      console.log('Database connection closed. Shutting down server...');
      process.kill(process.pid, 'SIGUSR2');
    });
  });
});

// Start the application server
console.log('Starting application server...');
const app = express();
app.get('/', (req, res) => res.send('Hello, Instabuy-Remix!'));

app.listen(3000, () => console.log('Server listening on port 3000'));
