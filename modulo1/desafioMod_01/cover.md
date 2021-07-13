# Desafio módulo 1

## Situação problema:

- Você foi contratado por uma empresa de seguro de vida para criar uma função que retorna uma lista com todos os clientes que possuem idade entre 18 e 26 anos.

Crie uma função que receba um array no modelo a seguir:

---

```
dadosClientes = [
{
nome: "Lucas",
sobrenome: "da Silva",
idade: 21,
genero: "Masculino",
plano: "full",
carencia: false,
aquisicao: "12/01/2019"
},
{
nome: "Ana",
sobrenome: "Lima",
idade: 17,
genero: "Feminino",
plano: "medium",
carencia: false,
aquisicao: "17/03/2019"
},
{
nome: "Adriana",
sobrenome: "Menezes",
idade: 27,
genero: "Feminino",
plano: "full",
carencia: true,
aquisicao: "14/09/2020"
}
]
```

Sua função deve retornar uma nova lista contendo apenas os clientes que possuem idade
igual ou maior que 18 e menor ou igual a 26.
Siga este modelo:
module.exports.retornaLista = (array) => {
//código
return "array final"
}
