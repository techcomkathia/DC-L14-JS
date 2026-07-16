//esse arquivo tem por objetivo fazer a representação das tabela do banco de dados

const conexaoBanco = require('./1.conexaoBanco')
const {DataTypes} = require('sequelize')

//obrigatoriamente precisa receber 2 parâmetros: nome da tabela e o objeto de configuração do sequelize
//para tabelas que já tem informação no banco de dados é necessario passar o terceiro parametro { tableName: 'nome da tabela no banco de dados', timestamps: false}
const Categorias = conexaoBanco.define('categorias', {
    //nomeColuna : {objeto com restrições e tipos de dados}
    id_categoria:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING(50),
        allowNull: false
    }

},
{
    tableName: 'categorias',
    timestamps: false
    //porque a tabela no banco de dados nao tem o campo created_at e updated_at, mas já tem dados 
}
)



const Autores = conexaoBanco.define('autores', {
  id_autor :{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome :{
    type: DataTypes.STRING(100),
    allowNull: false
  },
  nacionalidade:{
    type: DataTypes.STRING(50),
    allowNull: false
  },
  data_nascimento:{
    type: DataTypes.DATEONLY,
    allowNull: false
  }
},
{
    tableName: 'autores',
    timestamps: false
}
)




//na definição de modelos que armazenam referencia para outra tabela é necessario importar o modelo da tabela referenciada no arquivo caso ele esteja em outro arquivo.
//id, titulo(100), ano_publicacao, preco(10,2), autor_id, categoria_id
const Livros = conexaoBanco.define('livros', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo :{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ano_publicacao :{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco :{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },

/*para colunas que são chaves estrangeiras precisamos informar o atributo references:{
        model: 'nome do modelo da tabela referenciada',
        key: 'nome da coluna da tabela referenciada'
        }*/
    autor_id :{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Autores,
            key: 'id_autor'
        }        
    },
    categoria_id :{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Categorias,
            key: 'id_categoria'
        }
    }    
})


//livros -> autor n-1
Livros.belongsTo(Autores, {foreignKey: 'autor_id'});
//autores -> livros 1-n
Autores.hasMany(Livros, {foreignKey: 'autor_id'});
//livros -> categoria n-1
Livros.belongsTo(Categorias, {foreignKey: 'categoria_id'});
//categorias -> livros 1-n
Categorias.hasMany(Livros, {foreignKey: 'categoria_id'});













/*Autores.create({
    nome: 'Cleitinho',
    nacionalidade: 'Brasileira',
    data_nascimento: '1965-07-31'
}).then(console.log).catch(console.error);
*/


//Categorias.create({nome:'teste'}).catch(console.error);