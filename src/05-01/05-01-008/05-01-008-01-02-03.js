function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 9h42v4H0V9zM30 6V0h-6v1h5v5h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.719 1L12 1.719l1.344 1.312C15.176 4.864 17.772 7 20.5 7c2.728 0 5.324-2.136 7.156-3.969L28 2.687 27.25 2l-.313.313C25.288 3.962 23.02 4 20.5 4c-2.52 0-4.786-.036-6.438-1.688L12.72 1z"
}));

export default SvgComponent;