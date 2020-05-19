function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22 1v8h-8l1.5-1.5h5v-5L22 1zM10.5 0c2.623 0 5 1.062 6.719 2.781l1.468 1.531-1.375 1.375-1.5-1.5A7.49 7.49 0 0010.5 2a7.49 7.49 0 00-5.313 2.188L1.408 8 0 6.594 3.781 2.78A9.472 9.472 0 0110.5 0z"
}));

export default SvgComponent;