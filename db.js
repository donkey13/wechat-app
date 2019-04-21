var db = require("pg-promise")

class dboperation {

    async get() {
        return await this.db.any("")
    }
}