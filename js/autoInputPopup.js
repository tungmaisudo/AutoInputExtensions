$(document).ready(function () {
    var usernameAutoInput = localStorage["usernameAutoInput"];
    var passwordAutoInput = localStorage["passwordAutoInput"];
    if (usernameAutoInput != "" && passwordAutoInput != "") {
        $('#email').val(usernameAutoInput);
        $('#pwd').val(passwordAutoInput);
    }




    $('#btnSaveAutoInput').click(function () {
        var username = $('#email').val();
        var password = $('#pwd').val();
        if (username != "" && password != "") {
            localStorage["usernameAutoInput"] = username;
            localStorage["passwordAutoInput"] = password;
        }

        chrome.storage.sync.set({
            "usernameAutoInput": localStorage.usernameAutoInput,
            "passwordAutoInput": localStorage.passwordAutoInput
        }, function () {
            return alert("Đã lưu.");
        });

    });

    chrome.storage.sync.get(["usernameAutoInput", "passwordAutoInput"], function (res) {
        localStorage.usernameAutoInput = res.usernameAutoInput;
        localStorage.passwordAutoInput = res.passwordAutoInput;
    });


    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //     if (tabs.length == 0) {
    //         console.log("could not send mesage to current tab");
    //     } else {
    //         chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello, how are you content script?" }, function (response) {
    //             console.log("received message from content script: " + response.farewell);
    //         });
    //     }
    // });


});