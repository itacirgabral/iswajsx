function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 7v23h-2V7h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.813 15.125l-1.438 1.406c-1.772 1.436-4.49 1.938-7.063 1.938-2.571 0-5.29-.502-7.062-1.938l-.719.719a10.97 10.97 0 007.781 3.219 10.97 10.97 0 007.782-3.219l1.406-1.406-.688-.719zM7.781 13L0 20.781V13h7.781zm-2.406 1H1v4.344L5.375 14zM18 7l-7-7-7 7h14zm-2.438-1H6.438L11 1.437 15.563 6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.563 6L11 1.437 6.437 6h9.125zM5.375 14L1 18.344V14h4.375z",
  fill: "#fff"
}));

export default SvgComponent;