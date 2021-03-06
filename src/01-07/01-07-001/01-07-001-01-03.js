function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 15v15h15V15H0zM0 0h2v15H0zM12.594 4.406L2 15h2.813l9.218-9.188-1.437-1.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.594 10.594L14.187 15H15v2l5-5-1.406-1.406z"
}));

export default SvgComponent;