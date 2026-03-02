function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*.wikipedia.org/wiki/Monkey*")) {
        return "PROXY 127.0.0.1:8080"; 
    }

    if (dnsDomainIs(host, "wikipedia.org") || shExpMatch(host, "*.wikipedia.org")) {
        return "PROXY 127.0.0.1:8080";
    }


    if (dnsDomainIs(host, "scratch.mit.edu") || dnsDomainIs(host, "mit.edu")) {
        return "DIRECT";
    }

    return "DIRECT";

}
