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

window.dps = {
    minionsType: "UNDEAD",
    segmentId: "A2",
    exit: "east",
    minionsCout: 4,
    totalLevel: 6,
    maxMinionLevel: 15,
    traps: 0,
    boss: false,
    largeModels: ""
};


window.dsetup = {
    tmp: {
        last_minions_type: "__random"
    },

    initSetupPage: function () {
        document.getElementById('depl_setup_page-dungeon_level_range')
            .addEventListener('input', function (event) {
                dps.totalLevel = Math.floor((event.target.value / 100) * 19) + 1;
                document.getElementById("depl_setup_page-dungeon_level").innerHTML = "Dungeon level:&nbsp;" + dps.totalLevel + "&nbsp;";
            });

        document.getElementById('depl_setup_page-minions_count_range')
            .addEventListener('input', function (event) {
                dps.minionsCout = Math.floor((event.target.value / 100) * 5) + 1;
                document.getElementById("depl_setup_page-minions_count").innerHTML = " Minions count:&nbsp;" + dps.minionsCout + "&nbsp;";
            });

        document.getElementById('depl_setup_page-max_level_range')
            .addEventListener('input', function (event) {
                dps.maxMinionLevel = Math.floor((event.target.value / 100) * 14) + 1;
                document.getElementById("depl_setup_page-max_level").innerHTML = "Minion&nbsp;max level:&nbsp;" + dps.maxMinionLevel + "&nbsp;";
            });

        document.getElementById('depl_setup_page-traps').addEventListener('change', function (event) {
            dps.traps = event.target.checked ? 3 : 0;
        });

        document.getElementById('depl_setup_page-boss').addEventListener('change', function (event) {
            dps.boss = event.target.checked;
        });
    },
    updatePage: function () {
        var minionsTypeSelectorPlaceholder = document.querySelector("#depl_setup_page-minions_type_selector-placeholder");
        var allTypes = ms.loadMinions().map(function (t) { return t.type; });

        var minionsTypeSelectorHtml = "<ons-select id='depl_setup_page-minions_type_selector'>";

        minionsTypeSelectorHtml += "<option value='__random'>RANDOM</option>";

        allTypes.forEach(function (e) {
            minionsTypeSelectorHtml += "<option value='" + e + "'>" + e + "</option>";
        });

        minionsTypeSelectorHtml += "</ons-select>";

        minionsTypeSelectorPlaceholder.innerHTML = minionsTypeSelectorHtml;
        document.querySelector("#depl_setup_page-minions_type_selector").value = dsetup.tmp.last_minions_type;
    },

    storeChanges: function () {
        var minionsType = document.querySelector("#depl_setup_page-minions_type_selector").value;
        dsetup.tmp.last_minions_type = minionsType;

        if (minionsType == "__random") {
            var allTypes = ms.loadMinions().map(function (t) { return t.type; });
            minionsType = allTypes[Math.floor(Math.random() * allTypes.length)];
        }

        if (dps.minionsType != minionsType) {
            dps.minionsType = minionsType;
        }

        var exitDir = document.querySelector("#depl_setup_page-exit_direction").value;

        if (dps.exit != exitDir) {
            dps.exit = exitDir;
        }

        var newLargeModelsValue = document.querySelector("#depl_setup_page-large_models").value;
        var newSegmentId = document.querySelector("#depl_setup_page-segment_id").value;

        if (dps.largeModels != newLargeModelsValue) {
            dps.largeModels = newLargeModelsValue;
        }

        newSegmentId = newSegmentId.toUpperCase()
        if (dps.segmentId != newSegmentId) {
            dps.segmentId = newSegmentId;
        }
    },

    accetDeployement: function () {
        dsetup.storeChanges();
        
        if (!ddef.checkSegment(dps.segmentId)) {
            
            if(gl.isStrInvalid(dps.segmentId))
                ons.notification.alert("Invalid segment card id.");
            else
                ons.notification.alert("Missing segment: '" + dps.segmentId + "'");
                
            return;
        }

        document.getElementById("deplSubNavigator").pushPage("page.deployement.html").then(function(){
            dd.prepareNewDeployement();
        });
    }
}