function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 17h15v13H6z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M8 19h6v9H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 0h2v15h-2zM8 4h2v11H8zM2 9l6 6H5.187L.595 10.406 2 9zM27.375 15.813l1.406 1.406L22 24v-2.813l5.375-5.375z"
}));

export default SvgComponent;