<template><h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1>
<p>Getting started with the Somelist API is as easy as ABC. Follow these simply steps into making your first request!</p>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<ol>
<li>Active internet connection</li>
<li>Open mindset</li>
</ol>
<h2 id="making-your-first-request" tabindex="-1"><a class="header-anchor" href="#making-your-first-request" aria-hidden="true">#</a> Making your first request</h2>
<p>Check out the <RouterLink to="/api/">Api Reference</RouterLink> to view more routes!</p>
<h3 id="adding-your-bot" tabindex="-1"><a class="header-anchor" href="#adding-your-bot" aria-hidden="true">#</a> Adding your bot</h3>
<p>Firstly, you need to add your bot to Somelist. Simply navigate to <a href="https://somelist.tk/add" target="_blank" rel="noopener noreferrer">https://somelist.tk/add<ExternalLinkIcon/></a> and submit your bot! The wizard should be relatively easy.</p>
<p>After that, your bot will be reviewed by our trusted team of testers. Expect up to a 1 or 2 day delay!</p>
<h3 id="your-token" tabindex="-1"><a class="header-anchor" href="#your-token" aria-hidden="true">#</a> Your token</h3>
<p>After you've submitted your bot (doesn't need to be approved, but certain features will be limited), navigate to the edit page:
<img src="https://i.imgur.com/zOVtCTE.png" alt="image"></p>
<p>From here, click on the &quot;Settings&quot; tab (on the sidebar). Then, scroll down until you see a category called: <strong>Advanced</strong>:
<img src="https://i.imgur.com/asYKiJP.png" alt="image"></p>
<div class="custom-container warning"><p class="custom-container-title">Warning!</p>
<p>Do not click the button multiple times. Clicking it more than once can generate a new token after one has been generated. This may invalidate your current token should the request be delayed.</p>
</div>
<p>Then, click on the <strong>Generate Token</strong> button. Your page should refresh after a token is generated.</p>
<p>Once the page has refreshed, click on the <strong>Copy Token</strong> button. A toast saying <code>Your token has been copied</code> should appear at the top of the screen.</p>
<p>After that, you can pic which library you're more familiar with to continue with this tutorial. This tutorial consists of:</p>
<ol>
<li><a href="#python-requests-library">Python Requests Library</a></li>
<li><a href="#javascript-fetch">Javascript Fetch</a></li>
<li><a href="#jquery-ajax">Jquery AJAX</a></li>
</ol>
<h3 id="python-requests-library" tabindex="-1"><a class="header-anchor" href="#python-requests-library" aria-hidden="true">#</a> Python Requests library</h3>
<p>Find out more on the official <a href="https://requests.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Python-Request Documentation<ExternalLinkIcon/></a>!</p>
<h4 id="prerequisites-1" tabindex="-1"><a class="header-anchor" href="#prerequisites-1" aria-hidden="true">#</a> Prerequisites</h4>
<ol>
<li>Tiny bit of python knowledge</li>
<li>Pip (A python installer program)</li>
<li>An IDE</li>
</ol>
<h4 id="installing-dependencies" tabindex="-1"><a class="header-anchor" href="#installing-dependencies" aria-hidden="true">#</a> Installing Dependencies</h4>
<p>Run the code below in your terminal:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> requests
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>This will install python-requests (if its not already installed). Then, navigate to your local IDE to start coding.</p>
<h4 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h4>
<p>Create your <code>.py</code> file first. After that, open the file in your IDE, and paste in this code:</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests
target_user <span class="token operator">=</span> <span class="token string">'TARGETTED_USER'</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'https://dev.somelist.tk/users/</span><span class="token interpolation"><span class="token punctuation">{</span>target_user<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">,</span> headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'token'</span><span class="token punctuation">:</span> <span class="token string">'REPLACE_TOKEN_HERE'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
r<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Info</p>
<p>Replace <code>REPLACE_TOKEN_HERE</code> with your token that was copied from the site. If you hadn't already copied your token, learn how to <a href="#your-token">here</a>. Also replace <code>TARGETTED_USER</code> with an id of the user you wish to get info about.</p>
</div>
<h4 id="break-it-down" tabindex="-1"><a class="header-anchor" href="#break-it-down" aria-hidden="true">#</a> Break it down!</h4>
<p>The code below imports the <a href="https://requests.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">requests<ExternalLinkIcon/></a> library. This library will be essential for this tutorial.</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>In the code below, we define our target user (a user id) as a variable. You could, of course, replace the variable with the ID directly in the code.</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>target_user <span class="token operator">=</span> <span class="token string">'TARGETTED_USER'</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'https://dev.somelist.tk/users/</span><span class="token interpolation"><span class="token punctuation">{</span>target_user<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">,</span> headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'token'</span><span class="token punctuation">:</span> <span class="token string">'REPLACE_TOKEN_HERE'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
r<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>By using <code>requests.get()</code>, we tell the requests library to send a get request to a target URL. In this case, <code>https://dev.somelist.tk</code>(keep this in mind).</p>
<p><strong>What do the headers mean?</strong></p>
<p>Headers are a way to send secure information through the web. Hence, we use a <code>token</code> header to authenticate with our API. Without this header, your request will fail.</p>
<div class="custom-container warning"><p class="custom-container-title">Warning!</p>
<p>Ratelimits apply to majority of the routes in the API. Learn more about our <RouterLink to="/api/ratelimits/">ratelimits</RouterLink> and <a href="'/api/errors/'">errors</a> in our <RouterLink to="/api/">API Reference</RouterLink></p>
</div>
<p><strong>What about <code>r.json()</code> then?</strong></p>
<p><code>r.json()</code> will convert the returned response from the API into JSON (JavaScript Object Notation). You can use the data returned for other applications, or store it in a database.</p>
<h4 id="yay" tabindex="-1"><a class="header-anchor" href="#yay" aria-hidden="true">#</a> Yay!</h4>
<p>Congratulations! Your done. You have made your first request to the API! Learn more about our routes <RouterLink to="/api/">here</RouterLink>!</p>
<h3 id="javascript-fetch" tabindex="-1"><a class="header-anchor" href="#javascript-fetch" aria-hidden="true">#</a> Javascript Fetch</h3>
<div class="custom-container danger"><p class="custom-container-title">Not Complete</p>
<p>This section has not been completed yet. Check back later.</p>
</div>
<h3 id="jquery-ajax" tabindex="-1"><a class="header-anchor" href="#jquery-ajax" aria-hidden="true">#</a> Jquery AJAX</h3>
<div class="custom-container danger"><p class="custom-container-title">Not Complete</p>
<p>This section has not been completed yet. Check back later.</p>
</div>
</template>
