function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 0c-.022.726.305 1.332.594 1.969L.469 4.125l.687.719L3.25 2.75c.204.192.413.347.656.5L3 6.594l.969.281.844-3.156c.37.133.774.177 1.187.219V8h1V3.937c.413-.04.816-.085 1.188-.218l.843 3.156.969-.281-.906-3.344a4.17 4.17 0 00.656-.5l2.094 2.094.687-.719-2.125-2.156C10.775 1.389 11 .714 11 0h-1c0 1.38-1.567 2.5-3.5 2.5S3 1.38 3 0H2z"
}));

export default SvgComponent;