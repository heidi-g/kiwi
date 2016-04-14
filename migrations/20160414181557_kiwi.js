
exports.up = function(knex, Promise) {
  console.log('create table')

  return knex.schema.createTableIfNotExists('kiwi', function(table) {
    table.increments('id')
    table.string('kiwiWord')
    table.string('expression')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('kiwi').then(function () {
    console.log('kiwi table was dropped')
  })
};
