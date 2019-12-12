
exports.up = function(knex) {
  return knex.schema.createTable('students',tbl=>{
tbl.increments();
tbl.string('name',128).notNullable();
  }).createTable('teachers',tbl=>{
tbl.increments();
tbl.string('subject',128).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('students').dropTableIfExists('teachers')
};
