function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 5,
  height: 5
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 0h1v5H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.415.817l.5.866-4.33 2.5-.5-.866z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.085 1.683l.5-.866 4.33 2.5-.5.866z"
}));

export default SvgComponent;