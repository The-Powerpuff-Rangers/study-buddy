from appwrite.client import Client
import datetime
import json
from appwrite.services.databases import Databases
from appwrite.permission import Permission
from appwrite.id import ID
from appwrite.role import Role

"""
  'req' variable has:
    'headers' - object with request headers
    'payload' - request body data as a string
    'variables' - object with function variables

  'res' variable has:
    'send(text, status)' - function to return text response. Status code defaults to 200
    'json(obj, status)' - function to return JSON response. Status code defaults to 200

  If an error is thrown, a response with code 500 will be returned.
"""

""" 
This is something we would get when executing function
  req = {
   user_ids = [],
   session_id = string something
  }
 """

def main(req, res):
  client = Client()

  database = Databases(client)


  if not req.variables.get('APPWRITE_FUNCTION_ENDPOINT') or not req.variables.get('APPWRITE_FUNCTION_API_KEY'):
    print('Environment variables are not set. Function cannot use Appwrite SDK.')
  else:
    (
    client
      .set_endpoint(req.variables.get('APPWRITE_FUNCTION_ENDPOINT', None))
      .set_project(req.variables.get('APPWRITE_FUNCTION_PROJECT_ID', None))
      .set_key(req.variables.get('APPWRITE_FUNCTION_API_KEY', None))
    )
  
 
  dbId = req.variables.get('APPWRITE_FUNCTION_DATABASE_ID', None)
# {"message":"Hello from the other side","payload":"{\nuser_ids: [\"1234\", \"234\"]\n}"}
  
 


  # https://appwrite.io/docs/server/functions?sdk=python-default
  # https://github.com/appwrite/sdk-for-python/blob/master/appwrite/permission.py
  decoded_data = json.loads(str(req.payload))

  try:

    user_Ids = []
    user_Ids = decoded_data['user_ids']
    print(decoded_data)
    
    # # TODO: Check if This is needed?
    # session_id = req.payload['session-id']
    dateTime = datetime.datetime.now()
    dateTime =  dateTime.microsecond
    
    permissions = []
    for user in user_Ids:
      permissions.append(Permission.write(Role.user(user)))
      permissions.append(Permission.read(Role.user(user)))
      collection = database.create_collection(dbId, ID.unique(),  'Chat_Room_' + str(dateTime), permissions) 
      print("Collection created")

      database.create_string_attribute(database_id=dbId, collection_id=collection['$id'], key='msg', required=False, array=False, default='',size=3000)
      database.create_datetime_attribute(database_id=dbId, collection_id=collection['$id'], key='time', required=True, array=False, default='')
      database.create_string_attribute(database_id=dbId, collection_id=collection['$id'], key='sender-name', required=True, array=False, default='' ,size=255)
      database.create_string_attribute(database_id=dbId, collection_id=collection['$id'], key='img-id', required=False, array=False, default='', size=50)
      database.create_string_attribute(database_id=dbId, collection_id=collection['$id'], key='sender-id', required=True, array=False, default='',size=50)
      database.create_string_attribute(database_id=dbId, collection_id=collection['$id'], key='session-id', required=True, array=False, default='',size=50)
      print("Attributes created")
      # Wait for 2 seconds to finishing creating the attributes
  except Exception as e:
    return res.json({
      "message": "Error creating collection or attributes",
      "error": str(e),
    })
    
  return res.json({
    "message": "Collection created",
    "attributes": "Attributes created",
    "collection_Id": collection['$id'],
  })
