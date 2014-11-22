// guard.js
/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('guard'); // -> 'a thing'
 */

module.exports = function(creep) {
    // Find any hostile creep, focusing the one closest to the spawn
    var spawn = creep.pos.findNearest(Game.MY_SPAWNS);
    var target = spawn.pos.findNearest(Game.HOSTILE_CREEPS);
    if (target) {
        // Hostile creep found, engage
        if (!creep.pos.isNearTo(target)) {
            creep.moveTo(target);
        } else {
            creep.attack(target);
        }
    } else {
        // No hostile creep, back to spawn
        if (!creep.pos.isNearTo(spawn)) {
            creep.moveTo(spawn);
        }
    }
};

