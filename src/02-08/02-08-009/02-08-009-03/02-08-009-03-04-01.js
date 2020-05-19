function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v8a3 3 0 003 3 2.98 2.98 0 002-.781V14a3 3 0 003 3 2.98 2.98 0 002-.781V20a4 4 0 004 4 6 6 0 006-6h-2a4 4 0 01-4 4 2 2 0 01-2-2v-8.563L8.719 14.72A1.015 1.015 0 018 15a1 1 0 01-1-1V5.437L3.719 8.72A1.015 1.015 0 013 9a1 1 0 01-1-1V0H0z"
}));

export default SvgComponent;