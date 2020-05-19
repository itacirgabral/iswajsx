function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.201 22.343L23.586 3.958 25 5.372 6.615 23.757l-1.414-1.414zM6 18L.5 12.5 6 7v11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.9 28L1 18.1V28h9.9zM17 23c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2zM13 11L7.5 5.5 13 0v11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 16c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2z"
}));

export default SvgComponent;