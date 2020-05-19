function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 5,
  height: 5
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v1.281L1.094.375l-.719.719L1.781 2.5.375 3.906l.719.719L2 3.719V5h1V3.719l.906.906.719-.719L3.219 2.5l1.406-1.406-.719-.719L3 1.281V0H2z"
}));

export default SvgComponent;