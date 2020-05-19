function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 4
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.281 3.312L11 2.593 8.375 0 5.78 2.593l.719.719 1.875-1.875 1.906 1.875zM4.5 0l.719.718-2.625 2.594L0 .718.719 0l1.875 1.875L4.5 0z"
}));

export default SvgComponent;