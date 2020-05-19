function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M29 1v11H18L29 1zm-1 2.406L20.437 11H28V3.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0c3.59 0 6.835 1.46 9.188 3.813l2 2-1.375 1.375-2.032-1.97A10.97 10.97 0 0013 2a10.97 10.97 0 00-7.781 3.219L1.406 9 0 7.594l3.813-3.782A12.952 12.952 0 0113 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28 3.406V11h-7.563L28 3.406z",
  fill: "#fff"
}));

export default SvgComponent;