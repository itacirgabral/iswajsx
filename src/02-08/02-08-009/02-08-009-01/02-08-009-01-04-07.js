function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.322.121L10.101 7.9a1 1 0 001.414 0c.195-.195.31-.45.31-.707v-4.64l1.988 1.989 5.48 5.48a3 3 0 004.243 0c1.952-1.953 2.269-4.802.707-6.364l1.414-1.414C28 4.586 27.683 8.7 24.95 11.435a5 5 0 01-7.071 0L13.79 7.347a2.98 2.98 0 01-.862 1.967 3 3 0 01-4.243 0L.908 1.536 2.322.12z"
}));

export default SvgComponent;