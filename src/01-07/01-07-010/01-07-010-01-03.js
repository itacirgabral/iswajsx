function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 9h15v15H14zM11.344 3.344L5.688 9H8.5l2.844-2.844L14.188 9H17l-5.656-5.656zM0 9h14v2H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M31.938 4.063L27 9h2v.813l4.375-4.344-1.438-1.407zM3.406 5.563L1.97 6.968 14 19v-2.813L3.406 5.563z"
}));

export default SvgComponent;