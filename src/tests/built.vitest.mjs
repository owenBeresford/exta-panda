import { assert, describe, it } from "vitest";
import { JSDOM } from "jsdom";

import { page } from "./page-seed";

describe("TEST built artifact ", () => {
  let ram1 = 0;
  if (process) {
    ram1 = process.memoryUsage();
  }

  it("go 1: PANIC! ", async (context) => {
    let ram1 = 0;
    let d1 = new Date();
    if (process) {
      ram1 = process.memoryUsage();
    }

    const url = "http://192.168.0.35/resource/ancient-TLS?mobile=0";
    const dom = new JSDOM(
      `<!DOCTYPE html>
<html lang="en-GB" class="noJS" itemscope itemtype="http://schema.org/Article">
<head>
<!-- This website is written by a guy who claims to have lots of specialised technical skills, but this website only partially demonstrates them.  This website is a vehicle for about 200,000 words, please read some of them. -->
<title>Managing ancient TLS</title>
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-Language" content="en-GB" />
<meta name="Author" content="Owen Beresford" />
<meta name="Description" content="Transport Layer Security is very niche. Finally TLS 1.0, a very old protocol, was removed from Windows, the last vendor who were using it. I discuss the TLS context, technical details and upgrades." />
<meta name="google-site-verification" content="lSgIe7Nm0H0RYQ2ktQ4vr5Jz0iYGhQd7cTWoVDg3Xss" />
<link href="/asset/favicon-32x32.png" rel="icon" type="image/png" />
<meta itemprop="name" content="Managing ancient TLS">
<meta itemprop="description" content="Transport Layer Security is very niche. Finally TLS 1.0, a very old protocol, was removed from Windows, the last vendor who were using it. I discuss the TLS context, technical details and upgrades.">
<meta name="twitter:site" content="@channelOwen">
<meta name="twitter:title" content="Managing ancient TLS">
<meta name="twitter:description" content="Transport Layer Security is very niche. Finally TLS 1.0, a very old protocol, was removed from Windows, the last vendor who were using it. I discuss the TLS context, technical details and upgrades.">
<meta name="twitter:creator" content="@channelOwen">
<meta property="og:title" content="Managing ancient TLS" />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://owenberesford.me.uk/resource/ancient-TLS" />
<meta property="og:description" content="Transport Layer Security is very niche. Finally TLS 1.0, a very old protocol, was removed from Windows, the last vendor who were using it. I discuss the TLS context, technical details and upgrades." />
<meta property="og:site_name" content="OwenBeresford's very wordy site" />
<meta property="article:published_time" content="19th of May 2024, 12:07:03" />
<meta property="article:modified_time" content="19th of May 2024" />
<link rel="canonical" href="https://owenberesford.me.uk/resource/ancient-TLS" />
<!-- the below track is just a generic cheese track, but the style fits. progressive + uplifting tone.  I do not own the rights or anything. 
TODO: magic tune selection against some index/DB -->
<meta property="og:audio" content="https://www.youtube.com/watch?v=Brl7WmHDG-E" />

<link rel="stylesheet" href="/asset/ob1.min.css" />
<script type="application/ld+json">
  {
    "@context": "https://ogp.me/ns/article#",
    "@type": "Article",
    "name": "Managing ancient TLS",
	"article:published_time":"19th of May 2024, 12:07:03", 
    "article:modified_time":"19th of May 2024",
    "article:section":"technology",

    "author": {
      "@type": "Person",
      "name": "Owen Beresford"
    }
  }
</script>
</head>
<body id="body" class="annoyingBody">
 <div class="h4_page wholeArticle">
  <div class="after_menu articleContent">
   <main id="main">
    <article>
     <div class="blocker addReferences">
<div class="halferWords">
<p>Very short article.</p>


<h5 id="toc0"> Context</h5>
<p>All OS vendors will have soon removed support for TLS 1.0.  Microsoft was hanging around on this upgrade for a very long time, as they would like strong backwards compatibility <a href="https://news.thewindowsclub.com/microsoft-to-disable-tls-versions-1-0-and-1-1-by-default-in-windows-108353/" target="_blank">announcement for OS released September 2023</a> - this includes a list of services likely to break, some services deprecated <sup><a href="https://techcommunity.microsoft.com/t5/microsoft-sharepoint-blog/tls-1-0-and-1-1-deprecation/ba-p/1620264" target="_blank">1</a></sup>, TLS deprecations in Azure <sup><a href="https://devblogs.microsoft.com/devops/deprecating-weak-cryptographic-standards-tls-1-0-and-tls-1-1-in-azure-devops/" target="_blank">2</a></sup>, deprecation in Edge in 2020 <sup><a href="https://blogs.windows.com/msedgedev/2020/03/31/tls-1-0-tls-1-1-schedule-update-edge-ie11/" target="_blank">3</a></sup>.</p>


<h5 id="toc1"> Brief technical details</h5>
<p>As an introduction to terms, look at <a href="https://en.wikipedia.org/wiki/Cipher_suite" target="_blank">cipher suite</a>.   TLS 1.0 was introduced in 1999 <sup><a href="https://en.wikipedia.org/wiki/Transport_Layer_Security" target="_blank">4</a></sup>, and many issues have been found with it since that date <sup><a href="https://www.freecodecamp.org/news/attacks-on-ssl-tls-and-how-to-protect-your-system/" target="_blank">5</a></sup> <sup><a href="https://www.acunetix.com/blog/articles/tls-vulnerabilities-attacks-final-part/" target="_blank">6</a></sup> <sup><a href="https://crashtest-security.com/ssl-beast-attack-tls/" target="_blank">7</a></sup>.  The support for the versions is listed at <sup><a href="https://caniuse.com/?search=tls" target="_blank">8</a></sup>.   The wiki page includes a list of algorithms that are acceptable by each version of TLS.   It was formally deprecated as an ITEF spec in 2021, but many engineers had been avoiding it for sometime.   <br />
There are many different cyphers <sup><a href="https://wiki.mozilla.org/Security/Cipher_Suites" target="_blank">9</a></sup> <sup><a href="https://cheapsslsecurity.com/p/everything-you-need-to-know-about-an-ssl-cipher-cipher-lists/" target="_blank">10</a></sup>, process to list cyphers for a particular site <sup><a href="https://superuser.com/questions/109213/how-do-i-list-the-ssl-tls-cipher-suites-a-particular-website-offers" target="_blank">11</a></sup>.   My cursory reading led me to use Elliptic curves, since 2018, as the maths involved was harder to factor <sup><a href="https://en.wikipedia.org/wiki/Elliptic_curve" target="_blank">12</a></sup>.  This is not a decision that has meaning to anyone else.<br />
</p>


<h5 id="toc2"> Upgrade notes</h5>
<p>Obviously when running a webapp, and in possession of technical skills and access, one can set headers to encourage browsers to upgrade to better security.  The Upgrade-Insecure-Requests header <sup><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests" target="_blank">13</a></sup> should be set by all recentish browsers and requests better encryption.  The Upgrade header <sup><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade" target="_blank">14</a></sup> is only used by systems currently using HTTP1.1, and is targeted to get to HTTP2.<br />
For the client side, Warwick university did a systematic process in 2017, to support PCI-DSS better.   Notes for client webrowsers <sup><a href="https://warwick.ac.uk/services/its/servicessupport/web/sign-on/help/tls1-eol/" target="_blank">15</a></sup>.   Warwick's process seems to include upgrading payments made at parking-metres, so was thorough.  <br />
Some notes for github certs <sup><a href="https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities" target="_blank">16</a></sup> <sup><a href="https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities" target="_blank">17</a></sup>.<br />
Notes for setting certs in web-services will be published as part of the service documentation.  There are many choices of implementation for a web-service.  As web-services link to a common SSL library which supports many cert types, the cert type is easily fungible.  The upgrade process is normally add the new file, update the service config to point to new file, and restart service.</p>


<h5 id="toc3"> To test a host</h5>
<p>If you have a service already setup and need to document it for security notes or something, you are likely to need a technical breakdown on the SSL used on it.   Fortunately this is easy, there are many choices <sup><a href="https://www.ipvoid.com/tls-checker/" target="_blank">18</a></sup> ~ thesimplest ~ <sup><a href="https://www.ssllabs.com/ssltest" target="_blank">19</a></sup> <sup><a href="https://www.site24x7.com/tools/tls-checker.html" target="_blank">20</a></sup> ~ note other people will be able to see these results ~ <sup><a href="https://tls.support/" target="_blank">21</a></sup> ~ what your local browser is using.  If for some reason the data provided by a browser isn't detailed enough (likely for reporting).</p>


</div>
</div>
    </article>
   </main>
	<div id="contentGroup" class="adjacentGroup" --data-group="engineering"> <p>Some similar articles in engineering </p>
<div id="groupengineering" class="adjacentList"><a class="adjacentItem button" href="/resource/group-XXX?first=engineering" aria-label="This article lists all items in engineering group.">All of <br />engineering </a> </div>
 </div>

  </div>
  <fieldset class="outer_menu articleHeader">
	<legend></legend>
	<nav>
		<div id="navBar" class="row">
			<div class="column">
				<div class="top-bar fullWidth">
					<header><h1>Managing ancient TLS</h1></header>
			    	<p role="status" class="bigScreenOnly">    </p>
				</div>
				<div id="shareGroup" class="bibbles row addReading">
					<span class="allButtons"> 
						<a id="siteChartLink" class="button smallScreenOnly" href="/resource/site-chart" title="open a webpage of what articles this site holds.">Sitemap</a>
						<a id="rssLink" href="https://owenberesford.me.uk/resource/rss" title="Access the sites RSS feed."> <i class="fa fa-rss" aria-label="Open the RSS for this site." aria-hidden="true"></i> </a> 
						<span class="button smallScreenOnly" id="shareMenuTrigger" rel="nofollow"> Share </span>
						<span class="bigScreenOnly">Share: </span>
                        <a href="https://twitter.com/intent/tweet?text=I+think+this+is+important+https%3A%2F%2Fowenberesford.me.uk%2Fresource%2Fancient-TLS" title="Share this resource on your twitter account." target="_blank" class="bigScreenOnly"> <i class="fa fa-twitter" aria-label="Share this resource on your twitter account." aria-hidden="true"></i></a>
						<a href="#" id="mastoTrigger" class="masto bigScreenOnly" title="Share this article with *your* mastodon instance" >	<i class="fa fa-mastodon" aria-label="Share this article on *your* mastodon instance." aria-hidden="true"></i> </a>
						<a href="https://www.reddit.com/submit?url=https%3A%2F%2Fowenberesford.me.uk%2Fresource%2Fancient-TLS" target="_blank" title="Share this article with your Reddit audience" class="bigScreenOnly" ><i aria-label="Share this article with your Reddit audience." class="fa fa-reddit-square" aria-hidden="true"></i></a>
						<a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fowenberesford.me.uk%2Fresource%2Fancient-TLS" target="_blank" class="bigScreenOnly" title="Share current article with your linked-in audience." ><i class="fa fa-linkedin-square" aria-hidden="true" aria-label="Share this article with your linked-in audience."></i></a>
						<a title="Share current article with Hacker news/ Y combinator audience" target="_blank" class="bigScreenOnly" href="http://news.ycombinator.com/submitlink?u=https%3A%2F%2Fowenberesford.me.uk%2Fresource%2Fancient-TLS&amp;t=Managing+ancient+TLS"> <i class="fa fa-hacker-news" aria-label="Share this article with your Y combinator audience." aria-hidden="true"> </i></a>
						<a title="Share this article with your Xing audience." href="https://www.xing.com/spi/shares/new?url=https%3A%2F%2Fowenberesford.me.uk%2Fresource%2Fancient-TLS" target="_blank" class="bigScreenOnly" ><i class="fa fa-xing-square" aria-hidden="true" aria-label="Share this article with your Xing audience."></i> </a>
					</span>

					<span class="ultraSkinny bigScreenOnly"> 
						<span>Edited <time datetime="2024-05-19T12:07:00">19th of May 2024</time>
						</span>
						<span>Created <time datetime="2023-09-08T00:00:00" title="if the value says 03-03-2015; its wrong but that is when this project was moved to the current git project" >8th of Sep 2023</time> </span>
					</span>

				</div>
			</div>
			<dialog id="popup" class="popup1 bigScreenOnly">
				<form method="dialog" encoding="multipart/form-data" action="." name="mastoSelection"  >
					<label for="mastodonserver">your server: 
						<input id="mastodonserver" max-length="50" --data-url="https%3A%2F%2Fowenberesford.me.uk%2Fresource%2Fancient-TLS" type="text" value="" placeholder="mastodon.social" />  
					</label> 
					<span id="sendMasto" class="button masto" href="#" title="Share article to *your* mastodon server">Share article now</span>
					<span class="button trimmed" id="hideMasto" href="#" title="Close popup"> <i class="fa fa-cancel" aria-hidden="true"></i> Cancel </span>
				</form>
			</dialog>

<fieldset class="h4_menu column bigScreenOnly ">
<legend><span id="pageMenu"><i class="fa fa-ob1burger" aria-hidden="true"></i> </span></legend>
<menu class="h4_lean">
</menu>
<br />

</fieldset>
	</div>
<menu class="burgerMenu" >
<li class="h4_odd">Additional features</li>
<li class=""><a href="/resource/home"><i class="fa fa-angle-left" aria-hidden="true"></i> Home</a> </li> 
<li class="h4_odd"><a href="/resource/search">Search <i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
<li class=""><a href="/resource/appearance">Appearance <i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
<li class="h4_odd"><a href="/resource/contact-me">Contact me <i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
<li class=""><a href="#contentGroup">Similar articles</a></li>
</menu>
	</nav>
</fieldset>
		</div>
 <br class="blocker" />
 <div id="biblio" style="display:none;">
    <br class="blocker" />
 </div>
 
 <footer>
  <div class="h4_footer"> 
	<div class="leftFooter"> 
		<a href="https://www.plainenglish.co.uk/services/webcheck.html" target="_blank" title="They, er, don't have a service for >170,000 word sites, so no logo.">Campaign for Plain English</a><br />
		My profile: <a href="https://www.linkedin.com/in/owen-beresford-bb6ab030/" target="_blank" aria-label="my linked-in" title="Load my linked-in profile" ><i class="fixLinkedSq fa fa-linkedin-square" aria-hidden="true" aria-label="Open my linked in profile" ></i></a>
	</div> 
	<p> Page rendered <time datetime="2024-05-19T12:07:03">19th of May 2024, 12:07:03</time>, Copyright &copy; 2022 Owen Beresford, <a href="https://owenberesford.me.uk/resource/contact-me">contact me</a>.  Last modified <time datetime="2024-05-19T12:07:00">19th of May 2024</time>.
    <p>Read the generous <a rel="license" href="https://owenberesford.me.uk/resource/licence" title="Load the license term; but not that interesting">licence terms</a>, if you feel the need, there is a <a href="https://owenberesford.me.uk/resource/privacy#" title="Load the privacy terms" >privacy here</a>.    View the <a href="https://owenberesford.me.uk/resource/site-chart#" title="Load a page showing all the articles on this site">site map</a>.  <a href="#pageMenu">Jump to menu</a>
</div>
</footer>

</body>
</html>`,
      { url: url, referrer: url },
    );
    const [document, location, window] = [
      dom.window.document,
      dom.window.location,
      dom.window,
    ];

    console.log("XXXXX 1");
    const moduleA = await import("../../dist/ob1");
    console.log("XXXXX 2");

    let ram2 = 0;
    let d2 = new Date();

    if (process) {
      ram2 = process.memoryUsage();
    }
    if (ram1 !== 0) {
      console.log(
        "RAM used to make JSDOM: " +
          (ram2.heapUsed - ram1.heapUsed) +
          " " +
          (d2 - d1),
      );
    }
  });

  let ram2 = 0;
  if (process) {
    ram2 = process.memoryUsage();
  }
  if (ram1 !== 0) {
    console.log("RAM used to make JSDOM: " + (ram2.heapUsed - ram1.heapUsed));
  }
});
