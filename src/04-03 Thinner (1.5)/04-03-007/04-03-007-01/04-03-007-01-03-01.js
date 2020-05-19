function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 0A3.5 3.5 0 000 3.5C0 6.765 1.229 9.747 3.25 12l1.344-1.344a10.688 10.688 0 01-2.157-3.844C2.772 6.92 3.131 7 3.5 7a3.5 3.5 0 000-7z"
}));

export default SvgComponent;