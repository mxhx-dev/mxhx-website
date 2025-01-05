# mxhx.dev

Source code for the [MXHX website](https://mxhx.dev/). Built with [Eleventy](https://11ty.dev/).

## Content

Some important directories in this site.

- _learn_: The MXHX documentation, written in Markdown
- _static_: Static asset files, like images and styles, and even HTML that shouldn't be processed by Eleventy
- _\_data_: JSON files containing data used in generating certain pages
- _\_includes_: Shared include files for generating HTML pages

## Prerequisites

Install dependencies.

```sh
npm ci
```

## Run Local Server

```sh
npm start
```

## Build

```sh
npm run build
```

Build output will be in _\_site_ directory.