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

window.bg = {
    activeBossModel :{

    },

    generateNew: function(){
        var boss_race = bg.getElementWithName(boss_defs.races, bg.getRandomElement(bs.setup.races));
        var boss_profession = bs.setup.match ?
            bg.getElementWithName(boss_defs.professions, bg.getRandomProfessionForRace(boss_race, bs.setup.professions)) :
            bg.getElementWithName(boss_defs.professions, bg.getRandomElement(bs.setup.professions));

        var boss = {
            level: bs.setup.level,
            race: boss_race,
            profession: boss_profession,
            stats: {
                hp: boss_race.stats.hp + boss_profession.stats.hp,
                sp: boss_race.stats.sp + boss_profession.stats.sp,
                cp: boss_race.stats.cp + boss_profession.stats.cp,
                dp: boss_race.stats.dp + boss_profession.stats.dp,
                rp: boss_race.stats.rp + boss_profession.stats.rp
            },
            undead: bs.setup.undead,
            lvl_options: boss_profession.lvl_options.concat([boss_race.lvl_options]),
            abilities: []
        };

        if(bs.setup.undead){
            boss.stats.hp += boss_defs.revenant.stats.hp;
            boss.stats.sp += boss_defs.revenant.stats.sp;
            boss.stats.cp += boss_defs.revenant.stats.cp;
            boss.stats.dp += boss_defs.revenant.stats.dp;
            boss.stats.rp += boss_defs.revenant.stats.rp;

            boss.lvl_options.push(boss_defs.revenant.lvl_options);

            boss.abilities = boss.abilities.concat(boss_defs.revenant.def_abilities);
        }

        if(boss.stats.hp > 5)
            boss.stats.hp = 5;

        bg.activeBossModel = boss;
        for(var i=1;i<=boss.level;i++)
            bg.bossLevelUp(i);
    },

    bossLevelUp: function(lvl){
        var lvl_options = bg.getLevelingOptions(lvl);
        var newAbility = bg.selectAbilityToLevelUp(lvl_options);
        bg.pushAbility(newAbility);
    },

    selectAbilityToLevelUp: function(set){
        if(set.length == 0)
            return null;

        var mele_attack_set = set.filter(function(e){
            return e.type === boss_defs.ability_types.mele_attack;
        });

        var range_attack_set = set.filter(function(e){
            return e.type === boss_defs.ability_types.range_attack;
        });

        var defence_set = set.filter(function(e){
            return e.type === boss_defs.ability_types.defence;
        });

        var else_set = set.filter(function(e){
            return e.type !== boss_defs.ability_types.mele_attack &&
                    e.type !== boss_defs.ability_types.defence &&
                    e.type !== boss_defs.ability_types.range_attack;
        });

        if(bg.activeBossModel.profession.name === "Barbarian")
        {
            if(mele_attack_set.length > 0)
                return bg.getRandomElement(mele_attack_set);
            else if(else_set.length > 0)
                return bg.getRandomElement(else_set);
            else
                return bg.getRandomElement(set); 
        }
        else if(bg.activeBossModel.profession.name === "Ranger")
        {
            if(range_attack_set.length > 0)
                return bg.getRandomElement(range_attack_set);
            else if(else_set.length > 0)
                return bg.getRandomElement(else_set);
            else
                return bg.getRandomElement(set); 
        }
        else if(bg.activeBossModel.profession.name === "Warrior")
        {
            if(defence_set.length > 0)
                return bg.getRandomElement(defence_set);
            else if(mele_attack_set.length > 0)
                return bg.getRandomElement(mele_attack_set);
            else if(else_set.length > 0)
                return bg.getRandomElement(else_set);
            else
                return bg.getRandomElement(set); 
        }

        console.log("waning !");
        return bg.getRandomElement(set);
    },
    
    getLevelingOptions: function(lvl){
        return bg.activeBossModel.lvl_options
            .map(function(r){return r[lvl-1];})
            .filter(function(e){return bg.isLevelingOptionAvaiable(e);});
    },

    isLevelingOptionAvaiable: function(i){
        if( i === null)
            return false;

        var existing = bg.activeBossModel.abilities.filter(function(a){
            return i.name === a.name;
        });
        
        if(existing.length === 0)
            return true;
        
        existing = existing[0];
        if(existing.count < existing.maxCount)
            return true;

        return false;
    },

    pushAbility: function(a){
        if(a == null)
            return;

        bg.applyAbility(a);

        var existing = bg.activeBossModel.abilities.filter(function(e){
            return e.name === a.name;
        });
        
        if(existing.length === 0){
            bg.activeBossModel.abilities.push({
                name: a.name,
                maxCount: a.rankt ? a.maxRank : 1,
                count: 1,
                printable: a.printable,
                rankt: a.rankt
            });
        }
        else
        {
            existing[0].count +=1 ;
        }
    },

    applyAbility: function(a){
        if(a === window.boss_defs.abilities.plusCbt){
            if(bg.activeBossModel.stats.cp < 6)
                bg.activeBossModel.stats.cp += 1;
        }
        else if(a === window.boss_defs.abilities.plusMove){
            bg.activeBossModel.stats.sp += 1;
        }
        else if(a === window.boss_defs.abilities.plusLongShooting){
            if(bg.activeBossModel.stats.rp >= 6)
                return;

            if(bg.activeBossModel.stats.rp == 0)
                bg.activeBossModel.stats.rp = 1;

            bg.activeBossModel.stats.rp += 1;
        }
    },
    getRandomProfessionForRace: function(race, set){
        var filter = race.professions.filter(function(p){
            return set.indexOf(p) != -1;
        });

        if(filter.length == 0)
            return bg.getRandomElement(set);

        return bg.getRandomElement(race.professions);
    
    },
    getRandomElement: function(set){
        if(set.length == 0)
            return null;

        return set[bg.getRandomInt(set.length)];
    },

    getRandomInt: function(max){
        return Math.floor(Math.random()*max);
    },

    getElementWithName: function(set, name){
        var subSet = set.filter(function (e){
            return e.name === name;
        });

        if(subSet.length == 0)
            return null;

        return subSet[0];
    }
};