/**
 *
 * @param {Object{className: value}} classNamesObject
 * @returns {String} className string
 */

function classNames(classNamesObject) {
  const classes = [];

  for (const className in classNamesObject) {
    if (classNamesObject[className]) {
      classes.push(className);
    }
  }

  return classes.join(' ');
}

export default classNames;
