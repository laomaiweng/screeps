// main.js

// Initialize the game
require('init');

// Process the creeps
var builder = require('builder');
var guard = require('guard');
var harvester = require('harvester');
var healer = require('healer');
for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    switch (creep.memory.role) {
        case 'builder':
            builder(creep);
            break;
        case 'guard':
            guard(creep);
            break;
        case 'harvester':
            harvester(creep);
            break;
        case 'healer':
            healer(creep);
            break;
        default:
            // idle
            break;
    }
}

// Process the spawns
var population = require('population');
for(var name in Game.spawns) {
    population(Game.spawns[name]);
}

// Cleanup dead objects
require('garbagecollector');

