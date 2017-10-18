
$(document).ready(function () {


    // chrome.runtime.onMessage.addListener(
    //     function (request, sender, sendResponse) {
    //         console.log(sender.tab ?
    //             "from a content script:" + sender.tab.url :
    //             "from the extension");


    //         console.log("received message from popup: " + request.greeting);

    //         sendResponse({ farewell: "I'm good, thank you popup!" });
    //     }); 

    // chrome.storage.sync.set({
    //     "usernameAutoInput": "fawewacaw",
    //     "passwordAutoInput": "fwaefawe"
    // }, function () {
    //     return alert("Đã lưu.");
    // });

    // chrome.storage.sync.get(["usernameAutoInput", "passwordAutoInput"], function (res) {
    //     usernameAutoInput = res.usernameAutoInput;
    //     passwordAutoInput = res.passwordAutoInput;
    // });

    var valueUsername = "<input type=hidden id='usernameAutoInput' value='aaa'>";
    var valuePassword = "<input type=hidden id='passwordAutoInput' value='bbbbbb'>";

    $('body').append(valueUsername);
    $('body').append(valuePassword);

    var s = document.createElement('script');
    s.src = chrome.extension.getURL('js/autoInputVal.js');
    (document.head || document.documentElement).appendChild(s);
});
