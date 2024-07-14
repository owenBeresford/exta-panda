import hljs from "highlight.js/lib/core";
import { Language, HLJSApi } from "highlight.js";
import * as javascript from "highlight.js/lib/languages/perl";

// custom written loader as code is packed in a legacy fashion
hljs.registerLanguage("perl", (hl: HLJSApi): Language => {
  return javascript.default(hl);
});

/**
 * execHighlight
 * Apply the highlighting for the current language
 
 * @param {Document = document} dom
 * @public
 * @return {void}
 */
export function execHighlight(dom: Document = document): void {
  dom.querySelectorAll('code[lang="perl"]').forEach((el: HTMLElement): void => {
    hljs.highlightElement(el);
  });
}

if (typeof window.process === "undefined") {
  execHighlight(document);
}
