(function () {
    var USERAGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36';
    var VENDOR = '';
    var PLATFORM = 'Windows';

    var defProp = function (prop, value) {
        Object.defineProperty(window.navigator, prop, {
            get: function () {
                return value;
            }
        });
    };

    defProp('userAgent', USERAGENT);
    defProp('appVersion', USERAGENT);
    defProp('vendor', VENDOR);
    defProp('platform', PLATFORM);
}());
