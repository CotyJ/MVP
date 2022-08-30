require("dotenv").config();
const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = process.env.DEV_PORT || 9999;
const db = require('../database');

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

// GET ALL characters
app.get('/api/v1/characters', async (req, res) => {
  await db.query("SELECT * FROM characters order by name;")
    .then((data) => {
      res.status(200).json(data.rows);
    })
    .catch((err) => console.log("ERROR", err));
})

// GET ONE character
app.get('/api/v1/characters/:id', async (req, res) => {
  const result = await db.query(
    `SELECT * FROM characters WHERE id= $1`,
    [req.params.id]);
  res.status(200).json(result.rows[0])
  console.log(result.rows[0]);
})

// POST a character
app.post('/api/v1/characters', async (req, res) => {
  const result = await db.query(
    `INSERT INTO characters(name, class, ancestry, level) VALUES($1, $2, $3, $4) returning *`,
    [req.body.chosenName, req.body.chosenCla, req.body.chosenAnc, req.body.chosenLvl])
    .then(res.status(200))
    .catch((err) => console.log(err));
  res.json(result.rows);
})

// UPDATE a character
app.put('/api/v1/characters/:id', async (req, res) => {
  const result = await db.query(
    `UPDATE characters SET name=$1, class=$2, ancestry=$3, level=$4 where id=$5 returning *`,
    [req.body.name, req.body.class, req.body.ancestry, req.body.level, req.params.id])
    .then(res.status(200))
    .catch((err) => console.log(err));
  res.status(200).json(result.rows[0]);
})

// DELETE a character
app.delete('/api/v1/characters/:id', async (req, res) => {
  await db.query(
    `DELETE FROM characters where id=$1`,
    [req.params.id])
    .then(res.sendStatus(204))
    .catch((err) => console.log(err));
})

app.listen(port, () => {console.log(`-----Listening on port ${port}-----`)
});
