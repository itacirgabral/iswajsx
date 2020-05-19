function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 4
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.25.438L.406 3.28 1.125 4l2.156-2.125L5.406 4l2.125-2.125L9.688 4l2.124-2.125L13.97 4l.719-.719L11.844.437 9.688 2.563 7.562.437 5.406 2.563 3.25.437z"
}));

export default SvgComponent;