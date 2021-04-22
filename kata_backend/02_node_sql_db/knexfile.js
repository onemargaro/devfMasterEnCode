// Update with your config settings.

module.exports = {

    development: {
        client: 'postgresql',
        connection: {
            host: 'otto.db.elephantsql.com',
            database: 'deatfghy',
            user: 'deatfghy',
            password: 'U1IaP2x8MqBD0xWHaFcY5eJvL4DrIj16'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    staging: {
        client: 'postgresql',
        connection: {
            host: 'otto.db.elephantsql.com',
            database: 'deatfghy',
            user: 'deatfghy',
            password: 'U1IaP2x8MqBD0xWHaFcY5eJvL4DrIj16'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            host: 'otto.db.elephantsql.com',
            database: 'deatfghy',
            user: 'deatfghy',
            password: 'U1IaP2x8MqBD0xWHaFcY5eJvL4DrIj16'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};
