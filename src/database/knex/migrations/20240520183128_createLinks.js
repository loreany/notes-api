exports.up = (knex) =>
  knex.schema.createTable('links', (table) => {
    table.increments('id');
    table.text('url').notNullable();

    table
      .integer('note_id')
      .references('id')
      .inTable('notes')
      .onDelete('CASCADE');
    table.integer('user_id').references('id').inTable('users');
    table.timestamp('created_at').default(knex.fn.now());
  });

exports.down = (kkex) => knex.schema.dropTable('links');
