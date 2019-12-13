

exports.up = function (knex) {
    return knex.schema.createTable('users', users => {
        users.increments();

        users
            .string('username', 128)
            .notNullable()
            .unique();
        users.string('password', 128).notNullable();
        users.string('favorite color', 255);
        users.string('favorite food', 255);
        users.string('favorite song', 255);
        users.string('favorite book', 255);
        users.string('favorite movie', 255);
        users.string('firstname', 255).notNullable();
        users.string('lastname', 255).notNullable();
        users.string('email', 255).notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};