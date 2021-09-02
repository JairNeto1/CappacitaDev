const { databaseConnection } = require('./connection')

async function salvarPokemons(pokemon) {
  const queryinsertPokemon = `INSERT INTO pokemons (nome_pokemon, tip) VALUES 
  ('${pokemon.nome}', '${pokemon.tipo}')`

  const result = await databaseConnection.raw(queryinsertPokemon)

  if (result) {
    return {
      nome: pokemon.nome,
      tipo: pokemon.tipo,
      id: result[0].insertId
    }
  } else {
    console.error('Deu erro!')
    return {
      error: 'Deu erro na inserção'
    }
  }
}

async function mostrarPokemon(id) {
  const querySelectPokemon = `SELECT * FFROM pokemons WHERE id = ${id}`

  const result = await databaseConnection.raw(querySelectPokemon)

  return result[0]
}

async function mostrarPokemons() {
  const querySelectPokemon = `SELECT * FROM pokemons`

  const result = await databaseConnection.raw(querySelectPokemon)
  return result[0]
}

module.exports = {
  salvarPokemons,
  mostrarPokemon,
  mostrarPokemons
}
