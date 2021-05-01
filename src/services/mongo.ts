import mongoose from 'mongoose'
import chalk from 'chalk';
import { strict } from 'node:assert';

const url: string = 'mongodb://localhost:27017/BTS-project';
const Schema = mongoose.Schema;
const users = new Schema({
    username: String,
    password: String
});
const usersModel = mongoose.model('users', users);
const paramsConnections = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
};

export default class Mongo {
    constructor() { this.connect(); }

    async connect() {
        let connexion = await mongoose.connect(url, paramsConnections);
        if (connexion.connections.length === 0) { console.log(chalk.red('BDD Connection failed')); return }
        console.log(chalk.blue('BDD Connection succesfully'));
    }

    async insert(data: any) {
        await usersModel.insertMany(data);
    }

    async update(filter: any, data: any) {
        await usersModel.updateMany(filter, data);
    }

    async delete(filter: any, data: any) {
        await usersModel.deleteMany(filter, data);
    }

    async find(filter: any) {
        return await usersModel.find(filter);
    }
};