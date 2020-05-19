function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 74,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M47 5h27V3H47v2zM27 3H0v2h27V3zM0 9h74v2H0V9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27 3v2H0v4h74V5H47V3H27z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M40.406 0L31 5.438V7h12V5h-7.313L43 .781V0h-2.594z"
}));

export default SvgComponent;