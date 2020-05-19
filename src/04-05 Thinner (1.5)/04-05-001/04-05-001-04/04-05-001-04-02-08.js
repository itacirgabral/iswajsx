function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.328 2.172c-.18-.18-.393-.326-.596-.464L5.566 3.873c-.922.922-3.91.066-3.91.066a3.973 3.973 0 001.016 3.89A3.973 3.973 0 006.56 8.844s-.856-2.99.066-3.911l2.165-2.166c-.138-.203-.283-.416-.464-.596z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z"
}));

export default SvgComponent;