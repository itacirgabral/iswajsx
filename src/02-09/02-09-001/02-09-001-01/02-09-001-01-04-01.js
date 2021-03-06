function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 0c-2.623 0-5 1.062-6.719 2.781L.313 4.312l1.375 1.375 1.5-1.5A7.49 7.49 0 018.5 2a7.49 7.49 0 015.313 2.188L17.593 8 19 6.594 15.219 2.78A9.472 9.472 0 008.5 0z"
}));

export default SvgComponent;