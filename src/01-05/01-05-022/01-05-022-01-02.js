function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.781 2.219L0 8v21h12V13L5.781 2.219z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.344 5.469L2 8.812V27h4V6.594l-.656-1.125z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 20v2h8v-2h-8zM13.438-.063l-2.844 10.594L12 13 15.375.437l-1.938-.5z"
}));

export default SvgComponent;