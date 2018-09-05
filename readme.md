# Bootstrap 4 Base Layout

The Bootstrap 4 Base Layout is set up with npm & webpack. It automatically compiles bootstrap & our custom SCSS files.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
# run with your own local domain & report (e.g. aha-layout-cardorder.local:5000)
# add your local domain to etc/hosts (e.g. aha-layout-cardorder.local)
# start with your desired port (e.g. 5000)
npm run dev -- --open --port 5000

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


##Todo
Fix loading of background images. Webpack doesn't recognize background images directly on elements. It doesn't import them with file-loader & it doesn't change the link correctly when building.

Workaround: Include the image with an <img> tag first, then use it as a background-image. For building change the background-image link temporarily. 
