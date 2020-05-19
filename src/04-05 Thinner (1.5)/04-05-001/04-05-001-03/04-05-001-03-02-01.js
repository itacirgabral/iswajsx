function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4.25v1.5h4v-1.5H0zm11 0v1.5h4v-1.5h-4zM7.5 3a2 2 0 00-2 2v.75h4V5a2 2 0 00-2-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 5.75V4a4 4 0 118 0v1.75h-.844L10.5 4c0-1.38-1.343-2.5-3-2.5s-3 1.12-3 2.5l-.156 1.75H3.5z"
}));

export default SvgComponent;