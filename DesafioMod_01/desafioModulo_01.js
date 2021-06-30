var dadosClientes = [
  {
    nome: "Lucas",
    sobrenome: "da Silva",
    idade: 21,
    genero: "Masculino",
    plano: "full",
    carencia: false,
    aquisicao: "12/01/2019",
  },
  {
    nome: "Ana",
    sobrenome: "Lima",
    idade: 17,
    genero: "Feminino",
    plano: "medium",
    carencia: false,
    aquisicao: "17/03/2019",
  },
  {
    nome: "Adriana",
    sobrenome: "Menezes",
    idade: 27,
    genero: "Feminino",
    plano: "full",
    carencia: true,
    aquisicao: "14/09/2020",
  },
];

function retornaClientes(filtroIdade) {
  var listaIdade = [];
  var listaNome = [];

  for (var i = 0; i < filtroIdade.length; i++) {
    if (filtroIdade[i].idade >= 18 && filtroIdade[i].idade <= 26) {
      listaIdade.push(filtroIdade[i]);
      listaNome.push(filtroIdade[i]);
    }
  }
  return listaNome;
}

console.log(retornaClientes(dadosClientes));
