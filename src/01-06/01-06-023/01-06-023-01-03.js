function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 15h15v15H6zM6 0h2v15H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.594 9.594L26 11l-5 5v-1h-1.813l5.407-5.406zM1.406 18.594L6 23.187V26l-6-6 1.406-1.406z"
}));

export default SvgComponent;