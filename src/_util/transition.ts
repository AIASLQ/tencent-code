import { insertCSS } from "./insert-css";
import { hashObject } from "./hash-object";
var transitionPrefix = "tea-transition-";
var defaultEnterTimeout = 300;
var defaultLeaveTimeout = 300;
var generateFadeCSS = function (transition, visibleOpacity) { return "\n." + transition.classNames + "-enter {\n    opacity: 0 !important;\n}\n." + transition.classNames + "-enter-active {\n    opacity: " + visibleOpacity + " !important;\n    transition: opacity " + transition.timeout.enter + "ms ease;\n}\n." + transition.classNames + "-exit {\n    opacity: " + visibleOpacity + " !important;\n}\n." + transition.classNames + "-exit-active {\n    opacity: 0 !important;\n    transition: opacity " + transition.timeout.exit + "ms ease;\n}\n"; };
var generateSlideCSS = function (transition, enterPosition, leavePosition) { return "\n." + transition.classNames + "-enter {\n    opacity: 0 !important;\n    transform: translate3d(" + enterPosition[0] + "px, " + enterPosition[1] + "px, 0);\n}\n." + transition.classNames + "-enter-active {\n    opacity: 1 !important;\n    transform: translate3d(0, 0, 0);\n    transition: opacity " + transition.timeout.enter + "ms ease,\n                transform " + transition.timeout.enter + "ms ease;\n}\n." + transition.classNames + "-exit {\n    opacity: 1 !important;\n    transform: translate3d(0, 0, 0);\n}\n." + transition.classNames + "-exit-active {\n    opacity: 0 !important;\n    transform: translate3d(" + leavePosition[0] + "px, " + leavePosition[1] + "px, 0);\n    transition: opacity " + transition.timeout.exit + "ms ease,\n                transform " + transition.timeout.exit + "ms ease;\n}\n"; };
var generateCollapseCSS = function (transition, targetMaxHeight) { return "\n." + transition.classNames + "-enter {\n    max-height: 0;\n    overflow: hidden;\n}\n." + transition.classNames + "-enter-active {\n    max-height: " + targetMaxHeight + "px;\n    transition: max-height " + transition.timeout.enter + "ms ease;\n    overflow: hidden;\n}\n." + transition.classNames + "-exit {\n    max-height: " + targetMaxHeight + "px;\n    overflow: hidden;\n}\n." + transition.classNames + "-exit-active {\n    max-height: 0;\n    transition: max-height " + transition.timeout.exit + "ms ease;\n    overflow: hidden;\n}\n"; };
var generateScaleCSS = function (transition, enterScale, exitScale, origin) { return "\n." + transition.classNames + "-enter {\n    opacity: 0 !important;\n    transform: scale3d(" + enterScale + ", " + enterScale + ", " + enterScale + ");\n    transform-origin: " + origin + ";\n}\n." + transition.classNames + "-enter-active {\n    opacity: 1 !important;\n    transform: scale3d(1, 1, 1);\n    transition: opacity " + transition.timeout.enter + "ms ease,\n                transform " + transition.timeout.enter + "ms ease;\n    transform-origin: " + origin + ";\n}\n." + transition.classNames + "-exit {\n    opacity: 1 !important;\n    transform: scale3d(1, 1, 1);\n    transform-origin: " + origin + ";\n}\n." + transition.classNames + "-exit-active {\n    opacity: 0 !important;\n    transform: scale3d(" + exitScale + ", " + exitScale + ", " + exitScale + ");\n    transition: opacity " + transition.timeout.exit + "ms ease,\n                transform " + transition.timeout.exit + "ms ease;\n    transform-origin: " + origin + ";\n}\n"; };
var setupTransitions = {};
/**
 * generate a fade transition, enjoy it with TransitionGroup
 * */
export function fade(visibleOpacity, enterTimeout, leaveTimeout) {
    if (visibleOpacity === void 0) { visibleOpacity = 1; }
    if (enterTimeout === void 0) { enterTimeout = defaultEnterTimeout; }
    if (leaveTimeout === void 0) { leaveTimeout = defaultLeaveTimeout; }
    var name = transitionPrefix + "fade";
    var hash = hashObject({ name: name, visibleOpacity: visibleOpacity, enterTimeout: enterTimeout, leaveTimeout: leaveTimeout });
    if (!setupTransitions[hash]) {
        setupTransitions[hash] = {
            classNames: name + hash,
            timeout: {
                enter: enterTimeout,
                exit: leaveTimeout + 0.0001,
            },
            unmountOnExit: true,
            mountOnEnter: true,
        };
        var transition = setupTransitions[hash];
        var css = generateFadeCSS(transition, visibleOpacity);
        insertCSS(name + hash, css);
    }
    return setupTransitions[hash];
}
/**
 * generate a slide transition, enjoy it with TransitionGroup
 * */
export function slide(enterPosition, leavePosition, enterTimeout, leaveTimeout) {
    if (enterPosition === void 0) { enterPosition = [0, -30]; }
    if (leavePosition === void 0) { leavePosition = enterPosition; }
    if (enterTimeout === void 0) { enterTimeout = defaultEnterTimeout; }
    if (leaveTimeout === void 0) { leaveTimeout = defaultLeaveTimeout; }
    var name = transitionPrefix + "slide";
    var hash = hashObject({
        name: name,
        enterPosition: enterPosition,
        leavePosition: leavePosition,
        enterTimeout: enterTimeout,
        leaveTimeout: leaveTimeout,
    });
    if (!setupTransitions[hash]) {
        setupTransitions[hash] = {
            classNames: name + hash,
            timeout: {
                enter: enterTimeout,
                exit: leaveTimeout,
            },
            unmountOnExit: true,
            mountOnEnter: true,
        };
        var transition = setupTransitions[hash];
        var css = generateSlideCSS(transition, enterPosition, leavePosition);
        insertCSS(name + hash, css);
    }
    return setupTransitions[hash];
}
/**
 * generate a slide transition, enjoy it with TransitionGroup
 * */
export function collapse(targetHeight, enterTimeout, leaveTimeout) {
    if (enterTimeout === void 0) { enterTimeout = defaultEnterTimeout; }
    if (leaveTimeout === void 0) { leaveTimeout = defaultLeaveTimeout; }
    var name = transitionPrefix + "collapse";
    var hash = hashObject({ name: name, targetHeight: targetHeight, enterTimeout: enterTimeout, leaveTimeout: leaveTimeout });
    if (!setupTransitions[hash]) {
        setupTransitions[hash] = {
            classNames: name + hash,
            timeout: {
                enter: enterTimeout,
                exit: leaveTimeout,
            },
            unmountOnExit: true,
            mountOnEnter: true,
        };
        var transition = setupTransitions[hash];
        var css = generateCollapseCSS(transition, targetHeight);
        insertCSS(name + hash, css);
    }
    return setupTransitions[hash];
}
/**
 * generate a scale transition, enjoy it with TransitionGroup
 * */
export function scale(enterScale, exitScale, enterTimeout, leaveTimeout, origin) {
    if (enterScale === void 0) { enterScale = 0.5; }
    if (exitScale === void 0) { exitScale = enterScale; }
    if (enterTimeout === void 0) { enterTimeout = defaultEnterTimeout; }
    if (leaveTimeout === void 0) { leaveTimeout = defaultLeaveTimeout; }
    if (origin === void 0) { origin = "center"; }
    var name = transitionPrefix + "scale";
    var hash = hashObject({
        name: name,
        enterScale: enterScale,
        exitScale: exitScale,
        enterTimeout: enterTimeout,
        leaveTimeout: leaveTimeout,
        origin: origin,
    });
    if (!setupTransitions[hash]) {
        setupTransitions[hash] = {
            classNames: name + hash,
            timeout: {
                enter: enterTimeout,
                exit: leaveTimeout,
            },
            unmountOnExit: true,
            mountOnEnter: true,
        };
        var transition = setupTransitions[hash];
        var css = generateScaleCSS(transition, enterScale, exitScale, origin);
        insertCSS(name + hash, css);
    }
    return setupTransitions[hash];
}
//# sourceMappingURL=transition.js.map