function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M29.874 5.126C23.04-1.71 11.96-1.71 5.126 5.126c-6.835 6.834-6.835 17.914 0 24.748 6.834 6.835 17.914 6.835 24.748 0 6.835-6.834 6.835-17.914 0-24.748zM28.46 6.54c6.053 6.053 6.053 15.867 0 21.92-6.053 6.053-15.867 6.053-21.92 0-6.053-6.053-6.053-15.867 0-21.92 6.053-6.053 15.867-6.053 21.92 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.202.176H.176v15.026c.28-2.13.924-4.213 1.989-6.143V2.165h6.894C10.989 1.1 13.072.457 15.202.175z"
}));

export default SvgComponent;