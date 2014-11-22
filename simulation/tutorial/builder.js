/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('builder'); // -> 'a thing'
 */

module.exports = function(creep) {
    if (creep.energy <= 0) {
        var spawn = creep.pos.findNearest(Game.MY_SPAWNS);
        if (!creep.pos.isNearTo(spawn)) {
            creep.moveTo(spawn);
        } else {
            spawn.transferEnergy(creep, creep.energyCapacity);
        }
    } else {
        var specialization = creep.memory.specialization;
        var site = creep.pos.findNearest(Game.CONSTRUCTION_SITES, { filter: function(site) {return site.structureType == specialization;} });
        if (!site) {
            site = creep.pos.findNearest(Game.CONSTRUCTION_SITES);
        }
        if (site) {
            if (!creep.pos.isNearTo(site)) {
                creep.moveTo(site);
            } else {
                creep.build(site);
            }
        }
    }
}
