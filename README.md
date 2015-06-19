# resemantic

> Refactoring HTML, CSS, JS

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install resemantic --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('resemantic');
```

## The "resemantic" task

### Overview
In your project's Gruntfile, add a section named `resemantic` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  resemantic: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.pattern
Type: `RegExp`
Default value: `/(class|id)[ \t]*=[ \t]*"([^"]+)"/gm,`

#### options.indent
Type: `Number`
Default value: `4`


## Release History
_(Nothing yet)_
