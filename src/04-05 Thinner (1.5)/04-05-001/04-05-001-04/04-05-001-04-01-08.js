function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 20a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.328 22.172c-.18-.18-.393-.326-.596-.464l-2.166 2.165c-.922.922-3.91.066-3.91.066a3.973 3.973 0 001.016 3.89 3.973 3.973 0 003.889 1.016s-.856-2.99.066-3.911l2.165-2.166c-.138-.203-.283-.416-.464-.596z"
}));

export default SvgComponent;