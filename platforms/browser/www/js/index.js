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



window.gl = {
    laodView: function (i) {
        document.querySelector("#main_tabbar").setActiveTab(i);
    },
    
    showDialog: function (show) {
        if (show != null) {
            var toShow = document.querySelector(show);
            if (toShow != null)
                toShow.show();
        }
    },

    hideDialog: function (hide) {
        if (hide != null) {
            var toHide = document.querySelector(hide);
            if (toHide != null)
                toHide.hide();
        }
    },

    isStrInvalid: function (str) {
        return str.indexOf('<') != -1 ||
            str.indexOf('>') != -1 ||
            str.indexOf('&') != -1;
    }
};

validators = {
    intValidator: function (e) {
        function isNormalInteger(str) {
            var n = Math.floor(Number(str));
            return n !== Infinity && String(n) === str && n >= 0;
        }

        if (e.target.value == "")
            return;

        if (!isNormalInteger(e.target.value)) {
            e.target.value = e.target.getAttribute("defValue");
            ons.notification.alert('Given input was not a number!');
        }
    }
};

document.addEventListener('init', function (event) {
    if (event.target.id == 'minions_setup-page') {
        ms.refreshMinionsPage();
    }
    else if (event.target.id == 'deploy_page') {
        dd.prepareNewDeployement();
    }
    else if (event.target.id == 'depl_setup_page') {
        dsetup.initSetupPage();
    }
    else if (event.target.id == 'depl_setup_page') {
        dsetup.initSetupPage();
    }
    else if (event.target.id == 'boss_setup_page') {
        bs.initPage();
    }
    
    
}, false);

document.addEventListener('show', function (event) {
    if (event.target.id == 'depl_setup_page') {
        dsetup.updatePage();
    }
}, false);


ons.ready(function () {
    console.log("ready");
});
