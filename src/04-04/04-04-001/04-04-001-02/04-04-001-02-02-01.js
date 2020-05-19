function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 6h11v2H6zM2 5h1v4H2zM20 5h1v4h-1zM20.5 0l-2.594 4.469.875.531L20.5 2.031 22.219 5l.875-.531L20.5 0zM2.5 0L-.094 4.469.781 5 2.5 2.031 4.219 5l.875-.531L2.5 0z"
}));

export default SvgComponent;