function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.799 22.343L1.414 3.958 0 5.372l18.385 18.385 1.414-1.414zM19 18l5.5-5.5L19 7v11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.1 28l9.9-9.9V28h-9.9zM8 23c0-6.075 4.925-11 11-11v1c-5.523 0-10 4.477-10 10v2H8v-2zM12 11l5.5-5.5L12 0v11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 16C1 9.925 5.925 5 12 5v1C6.477 6 2 10.477 2 16v2H1v-2z"
}));

export default SvgComponent;