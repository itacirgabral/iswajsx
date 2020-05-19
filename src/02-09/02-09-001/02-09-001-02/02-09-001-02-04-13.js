function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 9C8.328 9 5.042 7.45 2.687 5L.813 3.187l1.375-1.374 1.374 1.343C5.91 4.307 8.822 5 12 5c3.153 0 6.043-.677 8.375-1.813L23.594 0 25 1.406l-3.844 3.75C18.813 7.514 15.592 9 12 9z"
}));

export default SvgComponent;