exports.up = function (knex, _) {
    return knex.schema.withSchema('pizzly').alterTable('_pizzly_configs', function (table) {
        table.text('oauth_scopes').alter({ alterType: true });
    });
};

exports.down = function (knex, _) {
    return knex.schema.withSchema('pizzly').alterTable('_pizzly_configs', function (table) {
        table.string('oauth_scopes').alter({ alterType: true });
    });
};
