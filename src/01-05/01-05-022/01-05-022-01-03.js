function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.219 2.219L20 8v21H8V13l6.219-10.781zM8 20v2H0v-2h8zM6.563-.063l2.843 10.594L8 13 4.625.437l1.938-.5z"
}));

export default SvgComponent;