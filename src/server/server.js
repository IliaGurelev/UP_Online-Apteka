import express from 'express';
import bodyParser from'body-parser';
import cors from 'cors';
import pg from 'pg';

const { Pool } = pg;

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'OnlineAptekaGurelev',
  password: '0000',
  port: 5433, 
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } else {
    console.log('Успешно подключено к базе данных:', res.rows[0]);
  }
});

app.get('/api/product', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM product');
    res.json(result.rows);
  } catch (err) {
    console.error('Ошибка получения данных:', err);
    res.status(500).send('Ошибка сервера');
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

      // Проверка существует ли пользователь
      if (result.rows.length > 0) {
        const user = result.rows[0];
        
        if (user.password === password) { 
          return res.send(true);
        } else {
          return res.send('Неправильный пароль');
        }
      } else {
        return res.send('Пользователь не найден.');
      }
  } catch (error) {
    console.error(error);
    return res.send('Произошла ошибка при аутентификации.');
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
