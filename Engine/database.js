const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(
  'mongodb+srv://admin:admin@cluster0.6rfng.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    poolSize: 10,
    keepAlive: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAliveInitialDelay: 15000,
    serverSelectionTimeoutMS: 15000,
  },
  err => {
    if (err)
      return console.log('[DataBase] > Erro ao tentar conectar na DATABASE');
    console.log('[DataBase] > Conectado com sucesso a DataBase');
  },
);

var User = new Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  dev: {
    type: Boolean,
    default: false,
  },
  sup: {
    type: Boolean,
    default: false,
  },
  dzn: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Boolean,
    default: false,
  },
  subowner: {
    type: Boolean,
    default: false,
  },
});
var Guild = new Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  prefix: {
    type: String,
    default: '!',
  },
  lang: {
    type: String,
    default: 'en-US',
  },
  welcome: {
    type: Boolean,
    default: false,
  },
  welcomechannel: {
    type: String,
    default: 'Nenhum',
  },
  welcomemsg: {
    type: String,
    default: 'Nenhuma',
  },
  byebye: {
    type: Boolean,
    default: false,
  },
  byebyechannel: {
    type: String,
    default: 'Nenhum',
  },
  byebyemsg: {
    type: String,
    default: 'Nenhuma',
  },
  autorole: {
    type: Boolean,
    default: false,
  },
  autoroleid: {
    type: String,
    dafault: 'Nenhum',
  },
  contador: {
    type: Boolean,
    default: false,
  },
  chatContador: {
    type: [],
    default: [],
  },
  antinvite: {
    type: Boolean,
    default: false,
  },
  ban: {
    type: Boolean,
    default: false,
  },
  logs: {
    type: Boolean,
    default: false,
  },
  logschannel: {
    type: String,
    dafault: 'Nenhum',
  },
});

var Comando = new Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  usos: {
    type: Number,
    default: 0,
  },
  manutenção: {
    type: Boolean,
    default: false,
  },
});
//EXPORTS E VARIVAVEIS
var Guilds = mongoose.model('Guilds', Guild);
exports.Guilds = Guilds;

var Users = mongoose.model('Users', User);
exports.Users = Users;

var Comandos = mongoose.model('Comandos', Comando);
exports.Comandos = Comandos;
