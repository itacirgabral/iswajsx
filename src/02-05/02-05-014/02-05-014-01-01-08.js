function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22.343 5.201L3.958 23.586 5.372 25 23.757 6.615l-1.414-1.414zM13 11L7.5 5.5 13 0v11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28 10.9L18.1 1H28v9.9zM24 16c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2zM6 18L.5 12.5 6 7v11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 23c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2z"
}));

export default SvgComponent;