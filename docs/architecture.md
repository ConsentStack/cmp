# !Draft!   Updated Architecture of CMP   !Draft!

```
+-----------+         +-----------+         +-----------+
|           |         |           |         |           |
|  Loader   | ------> |    CMP    | ------> |    UI     |
|           |         |           |         |           |
+-----------+         +-----------+         +-----------+

```

## Loader Module
Responsible for the creation of a data object for consumption by other modules. It is client agnostic, it does not need the client id for any logic.

#### Flow:
- fetch the clientId from the script tag.
- check if cookies are allowed (1st party)
- check if cookies are allowed (3rd party)
- check for first party cookie presence & get value if exists
- check for third party cookie presence & get value if exists
- send the data to the CMP module for the decision
- log the results in DB

#### Data Object Generated:
```javascript
{
  clientId : int,
  cookie1pAllowed : bool,
  cookie3pAllowed : bool,
  cookie1pValue : string || null,
  cookie3pValue : string || null,
}
```

### Application Folder Structure
```bash
/client 
    /loader
    /ui
    /api
    /cmp

/server
    /routes
        /cmp
        /log
        /api
            /cookie

/lib # code which can be shared across client/server
    /cookies
    /http

/build

/dist

/docs
```
