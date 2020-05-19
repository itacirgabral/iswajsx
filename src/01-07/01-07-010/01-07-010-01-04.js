function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 11h15v13H14z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 13h11v9H16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.344 3.344L5.688 9H8.5l2.844-2.844L14.188 9H17l-5.656-5.656zM0 9h13v2H0zM31.938 4.063L27 9H29.813l3.562-3.531-1.438-1.407z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.406 5.563L1.97 6.968 13 18v-2.813L3.406 5.563z"
}));

export default SvgComponent;