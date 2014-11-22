// healer.js
/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('healer'); // -> 'a thing'
 */

module.exports = function(creep) {
    // Find wounded creeps close to the base
    var spawn = creep.pos.findNearest(Game.MY_SPAWNS);
    var target = creep.pos.findNearest(Game.CREEPS, {filter: function(object) {return object.hits < object.hitsMax;}});
    var range = 5;
    if (target && spawn.pos.inRangeTo(target,range)) {
        // Wounded friend found, go tend its wounds
        if (!creep.pos.isNearTo(target)) {
            creep.moveTo(target);
        } else {
            creep.heal(target);
        }
    } else {
        // No wounded ally, move back to the spawn
        if (!creep.pos.isNearTo(spawn)) {
            creep.moveTo(spawn);
        }
    }
};

