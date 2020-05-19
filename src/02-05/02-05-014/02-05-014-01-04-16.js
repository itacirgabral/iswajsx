function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.657 5.201l18.385 18.385L22.628 25 4.243 6.615l1.414-1.414zM10 6L15.5.5 21 6H10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 10.9L9.9 1H0v9.9zM5 17c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10H3v1h2zM17 13l5.5-5.5L28 13H17z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 24c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10h-2v1h2z"
}));

export default SvgComponent;