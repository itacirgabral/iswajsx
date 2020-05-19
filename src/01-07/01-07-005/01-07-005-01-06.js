function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 15v15h8V15h-8zM10 0v13h2V0h-2zM18.5 2l-6.344 11h2.281L20.22 3 18.5 2zM0 15v2h8v-2H0zM21.656 9.344L18 13h2.813l2.25-2.25-1.407-1.406zM0 17l8 8v-2.875L2.937 17H0z"
}));

export default SvgComponent;