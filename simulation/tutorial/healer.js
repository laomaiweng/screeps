/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('healer'); // -> 'a thing'
 */

module.exports = function(creep) {
    var spawn = creep.pos.findNearest(Game.MY_SPAWNS);
    var target = creep.pos.findNearest(Game.CREEPS, {filter: function(object) {return object.hits < object.hitsMax;}});
    if (target && spawn.pos.inRangeTo(target,5)) {
        if (!creep.pos.isNearTo(target)) {
            creep.moveTo(target);
        } else {
            creep.heal(target);
        }
    } else {
        if (!creep.pos.isNearTo(spawn)) {
            creep.moveTo(spawn);
        }
    }
}

