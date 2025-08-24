module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './cursos.sqlite3'
        },

        useNullAsDefault: true,
        migrations: {
            directory: './migrations'
        }
    }
};