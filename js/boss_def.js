/*
MIT License

Copyright (c) 2018 Daniel Domurad

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

window.boss_defs = {
    ability_types: {
        "mele_attack": 1,
        "range_attack": 2,
        "defence": 3,
        "speed": 4
    }
}

window.boss_defs.abilities = {
    frenzy: {
        name: "Frenzy",
        rankt: true,
        maxRank: 3,
        type: boss_defs.ability_types.mele_attack,
        printable: true
    },
    hammerTime: {
        name: "Hammer Time",
        rankt: false,
        maxRank: 0,
        type: boss_defs.ability_types.mele_attack,
        printable: true
    },
    nimble: {
        name: "Nimble",
        rankt: false,
        maxRank: 0,
        type: boss_defs.ability_types.defence,
        printable: true
    },
    smash: {
        name: "Smash!",
        rankt: false,
        maxRank: 0,
        type: boss_defs.ability_types.mele_attack,
        printable: true
    },
    stalwart: {
        name: "Stalwart",
        rankt: true,
        maxRank: 3,
        type: boss_defs.ability_types.defence,
        printable: true
    },
    sureShot: {
        name: "Sure Shot",
        rankt: true,
        maxRank: 3,
        type: boss_defs.ability_types.range_attack,
        printable: true
    },
    speedOfABullet: {
        name: "Speed Of A Bullet",
        rankt: false,
        maxRank: 0,
        type: boss_defs.ability_types.range_attack,
        printable: true
    },
    tough: {
        name: "Tough",
        rankt: false,
        maxRank: 0,
        type: boss_defs.ability_types.defence,
        printable: true
    },
    relentless: {
        name: "Relentless",
        rankt: false,
        maxRank: 0,
        type: boss_defs.ability_types.mele_attack,
        printable: true
    },
    stealth: {
        name: "Stealth",
        rankt: false,
        maxRank: 0,
        type: boss_defs.ability_types.defence,
        printable: true
    },
    magicalDefence:{
        name: "Magical Defence",
        rankt: true,
        maxRank: 3,
        type: boss_defs.ability_types.defence,
        printable: true
    },
    skeletalLord:{
        name: "Skeletal Lord",
        rankt: false,
        maxRank: 0,
        type: boss_defs.ability_types.defence,
        printable: false
    },
    plusCbt: {
        name: "+1 Combat Dice",
        rankt: false,
        maxRank: 0,
        type: boss_defs.ability_types.mele_attack,
        printable: false
    },
    plusMove: {
        name: "+1 Move",
        rankt: false,
        maxRank: 0,
        type: boss_defs.ability_types.speed,
        printable: false
    },

    plusLongShooting: {
        name: "+1 Shooting Dice (Long)",
        rankt: true,
        maxRank: 3,
        type: boss_defs.ability_types.range_attack,
        printable: false
    },
    plusArm: {
        name: "+1 Armour",
        rankt: false,
        maxRank: 0,
        type: boss_defs.ability_types.defence,
        printable: false
    }
};

window.boss_defs.revenant = {
    stats: {
        hp: 5,
        sp: -1,
        cp: 0,
        dp: 1,
        rp: 0
    },
    lvl_options: [
        window.boss_defs.abilities.tough,
        window.boss_defs.abilities.stalwart,
        window.boss_defs.abilities.frenzy,
        window.boss_defs.abilities.relentless,
        window.boss_defs.abilities.magicalDefence,
        window.boss_defs.abilities.tough,
        window.boss_defs.abilities.frenzy,
        window.boss_defs.abilities.plusArm,
        window.boss_defs.abilities.stalwart,
        window.boss_defs.abilities.magicalDefence
    ],
    def_abilities: [
        window.boss_defs.abilities.skeletalLord
    ]
};

window.boss_defs.professions = [
    {
        name: "Barbarian",
        stats: {
            hp: 2,
            sp: 0,
            cp: 3,
            dp: 1,
            rp: 0
        },
        lvl_options: [
            [
                window.boss_defs.abilities.stalwart,
                window.boss_defs.abilities.relentless,
                window.boss_defs.abilities.plusMove,
                window.boss_defs.abilities.hammerTime,
                window.boss_defs.abilities.smash,
                null,
                window.boss_defs.abilities.plusMove,
                window.boss_defs.abilities.frenzy,
                window.boss_defs.abilities.sureShot,
                window.boss_defs.abilities.tough
            ],
            [
                window.boss_defs.abilities.hammerTime,
                window.boss_defs.abilities.frenzy,
                null,
                window.boss_defs.abilities.frenzy,
                window.boss_defs.abilities.stalwart,
                window.boss_defs.abilities.plusCbt,
                window.boss_defs.abilities.plusLongShooting,
                window.boss_defs.abilities.relentless,
                window.boss_defs.abilities.frenzy,
                window.boss_defs.abilities.plusLongShooting
            ]
        ]
    },
    {
        name: "Warrior",
        stats: {
            hp: 2,
            sp: -1,
            cp: 2,
            dp: 3,
            rp: 0
        },
        lvl_options: [
            [
                window.boss_defs.abilities.stalwart,
                window.boss_defs.abilities.hammerTime,
                null,
                window.boss_defs.abilities.speedOfABullet,
                window.boss_defs.abilities.smash,
                window.boss_defs.abilities.frenzy,
                window.boss_defs.abilities.sureShot,
                window.boss_defs.abilities.stalwart,
                window.boss_defs.abilities.plusLongShooting,
                window.boss_defs.abilities.speedOfABullet
            ],
            [
                null,
                window.boss_defs.abilities.sureShot,
                window.boss_defs.abilities.frenzy,
                window.boss_defs.abilities.plusCbt,
                window.boss_defs.abilities.plusLongShooting,
                window.boss_defs.abilities.plusMove,
                window.boss_defs.abilities.hammerTime,
                window.boss_defs.abilities.plusLongShooting,
                window.boss_defs.abilities.frenzy,
                window.boss_defs.abilities.stalwart
            ]
        ]
    },
    {
        name: "Ranger",
        stats: {
            hp: 1,
            sp: 0,
            cp: 1,
            dp: 1,
            rp: 3
        },
        lvl_options: [
            [
                window.boss_defs.abilities.stalwart,
                window.boss_defs.abilities.hammerTime,
                null,
                window.boss_defs.abilities.speedOfABullet,
                window.boss_defs.abilities.smash,
                window.boss_defs.abilities.frenzy,
                window.boss_defs.abilities.sureShot,
                window.boss_defs.abilities.stalwart,
                window.boss_defs.abilities.plusLongShooting,
                window.boss_defs.abilities.speedOfABullet
            ],
            [
                null,
                window.boss_defs.abilities.sureShot,
                window.boss_defs.abilities.frenzy,
                window.boss_defs.abilities.plusCbt,
                window.boss_defs.abilities.plusLongShooting,
                window.boss_defs.abilities.plusMove,
                window.boss_defs.abilities.hammerTime,
                window.boss_defs.abilities.plusLongShooting,
                window.boss_defs.abilities.frenzy,
                window.boss_defs.abilities.stalwart
            ]
        ]
    }
];

window.boss_defs.races = [
    {
        name: "Orc",
        stats: {
            hp: 2,
            sp: 5,
            cp: 2,
            dp: 1,
            rp: 0
        },
        lvl_options: [
            window.boss_defs.abilities.tough,
            window.boss_defs.abilities.frenzy,
            null,
            window.boss_defs.abilities.stalwart,
            window.boss_defs.abilities.frenzy,
            null,
            window.boss_defs.abilities.plusCbt,
            window.boss_defs.abilities.stalwart,
            window.boss_defs.abilities.frenzy,
            window.boss_defs.abilities.tough
        ],
        professions: ["Warrior", "Barbarian"]
    },
    {
        name: "Goblin",
        stats: {
            hp: 1,
            sp: 7,
            cp: 2,
            dp: 1,
            rp: 0
        },

        lvl_options: [
            null,
            window.boss_defs.abilities.stealth,
            window.boss_defs.abilities.plusMove,
            window.boss_defs.abilities.plusLongShooting,
            null,
            null,
            window.boss_defs.abilities.sureShot,
            window.boss_defs.abilities.stealth,
            window.boss_defs.abilities.plusLongShooting,
            null
        ],
        professions: ["Ranger", "Warrior", "Barbarian"]
    },
    {
        name: "Dwarf",
        stats: {
            hp: 2,
            sp: 6,
            cp: 2,
            dp: 1,
            rp: 0
        },

        lvl_options: [
            null,
            window.boss_defs.abilities.stalwart,
            null,
            window.boss_defs.abilities.tough,
            window.boss_defs.abilities.frenzy,
            window.boss_defs.abilities.plusCbt,
            window.boss_defs.abilities.speedOfABullet,
            window.boss_defs.abilities.stalwart,
            null,
            null
        ],
        professions: ["Warrior", "Barbarian"]
    },
    {
        name: "Human",
        stats: {
            hp: 1,
            sp: 7,
            cp: 2,
            dp: 1,
            rp: 0
        },

        lvl_options: [
            null,
            null,
            window.boss_defs.abilities.stalwart,
            null,
            null,
            window.boss_defs.abilities.sureShot,
            window.boss_defs.abilities.nimble,
            window.boss_defs.abilities.plusMove,
            window.boss_defs.abilities.frenzy,
            window.boss_defs.abilities.tough
        ],
        professions: ["Ranger", "Warrior", "Barbarian"]
    },
    {
        name: "Elf",
        stats: {
            hp: 1,
            sp: 8,
            cp: 2,
            dp: 1,
            rp: 0
        },

        lvl_options: [
            window.boss_defs.abilities.nimble,
            window.boss_defs.abilities.plusMove,
            window.boss_defs.abilities.sureShot,
            window.boss_defs.abilities.plusLongShooting,
            window.boss_defs.abilities.nimble,
            window.boss_defs.abilities.speedOfABullet,
            window.boss_defs.abilities.sureShot,
            window.boss_defs.abilities.plusMove,
            window.boss_defs.abilities.speedOfABullet,
            window.boss_defs.abilities.plusLongShooting
        ],
        professions: ["Ranger"]
    }
];
