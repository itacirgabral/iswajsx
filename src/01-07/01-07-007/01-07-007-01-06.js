function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 22a8 8 0 11-16 0 8 8 0 1116 0zM11.594 2.406l1.437 1.406L3 13.813V14H1v-1L11.594 2.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0v13H7V0h2zM19.594 9.594L21 11l-5 5a9.907 9.907 0 00-1.375-1.469l4.969-4.937z"
}));

export default SvgComponent;