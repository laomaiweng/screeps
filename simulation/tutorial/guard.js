/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('guard'); // -> 'a thing'
 */

module.exports = function(creep) {
    var spawn = creep.pos.findNearest(Game.MY_SPAWNS);
    var target = spawn.pos.findNearest(Game.HOSTILE_CREEPS);
    if (target) {
        if (!creep.pos.isNearTo(target)) {
            creep.moveTo(target);
        } else {
            creep.attack(target);
        }
    } else {
        if (!creep.pos.isNearTo(spawn)) {
            creep.moveTo(spawn);
        }
    }
}

