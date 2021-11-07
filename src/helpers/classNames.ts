interface classNamesObjectInterface {
  [key: string]: string | boolean | undefined;
}

function classNames(classNamesObject: classNamesObjectInterface): string {
  const classes: Array<string> = [];

  for (const className in classNamesObject) {
    if (classNamesObject[className]) {
      classes.push(className);
    }
  }

  return classes.join(' ');
}

export default classNames;
