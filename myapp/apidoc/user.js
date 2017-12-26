/**
 * 
 * @api {GET} /api/user/login Login Api
 * @apiName LoginApi
 * @apiGroup users
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {user_name} user name username no
 * @apiParam  {password} password password no
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
/**
 * 
 * @api {Logout} /api/auth/logout Logout Api
 * @apiName logout api
 * @apiGroup users
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {string} access_token token
 * 
 * @apiSuccess (200) {Object} das no
 * 
 * @apiSuccessExample {Object} Success-Response:
   {
       status : 'success',
       data:null
   }
 * @apiErrorExample {Object} Error-Response:
     {
       status:'error',
       error:'Ngu k chiu dc'
     }
 * 
 */