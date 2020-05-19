function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 15v15h8V15h-8zM28 8l-5 5h2.813l3.593-3.594L28 8zM0 15h13v3H0zM15 0h2v13h-2zM6 18l7 7v-2.813L8.812 18H6z"
}));

export default SvgComponent;