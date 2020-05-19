function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 14v15h8V14H8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M9 15h6v13H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.281 6.063l-3.656 6.343-.344.594-.594 1H16l.344-.594L20 7.062l-1.719-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0h2v14h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.719 6.063L6 7.063l3.656 6.343L10 14h2.313l-.594-1-.344-.594-3.656-6.344zM0 14h8v2H0zM21.594 17.594L16 23.187V26l7-7-1.406-1.406z"
}));

export default SvgComponent;