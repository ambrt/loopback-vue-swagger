# Loop.UserApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userChangePassword**](UserApi.md#userChangePassword) | **POST** /Users/change-password | Change a user&#39;s password.
[**userConfirm**](UserApi.md#userConfirm) | **GET** /Users/confirm | Confirm a user registration with identity verification token.
[**userCount**](UserApi.md#userCount) | **GET** /Users/count | Count instances of the model matched by where from the data source.
[**userCreate**](UserApi.md#userCreate) | **POST** /Users | Create a new instance of the model and persist it into the data source.
[**userCreateChangeStreamGetUsersChangeStream**](UserApi.md#userCreateChangeStreamGetUsersChangeStream) | **GET** /Users/change-stream | Create a change stream.
[**userCreateChangeStreamPostUsersChangeStream**](UserApi.md#userCreateChangeStreamPostUsersChangeStream) | **POST** /Users/change-stream | Create a change stream.
[**userDeleteById**](UserApi.md#userDeleteById) | **DELETE** /Users/{id} | Delete a model instance by {{id}} from the data source.
[**userExistsGetUsersidExists**](UserApi.md#userExistsGetUsersidExists) | **GET** /Users/{id}/exists | Check whether a model instance exists in the data source.
[**userExistsHeadUsersid**](UserApi.md#userExistsHeadUsersid) | **HEAD** /Users/{id} | Check whether a model instance exists in the data source.
[**userFind**](UserApi.md#userFind) | **GET** /Users | Find all instances of the model matched by filter from the data source.
[**userFindById**](UserApi.md#userFindById) | **GET** /Users/{id} | Find a model instance by {{id}} from the data source.
[**userFindOne**](UserApi.md#userFindOne) | **GET** /Users/findOne | Find first instance of the model matched by filter from the data source.
[**userLogin**](UserApi.md#userLogin) | **POST** /Users/login | Login a user with username/email and password.
[**userLogout**](UserApi.md#userLogout) | **POST** /Users/logout | Logout a user with access token.
[**userPatchOrCreate**](UserApi.md#userPatchOrCreate) | **PATCH** /Users | Patch an existing model instance or insert a new one into the data source.
[**userPrototypeCountAccessTokens**](UserApi.md#userPrototypeCountAccessTokens) | **GET** /Users/{id}/accessTokens/count | Counts accessTokens of User.
[**userPrototypeCreateAccessTokens**](UserApi.md#userPrototypeCreateAccessTokens) | **POST** /Users/{id}/accessTokens | Creates a new instance in accessTokens of this model.
[**userPrototypeDeleteAccessTokens**](UserApi.md#userPrototypeDeleteAccessTokens) | **DELETE** /Users/{id}/accessTokens | Deletes all accessTokens of this model.
[**userPrototypeDestroyByIdAccessTokens**](UserApi.md#userPrototypeDestroyByIdAccessTokens) | **DELETE** /Users/{id}/accessTokens/{fk} | Delete a related item by id for accessTokens.
[**userPrototypeFindByIdAccessTokens**](UserApi.md#userPrototypeFindByIdAccessTokens) | **GET** /Users/{id}/accessTokens/{fk} | Find a related item by id for accessTokens.
[**userPrototypeGetAccessTokens**](UserApi.md#userPrototypeGetAccessTokens) | **GET** /Users/{id}/accessTokens | Queries accessTokens of User.
[**userPrototypePatchAttributes**](UserApi.md#userPrototypePatchAttributes) | **PATCH** /Users/{id} | Patch attributes for a model instance and persist it into the data source.
[**userPrototypeUpdateByIdAccessTokens**](UserApi.md#userPrototypeUpdateByIdAccessTokens) | **PUT** /Users/{id}/accessTokens/{fk} | Update a related item by id for accessTokens.
[**userPrototypeVerify**](UserApi.md#userPrototypeVerify) | **POST** /Users/{id}/verify | Trigger user&#39;s identity verification with configured verifyOptions
[**userReplaceByIdPostUsersidReplace**](UserApi.md#userReplaceByIdPostUsersidReplace) | **POST** /Users/{id}/replace | Replace attributes for a model instance and persist it into the data source.
[**userReplaceByIdPutUsersid**](UserApi.md#userReplaceByIdPutUsersid) | **PUT** /Users/{id} | Replace attributes for a model instance and persist it into the data source.
[**userReplaceOrCreatePostUsersReplaceOrCreate**](UserApi.md#userReplaceOrCreatePostUsersReplaceOrCreate) | **POST** /Users/replaceOrCreate | Replace an existing model instance or insert a new one into the data source.
[**userReplaceOrCreatePutUsers**](UserApi.md#userReplaceOrCreatePutUsers) | **PUT** /Users | Replace an existing model instance or insert a new one into the data source.
[**userResetPassword**](UserApi.md#userResetPassword) | **POST** /Users/reset | Reset password for a user with email.
[**userSetPassword**](UserApi.md#userSetPassword) | **POST** /Users/reset-password | Reset user&#39;s password via a password-reset token.
[**userUpdateAll**](UserApi.md#userUpdateAll) | **POST** /Users/update | Update instances of the model matched by {{where}} from the data source.
[**userUpsertWithWhere**](UserApi.md#userUpsertWithWhere) | **POST** /Users/upsertWithWhere | Update an existing model instance or insert a new one into the data source based on the where criteria.


<a name="userChangePassword"></a>
# **userChangePassword**
> userChangePassword(oldPassword, newPassword)

Change a user&#39;s password.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let oldPassword = "oldPassword_example"; // String | 

let newPassword = "newPassword_example"; // String | 


apiInstance.userChangePassword(oldPassword, newPassword, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oldPassword** | **String**|  | 
 **newPassword** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userConfirm"></a>
# **userConfirm**
> userConfirm(uid, token, opts)

Confirm a user registration with identity verification token.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let uid = "uid_example"; // String | 

let token = "token_example"; // String | 

let opts = { 
  'redirect': "redirect_example" // String | 
};

apiInstance.userConfirm(uid, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **String**|  | 
 **token** | **String**|  | 
 **redirect** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userCount"></a>
# **userCount**
> InlineResponse200 userCount(opts)

Count instances of the model matched by where from the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let opts = { 
  'where': "where_example" // String | Criteria to match model instances
};

apiInstance.userCount(opts, (error, data, response) => {
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

<a name="userCreate"></a>
# **userCreate**
> User userCreate(opts)

Create a new instance of the model and persist it into the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let opts = { 
  'data': new Loop.User() // User | Model instance data
};

apiInstance.userCreate(opts, (error, data, response) => {
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
 **data** | [**User**](User.md)| Model instance data | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userCreateChangeStreamGetUsersChangeStream"></a>
# **userCreateChangeStreamGetUsersChangeStream**
> File userCreateChangeStreamGetUsersChangeStream(opts)

Create a change stream.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let opts = { 
  'options': "options_example" // String | 
};

apiInstance.userCreateChangeStreamGetUsersChangeStream(opts, (error, data, response) => {
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

<a name="userCreateChangeStreamPostUsersChangeStream"></a>
# **userCreateChangeStreamPostUsersChangeStream**
> File userCreateChangeStreamPostUsersChangeStream(opts)

Create a change stream.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let opts = { 
  'options': "options_example" // String | 
};

apiInstance.userCreateChangeStreamPostUsersChangeStream(opts, (error, data, response) => {
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

<a name="userDeleteById"></a>
# **userDeleteById**
> Object userDeleteById(id)

Delete a model instance by {{id}} from the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let id = "id_example"; // String | Model id


apiInstance.userDeleteById(id, (error, data, response) => {
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

<a name="userExistsGetUsersidExists"></a>
# **userExistsGetUsersidExists**
> InlineResponse2001 userExistsGetUsersidExists(id)

Check whether a model instance exists in the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let id = "id_example"; // String | Model id


apiInstance.userExistsGetUsersidExists(id, (error, data, response) => {
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

<a name="userExistsHeadUsersid"></a>
# **userExistsHeadUsersid**
> InlineResponse2001 userExistsHeadUsersid(id)

Check whether a model instance exists in the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let id = "id_example"; // String | Model id


apiInstance.userExistsHeadUsersid(id, (error, data, response) => {
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

<a name="userFind"></a>
# **userFind**
> [User] userFind(opts)

Find all instances of the model matched by filter from the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\"something\":\"value\"})
};

apiInstance.userFind(opts, (error, data, response) => {
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

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userFindById"></a>
# **userFindById**
> User userFindById(id, opts)

Find a model instance by {{id}} from the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let id = "id_example"; // String | Model id

let opts = { 
  'filter': "filter_example" // String | Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})
};

apiInstance.userFindById(id, opts, (error, data, response) => {
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

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userFindOne"></a>
# **userFindOne**
> User userFindOne(opts)

Find first instance of the model matched by filter from the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\"something\":\"value\"})
};

apiInstance.userFindOne(opts, (error, data, response) => {
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

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userLogin"></a>
# **userLogin**
> Object userLogin(credentials, opts)

Login a user with username/email and password.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let credentials = null; // Object | 

let opts = { 
  'include': "include_example" // String | Related objects to include in the response. See the description of return value for more details.
};

apiInstance.userLogin(credentials, opts, (error, data, response) => {
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
 **credentials** | **Object**|  | 
 **include** | **String**| Related objects to include in the response. See the description of return value for more details. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userLogout"></a>
# **userLogout**
> userLogout()

Logout a user with access token.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

apiInstance.userLogout((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPatchOrCreate"></a>
# **userPatchOrCreate**
> User userPatchOrCreate(opts)

Patch an existing model instance or insert a new one into the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let opts = { 
  'data': new Loop.User() // User | Model instance data
};

apiInstance.userPatchOrCreate(opts, (error, data, response) => {
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
 **data** | [**User**](User.md)| Model instance data | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeCountAccessTokens"></a>
# **userPrototypeCountAccessTokens**
> InlineResponse200 userPrototypeCountAccessTokens(id, opts)

Counts accessTokens of User.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let id = "id_example"; // String | User id

let opts = { 
  'where': "where_example" // String | Criteria to match model instances
};

apiInstance.userPrototypeCountAccessTokens(id, opts, (error, data, response) => {
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
 **id** | **String**| User id | 
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeCreateAccessTokens"></a>
# **userPrototypeCreateAccessTokens**
> AccessToken userPrototypeCreateAccessTokens(id, opts)

Creates a new instance in accessTokens of this model.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let id = "id_example"; // String | User id

let opts = { 
  'data': new Loop.AccessToken() // AccessToken | 
};

apiInstance.userPrototypeCreateAccessTokens(id, opts, (error, data, response) => {
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
 **id** | **String**| User id | 
 **data** | [**AccessToken**](AccessToken.md)|  | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeDeleteAccessTokens"></a>
# **userPrototypeDeleteAccessTokens**
> userPrototypeDeleteAccessTokens(id)

Deletes all accessTokens of this model.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let id = "id_example"; // String | User id


apiInstance.userPrototypeDeleteAccessTokens(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeDestroyByIdAccessTokens"></a>
# **userPrototypeDestroyByIdAccessTokens**
> userPrototypeDestroyByIdAccessTokens(id, fk)

Delete a related item by id for accessTokens.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let id = "id_example"; // String | User id

let fk = "fk_example"; // String | Foreign key for accessTokens


apiInstance.userPrototypeDestroyByIdAccessTokens(id, fk, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 
 **fk** | **String**| Foreign key for accessTokens | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeFindByIdAccessTokens"></a>
# **userPrototypeFindByIdAccessTokens**
> AccessToken userPrototypeFindByIdAccessTokens(id, fk)

Find a related item by id for accessTokens.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let id = "id_example"; // String | User id

let fk = "fk_example"; // String | Foreign key for accessTokens


apiInstance.userPrototypeFindByIdAccessTokens(id, fk, (error, data, response) => {
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
 **id** | **String**| User id | 
 **fk** | **String**| Foreign key for accessTokens | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeGetAccessTokens"></a>
# **userPrototypeGetAccessTokens**
> [AccessToken] userPrototypeGetAccessTokens(id, opts)

Queries accessTokens of User.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let id = "id_example"; // String | User id

let opts = { 
  'filter': "filter_example" // String | 
};

apiInstance.userPrototypeGetAccessTokens(id, opts, (error, data, response) => {
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
 **id** | **String**| User id | 
 **filter** | **String**|  | [optional] 

### Return type

[**[AccessToken]**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypePatchAttributes"></a>
# **userPrototypePatchAttributes**
> User userPrototypePatchAttributes(id, opts)

Patch attributes for a model instance and persist it into the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let id = "id_example"; // String | User id

let opts = { 
  'data': new Loop.User() // User | An object of model property name/value pairs
};

apiInstance.userPrototypePatchAttributes(id, opts, (error, data, response) => {
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
 **id** | **String**| User id | 
 **data** | [**User**](User.md)| An object of model property name/value pairs | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeUpdateByIdAccessTokens"></a>
# **userPrototypeUpdateByIdAccessTokens**
> AccessToken userPrototypeUpdateByIdAccessTokens(id, fk, opts)

Update a related item by id for accessTokens.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let id = "id_example"; // String | User id

let fk = "fk_example"; // String | Foreign key for accessTokens

let opts = { 
  'data': new Loop.AccessToken() // AccessToken | 
};

apiInstance.userPrototypeUpdateByIdAccessTokens(id, fk, opts, (error, data, response) => {
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
 **id** | **String**| User id | 
 **fk** | **String**| Foreign key for accessTokens | 
 **data** | [**AccessToken**](AccessToken.md)|  | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userPrototypeVerify"></a>
# **userPrototypeVerify**
> userPrototypeVerify(id)

Trigger user&#39;s identity verification with configured verifyOptions

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let id = "id_example"; // String | User id


apiInstance.userPrototypeVerify(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userReplaceByIdPostUsersidReplace"></a>
# **userReplaceByIdPostUsersidReplace**
> User userReplaceByIdPostUsersidReplace(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let id = "id_example"; // String | Model id

let opts = { 
  'data': new Loop.User() // User | Model instance data
};

apiInstance.userReplaceByIdPostUsersidReplace(id, opts, (error, data, response) => {
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
 **data** | [**User**](User.md)| Model instance data | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userReplaceByIdPutUsersid"></a>
# **userReplaceByIdPutUsersid**
> User userReplaceByIdPutUsersid(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let id = "id_example"; // String | Model id

let opts = { 
  'data': new Loop.User() // User | Model instance data
};

apiInstance.userReplaceByIdPutUsersid(id, opts, (error, data, response) => {
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
 **data** | [**User**](User.md)| Model instance data | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userReplaceOrCreatePostUsersReplaceOrCreate"></a>
# **userReplaceOrCreatePostUsersReplaceOrCreate**
> User userReplaceOrCreatePostUsersReplaceOrCreate(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let opts = { 
  'data': new Loop.User() // User | Model instance data
};

apiInstance.userReplaceOrCreatePostUsersReplaceOrCreate(opts, (error, data, response) => {
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
 **data** | [**User**](User.md)| Model instance data | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userReplaceOrCreatePutUsers"></a>
# **userReplaceOrCreatePutUsers**
> User userReplaceOrCreatePutUsers(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let opts = { 
  'data': new Loop.User() // User | Model instance data
};

apiInstance.userReplaceOrCreatePutUsers(opts, (error, data, response) => {
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
 **data** | [**User**](User.md)| Model instance data | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userResetPassword"></a>
# **userResetPassword**
> userResetPassword(options)

Reset password for a user with email.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let options = null; // Object | 


apiInstance.userResetPassword(options, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **options** | **Object**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userSetPassword"></a>
# **userSetPassword**
> userSetPassword(newPassword)

Reset user&#39;s password via a password-reset token.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let newPassword = "newPassword_example"; // String | 


apiInstance.userSetPassword(newPassword, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newPassword** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userUpdateAll"></a>
# **userUpdateAll**
> InlineResponse2002 userUpdateAll(opts)

Update instances of the model matched by {{where}} from the data source.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Loop.User() // User | An object of model property name/value pairs
};

apiInstance.userUpdateAll(opts, (error, data, response) => {
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
 **data** | [**User**](User.md)| An object of model property name/value pairs | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="userUpsertWithWhere"></a>
# **userUpsertWithWhere**
> User userUpsertWithWhere(opts)

Update an existing model instance or insert a new one into the data source based on the where criteria.

### Example
```javascript
import Loop from 'loop';

let apiInstance = new Loop.UserApi();

let opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Loop.User() // User | An object of model property name/value pairs
};

apiInstance.userUpsertWithWhere(opts, (error, data, response) => {
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
 **data** | [**User**](User.md)| An object of model property name/value pairs | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

