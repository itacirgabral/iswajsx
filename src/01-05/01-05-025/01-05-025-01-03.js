function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 0v27H8V0l6 6 6-6zM4.469 11.969l1.406 1.437-2.813 2.813L8 21.187V24L.219 16.219l4.25-4.25z"
}));

export default SvgComponent;