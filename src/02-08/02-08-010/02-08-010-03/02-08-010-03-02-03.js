function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v9.9L9.9 0H0zm1.016 1.016L7.491.994.994 7.491l.022-6.475z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.243 5.657L20.506 21.92a4 4 0 005.657 0l1.414-1.414c2.734-2.734 3.05-6.85.707-9.192l-4.95 4.95c1.563 1.562 2.196 3.461 1.415 4.242a2 2 0 01-2.829 0l-3.27-3.27a3.5 3.5 0 10-4.066-4.066l-2.298-2.298A3.5 3.5 0 108.22 6.806L5.657 4.243 4.243 5.657zm6.01.353a2 2 0 112.828 2.829 2 2 0 01-2.828-2.829zm6.364 6.364a2 2 0 112.828 2.829 2 2 0 01-2.828-2.829z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.016 1.016L.994 7.491 7.491.994l-6.475.022z",
  fill: "#fff"
}));

export default SvgComponent;