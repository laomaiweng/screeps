// builder.js
/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('builder'); // -> 'a thing'
 */

module.exports = function(creep) {
    // Check for remaining energy
    if (creep.energy <= 0) {
        // No energy, go fetch some from the nearest spawn
        var spawn = creep.pos.findNearest(Game.MY_SPAWNS);
        if (!creep.pos.isNearTo(spawn)) {
            creep.moveTo(spawn);
        } else {
            spawn.transferEnergy(creep, creep.energyCapacity);
        }
    } else {
        // Energy available, search for a construction site that matches the builder's specialization
        var specialization = creep.memory.specialization;
        var site = creep.pos.findNearest(Game.CONSTRUCTION_SITES, { filter: function(site) {return site.structureType == specialization;} });
        if (!site) {
            // Builder not specialized or no more sites matching specialization, find any construction site
            site = creep.pos.findNearest(Game.CONSTRUCTION_SITES);
        }
        if (site) {
            // Go work on the construction site
            if (!creep.pos.isNearTo(site)) {
                creep.moveTo(site);
            } else {
                creep.build(site);
            }
        }
    }
};
