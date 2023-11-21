'use strict';

var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var HackerEffectText = function (_a) {
    var initialValue = _a.initialValue, targetValue = _a.targetValue, children = _a.children, className = _a.className, _b = _a.capitalize, capitalize = _b === void 0 ? false : _b;
    var _c = __read(React.useState(initialValue
        .split("\n")
        .map(function (line) { return (capitalize ? line.toUpperCase() : line); })), 2), lines = _c[0], setLines = _c[1];
    var interval = null;
    var capitalizeText = function (value) {
        return capitalize ? value.toUpperCase() : value;
    };
    var calculateIntervalDuration = function (text) {
        var baseSpeed = 500;
        return Math.max(baseSpeed / text.length, 20);
    };
    var startAnimation = function () {
        var iterations = Array(lines.length).fill(0);
        if (interval !== null) {
            clearInterval(interval);
        }
        var initialText = capitalizeText(initialValue);
        var targetText = targetValue ? capitalizeText(targetValue) : "";
        interval = setInterval(function () {
            setLines(function (prevLines) {
                return prevLines.map(function (line, lineIndex) {
                    var currentText = targetText || initialText;
                    return line
                        .split("")
                        .map(function (_, index) {
                        return index < iterations[lineIndex]
                            ? currentText[index]
                            : String.fromCharCode(65 + Math.floor(Math.random() * 26));
                    })
                        .join("");
                });
            });
            if (iterations.every(function (iteration, lineIndex) { return iteration >= lines[lineIndex].length; })) {
                clearInterval(interval);
                setLines(function (prevLines) {
                    return prevLines.map(function () {
                        return targetText ? capitalizeText(targetText) : initialText;
                    });
                });
            }
            iterations = iterations.map(function (iteration) { return iteration + 1; });
        }, calculateIntervalDuration(initialText));
    };
    var handleMouseOver = function () { return startAnimation(); };
    var handleMouseLeave = function () {
        clearInterval(interval);
        setLines(initialValue
            .split("\n")
            .map(function (line) { return (capitalize ? line.toUpperCase() : line); }));
    };
    React.useEffect(function () { return function () { return clearInterval(interval); }; }, [interval]);
    return React.cloneElement(children, {
        onMouseOver: handleMouseOver,
        onMouseLeave: handleMouseLeave,
    }, React.createElement("div", { className: className }, lines.map(function (line, index) { return (React.createElement("span", { key: index }, line)); })));
};

exports.HackerEffectText = HackerEffectText;
//# sourceMappingURL=index.js.map
