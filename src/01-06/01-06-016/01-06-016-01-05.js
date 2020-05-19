function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 6v15h8V6h-8zm-2.125.094C-.013 6.973 0 14 0 14c0 5.179 6.551 6.493 9.969 6.844v-1.938C3.016 18.351 3 15 3 15c0-3.478 4.317-4.521 6.969-4.844V6.094c-.03.002-.065-.003-.094 0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M13 7h3v13h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.344.344L6.219 2.469 8.75 5H13L8.344.344z"
}));

export default SvgComponent;