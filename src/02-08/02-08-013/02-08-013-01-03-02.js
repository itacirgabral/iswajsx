function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 39,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M29 0l7 7h-2l-5-5-5 5h-2l7-7zM30 7v12a4 4 0 01-4 4h-2c-3.866 0-7-2.686-7-6h7c0 2.21.895 4 2 4a2 2 0 002-2V7h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M39 13v1H0v-1h39zM14 0l7 7h-2l-5-5-5 5H7l7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 7v12a4 4 0 01-4 4H9c-3.866 0-7-2.686-7-6h7c0 2.21.895 4 2 4a2 2 0 002-2V7h2z"
}));

export default SvgComponent;