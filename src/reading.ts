/*jslint white: true, browser: true, devel: true, nomen: true, todo: true */
import { register } from './code-collection';
import { appendIsland } from './dom-base';
import { pullout } from './string-base';
import { ReadingProps } from './all-types';

register("readingDuration", readingDuration);

/**
 * readingDuration
 * A function to count readable words in the current DOM, and compute expected reading time.
 *
 * Note: conversion to minutes is still hard coded, mostly as I cannot see value in other formats.
 * @param {ReadingProps} opts
 * @param {Document =document} dom
 * @public
 * @return {void}
 */
function readingDuration(opts:ReadingProps, dom=document):void {
	const RE=/\b[^ (),;.\t\n]{3,}\b/g;
	let options = Object.assign({}, {
		timeFormat:'m', 
		dataLocation:'.blocker',
		target:'#shareGroup',
		wordPerMin:275, 
		codeSelector:'code',
		refresh:false,
	}, opts) as ReadingProps;
	let h1="";
// I would like to move this into the config
	let mm=options.dataLocation+" img, "+options.dataLocation+" picture, "+options.dataLocation+" object";
	let duration:number = ( pullout( dom.querySelector(options.dataLocation) as HTMLElement )
						.match(RE).length)/options.wordPerMin * 60;
	duration += dom.querySelectorAll( mm).length * 12;

	if(options.codeSelector && dom.querySelectorAll(options.codeSelector) ) {
		let tt=0;
		dom.querySelectorAll(options.codeSelector).forEach( function(a:Element, b:number){
			tt+= pullout( a ).match(RE ).length;
		});
		if( tt ) {
			duration += (tt*3) /(options.wordPerMin * 60);
		}
	}

	if(options.refresh) {
		let tt=dom.querySelector(options.target+' a.reading');
		if(tt) {
			tt.parentNode.removeChild( tt);
		}
	}

	duration=Math.round(duration/60);
 	h1='<a class="reading" title="See longer version of this reading guide." href="/resource/jQuery-reading-duration">To read: '+duration+options.timeFormat+'</a>';
	appendIsland(options.target, h1, dom);
}

/* access to functions for unit tests */
export const TEST_ONLY ={ readingDuration };

