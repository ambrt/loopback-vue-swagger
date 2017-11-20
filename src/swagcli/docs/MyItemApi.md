# Loop.MyItemApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**myItemCount**](MyItemApi.md#myItemCount) | **GET** /myitems/count | Count instances of the model matched by where from the data source.
[**myItemCreate**](MyItemApi.md#myItemCreate) | **POST** /myitems | Create a new instance of the model and persist it into the data source.
[**myItemCreateChangeStreamGetMyitemsChangeStream**](MyItemApi.md#myItemCreateChangeStreamGetMyitemsChangeStream) | **GET** /myitems/change-stream | Create a change stream.
[**myItemCreateChangeStreamPostMyitemsChangeStream**](MyItemApi.md#myItemCreateChangeStreamPostMyitemsChangeStream) | **POST** /myitems/change-stream | Create a change stream.
[**myItemDeleteById**](MyItemApi.md#myItemDeleteById) | **DELETE** /myitems/{id} | Delete a model instance by {{id}} from the data source.
[**myItemExistsGetMyitemsidExists**](MyItemApi.md#myItemExistsGetMyitemsidExists) | **GET** /myitems/{id}/exists | Check whether a model instance exists in the data source.
[**myItemExistsHeadMyitemsid**](MyItemApi.md#myItemExistsHeadMyitemsid) | **HEAD** /myitems/{id} | Check whether a model instance exists in the data source.
[**myItemFind**](MyItemApi.md#myItemFind) | **GET** /myitems | Find all instances of the model matched by filter from the data source.
[**myItemFindById**](MyItemApi.md#myItemFindById) | **GET** /myitems/{id} | Find a model instance by {{id}} from the data source.
[**myItemFindOne**](MyItemApi.md#myItemFindOne) | **GET** /myitems/findOne | Find first instance of the model matched by filter from the data source.
[**myItemPatchOrCreate**](MyItemApi.md#myItemPatchOrCreate) | **PATCH** /myitems | Patch an existing model instance or insert a new one into the data source.
[**myItemPrototypePatchAttributes**](MyItemApi.md#myItemPrototypePatchAttributes) | **PATCH** /myitems/{id} | Patch attributes for a model instance and persist it into the data source.
[**myItemReplaceByIdPostMyitemsidReplace**](MyItemApi.md#myItemReplaceByIdPostMyitemsidReplace) | **POST** /myitems/{id}/replace | Replace attributes for a model instance and persist it into the data source.
[**myItemReplaceByIdPutMyitemsid**](MyItemApi.md#myItemReplaceByIdPutMyitemsid) | **PUT** /myitems/{id} | Replace attributes for a model instance and persist it into the data source.
[**myItemReplaceOrCreatePostMyitemsReplaceOrCreate**](MyItemApi.md#myItemReplaceOrCreatePostMyitemsReplaceOrCreate) | **POST** /myitems/replaceOrCreate | Replace an existing model instance or insert a new one into the data source.
[**myItemReplaceOrCreatePutMyitems**](MyItemApi.md#myItemReplaceOrCreatePutMyitems) | **PUT** /myitems | Replace an existing model instance or insert a new one into the data source.
[**myItemUpdateAll**](MyItemApi.md#myItemUpdateAll) | **POST** /myitems/update | Update instances of the model matched by {{where}} from the data source.
[**myItemUpsertWithWhere**](MyItemApi.md#myItemUpsertWithWhere) | **POST** /myitems/upsertWithWhere | Update an existing model instance or insert a new one into the data source based on the where criteria.


<a name="myItemCount"></a>
# **myItemCount**
> InlineResponse200 myItemCount(opts)

Count instances of the model matched by where from the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let opts = { 
  'where': "where_example" // String | Criteria to match model instances
};

apiInstance.myItemCount(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemCreate"></a>
# **myItemCreate**
> MyItem myItemCreate(opts)

Create a new instance of the model and persist it into the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let opts = { 
  'data': new Loop.MyItem() // MyItem | Model instance data
};

apiInstance.myItemCreate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**MyItem**](MyItem.md)| Model instance data | [optional] 

### Return type

[**MyItem**](MyItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemCreateChangeStreamGetMyitemsChangeStream"></a>
# **myItemCreateChangeStreamGetMyitemsChangeStream**
> File myItemCreateChangeStreamGetMyitemsChangeStream(opts)

Create a change stream.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let opts = { 
  'options': "options_example" // String | 
};

apiInstance.myItemCreateChangeStreamGetMyitemsChangeStream(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **options** | **String**|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemCreateChangeStreamPostMyitemsChangeStream"></a>
# **myItemCreateChangeStreamPostMyitemsChangeStream**
> File myItemCreateChangeStreamPostMyitemsChangeStream(opts)

Create a change stream.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let opts = { 
  'options': "options_example" // String | 
};

apiInstance.myItemCreateChangeStreamPostMyitemsChangeStream(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **options** | **String**|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemDeleteById"></a>
# **myItemDeleteById**
> Object myItemDeleteById(id)

Delete a model instance by {{id}} from the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let id = "id_example"; // String | Model id


apiInstance.myItemDeleteById(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemExistsGetMyitemsidExists"></a>
# **myItemExistsGetMyitemsidExists**
> InlineResponse2001 myItemExistsGetMyitemsidExists(id)

Check whether a model instance exists in the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let id = "id_example"; // String | Model id


apiInstance.myItemExistsGetMyitemsidExists(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemExistsHeadMyitemsid"></a>
# **myItemExistsHeadMyitemsid**
> InlineResponse2001 myItemExistsHeadMyitemsid(id)

Check whether a model instance exists in the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let id = "id_example"; // String | Model id


apiInstance.myItemExistsHeadMyitemsid(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemFind"></a>
# **myItemFind**
> [MyItem] myItemFind(opts)

Find all instances of the model matched by filter from the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\"something\":\"value\"})
};

apiInstance.myItemFind(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**[MyItem]**](MyItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemFindById"></a>
# **myItemFindById**
> MyItem myItemFindById(id, opts)

Find a model instance by {{id}} from the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let id = "id_example"; // String | Model id

let opts = { 
  'filter': "filter_example" // String | Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})
};

apiInstance.myItemFindById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **filter** | **String**| Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**MyItem**](MyItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemFindOne"></a>
# **myItemFindOne**
> MyItem myItemFindOne(opts)

Find first instance of the model matched by filter from the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\"something\":\"value\"})
};

apiInstance.myItemFindOne(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**MyItem**](MyItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemPatchOrCreate"></a>
# **myItemPatchOrCreate**
> MyItem myItemPatchOrCreate(opts)

Patch an existing model instance or insert a new one into the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let opts = { 
  'data': new Loop.MyItem() // MyItem | Model instance data
};

apiInstance.myItemPatchOrCreate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**MyItem**](MyItem.md)| Model instance data | [optional] 

### Return type

[**MyItem**](MyItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemPrototypePatchAttributes"></a>
# **myItemPrototypePatchAttributes**
> MyItem myItemPrototypePatchAttributes(id, opts)

Patch attributes for a model instance and persist it into the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let id = "id_example"; // String | MyItem id

let opts = { 
  'data': new Loop.MyItem() // MyItem | An object of model property name/value pairs
};

apiInstance.myItemPrototypePatchAttributes(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| MyItem id | 
 **data** | [**MyItem**](MyItem.md)| An object of model property name/value pairs | [optional] 

### Return type

[**MyItem**](MyItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemReplaceByIdPostMyitemsidReplace"></a>
# **myItemReplaceByIdPostMyitemsidReplace**
> MyItem myItemReplaceByIdPostMyitemsidReplace(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let id = "id_example"; // String | Model id

let opts = { 
  'data': new Loop.MyItem() // MyItem | Model instance data
};

apiInstance.myItemReplaceByIdPostMyitemsidReplace(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**MyItem**](MyItem.md)| Model instance data | [optional] 

### Return type

[**MyItem**](MyItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemReplaceByIdPutMyitemsid"></a>
# **myItemReplaceByIdPutMyitemsid**
> MyItem myItemReplaceByIdPutMyitemsid(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let id = "id_example"; // String | Model id

let opts = { 
  'data': new Loop.MyItem() // MyItem | Model instance data
};

apiInstance.myItemReplaceByIdPutMyitemsid(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**MyItem**](MyItem.md)| Model instance data | [optional] 

### Return type

[**MyItem**](MyItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemReplaceOrCreatePostMyitemsReplaceOrCreate"></a>
# **myItemReplaceOrCreatePostMyitemsReplaceOrCreate**
> MyItem myItemReplaceOrCreatePostMyitemsReplaceOrCreate(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let opts = { 
  'data': new Loop.MyItem() // MyItem | Model instance data
};

apiInstance.myItemReplaceOrCreatePostMyitemsReplaceOrCreate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**MyItem**](MyItem.md)| Model instance data | [optional] 

### Return type

[**MyItem**](MyItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemReplaceOrCreatePutMyitems"></a>
# **myItemReplaceOrCreatePutMyitems**
> MyItem myItemReplaceOrCreatePutMyitems(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let opts = { 
  'data': new Loop.MyItem() // MyItem | Model instance data
};

apiInstance.myItemReplaceOrCreatePutMyitems(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**MyItem**](MyItem.md)| Model instance data | [optional] 

### Return type

[**MyItem**](MyItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemUpdateAll"></a>
# **myItemUpdateAll**
> InlineResponse2002 myItemUpdateAll(opts)

Update instances of the model matched by {{where}} from the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Loop.MyItem() // MyItem | An object of model property name/value pairs
};

apiInstance.myItemUpdateAll(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**MyItem**](MyItem.md)| An object of model property name/value pairs | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="myItemUpsertWithWhere"></a>
# **myItemUpsertWithWhere**
> MyItem myItemUpsertWithWhere(opts)

Update an existing model instance or insert a new one into the data source based on the where criteria.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.MyItemApi();

let opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Loop.MyItem() // MyItem | An object of model property name/value pairs
};

apiInstance.myItemUpsertWithWhere(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**MyItem**](MyItem.md)| An object of model property name/value pairs | [optional] 

### Return type

[**MyItem**](MyItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

