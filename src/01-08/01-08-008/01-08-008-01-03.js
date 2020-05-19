function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 15h8v15h-8zM15 0h2v15h-2zM0 15h15v2H0zM21 3h2v12h-2zM27.938 7.219l1.437 1.406L23 15v-2.813l4.938-4.968zM3.938 22.969l-.532 1.937L15 28v-2.094L3.937 22.97z"
}));

export default SvgComponent;