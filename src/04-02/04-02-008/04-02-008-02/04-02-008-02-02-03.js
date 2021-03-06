function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 10h4V9H3v1zM3 4h4V3H3v1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 9.5L3.5 13l.688-.719L1.438 9.5l2.968-3-2.968-3L4.188.719 3.5 0 0 3.5l3 3-3 3zM17 10h4V9h-4v1zM17 4h4V3h-4v1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 9.5l3.5 3.5.688-.719-2.75-2.781 2.968-3-2.968-3 2.75-2.781L17.5 0 14 3.5l3 3-3 3z"
}));

export default SvgComponent;