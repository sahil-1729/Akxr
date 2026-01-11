### REST API
- API stands for application programming interface
- All kinds of api are there, 
- there are various types of apis, like apis in computer, OS, phone 
- its has structured req and structured response

- REST 
- representational state transfer
- architectural style for designing networked apps
- relies on stateless, client-server protocol, always HTTP
- treats server obj as resources, that can be created or destroyed
- it can be used by any language

- API is the messenger, REST lets us use HTTP request to format those messages
- rest API and RESTful API are same
- 

- Request that can be made 
- GET
    - retrieve data from resource
- POST
    - submit data to a specific resource
- PUT
    - update a specific resource
    - put a resource with id, to update the resource
- DELETE
    - deletes a specific resource

- HEAD
    - same as GET but doesn't return body
- OPTIONS
    - see supported HTTP methods, that we can make to the specified API
- PATCH
    - updates partial resource 

- endpoints are the URI where the request are sent to, by the client application

- Sometimes we need to authenticate the user before accessing APIs
    - oauth 
        - where we send a token while sending req
    - 

- curl is used to transfer data