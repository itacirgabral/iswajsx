function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8.636V15h6.364l-.707-.707H.707v-4.95L0 8.636z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.97 1.565a3 3 0 00-4.242 0L5.657 8.636C4.603 9.69 1.414 10.05 1.414 10.05l3.536 3.536s.36-3.189 1.414-4.243l7.071-7.07A2 2 0 0116.263 5.1l-2.828 2.828.707.707 2.829-2.828a3 3 0 000-4.243z"
}));

export default SvgComponent;