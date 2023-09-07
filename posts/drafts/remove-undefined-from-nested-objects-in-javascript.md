1. The accepted answer in SO (https://stackoverflow.com/questions/25421233/javascript-removing-undefined-fields-from-an-object)
   is fine, but doesn't cater for Dates (which are objects and get removed) and turns Arrays into objects.

2. As a long time SO lurker I don't have the reputation to comment/suggest/edit so a blog post it is

3. Instead of:

```js
const removeEmpty = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] === Object(obj[key])) newObj[key] = removeEmpty(obj[key]);
    else if (obj[key] !== undefined) newObj[key] = obj[key];
  });
  return newObj;
};
```

Do:

```js
const removeEmpty = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] === Object(obj[key]) && !(obj[key] instanceof Date) && obj[key].constructor !== Array) newObj[key] = removeEmpty(obj[key]);
    else if (obj[key] !== undefined) newObj[key] = obj[key];
  });
  return newObj;
};
```

4. Show examples of with and without the code change

5. Might be other cases not considered

6. Another blog post or the same blog post about not being able to edit SO.
   https://stackoverflow.com/questions/9268259/how-do-you-prevent-install-of-devdependencies-npm-modules-for-node-js-package
   Says `--production` doesn't work, yet it's now the only thing that does work.
   Possibly another blog post for SEO reasons.
