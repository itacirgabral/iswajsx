function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 5h8v15H9zM0 0v3c2.837 0 5.35.736 7 1.875V3h2.375C7.178 1.165 3.798 0 0 0zM0 18v2h7v-2H0z"
}));

export default SvgComponent;