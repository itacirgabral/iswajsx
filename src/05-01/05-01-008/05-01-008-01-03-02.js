function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 4v1h5.5a3.5 3.5 0 110 7H1v2h8A5 5 0 109 4H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.25.25L0 4.5l4.25 4.25.688-.719-3.5-3.531 3.5-3.531L4.25.25z"
}));

export default SvgComponent;