function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.156 0c.202.31.381.645.563.969.034.06.06.126.093.187.1.182.217.347.313.532A17.234 17.234 0 019 9.5c0 2.817-.685 5.46-1.875 7.813-.096.184-.213.349-.313.53-.033.062-.059.127-.093.188-.023.041-.04.084-.063.125-.162.283-.323.572-.5.844-.152-.07-.296-.165-.437-.25C2.349 17.005 0 13.557 0 9.5S2.348 1.995 5.719.25c.141-.085.285-.18.437-.25zm-.75 2.719C3.348 4.272 2 6.724 2 9.5s1.348 5.228 3.406 6.781A15.263 15.263 0 007 9.5c0-2.443-.583-4.73-1.594-6.781z"
}));

export default SvgComponent;