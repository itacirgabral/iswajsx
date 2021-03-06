function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 15c-.022-.726.305-1.332.594-1.969l-2.125-2.156.687-.719L7.25 12.25a4.17 4.17 0 01.656-.5L7 8.406l.969-.281.843 3.156c.372-.133.775-.177 1.188-.219V7h1v4.063c.413.04.816.085 1.188.218l.843-3.156.969.281-.906 3.344c.243.153.452.308.656.5l2.094-2.094.687.719-2.125 2.156c.369.58.594 1.255.594 1.969h-1c0-1.38-1.567-2.5-3.5-2.5S7 13.62 7 15H6z"
}));

export default SvgComponent;