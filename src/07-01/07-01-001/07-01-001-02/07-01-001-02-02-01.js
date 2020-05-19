function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 74,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M27 3H0v8h74V3H47v6H27V3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27 3v6h20V3H27z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M40.406 0L31 5.438V7h12V5h-7.313L43 .781V0h-2.594z"
}));

export default SvgComponent;