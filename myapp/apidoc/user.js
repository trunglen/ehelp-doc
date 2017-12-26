/**
 * 
 * @api {GET} /api/user/login Login Api
 * @apiName LoginApi
 * @apiGroup users
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {user_name} user name user name description
 * 
 * @apiSuccess (200) {String} access_token   access_token
 * 
 * @apiParamExample  {type} Request-Example:
   {
       user-name : 'trunglen'
       password : '123456'
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       status : 'success',
       data: null
   }
 * 
 * 
 */