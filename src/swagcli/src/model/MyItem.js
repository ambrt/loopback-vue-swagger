/**
 * loop
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The MyItem model module.
* @module model/MyItem
* @version 1.0.0
*/
export default class MyItem {
    /**
    * Constructs a new <code>MyItem</code>.
    * @alias module:model/MyItem
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>MyItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MyItem} obj Optional instance to populate.
    * @return {module:model/MyItem} The populated <code>MyItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MyItem();

            
            
            

            if (data.hasOwnProperty('MyText')) {
                obj['MyText'] = ApiClient.convertToType(data['MyText'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} MyText
    */
    MyText = undefined;
    /**
    * @member {Number} id
    */
    id = undefined;








}


