// init.js
/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('init'); // -> 'a thing'
 */

// Check for the initialization flag
if (!Memory.init) {
    // Initialization not done: do it
    for (var name in Game.spawns) {
        var spawn = Game.spawns[name];
        spawn.memory.populationRange = 20;
        spawn.memory.creepSpecs = {};
        spawn.memory.creepSpecs['harvester'] = [Game.WORK,Game.CARRY,Game.MOVE];
        spawn.memory.creepSpecs['builder'] = [Game.WORK,Game.WORK,Game.WORK,Game.CARRY,Game.MOVE];
        spawn.memory.creepSpecs['guard'] = [Game.TOUGH,Game.ATTACK,Game.MOVE,Game.MOVE];
        spawn.memory.creepSpecs['healer'] = [Game.HEAL,Game.MOVE];
        spawn.memory.minPopulation = {'harvester': 3, 'builder': 1, 'guard': 0, 'healer': 0};
    }
    // Set the initialization flag
    Memory.init = true;
}

