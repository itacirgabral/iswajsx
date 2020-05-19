function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 15h15v15H8zM10 3v12H8V3h2zM15 0v15h-2V0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27.594 9.594L29 11l-6 6v-2h-.844l5.438-5.406zM1.406 15.594L8 22.188V25l-8-8 1.406-1.406z"
}));

export default SvgComponent;