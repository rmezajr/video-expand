chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(tab.url.indexOf("://www.youtube.com/watch?") > -1) {
		chrome.pageAction.show(tabId);
	}
});

chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.pageAction.getTitle({
		"tabId": tab.id
	}, function(result) {
		var icon, title;
		
		switch(result) {
			case "expand":
				icon = "icons/pa_shrink.png";
				title = "shrink";
				break;
			case "shrink":
				icon = "icons/pa_expand.png";
				title = "expand";
		}
		
		chrome.pageAction.setTitle({
			"tabId": tab.id,
			"title": title
		});
		chrome.pageAction.setIcon({
			"tabId": tab.id,
			"path": icon
		});
		chrome.tabs.executeScript(tab.id, {
			file: "js/action.js"
		});
	});
});
