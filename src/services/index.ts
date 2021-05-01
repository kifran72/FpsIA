import Mongo from "./mongo";

export default class Services {
    mongo = new Mongo();
    constructor() { }
};