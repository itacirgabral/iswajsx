function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 6C0 6 0 14 0 14c0 7 12 7 12 7h8V6h-8zm0 4v9c-9 0-9-4-9-4 0-5 9-5 9-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.656 1.344L17 7h3v1.25l4.781-4.781-2.125-2.125z"
}));

export default SvgComponent;