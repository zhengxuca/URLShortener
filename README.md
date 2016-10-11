# URLShortener


User Stories:

1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.</li>
2. If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.</li>
3. When I visit that shortened URL, it will redirect me to my original link.</li>


Example creation usage:</h2>

http://www.yourhostname.com/new/http://www.google.com



Example creation output:
{"original_url": http://www.google.com, "short_url": "ABEEEE" } 

Usage:
 http://yourhostname.com/ABEEEE

Will redirect to:
 http://www.google.com