
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('googleId');
        table.string('githubId');
        table.string('linkedinId');
        table.string('username');
        table.string('token');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
        .createTable('bills', (table) => {
            table.increments();
            table.string('name').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
            table.integer('userId').references('id').inTable('users').unsigned();
        })
        .createTable('expenses', (table) => {
            table.increments();
            table.string('name').notNullable();
            table.string('currency').notNullable().defaultTo('USD');
            table.decimal('amount', 16, 2).notNullable();
            table.timestamp('time').notNullable();
            table.timestamp('updated_at').defaultTo(knex.fn.now());
            table.integer('billId').references('id').inTable('bills').unsigned();
            table.integer('userId').references('id').inTable('users').unsigned();
        });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('expenses').dropTable('bills').dropTable('users');
};
