
function Pessoa(nome, cargo) {
    this.nome = nome;
    this.cargo = cargo;
   

}

function Funcionario(nome, cargo, idade, salario) {
    Pessoa.call(this, nome, cargo);
    this.idade = idade;      
    this.salario = salario;  
   
}
const pessoa1 = new Pessoa("Arildo", "back-end",);
const pessoa2 = new Pessoa("Arlon", "back-end",);
const funcionario1 = new Funcionario("Cristiane", "dev front-end", 33, 4000);
const funcionario2 = new Funcionario("Daniele", "dev front-end" , 35, 5000);


console.log(pessoa1);
console.log(pessoa2);
console.log(funcionario1);
console.log(funcionario2);
