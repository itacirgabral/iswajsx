function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.281.438L0 1.5C1.905 4.269 4.568 6 7.5 6c2.932 0 5.595-1.731 7.5-4.5L13.719.437C12.553 2.845 10.205 4.5 7.5 4.5 4.795 4.5 2.447 2.844 1.281.437z"
}));

export default SvgComponent;