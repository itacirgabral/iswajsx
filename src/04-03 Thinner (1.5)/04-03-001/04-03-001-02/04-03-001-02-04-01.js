function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.626.406C.948 3.164.244 6.312 0 9.5c-.038 3.255 1.063 6.295 2.625 9.094C7.006 17.952 9 13.202 9 9.5 9 5.798 6.839 1.21 2.626.406zm.78 1.688C5.802 3.274 7.5 6.132 7.5 9.5c0 3.368-1.699 6.227-4.093 7.406C2.23 14.68 1.5 12.194 1.5 9.5s.73-5.179 1.906-7.406z"
}));

export default SvgComponent;