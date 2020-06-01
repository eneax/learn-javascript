# How to run and load JS

**The `script` tag**

The script tag allows us to write JavaScript inside an HTML file.
In order for the script tag to select an element on the page, the element itself must be on the page.
Always remember to add the script tag just before the closing body tag, otherwise the script will look for code that is not on the page yet.

**Import a `.js` file**

Use a script tag for a source attribute with a relative path, in order to import a new JavaScript file.

**Run JS in `node.js`**:

Node.js is JavaScript that can run in the server, instead of making it run in the context of a website:

- open your terminal and type `node`. To exit, press `^C`;
- or, from the terminal, navigate to a folder containing a `.js` file and type `node example.js` to run whatever code contained inside `example.js` file. When it will finish executing, it will exit automatically.

## Things to keep in mind

- script tags are not self closing -> `<script></script>`
- if you use a script tag with a source attribute, then you cannot run JavaScript code inside that script
- You can have multiple script tags, but the main drawback is that it will increase the number of requests made by the page and the performance will be bad
- We can avoid having multiple scripts, using modules or code splitting
- Module allow us to bundle several script tags into one unique file
- Code splitting consists in splitting the script into many JS files and have them load on demand
