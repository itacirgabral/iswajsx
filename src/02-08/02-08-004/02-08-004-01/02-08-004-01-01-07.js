function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M34 6.686V18H22.686L34 6.686z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.18.322l8.706 8.707a2 2 0 002.829 0c.39-.39.574-.903.574-1.415l-.088-1.149a4.01 4.01 0 011.193-2.828 4 4 0 015.657 0l3.757 3.756c1.7 1.7 7.07 1.415 7.07 1.415l-7.07 7.07s.285-5.37-1.415-7.07L19.637 5.05a2 2 0 00-2.829 0c-.39.39-.574.902-.574 1.414l.088 1.15a4.01 4.01 0 01-1.193 2.828 4 4 0 01-5.657 0L.766 1.737 2.18.322z"
}));

export default SvgComponent;