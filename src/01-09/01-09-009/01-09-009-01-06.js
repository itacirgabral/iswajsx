function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 21a8 8 0 11-16 0 8 8 0 1116 0zM6 0C3 0 3 3 3 3v3h2V3c0-1 1-1 1-1 1 0 1 1 1 1v8.063c.326-.033.665-.063 1-.063.335 0 .674.03 1 .063V3c0-3-3-3-3-3zM13.906 3.031c-1.518.098-2.375 1.563-2.375 1.563l-1.5 2.593 1.75 1 1.5-2.593c.375-.65.952-.538 1.219-.438.057.033-.04-.033.125.063.866.5.375 1.375.375 1.375l-3.031 5.218c.623.27 1.2.616 1.75 1l3-5.218c1.5-2.598-1.094-4.094-1.094-4.094-.65-.375-1.213-.501-1.719-.469zM19.406 10.094c-.837.05-1.5.406-1.5.406L15.313 12l1 1.75 2.593-1.5c.866-.5 1.375.344 1.375.344.5.866-.375 1.375-.375 1.375l-3.281 2c.32.548.6 1.141.813 1.75l3.468-2c2.598-1.5 1.094-4.125 1.094-4.125-.75-1.3-1.757-1.55-2.594-1.5z"
}));

export default SvgComponent;