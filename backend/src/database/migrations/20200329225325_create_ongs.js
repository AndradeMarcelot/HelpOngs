
exports.up = function(knex) { // Responsável pela criação da tabela
  return knex.schema.createTable('ongs',function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) { // usado quando dar algum problema e preciso deletar a tabela
    return knex.schema.dropTable('ongs');
};
