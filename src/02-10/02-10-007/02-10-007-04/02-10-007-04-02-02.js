function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 12.109l.719-.719L4.5 13.171l1.781-1.78.719.718-2.5 2.5-2.5-2.5zM0 .656C.466.236.977 0 1.5 0c1.165 0 2.232 1.144 3.031 3H1.594C1.262 2.382.894 2 .5 2a.835.835 0 00-.5.188V.655zm0 20.157A.835.835 0 00.5 21c.394 0 .762-.382 1.094-1H4.53c-.799 1.856-1.866 3-3.031 3-.523 0-1.034-.236-1.5-.656v-1.532zM2.031 4h2.875c.39 1.152.661 2.516.844 4H2.812c-.165-1.59-.429-2.97-.78-4zm0 15c.352-1.03.616-2.41.781-4H5.75c-.183 1.484-.455 2.848-.844 4H2.031z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 9.109l.719-.719L4.5 10.171l1.781-1.78.719.718-2.5 2.5-2.5-2.5z"
}));

export default SvgComponent;