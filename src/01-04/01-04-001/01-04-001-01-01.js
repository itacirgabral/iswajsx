function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 31
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 9l-7 7v15h14V16l-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 11.813l-5 5.03V29h10V16.844l-5-5.032z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 21h7v3h-7zM19.906 2.844l-2.531 9.531L19 14l2.844-10.625-1.938-.531zM13 0h2v10h-2zM8.094 2.844l-1.938.531L9 14l1.625-1.625-2.531-9.531zM1.406 9.594L0 11l7 7v-2l.406-.406-6-6z"
}));

export default SvgComponent;