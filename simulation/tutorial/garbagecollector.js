// garbagecollector.js
/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('garbagecollector'); // -> 'a thing'
 */

// Cleanup dead creeps
for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
        delete Memory.creeps[name];
    }
}

// Cleanup dead spawns
for (var name in Memory.spawns) {
    if (!Game.spawns[name]) {
        delete Memory.spawns[name];
    }
}

