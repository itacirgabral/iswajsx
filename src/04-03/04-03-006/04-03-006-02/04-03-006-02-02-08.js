function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.55 5.865l-1.415-1.414-7.071 7.071 1.414 1.415zM6.732 1.554L5 .554l-5 8.66 1.732 1zM15.445 11l-1-1.732-8.66 5 1 1.732z"
}));

export default SvgComponent;