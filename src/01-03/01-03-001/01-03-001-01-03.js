function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0h2v15H8zM20.594 4.406L10 15h2.813l9.218-9.188-1.437-1.406zM8 15h15v15H8zM1.625 15.813L.219 17.218 8 25v-2.813l-6.375-6.375z"
}));

export default SvgComponent;