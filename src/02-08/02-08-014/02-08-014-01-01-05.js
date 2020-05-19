function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 18l7-7 7 7H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 0v18a5 5 0 01-5 5h-3c-3.314 0-6-2.239-6-5h6a3 3 0 006 0V0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M43 12v1H14v-1h29zM6 12v1H0v-1h6zM27 7l7-7 7 7H27z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M35 7v12a4 4 0 01-4 4h-2c-3.866 0-7-2.686-7-6h7c0 2.21.895 4 2 4a2 2 0 002-2V7h2z"
}));

export default SvgComponent;