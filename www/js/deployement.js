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

window.dd = {
    depList: [
        { id: 1, minion: "", trap: false },
        { id: 2, minion: "", trap: false },
        { id: 3, minion: "", trap: false },
        { id: 4, minion: "", trap: false },
        { id: 5, minion: "", trap: false },
        { id: 6, minion: "", trap: false }
    ],

    prepareNewDeployement: function () {
        dd.activeSegment = ddef.getSegment(dps.segmentId, dps.exit);
        if (dd.activeSegment == null) {
            
            if(gl.isStrInvalid(dps.segmentId))
                ons.notification.alert("Invalid segment card id.");
            else
                ons.notification.alert("Missing segment: '" + dps.segmentId + "'");
                
            dd.hideDeployementView();
            return false;
        }

        dd.loadMinionsSet();
        dd.prepareDeployement(dd.drawDeployementSet());
        dd.refreshDeployementPage();

        dps.setupChanged = false;

        return true;
    },

    hideDeployementView: function(){
        document.getElementById("deplSubNavigator").popPage().then(function(){
            dsetup.updatePage();
        });
        
    },

    redeploy: function () {
        dd.prepareDeployement(dd.drawDeployementSet());
        dd.refreshDeployementPage();
    },

    removeMinionAndRedeploy: function (name) {
        dd.removeMinion(name);
        dd.redeploy();
    },

    removeMinion: function (name) {
        for (var i = 0; i < dd.availableMinions.length; i++) {
            if (dd.availableMinions[i].name == name) {
                dd.availableMinions.splice(i, 1);
                return;
            }
        }
    },

    loadMinionsSet: function () {
        allMinions = ms.loadMinions().filter(function (s) {
            return s.type == dps.minionsType;
        });

        allMinions = allMinions[0].minions;
        dd.availableMinions = [];

        allMinions.forEach(function (m) {
            if (dps.largeModels == "map") {
                if (m.large && !dd.activeSegment.large)
                    return;
            }
            else if (dps.largeModels == "disallow" && m.large) {
                return;
            }

            if (m.level > dps.maxMinionLevel)
                return;

            for (var i = 0; i < m.count; i++)
                dd.availableMinions.push(m);
        });

        dd.sortSet(dd.availableMinions);
    },

    prepareDeployement: function (set) {
        dd.depList = dd.activeSegment.sp.map(function (e) {
            return {
                id: e.id,
                minion: "",
                deletable: false,
                trap: false,
                large: e.large,
                range: e.range
            };
        });

        var largeSet = set.filter(function (e) { return e.large; });
        var rangeSet = set.filter(function (e) { return !e.large && e.ranger; });
        var restSet = set.filter(function (e) { return !e.large && !e.ranger; });

        var largeDepl = dd.depList.filter(function (d) { return d.large; });
        var nonLargeDepl = dd.depList.filter(function (d) { return !d.large; });

        //try deploy large models first
        largeSet.forEach(function (d) {
            if (largeDepl.length > 0) {
                var sp = dd.rndElement(largeDepl);
                dd.removeFromSet(largeDepl, sp);
            } else if (nonLargeDepl.length > 0) {
                var sp = dd.rndElement(nonLargeDepl);
                dd.removeFromSet(nonLargeDepl, sp);
            }

            sp.minion = d.name;
            sp.deletable = typeof d.deletable !== 'undefined' ? d.deletable : true;
        });

        var rangeDepl = dd.depList.filter(function (d) { return d.range && d.minion == ""; });
        var nonRangeDepl = dd.depList.filter(function (d) { return !d.range && d.minion == ""; });

        //try deploy range minions
        rangeSet.forEach(function (d) {
            if (rangeDepl.length > 0) {
                var sp = dd.rndElement(rangeDepl);
                dd.removeFromSet(rangeDepl, sp);
            } else if (nonRangeDepl.length > 0) {
                var sp = dd.rndElement(nonRangeDepl);
                dd.removeFromSet(nonRangeDepl, sp);
            }

            sp.minion = d.name;
            sp.deletable = typeof d.deletable !== 'undefined' ? d.deletable : true;
        });

        var restDepl = dd.depList.filter(function (d) { return d.minion == ""; });

        restSet.forEach(function (d) {
            if (restDepl.length > 0) {
                var sp = dd.rndElement(restDepl);
                dd.removeFromSet(restDepl, sp);

                sp.minion = d.name;
                sp.deletable = typeof d.deletable !== 'undefined' ? d.deletable : true;
            }
        });

        if (dps.traps > 0)
            dd.drawTraps();
    },

    drawTraps: function () {
        var trapsPriority = [];
        var trapsRest = [];

        for (var i = 0; i < dd.depList.length; i++) {
            var spDef = dd.activeSegment.sp[i];
            var spDep = dd.depList[i];

            if(spDef.trap == "!") {
                continue;
            }

            if ((spDef.trap == "X") ||
                (dps.exit == "west" && (spDef.trap == "<" || spDef.trap == "\\" || spDef.trap == "-")) ||
                (dps.exit == "north" && (spDef.trap == "^" || spDef.trap == "\\" || spDef.trap == "/")) ||
                (dps.exit == "east" && (spDef.trap == ">" || spDef.trap == "/" || spDef.trap == "-"))) {
                trapsPriority.push(spDep);
            } else {
                trapsRest.push(spDep);
            }
        }

        for (var i = 0; i < dps.traps; i++) {
            if (trapsPriority.length > 0) {
                var sp = dd.rndElement(trapsPriority);
                sp.trap = true;
                dd.removeFromSet(trapsPriority, sp);
            } else if (trapsRest.length > 0) {
                var sp = dd.rndElement(trapsRest);
                sp.trap = true;
                dd.removeFromSet(trapsRest, sp);
            } else break;
        }
    },

    drawDeployementSet: function () {
        var workingSet = dd.availableMinions.slice();
        var nominations = [];
        var minionsCount = Math.min(dd.activeSegment.sp.length, dps.minionsCout);

        (function(){
            for (var i = 0; i < minionsCount; i++) {
                var draw = dd.drawFirst(workingSet)
                if (draw == null)
                    return;
    
                if (!dd.checkTotalLevel(nominations, draw.level, dps.totalLevel))
                    return;
    
                nominations.push(draw);
            }
        })();

        while (dd.levelUpSet(nominations, workingSet)) {
            dd.sortSetDesc(nominations);
        }

        if(dps.boss){
            nominations.push({
                name: "BOSS",
                ranger: false,
                large: true,
                deletable: false
            });
        }

        return nominations;
    },


    drawAllForLevel: function (set, level) {
        return set.filter(function (e) {
            return e.level == level;
        });
    },

    drawSignleForLevel: function (set, level) {
        var allForLevel = dd.drawAllForLevel(set, level);
        var draw = dd.drawSingle(allForLevel);
        if (draw != null)
            dd.removeFromSet(set, draw);
        return draw;
    },

    drawFirst: function (set) {
        if (set.length > 0) {
            set[0].level
            return dd.drawSignleForLevel(set, set[0].level);
            // var element = set[0];
            // dd.removeFromSet(set, element);
            // return element;
        }

        return null;
    },

    drawSingle: function (set) {
        // if (dps.drawingType == "full_random")
        //     return dd.drawSingleFullRandom(set);
        // else
        return dd.drawSingleByType(set);
    },

    drawSingleFullRandom: function (set) {
        var element = dd.rndElement(set);
        return element;
    },

    drawSingleByType: function (set) {
        var single = set.filter(function (value, index, self) { 
            return self.indexOf(value) === index;
        });

        var element = dd.rndElement(single);
        return element;
    },

    insertMinionBackToSet: function (minion, set) {
        set.push(minion);
        dd.sortSet(set);
    },

    levelUpSet: function (set, workingSet) {
        if (Math.random() > 0.2) {
            if (dd.levelUpSetPosition(set, dd.rnd(set.length), workingSet))
                return true;
        }

        for (var i = 0; i < set.length; i++) {
            if (dd.levelUpSetPosition(set, i, workingSet))
                return true;
        }

        return false;
    },

    levelUpSetPosition: function (set, pos, workingSet) {
        if(set.length == 0)
            return false;

        var lvl = dd.getNextLevel(workingSet, set[pos].level);
        if (lvl == set[pos].level)
            return false;

        for (var i = 0; i < 4; i++) {
            var minion = dd.drawSignleForLevel(workingSet, lvl);
            if (minion == null)
                return false;

            var lvlDif = minion.level - set[pos].level;

            if (!dd.checkTotalLevel(set, lvlDif, dps.totalLevel)) {
                dd.insertMinionBackToSet(minion, workingSet);
            }
            else {
                dd.insertMinionBackToSet(set[pos], workingSet);
                set[pos] = minion;
                return true;
            }
        }

        return false;
    },

    refreshDeployementPage: function () {
        document.querySelector("#deploy_page-dungeon_svg_placeholder").innerHTML = "<div id='deploy_page-drawing'></div>";

        dsvg.drawSegment(dd.activeSegment);

        var depLisStr = "<table class='deployement_table'><tr><th>NUM</th><th>MINION</th><th>TRAP</th></tr>";

        dd.depList.forEach(function (e) {
            depLisStr += "<tr><td>" + e.id + "</td><td>" + e.minion;
            
            if (e.deletable)
                depLisStr += "&nbsp;&nbsp;<ons-icon icon='fa-ban' class='ban-icon' onclick=\"dd.removeMinionAndRedeploy('" + e.minion + "')\"> </ons-icon>"

            depLisStr += "</td><td>";

            if (e.trap)
                depLisStr += "<ons-icon icon='fa-exclamation-triangle' class='trap-icon'> </ons-icon>";

            depLisStr += "</td></tr>";
        });

        depLisStr += "</table>";
        document.querySelector("#deploy_page-deploy_list").innerHTML = depLisStr;
    },

    rnd: function (max) {
        return Math.floor(Math.random() * max);
    },

    rndElement: function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    getNextLevel: function (set, lvl) {
        var nextLvl = -1;

        set.filter(function (e) {
            return e.level > lvl;
        }).forEach(function (e) {
            if (nextLvl == -1)
                nextLvl = e.level
            else
                nextLvl = Math.min(nextLvl, e.level);
        });

        if (nextLvl == -1)
            return lvl;

        return nextLvl;
    },

    removeFromSet: function (set, element) {
        for (var i = 0; i < set.length; i++) {
            if (set[i] == element) {
                set.splice(i, 1);
                return;
            }
        }
    },

    checkTotalLevel: function (set, minionLvl, totalLvl) {
        return (dd.getTotalLevel(set) + minionLvl) <= totalLvl;
    },

    getTotalLevel: function (set) {
        if (set.length == 0)
            return 0;

        return set
            .map(function (e) {
                return e.level;
            }).reduce(function (a, b) {
                return a + b;
            });
    },

    sortSet: function (set) {
        set.sort(function (a, b) {
            return a.level - b.level;
        });
    },

    sortSetDesc: function (set) {
        set.sort(function (a, b) {
            return b.level - a.level;
        });
    }
}