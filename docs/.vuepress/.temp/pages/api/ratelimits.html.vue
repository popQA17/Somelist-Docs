<template><h1 id="ratelimits" tabindex="-1"><a class="header-anchor" href="#ratelimits" aria-hidden="true">#</a> Ratelimits</h1>
<p>Somelist utilizes ratelimits to ensure that all developers can use the API consistantly. Without ratelimits, developers might over-run the server and crash it.</p>
<h2 id="values" tabindex="-1"><a class="header-anchor" href="#values" aria-hidden="true">#</a> Values</h2>
<p>All developers will have the <strong>same</strong> values. The values are:</p>
<ul>
<li>10 requests per Second</li>
<li>500 requests per Day</li>
</ul>
<p>Exceeding ratelimits will place a <code>429 ratelimited</code> error ban on your server for an unspecified amount of time.</p>
<div class="custom-container tip"><p class="custom-container-title">Info</p>
<p>The information here is subjected to change. Check back regularly if you are experiencing issues with our API.</p>
</div>
</template>
