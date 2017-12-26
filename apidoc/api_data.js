define({ "api": [
  {
    "type": "GET",
    "url": "/api/user/login",
    "title": "Login Api",
    "name": "LoginApi",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "user_name",
            "optional": false,
            "field": "user",
            "description": "<p>name user name description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    user-name : 'trunglen'\n    password : '123456'\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>access_token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    status : 'success',\n    data: null\n}",
          "type": "type"
        }
      ]
    },
    "filename": "myapp/apidoc/user.js",
    "groupTitle": "users"
  }
] });
