<template><h1 id="bots" tabindex="-1"><a class="header-anchor" href="#bots" aria-hidden="true">#</a> Bots</h1>
<h2 id="get-bot" tabindex="-1"><a class="header-anchor" href="#get-bot" aria-hidden="true">#</a> Get Bot</h2>
<p>Route: <code>/bot/&lt;bot_id&gt;</code> <Badge type='tip' text='GET' vertical='middle'/></p>
<div class="custom-container warning"><p class="custom-container-title">Warning!</p>
<p>This route will only return non-sensitive information. However, if holding a token that matches the bot's, full information will be returned.</p>
</div>
<h2 id="update-bot-info" tabindex="-1"><a class="header-anchor" href="#update-bot-info" aria-hidden="true">#</a> Update Bot Info</h2>
<p>Route: <code>/bot&lt;bot_id&gt;</code> <Badge type='tip' text='POST' vertical='middle'/></p>
<div class="custom-container tip"><p class="custom-container-title">Info</p>
<p>The data sent should be serialized into a string. Failure to do so can corrupt your bot's information!</p>
</div>
<h3 id="keys" tabindex="-1"><a class="header-anchor" href="#keys" aria-hidden="true">#</a> Keys</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Remarks</th>
<th>Required?</th>
</tr>
</thead>
<tbody>
<tr>
<td>shortdesc</td>
<td>Edits the short description of your bot</td>
<td>Must be more than 15 characters</td>
<td>true</td>
</tr>
<tr>
<td>longdesc</td>
<td>Edits the long description of your bot</td>
<td>Must be more than 100 characters</td>
<td>true</td>
</tr>
<tr>
<td>prefix</td>
<td>Edit your bot's prefix</td>
<td>null</td>
<td>true</td>
</tr>
<tr>
<td>banner</td>
<td>Edit your bot's banner</td>
<td>null</td>
<td>false</td>
</tr>
<tr>
<td>invite</td>
<td>Edit your bot's invite URL</td>
<td>Must start with https://discord.com/api/oauth</td>
<td>false</td>
</tr>
<tr>
<td>website</td>
<td>Edit your bot's website URL</td>
<td>null</td>
<td>false</td>
</tr>
<tr>
<td>github</td>
<td>Edit your bot's github Repo</td>
<td>null</td>
<td>false</td>
</tr>
<tr>
<td>support</td>
<td>Edit your bot's support Server</td>
<td>null</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="encode-it" tabindex="-1"><a class="header-anchor" href="#encode-it" aria-hidden="true">#</a> Encode it!</h3>
<p>Encode your data (a dictionary) into <code>x-www-form-urlencoded</code>. Your dictionary should be formed like the table above. Addtional keys will be ignored!</p>
</template>
