# [Design Doc] DB & Logging  

## Schema
- event         : str (load, view, close)
- geo           : str (2 Letter Code)     : from NGINX
- ip_trunc      : int?                    : from NGINX
- client_id     : int
- 1P_cs         : bool
- 3P_cs         : bool
- user_agent    : str (browser_only)
- cookie_eu_1p  : str
- cookie_eu_3p  : str

## Q's
Currently the app loads on each page view via Google Tag Manager, the issue is that we do not want to send the above data repetitively, so how would we avoid this? Whilst still registering the "load" event.
