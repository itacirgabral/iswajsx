function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 14a8 8 0 110 16 8 8 0 010-16zM2 0v14H0V0h2zM11.313 4.688l1.406 1.406L4.813 14H2l9.313-9.313zM18.594 10.594L20 12l-4 4a9.907 9.907 0 00-1.375-1.469l3.969-3.937z"
}));

export default SvgComponent;