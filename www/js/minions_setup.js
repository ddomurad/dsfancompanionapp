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

const minions_setup_store_name = "minions_store";
const defaul_minions_list = [
    {
        type: "UNDEAD",
        minions: [
            {
                name: "Pile of Bones",
                ranger: false,
                large: false,
                level: 0.5,
                count: 10,
            },
            {
                name: "Skeleton Warrior",
                ranger: false,
                large: false,
                level: 1,
                count: 4
            },
            {
                name: "Skeleton Archer",
                ranger: true,
                large: false,
                level: 2,
                count: 2
            },
            {
                name: "Revenant",
                ranger: false,
                large: false,
                level: 3,
                count: 2
            },
            {
                name: "Zombie",
                ranger: false,
                large: false,
                level: 1,
                count: 4
            },
            {
                name: "Armoured Zombie",
                ranger: false,
                large: false,
                level: 2,
                count: 2
            },
            {
                name: "Zombie Troll",
                ranger: false,
                large: true,
                level: 9,
                count: 2
            },
            {
                name: "Wraith",
                ranger: false,
                large: true,
                level: 2,
                count: 2
            }
        ]
    }
];

var tmp_minions_list = null;


window.ms = {

    loadMinions: function () {
        if (tmp_minions_list != null)
            return tmp_minions_list;

        var m = window.localStorage.getItem(minions_setup_store_name);

        if (m == null) {
            ms.saveMinions(defaul_minions_list);
            return tmp_minions_list;
        }

        try {
            tmp_minions_list = JSON.parse(m);
            return tmp_minions_list;
        }
        catch (err) {
            console.log(err);
            ms.saveMinions(defaul_minions_list);
            return defaul_minions_list;
        }
    },

    saveMinions: function (minions) {
        tmp_minions_list = minions;
        window.localStorage.setItem(minions_setup_store_name, JSON.stringify(minions));
    },

    refreshMinionsPage: function () {
        var minions = ms.loadMinions();

        minionsListGenerator.generateList(
            document.querySelector('#minions_setup-list'),
            minions);

        minionsListGenerator.getTypeSelectorOptions(
            document.querySelector("#minions_setup-add_minion_dialog-select-type-placeholder"),
            minions);
    },

    showMinionsSetupActions: function () {
        document.querySelector("#minions_setup-popover").show(
            document.querySelector('#minions_setup-add_btn'));
    },


    showAddMinionsTypeDialog: function () {
        ons.notification.prompt({
            title: "New Minions Race",
            message: "Enter race name:",
            cancelable: true
        }).then(function (input) {

            if (!input) return;
            input = input.toUpperCase();

            if (!input || input.length <= 0 || gl.isStrInvalid(input)) {
                ons.notification.alert('Invalid race name! The name SHOULD be not empty NOR contain any of the folowing symblos: <,>,$');
                return;
            }

            var minionsList = ms.loadMinions();
            var existingType = minionsList.filter(function (set) {
                return set.type == input;
            });

            if (existingType.length != 0) {
                ons.notification.alert("Minions race already exists !");
                return;
            }

            minionsList.push({
                type: input,
                minions: []
            });

            ms.saveMinions(minionsList);
            ms.refreshMinionsPage();
        });
    },

    showRenameMinionsTypeDialog: function (oldType) {
        ons.notification.prompt({
            title: "Rename " + oldType + " Race",
            message: "Enter new name:",
            cancelable: true
        }).then(function (input) {
            if (!input) return;
            input = input.toUpperCase();

            if (!input || input.length <= 0 || gl.isStrInvalid(input)) {
                ons.notification.alert('Invalid race name ! The name SHOULD be not empty NOR contain any of the folowing symblos: <,>,$');
                return;
            }

            var minionsList = ms.loadMinions();

            var oldTypeObj = minionsList.filter(function (set) {
                return set.type == oldType;
            });

            if (oldTypeObj.length == 0)
                return;

            oldTypeObj = oldTypeObj[0];
            var existingTypeObj = minionsList.filter(function (set) {
                return set.type == input;
            });

            if (existingTypeObj.length != 0) {
                ons.notification.alert("Minions race already exists !");
                return;
            }

            oldTypeObj.type = input;

            ms.saveMinions(minionsList);
            ms.refreshMinionsPage();
        });
    },

    showAddMinionDialog: function () {
        document.querySelector("#minions_setup-add_minion_dialog-hidden_edit_type").value = null;
        document.querySelector("#minions_setup-add_minion_dialog-hidden_edit_name").value = null;
        document.querySelector("#minions_setup-add_minion_dialog").show();
    },

    addMinionFromDialog: function () {
        var hiddenType = document.querySelector("#minions_setup-add_minion_dialog-hidden_edit_type").value;
        var hiddenName = document.querySelector("#minions_setup-add_minion_dialog-hidden_edit_name").value;

        document.querySelector("#minions_setup-add_minion_dialog-hidden_edit_type").value = null;
        document.querySelector("#minions_setup-add_minion_dialog-hidden_edit_name").value = null;

        var minionType = document.querySelector("#minions_setup-add_minion_dialog-select_type").value;
        var minionName = document.querySelector("#minions_setup-add_minion_dialog-minion_name").value;
        var minionRangeAttack = document.querySelector("#minions_setup-add_minion_dialog-range_attack").checked;
        var minionLargeModel = document.querySelector("#minions_setup-add_minion_dialog-large_model").checked;
        var minionLevel = document.querySelector("#minions_setup-add_minion_dialog-minion_level").value;
        var minionCount = document.querySelector("#minions_setup-add_minion_dialog-models_count").value;

        if (hiddenName && hiddenType)
            ms.editMinion(hiddenType, hiddenName, minionType, minionName, minionRangeAttack, minionLargeModel, minionLevel, minionCount);
        else
            ms.addMinion(minionType, minionName, minionRangeAttack, minionLargeModel, minionLevel, minionCount);
    },

    setupAnsShowAddMinionDialogFromMinion: function (type, name) {
        var minionsList = ms.loadMinions();
        var minion = ms.getMinion(type, name, minionsList);

        if (minion == null) {
            ons.notification.alert("Internal error !");
            return;
        }

        document.querySelector("#minions_setup-add_minion_dialog-hidden_edit_type").value = type;
        document.querySelector("#minions_setup-add_minion_dialog-hidden_edit_name").value = minion.name;

        document.querySelector("#minions_setup-add_minion_dialog-select_type").value = type;
        document.querySelector("#minions_setup-add_minion_dialog-minion_name").value = minion.name;
        document.querySelector("#minions_setup-add_minion_dialog-range_attack").checked = minion.ranger;
        document.querySelector("#minions_setup-add_minion_dialog-large_model").checked = minion.large;
        document.querySelector("#minions_setup-add_minion_dialog-minion_level").value = minion.level;
        document.querySelector("#minions_setup-add_minion_dialog-models_count").value = minion.count;

        document.querySelector("#minions_setup-add_minion_dialog").show();
    },

    addMinion: function (type, name, rangeAttack, largeModel, level, count) {
        var numLvl = parseInt(level);
        var numCnt = parseInt(count);

        if (!type) {
            ons.notification.alert('Invalid minion definition !');
            return;
        }

        if (!(numLvl >= 0) || numLvl > 15) {
            ons.notification.alert('Invalid level! Minion level SHOULD be a numeric value in range 0-15.');
            return;
        }


        if (!(numCnt >= 0) || numCnt > 10) {
            ons.notification.alert('Invalid models count! Minion model count SHOULD be a numeric value in range 0-10.');
            return;
        }

        if (!name || name.length <= 0 || gl.isStrInvalid(name)) {
            ons.notification.alert('Invalid name! Minions name SHOULD be not empty NOR contain any of the folowing symblos: <,>,&');
            return;
        }

        var minionsSets = ms.loadMinions();
        var set = minionsSets.filter(function (set) {
            return set.type == type;
        });

        if (set.length < 1) {
            ons.notification.alert('Missing minion race!');
            return;
        }

        set = set[0];

        existingMinion = set.minions.filter(function (m) {
            return m.name == name;
        });

        if (existingMinion.length > 0) {
            ons.notification.alert('Minion already exists!');
            return;
        }

        set.minions.push({
            name: name,
            ranger: rangeAttack,
            large: largeModel,
            level: numLvl,
            count: numCnt
        });

        ms.saveMinions(minionsSets);
        ms.refreshMinionsPage();
    },

    editMinion: function (oldType, oldName, type, name, rangeAttack, largeModel, level, count) {
        var numLvl = parseInt(level);
        var numCnt = parseInt(count);

        if (!type) {
            ons.notification.alert('Invalid minion definition!');
            return;
        }

        if (!(numLvl >= 0) || numLvl > 15) {
            ons.notification.alert('Invalid level! Minion level SHOULD be a numeric value in range 0-15.');
            return;
        }


        if (!(numCnt >= 0) || numCnt > 10) {
            ons.notification.alert('Invalid models count! Minion model count SHOULD be a numeric value in range 0-10.');
            return;
        }

        if (!name || name.length <= 0 || gl.isStrInvalid(name)) {
            ons.notification.alert('Invalid name! Minion name SHOULD NOT be empty NOR contain any of the following symbols: <,>,&');
            return;
        }

        var minionsSets = ms.loadMinions();
        var oldMinion = ms.getMinion(oldType, oldName, minionsSets);
        if (oldMinion == null) {
            ons.notification.alert("Internal error!");
            return;
        }

        if (oldType != type || oldName != name) {
            var existingMinion = ms.getMinion(type, name, minionsSets);
            if (existingMinion != null) {
                ons.notification.alert("Minion " + type + " - " + name + " already exists.");
                return;
            }
        }

        oldMinion.name = name;
        oldMinion.ranger = rangeAttack;
        oldMinion.large = largeModel;
        oldMinion.level = numLvl;
        oldMinion.count = numCnt;

        if (oldType != type) {
            ms.removeMinion(oldType, oldName, minionsSets);
            var set = minionsSets.filter(function (s) { return s.type == type; });
            if (set.length <= 0) {
                ons.notification.alert("Missing minion race!");
                return;
            }

            set[0].minions.push(oldMinion);
        }

        ms.saveMinions(minionsSets);
        ms.refreshMinionsPage();
    },

    deleteMinion: function (type, name) {
        var minionsSets = ms.loadMinions();

        ons.notification.confirm({
            message: "Remove " + type + " - " + name + " minion? Are you sure?",
            callback: function (r) {
                if (r == 0)
                    return;

                ms.removeMinion(type, name, minionsSets);
                ms.saveMinions(minionsSets);
                ms.refreshMinionsPage();
            }
        });
    },

    deleteMinionType: function (type) {
        ons.notification.confirm({
            message: "Remove all " + type + " minions? Are you sure?",
            callback: function (r) {
                if (r == 0)
                    return;

                var minionsSets = ms.loadMinions();
                var newSet = minionsSets.filter(function (minionsSet) {
                    return minionsSet.type != type;
                });

                ms.saveMinions(newSet);
                ms.refreshMinionsPage();
            }
        });
    },

    showMinionEditActions: function (type, name) {
        ons.openActionSheet({
            title: type + " - " + name,
            cancelable: true,
            buttons: [
                {
                    label: 'Edit',
                    modifier: 'destructive',
                    icon: 'fa-edit'
                },
                {
                    label: 'Delete',
                    modifier: 'destructive',
                    icon: 'fa-trash'
                },
                {
                    label: 'Cancel',
                    icon: 'fa-ban'
                }
            ]
        }).then(function (index) {
            if (index == 0) {
                ms.setupAnsShowAddMinionDialogFromMinion(type, name);
            }
            else if (index == 1) {
                ms.deleteMinion(type, name);
            }
        });
    },

    showMinionTypeEditActions: function (type) {
        ons.openActionSheet({
            title: type,
            cancelable: true,
            buttons: [
                {
                    label: 'Rename',
                    modifier: 'destructive',
                    icon: 'fa-edit'
                },
                {
                    label: 'Delete',
                    modifier: 'destructive',
                    icon: 'fa-trash'
                },
                {
                    label: 'Cancel',
                    icon: 'fa-ban'
                }
            ]
        }).then(function (index) {
            if (index == 0) {
                ms.showRenameMinionsTypeDialog(type);
            }
            else if (index == 1) {
                ms.deleteMinionType(type);
            }
        });
    },
    getMinion: function (type, name, minionList) {
        var set = minionList
            .filter(function (s) { return s.type == type })
            .map(function (set) { return set.minions; })
            .reduce(function (m) { return m; })
            .filter(function (m) { return m.name == name; });

        if (set.length == 0)
            return null;

        return set[0];
    },

    removeMinion: function (type, name, minionsSets) {

        var set = minionsSets.filter(function (minionsSet) {
            return minionsSet.type == type;
        });

        if (set.length < 1)
            return;

        set = set[0];
        set.minions = set.minions.filter(function (minion) {
            return minion.name != name;
        });
    }
};

minionsListGenerator = {
    generateList: function (rootElement, model) {
        const getListStart = function () {
            return "<ons-list modifier='inset' class='minions_set_list'>";
        };

        const getListEnd = function () {
            return "</ons-list>";
        }

        const getListTile = function (type) {
            return "<ons-list-title>" + type + " <ons-icon icon='fa-edit' style='margin-left: 5px' onClick=\"ms.showMinionTypeEditActions('" + type + "')\"></ons-list-title>";
        };

        const getListItem = function (minionType, minionName, isRanger, isLarge, count, level) {
            return "<ons-list-item modifier='longdivider'> \
            <div class='left'><ons-icon icon='fa-edit' class='list-item__icon minion_edit_icon' onClick=\"ms.showMinionEditActions('"+ minionType + "','" + minionName + "')\"></ons-icon></div> \
            <div class='center'>" + minionName + "</div><div class='right'><small class='realy-small'>"

                + (isRanger
                    ? "[<ons-icon icon='fa-bullseye' class='list-item__icon ranger_icon'></ons-icon>] "
                    : " ")

                + (isLarge
                    ? "[<ons-icon icon='fa-th-large' class='list-item__icon ranger_icon'></ons-icon>] "
                    : " ")

                + "[" + level + "&nbsp;lvl]&nbsp[x" + count + "]</small></div>"
                + "</ons-list-item>";
        };

        listData = "";

        model.forEach(function (minonsType) {
            listData += getListStart();
            listData += getListTile(minonsType.type);

            minonsType.minions.forEach(function (minion) {
                listData += getListItem(minonsType.type, minion.name, minion.ranger, minion.large, minion.count, minion.level);
            });

            listData += getListEnd();
        });

        rootElement.innerHTML = listData;
    },

    getTypeSelectorOptions: function (rootElement, model) {
        listData = "<ons-select id='minions_setup-add_minion_dialog-select_type'>";

        model.forEach(function (minonsType) {
            listData += "<option value='" + minonsType.type + "'>" + minonsType.type + "</option>";
        });

        listData += "</ons-select>";
        rootElement.innerHTML = listData;
    }
};
