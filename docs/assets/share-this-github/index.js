// GitHub Issue Sharer for use with the share-this npm package
//
// https://github.com/MaxArt2501/share-this
//
// Copyright (c) 2016-2018 Jeffrey Arnold <jeffrey.arnold@gmail.com>
// MIT License (MIT)
class GitHubIssueSharer {

    constructor(repo, label = null) {
        this.repo = repo;
        this.label = label;
        this.name = "github";
    }

    quoteLines(text) {
        return text.replace(/\r\n/, "\n").split("\n").map(x => "> " + x).join("\n");
    }

    render(text, rawText, refUrl) {
        const url = this.getShareUrl(text, refUrl);
        return `<a href="${url}" target="_blank" class="share-this-github"><i class="fab fa-github"></i></a>`;
    }

    getBody(text, refUrl) {
        const quoted = this.quoteLines(text);
        return `From <${refUrl}>:\n\n${quoted}\n\nWrite your message HERE.`;
    }

    getShareUrl(text, refUrl) {
        const params = {
          body: this.getBody(text, refUrl)
        };
        // label is optional
        if (this.label) {
          params.labels = this.label;
        }
        const queryString = Object.keys(params).map(key => key + '=' + encodeURIComponent(params[key])).join('&');
        return `https://github.com/${this.repo}/issues/new?${queryString}`;
    }
}
