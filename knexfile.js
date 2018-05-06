module.exports = {
    development: {
        client: "mysql2",
        connection: "mysql://kwb75xyq1y3qgh64:tth42uuwa6zx2m02@nr84dudlpkazpylz.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/nisagsaw2o4nfi3t",
        migrations: {
            directory: __dirname + '/server/migrations'
        }
    },
    production: {
        client: "mysql2",
        connection: "mysql://kwb75xyq1y3qgh64:tth42uuwa6zx2m02@nr84dudlpkazpylz.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/nisagsaw2o4nfi3t",
        migrations: {
            directory: __dirname + '/server/migrations'
        }
    },
}