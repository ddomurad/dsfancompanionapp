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

window.dsvg = {
    drawSegment: function (map) {
        drawDraingle = function (draw, scale, pos, rot) {
            return draw.polygon([scale * .1, scale * .5, scale * .9, scale * .1, scale * .9, scale * .9])
                .move(pos[0] * scale + scale * .1, pos[1] * scale + scale * .1)
                .transform({ rotation: rot });
        }

        var page = document.querySelector("#deploy_page");
        var pageSize = [page.offsetWidth, page.offsetHeight * 0.6];
        var draw = SVG('deploy_page-drawing').size(pageSize[0], pageSize[1])
        var dungeonSymbol = draw.symbol();


        var fullscale = Math.min(pageSize[0] / map.size[0], pageSize[1] / map.size[1]);
        var scale = fullscale;
        var borderSize = scale * 0.05;

        //console.log("map size: " + map.size);
        //console.log("scale: " + scale);

        for (var x = 0; x < map.size[0]; x++) {
            for (var y = 0; y < map.size[1]; y++) {
                var i = x + y * map.size[0];
                var t = map.map[i];

                if (t == ' ')
                    continue;

                var fill = "#fff";
                if (t == "#")
                    var fill = "#f00";

                dungeonSymbol.rect(scale, scale)
                    .move(x * scale, y * scale)
                    .attr({ fill: fill, stroke: "#000", "stroke-width": borderSize + "px" })
            }
        }

        map.sp.forEach(function (sp) {
            dungeonSymbol.circle(scale * .9).move(sp.pos[0] * scale + scale * .05, sp.pos[1] * scale + scale * .05)
                .attr({ fill: "#f00", stroke: "#000", "stroke-width": borderSize + "px" });

            dungeonSymbol.text('' + sp.id).font({
                family: 'Helvetica',
                size: scale / 2,
                anchor: 'middle'
            }).move(sp.pos[0] * scale + scale * .5, sp.pos[1] * scale + scale * .25);
        });

        map.exit.forEach(function (ep) {
            var deg = map.exitDir == "west" ? 0 : (map.exitDir == "east" ? 180 : 90);
            drawDraingle(dungeonSymbol, scale, ep, deg).attr({ fill: "#0f0", stroke: "#000", "stroke-width": borderSize + "px" });
        });

        var dungeonMove = [(pageSize[0] - map.size[0] * scale) / 2, (pageSize[1] - map.size[1] * scale) / 2]
        draw.use(dungeonSymbol).move(dungeonMove[0], dungeonMove[1]);
    }
};