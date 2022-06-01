# Getting Started
Getting started with the Somelist API is as easy as ABC. Follow these simply steps into making your first request!
## Prerequisites
1. Active internet connection
2. Open mindset
## Making your first request
Check out the [Api Reference](/api/) to view more routes!
### Adding your bot
Firstly, you need to add your bot to Somelist. Simply navigate to [https://somelist.tk/add](https://somelist.tk/add) and submit your bot! The wizard should be relatively easy.

After that, your bot will be reviewed by our trusted team of testers. Expect up to a 1 or 2 day delay!

### Your token
After you've submitted your bot (doesn't need to be approved, but certain features will be limited), navigate to the edit page:
![image](https://i.imgur.com/zOVtCTE.png)

From here, click on the "Settings" tab (on the sidebar). Then, scroll down until you see a category called: **Advanced**:
![image](https://i.imgur.com/asYKiJP.png)


:::warning Warning!
Do not click the button multiple times. Clicking it more than once can generate a new token after one has been generated. This may invalidate your current token should the request be delayed.
:::

Then, click on the **Generate Token** button. Your page should refresh after a token is generated.

Once the page has refreshed, click on the **Copy Token** button. A toast saying `Your token has been copied` should appear at the top of the screen.

After that, you can pic which library you're more familiar with to continue with this tutorial. This tutorial consists of:

1. [Python Requests Library](#python-requests-library)
2. [Javascript Fetch](#javascript-fetch)
3. [Jquery AJAX](#jquery-ajax)
### Python Requests library
Find out more on the official [Python-Request Documentation](https://requests.readthedocs.io/en/latest/)!


#### Prerequisites
1. Tiny bit of python knowledge
2. Pip (A python installer program)
3. An IDE

#### Installing Dependencies
Run the code below in your terminal:
```sh
pip install requests
```

This will install python-requests (if its not already installed). Then, navigate to your local IDE to start coding.

#### Code
Create your `.py` file first. After that, open the file in your IDE, and paste in this code:
```py
import requests
target_user = 'TARGETTED_USER'
r = requests.get(f'https://dev.somelist.tk/users/{target_user}', headers={'token': 'REPLACE_TOKEN_HERE'})
r.json()
```

:::tip Info
Replace `REPLACE_TOKEN_HERE` with your token that was copied from the site. If you hadn't already copied your token, learn how to [here](#your-token). Also replace `TARGETTED_USER` with an id of the user you wish to get info about.
:::

#### Break it down!

The code below imports the [requests](https://requests.readthedocs.io/en/latest/) library. This library will be essential for this tutorial.
```py
import requests
```

In the code below, we define our target user (a user id) as a variable. You could, of course, replace the variable with the ID directly in the code.

```py
target_user = 'TARGETTED_USER'
r = requests.get(f'https://dev.somelist.tk/users/{target_user}', headers={'token': 'REPLACE_TOKEN_HERE'})
r.json()
```

By using `requests.get()`, we tell the requests library to send a get request to a target URL. In this case, `https://dev.somelist.tk`(keep this in mind).

**What do the headers mean?**

Headers are a way to send secure information through the web. Hence, we use a `token` header to authenticate with our API. Without this header, your request will fail.

:::warning Warning!
Ratelimits apply to majority of the routes in the API. Learn more about our [ratelimits](/api/ratelimits/) and [errors]('/api/errors/') in our [API Reference](/api/)
:::

**What about `r.json()` then?**

`r.json()` will convert the returned response from the API into JSON (JavaScript Object Notation). You can use the data returned for other applications, or store it in a database.

#### Yay!
Congratulations! Your done. You have made your first request to the API! Learn more about our routes [here](/api/)!

### Javascript Fetch

:::danger Not Complete
This section has not been completed yet. Check back later.
:::
### Jquery AJAX

:::danger Not Complete
This section has not been completed yet. Check back later.
:::