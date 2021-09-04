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

window.bs = {
    setup: {
        level: 5,
        races: [],
        professions: [],
        undead: false,
        match: true
    },

    initPage: function () {
        bs.updateUI();

        document.getElementById('boss_setup_page-boss_level_range')
            .addEventListener('input', function (event) {
                bs.setup.level = Math.floor((event.target.value / 100) * 9) + 1;
                document.getElementById("boss_setup_page-boss_level").innerHTML = "Boss level:&nbsp;" + bs.setup.level;
            });

        boss_defs.races.forEach(function (race) {
            bs.setup.races.push(race.name);
        });

        boss_defs.professions.forEach(function (prof) {
            bs.setup.professions.push(prof.name);
        });
    },

    updateUI: function () {

        var finalElementString = "";

        boss_defs.races.forEach(function (race) {
            finalElementString += "<ons-list-item><div class='center'>" + race.name + "</div><div class='right'><ons-switch onChange=\"bs.onBossRaceChange(this, '" + race.name + "')\" checked></ons-switch></div></ons-list-item>";
        });

        var raceElement = document.querySelector("#boss_setup_page-boss_race_placeholder");
        raceElement.innerHTML = finalElementString;

        var finalElementString = "";
        boss_defs.professions.forEach(function (profession) {
            finalElementString += "<ons-list-item><div class='center'>" + profession.name + "</div><div class='right'><ons-switch onChange=\"bs.onBossProfessionChange(this, '" + profession.name + "')\" checked></ons-switch></div></ons-list-item>";
        });

        var professionElement = document.querySelector("#boss_setup_page-boss_profession_placeholder");
        professionElement.innerHTML = finalElementString;
    },

    onBossRaceChange: function (sw, raceName) {
        if (sw.checked) {
            bs.setup.races.push(raceName);
        } else {
            var index = bs.setup.races.indexOf(raceName);
            if (index > -1)
                bs.setup.races.splice(index, 1);
        }
    },

    onBossProfessionChange: function (sw, professionName) {
        if (sw.checked) {
            bs.setup.professions.push(professionName);
        } else {
            var index = bs.setup.professions.indexOf(professionName);
            if (index > -1)
                bs.setup.professions.splice(index, 1);
        }
    },

    onBossUndeadChange: function (sw) {
        bs.setup.undead = sw.checked;
    },

    onMatchRaceCahnged: function(sw){
        bs.setup.match = sw.checked;
    },

    onAcceptBossSetup: function () {
        if(bs.setup.races.length == 0){
            ons.notification.alert("Select at least one race!");
            return;
        }

        if(bs.setup.professions.length == 0){
            ons.notification.alert("Select at least one proffesion!");
            return;
        }

        bg.generateNew();

        document.getElementById("bossSubPageNavigator").pushPage("page.boss_display.html").then(function () {
            bs.updateBossDisplayPage();
        });
    },

    updateBossDisplayPage: function () {
        if (bg.activeBossModel.undead)
            document.querySelector("#boss_display_page-boss_race").innerHTML = "Undead " + bg.activeBossModel.profession.name + " " + bg.activeBossModel.race.name;
        else
            document.querySelector("#boss_display_page-boss_race").innerHTML = bg.activeBossModel.profession.name + " " + bg.activeBossModel.race.name;
        document.querySelector("#boss_display_page-boss_level").innerHTML = "Level " + bg.activeBossModel.level;

        var hearts = $("#boss_display_page-boss_health ons-icon");
        for (var i = 0; i < 5; i++) {
            var red = i >= bg.activeBossModel.stats.hp;
            if (red)
                $(hearts[i]).addClass("red-heart");
            else
                $(hearts[i]).removeClass("red-heart");
        }

        document.querySelector("#boss_display_page-boss_attack").innerHTML = bg.activeBossModel.stats.cp;
        document.querySelector("#boss_display_page-boss_range_attack").innerHTML = bg.activeBossModel.stats.rp;
        document.querySelector("#boss_display_page-boss_armour").innerHTML = bg.activeBossModel.stats.dp;
        document.querySelector("#boss_display_page-boss_speed").innerHTML = bg.activeBossModel.stats.sp;

        var abilitiesHtmlString = "";
        bg.activeBossModel.abilities.forEach(function (a) {
            if (!a.printable)
                return;

            if (a.rankt)
                abilitiesHtmlString += "<li>" + a.name + "(" + a.count + ")</li>";
            else
                abilitiesHtmlString += "<li>" + a.name + "</li>";
        });

        document.querySelector("#boss_display_page-boss_abilities").innerHTML = abilitiesHtmlString;
    },

    onCloseBossDisplayPage: function () {
        document.getElementById("bossSubPageNavigator").popPage();
    },
    

    onRefreshBoss: function () {
        bg.generateNew();
        bs.updateBossDisplayPage();
    }
};