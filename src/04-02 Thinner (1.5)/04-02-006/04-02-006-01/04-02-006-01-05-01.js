function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 8c-.022-.726.305-1.332.594-1.969L.469 3.875l.687-.719L3.25 5.25a4.17 4.17 0 01.656-.5L3 1.406l.969-.281.844 3.156c.37-.133.774-.177 1.187-.218V0h1v4.063c.413.04.816.085 1.188.218l.843-3.156.969.281-.906 3.344c.243.153.452.308.656.5l2.094-2.094.687.719-2.125 2.156C10.775 6.611 11 7.286 11 8h-1c0-1.38-1.567-2.5-3.5-2.5S3 6.62 3 8H2z"
}));

export default SvgComponent;