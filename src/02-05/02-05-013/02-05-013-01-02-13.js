function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 23V0h-2v23h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.813 11.125l-1.438 1.406c-1.772 1.436-4.49 1.938-7.063 1.938-2.571 0-5.29-.502-7.062-1.938l-.719.719a10.97 10.97 0 007.781 3.219 10.97 10.97 0 007.782-3.219l1.406-1.406-.688-.719zM7.781 9L0 16.781V9h7.781zm-2.406 1H1v4.344L5.375 10zM18 23l-7 7-7-7h14zm-2.438 1H6.438L11 28.563 15.563 24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.563 24L11 28.563 6.437 24h9.125zM5.375 10L1 14.344V10h4.375z",
  fill: "#fff"
}));

export default SvgComponent;