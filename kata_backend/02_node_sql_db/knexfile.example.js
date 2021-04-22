// Update with your config settings.

module.exports = {

    development: {
        client: 'postgresql',
        connection: {
            host: 'holi',
            database: 'holi',
            user: 'holi',
            password: 'holi'
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
            host: 'holi',
            database: 'holi',
            user: 'holi',
            password: 'holi'
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
            host: 'holi',
            database: 'holi',
            user: 'holi',
            password: 'holi'
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
