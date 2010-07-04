DeliciousSafariTextSelection = new Object; // I'm not sure, do we need to namespace work?

DeliciousSafariTextSelection.replyToMessage = function(aMessageEvent) {
   if (aMessageEvent.name === "getSelection")
   {
        var textSelection = '';
        if (document.getSelection) {
            textSelection = document.getSelection();
        }
        var messageResponse = encodeURIComponent(textSelection); //must pass back data URI encoded
    	safari.self.tab.dispatchMessage("getSelection", messageResponse);
    }
}
safari.self.addEventListener("message", DeliciousSafariTextSelection.replyToMessage, false);