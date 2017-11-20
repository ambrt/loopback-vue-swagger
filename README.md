The api package "myloopapi-1.0.0" is created with <br>
```java -jar swagger-codegen-cli.jar generate -i swag.json -l javascript -o swagcli -DuseES6=true```
and `npm pack`

the errors are:
```

 ERROR  Failed to compile with 7 errors                                                                             13:43:52

 error  in ./node_modules/myloopapi/src/ApiClient.js

Module parse failed: Unexpected token (229:32)
You may need an appropriate loader to handle this file type.
|     * @readonly
|     */
|     static CollectionFormatEnum = {
|         /**
|          * Comma-separated values. Value: <code>csv</code>

 @ ./node_modules/myloopapi/src/index.js 15:0-36
 @ ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/HelloWorld.vue
 @ ./src/components/HelloWorld.vue
 @ ./src/router/index.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://localhost:8080 webpack/hot/dev-server ./src/main.js

 error  in ./node_modules/myloopapi/src/model/InlineResponse200.js

Module parse failed: Unexpected token (69:10)
You may need an appropriate loader to handle this file type.
|     * @member {Number} count
|     */
|     count = undefined;
|
|

 @ ./node_modules/myloopapi/src/index.js 17:0-58
 @ ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/HelloWorld.vue
 @ ./src/components/HelloWorld.vue
 @ ./src/router/index.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://localhost:8080 webpack/hot/dev-server ./src/main.js

 error  in ./node_modules/myloopapi/src/model/InlineResponse2001.js

Module parse failed: Unexpected token (69:11)
You may need an appropriate loader to handle this file type.
|     * @member {Boolean} exists
|     */
|     exists = undefined;
|
|

 @ ./node_modules/myloopapi/src/index.js 18:0-60
 @ ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./src/components/HelloWorld.vue
 @ ./src/components/HelloWorld.vue
 @ ./src/router/index.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://localhost:8080 webpack/hot/dev-server ./src/main.js
```


# my-project



> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
