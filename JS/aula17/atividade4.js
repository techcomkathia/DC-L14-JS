// você foi contratado para fazer uma seleção de candidatos para uma vaga de emprego. Para isso, você precisa criar um programa que receba um array de objetos, onde cada objeto representa um candidato e possui as seguintes propriedades: nome (string), idade (number), experiência (number, em anos) e vaga (string, nome da vaga que o candiato se candidatou) e tecnologias (array de strings, com as tecnologias que o candidato tem experiência). O programa deve produzir 2 arrays:
// 1. Um array com os candidatos que se candidataram a vaga de "Desenvolvedor Front-end" e possuem experiência em "JavaScript" ou tenha mais de 3 anos de experiência na area de front-end
//  (desenvolvedor Front-end E javaScript) OU (3 anos de experiência E desenvolvedor Front-end).
// 2. Um array com os candidatos que se candidataram a vaga de "Desenvolvedor Back-end" e possuem experiência em "Node.js" e "Banco de Dados".
// (desenvolvedor Back-end E node.js E banco de dados).

const candidatos = [
  { 
    nome: "Ana Silva", 
    idade: 28, 
    experiencia: 5, 
    vaga: "Desenvolvedor Front-end", 
    tecnologias: [ "React", "Styled Components"] },
  { 
    nome: "Bruno Costa", 
    idade: 32, 
    experiencia: 7, 
    vaga: "Desenvolvedor Back-end", 
    tecnologias: ["Node.js", "Banco de Dados", "PostgreSQL"] },
  { 
    nome: "Carla Souza", 
    idade: 24, 
    experiencia: 2, 
    vaga: "Desenvolvedor Front-end", 
    tecnologias: ["HTML", "CSS", "JavaScript"] },
  { 
    nome: "Diego Lima", 
    idade: 30, 
    experiencia: 4, 
    vaga: "Desenvolvedor Back-end", 
    tecnologias: ["Node.js", "Express", "Banco de Dados"] },
  { 
    nome: "Eduarda Rocha", 
    idade: 26, 
    experiencia: 3, 
    vaga: "Desenvolvedor Front-end", 
    tecnologias: ["Vue.js", "JavaScript"] },
  { 
    nome: "Fábio Santos", 
    idade: 35, 
    experiencia: 10, 
    vaga: "Desenvolvedor Back-end", 
    tecnologias: ["Java", "Spring Boot"] },
  { nome: "Gabriela Mendes", idade: 29, experiencia: 6, vaga: "Desenvolvedor Front-end", tecnologias: ["Angular", "TypeScript"] },
  { nome: "Heleno Neto", idade: 27, experiencia: 4, vaga: "Desenvolvedor Back-end", tecnologias: ["Node.js", "Banco de Dados", "MongoDB"] },
  { nome: "Íris Oliveira", idade: 23, experiencia: 1, vaga: "Desenvolvedor Front-end", tecnologias: ["React Native", "JavaScript"] },
  { nome: "João Paulo", idade: 31, experiencia: 8, vaga: "Desenvolvedor Back-end", tecnologias: ["Python", "Django", "PostgreSQL"] }
];


let candidatosFrontEnd = candidatos.filter(
  (candidato) =>
    (candidato.vaga === "Desenvolvedor Front-end" && (candidato.tecnologias.includes("JavaScript")))
    || 
    (candidato.vaga === "Desenvolvedor Front-end" && candidato.experiencia > 3)
);

let candidatosBackEnd = candidatos.filter(
  (candidato) =>
    candidato.vaga === "Desenvolvedor Back-end" &&
    candidato.tecnologias.includes("Node.js") &&
    candidato.tecnologias.includes("Banco de Dados")
);

console.log("Candidatos para Desenvolvedor Front-end:", candidatosFrontEnd);
console.log("Candidatos para Desenvolvedor Back-end:", candidatosBackEnd);