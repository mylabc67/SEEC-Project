Ext.data.JsonP.Ext_DomHelper({"tagname":"class","name":"Ext.DomHelper","autodetected":{},"files":[{"filename":"Helper.js","href":"Helper.html#Ext-DomHelper"}],"alternateClassNames":["Ext.dom.Helper"],"singleton":true,"members":[{"name":"attribXlat","tagname":"property","owner":"Ext.DomHelper","id":"property-attribXlat","meta":{"private":true}},{"name":"closeTags","tagname":"property","owner":"Ext.DomHelper","id":"property-closeTags","meta":{"private":true}},{"name":"confRe","tagname":"property","owner":"Ext.DomHelper","id":"property-confRe","meta":{"private":true}},{"name":"decamelizeName","tagname":"property","owner":"Ext.DomHelper","id":"property-decamelizeName","meta":{"private":true}},{"name":"emptyTags","tagname":"property","owner":"Ext.DomHelper","id":"property-emptyTags","meta":{"private":true}},{"name":"endRe","tagname":"property","owner":"Ext.DomHelper","id":"property-endRe","meta":{"private":true}},{"name":"append","tagname":"method","owner":"Ext.DomHelper","id":"method-append","meta":{}},{"name":"applyStyles","tagname":"method","owner":"Ext.DomHelper","id":"method-applyStyles","meta":{}},{"name":"createContextualFragment","tagname":"method","owner":"Ext.DomHelper","id":"method-createContextualFragment","meta":{"private":true}},{"name":"createTemplate","tagname":"method","owner":"Ext.DomHelper","id":"method-createTemplate","meta":{}},{"name":"doInsert","tagname":"method","owner":"Ext.DomHelper","id":"method-doInsert","meta":{"private":true}},{"name":"generateMarkup","tagname":"method","owner":"Ext.DomHelper","id":"method-generateMarkup","meta":{"private":true}},{"name":"generateStyles","tagname":"method","owner":"Ext.DomHelper","id":"method-generateStyles","meta":{}},{"name":"insertAfter","tagname":"method","owner":"Ext.DomHelper","id":"method-insertAfter","meta":{}},{"name":"insertBefore","tagname":"method","owner":"Ext.DomHelper","id":"method-insertBefore","meta":{}},{"name":"insertFirst","tagname":"method","owner":"Ext.DomHelper","id":"method-insertFirst","meta":{}},{"name":"insertHtml","tagname":"method","owner":"Ext.DomHelper","id":"method-insertHtml","meta":{}},{"name":"markup","tagname":"method","owner":"Ext.DomHelper","id":"method-markup","meta":{}},{"name":"overwrite","tagname":"method","owner":"Ext.DomHelper","id":"method-overwrite","meta":{}}],"aliases":{},"id":"class-Ext.DomHelper","short_doc":"The DomHelper class provides a layer of abstraction from DOM and transparently supports creating elements via DOM or\n...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.dom.Helper</div><h4>Files</h4><div class='dependency'><a href='source/Helper.html#Ext-DomHelper' target='_blank'>Helper.js</a></div></pre><div class='doc-contents'><p>The DomHelper class provides a layer of abstraction from DOM and transparently supports creating elements via DOM or\nusing HTML fragments. It also has the ability to create HTML fragment templates from your DOM building code.</p>\n\n<h2>DomHelper element specification object</h2>\n\n<p>A specification object is used when creating elements. Attributes of this object are assumed to be element\nattributes, except for 4 special attributes:</p>\n\n<ul>\n<li><strong>tag</strong>: The tag name of the element</li>\n<li><strong>children (or cn)</strong>: An array of the same kind of element definition objects to be created and appended. These\ncan be nested as deep as you want.</li>\n<li><strong>cls</strong>: The class attribute of the element. This will end up being either the \"class\" attribute on a HTML\nfragment or className for a DOM node, depending on whether DomHelper is using fragments or DOM.</li>\n<li><strong>html</strong>: The innerHTML for the element</li>\n</ul>\n\n\n<h2>Insertion methods</h2>\n\n<p>Commonly used insertion methods:</p>\n\n<ul>\n<li><a href=\"#!/api/Ext.DomHelper-method-append\" rel=\"Ext.DomHelper-method-append\" class=\"docClass\">append</a></li>\n<li><a href=\"#!/api/Ext.DomHelper-method-insertBefore\" rel=\"Ext.DomHelper-method-insertBefore\" class=\"docClass\">insertBefore</a></li>\n<li><a href=\"#!/api/Ext.DomHelper-method-insertAfter\" rel=\"Ext.DomHelper-method-insertAfter\" class=\"docClass\">insertAfter</a></li>\n<li><a href=\"#!/api/Ext.DomHelper-method-overwrite\" rel=\"Ext.DomHelper-method-overwrite\" class=\"docClass\">overwrite</a></li>\n<li><a href=\"#!/api/Ext.DomHelper-method-insertHtml\" rel=\"Ext.DomHelper-method-insertHtml\" class=\"docClass\">insertHtml</a></li>\n</ul>\n\n\n<h2>Example</h2>\n\n<p>This is an example, where an unordered list with 3 children items is appended to an existing element with id\n'my-div':</p>\n\n<pre><code>var dh = <a href=\"#!/api/Ext.DomHelper\" rel=\"Ext.DomHelper\" class=\"docClass\">Ext.DomHelper</a>; // create shorthand alias\n// specification object\nvar spec = {\n    id: 'my-ul',\n    tag: 'ul',\n    cls: 'my-list',\n    // append children after creating\n    children: [     // may also specify 'cn' instead of 'children'\n        {tag: 'li', id: 'item0', html: 'List Item 0'},\n        {tag: 'li', id: 'item1', html: 'List Item 1'},\n        {tag: 'li', id: 'item2', html: 'List Item 2'}\n    ]\n};\nvar list = dh.append(\n    'my-div', // the context element 'my-div' can either be the id or the actual node\n    spec      // the specification object\n);\n</code></pre>\n\n<p>Element creation specification parameters in this class may also be passed as an Array of specification objects.\nThis can be used to insert multiple sibling nodes into an existing container very efficiently. For example, to add\nmore list items to the example above:</p>\n\n<pre><code>dh.append('my-ul', [\n    {tag: 'li', id: 'item3', html: 'List Item 3'},\n    {tag: 'li', id: 'item4', html: 'List Item 4'}\n]);\n</code></pre>\n\n<h2>Templating</h2>\n\n<p>The real power is in the built-in templating. Instead of creating or appending any elements, createTemplate returns\na Template object which can be used over and over to insert new elements. Revisiting the example above, we could\nutilize templating this time:</p>\n\n<pre><code>// create the node\nvar list = dh.append('my-div', {tag: 'ul', cls: 'my-list'});\n// get template\nvar tpl = dh.createTemplate({tag: 'li', id: 'item{0}', html: 'List Item {0}'});\n\nfor(var i = 0; i &lt; 5; i++){\n    tpl.append(list, i); // use template to append to the actual node\n}\n</code></pre>\n\n<p>An example using a template:</p>\n\n<pre><code>var html = '\"{0}\" href=\"{1}\" class=\"nav\"&gt;{2}';\n\nvar tpl = new <a href=\"#!/api/Ext.DomHelper-method-createTemplate\" rel=\"Ext.DomHelper-method-createTemplate\" class=\"docClass\">Ext.DomHelper.createTemplate</a>(html);\ntpl.append('blog-roll', ['link1', 'http://www.tommymaintz.com/', \"Tommy's Site\"]);\ntpl.append('blog-roll', ['link2', 'http://www.avins.org/', \"Jamie's Site\"]);\n</code></pre>\n\n<p>The same example using named parameters:</p>\n\n<pre><code>var html = '\"{id}\" href=\"{url}\" class=\"nav\"&gt;{text}';\n\nvar tpl = new <a href=\"#!/api/Ext.DomHelper-method-createTemplate\" rel=\"Ext.DomHelper-method-createTemplate\" class=\"docClass\">Ext.DomHelper.createTemplate</a>(html);\ntpl.append('blog-roll', {\n    id: 'link1',\n    url: 'http://www.tommymaintz.com/',\n    text: \"Tommy's Site\"\n});\ntpl.append('blog-roll', {\n    id: 'link2',\n    url: 'http://www.avins.org/',\n    text: \"Jamie's Site\"\n});\n</code></pre>\n\n<h2>Compiling Templates</h2>\n\n<p>Templates are applied using regular expressions. The performance is great, but if you are adding a bunch of DOM\nelements using the same template, you can increase performance even further by \"compiling\" the template. The way\n\"compile()\" works is the template is parsed and broken up at the different variable points and a dynamic function is\ncreated and eval'ed. The generated function performs string concatenation of these parts and the passed variables\ninstead of using regular expressions.</p>\n\n<pre><code>var html = '\"{id}\" href=\"{url}\" class=\"nav\"&gt;{text}';\n\nvar tpl = new <a href=\"#!/api/Ext.DomHelper-method-createTemplate\" rel=\"Ext.DomHelper-method-createTemplate\" class=\"docClass\">Ext.DomHelper.createTemplate</a>(html);\ntpl.compile();\n\n// ... use template like normal\n</code></pre>\n\n<h2>Performance Boost</h2>\n\n<p>DomHelper will transparently create HTML fragments when it can. Using HTML fragments instead of DOM can\nsignificantly boost performance.</p>\n\n<p>Element creation specification parameters may also be strings. If useDom is false, then the string is used as\ninnerHTML. If useDom is true, a string specification results in the creation of a text node. Usage:</p>\n\n<pre><code>Ext.DomHelper.useDom = true; // force it to use DOM; reduces performance\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-attribXlat' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-property-attribXlat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-property-attribXlat' class='name expandable'>attribXlat</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{cls: &#39;class&#39;, htmlFor: &#39;for&#39;}</code></p></div></div></div><div id='property-closeTags' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-property-closeTags' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-property-closeTags' class='name expandable'>closeTags</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-confRe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-property-confRe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-property-confRe' class='name expandable'>confRe</a> : <a href=\"#!/api/RegExp\" rel=\"RegExp\" class=\"docClass\">RegExp</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/tag|children|cn|html|tpl|tplData$/i</code></p></div></div></div><div id='property-decamelizeName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-property-decamelizeName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-property-decamelizeName' class='name expandable'>decamelizeName</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-emptyTags' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-property-emptyTags' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-property-emptyTags' class='name expandable'>emptyTags</a> : <a href=\"#!/api/RegExp\" rel=\"RegExp\" class=\"docClass\">RegExp</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/^(?:br|frame|hr|img|input|link|meta|range|spacer|wbr|area|param|col)$/i</code></p></div></div></div><div id='property-endRe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-property-endRe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-property-endRe' class='name expandable'>endRe</a> : <a href=\"#!/api/RegExp\" rel=\"RegExp\" class=\"docClass\">RegExp</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/end/i</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-append' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-method-append' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-append' class='name expandable'>append</a>( <span class='pre'>el, o, [returnElement]</span> ) : HTMLElement/<a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates new DOM element(s) and appends them to el. ...</div><div class='long'><p>Creates new DOM element(s) and appends them to el.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement/<a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>o</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The DOM object spec (and children) or raw HTML blob</p>\n</div></li><li><span class='pre'>returnElement</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>true to return a <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement/<a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The new node</p>\n</div></li></ul></div></div></div><div id='method-applyStyles' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-method-applyStyles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-applyStyles' class='name expandable'>applyStyles</a>( <span class='pre'>el, styles</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Applies a style specification to an element. ...</div><div class='long'><p>Applies a style specification to an element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The element to apply styles to</p>\n</div></li><li><span class='pre'>styles</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>A style specification string e.g. 'width:100px', or object in the form {width:'100px'}, or\na function which returns such a specification.</p>\n</div></li></ul></div></div></div><div id='method-createContextualFragment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-method-createContextualFragment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-createContextualFragment' class='name expandable'>createContextualFragment</a>( <span class='pre'>html</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Fix for browsers which no longer support createContextualFragment ...</div><div class='long'><p>Fix for browsers which no longer support createContextualFragment</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>html</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-createTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-method-createTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-createTemplate' class='name expandable'>createTemplate</a>( <span class='pre'>o</span> ) : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new Ext.Template from the DOM object spec. ...</div><div class='long'><p>Creates a new <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a> from the DOM object spec.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The DOM object spec (and children)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span><div class='sub-desc'><p>The new template</p>\n</div></li></ul></div></div></div><div id='method-doInsert' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-method-doInsert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-doInsert' class='name expandable'>doInsert</a>( <span class='pre'>el, o, returnElement, pos</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>o</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>returnElement</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>pos</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-generateMarkup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-method-generateMarkup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-generateMarkup' class='name expandable'>generateMarkup</a>( <span class='pre'>spec, buffer</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>spec</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>buffer</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-generateStyles' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-method-generateStyles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-generateStyles' class='name expandable'>generateStyles</a>( <span class='pre'>styles, [buffer]</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Converts the styles from the given object to text. ...</div><div class='long'><p>Converts the styles from the given object to text. The styles are CSS style names\nwith their associated value.</p>\n\n<p>The basic form of this method returns a string:</p>\n\n<pre><code> var s = <a href=\"#!/api/Ext.DomHelper-method-generateStyles\" rel=\"Ext.DomHelper-method-generateStyles\" class=\"docClass\">Ext.DomHelper.generateStyles</a>({\n     backgroundColor: 'red'\n });\n\n // s = 'background-color:red;'\n</code></pre>\n\n<p>Alternatively, this method can append to an output array.</p>\n\n<pre><code> var buf = [];\n\n // ...\n\n <a href=\"#!/api/Ext.DomHelper-method-generateStyles\" rel=\"Ext.DomHelper-method-generateStyles\" class=\"docClass\">Ext.DomHelper.generateStyles</a>({\n     backgroundColor: 'red'\n }, buf);\n</code></pre>\n\n<p>In this case, the style text is pushed on to the array and the array is returned.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>styles</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The object describing the styles.</p>\n</div></li><li><span class='pre'>buffer</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[] (optional)<div class='sub-desc'><p>The output buffer.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]</span><div class='sub-desc'><p>If buffer is passed, it is returned. Otherwise the style\nstring is returned.</p>\n</div></li></ul></div></div></div><div id='method-insertAfter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-method-insertAfter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-insertAfter' class='name expandable'>insertAfter</a>( <span class='pre'>el, o, [returnElement]</span> ) : HTMLElement/<a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates new DOM element(s) and inserts them after el. ...</div><div class='long'><p>Creates new DOM element(s) and inserts them after el.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement/<a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>o</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The DOM object spec (and children)</p>\n</div></li><li><span class='pre'>returnElement</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>true to return a <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement/<a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The new node</p>\n</div></li></ul></div></div></div><div id='method-insertBefore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-method-insertBefore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-insertBefore' class='name expandable'>insertBefore</a>( <span class='pre'>el, o, [returnElement]</span> ) : HTMLElement/<a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates new DOM element(s) and inserts them before el. ...</div><div class='long'><p>Creates new DOM element(s) and inserts them before el.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement/<a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>o</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The DOM object spec (and children) or raw HTML blob</p>\n</div></li><li><span class='pre'>returnElement</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>true to return a <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement/<a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The new node</p>\n</div></li></ul></div></div></div><div id='method-insertFirst' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-method-insertFirst' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-insertFirst' class='name expandable'>insertFirst</a>( <span class='pre'>el, o, [returnElement]</span> ) : HTMLElement/<a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates new DOM element(s) and inserts them as the first child of el. ...</div><div class='long'><p>Creates new DOM element(s) and inserts them as the first child of el.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement/<a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>o</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The DOM object spec (and children) or raw HTML blob</p>\n</div></li><li><span class='pre'>returnElement</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>true to return a <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement/<a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The new node</p>\n</div></li></ul></div></div></div><div id='method-insertHtml' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-method-insertHtml' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-insertHtml' class='name expandable'>insertHtml</a>( <span class='pre'>where, el, html</span> ) : HTMLElement<span class=\"signature\"></span></div><div class='description'><div class='short'>Inserts an HTML fragment into the DOM. ...</div><div class='long'><p>Inserts an HTML fragment into the DOM.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>where</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Where to insert the html in relation to el - beforeBegin, afterBegin, beforeEnd, afterEnd.</p>\n\n<p>For example take the following HTML: <code>&lt;div&gt;Contents&lt;/div&gt;</code></p>\n\n<p>Using different <code>where</code> values inserts element to the following places:</p>\n\n<ul>\n<li>beforeBegin: <code>&lt;HERE&gt;&lt;div&gt;Contents&lt;/div&gt;</code></li>\n<li>afterBegin: <code>&lt;div&gt;&lt;HERE&gt;Contents&lt;/div&gt;</code></li>\n<li>beforeEnd: <code>&lt;div&gt;Contents&lt;HERE&gt;&lt;/div&gt;</code></li>\n<li>afterEnd: <code>&lt;div&gt;Contents&lt;/div&gt;&lt;HERE&gt;</code></li>\n</ul>\n\n</div></li><li><span class='pre'>el</span> : HTMLElement/TextNode<div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>html</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The HTML fragment</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'><p>The new node</p>\n</div></li></ul></div></div></div><div id='method-markup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-method-markup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-markup' class='name expandable'>markup</a>( <span class='pre'>spec</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the markup for the passed Element(s) config. ...</div><div class='long'><p>Returns the markup for the passed Element(s) config.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>spec</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The DOM object spec (and children).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-overwrite' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/Helper.html#Ext-DomHelper-method-overwrite' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-overwrite' class='name expandable'>overwrite</a>( <span class='pre'>el, o, [returnElement]</span> ) : HTMLElement/<a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates new DOM element(s) and overwrites the contents of el with them. ...</div><div class='long'><p>Creates new DOM element(s) and overwrites the contents of el with them.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement/<a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>o</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The DOM object spec (and children) or raw HTML blob</p>\n</div></li><li><span class='pre'>returnElement</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>true to return a <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement/<a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The new node</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});