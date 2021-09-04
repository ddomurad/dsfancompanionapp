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


const dungeonDef = [
    {
        "exits": {
            "east": [[5, 3], [5, 4]],
            "north": [[3, 0], [4, 0]],
            "west": [[0, 4], [0, 5]]
        },
        "id": "A1",
        "large": false,
        "map": "   X1    XX  2XXX  X3 X4XX  X56XXXX   XXX ",
        "size": [6, 7],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": ">" },
            { "id": 2, "large": false, "range": true, "trap": "X" },
            { "id": 3, "large": false, "range": false, "trap": "X" },
            { "id": 4, "large": false, "range": false, "trap": "X" },
            { "id": 5, "large": false, "range": false, "trap": "X" },
            { "id": 6, "large": true, "range": false, "trap": "X" }
        ]
    },
    {
        "exits": {
            "east": [[5, 3], [5, 4]],
            "north": [[3, 0], [4, 0]],
            "west": [[0, 4], [0, 5]]
        },
        "id": "A2",
        "large": false,
        "map": "   X1    #X  2XXX  X3 X4XX  X56XX#X   XXX ",
        "size": [6, 7],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": ">" },
            { "id": 2, "large": false, "range": true, "trap": "X" },
            { "id": 3, "large": false, "range": false, "trap": "X" },
            { "id": 4, "large": false, "range": false, "trap": "X" },
            { "id": 5, "large": false, "range": false, "trap": "X" },
            { "id": 6, "large": true, "range": false, "trap": "X" }
        ]
    },
    {
        "exits": {
            "east": [[5, 0], [5, 1]],
            "north": [[0, 0], [1, 0], [4, 0], [5, 0]],
            "west": [[0, 0], [0, 1], [0, 4], [0, 5]]
        },
        "id": "A3",
        "large": false,
        "map": "X1  2X3XXXX4  XX    XX  X5XX  X6XX    XX  ",
        "size": [6, 7],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "<" },
            { "id": 2, "large": false, "range": true, "trap": ">" },
            { "id": 3, "large": false, "range": true, "trap": "^" },
            { "id": 4, "large": false, "range": true, "trap": "^" },
            { "id": 5, "large": false, "range": false, "trap": "<" },
            { "id": 6, "large": false, "range": false, "trap": "X" }
        ]
    },
    {
        "exits": {
            "east": [[5, 0], [5, 1]],
            "north": [[0, 0], [1, 0], [4, 0], [5, 0]],
            "west": [[0, 0], [0, 1], [0, 4], [0, 5]]
        },
        "id": "A4",
        "large": false,
        "map": "#1  2#3XXXX4  XX    XX  X5XX  X6XX    XX  ",
        "size": [6, 7],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "<" },
            { "id": 2, "large": false, "range": true, "trap": ">" },
            { "id": 3, "large": false, "range": true, "trap": "^" },
            { "id": 4, "large": false, "range": true, "trap": "^" },
            { "id": 5, "large": false, "range": false, "trap": "<" },
            { "id": 6, "large": false, "range": false, "trap": "X" }
        ]
    },
    {
        "exits": {
            "east": [[7, 0], [7, 1]],
            "north": [[0, 0], [1, 0], [3, 0], [4, 0], [6, 0], [7, 0]],
            "west": [[0, 0], [0, 1]]
        },
        "id": "A5",
        "large": false,
        "map": "XX XX XX1X 23 X4 X5XX6X  XXXXXX ",
        "size": [8, 4],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "^" },
            { "id": 2, "large": false, "range": false, "trap": "^" },
            { "id": 3, "large": false, "range": false, "trap": "^" },
            { "id": 4, "large": true, "range": true, "trap": "^" },
            { "id": 5, "large": true, "range": false, "trap": "X" },
            { "id": 6, "large": true, "range": false, "trap": "X" }
        ]
    },
    {
        "exits": {
            "east": [[7, 0], [7, 1]],
            "north": [[0, 0], [1, 0], [3, 0], [4, 0], [6, 0], [7, 0]],
            "west": [[0, 0], [0, 1]]
        },
        "id": "A6",
        "large": false,
        "map": "#X XX X#1X 23 X4 X5XX6X  XXXXXX ",
        "size": [8, 4],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "^" },
            { "id": 2, "large": false, "range": false, "trap": "^" },
            { "id": 3, "large": false, "range": false, "trap": "^" },
            { "id": 4, "large": true, "range": true, "trap": "^" },
            { "id": 5, "large": true, "range": false, "trap": "X" },
            { "id": 6, "large": true, "range": false, "trap": "X" }
        ]
    },
    {
        "exits": {
            "east": [[9, 1]],
            "north": [[1, 0], [3, 0], [4, 0], [7, 0], [8, 0]],
            "west": [[0, 1], [0, 3]]
        },
        "id": "B1",
        "large": true,
        "map": " X 1X  XX XXXXXXXXXX X X2  3X 4X5XX  X6  X XX  XX ",
        "size": [10, 5],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": false, "trap": "X" },
            { "id": 3, "large": true, "range": true, "trap": "" },
            { "id": 4, "large": false, "range": true, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "\\" },
            { "id": 6, "large": true, "range": true, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[9, 1]],
            "north": [[1, 0], [3, 0], [4, 0], [7, 0], [8, 0]],
            "west": [[0, 1], [0, 3]]
        },
        "id": "B2",
        "large": false,
        "map": " X 1X  XX XXXXXXXXX# X #2  3# 4X5XX  X6  X XX  XX ",
        "size": [10, 5],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "" },
            { "id": 2, "large": false, "range": false, "trap": "X" },
            { "id": 3, "large": false, "range": true, "trap": "" },
            { "id": 4, "large": false, "range": true, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "\\" },
            { "id": 6, "large": true, "range": true, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[5, 1], [5, 8]],
            "north": [[3, 0], [4, 0]],
            "west": [[0, 1], [0, 5]]
        },
        "id": "B3",
        "large": true,
        "map": "   XX XXXXX1 2 XX    XX  X 3X XXXXX  4 XX    XX   5XX6   XX ",
        "size": [6, 10],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": false, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": false, "trap": "X" },
            { "id": 4, "large": false, "range": false, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": false, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[5, 1], [5, 8]],
            "north": [[3, 0], [4, 0]],
            "west": [[0, 1], [0, 5]]
        },
        "id": "B4",
        "large": true,
        "map": "   XX XXXXX1 2 XX    XX  # 3X XXXXX  4 XX    XX   5XX6   XX ",
        "size": [6, 10],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": false, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": false, "trap": "X" },
            { "id": 4, "large": false, "range": false, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": false, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[7, 4], [7, 5]],
            "north": [[1, 0], [6, 0]],
            "west": [[0, 1], [0, 2], [0, 5]]
        },
        "id": "B5",
        "large": true,
        "map": " X    X XX1XXX2 XXXXX    X  X    3 4X5XXXXXXXX6X X  X   ",
        "size": [8, 7],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "\\" },
            { "id": 2, "large": false, "range": true, "trap": "^" },
            { "id": 3, "large": false, "range": false, "trap": "\\" },
            { "id": 4, "large": true, "range": false, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": ">" },
            { "id": 6, "large": false, "range": false, "trap": ">" }
        ]
    },
    {
        "exits": {
            "east": [[7, 4], [7, 5]],
            "north": [[1, 0], [6, 0]],
            "west": [[0, 1], [0, 2], [0, 5]]
        },
        "id": "B6",
        "large": true,
        "map": " X    X XX1#XX2 XXXXX    X  X    3 4X5XXXXXXXX6X X  X   ",
        "size": [8, 7],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "\\" },
            { "id": 2, "large": false, "range": true, "trap": "^" },
            { "id": 3, "large": false, "range": false, "trap": "\\" },
            { "id": 4, "large": true, "range": false, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": ">" },
            { "id": 6, "large": false, "range": false, "trap": ">" }
        ]
    },
    {
        "exits": {
            "east": [[7, 3], [7, 4]],
            "north": [[3, 0], [4, 0]],
            "west": [[0, 3], [0, 4]]
        },
        "id": "C1",
        "large": true,
        "map": "   XX    12XX34  XXXXXX XXXXXXXXXXXXXXXX 5XXXX6  XXXXXX ",
        "size": [8, 7],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": true, "trap": "" },
            { "id": 4, "large": false, "range": true, "trap": "" },
            { "id": 5, "large": true, "range": false, "trap": "X" },
            { "id": 6, "large": true, "range": false, "trap": "X" }
        ]
    },
    {
        "exits": {
            "east": [[7, 3], [7, 4]],
            "north": [[3, 0], [4, 0]],
            "west": [[0, 3], [0, 4]]
        },
        "id": "C2",
        "large": true,
        "map": "   XX    12XX34  XXXXXX XX#XX#XXXX#XX#XX 5XXXX6  XXXXXX ",
        "size": [8, 7],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": true, "trap": "" },
            { "id": 4, "large": false, "range": true, "trap": "" },
            { "id": 5, "large": true, "range": false, "trap": "X" },
            { "id": 6, "large": true, "range": false, "trap": "X" }
        ]
    },
    {
        "exits": {
            "east": [[7, 5]],
            "north": [[0, 0], [1, 0], [4, 0], [5, 0]],
            "west": []
        },
        "id": "C3",
        "large": true,
        "map": "XX  XX  1X23XX  XXXXXX  X4XX5X  XXXXXX  6XXXXXXXXXXXXX  ",
        "size": [8, 7],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "^" },
            { "id": 2, "large": false, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": true, "trap": "" },
            { "id": 4, "large": true, "range": false, "trap": "X" },
            { "id": 5, "large": true, "range": false, "trap": "X" },
            { "id": 6, "large": true, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[7, 5]],
            "north": [[0, 0], [1, 0], [4, 0], [5, 0]],
            "west": []
        },
        "id": "C4",
        "large": true,
        "map": "XX  XX  1X23XX  XXX##X  #4XX5X  #XXXXX  6X#XXXX#XX#XXX  ",
        "size": [8, 7],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "^" },
            { "id": 2, "large": false, "range": true, "trap": "" },
            { "id": 3, "large": false, "range": true, "trap": "" },
            { "id": 4, "large": true, "range": false, "trap": "X" },
            { "id": 5, "large": true, "range": false, "trap": "X" },
            { "id": 6, "large": true, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [],
            "north": [[6, 0], [7, 0]],
            "west": [[0, 2], [0, 5]]
        },
        "id": "C5",
        "large": true,
        "map": "      XX  12X3XXXXXXXXX4  5XXXXX  6XXXXXXXXXXXXX  XXXXXX",
        "size": [8, 7],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": true, "trap": "^" },
            { "id": 4, "large": true, "range": false, "trap": "^" },
            { "id": 5, "large": false, "range": false, "trap": "\\" },
            { "id": 6, "large": true, "range": false, "trap": "\\" }
        ]
    },
    {
        "exits": {
            "east": [],
            "north": [[6, 0], [7, 0]],
            "west": [[0, 2], [0, 5]]
        },
        "id": "C6",
        "large": true,
        "map": "      X#  12X3XX#XXXXXX4  5XXXXX  6X##XXXXXXXXXX  XXXXXX",
        "size": [8, 7],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": true, "trap": "^" },
            { "id": 4, "large": true, "range": false, "trap": "^" },
            { "id": 5, "large": false, "range": false, "trap": "\\" },
            { "id": 6, "large": true, "range": false, "trap": "\\" }
        ]
    },
    {
        "exits": {
            "east": [[6, 1], [6, 7]],
            "north": [[1, 0], [3, 0], [5, 0]],
            "west": [[0, 1], [0, 7]]
        },
        "id": "D1",
        "large": false,
        "map": " X X X XXXXXXX XX1XX 2XXXXX3 XXXXX 4XXXXX5 XX6XX XXXXXXX XXXXX   XXX  ",
        "size": [7, 10],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "X" },
            { "id": 2, "large": false, "range": true, "trap": "" },
            { "id": 3, "large": false, "range": true, "trap": "" },
            { "id": 4, "large": false, "range": false, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": true, "range": false, "trap": "X" }
        ]
    },
    {
        "exits": {
            "east": [[6, 1], [6, 7]],
            "north": [[1, 0], [3, 0], [5, 0]],
            "west": [[0, 1], [0, 7]]
        },
        "id": "D2",
        "large": false,
        "map": " X X X #XXXXX# XX1XX 2XXXXX3 XXXXX 4XXXXX5 XX6XX XXXXXXX XXXXX   XXX  ",
        "size": [7, 10],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "X" },
            { "id": 2, "large": false, "range": true, "trap": "" },
            { "id": 3, "large": false, "range": true, "trap": "" },
            { "id": 4, "large": false, "range": false, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": true, "range": false, "trap": "X" }
        ]
    },
    {
        "exits": {
            "east": [[9, 1], [9, 3], [9, 5]],
            "north": [[6, 0], [8, 0]],
            "west": []
        },
        "id": "D3",
        "large": false,
        "map": "  X 1 X X  XXXXXXXXXXXXXXX2X3 XX4XXXXXXX5XXXXXXX6  XXXXXXXXX  X X X X ",
        "size": [10, 7],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": false, "trap": "/" },
            { "id": 3, "large": true, "range": false, "trap": "/" },
            { "id": 4, "large": true, "range": false, "trap": "" },
            { "id": 5, "large": true, "range": false, "trap": "" },
            { "id": 6, "large": true, "range": false, "trap": ">" }
        ]
    },
    {
        "exits": {
            "east": [[9, 1], [9, 3], [9, 5]],
            "north": [[6, 0], [8, 0]],
            "west": []
        },
        "id": "D4",
        "large": false,
        "map": "  # 1 X X  XXXXXXXXXXXXXXX2X3 ##4XXXXXXX5XXXXXXX6  XXXXXXXXX  X X X X ",
        "size": [10, 7],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": false, "trap": "/" },
            { "id": 3, "large": true, "range": false, "trap": "/" },
            { "id": 4, "large": true, "range": false, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": true, "range": false, "trap": ">" }
        ]
    },
    {
        "exits": {
            "east": [[4, 2]],
            "north": [[2, 0]],
            "west": [[0, 2]]
        },
        "id": "E1",
        "large": true,
        "map": "  X   1X2 XXXXX 3X4  XXX  5X6  XXX  X X ",
        "size": [5, 8],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": false, "trap": "-" },
            { "id": 4, "large": true, "range": false, "trap": "-" },
            { "id": 5, "large": true, "range": false, "trap": "-" },
            { "id": 6, "large": true, "range": false, "trap": "-" }
        ]
    },
    {
        "exits": {
            "east": [[4, 2]],
            "north": [[2, 0]],
            "west": [[0, 2]]
        },
        "id": "E2",
        "large": true,
        "map": "  X   1X2 #XXX# 3X4  XXX  5X6  XXX  X X ",
        "size": [5, 8],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": false, "trap": "-" },
            { "id": 4, "large": true, "range": false, "trap": "-" },
            { "id": 5, "large": true, "range": false, "trap": "-" },
            { "id": 6, "large": true, "range": false, "trap": "-" }
        ]
    },
    {
        "exits": {
            "east": [[4, 5]],
            "north": [],
            "west": [[0, 5]]
        },
        "id": "E3",
        "large": true,
        "map": " X X  XXX  1X2  3X4  5X6 XXXXX XXX   X  ",
        "size": [5, 8],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": true, "trap": "" },
            { "id": 3, "large": false, "range": false, "trap": "" },
            { "id": 4, "large": false, "range": false, "trap": "" },
            { "id": 5, "large": true, "range": false, "trap": "" },
            { "id": 6, "large": true, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[4, 5]],
            "north": [],
            "west": [[0, 5]]
        },
        "id": "E4",
        "large": false,
        "map": " # #  XXX  1#2  3#4  5X6 XXXXX XXX   X  ",
        "size": [5, 8],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": true, "trap": "" },
            { "id": 3, "large": false, "range": false, "trap": "" },
            { "id": 4, "large": false, "range": false, "trap": "" },
            { "id": 5, "large": true, "range": false, "trap": "" },
            { "id": 6, "large": true, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[4, 1], [4, 2], [4, 5], [4, 6]],
            "north": [[1, 0], [3, 0]],
            "west": [[0, 1], [0, 2], [0, 5], [0, 6]]
        },
        "id": "F1",
        "large": true,
        "map": " X X 1X2X3XXXXX X X  X X 4X5X6XXXXX X X ",
        "size": [5, 8],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "" },
            { "id": 2, "large": false, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": true, "trap": "" },
            { "id": 4, "large": true, "range": false, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "-" },
            { "id": 6, "large": true, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[4, 1], [4, 2], [4, 5], [4, 6]],
            "north": [[1, 0], [3, 0]],
            "west": [[0, 1], [0, 2], [0, 5], [0, 6]]
        },
        "id": "F2",
        "large": true,
        "map": " # X 1X2X3XXXX# X X  X X 4X5X6XXXXX X X ",
        "size": [5, 8],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": true, "trap": "" },
            { "id": 3, "large": false, "range": true, "trap": "" },
            { "id": 4, "large": true, "range": false, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "-" },
            { "id": 6, "large": true, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[7, 1], [7, 3]],
            "north": [[1, 0], [2, 0], [5, 0], [6, 0]],
            "west": [[0, 1], [0, 3]]
        },
        "id": "F3",
        "large": false,
        "map": " XX  XX 1XX23XX4 XX  XX XXX56XXX XX  XX ",
        "size": [8, 5],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": false, "range": false, "trap": "X" },
            { "id": 3, "large": false, "range": false, "trap": "X" },
            { "id": 4, "large": false, "range": true, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "X" },
            { "id": 6, "large": false, "range": false, "trap": "X" }
        ]
    },
    {
        "exits": {
            "east": [[7, 1], [7, 3]],
            "north": [[1, 0], [2, 0], [5, 0], [6, 0]],
            "west": [[0, 1], [0, 3]]
        },
        "id": "F4",
        "large": false,
        "map": " X#  #X 1XX23XX4 #X  X# XXX56XXX XX  XX ",
        "size": [8, 5],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": false, "range": false, "trap": "X" },
            { "id": 3, "large": false, "range": false, "trap": "X" },
            { "id": 4, "large": false, "range": true, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "X" },
            { "id": 6, "large": false, "range": false, "trap": "X" }
        ]
    },
    {
        "exits": {
            "east": [[3, 1], [3, 6]],
            "north": [[1, 0], [2, 0]],
            "west": [[0, 3], [0, 8]]
        },
        "id": "F5",
        "large": false,
        "map": " XX XXXX XX 1XX2 XX  XX 3XX4 XX 5XX6 XX ",
        "size": [4, 10],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": false, "range": true, "trap": "" },
            { "id": 3, "large": false, "range": false, "trap": "" },
            { "id": 4, "large": false, "range": false, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": false, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[3, 1], [3, 6]],
            "north": [[1, 0], [2, 0]],
            "west": [[0, 3], [0, 8]]
        },
        "id": "F6",
        "large": false,
        "map": " XX #XXX XX 1XX2 XX  XX 3XX4 XX 5XX6 XX ",
        "size": [4, 10],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": false, "range": true, "trap": "" },
            { "id": 3, "large": false, "range": false, "trap": "" },
            { "id": 4, "large": false, "range": false, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": false, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[9, 2], [9, 5]],
            "north": [[2, 0], [3, 0], [7, 0]],
            "west": [[0, 1], [0, 2], [0, 5]]
        },
        "id": "G1",
        "large": true,
        "map": "  XX   X  X1XXXXXX  XXXXXXXXXX XXXXXX X  X XXXX2X XXXXXXX XX X 3X4XXX 5XXXXXX X6XXXXXXX  XXXXXXXXXXX XXXXXX   ",
        "size": [10, 11],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "\\" },
            { "id": 2, "large": false, "range": true, "trap": ">" },
            { "id": 3, "large": true, "range": false, "trap": "X" },
            { "id": 4, "large": true, "range": false, "trap": "X" },
            { "id": 5, "large": true, "range": false, "trap": "" }, 
            { "id": 6, "large": false, "range": false, "trap": ">" }
        ]
    },
    {
        "exits": {
            "east": [[9, 2], [9, 5]],
            "north": [[2, 0], [3, 0], [7, 0]],
            "west": [[0, 1], [0, 2], [0, 5]]
        },
        "id": "G2",
        "large": true,
        "map": "  XX   X  #1XXX#XX  XXXXXXXXX# XXXXXX X  X XXXX2X XXXX#XX XX X 3#4XXX 5XXXXXX X6#XXX##X  X#XXXXXXXXX XXXXX#   ",
        "size": [10, 11],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "\\" },
            { "id": 2, "large": false, "range": true, "trap": ">" },
            { "id": 3, "large": false, "range": false, "trap": "X" },
            { "id": 4, "large": true, "range": false, "trap": "X" },
            { "id": 5, "large": false, "range": false, "trap": "" }, 
            { "id": 6, "large": false, "range": false, "trap": ">" }
        ]
    },
    {
        "exits": {
            "east": [[10, 2], [10, 3], [10, 6]],
            "north": [[3, 0], [5, 0]],
            "west": [[0, 4], [0, 5]]
        },
        "id": "G3",
        "large": true,
        "map": "   X X      XXX1XXXXX  X X X XXXX XXXXXXXXXXXXXXXXX2XX XXXXXXX     XXXXXX XXX  3X4 XXX    XXX X X5   XXX XXX    XXX X      XXXX6      XXX      ",
        "size": [11, 13],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "^" },
            { "id": 2, "large": true, "range": true, "trap": ">" },
            { "id": 3, "large": true, "range": false, "trap": "X" },
            { "id": 4, "large": false, "range": false, "trap": "X" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": false, "range": false, "trap": "/" }
        ]
    },
    {
        "exits": {
            "east": [[10, 2], [10, 3], [10, 6]],
            "north": [[3, 0], [5, 0]],
            "west": [[0, 4], [0, 5]]
        },
        "id": "G4",
        "large": true,
        "map": "   X #      XXX1XXX##  X X X XXXX XXXXXXXXXX#X#XX#X2XX XX#XX#X     XXXXXX XX#  3X4 XXX    XXX # X5   XXX X#X    XXX X      XXXX6      XXX      ",
        "size": [11, 13],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "^" },
            { "id": 2, "large": true, "range": true, "trap": ">" },
            { "id": 3, "large": true, "range": false, "trap": "X" },
            { "id": 4, "large": false, "range": false, "trap": "X" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": false, "range": false, "trap": "/" }
        ]
    },
    {
        "exits": {
            "east": [[7, 1], [7, 2], [7, 5], [7, 6]],
            "north": [[1, 0], [2, 0], [5, 0], [6, 0]],
            "west": [[0, 1], [0, 2], [0, 5], [0, 6]]
        },
        "id": "H1",
        "large": true,
        "map": " XX  XX XXXXXXXXXXX12XXX 3X##X4  XX##XX XXX56XXXXXXXXXXX XX  XX ",
        "size": [8, 8],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": false, "trap": "\\" },
            { "id": 4, "large": true, "range": false, "trap": "/" },
            { "id": 5, "large": true, "range": false, "trap": "" },
            { "id": 6, "large": true, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[7, 1], [7, 2], [7, 5], [7, 6]],
            "north": [[1, 0], [2, 0], [5, 0], [6, 0]],
            "west": [[0, 1], [0, 2], [0, 5], [0, 6]]
        },
        "id": "H2",
        "large": true,
        "map": " XX  XX #XXXXXX#XXX12XXX 3X##X4  XX##XX XXX56XXXXXXXXXXX XX  XX ",
        "size": [8, 8],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": false, "trap": "\\" },
            { "id": 4, "large": true, "range": false, "trap": "/" },
            { "id": 5, "large": true, "range": false, "trap": "" },
            { "id": 6, "large": true, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[7, 1], [7, 2]],
            "north": [[1, 0], [2, 0], [5, 0], [6, 0]],
            "west": [[0, 1], [0, 2]]
        },
        "id": "H3",
        "large": true,
        "map": " XX  XX XXXXXXXXXXX12XXX XX##XX  XX##XX 3XXXXXX45XXXXXX6 XX  XX ",
        "size": [8, 8],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": true, "trap": "" },
            { "id": 3, "large": false, "range": false, "trap": "" },
            { "id": 4, "large": false, "range": false, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": false, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[7, 1], [7, 2]],
            "north": [[1, 0], [2, 0], [5, 0], [6, 0]],
            "west": [[0, 1], [0, 2]]
        },
        "id": "H4",
        "large": false,
        "map": " XX  XX XXX##XXXXXX12XXX XX##XX  XX##XX 3XXXXXX45XXXXXX6 XX  XX ",
        "size": [8, 8],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": false, "range": true, "trap": "" },
            { "id": 3, "large": false, "range": false, "trap": "" },
            { "id": 4, "large": false, "range": false, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": false, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[8, 0]],
            "north": [],
            "west": [[0, 0]]
        },
        "id": "O1",
        "large": true,
        "map": "XXX   XXX XX1 2XX  XXX XXX  XXX XXX  XXX XXX  XXX XXX  XXX XXX  3X4X5X6  XXXXXXX  XXXXXXX  XXXXXXX  XXXXXXX   XXXXX    XXXXX    XXXXX  ",
        "size": [9, 15],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "<" },
            { "id": 2, "large": true, "range": true, "trap": ">" },
            { "id": 3, "large": true, "range": true, "trap": "<" },
            { "id": 4, "large": true, "range": true, "trap": "<" },
            { "id": 5, "large": true, "range": true, "trap": ">" },
            { "id": 6, "large": true, "range": true, "trap": ">" }
        ]
    },
    {
        "exits": {
            "east": [[8, 0]],
            "north": [],
            "west": [[0, 0]]
        },
        "id": "O2",
        "large": true,
        "map": "#XX   XX# XX1 2XX  XXX XXX  XXX XXX  XXX XXX  XXX XXX  XXX XXX  3X4X5X6  #XXXXXX  XX#X##X  #X#XXXX  #XXXXX#   XXXXX    XXXXX    XXXXX  ",
        "size": [9, 15],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "" },
            { "id": 2, "large": true, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": true, "trap": "-" },
            { "id": 4, "large": true, "range": true, "trap": "-" },
            { "id": 5, "large": true, "range": true, "trap": "-" },
            { "id": 6, "large": true, "range": true, "trap": "-" }
        ]
    },
    {
        "exits": {
            "east": [[9, 3]],
            "north": [[3, 0], [4, 0]],
            "west": [[0, 8]]
        },
        "id": "O3",
        "large": true,
        "map": "   XX        XX        XX        1X2XXXX   XXXX      XXXX      XXXX3X    4XXXXX XXXXXXXXX     XXXXX     XXXXX     XXXX5  XX6XXXX   XXXXXXX   XXXXXXX   XXXXXXX   XXXXXXX  ",
        "size": [10, 17],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "/" },
            { "id": 2, "large": true, "range": true, "trap": "/" },
            { "id": 3, "large": true, "range": true, "trap": "\\" },
            { "id": 4, "large": true, "range": true, "trap": "X" },
            { "id": 5, "large": true, "range": false, "trap": "" },
            { "id": 6, "large": true, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[9, 3]],
            "north": [[3, 0], [4, 0]],
            "west": [[0, 8]]
        },
        "id": "O4",
        "large": true,
        "map": "   XX        XX        XX        1X2XXX#   XXXX      XXXX      XXXX3X    4XXXXX #XXXXXXXX     XXXXX     XXXXX     XXXX5  XX6XXXX   XXXXXXX   XXXXXXX   XXXXXXX   XXXXXXX  ",
        "size": [10, 17],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "^" },
            { "id": 2, "large": true, "range": true, "trap": ">" },
            { "id": 3, "large": true, "range": true, "trap": "" },
            { "id": 4, "large": true, "range": true, "trap": "<" },
            { "id": 5, "large": true, "range": false, "trap": "" },
            { "id": 6, "large": true, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[11, 2]],
            "north": [[3, 0], [4, 0], [7, 0], [8, 0]],
            "west": [[0, 2]]
        },
        "id": "N1",
        "large": true,
        "map": "   XX  XX      XX  XX   XXXXX  XXXXX   1X  X2      XX34XX      XXXXXX      XXXXXX   ",
        "size": [12, 7],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "\\" },
            { "id": 2, "large": true, "range": true, "trap": "/" },
            { "id": 3, "large": true, "range": false, "trap": "X" },
            { "id": 4, "large": true, "range": false, "trap": "X" }
        ]
    },
    {
        "exits": {
            "east": [[11, 2]],
            "north": [[3, 0], [4, 0], [7, 0], [8, 0]],
            "west": [[0, 2]]
        },
        "id": "N2",
        "large": true,
        "map": "   XX  XX      XX  XX   #XXXX  XXXX#   1X  X2      XX34XX      XXXXXX      XXXXXX   ",
        "size": [12, 7],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "X" },
            { "id": 2, "large": true, "range": true, "trap": "X" },
            { "id": 3, "large": true, "range": false, "trap": "" },
            { "id": 4, "large": true, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[7, 1]],
            "north": [[3, 0], [4, 0]],
            "west": [[0, 1]]
        },
        "id": "N3",
        "large": true,
        "map": "   XX   XXXXXXXX X 12 X  X XX X XX3XX4XX5XXXXXX6 XXXXXX ",
        "size": [8, 7],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "X" },
            { "id": 2, "large": false, "range": true, "trap": "X" },
            { "id": 3, "large": true, "range": false, "trap": "\\" },
            { "id": 4, "large": true, "range": false, "trap": "/" },
            { "id": 5, "large": true, "range": false, "trap": "<" },
            { "id": 6, "large": true, "range": false, "trap": ">" }
        ]
    },
    {
        "exits": {
            "east": [[7, 1]],
            "north": [[3, 0], [4, 0]],
            "west": [[0, 1]]
        },
        "id": "N4",
        "large": true,
        "map": "   XX   #XXXXXX# X 12 X  X XX X XX3XX4XX5XX##XX6 XXXXXX ",
        "size": [8, 7],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "" },
            { "id": 2, "large": false, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": false, "trap": "" },
            { "id": 4, "large": true, "range": false, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": false, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [],
            "north": [[4, 0], [5, 0]],
            "west": []
        },
        "id": "J1",
        "large": true,
        "map": "    XX    XX    XX1X2 3XX XXXX4X5 6X    XX    XX    XX",
        "size": [6, 9],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": false, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": true, "trap": "X" },
            { "id": 4, "large": false, "range": false, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": true, "range": false, "trap": "X" }
        ]
    },
    {
        "exits": {
            "east": [],
            "north": [[4, 0], [5, 0]],
            "west": []
        },
        "id": "J2",
        "large": true,
        "map": "    XX    XX    XX1X2 3X# XXXX4X5 6X    XX    XX    XX",
        "size": [6, 9],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "X" },
            { "id": 2, "large": false, "range": false, "trap": "" },
            { "id": 3, "large": true, "range": true, "trap": "" },
            { "id": 4, "large": false, "range": true, "trap": "X" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": true, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [],
            "north": [[2,0]],
            "west": [[0, 4], [0, 5]]
        },
        "id": "J3",
        "large": true,
        "map": "  X    XXX   1 2   X3X  XXXX4 X5XX6   XXXX  XXXX",
        "size": [6, 8],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "^" },
            { "id": 2, "large": false, "range": true, "trap": "^" },
            { "id": 3, "large": true, "range": true, "trap": "" },
            { "id": 4, "large": false, "range": false, "trap": "!" },
            { "id": 5, "large": true, "range": false, "trap": "<" },
            { "id": 6, "large": false, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [],
            "north": [[2,0]],
            "west": [[0, 4], [0, 5]]
        },
        "id": "J4",
        "large": true,
        "map": "  #    XXX   1 2   X3X  XXXX4 #5XX6   XXXX  XXXX",
        "size": [6, 8],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "X" },
            { "id": 2, "large": false, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": true, "trap": "X" },
            { "id": 4, "large": false, "range": false, "trap": "" },
            { "id": 5, "large": true, "range": false, "trap": "!" },
            { "id": 6, "large": false, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[5, 4], [5, 5]],
            "north": [[3, 0]],
            "west": []
        },
        "id": "J5",
        "large": true,
        "map": "   X    XXX   1 2   X3X  4XXXX 5XX6XXXXX  XXXX  ",
        "size": [6, 8],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "^" },
            { "id": 2, "large": false, "range": true, "trap": "^" },
            { "id": 3, "large": true, "range": true, "trap": "" },
            { "id": 4, "large": false, "range": false, "trap": "!" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": true, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[5, 4], [5, 5]],
            "north": [[3, 0]],
            "west": []
        },
        "id": "J6",
        "large": true,
        "map": "   #    XXX   1 2   X3X  4XXXX 5XX6#XXXX  XXXX  ",
        "size": [6, 8],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "X" },
            { "id": 2, "large": false, "range": true, "trap": "X" },
            { "id": 3, "large": true, "range": true, "trap": "" },
            { "id": 4, "large": false, "range": false, "trap": "!" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": true, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[10,1], [10,3]],
            "north": [[1, 0], [9, 0]],
            "west": [[0, 1], [0, 3]]
        },
        "id": "K1",
        "large": true,
        "map": " X 1   2 X XXXXX XXXXX X  XXX  X XX 3XXX4 XX XXXXXXXXX  XXXXXXXXX 5XXXXXXXXX6 X XXXXX X     XXX    ",
        "size": [11, 9],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": false, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": true, "trap": "" },
            { "id": 4, "large": true, "range": true, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": false, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[10,1], [10,3]],
            "north": [[1, 0], [9, 0]],
            "west": [[0, 1], [0, 3]]
        },
        "id": "K2",
        "large": true,
        "map": " X 1   2 X #XXXX XXXX# X  XXX  X XX 3XXX4 XX XXXXXXXXX  XXXXXXXXX 5XXXXXXXXX6 X XXXXX X     XXX    ",
        "size": [11, 9],
        "sp": [
            { "id": 1, "large": false, "range": true, "trap": "" },
            { "id": 2, "large": false, "range": true, "trap": "" },
            { "id": 3, "large": true, "range": true, "trap": "" },
            { "id": 4, "large": true, "range": true, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": false, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[12,1], [12,3]],
            "north": [[3, 0], [9, 0]],
            "west": [[0, 1], [0, 3]]
        },
        "id": "K3",
        "large": true,
        "map": " X X     X X XXXXX1X2XXXXX X  XXXXX  X XX 3XXXXX4 XX X XXXXXXX X XXXXXXXXXXXXX 5  XXXXX  6      XXX     ",
        "size": [13, 8],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "\\" },
            { "id": 2, "large": true, "range": true, "trap": "/" },
            { "id": 3, "large": true, "range": true, "trap": "" },
            { "id": 4, "large": true, "range": true, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "\\" },
            { "id": 6, "large": false, "range": false, "trap": "//" }
        ]
    },
    {
        "exits": {
            "east": [[12,1], [12,3]],
            "north": [[3, 0], [9, 0]],
            "west": [[0, 1], [0, 3]]
        },
        "id": "K4",
        "large": true,
        "map": " # X     X # XXXXX1X2XXXXX X  XXXXX  X XX 3XX#XX4 XX X XXX#XXX X XXXXXXXXXXXXX 5  XXXXX  6      XXX     ",
        "size": [13, 8],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "X" },
            { "id": 2, "large": true, "range": true, "trap": "X" },
            { "id": 3, "large": true, "range": true, "trap": "" },
            { "id": 4, "large": true, "range": true, "trap": "" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": false, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[8, 1], [8, 3]],
            "north": [[2, 0], [6,0]],
            "west": [[0, 1], [0, 3]]
        },
        "id": "L1",
        "large": false,
        "map": "  X   X  X1X   X2X X3X X4X XX X X XX X X X X 5XXXXXXX6X XXXXX XXXXXXXXXX",
        "size": [9, 8],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "\\" },
            { "id": 2, "large": true, "range": true, "trap": "/" },
            { "id": 3, "large": false, "range": true, "trap": "\\" },
            { "id": 4, "large": false, "range": true, "trap": "/" },
            { "id": 5, "large": false, "range": false, "trap": "<" },
            { "id": 6, "large": false, "range": false, "trap": ">" }
        ]
    },
    {
        "exits": {
            "east": [[8, 1], [8, 3]],
            "north": [[2, 0], [6,0]],
            "west": [[0, 1], [0, 3]]
        },
        "id": "L2",
        "large": false,
        "map": "  X   X  #1X   X2# X3X X4X XX X X XX X X X X 5XXXXXXX6X XXXXX XXXXXXXXXX",
        "size": [9, 8],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "/" },
            { "id": 2, "large": true, "range": true, "trap": "\\" },
            { "id": 3, "large": false, "range": true, "trap": "X" },
            { "id": 4, "large": false, "range": true, "trap": "X" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": false, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[8, 2]],
            "north": [[2, 0], [6, 0]],
            "west": [[0, 2]]
        },
        "id": "L3",
        "large": true,
        "map": "  X X X   XXXXXXX XXX1X2XXX  X X X    X3X4X    XXXXX   5XXXXX6  X XXX X  X XXX X ",
        "size": [9, 9],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "X" },
            { "id": 2, "large": true, "range": true, "trap": "X" },
            { "id": 3, "large": true, "range": true, "trap": "X" },
            { "id": 4, "large": true, "range": true, "trap": "X" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": false, "range": false, "trap": "" }
        ]
    },
    {
        "exits": {
            "east": [[8, 2]],
            "north": [[2, 0], [6, 0]],
            "west": [[0, 2]]
        },
        "id": "L4",
        "large": true,
        "map": "  X # X   XXXXXXX XXX1X2XXX  X X X    X3X4X    XXXXX   5XXXXX6  X XXX X  X XXX X ",
        "size": [9, 9],
        "sp": [
            { "id": 1, "large": true, "range": true, "trap": "X" },
            { "id": 2, "large": true, "range": true, "trap": "X" },
            { "id": 3, "large": true, "range": true, "trap": "X" },
            { "id": 4, "large": true, "range": true, "trap": "X" },
            { "id": 5, "large": false, "range": false, "trap": "" },
            { "id": 6, "large": false, "range": false, "trap": "" }
        ]
    },
]
    ;

window.ddef = {
    checkSegment: function(id){
        var rawSegment = dungeonDef.filter(function (s) {
            return s.id == id;
        });

        if (rawSegment.length == 0)
            return false;

        return true;
    },
    getSegment: function (id, exit) {
        var rawSegment = dungeonDef.filter(function (s) {
            return s.id == id;
        });

        if (rawSegment.length == 0)
            return null;

        cvtDungeon = function (def, exit) {
            var obj = {
                id: def.id,
                large: def.large,
                size: def.size.slice(0),
                map: def.map.slice(0).split(''),
                exitDir: exit
            };

            obj.exit = [];

            def.exits[exit].forEach(function (exPoint) {
                obj.map[exPoint[0] + exPoint[1] * def.size[0]] = "X";
                obj.exit.push(exPoint.slice(0));
            });

            obj.sp = []

            for (var i = 0; i < obj.map.length; i++) {
                c = obj.map[i];
                if (c >= '1' && c <= '9') {
                    var sp = def.sp[c - '1']
                    obj.sp.push({
                        id: sp.id,
                        large: sp.large,
                        range: sp.range,
                        trap: sp.trap.slice(0),
                        pos: [i % def.size[0], Math.floor(i / def.size[0])]
                    });
                }
            }

            return obj;
        }

        return cvtDungeon(rawSegment[0], exit);
    }

}