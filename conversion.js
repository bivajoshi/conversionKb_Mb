var conversion = {
    fileSize: function (fileSize_kb) {
        fileSize_mb = fileSize_kb / 1000;
        console.log(fileSize_kb + "KB converted to:" + fileSize_mb + "MB");
    }
}

module.exports = conversion;