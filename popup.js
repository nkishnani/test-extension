/* popup.js
 * --------
 * Here, we initialize an event listener to recognize a click 
 * on our button within our extension's HTML. We track the current
 * tab and send it over the content.js to analyze.
 */


document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', onclick, false)
  
  function onclick () {
    // Use Chrome API to find current active tab
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
    })
  }
  
  function setCount (res) {
    const div = document.createElement('div')
    div.textContent = `${res.count} instances of basketball`
    document.body.appendChild(div)
  }
}, false)