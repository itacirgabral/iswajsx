function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.328 7.828c.18-.18.326-.393.464-.596L6.627 5.066c-.922-.922-.066-3.91-.066-3.91a3.973 3.973 0 00-3.89 1.016A3.973 3.973 0 001.656 6.06s2.99-.856 3.911.066l2.166 2.165c.203-.138.416-.283.596-.464z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z"
}));

export default SvgComponent;