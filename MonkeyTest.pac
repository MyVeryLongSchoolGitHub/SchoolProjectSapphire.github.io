function FindProxyForURL(url, host) {
    // 1. Target the specific "Monkey" page
    if (shExpMatch(url, "*.wikipedia.org/wiki/Monkey*")) {
        return "PROXY 127.0.0.1:8080"; 
    }

    // 2. Target the ENTIRE Wikipedia site
    if (dnsDomainIs(host, "wikipedia.org") || shExpMatch(host, "*.wikipedia.org")) {
        return "PROXY 127.0.0.1:8080";
    }

    // 3. Everything else goes through your normal Wi-Fi
    return "DIRECT";
}