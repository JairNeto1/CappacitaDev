const express = require('express')
const dataBase = require('./database/databaseMysql')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/pokemons', async (req, res) => {
  res.send(await dataBase.mostrarPokemons())
})

app.get('/pokemons/:id', async (req, res) => {
  res.send(await dataBase.mostrarPokemon(req.params.id))
})

app.post('/pokemons', async (req, res) => {
  const pokemon = await dataBase.salvarPokemons({
    nome: req.body.nome,
    tipo: req.body.tipo,
    fraqueza: req.body.fraqueza,
    resistencia: req.body.resistencia,
    hp: 100
  })
  res.send(pokemon)
})

app.put('/pokemons/:id', (req, res) => {
  const pokemon = dataBase.atualizarPokemon(req, params.id, {
    nome: req.body.nome,
    tipo: req.body.tipo,
    fraqueza: req.body.fraqueza,
    resistencia: req.body.resistencia,
    hp: 100,
    id: parseInt(req.params.id)
  })
  res.send(pokemon)
})

app.delete('/pokemons/:id', (req, res) => {
  res.send(dataBase.deletarPokemons(req.params.id))
})

app.post('/batalha', (req, res) => {
  res.send(dataBase.batalhaPokemon(req.body.id1, req.body.id2))
})

app.post('/curar', (req, res) => {
  res.send(dataBase.curarPokemon(req.body.id1, req.body.id2))
})

app.listen(3003)
