module.exports = {
	url : 'mongodb://<user>:<pass>@mongo.onmodulus.net:27017/uw45mypu'
}


var db = require("pg-promise")

class dboperation {

    async get() {
        return await this.db.any("")
    }
}