/* content.js
 * ----------
 * This file contains the logic for finding the regex matches 
 * on the current page and sending that number of matches 
 * back to the calling function.
 */

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const re = new RegExp('basketball', 'gi')
  const matches = document.documentElement.innerHTML.match(re)
  sendResponse({count: matches.length})
})
