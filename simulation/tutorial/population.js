/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('population'); // -> 'a thing'
 */

module.exports = function(spawn) {
    var roles = ['builder', 'harvester', 'guard', 'healer'];
    for(var i in roles) {
        var role = roles[i];
        var creeps = spawn.pos.findInRange(Game.CREEPS, spawn.memory.populationRange, { filter: function(creep){if(creep.memory && creep.memory.role) return creep.memory.role == role; else return false;} });
        if (creeps.length < spawn.memory.minPopulation[role]) {
            spawn.createCreep(spawn.memory.creepSpecs[role], undefined, {'role': role});
        }
    }
}

