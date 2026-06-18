function delayedLog(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

delayedLog("Hello world", 4000);