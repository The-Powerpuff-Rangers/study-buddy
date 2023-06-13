from appwrite.client import Client

from appwrite.services.databases import Databases



def main(req, res):
    client = Client()

    # You can remove services you don't use
    database = Databases(client)

    databaseId = 'default'
    collectionId = 'users'

    if not req.variables.get('APPWRITE_FUNCTION_ENDPOINT') or not req.variables.get('APPWRITE_FUNCTION_API_KEY'):
        print('Environment variables are not set. Function cannot use Appwrite SDK.')
    else:
        (
            client
            .set_endpoint(req.variables.get('APPWRITE_FUNCTION_ENDPOINT', None))
            .set_project(req.variables.get('APPWRITE_FUNCTION_PROJECT_ID', None))
            .set_key(req.variables.get('APPWRITE_FUNCTION_API_KEY', None))
            .set_self_signed(True)
        )


    try:
       
        subjects = [
        "Operating Systems",
        "Computer Networks",
        "Data Structures",
        "Algorithms",
        "Computer Architecture",
        "Database Management Systems",
        "Software Engineering",
        "Computer Graphics",
        "Artificial Intelligence",
        "Computer Vision",
        "Machine Learning",
        "Web Engineering",
        "Compiler Design",
        "Computer Organization",
        "Theory of Computation"
    ]

        database.create_enum_attribute(
            databaseId, collectionId, 'subjects', subjects, True, array=True)

    except Exception as e:
       return res.json({
            "message": "Error: " + str(e)
       })

    return res.json({
        "message": "Ho gya bhai"
    })
