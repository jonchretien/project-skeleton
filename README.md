# Project Skeleton

A starter template to get a vanilla JS and CSS project up and running. This template assumes you don't need to support legacy browsers. Here's what the template does **not** do:
- ES2015+ is not compiled to legacy browser-compatible JavaScript.
- [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are not compiled to legacy browser-compatible CSS.

Features:

- Local dev server via [http-server](https://github.com/http-party/http-server)
- Live reloading via [Nodemon](https://nodemon.io)
- A modified version of Eric Meyer's [Reset CSS](https://meyerweb.com/eric/tools/css/reset/).


## First-Time setup

### node
Install [node.js](https://nodejs.org/en/) through [nvm](https://github.com/creationix/nvm).

```bash
# Install nvm and then node
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
nvm install stable
```

```bash
# Install all package dependencies
npm install
```

To see available script options:

```bash
npm run
```

## Starting the dev server

```bash
npm run start
```

## Identify and fix insecure dependencies

```bash
npm audit
npm audit fix
```

## Build and deploy to production

```bash
npm run build && npm run deploy
```

## Misc.
+ `chmod +x ./bin/foo.sh` to make script in `bin` executable.
