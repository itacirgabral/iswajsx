function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 10v2h-9v-2h9zm-12 0v2H0v-2h13zM19 5L14.5.5 10 5h9zM25 4v14l7-7-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 5v10c0 1.105-.672 2-1.5 2s-1.5-.895-1.5-2v-1H6v1c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4V5h-1z"
}));

export default SvgComponent;