function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 18a8 8 0 11-16 0 8 8 0 1116 0zM14 0v10a9.978 9.978 0 00-2-1.188V0h2zM19.594 6.406L21 7.813l-4.656 4.656a9.962 9.962 0 00-1.282-1.531l4.532-4.532z"
}));

export default SvgComponent;