function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.281 5.562L0 4.499C1.905 1.732 4.568 0 7.5 0c2.932 0 5.595 1.732 7.5 4.5l-1.281 1.063C12.553 3.156 10.205 1.499 7.5 1.499c-2.705 0-5.053 1.657-6.219 4.063z"
}));

export default SvgComponent;