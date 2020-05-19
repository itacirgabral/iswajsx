function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 26a5.5 5.5 0 110 11 5.5 5.5 0 010-11z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 0v22L9 37l-1.406-1.406L22 21.187V5H0V0h24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 5v16.188L7.594 35.593 9 37H7.562l-1.406-1.406L21 20.75V6H0V5h22zM9 37l15-15v1.438L10.406 37H9z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 27a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"
}));

export default SvgComponent;