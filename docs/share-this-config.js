// settings for ShareThis
const shareThis = window.ShareThis;
const twitterSharer = window.ShareThisViaTwitter;

// set this to your
const githubRepo = "jrnold/bookdown-github-issues";
// optionally add a github label to use
const githubIssueLabel = null;
const githubSharer = new GitHubIssueSharer(githubRepo, label = githubIssueLabel);

const selectionShare = shareThis({
    // sharers: [ githubSharer, twitterSharer ]
    sharers: [ githubSharer ]
});
selectionShare.init();
