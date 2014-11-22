/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvester'); // -> 'a thing'
 */

module.exports = function(creep) {
    var spawn = creep.pos.findNearest(Game.MY_SPAWNS);
    var energy = creep.pos.findNearest(Game.SOURCES_ACTIVE);
    if (creep.energy < creep.energyCapacity) {
        if (!creep.pos.isNearTo(energy)) {
            creep.moveTo(energy);
        } else {
            creep.harvest(energy);
        }
    } else {
        if (!creep.pos.isNearTo(spawn)) {
            creep.moveTo(spawn);
        } else {
            creep.transferEnergy(spawn);
        }
    }
}

