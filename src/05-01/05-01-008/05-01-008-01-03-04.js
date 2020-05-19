function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 4v1H4.5a3.5 3.5 0 100 7H13v2H5A5 5 0 115 4h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.75.25L14 4.5 9.75 8.75l-.688-.719 3.5-3.531-3.5-3.531L9.75.25z"
}));

export default SvgComponent;