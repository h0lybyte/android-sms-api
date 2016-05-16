cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.cordova.plugins.sms/www/sms.js",
        "id": "com.cordova.plugins.sms.Sms",
        "clobbers": [
            "window.sms"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.cordova.plugins.sms": "0.1.10",
    "cordova-plugin-whitelist": "1.2.2"
};
// BOTTOM OF METADATA
});