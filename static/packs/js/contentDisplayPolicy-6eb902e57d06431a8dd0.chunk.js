(window.webpackJsonp = window.webpackJsonp || []).push([
    [26], {
        127: function(e, n, t) {
            "use strict";

            function o() {
                var e = Array.from(document.querySelectorAll("article[data-content-user-id]")),
                    n = userData(),
                    t = n ? n.blocked_user_ids : [];
                e.filter((function(e) { var n = e.dataset.contentUserId; return t.includes(parseInt(n, 10)) })).forEach((function(e) {
                    if (e.className.includes("crayons-story")) e.style.display = "none";
                    else if (e.className.includes("single-comment-node")) { e.getElementsByClassName("inner-comment")[0].innerHTML = '\n        <div class="body " style="padding-bottom:32px;opacity:0.3;user-select:none;cursor:default">\n          [blocked content]\n        </div>\n      ' }
                }))
            }

            function c() {
                Array.from(document.getElementsByClassName("hide-comment")).forEach((function(n) {
                    var t = n.dataset,
                        o = t.commentId,
                        c = t.commentUrl;
                    n.addEventListener("click", (function(n) {
                        n.preventDefault(),
                            function(n, t) { document.getElementById("hide-comments-modal__form").action = "/comments/".concat(n, "/hide"), document.getElementById("hide-comments-modal__report-link").href = "/report-abuse?url=".concat(t), document.getElementById("hide-comments-modal__comment-permalink").href = t, window.Forem.showModal({ title: "Confirm hiding the comment", contentSelector: "#hide-comments-modal", overlay: !0 }).then((function() { document.querySelector("#window-modal .hide-comments-modal__form").addEventListener("submit", e) })) }(o, c)
                    }))
                })), Array.from(document.getElementsByClassName("unhide-comment")).forEach((function(e) {
                    var n = e.dataset.commentId;
                    e.addEventListener("click", (function(e) {
                        e.preventDefault(),
                            function(e) { fetch("/comments/".concat(e, "/unhide"), { method: "PATCH", headers: { "X-CSRF-Token": window.csrfToken } }).then((function(e) { return e.json() })).then((function(e) { "false" === e.hidden && location.reload() })) }(n)
                    }))
                }));
                var e = function(e) {
                    e.preventDefault(), e.stopPropagation();
                    var n = e.target,
                        t = n.getElementsByClassName("hide_children")[0],
                        o = "".concat(n.action).concat(t.checked ? "?hide_children=1" : "");
                    fetch(o, { method: "PATCH", headers: { "X-CSRF-Token": window.csrfToken } }).then((function(e) { return e.json() })).then((function(e) { "true" === e.hidden && location.reload() }))
                }
            }
            t.r(n), window.addEventListener("checkBlockedContent", o), window.InstantClick.on("change", (function() { o(), c() })), o(), c()
        }
    },
    [
        [127, 70]
    ]
]);
//# sourceMappingURL=contentDisplayPolicy-6eb902e57d06431a8dd0.chunk.js.map