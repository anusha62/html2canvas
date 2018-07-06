webpackJsonp([0x6413d07df7fd],{434:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Before you get started with the script, there are a few things that are good to know regarding the\nscript and some of its limitations.</p>\n<h2>Introduction</h2>\n<p>The script allows you to take "screenshots" of webpages or parts of it, directly on the users browser.\nThe screenshot is based on the DOM and as such may not be 100% accurate to the real representation\nas it does not make an actual screenshot, but builds the screenshot based on the information\navailable on the page.</p>\n<h2>How it works</h2>\n<p>The script traverses through the DOM of the page it is loaded on. It gathers information on all the elements\nthere, which it then uses to build a representation of the page. In other words, it does not actually take a\nscreenshot of the page, but builds a representation of it based on the properties it reads from the DOM.\n<br>\n<br>\nAs a result, it is only able to render correctly properties that it understands, meaning there are many\nCSS properties which do not work. For a full list of supported CSS properties, check out the\n<a href="/features/">supported features</a> page.</p>\n<h2>Limitations</h2>\n<p>All the images that the script uses need to reside under the <a href="http://en.wikipedia.org/wiki/Same_origin_policy">same origin</a>\nfor it to be able to read them without the assistance of a <a href="/proxy/">proxy</a>. Similarly, if you have other <code class="language-text">canvas</code>\nelements on the page, which have been tainted with cross-origin content, they will become dirty and no longer readable by html2canvas.</p>\n<p>The script doesn\'t render plugin content such as Flash or Java applets.</p>\n<h2>Browser compatibility</h2>\n<p>The library should work fine on the following browsers (with <code class="language-text">Promise</code> polyfill):</p>\n<ul>\n<li>Firefox 3.5+</li>\n<li>Google Chrome</li>\n<li>Opera 12+</li>\n<li>IE9+</li>\n<li>Edge</li>\n<li>Safari 6+</li>\n</ul>',frontmatter:{title:"About",description:"Learn about html2canvas, how it works and some of its limitations",previousUrl:null,previousTitle:null,nextUrl:"/getting-started",nextTitle:"Getting Started"}}},pathContext:{slug:"/documentation/"}}}});
//# sourceMappingURL=path---documentation-4fd687b9f8b41b6c761f.js.map