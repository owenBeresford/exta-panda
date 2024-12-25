class e {
  set(e2, t2, n2) {
    let r2 = "";
    if (n2) {
      const e3 = /* @__PURE__ */ new Date();
      e3.setTime(e3.getTime() + 24 * n2 * 60 * 60 * 1e3), r2 = "expires=" + e3.toUTCString();
    }
    document.cookie = e2 + "=" + t2 + "; " + r2 + "; path=/ ;secure";
  }
  get(e2) {
    const t2 = e2 + "=", n2 = decodeURIComponent(document.cookie).split("; ");
    let r2 = "";
    return n2.forEach((e3) => {
      0 === e3.indexOf(t2) && (r2 = e3.substring(t2.length));
    }), r2;
  }
  wipe(e2) {
    const t2 = /* @__PURE__ */ new Date();
    t2.setTime(t2.getTime() + 288e5);
    const n2 = "expires=" + t2.toUTCString();
    document.cookie = e2 + "= ; " + n2 + "; path=/ ;secure", document.cookie = e2 + "= ; " + n2 + "; path=/ ";
  }
}
function t(e2, t2, n2, r2) {
  const o2 = f();
  e2 = e2.replaceAll(";", "%38"), r2 = r2.replaceAll(";", "%38"), n2 = n2.replaceAll(";", "%38"), t2 = t2.replaceAll(";", "%38");
  const a2 = JSON.stringify({ ft: e2, fs: t2, dn: n2, cr: r2 });
  o2.set(s, a2, 365.254);
}
function n(e2, t2 = "debug") {
  return new URLSearchParams(e2.search).has(t2);
}
function r(e2, ...t2) {
  e2 in console ? console[e2](`[${e2.toUpperCase()}] ${t2.join(", ")}`) : console.log(`[${e2.toUpperCase()}] ${t2.join(", ")}`);
}
const o = ".addReferences", a = o + " sup a", i = "https://owenberesford.me.uk/", s = "appearance", l = 16, c = "showBiblioErrors", u = 180;
async function d(e2, t2, o2) {
  const a2 = function() {
    if ("undefined" != typeof window)
      return window.fetch;
    if ("function" == typeof fetch)
      return fetch;
    throw r("error", "Please stop using old versions of node."), new Error("Please stop using old versions of Node");
  }(), i2 = n(o2);
  try {
    const n2 = await a2(e2, { credentials: "same-origin" });
    if (!n2.ok) {
      if (i2 && r("warn", "Failed to communicate with " + e2), t2)
        return { body: "nothing", headers: {}, ok: false };
      throw new Error("ERROR getting asset " + e2);
    }
    if (404 === n2.status)
      throw new Error("got HTTP 404");
    let o3 = "";
    return o3 = n2.headers.get("content-type").toLowerCase().startsWith("application/json") ? await n2.json() : await n2.text(), i2 && r("info", "Successful JSON transaction " + e2), { body: o3, headers: n2.headers, ok: true };
  } catch (n2) {
    if (i2 && r("error", "KLAXON, KLAXON failed: " + e2 + " " + n2.toString()), t2)
      return { body: "nothing", headers: {}, ok: false };
    throw new Error("ERROR getting asset " + e2 + " " + n2.toString());
  }
}
function f() {
  return "undefined" != typeof document ? new e() : { set(e2, t2, n2) {
  }, get: (e2) => "" };
}
function h(e2) {
  if (e2) {
    if ("textContent" in e2)
      return e2.textContent;
    if ("innerText" in e2)
      return e2.innerText;
    throw new Error("No text found");
  }
  throw new Error("No element for text found");
}
function p(e2) {
  return e2.pathname.split("/").pop() || "<name>";
}
function g(e2, t2) {
  let n2 = [];
  return n2 = t2.pathname.split("/"), (!n2 || n2.length < 2) && (n2 = ["resource", "home"]), e2.replace(/XXX/, n2.pop());
}
function m(e2) {
  return !(!e2.startsWith("192.168.") && "127.0.0.1" !== e2 && "::1" !== e2 && "0:0:0:0:0:0:0:1" !== e2 && "localhost" !== e2);
}
function y(e2, t2 = 80, n2 = "↩") {
  if (!e2 || e2.length < t2)
    return "" + e2;
  let r2 = 0, o2 = [];
  for (; r2 <= e2.length; )
    r2 + t2 > e2.length ? o2.push(e2.substring(r2, r2 + t2)) : o2.push(e2.substring(r2, r2 + t2) + n2), r2 += t2;
  return o2.join("\n");
}
function b(e2) {
  let t2 = String(e2);
  if (0 === e2 || e2 < 1)
    throw new Error("Value passed must be a counting number above 0");
  return 1 === t2.length && (t2 = "0" + t2), t2;
}
function w(e2) {
  if (["1", 1, "true", "TRUE", "on", "ON", "yes", "YES", "✔", "✓"].includes(e2))
    return true;
  if (["0", 0, "false", "FALSE", "off", "OFF", "no", "NO", "🗙", "✕", "✖", "✖", "✗", "✘"].includes(e2))
    return false;
  throw new Error("Unknown data " + e2);
}
function A(e2, t2, n2 = true) {
  let r2 = "";
  if (r2 = Number(e2) === e2 && e2 % 1 == 0 ? 0 === e2 ? "[No date]" : e2 < 1e10 ? new Date(1e3 * e2) : new Date(e2) : t2, "string" != typeof r2) {
    const e3 = ["", "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let t3;
    t3 = r2.getHours() ? b(r2.getHours()) : "00", r2 = " " + b(r2.getDate()) + "-" + (n2 ? e3[r2.getMonth() + 1] : b(r2.getMonth() + 1)) + "-" + r2.getUTCFullYear() + " " + (n2 ? "" : t3 + ":00");
  }
  return r2;
}
function S(e2, t2, n2) {
  try {
    if (null === n2)
      throw new Error("Oh no! No DOM object!!");
    const r2 = n2.createElement("template");
    if (r2.innerHTML = t2, "string" == typeof e2) {
      const t3 = n2.querySelector(e2);
      if (null === t3)
        throw new Error("Oh no! DOM element not found: " + e2);
      return t3.append(r2.content);
    }
    return e2.append(r2.content);
  } catch (e3) {
    r("error", e3.toString());
  }
}
function L(e2) {
  if (void 0 === e2)
    return false;
  const t2 = e2.getComputedStyle.toString().includes("[native code]");
  return !("boolean" != typeof t2 || !t2);
}
function R(e2, t2, n2) {
  try {
    if (!L(n2))
      return -1;
    return e2.getBoundingClientRect()[t2];
  } catch (e3) {
    return r("error", "Missing data:" + e3.message), -1;
  }
}
function E(e2, t2) {
  const n2 = e2.getBoundingClientRect();
  return [Math.round(t2.scrollY + n2.top), Math.round(t2.scrollX + n2.left)];
}
async function v(e2, t2, n2) {
  try {
    if (!n2.navigator.clipboard)
      throw new Error("No clipboard available");
    await n2.navigator.clipboard.writeText(t2.href);
  } catch (e3) {
    r("error", "FAILED: copy URL feature borked " + e3.message + "\nIt will fail on a HTTP site.");
  }
}
function q(e2 = 1040, t2, n2, r2) {
  if (t2.querySelector(".maquetteContainer") && function(e3, t3) {
    const n3 = new URLSearchParams(e3.search);
    if (n3.has("width"))
      return parseInt(n3.get("width"), 10);
    return t3.innerWidth;
  }(n2, r2) > e2) {
    const e3 = Array.from(t2.querySelectorAll(".maquetteContainer details"));
    for (let t3 = 0; t3 < e3.length; t3++)
      e3[t3].classList.contains("singlePopup") || e3[t3].classList.contains("screenDocs") || (e3[t3].open = true);
  }
}
function k(e2, t2, n2) {
  const r2 = new URLSearchParams(t2.search);
  try {
    e2.createEvent("TouchEvent");
    return r2.has("mobile") ? w(r2.get("mobile")) : T(e2, n2) > u;
  } catch (e3) {
    return !(!r2.has("mobile") || !w(r2.get("mobile")));
  }
}
function T(e2, t2) {
  try {
    const n2 = e2.createElement("div");
    n2.setAttribute("style", "width:1in;"), e2.body.appendChild(n2);
    const r2 = n2.offsetWidth * t2.devicePixelRatio;
    return n2.remove(), r2;
  } catch (e3) {
    return r("error", "ERROR " + e3.toString()), -1;
  }
}
function x(e2, t2) {
  const n2 = e2.documentElement, r2 = e2.body, o2 = t2.innerWidth || n2.clientWidth || r2.clientWidth, a2 = t2.innerHeight || n2.clientHeight || r2.clientHeight;
  let i2 = 0, s2 = 0;
  return s2 = "string" == typeof a2 ? parseInt(a2, 10) : a2, i2 = "string" == typeof o2 ? parseInt(o2, 10) : o2, [i2, s2];
}
let C = { indexUpdated: 0, gainingElement: "#biblio", referencesCache: "/resource/XXX-references", renumber: 1, maxAuthLen: 65, debug: true, runFetch: d };
function X(e2) {
  const t2 = "HTTP_ERROR, Site admin: recompile this meta file, as this is a new link.";
  return "Reference popup for link [" + (e2 + 1) + "]\n\nHTTP_ERROR, Site admin: recompile this meta file, as this is a new link.\n " + A(+/* @__PURE__ */ new Date("07-June-2024"), "not used", true) + "\n\n" + t2;
}
function N(e2, t2) {
  if (null === e2)
    return;
  const n2 = R(e2, "left", t2), r2 = R(e2, "top", t2);
  if (-1 === n2 && -1 === r2)
    return;
  let o2 = e2.parentNode;
  const a2 = ["LI", "SUP", "UL", "OL", "SPAN", "P"];
  for (; a2.includes(o2.tagName); )
    o2 = o2.parentNode;
  const i2 = Math.round(R(o2, "left", t2)), s2 = Math.round(R(o2, "top", t2)), c2 = Math.round(R(o2, "width", t2)), u2 = 30 * l, d2 = 5 * l;
  c2 < 600 ? e2.classList.add("leanCentre") : (n2 > i2 + c2 - u2 && e2.classList.add("leanLeft"), n2 < i2 + u2 && e2.classList.add("leanRight"), e2.classList.contains("leanRight") && e2.classList.contains("leanLeft") && (e2.classList.remove("leanRight"), e2.classList.remove("leanLeft"), e2.classList.add("leanCentre")));
  r2 < s2 - d2 && e2.classList.add("leanDown"), r2 > s2 + Math.round(R(o2, "height", t2)) && e2.classList.add("leanUp");
}
async function O(e2, t2, i2, s2) {
  if (C = Object.assign(C, { debug: n(i2) }, e2), 0 === t2.querySelectorAll(o).length)
    return void r("info", "This URL '" + i2.pathname + "' isn't marked-up for references, so skipped");
  const l2 = await C.runFetch(g(C.referencesCache, i2), false, i2);
  if (l2.ok && Array.isArray(l2.body)) {
    if (t2.querySelectorAll(a).length < l2.body.length)
      throw new Error("Recompile the meta data for  " + i2.pathname);
    const e3 = t2.querySelector("#biblio");
    e3 && e3.setAttribute("style", ""), function(e4, t3) {
      let n3 = e4.headers.get("last-modified");
      if (!n3)
        return;
      n3.indexOf("BST") > 0 && (n3 = n3.substring(0, n3.length - 4));
      const r2 = new Date(n3).getTime();
      r2 > 0 && S(".addReading .ultraSkinny", '<span>Links updated <time datetime="' + r2 + '" title="When this was last recompiled">' + new Date(r2).toLocaleDateString("en-GB", { hour12: false, dateStyle: "medium" }) + "</time> </span>", t3);
    }(l2, t2);
    const n2 = function(e4) {
      const t3 = ["[No author]", "Resource doesn't set a description tag.", "[No date]"], n3 = [];
      for (let r2 = 0; r2 < e4.length; r2++) {
        if (null === e4[r2]) {
          n3.push(X(r2));
          continue;
        }
        const o2 = A(e4[r2].date, t3[2], true);
        let a2 = e4[r2].title + "", i3 = e4[r2].desc;
        i3 = y(i3, 80), a2 = a2.replace(".", ". "), a2 = y(a2, 80);
        let s3 = e4[r2].auth || t3[0];
        "unknown" === e4[r2].auth && (s3 = t3[0]), s3.length > C.maxAuthLen && (s3 = s3.substring(0, C.maxAuthLen)), n3.push("Reference popup for link [" + (r2 + 1) + "]\n\n" + a2 + "\n" + s3 + " " + o2 + "\n\n" + i3);
      }
      return n3;
    }(l2.body);
    !function(e4, t3, n3) {
      let r2 = 1;
      const i3 = Array.from(t3.querySelectorAll(a));
      if (e4.length > i3.length)
        throw t3.querySelector(o).classList.add(c), t3.querySelector("p[role=status]").textContent += " Recompile meta data. ", new Error("Too many references in meta-data for this article, pls recompile.");
      for (let t4 = 0; t4 < e4.length; t4++)
        i3[t4].setAttribute("aria-label", "" + e4[t4]), N(i3[t4], n3), C.renumber && (i3[t4].textContent = "" + r2), r2++;
      if (i3.length > e4.length) {
        t3.querySelector("p[role=status]").textContent += "Recompile meta data";
        let r3 = e4.length;
        for (; r3 < i3.length; ) {
          const e5 = X(r3);
          i3[r3].setAttribute("aria-label", "" + e5), N(i3[r3], n3), C.renumber && (i3[r3].textContent = "" + (r3 + 1)), r3++;
        }
      }
    }(n2, t2, s2), t2.querySelector(o).classList.add(c);
  } else {
    !function(e4, t3) {
      const n2 = p(t3), r2 = Array.from(e4.querySelectorAll(a));
      for (let e5 = 0; e5 < r2.length; e5++) {
        const t4 = `Reference popup for link [${1 + e5}]
ERROR: No valid biblio file found.
site admin, today
HTTP_ERROR, no valid file called ${n2}-references.json found.
`;
        r2[e5].setAttribute("aria-label", "" + t4);
      }
      e4.querySelector(o).classList.add(c);
    }(t2, i2);
    const e3 = '<p class="error">Unable to get bibliographic data for this article.</p>';
    S(C.gainingElement, e3, t2), r("warn", "Unable to get meta data " + g(C.referencesCache, i2), JSON.stringify(Array.from(l2.headers.entries())));
  }
}
function M(e2, t2, n2) {
  t2.querySelectorAll("article a").forEach(function(r2) {
    "git" === h(r2).trim().toLowerCase() && (r2.textContent = "", S(r2, '<i class="fa fa-github" aria-hidden="true"></i> \n		 <span class="sr-only">git</span>', t2), e2 ? (r2.setAttribute("aria-label", function(e3) {
      const t3 = new URL(e3);
      let n3 = "[anon dev]", r3 = "";
      if (t3.username && (n3 = t3.username), t3.pathname) {
        const e4 = t3.pathname.split("/");
        n3 = e4[1], r3 = e4[2];
      } else if (t3.hostname.indexOf("github.io")) {
        const e4 = t3.hostname.split(".");
        n3 = e4[0], r3 = "The " + e4[0] + " project";
      }
      return "Reference popup for link [*]\n\n" + r3 + "\n" + n3 + " [recent time]\n\nA Github project ~ text auto generated without scrapping.";
    }(r2.getAttribute("href"))), N(r2, n2)) : r2.setAttribute("title", "Link to a github project."));
  });
}
function U(e2, t2, n2, r2) {
  if (!m(n2.host) && !k(t2, n2, r2))
    return false;
  const o2 = t2.querySelector("#shareMenu");
  return o2 && !o2.classList.replace("shareMenuOpen", "shareMenu") && o2.classList.replace("shareMenu", "shareMenuOpen"), false;
}
function j(e2, t2, n2, o2) {
  const a2 = t2.querySelector("#mastodonserver");
  let i2 = a2.value;
  const s2 = a2.getAttribute("data-url");
  if ("" === i2 || null === i2)
    return false;
  if (i2 = "https://" + i2 + "/share?text=I+think+this+is+important+" + s2, r("info", "Trying to open mastodon server, " + i2), !L(o2))
    throw Error("Test passed, for " + i2);
  return t2.querySelector("#popup").close(), o2.open(i2, "_blank"), k(t2, n2, o2) && U(0, t2, n2, o2), false;
}
function F(e2, t2, n2) {
  let r2 = e2.querySelector("#shareMenu #mastoTrigger");
  r2 && I(r2, P, e2, n2), r2 = e2.querySelector("#shareGroup .allButtons #mastoTrigger");
  const o2 = function(e3, t3 = "display", n3 = window) {
    let r3 = "";
    e3 && e3.computedStyleMap ? r3 = e3.computedStyleMap()[t3] : e3 && (r3 = n3.getComputedStyle(e3, null).getPropertyValue(t3));
    return r3;
  }(r2, "display", n2);
  o2 && "none" !== o2 && (r2.addEventListener("click", (t3) => P(t3, e2, n2)), r2.addEventListener("keypress", (t3) => P(t3, e2, n2))), r2 = e2.querySelector("#copyURL"), r2 && function(e3, t3, n3, r3, o3) {
    e3.addEventListener("click", async (e4) => (await t3(n3, r3, o3), false)), e3.addEventListener("touch", async (e4) => (await t3(n3, r3, o3), false)), e3.addEventListener("keypress", async (e4) => (await t3(n3, r3, o3), false));
  }(r2, v, e2, t2, n2), H(e2.querySelector("#popup #sendMasto"), j, e2, t2, n2);
  const a2 = Array.from(e2.querySelectorAll("#shareMenuTrigger, #shareClose"));
  for (const r3 in a2)
    H(a2[r3], U, e2, t2, n2);
  I(e2.querySelector("#hideMasto"), D, e2, n2);
}
function P(e2, t2, n2) {
  return L(n2) && t2.querySelector("#popup").showModal(), t2.querySelector("#popup input").focus(), false;
}
function D(e2, t2, n2) {
  return L(n2) && t2.querySelector("#popup").close(), false;
}
function I(e2, t2, n2, r2) {
  e2.addEventListener("click", (e3) => (t2(e3, n2, r2), false)), e2.addEventListener("touch", (e3) => (t2(e3, n2, r2), false)), e2.addEventListener("keypress", (e3) => (t2(e3, n2, r2), false));
}
function H(e2, t2, n2, r2, o2) {
  e2.addEventListener("click", (e3) => (t2(e3, n2, r2, o2), false)), e2.addEventListener("touch", (e3) => (t2(e3, n2, r2, o2), false)), e2.addEventListener("keypress", (e3) => (t2(e3, n2, r2, o2), false));
}
let B = { name: "", meta: "", perRow: 10, titleLimit: 40, rendered: false, iteration: 0, group: "system", count: 1, debug: true, runFetch: d };
function W(e2, t2, n2) {
  let r2 = "", o2 = n2.pathname.split("/").pop();
  const a2 = new URLSearchParams(n2.search);
  return "group-XXX" === o2 && a2.has("first") && (o2 = a2.get("first")), t2 ? a2.has("first") ? r2 += n2.pathname.replace("group-XXX", o2 + "-meta") : r2 += n2.pathname.replace(o2, e2 + "-meta") : r2 += n2.pathname.replace(o2, e2), r2 += n2.search + n2.hash, r2;
}
function $(e2, t2) {
  let n2 = "button";
  return e2 && (n2 += " lower"), n2;
}
function J(e2, t2) {
  return t2 + "" + e2.replace(/[^a-zA-Z0-9_]/g, "_");
}
function G(e2) {
  return e2.split("/").pop();
}
function _(e2) {
  let t2 = B.group;
  if ("XXX" === B.group) {
    const n2 = new URLSearchParams(e2.search);
    n2.has("first") && (t2 = n2.get("first"));
  }
  if ("XXX" === t2)
    throw new Error("Thou shalt supply the group somewhere");
  return t2;
}
function K(e2, t2, n2, r2, o2) {
  return B.name === "group-" + B.group || (t2 === e2 && (o2 = r2), r2 > 0 && o2 > 0 && n2 > 0 && r2 >= n2 - 1 && (r2 = 0)), [o2, n2, r2];
}
async function Y(e2, t2, o2, a2) {
  if (B = Object.assign(B, { name: p(o2), meta: W(B.group, ".json", o2), debug: n(o2), runFetch: d }, e2), "system" === B.group)
    throw new Error("Must set the article group, and not to 'system'.");
  B.meta = W(B.group, ".json", o2);
  const i2 = "group-XXX" === B.name || B.name === "group-" + B.group, s2 = "group" + B.group;
  if (k(t2, o2, a2) && !i2)
    1 === t2.querySelectorAll(".adjacentGroup .adjacentItem").length && (t2.querySelector(".adjacentGroup p").style.display = "none"), S("#" + s2, "<p>As mobile View, use the full page link to the left</p>", t2);
  else {
    const e3 = await B.runFetch(B.meta, false, o2);
    if (!e3.ok || !Array.isArray(e3.body))
      return r("info", "There doesn't seem to be a group meta data file."), void S("#" + s2, "<p>Internal error. Hopefully this will be fixed shortly. </p>", t2);
    if (i2) {
      const n2 = function(e4, t3, n3, r2, o3) {
        let a3 = "";
        for (const i3 in e4) {
          const s3 = J(i3, t3), l2 = k(n3, r2, o3) ? "<br />" : "";
          let c2 = e4[i3].desc;
          c2.length > 235 && (c2 = c2.substr(0, 235) + "..."), a3 += '<a class="adjacentItem" href="' + e4[i3].url + '" title="' + c2 + '">' + e4[i3].title + ' <span class="button">' + e4[i3].title + '</span><p id="adjacent' + s3 + '" >Author: ' + e4[i3].auth + " &nbsp; &nbsp; &nbsp;" + l2 + "  Last edit: " + A(e4[i3].date, "Unknown time", true) + " <br />Description: " + c2 + " </p></a>\n";
        }
        return a3;
      }(e3.body, s2, t2, o2, a2);
      S("#groupXXX", n2, t2), function(e4, t3) {
        const n3 = Array.from(t3.querySelectorAll(".top-bar.fullWidth header h1"));
        n3.length && (n3[0].textContent.includes("whatsmyname") || n3[0].textContent.includes("XXX")) && (n3[0].textContent = "Group " + e4);
        const r2 = Array.from(t3.querySelectorAll(".adjacentGroup p"));
        r2.length && r2[0].textContent.includes("XXX") && (r2[0].textContent = "Some similar articles in " + e4);
      }(_(o2), t2);
    } else {
      const n2 = function(e4) {
        let t3 = -1, n3 = B.perRow, r2 = [], o3 = 0, a3 = 0;
        for ([t3, n3, o3] = K(G(e4[0].url), B.name, e4.length, o3, t3); o3 < e4.length; o3++) {
          const i3 = e4[o3].title;
          if (i3 && t3 >= 0 && n3 > 0) {
            r2[a3] = { auth: e4[o3].auth, date: A(e4[o3].date, "[Unknown time]", true), url: e4[o3].url, offset: o3, title: e4[o3].title.substr(0, B.titleLimit), desc: e4[o3].desc }, i3.length > B.titleLimit && (r2[a3].title += "...");
            const t4 = e4[o3].desc;
            t4.length > 235 && (r2[a3].desc = t4.substr(0, 235) + "..."), n3--, a3++;
          }
          if ([t3, n3, o3] = K(G(e4[o3].url), B.name, n3, o3, t3), r2.length === e4.length)
            break;
          if (r2.length >= B.perRow)
            break;
        }
        return r2;
      }(e3.body);
      S("#" + s2, function(e4, t3) {
        let n3 = '<ul class="adjacentList">\n';
        for (const r2 in e4) {
          const o3 = J(r2, t3), a3 = $(e4[r2].desc.length > 110), i3 = "Title: " + e4[r2].title + "\nAuthor: " + e4[r2].auth + " &nbsp; &nbsp; Last edit: " + e4[r2].date + "\nDescription: " + e4[r2].desc;
          n3 += '<li> <a id="link' + o3 + '" class="' + a3 + '" href="' + e4[r2].url + '" aria-label="' + i3 + '" >' + e4[r2].title + "</a> </li>\n";
        }
        return 0 === e4.length ? n3 += "<li> Article doesn't seem setup correctly.</li></ul>" : n3 += '<li><a class="adjacentItem button" href="/resource/group-XXX?first=' + t3 + '" aria-label="This article lists all items in worklog group."> See full list </a></li></ul>', n3;
      }(n2, _(o2)), t2);
    }
  }
}
let V = { referencesCache: "/resource/XXX-references", gainingElement: "#biblio", losingElement: ".addReferences", renumber: 1, forceToEnd: 1, maxDescripLen: 230, maxAuthLen: 65, debug: true, runFetch: d };
async function z(e2, t2, a2) {
  if (V = Object.assign(V, { debug: n(a2) }, e2), 0 === t2.querySelectorAll(o).length)
    return void r("info", "URL '" + a2.pathname + "' isn't marked-up for references, so skipped");
  const s2 = t2.querySelector("#biblio");
  s2 && s2.setAttribute("style", ""), t2.querySelector(V.gainingElement + " *").replaceChildren(), S(V.gainingElement, '<h2 class="biblioSection">References (for mobile UI)</h2> \n<p>The references embedded in the text are displayed here. </p>', t2);
  const l2 = await V.runFetch(g(V.referencesCache, a2), false, a2);
  if (l2.ok && Array.isArray(l2.body)) {
    const e3 = function(e4) {
      let t3 = '<aside role="footnote"><ol class="mobileBiblio">';
      for (const n2 in e4)
        t3 += `<li>
<a href="${e4[n2].url}"> 
<h5>${e4[n2].title}</h5>
<span>${e4[n2].desc}</span>
<span>by ${e4[n2].auth} on ${e4[n2].date}</span>
</a>
</li>
`;
      return t3 += "</ol></aside>", t3;
    }(function(e4) {
      const t3 = ["[No author]", "Resource doesn't set a description tag.", "[No date]"], n2 = [];
      for (const r2 in e4) {
        if (null === e4[r2]) {
          n2.push({ auth: "[No author]", date: "[No date]", desc: "HTTP_ERROR, Site admin: recompile this meta file, as this is a new link.", offset: parseInt(r2, 10), title: "HTTP_ERROR, Site admin: recompile this meta file, as this is a new link.", url: i });
          continue;
        }
        const o2 = A(e4[r2].date, t3[2], true);
        let a3 = e4[r2].title + "";
        a3 = a3.replace(".", ".  ");
        let s3 = e4[r2].desc + "";
        s3.length > V.maxDescripLen && (s3 = s3.substring(0, V.maxDescripLen));
        let l3 = e4[r2].auth || t3[0];
        "unknown" === e4[r2].auth && (l3 = t3[0]), l3.length > V.maxAuthLen && (l3 = l3.substring(0, V.maxAuthLen)), n2.push({ auth: l3, date: o2, desc: s3, offset: parseInt(r2, 10), title: a3, url: e4[r2].url });
      }
      return n2;
    }(l2.body));
    !function(e4, t3) {
      if (!V.renumber)
        return;
      const n2 = Array.from(t3.querySelectorAll(V.losingElement + " sup a"));
      for (let e5 = 0; e5 < n2.length; e5++)
        n2[e5].textContent = "" + (e5 + 1), V.forceToEnd && (n2[e5].href = "#biblio");
    }(l2.body, t2), S(V.gainingElement, e3, t2);
  } else {
    const e3 = '<p class="error">Unable to get bibliographic data for this article.</p>';
    S(V.gainingElement, e3, t2), r("warn", "Unable to get meta data " + g(V.referencesCache, a2), JSON.stringify(Array.from(l2.headers.entries())));
  }
}
function Q(e2, t2) {
  const n2 = e2.target, r2 = function(e3, t3) {
    if (e3.tagName === t3)
      return e3;
    for (; e3.tagName !== t3; ) {
      if ("A" === e3.tagName)
        return e3;
      if ("BODY" === e3.tagName)
        return;
      if (e3.classList.contains("maquette"))
        return;
      e3 = e3.parentElement;
    }
    return e3;
  }(n2, "DETAILS");
  if (r2 && "A" === r2.tagName)
    return true;
  if (r2) {
    const t3 = r2;
    if (e2.preventDefault(), e2.stopPropagation(), t3 && t3.open) {
      if ("SUMMARY" !== n2.tagName && null !== t3.querySelector("code"))
        return false;
      t3.open = false;
    } else
      t3.open = true;
  } else {
    const n3 = t2.querySelector("details[open]");
    if (!n3)
      return true;
    e2.preventDefault(), e2.stopPropagation(), n3.open = false;
  }
  return false;
}
function Z(e2) {
  const t2 = Array.from(e2.querySelectorAll(".popOverWidget details"));
  t2.length && (r("info", "Modal widget found, extra UI features added"), t2.forEach(function(t3) {
    t3.addEventListener("click", function(t4) {
      return Q(t4, e2);
    });
  }), e2.body.addEventListener("click", function(t3) {
    return Q(t3, e2);
  }), e2.body.addEventListener("keydown", function(t3) {
    return function(e3, t4) {
      if ("Escape" === e3.code || "Escape" === e3.key) {
        const n2 = Array.from(t4.querySelectorAll("details[open]"));
        if (n2.length)
          for (let e4 = 0; e4 < n2.length; e4++)
            n2[e4].open = false;
        return e3.preventDefault(), false;
      }
      return true;
    }(t3, e2);
  }));
}
let ee = { pageInitRun: 0 };
function te(e2, t2) {
  let n2 = null, o2 = "";
  if ("string" == typeof e2) {
    o2 = e2;
    const a3 = t2.querySelector(e2);
    if ("SECTION" !== a3.tagName)
      throw r("error", "what is this? ", a3.outerHTML, a3.tagName), new Error("Bad call");
    n2 = t2.querySelector('.tabList a[href="' + e2 + '"] ');
  } else {
    const r2 = e2.target;
    n2 = t2.querySelector("#" + r2.id), o2 = "" + n2.getAttribute("href");
  }
  if (!o2)
    return void r("ERROR", "Malconfigured tabs!! " + e2 + " => '" + o2 + "' matches nothing");
  const a2 = Array.from(t2.querySelectorAll(".tab-title"));
  for (let e3 = 0; e3 < a2.length; e3++)
    a2[e3].classList.remove("is-active");
  const i2 = Array.from(t2.querySelectorAll(".tab-title>a"));
  for (let e3 = 0; e3 < i2.length; e3++)
    i2[e3].setAttribute("aria-hidden", "true");
  const s2 = Array.from(t2.querySelectorAll(".tabs-content .tabs-panel"));
  for (let e3 = 0; e3 < s2.length; e3++)
    s2[e3].classList.remove("is-active"), s2[e3].setAttribute("aria-hidden", "true");
  const [l2] = Array.from(t2.querySelectorAll(".tabs-content " + o2));
  l2.classList.add("is-active"), l2.setAttribute("aria-hidden", "false");
  n2.parentNode.classList.add("is-active"), n2.setAttribute("aria-hidden", "false");
}
function ne() {
  return ee.pageInitRun;
}
!async function(e2, t2, o2, a2) {
  ee = Object.assign(ee, {}, e2);
  const i2 = n(o2);
  if (ee.pageInitRun)
    return void r("warn", "Extra panda should not be run more than once per page");
  ee.pageInitRun = 1;
  const l2 = Array.from(t2.querySelectorAll(".noJS"));
  for (let e3 = 0; e3 < l2.length; e3++)
    l2[e3].classList.remove("noJS");
  !function(e3, t3) {
    e3.querySelector("body").setAttribute("style", "--offset-height: 0;");
    const n2 = Array.from(e3.querySelectorAll(".lotsOfWords, .halferWords, .fewWords"));
    for (let e4 = 0; e4 < n2.length; e4++)
      n2[e4].setAttribute("style", "--offset-height: " + E(n2[e4], t3)[0] + "px;");
  }(t2, a2), function(e3, t3, r2) {
    const o3 = k(e3, t3, r2);
    if (!m(t3.host) && !o3)
      return;
    o3 && (e3.querySelector("#sendMasto").textContent = "Share article");
    const a3 = ['<li id="shareClose"> <i class="fa fa-cancel" aria-hidden="true"></i> </li>	<li> <a class="hunchUp" id="copyURL"><i class="fa fa-copy" aria-hidden="true"></i><span class="hunchUp"> copy<br /> URL</span> </a> </li>'], i3 = ["shareMenuTrigger", "siteChartLink", "rssLink"], s2 = Array.from(e3.querySelectorAll(".allButtons a")), l3 = !m(t3.host) && !n(t3), c3 = e3.querySelector(".allButtons");
    for (const e4 in s2) {
      if (i3.includes(s2[e4].id))
        continue;
      const t4 = s2[e4].cloneNode(true);
      l3 && c3.removeChild(s2[e4]), t4.classList.remove("bigScreenOnly"), a3.push("<li>"), a3.push(t4.outerHTML), a3.push("</li>"), s2[e4].getAttribute("id") && s2[e4].setAttribute("id", "old" + s2[e4].getAttribute("id"));
    }
    a3.unshift('<nav><div class="shareMenu" id="shareMenu"><menu id="mobileMenu">'), a3.push("</menu></div></nav>"), S("#navBar", a3.join("\n"), e3);
  }(t2, o2, a2), F(t2, o2, a2);
  const c2 = null !== t2.querySelector(".addReferences");
  M(c2, t2, a2), function(e3, t3, n2) {
    t3.querySelectorAll("article a").forEach(function(r2) {
      "docs" === h(r2).trim().toLowerCase() && (r2.textContent = "", S(r2, '<i class="fa fa-book-open" aria-hidden="true"></i>\n		 <span class="sr-only">docs</span>', t3), r2.setAttribute(e3 ? "aria-label" : "title", "Link to the project docs; it may be a git page, or a separate webpage. "), e3 && N(r2, n2));
    });
  }(c2, t2, a2), function(e3) {
    const t3 = Array.from(e3.querySelectorAll(".addArrow"));
    for (let n2 = 0; n2 < t3.length; n2++)
      S(t3[n2].parentElement, '<i class="fa fa-play specialPointer" aria-hidden="true"></i>', e3);
  }(t2), function(e3) {
    const t3 = new RegExp("`([^`]+)`", "g"), n2 = new RegExp("/ /", "g"), r2 = Array.from(e3.querySelectorAll(".addBashSamples"));
    if (r2.length > 0)
      for (let e4 = 0; e4 < r2.length; e4++)
        r2[e4].innerHTML = r2[e4].innerHTML.replaceAll(t3, '<code class="bashSample" title="Quote from a bash; will add copy button">$1</code>').replaceAll(n2, "//");
  }(t2), function(e3) {
    const t3 = f().get(s);
    if (!t3)
      return;
    const n2 = JSON.parse(t3);
    if (n2.ft = n2.ft.replaceAll("%38", ";"), n2.cr = n2.cr.replaceAll("%38", ";"), n2.dn = n2.dn.replaceAll("%38", ";"), n2.fs = n2.fs.replaceAll("%38", ";"), !n2.ft || !n2.fs)
      return;
    const r2 = "body, .annoyingBody { font-family: " + n2.ft + "; font-size: " + n2.fs + "; direction:" + n2.dn + "; }", o3 = e3.createElement("style");
    o3.setAttribute("id", "client-set-css"), o3.innerText = r2, e3.getElementsByTagName("head")[0].append(o3);
  }(t2), Z(t2), q(1040, t2, o2, a2), !k(t2, o2, a2) && "/resource/home" !== o2.pathname && t2.querySelectorAll(".reading").length < 2 && function(e3, t3, o3) {
    const a3 = /[ \t\n\r.(),~]/g, i3 = Object.assign({}, { timeFormat: "m", dataLocation: ".blocker", target: "#shareGroup", wordPerMin: 275, codeSelector: "code", refresh: false, debug: n(o3) }, e3), s2 = i3.dataLocation + " img, " + i3.dataLocation + " picture, " + i3.dataLocation + " object";
    let l3 = h(t3.querySelector(i3.dataLocation)).split(a3).filter((e4) => e4).length / i3.wordPerMin;
    if (l3 += t3.querySelectorAll(s2).length / 5, i3.codeSelector && t3.querySelectorAll(i3.codeSelector)) {
      let e4 = 0;
      t3.querySelectorAll(i3.codeSelector).forEach(function(t4) {
        e4 += h(t4).split(a3).filter((e5) => e5).length;
      }), e4 && (l3 += 3 * e4 / i3.wordPerMin);
    }
    if (l3 < 1)
      return void r("info", "No reading time displayed for this article");
    if (i3.refresh) {
      const e4 = t3.querySelector(i3.target + " a.reading");
      e4 && e4.parentNode.removeChild(e4);
    }
    l3 = Math.round(l3);
    const c3 = '<a class="reading" title="See longer version of this reading guide." href="/resource/jQuery-reading-duration">To read: ' + l3 + i3.timeFormat + "</a>";
    S(i3.target, c3, t3);
  }({ dataLocation: "#main", target: ".addReading", debug: i2, refresh: true }, t2, o2);
  {
    const e3 = t2.querySelectorAll(".tabComponent");
    for (let n2 = 0; n2 < e3.length; n2++) {
      const r2 = Array.from(e3[n2].querySelectorAll(".tab-title a"));
      for (let e4 = 0; e4 < r2.length; e4++)
        u2 = r2[e4], p2 = (e5) => {
          te(e5, t2);
        }, u2.addEventListener("click", p2), u2.addEventListener("touch", p2), u2.addEventListener("keypress", p2);
    }
    "" !== o2.hash && te(o2.hash, t2);
  }
  var u2, p2;
  if (o2.pathname.match("group-")) {
    const e3 = function(e4, t3) {
      const n2 = t3.pathname.split("/group-");
      if (Array.isArray(n2) && n2.length > 1 && "XXX" !== n2[1])
        return n2[1];
      const r2 = new URLSearchParams(t3.search);
      if (r2.has("first"))
        return r2.get("first");
      if (e4 && e4.getAttribute("data-group")) {
        let t4 = e4.getAttribute("data-group");
        return t4 = t4.trim(), t4.split(",").map((e5, t5) => e5.trim())[0];
      }
      throw new Error("KLAXON, KLAXON, I do not know how to build an adjacent list for " + t3.href);
    }(null, o2);
    e3 && await Y({ group: e3, debug: i2, runFetch: "adjacentRunFetch" in ee ? ee.adjacentRunFetch : d }, t2, o2, a2);
  } else {
    k(t2, o2, a2) ? await z({ debug: i2, renumber: 1, runFetch: "mobileRunFetch" in ee ? ee.mobileRunFetch : d }, t2, o2) : await O({ debug: i2, renumber: 1, runFetch: "desktopRunFetch" in ee ? ee.desktopRunFetch : d }, t2, o2, a2);
    const e3 = function(e4, t3 = document) {
      const n2 = t3.querySelector(e4);
      if (!n2)
        return [];
      const r2 = n2.getAttribute("data-group");
      if (!r2)
        return [];
      let o3 = r2.split(",");
      return o3 = o3.map((e5, t4) => e5.trim()), "XXX" === o3[0] && o3.shift(), [...o3];
    }("div#contentGroup", t2);
    if (0 === e3.length)
      r("info", "This URL '" + o2.pathname + "' has no Adjacent groups defined.");
    else
      for (let n2 = 0; n2 < e3.length; n2++)
        await Y({ group: e3[n2], debug: i2, iteration: n2, count: e3.length, runFetch: "adjacentRunFetch" in ee ? ee.adjacentRunFetch : d }, t2, o2, a2);
  }
  n(o2, "select") && (r("info", "select and word count feature is ENABLED.  Access= <alt> + w"), t2.addEventListener("keydown", (e3) => {
    "w" === e3.key && e3.altKey && r("info", "Word count of selection: " + function(e4) {
      const t3 = /^[0-9]{1,3}$/;
      return Array.from(e4.matchAll(/[^ \t\n\r.(),~]+/g)).filter((e5) => !("" === e5[0] || e5[0].match(t3))).length;
    }(function(e4) {
      try {
        const t3 = e4.getSelection().getRangeAt(0);
        return t3.startOffset === t3.endOffset ? "" : "" + t3.cloneContents().textContent;
      } catch (e5) {
        return r("warn", "Unable to get data for selection", e5.message), "";
      }
    }(a2)));
  })), "undefined" != typeof document && "function" == typeof document.pageStartup ? document.pageStartup() : r("info", "No article specific scripting found, (it may load manually ATF)");
}({}, document, location, window);
export {
  S as appendIsland,
  T as calcScreenDPI,
  x as currentSize,
  ne as hasBeenRun,
  k as isMobile,
  r as log,
  d as runFetch,
  t as storeAppearance
};
