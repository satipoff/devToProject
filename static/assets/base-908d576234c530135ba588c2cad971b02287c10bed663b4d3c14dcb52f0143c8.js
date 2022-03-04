function initNotifications() { fetchNotificationsCount(), markNotificationsAsRead(), initReactions(), listenForNotificationsBellClick(), initFilter(), initPagination(), initLoadMoreButton() }

function markNotificationsAsRead() {
    setTimeout(function() {
        if (document.getElementById("notifications-container")) {
            var e, t = window.location.pathname.split("/"),
                n = parseInt(t[t.length - 1].replace(/[^0-9]/g, ""), 10);
            (e = new XMLHttpRequest).onreadystatechange = function() {};
            var a = document.querySelector("meta[name='csrf-token']").content;
            Number.isInteger(n) ? e.open("Post", "/notifications/reads?org_id=" + n, !0) : e.open("Post", "/notifications/reads", !0), e.setRequestHeader("X-CSRF-Token", a), e.send()
        }
    }, 450)
}

function fetchNotificationsCount() { null == document.getElementById("notifications-container") && checkUserLoggedIn() && instantClick && (InstantClick.removeExpiredKeys("force"), setTimeout(function() { InstantClick.preload(document.getElementById("notifications-link").href, "force") }, 30)) }

function initReactions() {
    setTimeout(function() {
        if (document.getElementById("notifications-container")) {
            for (var e = document.getElementsByClassName("reaction-button"), t = 0; t < e.length; t++) {
                var n = e[t];
                n.setAttribute("aria-pressed", n.classList.contains("reacted")), n.onclick = function(e) {
                    function t(e) { "create" === e.result ? (n.classList.add("reacted"), n.setAttribute("aria-pressed", !0)) : (n.classList.remove("reacted"), n.setAttribute("aria-pressed", !1)) }
                    e.preventDefault(), sendHapticMessage("medium");
                    var n = this;
                    n.classList.add("reacted");
                    var a = new FormData;
                    a.append("reactable_type", n.dataset.reactableType), a.append("category", n.dataset.category), a.append("reactable_id", n.dataset.reactableId), getCsrfToken().then(sendFetch("reaction-creation", a)).then(function(e) { 200 === e.status ? e.json().then(t) : showModalAfterError({ response: e, element: "reaction", action_ing: "updating", action_past: "updated" }) })
                }
            }
            e = document.getElementsByClassName("toggle-reply-form");
            for (let t = 0; t < e.length; t++) {
                e[t].onclick = function(e) {
                    e.preventDefault();
                    var t = this;
                    document.getElementById("comment-form-for-" + t.dataset.reactableId).classList.remove("hidden"), t.classList.add("hidden"), t.classList.remove("inline-flex"), setTimeout(function() { document.getElementById("comment-textarea-for-" + t.dataset.reactableId).focus() }, 30)
                }
            }
        }
    }, 180)
}

function listenForNotificationsBellClick() {
    var e = document.getElementById("notifications-link");
    e && setTimeout(function() { e.onclick = function() { document.getElementById("notifications-number").classList.add("hidden") } }, 180)
}

function initFilter() {
    const e = document.getElementById("notifications-filter__select"),
        t = e => { window.location.href = e.target.value };
    e && e.addEventListener("change", t)
}

function initPagination() {
    const e = document.getElementsByClassName("notifications-paginator");
    if (e && e.length > 0) {
        const t = e[e.length - 1];
        t && window.fetch(t.dataset.paginationPath, { method: "GET", credentials: "same-origin" }).then(function(e) {
            200 === e.status && e.text().then(function(e) {
                const n = e.trim();
                if (n) {
                    const e = document.getElementById("articles-list"),
                        a = document.createElement("div");
                    a.innerHTML = n, t.remove(), e.append(a), initReactions()
                } else {
                    const e = document.getElementById("load-more-button");
                    e && (e.style.display = "none"), t.remove()
                }
            })
        })
    }
}

function initLoadMoreButton() {
    const e = document.getElementById("load-more-button");
    e && e.addEventListener("click", initPagination)
}

function fetchNext(e, t, n) {
    var a = JSON.parse(e.dataset.params),
        o = Object.keys(a).map(function(e) { return encodeURIComponent(e) + "=" + encodeURIComponent(a[e]) }).join("&");
    if (!(o.indexOf("q=") > -1)) {
        var i = (t + "?page=" + nextPage + "&" + o + "&signature=" + parseInt(Date.now() / 4e5, 10)).replace("&&", "&");
        window.fetch(i).then(function(e) {
            e.json().then(function(e) {
                if (nextPage += 1, n(e), 0 === e.length) {
                    const e = document.getElementById("loading-articles");
                    e && (e.style.display = "none"), done = !0
                }
            })
        })["catch"](function(e) { console.log(e) })
    }
}

function insertNext(e, t) {
    return function(n = []) {
        document.getElementById(e.listId || "sublist");
        var a = "";
        n.forEach(function(n) {
            if (!document.getElementById((e.elId || "element") + "-" + n.id)) {
                var o = t(n);
                a += o
            }
        });
        var o = document.getElementById("following-wrapper");
        o && o.insertAdjacentHTML("beforeend", a), nextPage > 0 && (fetching = !1)
    }
}

function buildFollowsHTML(e) { return '<div class="crayons-card p-4 m:p-6 flex s:grid single-article" id="follows-' + e.id + '"><a href="' + e.path + '" class="crayons-avatar crayons-avatar--2xl s:mb-2 s:mx-auto"><img alt="@' + e.username + ' profile image" class="crayons-avatar__image" src="' + e.profile_image + '" /></a><div class="pl-4 s:pl-0 self-center"><h3 class="s:mb-1 p-0"><a href="' + e.path + '">' + e.name + '</a></h3><p class="s:mb-4"><a href="' + e.path + '" class="crayons-link crayons-link--secondary">@' + e.username + "</a></p></div></div>" }

function buildTagsHTML(e) { var t = ""; return e.points < 0 && (t = '<span class="c-indicator c-indicator--danger" title="This tag has negative follow weight">Anti-follow</span>'), `<div class="crayons-card p-4 m:p-6 flex flex-col single-article" id="follows-${e.id}" style="border: 1px solid ${e.color}; box-shadow: 3px 3px 0 ${e.color}">\n    <h3 class="s:mb-1 p-0 fw-medium">\n      <a href="/t/${e.name}" class="crayons-tag crayons-tag--l">\n        <span class="crayons-tag__prefix">#</span>${e.name}\n      </a>\n      ${t}\n    </h3>\n    <p class="grid-cell__summary truncate-at-3"></p>\n    <input name="follows[][id]" id="follow_id_${e.name}" type="hidden" form="follows_update_form" value="${e.id}">\n    <input step="any" class="crayons-textfield flex-1 fs-s" required="required" type="number" form="follows_update_form" value="${e.points}" name="follows[][explicit_points]" id="follow_points_${e.name}" aria-label="${e.name} tag weight">\n  </div>` }

function fetchNextFollowingPage(e) {
    var t = JSON.parse(e.dataset.params).action;
    t.includes("users") ? fetchNext(e, "/followings/users", insertNext({ elId: "follows" }, buildFollowsHTML)) : t.includes("podcasts") ? fetchNext(e, "/followings/podcasts", insertNext({ elId: "follows" }, buildFollowsHTML)) : t.includes("organizations") ? fetchNext(e, "/followings/organizations", insertNext({ elId: "follows" }, buildFollowsHTML)) : fetchNext(e, "/followings/tags", insertNext({ elId: "follows" }, buildTagsHTML))
}

function fetchNextFollowersPage(e) { fetchNext(e, "/api/followers/users", insertNext({ elId: "follows" }, buildFollowsHTML)) }

function buildVideoArticleHTML(e) { return `<a href="${e.path}" id="video-article-${e.id}" class="crayons-card media-card">\n    <div class="media-card__artwork">\n      <img src="${e.cloudinary_video_url}" class="w-100 object-cover block aspect-16-9 h-auto" width="320" height="180" alt="${e.title}">\n      <span class="media-card__artwork__badge">${e.video_duration_in_minutes}</span>\n    </div>\n    <div class="media-card__content">\n      <h2 class="fs-base mb-2 fw-medium">${e.title}</h2>\n      <small class="fs-s">\n        ${e.user.name}\n      </small>\n    </div>\n  </a>` }

function insertVideos(e) {
    document.getElementById("subvideos");
    var t = "";
    e.forEach(function(e) {
        if (!document.getElementById("video-article-" + e.id)) {
            var n = buildVideoArticleHTML(e);
            t += n
        }
    });
    document.documentElement.scrollHeight, document.body.scrollTop;
    var n = document.querySelector(".js-video-collection"),
        a = document.createRange().createContextualFragment(t);
    n.appendChild(a), nextPage > 0 && (fetching = !1)
}

function fetchNextVideoPage(e) { fetchNext(e, "/api/videos", insertVideos) }

function insertArticles(e) {
    document.getElementById("substories");
    var t = "",
        n = document.getElementById("home-articles-object");
    n && (n.outerHTML = ""), e.forEach(function(e) {
        var n = document.getElementById("article-link-" + e.id);
        if (!["/", "/top/week", "/top/month", "/top/year", "/top/infinity", "/latest"].includes(window.location.pathname) && n && n.parentElement && n.parentElement.classList.contains("crayons-story") && !document.getElementById("video-player-" + e.id)) n.parentElement.outerHTML = buildArticleHTML(e);
        else if (!n) {
            var a = buildArticleHTML(e);
            t += a, initializeReadingListIcons()
        }
    });
    document.documentElement.scrollHeight, document.body.scrollTop;
    var a = document.createElement("div");
    a.classList.add("paged-stories"), a.innerHTML = t, a.addEventListener("click", e => {
        const { classList: t } = e.target;
        if (t.contains("crayons-story") || t.contains("crayons-story__top") || t.contains("crayons-story__body") || t.contains("crayons-story__indention") || t.contains("crayons-story__title") || t.contains("crayons-story__tags") || t.contains("crayons-story__bottom")) {
            let t = e.target,
                { articlePath: n } = t.dataset;
            for (; !n;) n = t.dataset.articlePath, t = t.parentElement;
            InstantClick.preload(n), InstantClick.display(n)
        }
    });
    var o = document.querySelectorAll(".single-article, .crayons-story");
    insertAfter(a, o[o.length - 1]), nextPage > 0 && (fetching = !1)
}

function paginate(e, t, n) {
    const a = Object.assign({ per_page: 15, page: nextPage }, JSON.parse(t));
    e && e.length > 0 && (a.tag_names = a.tag_names || [], a.tag_names.push(e)), a.approved = "true" === n ? "true" : "";
    var o = document.getElementById("index-container");
    "base-feed" === o.dataset.feed ? a.class_name = "Article" : "latest" === o.dataset.feed ? (a.class_name = "Article", a.sort_by = "published_at") : (a.class_name = "Article", a["published_at[gte]"] = o.dataset.articlesSince, a.sort_by = "public_reactions_count");
    const i = new URLSearchParams;
    Object.keys(a).forEach(e => {
        const t = a[e];
        Array.isArray(t) ? t.forEach(t => { i.append(`${e}[]`, t) }) : i.append(e, t)
    }), fetch(`/search/feed_content?${i.toString()}`, { method: "GET", headers: { Accept: "application/json", "X-CSRF-Token": window.csrfToken, "Content-Type": "application/json" }, credentials: "same-origin" }).then(e => e.json()).then(e => {
        nextPage += 1, insertArticles(e.result);
        const t = new CustomEvent("checkBlockedContent");
        if (window.dispatchEvent(t), initializeReadingListIcons(), 0 === e.result.length) {
            const e = document.getElementById("loading-articles");
            e && (e.style.display = "none"), done = !0
        }
    })
}

function fetchNextPageIfNearBottom() { var e = document.getElementById("index-container"); if (e && !document.getElementById("query-wrapper")) { var t, n, a = e.dataset.which; "videos" === a ? (n = document.getElementById("main-content"), t = function() { fetchNextVideoPage(e) }) : "followers" === a ? (n = document.getElementById("user-dashboard"), t = function() { fetchNextFollowersPage(e) }) : "following" === a ? (n = document.getElementById("user-dashboard"), t = function() { fetchNextFollowingPage(e) }) : (n = document.getElementById("main-content") || document.getElementById("articles-list"), t = function() { paginate(e.dataset.tag, e.dataset.params, e.dataset.requiresApproval) }), !done && !fetching && window.scrollY > n.scrollHeight - 3700 && (fetching = !0, t()) } }

function checkIfNearBottomOfPage() {
    const e = document.getElementById("loading-articles");
    document.getElementsByClassName("crayons-story").length < 2 && document.getElementsByClassName("single-article").length < 2 || window.location.search.indexOf("q=") > -1 ? (e && (e.style.display = "none"), done = !0) : e && (e.style.display = "block"), fetchNextPageIfNearBottom(), setInterval(function() { fetchNextPageIfNearBottom() }, 210)
}

function initScrolling() { document.getElementById("index-container") && (initScrolling.called = !0, checkIfNearBottomOfPage()) }

function initializeAllTagEditButtons() {
    var e = document.getElementById("tag-edit-button"),
        t = document.getElementById("tag-admin-button"),
        n = userData();
    n.admin && t && (t.style.display = "inline-block", document.getElementById("tag-admin-button").style.display = "inline-block"), n && e && (n.moderator_for_tags.indexOf(e.dataset.tag) > -1 || n.admin) && (e.style.display = "inline-block", document.getElementById("tag-mod-button").style.display = "inline-block")
}

function archivedPosts() { return document.getElementsByClassName("story-archived") }

function showArchivedPosts() { for (var e = archivedPosts(), t = 0; t < e.length; t += 1) e[t].classList.remove("hidden") }

function hideArchivedPosts() { for (var e = archivedPosts(), t = 0; t < e.length; t += 1) e[t].classList.add("hidden") }

function toggleArchivedPosts(e) {
    e.preventDefault();
    var t = e.target;
    t.innerHTML.match(/Show/) ? (t.innerHTML = "Hide archived", showArchivedPosts()) : (t.innerHTML = "Show archived", hideArchivedPosts())
}

function initializeArchivedPostFilter() {
    var e = document.getElementById("toggleArchivedLink");
    e && e.addEventListener("click", toggleArchivedPosts)
}

function initializeArticleDate() { addLocalizedDateTimeToElementsTitles(document.querySelectorAll(".crayons-story time, article time, .single-other-article time"), "datetime") }

function setReactionCount(e, t) {
    var n = document.getElementById("reaction-butt-" + e).classList,
        a = document.getElementById("reaction-number-" + e);
    t > 0 ? (n.add("activated"), a.textContent = t) : (n.remove("activated"), a.textContent = "0")
}

function showUserReaction(e, t) {
    const n = document.getElementById("reaction-butt-" + e);
    n.classList.add("user-activated", t), n.setAttribute("aria-pressed", "true")
}

function hideUserReaction(e) {
    const t = document.getElementById("reaction-butt-" + e);
    t.classList.remove("user-activated", "user-animated"), t.setAttribute("aria-pressed", "false")
}

function hasUserReacted(e) { return document.getElementById("reaction-butt-" + e).classList.contains("user-activated") }

function getNumReactions(e) { const t = document.getElementById("reaction-number-" + e); return t && "" !== t.textContent ? parseInt(t.textContent, 10) : 0 }

function reactToArticle(e, t) {
    function n() {
        var e = getNumReactions(t);
        hasUserReacted(t) ? (hideUserReaction(t), setReactionCount(t, e - 1)) : (showUserReaction(t, "user-animated"), setReactionCount(t, e + 1))
    }

    function a() { var n = new FormData; return n.append("reactable_type", "Article"), n.append("reactable_id", e), n.append("category", t), n }
    var o = document.body.getAttribute("data-user-status");
    sendHapticMessage("medium"), "logged-out" !== o ? (n(), document.getElementById("reaction-butt-" + t).disabled = !0, getCsrfToken().then(sendFetch("reaction-creation", a())).then(e => 200 === e.status ? e.json().then(() => { document.getElementById("reaction-butt-" + t).disabled = !1 }) : (n(), document.getElementById("reaction-butt-" + t).disabled = !1, showModalAfterError({ response: e, element: "reaction", action_ing: "updating", action_past: "updated" }), undefined))["catch"](() => { n(), document.getElementById("reaction-butt-" + t).disabled = !1 })) : showLoginModal()
}

function setCollectionFunctionality() {
    if (document.getElementById("collection-link-inbetween"))
        for (var e = document.getElementsByClassName("series-switcher__link--inbetween"), t = e.length, n = 0; n < e.length; n += 1) e[n].onclick = (n => { n.preventDefault(); for (var a = document.getElementsByClassName("series-switcher__link--hidden"), o = a.length, i = 0; i < o; i += 1) a[0].classList.remove("series-switcher__link--hidden"); for (var r = 0; r < t; r += 1) e[0].className = "series-switcher__link--hidden" })
}

function requestReactionCounts(e) {
    var t;
    (t = new XMLHttpRequest).onreadystatechange = (() => {
        if (t.readyState === XMLHttpRequest.DONE) {
            var e = JSON.parse(t.response);
            e.article_reaction_counts.forEach(e => { setReactionCount(e.category, e.count) }), e.reactions.forEach(e => { document.getElementById("reaction-butt-" + e.category) && showUserReaction(e.category, "not-user-animated") })
        }
    }), t.open("GET", "/reactions?article_id=" + e, !0), t.send()
}

function initializeArticleReactions() {
    setCollectionFunctionality(), setTimeout(() => {
        var e = document.getElementsByClassName("crayons-reaction");
        if (document.getElementById("article-body") && e.length > 0) {
            var t = document.getElementById("article-body").dataset.articleId;
            requestReactionCounts(t);
            for (var n = 0; n < e.length; n += 1) e[n].onclick = function() { reactToArticle(t, this.dataset.category) }
        }
    }, 3)
}

function initializeBaseTracking() {
    var e = 0,
        t = !1,
        n = document.body.dataset.gaTracking;
    if (n) {
        var a = setInterval(function() {
            var o, i, r, s, c, l, d;
            t || (o = window, i = document, r = "script", s = "//www.google-analytics.com/analytics.js", c = "ga", o.GoogleAnalyticsObject = c, o[c] = o[c] || function() {
                (o[c].q = o[c].q || []).push(arguments)
            }, o[c].l = 1 * new Date, l = i.createElement(r), d = i.getElementsByTagName(r)[0], l.async = 1, l.src = s, d.parentNode.insertBefore(l, d)), t = !0, e++, window.ga && ga.create && (ga("create", n, "auto"), ga("set", "anonymizeIp", !0), ga("send", "pageview", location.pathname + location.search), clearInterval(a)), e > 85 && (clearInterval(a), fallbackActivityRecording())
        }, 25);
        eventListening()
    }
    trackCustomImpressions()
}

function fallbackActivityRecording() {
    var e = document.querySelector("meta[name='csrf-token']");
    if (e) {
        var t = e.getAttribute("content"),
            n = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            a = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
            o = window.screen.availWidth,
            i = window.screen.availHeight,
            r = { path: location.pathname + location.search, user_language: navigator.language, referrer: document.referrer, user_agent: navigator.userAgent, viewport_size: a + "x" + n, screen_resolution: i + "x" + o, document_title: document.title, document_encoding: document.characterSet, document_path: location.pathname + location.search };
        window.fetch("/fallback_activity_recorder", { method: "POST", headers: { Accept: "application/json", "X-CSRF-Token": t }, body: JSON.stringify(r), credentials: "same-origin" })
    }
}

function eventListening() {
    var e = document.getElementById("cta-comment-register-now-link");
    e && (e.onclick = function() { ga("send", "event", "click", "register-now-click", null, null) })
}

function trackCustomImpressions() {
    setTimeout(function() {
        var e = document.getElementById("article-body") || document.getElementById("comment-article-indicator"),
            t = document.querySelector("meta[name='csrf-token']"),
            n = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent),
            a = window.innerWidth > 1023,
            o = document.getElementById("article-show-primary-sticky-nav"),
            i = document.getElementById("html-variant-article-show-sidebar");
        if (i && e && t && !n && a) {
            var r = { html_variant_id: i.dataset.variantId, article_id: e.dataset.articleId },
                s = t.getAttribute("content");
            trackHTMLVariantTrial(r, s);
            for (var c = o.querySelectorAll("a,button"), l = 0; l < c.length; l++) c[l].addEventListener("click", function() { trackHtmlVariantSuccess(r, s) })
        }
        var d = document.getElementById("html-variant-article-show-below-article");
        if (d && e && t && !n && a) {
            r = { html_variant_id: d.dataset.variantId, article_id: e.dataset.articleId }, s = t.getAttribute("content");
            trackHTMLVariantTrial(r, s);
            for (c = d.querySelectorAll("a,button"), l = 0; l < c.length; l++) c[l].addEventListener("click", function() { trackHtmlVariantSuccess(r, s) })
        }
        if (e && t && !n) {
            var u = Math.floor(10 * Math.random());
            if (!checkUserLoggedIn() && 1 != u) return;
            r = { article_id: e.dataset.articleId, referrer: document.referrer, user_agent: navigator.userAgent }, s = t.getAttribute("content");
            trackPageView(r, s);
            var m = 0,
                f = setInterval(function() {
                    m++;
                    var e = document.getElementById("article-body") || document.getElementById("comment-article-indicator");
                    e && checkUserLoggedIn() ? trackFifteenSecondsOnPage(e.dataset.articleId, s) : clearInterval(f), m > 118 && clearInterval(f)
                }, 15e3)
        }
        var p = document.querySelectorAll("[data-display-unit]");
        if (p.length > 0 && t && !n && a && checkUserLoggedIn()) {
            s = t.getAttribute("content");
            p.forEach(e => { trackAdImpression(s, e), e.removeEventListener("click", trackAdClick, !1), e.addEventListener("click", function(e) { trackAdClick(s, e.target) }) })
        }
    }, 1800)
}

function trackHTMLVariantTrial(e, t) { 1 === Math.floor(10 * Math.random()) && window.fetch("/html_variant_trials", { method: "POST", headers: { "X-CSRF-Token": t, "Content-Type": "application/json" }, body: JSON.stringify(e), credentials: "same-origin" }) }

function trackHtmlVariantSuccess(e, t) { window.fetch("/html_variant_successes", { method: "POST", headers: { "X-CSRF-Token": t, "Content-Type": "application/json" }, body: JSON.stringify(e), credentials: "same-origin" }) }

function trackPageView(e, t) { window.fetch("/page_views", { method: "POST", headers: { "X-CSRF-Token": t, "Content-Type": "application/json" }, body: JSON.stringify(e), credentials: "same-origin" }) }

function trackFifteenSecondsOnPage(e, t) { window.fetch("/page_views/" + e, { method: "PATCH", headers: { "X-CSRF-Token": t, "Content-Type": "application/json" }, credentials: "same-origin" })["catch"](e => console.error(e)) }

function trackAdImpression(e, t) {
    var n = { display_ad_event: { display_ad_id: t.dataset.id, context_type: "home", category: "impression" } };
    window.fetch("/display_ad_events", { method: "POST", headers: { "X-CSRF-Token": e, "Content-Type": "application/json" }, body: JSON.stringify(n), credentials: "same-origin" })["catch"](e => console.error(e))
}

function trackAdClick(e, t) {
    var n = t.closest("[data-display-unit]");
    if (!adClicked) {
        var a = { display_ad_event: { display_ad_id: n.dataset.id, context_type: "home", category: "click" } };
        window.fetch("/display_ad_events", { method: "POST", headers: { "X-CSRF-Token": e, "Content-Type": "application/json" }, body: JSON.stringify(a), credentials: "same-origin" })
    }
    adClicked = !0
}

function initializeProfileImage(e) { document.getElementById("comment-primary-user-profile--avatar") && (document.getElementById("comment-primary-user-profile--avatar").src = e.profile_image_90) }

function addRelevantButtonsToArticle(e) {
    var t = document.getElementById("article-show-container");
    if (t && "true" !== t.dataset.buttonsInitialized) {
        let n = [];
        const a = JSON.parse(t.dataset.published);
        if (parseInt(t.dataset.authorId, 10) === e.id) {
            n.push(`<a class="crayons-btn crayons-btn--s crayons-btn--ghost px-2" href="${t.dataset.path}/edit" rel="nofollow">Edit</a>`);
            let e = document.getElementById("author-click-to-edit");
            e && (e.style.display = "inline-block"), !0 === a && n.push(`<a class="crayons-btn crayons-btn--s crayons-btn--ghost px-2" href="${t.dataset.path}/manage" rel="nofollow">Manage</a>`), n.push(`<a class="crayons-btn crayons-btn--s crayons-btn--ghost px-2" href="${t.dataset.path}/stats" rel="nofollow">Stats</a>`)
        }
        const { articleId: o, pinnedArticleId: i } = t.dataset;
        e.admin && n.push(`<a class="crayons-btn crayons-btn--s crayons-btn--ghost px-2" href="/admin/content_manager/articles/${o}" data-no-instant>Admin</a>`), document.getElementById("action-space").innerHTML = n.join(""), t.dataset.buttonsInitialized = "true"
    }
}

function addRelevantButtonsToComments(e) {
    if (document.getElementById("comments-container")) {
        var t = document.getElementsByClassName("comment-actions");
        for (let n = 0; n < t.length; n += 1) {
            let a = t[n];
            const { action: o, commentableUserId: i, userId: r } = a.dataset;
            parseInt(r, 10) === e.id && "settings-button" === o && (a.innerHTML = '<a href="' + a.dataset.path + '" rel="nofollow" class="crayons-link crayons-link--block" data-no-instant>Settings</a>', a.classList.remove("hidden"), a.classList.add("block")), "hide-button" === o && parseInt(i, 10) === e.id && (a.classList.remove("hidden"), a.classList.add("block"))
        }
        if (e.trusted) {
            var n = document.getElementsByClassName("mod-actions");
            for (let e = 0; e < n.length; e += 1) {
                let t = n[e];
                t.classList.contains("mod-actions-comment-button") && (t.innerHTML = '<a href="' + t.dataset.path + '" rel="nofollow" class="crayons-link crayons-link--block">Moderate</a>'), t.className = "mod-actions", t.classList.remove("hidden"), t.classList.add("block")
            }
        }
    }
}

function setCurrentUserToNavBar(e) {
    const t = document.getElementById("first-nav-link");
    t.href = `/${e.username}`, t.getElementsByTagName("span")[0].textContent = e.name, t.getElementsByTagName("small")[0].textContent = `@${e.username}`, document.getElementById("nav-profile-image").src = e.profile_image_90, e.admin && document.getElementsByClassName("js-header-menu-admin-link")[0].classList.remove("hidden")
}

function initializeBaseUserData() {
    const e = userData();
    setCurrentUserToNavBar(e), initializeProfileImage(e), addRelevantButtonsToArticle(e), addRelevantButtonsToComments(e)
}

function removeExistingCSRF() {
    var e = document.querySelector("meta[name='csrf-token']"),
        t = document.querySelector("meta[name='csrf-param']");
    e && t && (e.parentNode.removeChild(e), t.parentNode.removeChild(t))
}

function fetchBaseData() {
    var e;
    (e = new XMLHttpRequest).onreadystatechange = (() => {
        if (e.readyState === XMLHttpRequest.DONE) {
            var t = JSON.parse(e.responseText);
            t.token && removeExistingCSRF();
            var n = document.createElement("meta");
            n.name = "csrf-param", n.content = t.param, document.head.appendChild(n);
            var a = document.createElement("meta");
            a.name = "csrf-token", a.content = t.token, document.head.appendChild(a), document.body.dataset.loaded = "true", t.broadcast && (document.body.dataset.broadcast = t.broadcast), checkUserLoggedIn() ? (document.body.dataset.user = t.user, document.body.dataset.creator = t.creator, browserStoreCache("set", t.user), setTimeout(() => { "function" == typeof ga && ga("set", "userId", JSON.parse(t.user).id) }, 400)) : (delete document.body.dataset.user, delete document.body.dataset.creator, browserStoreCache("remove"))
        }
    }), e.open("GET", "/async_info/base_data", !0), e.send()
}

function initializeBodyData() { fetchBaseData() }

function broadcastData() { const { broadcast: e = null } = document.body.dataset; return JSON.parse(e) }

function camelizedBroadcastKey(e) { return `${e.replace(/\W+(.)/g,(e,t)=>t.toUpperCase())}Seen` }

function addCloseButtonClickHandle(e) { document.getElementsByClassName("close-announcement-button")[0].onclick = (() => { localStorage.setItem(camelizedBroadcastKey(e), !0), document.getElementById("active-broadcast").remove() }) }

function renderBroadcast(e, t) {
    const { banner_class: n, html: a, title: o } = t;
    if (n) {
        const [t, a] = n.split(" ");
        a ? e.classList.add(t, a) : e.classList.add(t)
    }
    const i = '<button class="close-announcement-button crayons-btn crayons-btn--icon-rounded crayons-btn--inverted crayons-btn--ghost">\n    <svg class="crayons-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z" /></svg>\n  </button>';
    e.insertAdjacentHTML("afterbegin", `<div class='broadcast-data'>${a}</div>${i}`), addCloseButtonClickHandle(o), e.classList.add("broadcast-visible")
}

function initializeBroadcast() {
    const e = window.location.pathname.match(/^(?:\/connect|\/new)/);
    if (window.frameElement || e) { const e = document.getElementById("active-broadcast"); return void(e && e.classList.remove("broadcast-visible")) }
    const t = userData(),
        n = broadcastData();
    if (t && !t.display_announcements) return;
    if (!n) return;
    const { title: a } = n;
    if (!0 === JSON.parse(localStorage.getItem(camelizedBroadcastKey(a)))) return;
    const o = document.getElementById("active-broadcast");
    o.firstElementChild ? o.classList.contains("broadcast-visible") || o.classList.toggle("broadcast-visible") : renderBroadcast(o, n)
}

function initializeColorPicker() {
    function e(e) {
        var t = e.target;
        (t.nextElementSibling ? t.nextElementSibling : t.previousElementSibling).value = t.value
    }
    Array.from(document.getElementsByClassName("js-color-field")).forEach(function(t) { t.addEventListener("change", e) })
}

function initializeCommentDate() { addLocalizedDateTimeToElementsTitles(document.querySelectorAll(".comment-date time"), "datetime") }

function getAndShowPreview(e, t) {
    function n() { const e = document.createElement("script"); return e.src = "https://platform.twitter.com/widgets.js", e.async = !0, document.body.appendChild(e), () => { document.body.removeChild(e) } }

    function a(t) { e.innerHTML = t.processed_html, t.processed_html.includes("twitter-timeline") && n(), activateRunkitTags() }
    const o = JSON.stringify({ comment: { body_markdown: t.value } });
    getCsrfToken().then(sendFetch("comment-preview", o)).then(e => e.json()).then(a)["catch"](e => { console.log("error!"), console.log(e) })
}

function handleCommentPreview(e) {
    e.preventDefault();
    const { form: t } = e.target, n = t.getElementsByClassName("comment-textarea")[0], a = t.getElementsByClassName("comment-form__preview")[0], o = t.getElementsByClassName("preview-toggle")[0];
    if ("" !== n.value)
        if (t.classList.contains("preview-open")) t.classList.toggle("preview-open"), o.innerHTML = "Preview";
        else {
            getAndShowPreview(a, n);
            const e = n.offsetHeight + 43;
            a.style.minHeight = `${e}px`, o.innerHTML = "Continue editing", t.classList.toggle("preview-open")
        }
}

function initializeCommentPreview() {
    const e = document.getElementsByClassName("preview-toggle")[0];
    e && e.addEventListener("click", handleCommentPreview)
}

function initializeCommentsPage() {
    if (document.getElementById("comments-container")) {
        toggleCodeOfConduct();
        var e = document.body.getAttribute("data-user-status"),
            t = document.getElementById("comments-container").dataset.commentableId,
            n = document.getElementById("comments-container").dataset.commentableType,
            a = document.getElementById("comments-container").dataset.hasRecentCommentActivity;
        if (commentableIdList = t.split(","), "logged-in" === e || "false" !== a)(function() {
            for (var e = 0; e < commentableIdList.length; e++) ! function(e) {
                var t;
                (t = new XMLHttpRequest).onreadystatechange = function() {
                    if (t.readyState === XMLHttpRequest.DONE) {
                        for (var e = JSON.parse(t.response), n = e.reactions, a = document.getElementsByClassName("single-comment-node"), o = e.public_reaction_counts, i = 0; i < n.length; i++) {
                            (r = document.getElementById("button-for-comment-" + n[i].reactable_id)) && (r.classList.add("reacted"), r.setAttribute("aria-pressed", "true"))
                        }
                        for (i = 0; i < o.length; i++) {
                            var r;
                            if (r = document.getElementById("button-for-comment-" + o[i].id)) {
                                var s = r.querySelector(".reactions-count"),
                                    c = r.querySelector(".reactions-label");
                                o[i].count > 0 ? (o[i].count > 1 ? c.innerHTML = `&nbsp;${I18n.t("core.like").toLowerCase()}s` : c.innerHTML = `&nbsp;${I18n.t("core.like").toLowerCase()}`, s.id = "reactions-count-" + o[i].id, s.innerHTML = o[i].count, s.classList.remove("hidden")) : (s.classList.add("hidden"), s.innerHTML = "0"), r.classList.contains("reacted") || r.setAttribute("aria-pressed", "false")
                            }
                        }
                        for (i = 0; i < a.length; i++)
                            if (a[i].dataset.commentAuthorId == e.current_user.id) {
                                a[i].dataset.currentUserComment = "true";
                                var l = a[i].dataset.path,
                                    d = a[i].querySelector(".current-user-actions"),
                                    u = document.getElementById("button-for-comment-" + a[i].dataset.commentId);
                                d && u && (d.innerHTML = `<li><a href="${l}/edit" class="crayons-link crayons-link--block" aria-label="Edit this comment">Edit</a></li>\n                                                <li><a data-no-instant href="${l}/delete_confirm" class="edit-butt crayons-link crayons-link--block" aria-label="Delete this comment">Delete</a></li>`, d.classList.remove("hidden"))
                            }
                    }
                }, t.open("GET", "/reactions?commentable_id=" + commentableIdList[e] + "&commentable_type=" + n, !0), t.send()
            }(e)
        })();
        for (var o = document.getElementsByClassName("reaction-button"), i = 0; i < o.length; i++) {
            o[i].onclick = function(e) {
                function t(e) {
                    var t = n.querySelector(".reactions-count"),
                        a = n.querySelector(".reactions-label");
                    "create" === e.result ? (n.classList.add("reacted"), n.setAttribute("aria-pressed", "true"), t && (t.innerHTML = parseInt(t.innerHTML) + 1, t.classList.remove("hidden"), 1 == parseInt(t.innerHTML) ? a.innerHTML = "&nbsp;like" : parseInt(t.innerHTML) > 1 && (a.innerHTML = "&nbsp;likes"))) : (n.classList.remove("reacted"), n.setAttribute("aria-pressed", "false"), t && (t.innerHTML = parseInt(t.innerHTML) - 1, 0 == parseInt(t.innerHTML) && (t.classList.add("hidden"), a.innerHTML = "Like")))
                }
                var n = this;
                if (e.preventDefault(), sendHapticMessage("medium"), "logged-out" !== document.body.getAttribute("data-user-status")) {
                    n.classList.add("reacted"), n.disabled = !0;
                    var a = new FormData;
                    a.append("reactable_type", "Comment"), a.append("reactable_id", n.dataset.commentId), getCsrfToken().then(sendFetch("reaction-creation", a)).then(function(e) { n.disabled = !1, 200 === e.status ? e.json().then(t) : showModalAfterError({ response: e, element: "reaction", action_ing: "making", action_past: "made" }) })
                } else showLoginModal()
            }
        }
        var r = document.getElementsByClassName("toggle-reply-form");
        for (i = 0; i < r.length; i++) {
            r[i].onclick = function(e) {
                if (e.preventDefault(), e.target.classList.contains("thread-indication")) return !1;
                if ("logged-out" != document.body.getAttribute("data-user-status")) {
                    var a = e.target.closest(".comment").dataset.commentId,
                        o = setInterval(function() { document.querySelector("meta[name='csrf-token']") && (clearInterval(o), commentWrapper = e.target.closest(".comment__details"), commentWrapper.classList.add("replying"), commentWrapper.innerHTML += buildCommentFormHTML(t, n, a), initializeCommentsPage(), setTimeout(function() { commentWrapper.getElementsByTagName("textarea")[0].focus() }, 30)) }, 1);
                    return !1
                }
                showLoginModal()
            }
        }
        document.getElementById("new_comment") && document.getElementById("new_comment").addEventListener("submit", handleCommentSubmit)
    }
    listenForDetailsToggle(), handleHiddenComments(n)
}

function toggleCodeOfConduct() {
    var e = userData();
    if (e) {
        var t = e.checked_code_of_conduct,
            n = document.getElementById("toggle-code-of-conduct-checkbox");
        n && !t && (n.innerHTML = '<input type="checkbox" name="checked_code_of_conduct" class="checkbox" required/>                                  <label for="checked_code_of_conduct">I\'ve read the <a href="/code-of-conduct">code of conduct</a></label>')
    }
}

function handleCommentSubmit(e) {
    e.preventDefault();
    var t = e.target;
    t.classList.add("submitting");
    var n = t.getElementsByClassName("comment-textarea")[0];
    n && (n.style.height = null, n.blur());
    var a = document.getElementById("comment-node-" + e.target.dataset.commentId),
        o = t.querySelector("#comment_parent_id"),
        i = JSON.stringify({ comment: { body_markdown: t.getElementsByTagName("textarea")[0].value, commentable_id: t.querySelector("#comment_commentable_id").value, commentable_type: t.querySelector("#comment_commentable_type").value, parent_id: o ? o.value : null } });
    return getCsrfToken().then(sendFetch("comment-creation", i)).then(function(n) {
        return 200 !== n.status ? (t.classList.remove("submitting"), showModalAfterError({ response: n, element: "comment", action_ing: "posting", action_past: "posted" }), !1) : (n.json().then(function(n) {
            var o = document.createElement("div");
            o.innerHTML = buildCommentHTML(n);
            var i = document.body,
                r = JSON.parse(i.getAttribute("data-user"));
            r.checked_code_of_conduct = !0, i.dataset.user = JSON.stringify(r);
            var s = t.getElementsByClassName("code-of-conduct")[0];
            s && (s.innerHTML = "");
            var c = document.getElementById("new_comment");
            if (a) {
                if (handleFormClose(e), n.depth > 3) {
                    var l = a.getElementsByClassName("toggle-reply-form")[0],
                        d = `<span class="fs-s inline-flex items-center fs-italic color-base-50 pl-1">${iconSmallThread}Thread</span>`;
                    l.classList.replace("inline-flex", "hidden"), l.parentNode.innerHTML += d
                }
                var u = a.getElementsByClassName("comment__inner")[0];
                u.parentNode.insertBefore(o, u.nextSibling)
            } else if (c) {
                (c = document.getElementById("new_comment")).classList.remove("submitting"), c.classList.remove("preview-open");
                const e = [...t.getElementsByClassName("comment-textarea")];
                e[0].closest(".comment-form").classList.remove("comment-form--initiated"), e.forEach(e => { e.value = n.comment_template || "", e.style.height = null });
                const a = document.getElementById("preview-div"),
                    i = document.querySelector(".preview-toggle");
                a.innerHTML = "", i.innerHTML = "Preview";
                const r = document.getElementById("comment-trees-container");
                r.insertBefore(o, r.firstChild)
            } else if (document.getElementById("notifications-container")) {
                var m = document.createElement("span");
                m.innerHTML = '<div class="crayons-notice align-center p-2 m-2 crayons-notice--success reply-sent-notice reply-sent-notice" aria-live="polite">Reply sent \u2014 <a href="' + n.url + '">Check it out</a></div>', t.replaceWith(m)
            } else window.location.replace(n.url);
            updateCommentsCount(), initializeCommentsPage(), initializeCommentDate(), activateRunkitTags()
        }), !1)
    }), !1
}

function handleFocus(e) {
    handleButtonsActivation(e);
    var t = document.body.getAttribute("data-user-status"),
        n = e.target;
    if ("logged-out" == t) e.preventDefault(), showLoginModal(), n.blur();
    else {
        var a = e.target.closest(".comment-form");
        a && a.classList.add("comment-form--initiated"), handleSizeChange(e), window.Forem.initializeMentionAutocompleteTextArea(n)
    }
}

function handleKeyUp(e) { handleSizeChange(e), handleButtonsActivation(e) }

function handleSubmit(e) {
    var t = userData();
    t && (t.checked_code_of_conduct && "" !== e.target.value.trim() && e.target.closest("form").querySelector('button[type="submit"]').click())
}

function handleBoldAndItalic(e) {
    var t = e.target,
        n = t.value.substring(t.selectionStart, t.selectionEnd),
        a = t.selectionStart,
        o = e.keyCode === KEY_CODE_B ? "**" : "_";
    replaceSelectedText(t, `${o}${n}${o}`);
    var i = a + o.length;
    t.setSelectionRange(i, i + n.length)
}

function handleLink(e) {
    var t = e.target,
        n = t.value.substring(t.selectionStart, t.selectionEnd),
        a = t.selectionStart;
    replaceSelectedText(t, `[${n}](url)`);
    var o = a + n.length + 3,
        i = o + 3;
    t.setSelectionRange(o, i)
}

function replaceSelectedText(e, t) { document.execCommand("insertText", !1, t) || "function" == typeof e.setRangeText && e.setRangeText(t) }

function handleKeyDown(e) {
    if (Runtime.hasOSSpecificModifier(e)) switch (e.keyCode) {
        case KEY_CODE_B:
        case KEY_CODE_I:
            e.preventDefault(), handleBoldAndItalic(e);
            break;
        case KEY_CODE_K:
            e.preventDefault(), handleLink(e);
            break;
        case ENTER_KEY_CODE:
            e.preventDefault(), handleSubmit(e)
    }
}

function handleFormClose(e) { e.target.closest(".inner-comment").classList.remove("replying"), e.target.closest(".comment-form").remove(), initializeCommentsPage() }

function handleSizeChange(e) {
    var t = e.target,
        n = parseInt(t.style.height.replace("px", ""));
    t.style.height = t.scrollHeight + (t.scrollHeight > n ? 15 : 0) + "px"
}

function handleButtonsActivation(e) {
    var t = e.target;
    if (t.closest(".comment-form")) {
        var n = t.closest(".comment-form").getElementsByClassName("js-btn-enable");
        Array.from(n).forEach(function(e) { e.disabled = 0 === t.value.length })
    }
}

function validateField(e) { "" !== e.target.form.querySelector(".comment-textarea:not([role=combobox])").value || e.preventDefault() }

function handleChange(e) { handleButtonsActivation(e) }

function generateUploadFormdata(e) {
    var t = document.querySelector("meta[name='csrf-token']").content,
        n = new FormData;
    return n.append("authenticity_token", t), n.append("image", e[0]), n
}

function handleImageUpload(e, t) {
    document.getElementById("comments-container").dataset.commentableId;
    e.preventDefault(), document.getElementById("image-upload-" + t).click(), document.getElementById("image-upload-" + t).onchange = function() { document.getElementById("image-upload-" + t).files.length > 0 && (document.getElementById("image-upload-file-label-" + t).style.color = "#888888", document.getElementById("image-upload-file-label-" + t).innerHTML = "Uploading...", document.getElementById("image-upload-submit-" + t).value = "uploading", setTimeout(function() { document.getElementById("image-upload-submit-" + t).click(function() {}) }, 50)) }, document.getElementById("image-upload-submit-" + t).onclick = function(e) {
        e.preventDefault();
        var n = document.getElementById("image-upload-" + t).files;
        n.length > 0 && getCsrfToken().then(sendFetch("image-upload", generateUploadFormdata(n))).then(function(e) {
            200 === e.status ? e.json().then(function(e) {
                var n = document.getElementById("uploaded-image-" + t),
                    a = (document.getElementById("image-upload-button-" + t), document.getElementById("image-upload-file-label-" + t));
                a.style.display = "none", n.value = e.links[0], n.classList.remove("hidden"), n.select();
                var o = "Uploaded! Paste into editor";
                a.innerHTML = o, a.style.color = "#00c673", a.style.position = "relative", a.style.top = "5px"
            }) : 429 === e.status ? showRateLimitModal({ response: e, element: "image", action_ing: "uploading", action_past: "uploaded" }) : e.json().then(function(e) {
                var n = e.error || "Invalid file!";
                document.getElementById("image-upload-file-label-" + t).innerHTML = n, document.getElementById("image-upload-file-label-" + t).style.color = "#e05252", document.getElementById("image-upload-submit-" + t).style.display = "none"
            })
        })["catch"](function() {})
    }
}

function updateItemSummaryHtml(e) {
    var t = e.getElementsByClassName("js-collapse-comment-content")[0],
        n = e.getElementsByClassName("js-comment-username"),
        a = "";
    n.length > 1 && (a = " + " + (n.length - 1) + " replies");
    var o = n[0].textContent + a;
    e.open ? t.innerHTML = "" : t.innerHTML = o
}

function listenForDetailsToggle() { for (var e = document.querySelectorAll(".js-comment-wrapper"), t = 0; t < e.length; t++) e[t].addEventListener("toggle", e => { updateItemSummaryHtml(e.target) }) }

function updateCommentsCount() {
    const e = document.querySelector(".js-comments-count");
    if (!e) return;
    const t = parseInt(e.dataset.commentsCount, 10) + 1;
    e.dataset.commentsCount = t, e.innerHTML = `(${t})`
}

function handleHiddenComments(e) {
    const t = userData(),
        n = [];
    let a = "";
    if ("Article" === e) {
        const e = document.querySelector("#article-show-container");
        if (e) e.dataset && (n.push(e.dataset.authorId), (a = e.dataset.coAuthorIds) && a.split(",").forEach(e => { n.push(e) }));
        else {
            const e = document.querySelector("#comments-container");
            e && e.dataset && (n.push(e.dataset.commentableAuthorId), (a = e.dataset.commentableCoAuthorIds) && a.split(",").forEach(e => { n.push(e) }))
        }
    } else if ("PodcastEpisode" === e) {
        const e = document.querySelector(".podcast-episode-container");
        e && n.push(e.dataset.creatorId)
    }
    t && n.includes(t.id.toString()) ? collapseCommentsHiddenByCommentableUser() : (document.querySelectorAll(".element-hidden-by-commentable-user").forEach(e => { e.classList.add("hidden") }), document.querySelectorAll(".comment-hidden-by-author-text").forEach(e => { e.classList.remove("hidden") }))
}

function collapseCommentsHiddenByCommentableUser() { document.querySelectorAll(".js-comment-wrapper.details-comment-hidden-by-commentable-user").forEach(e => { 0 === e.querySelectorAll(".comment-form").length && (e.open = !1, updateItemSummaryHtml(e)) }) }

function initializeCreditsPage() { localizeTimeElements(document.querySelectorAll(".ledger time"), { year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }) }

function selectNavigation(e, t) {
    const n = document.getElementById(e);
    n && n.addEventListener("change", e => {
        let n = e.target.value;
        t && (n = t + n), InstantClick.preload(n), InstantClick.display(n)
    })
}

function initializeDashboardSort() { selectNavigation("dashboard_sort", "/dashboard?sort="), selectNavigation("dashboard_author"), selectNavigation("mobile_nav_dashboard") }

function initializeDateHelpers() { localizeTimeElements(document.querySelectorAll("time.date-no-year"), { month: "short", day: "numeric" }), localizeTimeElements(document.querySelectorAll("time.date"), { year: "numeric", month: "short", day: "numeric" }) }

function initializeDrawerSliders() {
    document.getElementById("on-page-nav-controls") && (document.getElementById("sidebar-bg-left") && (document.getElementById("sidebar-bg-left").onclick = (() => { slideSidebar("left", "outOfView") })), document.getElementById("sidebar-bg-right") && (document.getElementById("sidebar-bg-right").onclick = (() => { slideSidebar("right", "outOfView") })), document.getElementById("on-page-nav-butt-left") && (document.getElementById("on-page-nav-butt-left").onclick = (() => { slideSidebar("left", "intoView") })), document.getElementById("on-page-nav-butt-right") && (document.getElementById("on-page-nav-butt-right").onclick = (() => { slideSidebar("right", "intoView") })), InstantClick.on("change", () => { document.body.classList.remove("modal-open"), slideSidebar("right", "outOfView"), slideSidebar("left", "outOfView") }));
    const e = document.getElementById("feed-filter-select");
    e && e.addEventListener("change", e => {
        const t = e.target.value;
        InstantClick.preload(t), InstantClick.display(t)
    })
}

function initializeHeroBannerClose() {
    let e = document.getElementById("hero-html-wrapper"),
        t = document.getElementById("js-hero-banner__x");
    e && t && (t.setAttribute("aria-label", "Close campaign banner"), t.addEventListener("click", () => { localStorage.setItem("exited_hero", e.dataset.name), e.style.display = "none" }))
}

function initializeLocalStorageRender() {
    try {
        var e = browserStoreCache("get");
        e && (document.body.dataset.user = e, initializeBaseUserData(), initializeReadingListIcons(), initializeSponsorshipVisibility())
    } catch (t) { browserStoreCache("remove") }
}

function initializeOnboardingTaskCard() {
    if ("yes" === localStorage.getItem("task-card-closed")) return;
    var e = document.getElementsByClassName("onboarding-task-card")[0];
    const t = userData();
    if (null != e && t) {
        var n = new Date(t.created_at),
            a = new Date;
        n > a.setDate(a.getDate() - 7) && (e.style.display = "block")
    }
}

function initializePaymentPointers() {
    var e = document.getElementById("author-payment-pointer"),
        t = document.getElementById("base-payment-pointer"),
        n = document.querySelector("meta[name='monetization']");
    e && n ? n.content = e.dataset.paymentPointer : t && (n.content = t.dataset.paymentPointer)
}

function initializePodcastPlayback() {
    function e(e) { return document.getElementById(e) }

    function t(e) { return document.getElementsByClassName(e) }

    function n() { return window.name || (window.name = Math.random()), { html: e("audiocontent").innerHTML, currentTime: 0, playing: !1, muted: !1, volume: 1, duration: 1, updated: (new Date).getTime(), windowName: window.name } }

    function a() { try { var e = JSON.parse(localStorage.getItem("media_playback_state_v2")); return e && window.name === e.windowName ? e : n() } catch (t) { return console.log(t), n() } }

    function o() {
        var t = e("audio"),
            n = a();
        return t && n.playing
    }

    function i() { return e(`record-${window.activeEpisode}`) }

    function r(t) {
        if (o() && i()) {
            var n = e(`record-${window.activeEpisode}`);
            n.classList.add("playing"), n.setAttribute("aria-pressed", "true"), y(t)
        }
    }

    function s() {
        if (window.activeEpisode && e(`record-${window.activeEpisode}`)) {
            var t = e(`record-${window.activeEpisode}`);
            t.classList.remove("playing"), t.setAttribute("aria-pressed", "false"), window.activeEpisode = undefined
        }
    }

    function c() {
        var e = t("record-wrapper"),
            n = t("podcastliquidtag__record");
        return e.length > 0 ? e : n
    }

    function l(e) {
        var t = e || a(),
            o = n();
        return o.currentTime = t.currentTime, o.playing = t.playing, o.muted = t.muted, o.volume = t.volume, o.duration = t.duration, localStorage.setItem("media_playback_state_v2", JSON.stringify(o)), o
    }

    function d(t) {
        var n = a();
        e("barPlayPause").onclick = function() { L(t) }, e("mutebutt").onclick = function() { I(t) }, e("volbutt").onclick = function() { I(t) }, e("bufferwrapper").onclick = function(e) { B(e, t) }, e("volumeslider").value = 100 * n.volume, e("volumeslider").onchange = function(e) { S(e, t) }, e("speed").onclick = function() { h(t) }, e("closebutt").onclick = function() { M(t) }
    }

    function u(t) { return -1 !== e("audiocontent").innerHTML.indexOf(`${t}`) }

    function m(e) {
        return function() {
            var t = 0;
            e.currentTime > 0 && (t = e.buffered.end(e.buffered.length - 1) / e.duration * 100);
            C(e.currentTime, e.duration, t)
        }
    }

    function f(e) { Runtime.podcastMessage ? Runtime.podcastMessage({ action: "load", url: e.getElementsByTagName("source")[0].src }) : e.load() }

    function p(t) {
        e("audiocontent").innerHTML = e(`hidden-audio-${t}`).innerHTML;
        var n = e("audio");
        n.addEventListener("timeupdate", m(n), !1), f(n), L(n), d(n)
    }

    function g() {
        var t = c();
        Array.prototype.forEach.call(t, function(t) {
            var n = t.getAttribute("data-episode"),
                a = (t.getAttribute("data-podcast"), function() {
                    if (u(n)) {
                        var t = e("audio");
                        t && L(t)
                    } else s(), p(n)
                });
            t.addEventListener("click", a)
        })
    }

    function h(t) {
        var n = a(),
            o = e("speed"),
            i = parseFloat(o.getAttribute("data-speed"));
        2 === i ? (o.setAttribute("data-speed", .5), o.innerHTML = "0.5x", n.playbackRate = .5) : (o.setAttribute("data-speed", i + .5), o.innerHTML = i + .5 + "x", n.playbackRate = i + .5), l(n), Runtime.podcastMessage ? Runtime.podcastMessage({ action: "rate", rate: n.playbackRate.toString() }) : t.playbackRate = n.playbackRate
    }

    function y(n) {
        var a = e(`status-message-${window.activeEpisode}`);
        a ? n ? (a.classList.add("showing"), a.innerHTML = n) : a.classList.remove("showing") : "initializing..." === n && t("status-message")[0] && (t("status-message")[0].innerHTML = n)
    }

    function v() { e("barPlayPause").classList.add("playing"), e("progressBar").classList.add("playing"), e("animated-bars").classList.add("playing") }

    function b() { e("barPlayPause").classList.remove("playing"), e("animated-bars").classList.remove("playing") }

    function w(e) {
        return new Promise(function(t, n) {
            var o = a();
            Runtime.podcastMessage ? (Runtime.podcastMessage({ action: "play", url: e.getElementsByTagName("source")[0].src, seconds: o.currentTime.toString() }), O(!0), t()) : (e.currentTime = o.currentTime, e.play().then(function() { O(!0), t() })["catch"](function(e) { console.log(e), O(!1), n() }))
        })
    }

    function _() { var e = t("podcast-episode-container")[0]; return e === undefined && (e = t("podcastliquidtag")[0]), e.dataset.meta }

    function k() {
        if (Runtime.podcastMessage) try {
            var e = JSON.parse(_());
            Runtime.podcastMessage({ action: "metadata", episodeName: e.episodeName, podcastName: e.podcastName, podcastImageUrl: e.podcastImageUrl })
        } catch (t) { console.log("Unable to load Podcast Episode metadata", t) }
    }

    function E(e) { k(), w(e).then(function() { r(), v() })["catch"](function() { w(e), setTimeout(function() { r("initializing..."), v() }, 5) }) }

    function T(e) { Runtime.podcastMessage ? Runtime.podcastMessage({ action: "pause" }) : e.pause(), O(!1), s(), b() }

    function x(e) {
        window.activeEpisode = D.getAttribute("data-episode"), window.activePodcast = D.getAttribute("data-podcast");
        var t = { action: e, episode: window.activeEpisode, podcast: window.activePodcast, deviceType: R };
        ahoy.track("Podcast Player Streaming", t)
    }

    function L(e) { a().playing ? (x("pause"), T(e), y(null)) : (x("play"), y("initializing..."), E(e)) }

    function I(t) {
        var n = a();
        e("mutebutt").classList.add(n.muted ? "hidden" : "showing"), e("volumeindicator").classList.add(n.muted ? "showing" : "hidden"), e("mutebutt").classList.remove(n.muted ? "showing" : "hidden"), e("volumeindicator").classList.remove(n.muted ? "hidden" : "showing"), n.muted = !n.muted, Runtime.podcastMessage ? Runtime.podcastMessage({ action: "muted", muted: n.muted.toString() }) : t.muted = n.muted, l(n)
    }

    function S(e, t) {
        var n = a();
        n.volume = e.target.value / 100, Runtime.podcastMessage ? Runtime.podcastMessage({ action: "volume", volume: n.volume }) : t.volume = n.volume, l(n)
    }

    function C(t, n, o) {
        var i = e("progress"),
            r = e("buffer"),
            s = e("time"),
            c = 0,
            d = t - Math.floor(t);
        if (t > 0 && (c = Math.floor(100 / n * t), d < .4)) {
            var u = a();
            u.duration = n, u.currentTime = t, l(u)
        }
        i && s && t > 0 && (i.style.width = c + "%", r.style.width = o + "%", s.innerHTML = A(t) + " / " + A(n))
    }

    function B(t, n) {
        var o = a(),
            i = e("progress"),
            r = e("time");
        if (t.clientX > 128) {
            var s = (t.clientX - 128) / (window.innerWidth - 133),
                c = o.duration;
            o.currentTime = c * s, Runtime.podcastMessage ? Runtime.podcastMessage({ action: "seek", seconds: o.currentTime.toString() }) : n.currentTime = o.currentTime, r.innerHTML = A(o.currentTime) + " / " + A(o.duration), i.style.width = 100 * s + "%"
        }
    }

    function A(e) {
        var t = Math.floor(e),
            n = Math.floor(t / 60);
        return (n = n >= 10 ? n : "0" + n) + ":" + (t = (t = Math.floor(t % 60)) >= 10 ? t : "0" + t)
    }

    function M(t) { t.removeEventListener("timeupdate", m(t), !1), e("audiocontent").innerHTML = "", s(), l(n()), Runtime.podcastMessage && Runtime.podcastMessage({ action: "terminate" }) }

    function $(t) {
        const n = JSON.parse(t.detail);
        if ("podcast" === n.namespace) {
            var o = a();
            switch (n.action) {
                case "init":
                    e("time").innerHTML = "initializing...", o.currentTime = 0;
                    break;
                case "tick":
                    o.currentTime = n.currentTime, o.duration = n.duration, C(o.currentTime, o.duration, 100);
                    break;
                default:
                    console.log("Unrecognized message: ", n)
            }
            l(o)
        }
    }

    function N() { Runtime.isNativeIOS("podcast") ? R = "iOS" : Runtime.isNativeAndroid("podcastMessage") && (R = "Android"), "web" !== R && (Runtime.podcastMessage = (e => { window.ForemMobile.injectNativeMessage("podcast", e) })) }

    function H() {
        var t = a();
        document.getElementById("audiocontent").innerHTML = t.html;
        var n = e("audio");
        n !== undefined && null !== n ? (Runtime.podcastMessage && (n.currentTime = t.currentTime || 0), f(n), t.playing && w(n)["catch"](function() { b() }), setTimeout(function() { n.addEventListener("timeupdate", m(n), !1), document.addEventListener("ForemMobile", $) }, 500), d(n)) : audioInitialized = !1
    }

    function O(e) {
        var t = a();
        t.playing = e, l(t)
    }
    var R = "web";
    N(), r(), g(), audioInitialized || (audioInitialized = !0, H());
    var D = e("audio"),
        P = e("audiocontent");
    D && P && P.innerHTML.length < 25 && f(D)
}

function initializeReadingListIcons() { setReadingListButtonsState(), addReadingListCountToHomePage(), addHoverEffectToReadingListButtons() }

function setReadingListButtonsState() {
    var e = document.querySelectorAll(".bookmark-button:not([data-initial-feed])");
    Array.from(e).forEach(highlightButton)
}

function highlightButton(e) {
    var t = userData(),
        n = parseInt(e.dataset.reactableId, 10);
    t && t.reading_list_ids.indexOf(n) > -1 ? e.classList.add("selected") : e.classList.remove("selected"), e.addEventListener("click", reactToReadingListButtonClick), e.dataset.saveInitialized = !0
}

function addReadingListCountToHomePage() {
    var e, t = userData();
    t && document.getElementById("reading-list-count") && (e = t.reading_list_ids.length > 0 ? t.reading_list_ids.length : "", document.getElementById("reading-list-count").innerHTML = e, document.getElementById("reading-list-count").dataset.count = t.reading_list_ids.length)
}

function reactToReadingListButtonClick(e) {
    var t;
    e.preventDefault(), sendHapticMessage("medium"), "logged-out" !== document.body.getAttribute("data-user-status") ? (renderOptimisticResult(t = properButtonFromEvent(e)), getCsrfToken().then(sendFetch("reaction-creation", buttonFormData(t))).then(function(e) { if (200 === e.status) return e.json().then(function(e) { renderButtonState(t, e), renderNewSidebarCount(t, e) }) })["catch"](function() {})) : showLoginModal()
}

function renderButtonState(e, t) { "create" === t.result ? (e.classList.add("selected"), addHoverEffectToReadingListButtons(e)) : e.classList.remove("selected") }

function renderNewSidebarCount(e, t) {
    var n, a = document.getElementById("reading-list-count").dataset.count;
    a = parseInt(a, 10), "create" === t.result ? n = a + 1 : 0 !== a && (n = a - 1), document.getElementById("reading-list-count").dataset.count = n, document.getElementById("reading-list-count").innerHTML = n > 0 ? n : ""
}

function buttonFormData(e) { var t = new FormData; return t.append("reactable_type", "Article"), t.append("reactable_id", e.dataset.reactableId), t.append("category", "readinglist"), t }

function renderOptimisticResult(e) { renderButtonState(e, { result: "create" }) }

function properButtonFromEvent(e) { return "BUTTON" === e.target.tagName ? e.target : e.target.parentElement }

function addHoverEffectToReadingListButtons() {
    var e = document.getElementsByClassName("articles-list");
    Array.from(e).forEach(function(e) { e.addEventListener("mouseover", readingListButtonMouseHandler.bind("Unsave")), e.addEventListener("mouseout", readingListButtonMouseHandler.bind("Saved")) })
}

function isReadingListButtonHoverTarget(e) { var t = e.classList; return "BUTTON" === e.tagName && t.contains("bookmark-button") && t.contains("selected") || "SPAN" === e.tagName && t.contains("bm-success") }

function readingListButtonMouseHandler(e) {
    var t = e.target;
    if (isReadingListButtonHoverTarget(t)) {
        e.preventDefault();
        var n = this;
        ("BUTTON" === t.tagName ? t.getElementsByClassName("bm-success")[0] : t).innerHTML = n
    }
}

function initializeSettings() {
    const e = document.getElementById("settings-org-secret"),
        t = document.getElementById("settings-org-secret-copy-btn");
    e && t && t.addEventListener("click", () => {
        const { value: t } = e;
        Runtime.copyToClipboard(t).then(() => { document.getElementById("copy-text-announcer").classList.remove("hidden") })
    });
    let n = document.getElementById("rss-fetch-time");
    if (n) {
        var a = n.getAttribute("datetime"),
            o = { month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
        n.textContent = timestampToLocalDateTime(a, navigator.language, o)
    }
    const i = document.getElementById("mobile-page-selector");
    i && i.addEventListener("change", e => {
        const t = e.target.value;
        InstantClick.preload(t), InstantClick.display(t)
    })
}

function sponsorClickHandler(e) { ga("send", "event", "click", "click sponsor link", e.target.dataset.details, null) }

function listenForSponsorClick() {
    setTimeout(() => {
        if (window.ga)
            for (var e = document.getElementsByClassName("partner-link"), t = 0; t < e.length; t++) e[t].onclick = sponsorClickHandler
    }, 400)
}

function initializeSponsorshipVisibility() {
    var e = document.getElementById("sponsorship-widget") || document.getElementById("partner-content-display"),
        t = userData();
    e && setTimeout(() => { window.ga && 0 === document.querySelectorAll("[data-partner-seen]").length && (ga("send", "event", "view", "sponsor displayed on page", e.dataset.details, null), e.dataset.partnerSeen = "true") }, 400), e && t && t.display_sponsors ? (e.classList.remove("hidden"), listenForSponsorClick()) : e && t ? e.classList.add("hidden") : e && (e.classList.remove("hidden"), listenForSponsorClick())
}

function formatDateTime(e, t) { return new Intl.DateTimeFormat("en-US", e).format(t) }

function convertUtcTime(e) { return formatDateTime({ hour: "numeric", minute: "numeric", timeZoneName: "short" }, new Date(e)) }

function convertUtcDate(e) { return formatDateTime({ month: "short", day: "numeric" }, new Date(e)) }

function convertCalEvent(e) { return formatDateTime({ weekday: "long", month: "long", day: "numeric", hour: "numeric", minute: "numeric" }, new Date(e)) }

function updateLocalDateTime(e, t, n) { for (var a, o = 0; o < e.length; o += 1) a = t(n(e[o])), e[o].innerHTML = a }

function initializeTimeFixer() {
    var e = document.getElementsByClassName("utc-time"),
        t = document.getElementsByClassName("utc-date"),
        n = document.getElementsByClassName("utc");
    n && (updateLocalDateTime(e, convertUtcTime, e => e.dataset.datetime), updateLocalDateTime(t, convertUtcDate, e => e.dataset.datetime), updateLocalDateTime(n, convertCalEvent, e => e.innerHTML))
}

function initializeProfileInfoToggle() {
    const e = document.getElementsByClassName("js-user-info")[0],
        t = document.getElementsByClassName("js-user-info-trigger")[0],
        n = document.getElementsByClassName("js-user-info-trigger-wrapper")[0];
    t && e && t.addEventListener("click", () => { n.classList.replace("block", "hidden"), e.classList.replace("hidden", "grid") })
}

function initializeProfileBadgesToggle() {
    const e = document.getElementsByClassName("js-profile-badges")[0],
        t = document.getElementsByClassName("js-profile-badges-trigger")[0];
    if (e && t) {
        const n = e.querySelectorAll(".js-profile-badge.hidden");
        t.addEventListener("click", () => { n.forEach(e => { e.classList.remove("hidden") }), t.classList.add("hidden") })
    }
}

function initializeVideoPlayback() {
    function e(e) { return document.getElementById(e) }

    function t(e, t) { t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&"); var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t); return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null }

    function n(e) { var t; return e.length < 3 ? e : e.length < 6 ? 60 * +(t = e.split(":"))[0] + +t[1] : 60 * +(t = e.split(":"))[0] * 60 + 60 * +t[1] + +t[2] }

    function a(t) {
        var n = t ? "play" : "pause";
        if (u !== n) {
            u = n;
            var a = { article: i(e("video-player-source")).id, deviceType: d, action: n };
            ahoy.track("Video Player Streaming", a)
        }
    }

    function o(e, t) { var n = setInterval(function() { "undefined" != typeof jwplayer && (clearInterval(n), jwplayer(`video-player-${t.id}`).setup({ file: t.video_source_url, mediaid: t.video_code, image: t.video_thumbnail_url, playbackRateControls: !0, tracks: [{ file: t.video_closed_caption_track_url, label: "English", kind: "captions", "default": !1 }] }), e && (jwplayer().on("firstFrame", function() { jwplayer().seek(e) }), jwplayer().on("play", function() { a(!0) }), jwplayer().on("pause", function() { a(!1) }))) }, 2) }

    function i(e) { try { return JSON.parse(e.dataset.meta) } catch (t) { console.log("Unable to load Podcast Episode metadata", t) } }

    function r() {
        var t = i(m);
        e(`video-player-${t.id}`);
        e("pause-butt").classList.add("active"), e("play-butt").classList.remove("active"), Runtime.videoMessage({ action: "play", url: t.video_source_url, seconds: l }), a(!0)
    }

    function s(t) {
        const n = JSON.parse(t.detail);
        if ("video" === n.namespace) switch (n.action) {
            case "play":
                e("pause-butt").classList.add("active"), e("play-butt").classList.remove("active"), a(!0);
                break;
            case "pause":
                e("pause-butt").classList.remove("active"), e("play-butt").classList.add("active"), a(!1);
                break;
            case "tick":
                l = n.currentTime;
                break;
            default:
                console.log("Unrecognized message: ", n)
        }
    }

    function c(a) {
        var c = n(t("t") || "0"),
            u = i(a);
        if (Runtime.isNativeIOS("video")) d = "iOS";
        else {
            if (!Runtime.isNativeAndroid("videoMessage")) return void o(c, u);
            d = "Android"
        }
        Runtime.videoMessage = (e => { window.ForemMobile.injectNativeMessage("video", e) });
        var m = e(`video-player-${u.id}`);
        m.addEventListener("click", r), m.classList.add("native"), e("play-butt").classList.add("active"), document.addEventListener("ForemMobile", s), l = `${c}`
    }
    var l = "0",
        d = "web",
        u = "",
        m = e("video-player-source");
    null !== m && c(m)
}

function browserStoreCache(e, t) {
    try {
        switch (e) {
            case "set":
                localStorage.setItem("current_user", t), localStorage.setItem("config_body_class", JSON.parse(t).config_body_class);
                break;
            case "remove":
                localStorage.removeItem("current_user");
                break;
            default:
                return localStorage.getItem("current_user")
        }
    } catch (n) { navigator.cookieEnabled && browserStoreCache("remove") }
    return undefined
}

function buildArticleHTML(e) { var t = '<svg width="24" height="24" viewBox="0 0 24 24" class="crayons-icon" xmlns="http://www.w3.org/2000/svg"><path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z"/></svg>'; if (e && "Tag" === e.class_name) return `<article class="crayons-story">\n        <div class="crayons-story__body flex items-start gap-2">\n          <span class="radius-default p-2 shrink-0" style="background: ${e.bg_color_hex||"#000000"}1a; color: ${e.bg_color_hex||"#000"}">\n            ${t}\n          </span>\n          <div>\n            <h3 class="crayons-subtitle-2 lh-tight py-2">\n              <a href="/t/${e.name}" class="c-link">\n                ${e.name}\n              </a>\n            </h3>\n            ${e.short_summary?`<div class="truncate-at-3">${e.short_summary}</div>`:""}\n          </div>\n        </div>\n      </article>`;if(e&&"PodcastEpisode"===e.class_name)return`<article class="crayons-story crayons-podcast-episode mb-2">\n        <div class="crayons-story__body flex flex-start">\n          <a href="${e.podcast.slug}" class="crayons-podcast-episode__cover">\n            <img src="${e.podcast.image_url}" alt="${e.podcast.title}" loading="lazy" />\n          </a>\n          <div class="pt-2 flex-1">\n            <p class="crayons-podcast-episode__author">\n              ${e.podcast.title}\n            </p>\n            <h2 class="crayons-podcast-episode__title crayons-story__title mb-0">\n              <a href="${e.path}" id="article-link-${e.id}">\n                ${e.podcast.title}\n              </a>\n            </h2>\n          </div>\n        </div>\n      </article>`;if(e){var n=document.getElementById("index-container"),a="",o="";n&&(o=JSON.parse(n.dataset.params).tag),e.flare_tag&&o!==e.flare_tag.name&&(a=`<a href="/t/${e.flare_tag.name}"\n        class="crayons-tag crayons-tag--filled"\n        style="--tag-bg: ${e.flare_tag.bg_color_hex}1a; --tag-prefix: ${e.flare_tag.bg_color_hex}; --tag-bg-hover: ${e.flare_tag.bg_color_hex}1a; --tag-prefix-hover: ${e.flare_tag.bg_color_hex};"\n      >\n        <span class="crayons-tag__prefix">#</span>\n        ${e.flare_tag.name}\n      </a>`);var i="",r=e.tag_list||e.cached_tag_list_array||[];a&&(r=r.filter(function(t){return t!==e.flare_tag.name}),i+=a),r&&r.forEach(function(e){i+=`<a href="/t/${e}" class="crayons-tag crayons-tag--monochrome"><span class="crayons-tag__prefix">#</span>${e}</a>\n`});var s="",c="0";(e.comments_count||"0")>0&&(c=e.comments_count||"0");var l=' aria-label="Comments for post '+e.title+" ("+c+')" ';"User"!==e.class_name&&(s='<a href="'+e.path+'#comments"'+l+'class="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left "><svg class="crayons-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"/></svg>',s+=c>0?c+'<span class="hidden s:inline">&nbsp;comments</span></a>':'<span class="hidden s:inline">Add&nbsp;Comment</span></a>');var d,u,m=e.public_reactions_count,f="",p=1===m?"reaction":"reactions";"User"!==e.class_name&&m>0&&(f='<a href="'+e.path+'"'+l+'class="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"><svg class="crayons-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"/></svg>'+m+`<span class="hidden s:inline">&nbsp;${p}</span></a>`),"PodcastEpisode"===e.class_name?(d=e.main_image,u=e.slug,e.title):(d=e.user.profile_image_90,u=e.user.username,e.user.name);var g="",h="",y="crayons-avatar--l";e.organization&&!document.getElementById("organization-article-index")&&(h='<a href="/'+e.organization.slug+'" class="crayons-logo crayons-logo--l"><img alt="'+e.organization.name+' logo" src="'+e.organization.profile_image_90+'" class="crayons-logo__image" loading="lazy"/></a>',g='<span><span class="crayons-story__tertiary fw-normal"> for </span><a href="/'+e.organization.slug+'" class="crayons-story__secondary fw-medium">'+e.organization.name+"</a></span>",y="crayons-avatar--s absolute -right-2 -bottom-2 border-solid border-2 border-base-inverted");var v="";e.published_at_int&&(v=timeAgo({oldTimeInSeconds:e.published_at_int}));var b="";e.readable_publish_date&&(b=e.published_timestamp?'<time datetime="'+e.published_timestamp+'">'+e.readable_publish_date+" "+v+"</time>":"<time>"+e.readable_publish_date+" "+v+"</time>");var w="Article"===e.class_name,_=e.user.name.replace(/[\\"']/g,"\\$&"),k=`\n      <div id="story-author-preview-content-${e.id}" class="profile-preview-card__content crayons-dropdown p-4 pt-0 branded-7" data-repositioning-dropdown="true" style="border-top-color: var(--card-color);" data-testid="profile-preview-card">\n        <div class="gap-4 grid">\n          <div class="-mt-4">\n            <a href="/${u}" class="flex">\n              <span class="crayons-avatar crayons-avatar--xl mr-2 shrink-0">\n                <img src="${d}" class="crayons-avatar__image" alt="" loading="lazy" />\n              </span>\n              <span class="crayons-link crayons-subtitle-2 mt-5">${e.user.name}</span>\n            </a>\n          </div>\n          <div class="print-hidden">\n            <button class="crayons-btn follow-action-button whitespace-nowrap follow-user w-100" data-info='{"id": ${e.user_id}, "className": "User", "style": "full", "name": "${_}"}'>Follow</button>\n          </div>\n          <div class="author-preview-metadata-container" data-author-id="${e.user_id}"></div>\n        </div>\n      </div>\n    `,E=`\n      <div class="crayons-story__meta">\n        <div class="crayons-story__author-pic">\n          ${h}\n          <a href="/${u}" class="crayons-avatar ${y}">\n            <img src="${d}" alt="${u} profile" class="crayons-avatar__image" loading="lazy" />\n          </a>\n        </div>\n        <div>\n          <div>\n            <a href="/${u}" class="crayons-story__secondary fw-medium ${w?"m:hidden":""}">${filterXSS(e.user.name)}</a>\n    ${w?`<div class="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block"><button id="story-author-preview-trigger-${e.id}" aria-controls="story-author-preview-content-${e.id}" class="profile-preview-card__trigger fs-s crayons-btn crayons-btn--ghost p-1 -ml-1 -my-2" aria-label="${e.user.name} profile details">${e.user.name}</button>${k}</div>`:""}\n            ${g}\n          </div>\n          <a href="${e.path}" class="crayons-story__tertiary fs-xs">${b}</a>\n        </div>\n      </div>\n    `,T="",x="";if(e.highlight&&e.highlight.body_text.length>0){var L=e.highlight.body_text[0],I="";L.toLowerCase()!==L.toUpperCase()&&(I="\u2026"),(T=I+e.highlight.body_text.join("...")+"\u2026").length>0&&(x='<div class="crayons-story__snippet mb-1">'+T+"</div>")}var S="";"Article"===e.class_name&&(S='<small class="crayons-story__tertiary fs-xs mr-2">'+((e.reading_time||null)<1?"1 min":e.reading_time+" min")+" read</small>");var C=""
;"Article"===e.class_name?C='<button type="button" id="article-save-button-'+e.id+'" class="crayons-btn crayons-btn--secondary crayons-btn--s bookmark-button" data-reactable-id="'+e.id+'">                      <span class="bm-initial">Save</span>                      <span class="bm-success">Saved</span>                    </button>':"User"===e.class_name&&(C=`\n        <button type="button"\n          class="crayons-btn crayons-btn--secondary crayons-btn--icon-left fs-s bookmark-button article-engagement-count engage-button follow-action-button follow-user"\n          data-info='{"id": ${e.id},"className":"User", "name": "${e.user.name}"}'\n        data-follow-action-button>\n          &nbsp;\n        </button>`);var B="";e.cloudinary_video_url&&(B='<a href="'+e.path+'" class="crayons-story__video" style="background-image:url('+e.cloudinary_video_url+')"><div class="crayons-story__video__time">'+(e.video_duration_string||e.video_duration_in_minutes)+"</div></a>");var A=`\n      <a\n        href="${e.path}"\n        aria-labelledby="article-link-${e.id}"\n        class="crayons-story__hidden-navigation-link"\n      >\n        ${filterXSS(e.title)}\n      </a>\n    `;return`<article class="crayons-story"\n      data-article-path="${e.path}"\n      id="article-${e.id}"\n      data-content-user-id="${e.user_id}">        ${A}        <div role="presentation">          ${B}          <div class="crayons-story__body">            <div class="crayons-story__top">              ${E}\n            </div>            <div class="crayons-story__indention">\n              <h3 class="crayons-story__title">\n                <a href="${e.path}" id="article-link-${e.id}">\n                  ${filterXSS(e.title)}\n                </a>\n              </h3>              <div class="crayons-story__tags">\n                ${i}\n              </div>              ${x}              <div class="crayons-story__bottom">                <div class="crayons-story__details">\n                  ${f} ${s}\n                </div>                <div class="crayons-story__save">                  ${S}                  ${C}\n                </div>              </div>            </div>          </div>        </div>      </article>`}return""}function buildCommentFormHTML(e,t,n){var a=document.querySelector("meta[name='csrf-token']").getAttribute("content"),o=userData();o&&!o.codeOfConduct&&o.commentCount;var i=Math.floor(1991*Math.random());return`<form class="comment-form pt-4" onsubmit="handleCommentSubmit.bind(this)(event)" id="new-comment-${n}" action="/comments" accept-charset="UTF-8" method="post" data-comment-id="${n}">\n      <input name="utf8" type="hidden" value="&#x2713;" />\n      <input type="hidden" name="authenticity_token" value="${a}">\n      <input value="${e}" type="hidden" name="comment[commentable_id]" id="comment_commentable_id" />\n      <input value="${t}" type="hidden" name="comment[commentable_type]" id="comment_commentable_type" />\n      <input value="${n}" type="hidden" name="comment[parent_id]" id="comment_parent_id" />\n      <div class="comment-form__inner">\n        <div class="comment-form__field">\n          <textarea id="textarea-for-${n}" class="crayons-textfield crayons-textfield--ghost comment-textarea" name="comment[body_markdown]" placeholder="Reply..." aria-label="Reply to a comment..." required="required" onkeydown="handleKeyDown(event)" onfocus="handleFocus(event)" oninput="handleChange(event)" onkeyup="handleKeyUp(event)"></textarea>\n          <div class="comment-form__toolbar">\n            <div class="editor-image-upload">\n              <input type="file" id="image-upload-${i}"  name="file" accept="image/*" style="display:none">\n              <button type="button" class="crayons-btn crayons-btn--s crayons-btn--icon-left crayons-btn--ghost-dimmed" onclick="handleImageUpload(event, ${i})" id="image-upload-button-${i}">\n                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="crayons-icon"><path d="M20 5H4v14l9.292-9.294a1 1 0 011.414 0L20 15.01V5zM2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM8 11a2 2 0 110-4 2 2 0 010 4z"/></svg>\n                <span class="hidden s:inline-block">Upload image</span>\n              </button>\n              <label  class="image-upload-file-label" id="image-upload-file-label-${i}"></label>\n              <input type="submit" id="image-upload-submit-${i}" value="Upload" style="display:none">\n              <input class="crayons-textfield fs-s w-auto uploaded-image hidden" type="text" id="uploaded-image-${i}" />\n            </div>\n            <button type="button" class="crayons-btn crayons-btn--s crayons-btn--icon-left crayons-btn--ghost-dimmed response-templates-button" title="Use a response template" data-has-listener="false">\n              <svg width="24" height="24" class="crayons-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 18.5V5a3 3 0 013-3h14a1 1 0 011 1v18a1 1 0 01-1 1H6.5A3.5 3.5 0 013 18.5zM19 20v-3H6.5a1.5 1.5 0 100 3H19zM10 4H6a1 1 0 00-1 1v10.337A3.485 3.485 0 016.5 15H19V4h-2v8l-3.5-2-3.5 2V4z"/></svg>\n              <span class="hidden s:inline-block">Templates</span>\n            </button>\n            <a href="/p/editor_guide" class="crayons-btn crayons-btn--ghost-dimmed crayons-btn--icon crayons-btn--s ml-auto" target="_blank" rel="noopener" title="Markdown Guide">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="crayons-icon"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"/></svg>\n            </a>\n          </div>\n        </div>\n        <div class="response-templates-container crayons-card crayons-card--secondary p-4 mb-4 fs-base comment-form__templates hidden">\n          <header>\n            <button type="button" class="personal-template-button active" data-target-type="personal" data-form-id="new_comment">Personal</button>\n            <button type="button" class="moderator-template-button hidden" data-target-type="moderator" data-form-id="new_comment">Moderator</button>\n          </header>\n          <img class="loading-img hidden" src="https://dev.to/assets/loading-ellipsis-b714cf681fd66c853ff6f03dd161b77aa3c80e03cdc06f478b695f42770421e9.svg" alt="loading">\n          <div class="personal-responses-container"></div>\n          <div class="moderator-responses-container hidden"></div>\n          <a target="_blank" rel="noopener nofollow" href="/settings/response-templates">Create template</a>\n          <p>Templates let you quickly answer FAQs or store snippets for re-use.</p>\n        </div>\n        <div class="comment-form__preview text-styles text-styles--secondary"></div>\n        <div class="comment-form__buttons mb-4 whitespace-nowrap">\n          <button type="submit" class="crayons-btn comment-action-button mr-2 js-btn-enable" name="submit" disabled>Submit</button>\n          <button type="button" class="preview-toggle crayons-btn crayons-btn--secondary comment-action-button comment-action-preview mr-2 js-btn-enable" onclick="handleCommentPreview(event)" disabled>Preview</button>\n          <button type="button" class="crayons-btn crayons-btn--ghost" onclick="handleFormClose(event)">Dismiss</button>\n        </div>\n      </div>\n    </form>`}function buildCommentHTML(e){var t='<svg width="24" height="24" viewBox="0 0 24 24" class="crayons-icon pointer-events-none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>',n='<svg width="24" height="24" class="crayons-icon expanded" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.6771L8 6.93529L8.99982 6L12 8.80653L15.0002 6L16 6.93529L12 10.6771ZM12 15.1935L8.99982 18L8 17.0647L12 13.3229L16 17.0647L15.0002 17.9993L12 15.1935Z" /></svg>',a='<svg width="24" height="24" class="crayons-icon collapsed" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18L8 14.2287L8.99982 13.286L12 16.1147L15.0002 13.286L16 14.2287L12 18ZM12 7.88533L8.99982 10.714L8 9.77133L12 6L16 9.77133L15.0002 10.7133L12 7.88533Z" /></svg>',o="",i="",r="",s="",c="",l="";return 0==e.depth?o+="root ":o+="child ",e.depth>3&&(o+="comment--too-deep "),e.newly_created&&"comment-created-via-fetch",e.depth<3&&(i=`\n      <details class="comment-wrapper comment-wrapper--deep-${e.depth} js-comment-wrapper" open>\n        <summary aria-label="Toggle this comment (and replies)">\n          <span class="inline-block align-middle ${e.depth>0?"mx-0":"m:mx-1"}">\n            ${n}\n            ${a}\n          </span>\n          <span class="js-collapse-comment-content inline-block align-middle"></span>\n        </summary>\n    `,r="</details>"),l=`<a href="/${e.user.username}" class="shrink-0 crayons-avatar ${0==e.depth?"m:crayons-avatar--l mt-4 m:mt-3":"mt-4"}">\n    <img class="crayons-avatar__image" width="32" height="32" src="${e.user.profile_pic}" alt="${e.user.username} profile" />\n  </a>`,s=`<div class="comment__header" >\n    <a href="/${e.user.username}" class="crayons-link crayons-link--secondary flex items-center fw-medium m:hidden">\n      <span class="js-comment-username">${e.user.name}</span>\n    </a>\n    <div class="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:block">\n      <button id="comment-profile-preview-trigger-${e.id}" aria-controls="comment-profile-preview-content-${e.id}" class="profile-preview-card__trigger p-1 -my-1 -ml-1 crayons-btn crayons-btn--ghost" aria-label="${e.user.name} profile details">${e.user.name}</button>\n      <span data-js-comment-user-id="${e.user.id}" data-js-dropdown-content-id="comment-profile-preview-content-${e.id}" class="preview-card-placeholder"></span>\n    </div>\n    <span class="color-base-30 px-2 m:pl-0" role="presentation">&bull;</span>\n\n    <a href="${e.url}" class="comment-date crayons-link crayons-link--secondary fs-s">\n      <time datetime="${e.published_timestamp}">\n        ${e.readable_publish_date}\n      </time>\n    </a>\n\n    <div class="comment__dropdown">\n      <button  id="comment-dropdown-trigger-${e.id}" aria-controls="comment-dropdown-${e.id}" aria-expanded="false" class="dropbtn comment__dropdown-trigger crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon" aria-label="Toggle dropdown menu" aria-haspopup="true">\n        ${t}\n      </button>\n      <div id="comment-dropdown-${e.id}" class="crayons-dropdown right-1 s:right-0 s:left-auto fs-base dropdown">\n        <ul class="m-0">\n          <li><a href="${e.url}" class="crayons-link crayons-link--block permalink-copybtn" aria-label="Copy link to ${e.user.name}'s comment" data-no-instant>${I18n.t("core.copy_link")}</a></li>\n          <li><a href="${e.url}/settings" class="crayons-link crayons-link--block" aria-label="Go to ${e.user.name}'s comment settings">Settings</a></li>\n          <li><a href="/report-abuse?url=${e.url}" class="crayons-link crayons-link--block" aria-label="Report ${e.user.name}'s comment as abusive or violating our code of conduct and/or terms and conditions">${I18n.t("core.report_abuse")}</a></li>\n          <li class="${e.newly_created?"":"hidden"}"><a href="${e.url}/edit" class="crayons-link crayons-link--block" rel="nofollow" aria-label="Edit this comment">Edit</a></li>\n          <li class="${e.newly_created?"":"hidden"}"><a data-no-instant="" href="${e.url}/delete_confirm" class="crayons-link crayons-link--block" rel="nofollow" aria-label="Delete this comment">Delete</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>`,c=`<footer class="comment__footer">\n    ${react(e)}\n    ${reply(e)}\n  </footer>`,`${i}\n    <div class="comment single-comment-node ${o} comment--deep-${e.depth}" id="comment-node-${e.id}" data-comment-id="${e.id}" data-path="${e.url}" data-comment-author-id="${e.user.id}" data-current-user-comment="${e.newly_created}" data-content-user-id="${e.user.id}">\n      <div class="comment__inner">\n        ${l}\n        <div class="inner-comment comment__details">\n          <div class="comment__content crayons-card">\n            ${s}\n            <div class="comment__body text-styles text-styles--secondary body">\n              ${e.body_html}\n            </div>\n          </div>\n          ${c}\n        </div>\n      </div>\n    </div>\n  ${r}`}function reply(e){var t='<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="crayons-icon reaction-icon not-reacted"><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"/></svg>',n=`<a class="js actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex"\n    href="#${e.url}"\n    data-comment-id="${e.id}"\n    data-path="${e.url}"\n    rel="nofollow">\n    ${t}\n    <span class="hidden m:inline-block">Reply</span>\n  </a>`;if(e.newly_created)return n}function react(e){var t=1,n='<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="crayons-icon reaction-icon not-reacted"><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"/></svg>',a='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="crayons-icon reaction-icon--like reaction-icon reacted"><path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"/></svg>';return!e.newly_created&&e.heart_ids.indexOf(userData().id)>-1&&"reacted",e.newly_created||(t=e.public_reactions_count),`<button class="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button" id="button-for-comment-${e.id}" data-comment-id="${e.id}">\n    ${n}\n    ${a}\n    <span class="reactions-count" id="reactions-count-${e.id}">${t}</span>\n    <span class="reactions-label hidden m:inline-block">like</span>\n  </button>`}function checkUserLoggedIn(){const e=document.body;return!!e&&"logged-in"===e.getAttribute("data-user-status")}function dynamicallyLoadScript(e){if(document.querySelector(`script[src='${e}']`))return;const t=document.createElement("script");t.src=e,document.head.appendChild(t)}function getCsrfToken(){return new Promise(function(e,t){var n=0,a=setInterval(function(){var o=document.querySelector("meta[name='csrf-token']");if(n+=1,o){clearInterval(a);var i=o.getAttribute("content");return e(i)}if(1e3===n)return clearInterval(a),Honeybadger.notify("Could not locate CSRF metatag "+JSON.stringify(localStorage.current_user)),t(new Error("Could not locate CSRF meta tag on the page."))},5)})}function getCurrentPage(e){return document.querySelectorAll("[data-current-page='"+e+"']").length>0}function getImageForLink(e){var t=e.getAttribute("data-preload-image");t&&-1===$fetchedImageUrls.indexOf(t)&&((new Image).src=t,$fetchedImageUrls.push(t))}function insertAfter(e,t){t&&t.parentNode&&t.parentNode.insertBefore(e,t.nextSibling)}function timestampToLocalDateTime(e,t,n){if(!e)return"";try{var a=new Date(e);return new Intl.DateTimeFormat(t||"default",n).format(a)}catch(o){return""}}function addLocalizedDateTimeToElementsTitles(e,t){for(var n=0;n<e.length;n+=1){var a=e[n],o=a.getAttribute(t||"datetime");if(o){var i=timestampToLocalDateTimeLong(o);a.setAttribute("title",i)}}}function localizeTimeElements(e,t){for(let n=0;n<e.length;n+=1){const a=e[n],o=a.getAttribute("datetime");if(o){const e=timestampToLocalDateTime(o,navigator.language,t);a.textContent=e}}}function timestampToLocalDateTimeLong(e){return timestampToLocalDateTime(e,navigator.language,{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}function timestampToLocalDateTimeShort(e){if(e){const n=(new Date).getFullYear();var t={day:"numeric",month:"short"};return new Date(e).getFullYear()!==n&&(t.year="numeric"),timestampToLocalDateTime(e,navigator.language,t)}return""}function localStorageTest(){var e="devtolocalstoragetestforavaialbility";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}function preventDefaultAction(e){e.preventDefault()}function sendFetch(e,t){switch(e){case"article-preview":return fetchCallback({url:"/articles/preview",headers:{Accept:"application/json","Content-Type":"application/json"},body:t});case"reaction-creation":return fetchCallback({url:"/reactions",addTokenToBody:!0,body:t});case"image-upload":return fetchCallback({url:"/image_uploads",addTokenToBody:!0,body:t});case"follow-creation":return fetchCallback({url:"/follows",addTokenToBody:!0,body:t});case"block-user":return fetchCallback({url:"/user_blocks",headers:{Accept:"application/json","Content-Type":"application/json"},addTokenToBody:!1,body:t});case"comment-creation":return fetchCallback({url:"/comments",headers:{"Content-Type":"application/json"},body:t});case"comment-preview":return fetchCallback({url:"/comments/preview",headers:{"Content-Type":"application/json"},body:t});case"user_subscriptions":return fetchCallback({url:"/user_subscriptions",headers:{Accept:"application/json","Content-Type":"application/json"},body:t});default:console.log("A wrong switchStatement was used.")}return!0}function sendHapticMessage(e){try{window&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.haptic&&window.webkit.messageHandlers.haptic.postMessage(e)}catch(t){console.log(t.message)}}function showLoginModal(){window.Forem.showModal({title:"Log in to continue",contentSelector:"#global-signup-modal",overlay:!0})}function showUserAlertModal(e,t,n){buildModalDiv(t,n),window.Forem.showModal({title:e,contentSelector:`#${modalId}`,overlay:!0})}function showRateLimitModal({element:e,action_ing:t,action_past:n,timeframe:a="a moment"}){showUserAlertModal(`Wait ${a}...`,buildRateLimitText({element:e,action_ing:t,action_past:n,timeframe:a}),"Got it","/faq","Why do I have to wait?")}function showModalAfterError({response:e,element:t,action_ing:n,action_past:a,timeframe:o="a moment"}){e.json().then(function(i){429===e.status?showRateLimitModal({element:t,action_ing:n,action_past:a,timeframe:o}):showUserAlertModal(`Error ${n} ${t}`,`Your ${t} could not be ${a} due to an error: `+i.error,"OK")})["catch"](function(){showUserAlertModal(`Error ${n} ${t}`,`Your ${t} could not be ${a} due to a server error`,"OK")})}function buildRateLimitText({element:e,action_ing:t,action_past:n,timeframe:a}){return`Since you recently ${n} a ${e}, you\u2019ll need to wait ${a} before ${t} another ${e}.`}function buildModalDiv(e,t){let n=document.getElementById(modalId);return n?n.outerHTML=getModal(e,t).outerHTML:(n=getModal(e,t),document.body.appendChild(n)),n}function getModal(e,t){let n=document.createElement("div");return n.innerHTML=getModalHtml(e,t),n}function slideSidebar(e,t){if(!document.getElementById("sidebar-wrapper-"+e))return;const n=document.getElementById("main-content")||document.getElementById("articles-list");"intoView"===t?(n.classList.add("modal-open"),document.body.classList.add("modal-open"),document.getElementById("sidebar-wrapper-"+e).classList.add("swiped-in"),n.addEventListener("touchmove",preventDefaultAction,!1)):(n.classList.remove("modal-open"),document.body.classList.remove("modal-open"),document.getElementById("sidebar-wrapper-"+e).classList.remove("swiped-in"),n.removeEventListener("touchmove",preventDefaultAction,!1))}function secondsToHumanUnitAgo(e){const t=[["second",1],["min",60],["hour",3600],["day",86400],["week",604800],["month",2592e3],["year",31536e3]];if(e<t[0][1])return"just now";let n=0;for(;n+1<t.length&&e>=t[n+1][1];)n+=1;const a=Math.floor(e/t[n][1]);return a+" "+(t[n][0]+(1===a?"":"s"))+" ago"}function timeAgo({oldTimeInSeconds:e,formatter:t=(e=>`<span class="time-ago-indicator">(${e})</span>`),maxDisplayedAge:n=86399}){const a=new Date/1e3,o=Math.round(a-e);return o>n?"":t(secondsToHumanUnitAgo(o))}function userData(){const{user:e=null}=document.body.dataset;return JSON.parse(e)}function callInitializers(){initializeBaseTracking(),initializePaymentPointers(),initializeCommentsPage(),initializeArticleDate(),initializeArticleReactions(),initNotifications(),initializeCommentDate(),initializeSettings(),initializeCommentPreview(),initializeTimeFixer(),initializeDashboardSort(),initializeArchivedPostFilter(),initializeCreditsPage(),initializeProfileInfoToggle(),initializeProfileBadgesToggle(),initializeDrawerSliders(),initializeHeroBannerClose(),initializeOnboardingTaskCard(),initializeDateHelpers(),initializeColorPicker()}function initializePage(){initializeLocalStorageRender(),initializeBodyData();var e=setInterval(function(){"true"===document.body.getAttribute("data-loaded")&&(clearInterval(e),"logged-in"===document.body.getAttribute("data-user-status")&&(initializeBaseUserData(),initializeAllTagEditButtons()),initializeBroadcast(),initializeReadingListIcons(),initializeSponsorshipVisibility(),document.getElementById("sidebar-additional")&&document.getElementById("sidebar-additional").classList.add("showing"),initializePodcastPlayback(),initializeVideoPlayback())},1);callInitializers(),nextPage=0,fetching=!1,done=!1,adClicked=!1,setTimeout(function(){done=!1},300),initScrolling.called||initScrolling(),document.body.dataset.runtime=Runtime.currentContext()}function initializeBaseApp(){InstantClick.on("change",function(){initializePage()}),InstantClick.init()}var client,iconSmallThread='<svg width="24" height="24" class="crayons-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 13l-5 6-5-6h3.125c0-3.314 2.798-6 6.25-6 .17 0 .34.006.506.02-1.787.904-3.006 2.705-3.006 4.78V13H17z" /></svg>',KEY_CODE_B=66,KEY_CODE_I=73,KEY_CODE_K=75,ENTER_KEY_CODE=13,audioInitialized=!1;class Runtime{static currentContext(){return`${Runtime.currentMedium()}-${Runtime.currentOS()}`}static currentMedium(){return/ForemWebView/i.test(navigator.userAgent)?"ForemWebView":"Browser"}static currentOS(){const e=["Win32","Win64","Windows","WinCE"],t=["iPhone","iPad","iPod"];return["Macintosh","MacIntel","MacPPC","Mac68K"].includes(window.navigator.platform)?"macOS":t.includes(window.navigator.platform)?"iOS":e.includes(window.navigator.platform)?"Windows":/Android/i.test(window.navigator.userAgent)?"Android":/Linux/i.test(window.navigator.platform)?"Linux":"Unsupported"}static isNativeIOS(e=null){const t=/DEV-Native-ios|ForemWebView/i.test(navigator.userAgent)&&window&&window.webkit&&window.webkit.messageHandlers;let n=!0;return t&&e&&(n=window.webkit.messageHandlers[e]!=undefined),t&&n}static isNativeAndroid(e=null){const t=/DEV-Native-android|ForemWebView/i.test(navigator.userAgent)&&"undefined"!=typeof AndroidBridge;let n=!0;return t&&e&&(n=AndroidBridge[e]!=undefined),t&&n}static copyToClipboard(e){return new Promise((t,n)=>{Runtime.isNativeAndroid("copyToClipboard")?(AndroidBridge.copyToClipboard(e),t()):null!=navigator.clipboard?navigator.clipboard.writeText(e).then(()=>{t()})["catch"](e=>{n(e)}):n("Unable to copy the text. Try reloading the page")})}static hasOSSpecificModifier(e){return e instanceof KeyboardEvent&&(navigator.userAgent.indexOf("Mac OS X")>=0?e.metaKey:e.ctrlKey)}static getOSKeyboardModifierKeyString(){return"macOS"===Runtime.currentOS()?"cmd":"ctrl"}}var $fetchedImageUrls=[];"undefined"!=typeof globalThis&&(globalThis.timestampToLocalDateTimeLong=timestampToLocalDateTimeLong,globalThis.timestampToLocalDateTimeShort=timestampToLocalDateTimeShort);const fetchCallback=({url:e,headers:t={},addTokenToBody:n=!1,body:a})=>o=>(n&&a.append("authenticity_token",o),window.fetch(e,{method:"POST",headers:{"X-CSRF-Token":o,...t},body:a,credentials:"same-origin"})),modalId="user-alert-modal",getModalHtml=(e,t)=>`\n   <div id="${modalId}" hidden>\n     <div class="flex flex-col">\n       <p class="color-base-70">\n         ${e}\n       </p>\n       <button class="crayons-btn mt-4 ml-auto" type="button" onClick="window.Forem.closeModal()">\n         ${t}\n       </button>\n     </div>\n   </div>\n `;"undefined"!=typeof globalThis&&(globalThis.timeAgo=timeAgo),function e(t,n,a){function o(r,s){if(!n[r]){if(!t[r]){var c="function"==typeof require&&require;if(!s&&c)return c(r,!0);if(i)return i(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[r]={exports:{}};t[r][0].call(d.exports,function(e){var n=t[r][1][e];return o(n||e)},d,d.exports,e,t,n,a)}return n[r].exports}for(var i="function"==typeof require&&require,r=0;r<a.length;r++)o(a[r]);return o}({1:[function(e,t,n){function a(){return{}}function o(){}function i(){}function r(){}function s(){}function c(e){return e.replace(x,"&lt;").replace(L,"&gt;")}function l(e,t,n,a){if(n=g(n),"href"===t||"src"===t){if("#"===(n=E.trim(n)))return"#";if("http://"!==n.substr(0,7)&&"https://"!==n.substr(0,8)&&"mailto:"!==n.substr(0,7)&&"#"!==n[0]&&"/"!==n[0])return""}else if("background"===t){if(M.lastIndex=0,M.test(n))return""}else if("style"===t){if($.lastIndex=0,$.test(n))return"";if(N.lastIndex=0,N.test(n)&&(M.lastIndex=0,M.test(n)))return"";!1!==a&&(n=(a=a||T).process(n))}return n=h(n)}function d(e){return e.replace(I,"&quot;")}function u(e){return e.replace(S,'"')}function m(e){return e.replace(C,function(e,t){return"x"===t[0]||"X"===t[0]?String.fromCharCode(parseInt(t.substr(1),16)):String.fromCharCode(parseInt(t,10))})}function f(e){return e.replace(B,":").replace(A," ")}function p(e){for(var t="",n=0,a=e.length;n<a;n++)t+=e.charCodeAt(n)<32?" ":e.charAt(n);return E.trim(t)}function g(e){return e=p(e=f(e=m(e=u(e))))}function h(e){return e=c(e=d(e))}function y(){return""}function v(e,t){function n(t){return!!a||-1!==E.indexOf(e,t)}"function"!=typeof t&&(t=function(){});var a=!Array.isArray(e),o=[],i=!1;return{onIgnoreTag:function(e,a,r){if(n(e)){if(r.isClosing){var s="[/removed]",c=r.position+s.length;return o.push([!1!==i?i:r.position,c]),i=!1,s}return i||(i=r.position),"[removed]"}return t(e,a,r)},remove:function(e){var t="",n=0;return E.forEach(o,function(a){t+=e.slice(n,a[0]),n=a[1]}),t+=e.slice(n)}}}function b(e){return e.replace(H,"")}function w(e){var t=e.split("");return(t=t.filter(function(e){var t=e.charCodeAt(0);return 127!==t&&(!(t<=31)||(10===t||13===t))})).join("")}var _=e("cssfilter").FilterCSS,k=e("cssfilter").getDefaultWhiteList,E=e("./util"),T=new _,x=/</g,L=/>/g,I=/"/g,S=/&quot;/g,C=/&#([a-zA-Z0-9]*);?/gim,B=/&colon;?/gim,A=/&newline;?/gim,M=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,$=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,N=/u\s*r\s*l\s*\(.*/gi,H=/<!--[\s\S]*?-->/g;n.whiteList=a(),n.getDefaultWhiteList=a,n.onTag=o,n.onIgnoreTag=i,n.onTagAttr=r,n.onIgnoreTagAttr=s,n.safeAttrValue=l,n.escapeHtml=c,n.escapeQuote=d,n.unescapeQuote=u,n.escapeHtmlEntities=m,n.escapeDangerHtml5Entities=f,n.clearNonPrintableCharacter=p,n.friendlyAttrValue=g,n.escapeAttrValue=h,n.onIgnoreTagStripAll=y,n.StripTagBody=v,n.stripCommentTag=b,n.stripBlankChar=w,n.cssFilter=T,n.getDefaultCSSWhiteList=k},{"./util":4,cssfilter:8}],2:[function(e,t,n){function a(e,t){return new r(t).process(e)}var o=e("./default"),i=e("./parser"),r=e("./xss");for(var s in(n=t.exports=a).FilterXSS=r,o)n[s]=o[s];for(var s in i)n[s]=i[s];"undefined"!=typeof window&&(window.filterXSS=t.exports)},{"./default":1,"./parser":3,"./xss":5}],3:[function(e,t,n){function a(e){var t=e.indexOf(" ");if(-1===t)var n=e.slice(1,-1);else n=e.slice(1,t+1);return"/"===(n=u.trim(n).toLowerCase()).slice(0,1)&&(n=n.slice(1)),"/"===n.slice(-1)&&(n=n.slice(0,-1)),n}function o(e){return"</"===e.slice(0,2)}function i(e,t,n){"user strict";var i="",r=0,s=!1,c=!1,l=0,d=e.length,u="",m="";for(l=0;l<d;l++){var f=e.charAt(l);if(!1===s){if("<"===f){s=l;continue}}else if(!1===c){if("<"===f){i+=n(e.slice(r,l)),s=l,r=l;continue}if(">"===f){i+=n(e.slice(r,s)),m=a(u=e.slice(s,l+1)),i+=t(s,i.length,m,u,o(u)),r=l+1,s=!1;continue}if(('"'===f||"'"===f)&&"="===e.charAt(l-1)){c=f;continue}}else if(f===c){c=!1;continue}}return r<e.length&&(i+=n(e.substr(r))),i}function r(e,t){"user strict";function n(e,n){if(!((e=(e=u.trim(e)).replace(m,"").toLowerCase()).length<1)){var a=t(e,n||"");a&&o.push(a)}}for(var a=0,o=[],i=!1,r=e.length,l=0;l<r;l++){var f,p=e.charAt(l);if(!1!==i||"="!==p)if(!1===i||l!==a||'"'!==p&&"'"!==p||"="!==e.charAt(l-1))if(" "!==p);else{if(!1===i){if(-1===(f=s(e,l))){n(u.trim(e.slice(a,l))),i=!1,a=l+1;continue}l=f-1;continue}if(-1===(f=c(e,l-1))){n(i,d(u.trim(e.slice(a,l)))),i=!1,a=l+1;continue}}else{if(-1===(f=e.indexOf(p,l+1)))break;n(i,u.trim(e.slice(a+1,f))),i=!1,a=(l=f)+1}else i=e.slice(a,l),a=l+1}return a<e.length&&(!1===i?n(e.slice(a)):n(i,d(u.trim(e.slice(a))))),u.trim(o.join(" "))}function s(e,t){for(;t<e.length;t++){var n=e[t];if(" "!==n)return"="===n?t:-1}}function c(e,t){for(;t>0;t--){var n=e[t];if(" "!==n)return"="===n?t:-1}}function l(e){return'"'===e[0]&&'"'===e[e.length-1]||"'"===e[0]&&"'"===e[e.length-1]}function d(e){return l(e)?e.substr(1,e.length-2):e}var u=e("./util"),m=/[^a-zA-Z0-9_:\.\-]/gim;n.parseTag=i,n.parseAttr=r},{"./util":4}],4:[function(e,t){t.exports={indexOf:function(e,t){var n,a;if(Array.prototype.indexOf)return e.indexOf(t);for(n=0,a=e.length;n<a;n++)if(e[n]===t)return n;return-1},forEach:function(e,t,n){var a,o;if(Array.prototype.forEach)return e.forEach(t,n);for(a=0,o=e.length;a<o;a++)t.call(n,e[a],a,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")}}},{}],5:[function(e,t){function n(e){return e===undefined||null===e}function a(e){var t=e.indexOf(" ");if(-1===t)return{html:"",closing:"/"===e[e.length-2]};var n="/"===(e=u.trim(e.slice(t+1,-1)))[e.length-1];return n&&(e=u.trim(e.slice(0,-1))),{html:e,closing:n}}function o(e){var t={};for(var n in e)t[n]=e[n];return t}function i(e){(e=o(e||{})).stripIgnoreTag&&(e.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),e.onIgnoreTag=s.onIgnoreTagStripAll),e.whiteList=e.whiteList||s.whiteList,e.onTag=e.onTag||s.onTag,e.onTagAttr=e.onTagAttr||s.onTagAttr,e.onIgnoreTag=e.onIgnoreTag||s.onIgnoreTag,e.onIgnoreTagAttr=e.onIgnoreTagAttr||s.onIgnoreTagAttr,e.safeAttrValue=e.safeAttrValue||s.safeAttrValue,e.escapeHtml=e.escapeHtml||s.escapeHtml,this.options=e,!1===e.css?this.cssFilter=!1:(e.css=e.css||{},this.cssFilter=new r(e.css))}var r=e("cssfilter").FilterCSS,s=e("./default"),c=e("./parser"),l=c.parseTag,d=c.parseAttr,u=e("./util");i.prototype.process=function(e){if(!(e=(e=e||"").toString()))return"";var t=this,o=t.options,i=o.whiteList,r=o.onTag,c=o.onIgnoreTag,m=o.onTagAttr,f=o.onIgnoreTagAttr,p=o.safeAttrValue,g=o.escapeHtml,h=t.cssFilter;o.stripBlankChar&&(e=s.stripBlankChar(e)),o.allowCommentTag||(e=s.stripCommentTag(e));var y=!1;if(o.stripIgnoreTagBody){y=s.StripTagBody(o.stripIgnoreTagBody,c);c=y.onIgnoreTag}var v=l(e,function(e,t,o,s,l){var y,v={sourcePosition:e,position:t,isClosing:l,isWhite:o in i};if(!n(y=r(o,s,v)))return y;if(v.isWhite){if(v.isClosing)return"</"+o+">";var b=a(s),w=i[o],_=d(b.html,function(e,t){var a,i=-1!==u.indexOf(w,e);return n(a=m(o,e,t,i))?i?(t=p(o,e,t,h))?e+'="'+t+'"':e:n(a=f(o,e,t,i))?void 0:a:a});s="<"+o;return _&&(s+=" "+_),b.closing&&(s+=" /"),s+=">"}return n(y=c(o,s,v))?g(s):y},g);return y&&(v=y.remove(v)),v},t.exports=i},{"./default":1,"./parser":3,"./util":4,cssfilter:8}],6:[function(e,t){function n(e){return e===undefined||null===e}function a(e){var t={};for(var n in e)t[n]=e[n];return t}function o(e){(e=a(e||{})).whiteList=e.whiteList||i.whiteList,e.onAttr=e.onAttr||i.onAttr,e.onIgnoreAttr=e.onIgnoreAttr||i.onIgnoreAttr,this.options=e}var i=e("./default"),r=e("./parser");e("./util");o.prototype.process=function(e){if(!(e=(e=e||"").toString()))return"";var t=this.options,a=t.whiteList,o=t.onAttr,i=t.onIgnoreAttr;return r(e,function(e,t,r,s,c){var l=a[r],d=!1;!0===l?d=l:"function"==typeof l?d=l(s):l instanceof RegExp&&(d=l.test(s)),!0!==d&&(d=!1);var u,m={position:t,sourcePosition:e,source:c,isWhite:d};return d?n(u=o(r,s,m))?r+":"+s:u:n(u=i(r,s,m))?void 0:u})},t.exports=o},{"./default":7,"./parser":9,"./util":10}],7:[function(e,t,n){function a(){var e={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,
"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1};return e}function o(){}function i(){}n.whiteList=a(),n.getDefaultWhiteList=a,n.onAttr=o,n.onIgnoreAttr=i},{}],8:[function(e,t,n){function a(e,t){return new i(t).process(e)}var o=e("./default"),i=e("./css");for(var r in(n=t.exports=a).FilterCSS=i,o)n[r]=o[r];"undefined"!=typeof window&&(window.filterCSS=t.exports)},{"./css":6,"./default":7}],9:[function(e,t){function n(e,t){function n(){if(!i){var n=a.trim(e.slice(r,s)),o=n.indexOf(":");if(-1!==o){var l=a.trim(n.slice(0,o)),d=a.trim(n.slice(o+1));if(l){var u=t(r,c.length,l,d,n);u&&(c+=u+"; ")}}}r=s+1}";"!==(e=a.trimRight(e))[e.length-1]&&(e+=";");for(var o=e.length,i=!1,r=0,s=0,c="";s<o;s++){var l=e[s];if("/"===l&&"*"===e[s+1]){var d=e.indexOf("*/",s+2);if(-1===d)break;r=(s=d+1)+1,i=!1}else"("===l?i=!0:")"===l?i=!1:";"===l?i||n():"\n"===l&&n()}return a.trim(c)}var a=e("./util");t.exports=n},{"./util":10}],10:[function(e,t){t.exports={indexOf:function(e,t){var n,a;if(Array.prototype.indexOf)return e.indexOf(t);for(n=0,a=e.length;n<a;n++)if(e[n]===t)return n;return-1},forEach:function(e,t,n){var a,o;if(Array.prototype.forEach)return e.forEach(t,n);for(a=0,o=e.length;a<o;a++)t.call(n,e[a],a,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(e){return String.prototype.trimRight?e.trimRight():e.replace(/(\s*$)/g,"")}}},{}]},{},[2]),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Honeybadger=t()}(this,function(){"use strict";function e(e,t){function n(){this.constructor=e}if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");q(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function t(e){return e.split("\n").reduce(function(e,t){var s=n(t)||a(t)||o(t)||r(t)||i(t);return s&&e.push(s),e},[])}function n(e){var t=J.exec(e);if(!t)return null;var n=t[2]&&0===t[2].indexOf("native"),a=t[2]&&0===t[2].indexOf("eval"),o=K.exec(t[2]);return a&&null!=o&&(t[2]=o[1],t[3]=o[2],t[4]=o[3]),{file:n?null:t[2],methodName:t[1]||W,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}function a(e){var t=X.exec(e);return t?{file:t[2],methodName:t[1]||W,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}function o(e){var t=Y.exec(e);if(!t)return null;var n=t[3]&&t[3].indexOf(" > eval")>-1,a=G.exec(t[3]);return n&&null!=a&&(t[3]=a[1],t[4]=a[2],t[5]=null),{file:t[3],methodName:t[1]||W,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}function i(e){var t=Z.exec(e);return t?{file:t[3],methodName:t[1]||W,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}function r(e){var t=Q.exec(e);return t?{file:t[2],methodName:t[1]||W,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}function s(e,t){var n={};for(var a in e)n[a]=e[a];for(var a in t)n[a]=t[a];return n}function c(e,t){var n=s(e,t);return e.context&&t.context&&(n.context=s(e.context,t.context)),n}function l(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function d(e){return"function"!=typeof Object.isExtensible||Object.isExtensible(e)}function u(e,n){void 0===n&&(n=0);try{var a=t(e).map(function(e){return{file:e.file,method:e.methodName,number:e.lineNumber,column:e.column}});return a.splice(0,n),a}catch(o){return[]}}function m(e,t){for(var n=0,a=t.length;n<a;n++){if(!1===(0,t[n])(e))return!1}return!0}function f(e,t,n){void 0===n&&(n=undefined);for(var a=0,o=t.length;a<o;a++)t[a](n,e);return!0}function p(e){if("object"!=typeof e||null===e)return{};var t={};for(var n in e)t[n]=e[n];return t}function g(e,t){function n(e){if(!e||"object"!=typeof e)return!1;for(var t=0;t<i.length;t++){if(i[t]===e)return!0}return i.push(e),!1}function a(e){return!/function|symbol/.test(typeof e)&&(null!==e&&("object"!=typeof e||"undefined"!=typeof e.hasOwnProperty))}function o(e,i){if(void 0===i&&(i=0),i>=t)return"[DEPTH]";if(!a(e))return Object.prototype.toString.call(e);if(n(e))return"[RECURSION]";if(Array.isArray(e))return e.map(function(e){return o(e,i+1)});if("object"==typeof e){var r={};for(var s in e){var c=e[s];Object.prototype.hasOwnProperty.call(e,s)&&null!=s&&null!=c&&(r[s]=o(c,i+1))}return r}return e}void 0===t&&(t=8);var i=[];return o(e)}function h(e){var t=function(t){return function(){for(var n,a=[],o=0;o<arguments.length;o++)a[o]=arguments[o];("debug"!==t||e.config.debug)&&(a.unshift("[Honeybadger]"),(n=e.config.logger)[t].apply(n,a))}};return{log:t("log"),info:t("info"),debug:t("debug"),warn:t("warn"),error:t("error")}}function y(e){var t;if(e)if("[object Error]"===Object.prototype.toString.call(e)){var n=e;t=s(e,{name:n.name,message:n.message,stack:n.stack})}else if("object"==typeof e)t=p(e);else{t={message:String(e)}}else t={};return t}function v(e,t,n){if(e&&t&&n&&t in e){for(var a=e[t];a&&a.__hb_original;)a=a.__hb_original;try{e[t]=n(a),e[t].__hb_original=a}catch(o){}}}function b(e,t){return e.endpoint.trim().replace(/\/$/,"")+"/"+(t=t.trim().replace(/(^\/|\/$)/g,""))}function w(){try{throw new Error("")}catch(a){if(a.stack)return a.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>");try{n=n.caller}catch(a){break}}return t.join("\n")}function _(e,t){function n(e){var o,i;if(E("Object",e)||E("Array",e)){if(-1!==a.indexOf(e))return"[CIRCULAR DATA STRUCTURE]";a.push(e)}if(E("Object",e)){for(o in i={},e)k(o,t)?i[o]="[FILTERED]":i[o]=n(e[o]);return i}return E("Array",e)?e.map(function(e){return n(e)}):E("Function",e)?"[FUNC]":e}if(E("Object",e)){E("Array",t)||(t=[]);var a=[];return n(e)}}function k(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0;return!1}function E(e,t){var n=Object.prototype.toString.call(t).slice(8,-1);return t!==undefined&&null!==t&&n===e}function T(e,t){if(!t)return e;if("string"!=typeof e)return e;var n=e.split(/\?/,2)[1];if(!n)return e;var a=e;return n.split(/[&]\s?/).forEach(function(e){var n=e.split("=",2),o=n[0],i=n[1];k(o,t)&&(a=a.replace(o+"="+i,o+"=[FILTERED]"))}),a}function x(e,t){void 0===t&&(t="");var n={};return Object.keys(e).forEach(function(a){var o=t+a.replace(/\W/g,"_").toUpperCase();n[o]=e[a]}),n}function L(e){if(!e||!e.tagName)return"";var t=e.tagName.toLowerCase();if("html"===t)return"";e.id&&(t+="#"+e.id);var n=e.getAttribute("class");n&&n.split(/\s+/).forEach(function(e){t+="."+e}),["alt","name","title","type"].forEach(function(n){var a=e.getAttribute(n);a&&(t+="["+n+'="'+a+'"]')});var a=H(e);return a.length>1&&(t+=":nth-child("+(Array.prototype.indexOf.call(a,e)+1)+")"),t}function I(e){var t=L(e);if(e.parentNode&&e.parentNode.tagName){var n=I(e.parentNode);if(n.length>0)return n+" > "+t}return t}function S(e){var t=e.textContent||e.innerText||"";return t||"submit"!==e.type&&"button"!==e.type||(t=e.value),O(t.trim(),300)}function C(){if(!window.fetch)return!1;if(B(window.fetch))return!0;try{var e=document.createElement("iframe");e.style.display="none",document.head.appendChild(e);var t=e.contentWindow.fetch&&B(e.contentWindow.fetch);return document.head.removeChild(e),t}catch(n){console&&console.warn&&console.warn("failed to detect native fetch via iframe: "+n)}return!1}function B(e){return-1!==e.toString().indexOf("native")}function A(e){var t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)||{};return{protocol:t[2],host:t[4],pathname:t[5]}}function M(e){var t=A(e),n=A(document.URL);return t.host&&t.protocol?t.protocol===n.protocol&&t.host===n.host?t.pathname:t.protocol+"://"+t.host+t.pathname:t.pathname}function $(e){var t={};return e.split(/[;,]\s?/).forEach(function(e){var n=e.split("=",2),a=n[0],o=n[1];t[a]=o}),t}function N(e){if("object"!=typeof e)return undefined;var t=[];for(var n in e)t.push(n+"="+e[n]);return t.join(";")}function H(e){try{var t=e.parentNode.childNodes,n=[];return Array.prototype.forEach.call(t,function(t){t.tagName&&t.tagName===e.tagName&&n.push(t)}),n}catch(a){return[]}}function O(e,t){return e.length>t&&(e=e.substr(0,t)+"..."),e}function R(){se+=1,clearTimeout(U),U=setTimeout(function(){se=0})}function D(e){return void 0===e&&(e=window),{load:function(t){v(e,"onerror",function(e){var n=function(e,n,a,o,i){if(t.logger.debug("window.onerror callback invoked",arguments),se>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(se-=1);if(t.config.enableUncaught)if(0===a&&/Script error\.?/.test(e))t.logger.info("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments);else{var r=y(i);r.name||(r.name="window.onerror"),r.message||(r.message=e),r.stack||(r.stack=[r.message,"\n    at ? (",n||"unknown",":",a||0,":",o||0,")"].join("")),t.addBreadcrumb("window.onerror"!==r.name&&r.name?"window.onerror: "+r.name:"window.onerror",{category:"error",metadata:{name:r.name,message:r.message,stack:r.stack}}),t.notify(r)}};return function(t,a,o,i,r){return n(t,a,o,i,r),"function"==typeof e&&e.apply(window,arguments)}})}}}function P(e){return void 0===e&&(e=window),{load:function(t){t.config.enableUnhandledRejection&&v(e,"onunhandledrejection",function(e){function n(e){var n;if(t.logger.debug("window.onunhandledrejection callback invoked",arguments),t.config.enableUnhandledRejection){var a=e.reason;if(a instanceof Error){var o="unknown",i=0,r=a.message+"\n    at ? ("+o+":"+i+")",s=a.stack||r,c={name:a.name,message:"UnhandledPromiseRejectionWarning: "+a,stack:s};return t.addBreadcrumb("window.onunhandledrejection: "+c.name,{category:"error",metadata:c}),void t.notify(c)}var l="string"==typeof a?a:null!==(n=JSON.stringify(a))&&void 0!==n?n:"Unspecified reason";t.notify({name:"window.onunhandledrejection",message:"UnhandledPromiseRejectionWarning: "+l})}}return function(t){n(t),"function"==typeof e&&e.apply(this,arguments)}})}}}function z(e){return void 0===e&&(e=window),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function a(e){return Array.isArray(e)?e.map(function(e){try{return String(e)}catch(t){return"[unknown]"}}).join(" "):""}n("console")&&["debug","info","warn","error","log"].forEach(function(n){v(e.console,n,function(o){return function(){var i=Array.prototype.slice.call(arguments),r=a(i),s={category:"log",metadata:{level:n,arguments:g(i,3)}};t.addBreadcrumb(r,s),"function"==typeof o&&Function.prototype.apply.call(o,e.console,arguments)}})})}(),n("dom")&&e.addEventListener("click",function(e){var n,a,o;try{n=L(e.target),a=I(e.target),o=S(e.target)}catch(i){n="UI Click",a="[unknown]",o="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:a,text:o,event:e}})},!0),n("network")&&(v(XMLHttpRequest.prototype,"open",function(e){return function(){var t=this,n=arguments[1],a="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],o=a+" "+M(n);this.__hb_xhr={type:"xhr",method:a,url:n,message:o},"function"==typeof e&&e.apply(t,arguments)}}),v(XMLHttpRequest.prototype,"send",function(e){return function(){function n(){if(4===a.readyState){var e=void 0;a.__hb_xhr&&(a.__hb_xhr.status_code=a.status,e=a.__hb_xhr.message,delete a.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:a.__hb_xhr})}}var a=this;"onreadystatechange"in a&&"function"==typeof a.onreadystatechange?v(a,"onreadystatechange",function(e){return function(){n(),"function"==typeof e&&e.apply(this,arguments)}}):a.onreadystatechange=n,"function"==typeof e&&e.apply(a,arguments)}})),n("network")&&C()&&v(e,"fetch",function(n){return function(){var a,o=arguments[0],i="GET";"string"==typeof o?a=o:"Request"in e&&o instanceof Request?(a=o.url,o.method&&(i=o.method)):a=String(o),arguments[1]&&arguments[1].method&&(i=arguments[1].method),"string"==typeof i&&(i=i.toUpperCase());var r=i+" "+M(a),s={type:"fetch",method:i,url:a};return n.apply(this,arguments).then(function(e){return s.status_code=e.status,t.addBreadcrumb(r,{category:"request",metadata:s}),e})["catch"](function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:s}),e})}}),function(){function a(e,n){i=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function o(e){return function(){var t=arguments.length>2?arguments[2]:undefined;return t&&a(i,String(t)),e.apply(this,arguments)}}if(n("navigation")){var i=e.location.href;v(e,"onpopstate",function(t){return function(){if(a(i,e.location.href),t)return t.apply(this,arguments)}}),v(e.history,"pushState",o),v(e.history,"replaceState",o)}}()}}}function j(e){return void 0===e&&(e=window),{load:function(t){!function(){function n(e){return function(n){return function(a,o){if("function"==typeof a){var i=Array.prototype.slice.call(arguments,2);return a=t.__wrap(a,e),n(function(){a.apply(void 0,i)},o)}return n(a,o)}}}v(e,"setTimeout",n({component:"setTimeout"})),v(e,"setInterval",n({component:"setInterval"}))}()}}}function F(e){return void 0===e&&(e=window),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach(function(n){var a=e[n]&&e[n].prototype;a&&Object.prototype.hasOwnProperty.call(a,"addEventListener")&&(v(a,"addEventListener",function(e){var a={component:n+".prototype.addEventListener"};return function(n,o,i,r){try{o&&null!=o.handleEvent&&(o.handleEvent=t.__wrap(o.handleEvent,a))}catch(s){t.logger.error(s)}return e.call(this,n,t.__wrap(o,a),i,r)}}),v(a,"removeEventListener",function(e){return function(n,a,o,i){return e.call(this,n,a,o,i),e.call(this,n,t.__wrap(a),o,i)}}))})}}}var U,q=function(e,t){return(q=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},V=function(){return(V=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},W="<unknown>",J=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,K=/\((\S*)(?::(\d+))(?::(\d+))\)/,X=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,Y=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,G=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,Z=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i,Q=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i,ee={name:"honeybadger-js",url:"https://github.com/honeybadger-io/honeybadger-js",version:"3.2.7"},te=/,/,ne=/[^\w]/g,ae="",oe=/\S/,ie=function(){function e(e){void 0===e&&(e={}),this.__pluginsExecuted=!1,this.__context={},this.__breadcrumbs=[],this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.config=V({apiKey:null,endpoint:"https://api.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],disabled:!1,debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]},e),this.logger=h(this)}return e.prototype.factory=function(){throw new Error("Must implement __factory in subclass")},e.prototype.getVersion=function(){return ee.version},e.prototype.configure=function(e){var t=this;for(var n in void 0===e&&(e={}),e)this.config[n]=e[n];return this.__pluginsExecuted||(this.__pluginsExecuted=!0,this.config.__plugins.forEach(function(e){return e.load(t)})),this},e.prototype.beforeNotify=function(e){return this.__beforeNotifyHandlers.push(e),this},e.prototype.afterNotify=function(e){return this.__afterNotifyHandlers.push(e),this},e.prototype.setContext=function(e){return"object"==typeof e&&(this.__context=s(this.__context,e)),this},e.prototype.resetContext=function(e){return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."),this.__context="object"==typeof e&&null!==e?s({},e):{},this},e.prototype.clear=function(){return this.__context={},this.__breadcrumbs=[],this},e.prototype.notify=function(e,t,n){if(void 0===t&&(t=undefined),void 0===n&&(n=undefined),this.config.disabled)return this.logger.warn("Deprecation warning: instead of `disabled: true`, use `reportData: false` to explicitly disable Honeybadger reporting. (Dropping notice: honeybadger.js is disabled)"),!1;if(!this.__reportData())return this.logger.debug("Dropping notice: honeybadger.js is in development mode"),!1;if(!this.config.apiKey)return this.logger.warn("Unable to send error report: no API key has been configured"),!1;(e=y(e),t&&"object"!=typeof t)&&(t={name:String(t)});if(t&&(e=c(e,t)),"object"==typeof n&&null!==n&&(e=c(e,n)),l(e))return!1;var a=this.__constructTags(e.tags),o=this.__constructTags(this.__context.tags),i=this.__constructTags(this.config.tags),r=a.concat(o).concat(i),d=r.filter(function(e,t){return r.indexOf(e)===t}),f=0;return"string"==typeof(e=s(e,{name:e.name||"Error",context:s(this.__context,e.context),projectRoot:e.projectRoot||this.config.projectRoot,environment:e.environment||this.config.environment,component:e.component||this.config.component,action:e.action||this.config.action,revision:e.revision||this.config.revision,tags:d})).stack&&e.stack.trim()||(e.stack=w(),f=2),e.backtrace=u(e.stack,f),!!m(e,this.__beforeNotifyHandlers)&&(this.addBreadcrumb("Honeybadger Notice",{category:"notice",metadata:{message:e.message,name:e.name,stack:e.stack}}),e.__breadcrumbs=this.config.breadcrumbsEnabled?this.__breadcrumbs.slice():[],this.__send(e))},e.prototype.addBreadcrumb=function(e,t){if(this.config.breadcrumbsEnabled){var n=p((t=t||{}).metadata),a=t.category||"custom",o=(new Date).toISOString();this.__breadcrumbs.push({category:a,message:e,metadata:n,timestamp:o});var i=this.config.maxBreadcrumbs;return this.__breadcrumbs.length>i&&(this.__breadcrumbs=this.__breadcrumbs.slice(this.__breadcrumbs.length-i)),this}},e.prototype.__reportData=function(){return null!==this.config.reportData?this.config.reportData:!(this.config.environment&&this.config.developmentEnvironments.includes(this.config.environment))},e.prototype.__send=function(){throw new Error("Must implement send in subclass")},e.prototype.__buildPayload=function(e){var t=_(e.headers,this.config.filters)||{},n=_(V(V({},e.cgiData),x(t,"HTTP_")),this.config.filters);return{notifier:ee,breadcrumbs:{enabled:!!this.config.breadcrumbsEnabled,trail:e.__breadcrumbs||[]},error:{"class":e.name,message:e.message,backtrace:e.backtrace,fingerprint:e.fingerprint,tags:e.tags},request:{url:T(e.url,this.config.filters),component:e.component,action:e.action,context:e.context,cgi_data:n,params:_(e.params,this.config.filters)||{},session:_(e.session,this.config.filters)||{}},server:{project_root:e.projectRoot,environment_name:e.environment,revision:e.revision,hostname:this.config.hostname,time:(new Date).toUTCString()},details:e.details||{}}},e.prototype.__constructTags=function(e){return e?e.toString().split(te).map(function(e){return e.replace(ne,ae)}).filter(function(e){return oe.test(e)}):[]},e}(),re=function(){var e=!0;if(window.atob||(e=!1),window.ErrorEvent)try{0===new window.ErrorEvent("").colno&&(e=!1)}catch(t){}return e}(),se=0;return new(function(t){function n(e){void 0===e&&(e={});var n=t.call(this,V({async:!0,maxErrors:null,projectRoot:window.location.protocol+"//"+window.location.host},e))||this;return n.__errorsSent=0,n.__lastWrapErr=undefined,n.__beforeNotifyHandlers=[function(e){return n.__exceedsMaxErrors()?(n.logger.debug("Dropping notice: max errors exceeded",e),!1):(e.url||(e.url=document.URL),!0)}],n}return e(n,t),n.prototype.configure=function(e){return void 0===e&&(e={}),t.prototype.configure.call(this,e)},n.prototype.resetMaxErrors=function(){return this.__errorsSent=0},n.prototype.factory=function(e){return new n(e)},n.prototype.__buildPayload=function(e){var n,a={HTTP_USER_AGENT:undefined,HTTP_REFERER:undefined,HTTP_COOKIE:undefined};a.HTTP_USER_AGENT=navigator.userAgent,document.referrer.match(/\S/)&&(a.HTTP_REFERER=document.referrer),(n="string"==typeof e.cookies?$(e.cookies):e.cookies)&&(a.HTTP_COOKIE=N(_(n,this.config.filters)));var o=t.prototype.__buildPayload.call(this,e);return o.request.cgi_data=s(a,o.request.cgi_data),o},n.prototype.__send=function(e){var t=this;this.__incrementErrorsCount();var n=this.__buildPayload(e),a=Array.prototype.slice.call(this.__afterNotifyHandlers);e.afterNotify&&a.unshift(e.afterNotify);try{var o=new XMLHttpRequest;o.open("POST",b(this.config,"/v1/notices/js"),this.config.async),o.setRequestHeader("X-API-Key",this.config.apiKey),o.setRequestHeader("Content-Type","application/json"),o.setRequestHeader("Accept","text/json, application/json"),o.send(JSON.stringify(g(n,this.config.maxObjectDepth))),o.onload=function(){if(201!==o.status)return f(e,a,new Error("Bad HTTP response: "+o.status)),void t.logger.debug("Unable to send error report: "+o.status+": "+o.statusText,o,e);f(s(e,{id:JSON.parse(o.response).id}),a),t.logger.debug("Error report sent",e)}}catch(i){f(e,a,i),this.logger.error("Unable to send error report: error while initializing request",i,e)}return!0},n.prototype.__wrap=function(e,t){void 0===t&&(t={});var n=e;t||(t={});try{if("function"!=typeof n)return n;if(!d(n))return n;if(!n.___hb){var a=this;n.___hb=function(){var e=a.config.enableUncaught;if(!t["catch"]&&!re&&e)return n.apply(this,arguments);try{return n.apply(this,arguments)}catch(o){if(a.__lastWrapErr===o)throw o;throw a.__lastWrapErr=o,R(),a.addBreadcrumb(t.component?t.component+": "+o.name:o.name,{category:"error",metadata:{message:o.message,name:o.name,stack:o.stack}}),a.notify(o),o}}}return n.___hb.___hb=n.___hb,n.___hb}catch(o){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(ie))({__plugins:[D(),P(),j(),F(),z()]})}),function(e,t){"function"==typeof define&&define.amd?define("i18n",function(){return t(e)}):"object"==typeof module&&module.exports?module.exports=t(e):e.I18n=t(e)}(this,function(e){"use strict";var t=e&&e.I18n||{},n=Array.prototype.slice,a=function(e){return("0"+e.toString()).substr(-2)},o=function(e,t){return f("round",e,-t).toFixed(t)},i=function(e){var t=typeof e;return"function"===t||"object"===t},r=function(e){return"function"===typeof e},s=function(e){return null!=e},c=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},l=function(e){return"string"==typeof e||"[object String]"===Object.prototype.toString.call(e)},d=function(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)},u=function(e){return!0===e||!1===e},m=function(e){return null===e},f=function(e,t,n){return void 0===n||0==+n?Math[e](t):(t=+t,n=+n,isNaN(t)||"number"!=typeof n||n%1!=0?NaN:(t=t.toString().split("e"),+((t=(t=Math[e](+(t[0]+"e"+(t[1]?+t[1]-n:-n)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]+n:n))))},p=function(e,t){return r(e)?e(t):e},g=function(e,t){var n,a;for(n in t)t.hasOwnProperty(n)&&(a=t[n],l(a)||d(a)||u(a)||c(a)||m(a)?e[n]=a:(null==e[n]&&(e[n]={}),g(e[n],a)));return e},h={day_names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbr_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],month_names:[null,"January","February","March","April","May","June","July","August","September","October","November","December"],abbr_month_names:[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridian:["AM","PM"]},y={precision:3,separator:".",delimiter:",",strip_insignificant_zeros:!1},v={unit:"$",precision:2,format:"%u%n",sign_first:!0,delimiter:",",separator:"."},b={unit:"%",precision:3,format:"%n%u",separator:".",delimiter:""},w=[null,"kb","mb","gb","tb"],_={defaultLocale:"en",locale:"en",defaultSeparator:".",placeholder:/(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,fallbacks:!1,translations:{},missingBehaviour:"message",missingTranslationPrefix:""};return t.reset=function(){var e;for(e in _)this[e]=_[e]},t.initializeOptions=function(){var e;for(e in _)s(this[e])||(this[e]=_[e])},t.initializeOptions(),t.locales={},t.locales.get=function(e){var n=this[e]||this[t.locale]||this["default"];return r(n)&&(n=n(e)),!1===c(n)&&(n=[n]),n},t.locales["default"]=function(e){var n=[],a=[];return e&&n.push(e),!e&&t.locale&&n.push(t.locale),t.fallbacks&&t.defaultLocale&&n.push(t.defaultLocale),n.forEach(function(e){var n=e.split("-"),o=null,i=null;3===n.length?(o=[n[0],n[1]].join("-"),i=n[0]):2===n.length&&(o=n[0]),-1===a.indexOf(e)&&a.push(e),t.fallbacks&&[o,i].forEach(function(t){null!=t&&t!==e&&-1===a.indexOf(t)&&a.push(t)})}),n.length||n.push("en"),a},t.pluralization={},t.pluralization.get=function(e){return this[e]||this[t.locale]||this["default"]},t.pluralization["default"]=function(e){switch(e){case 0:return["zero","other"];case 1:return["one"];default:return["other"]}},t.currentLocale=function(){return this.locale||this.defaultLocale},t.isSet=s,t.lookup=function(e,t){t=t||{};var n,a,o,i,r=this.locales.get(t.locale).slice();for(o=this.getFullScope(e,t);r.length;)if(n=r.shift(),a=o.split(t.separator||this.defaultSeparator),i=this.translations[n]){for(;a.length&&(i=i[a.shift()])!==undefined&&null!==i;);if(i!==undefined&&null!==i)return i}if(s(t.defaultValue))return p(t.defaultValue,e)},t.pluralizationLookupWithoutFallback=function(e,t,n){var a,o,r=this.pluralization.get(t)(e);if(i(n))for(;r.length;)if(a=r.shift(),s(n[a])){o=n[a];break}return o},t.pluralizationLookup=function(e,t,n){n=n||{};var a,o,r,c,l=this.locales.get(n.locale).slice();for(t=this.getFullScope(t,n);l.length;)if(a=l.shift(),o=t.split(n.separator||this.defaultSeparator),r=this.translations[a]){for(;o.length&&(r=r[o.shift()],i(r));)0===o.length&&(c=this.pluralizationLookupWithoutFallback(e,a,r));if(null!=c)break}
return null==c&&s(n.defaultValue)&&(c=i(n.defaultValue)?this.pluralizationLookupWithoutFallback(e,n.locale,n.defaultValue):n.defaultValue,r=n.defaultValue),{message:c,translations:r}},t.meridian=function(){var e=this.lookup("time"),t=this.lookup("date");return e&&e.am&&e.pm?[e.am,e.pm]:t&&t.meridian?t.meridian:h.meridian},t.prepareOptions=function(){for(var e,t=n.call(arguments),a={};t.length;)if("object"==typeof(e=t.shift()))for(var o in e)e.hasOwnProperty(o)&&(s(a[o])||(a[o]=e[o]));return a},t.createTranslationOptions=function(e,t){var n=[{scope:e}];return s(t.defaults)&&(n=n.concat(t.defaults)),s(t.defaultValue)&&n.push({message:t.defaultValue}),n},t.translate=function(e,t){t=t||{};var n,a=this.createTranslationOptions(e,t),o=e,r=this.prepareOptions(t);return delete r.defaultValue,a.some(function(t){if(s(t.scope)?(o=t.scope,n=this.lookup(o,r)):s(t.message)&&(n=p(t.message,e)),n!==undefined&&null!==n)return!0},this)?("string"==typeof n?n=this.interpolate(n,t):c(n)?n=n.map(function(e){return"string"==typeof e?this.interpolate(e,t):e},this):i(n)&&s(t.count)&&(n=this.pluralize(t.count,o,t)),n):this.missingTranslation(e,t)},t.interpolate=function(e,t){if(null==e)return e;t=t||{};var n,a,o,i,r=e.match(this.placeholder);if(!r)return e;for(;r.length;)o=(n=r.shift()).replace(this.placeholder,"$1"),a=s(t[o])?t[o].toString().replace(/\$/gm,"_#$#_"):o in t?this.nullPlaceholder(n,e,t):this.missingPlaceholder(n,e,t),i=new RegExp(n.replace(/{/gm,"\\{").replace(/}/gm,"\\}")),e=e.replace(i,a);return e.replace(/_#\$#_/g,"$")},t.pluralize=function(e,t,n){var a,o;return n=this.prepareOptions({count:String(e)},n),"undefined"==typeof(o=this.pluralizationLookup(e,t,n)).translations||null==o.translations?this.missingTranslation(t,n):"undefined"!=typeof o.message&&null!=o.message?this.interpolate(o.message,n):(a=this.pluralization.get(n.locale),this.missingTranslation(t+"."+a(e)[0],n))},t.missingTranslation=function(e,t){if("guess"===this.missingBehaviour){var n=e.split(".").slice(-1)[0];return(this.missingTranslationPrefix.length>0?this.missingTranslationPrefix:"")+n.replace(/_/g," ").replace(/([a-z])([A-Z])/g,function(e,t,n){return t+" "+n.toLowerCase()})}return'[missing "'+[null!=t&&null!=t.locale?t.locale:this.currentLocale(),this.getFullScope(e,t)].join(t.separator||this.defaultSeparator)+'" translation]'},t.missingPlaceholder=function(e){return"[missing "+e+" value]"},t.nullPlaceholder=function(){return t.missingPlaceholder.apply(t,arguments)},t.toNumber=function(e,t){t=this.prepareOptions(t,this.lookup("number.format"),y);var n,a,i=e<0,r=o(Math.abs(e),t.precision).toString().split("."),s=[],c=t.format||"%n",l=i?"-":"";for(e=r[0],n=r[1];e.length>0;)s.unshift(e.substr(Math.max(0,e.length-3),3)),e=e.substr(0,e.length-3);return a=s.join(t.delimiter),t.strip_insignificant_zeros&&n&&(n=n.replace(/0+$/,"")),t.precision>0&&n&&(a+=t.separator+n),a=(c=t.sign_first?"%s"+c:c.replace("%n","%s%n")).replace("%u",t.unit).replace("%n",a).replace("%s",l)},t.toCurrency=function(e,t){return t=this.prepareOptions(t,this.lookup("number.currency.format",t),this.lookup("number.format",t),v),this.toNumber(e,t)},t.localize=function(e,t,n){switch(n||(n={}),e){case"currency":return this.toCurrency(t,n);case"number":return e=this.lookup("number.format",n),this.toNumber(t,e);case"percentage":return this.toPercentage(t,n);default:var a;return a=e.match(/^(date|time)/)?this.toTime(e,t,n):t.toString(),this.interpolate(a,n)}},t.parseDate=function(e){var t,n,a;if(null==e)return e;if("object"==typeof e)return e;if(t=e.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2})([\.,]\d{1,3})?)?(Z|\+00:?00)?/)){for(var o=1;o<=6;o++)t[o]=parseInt(t[o],10)||0;t[2]-=1,a=t[7]?1e3*("0"+t[7]):null,n=t[8]?new Date(Date.UTC(t[1],t[2],t[3],t[4],t[5],t[6],a)):new Date(t[1],t[2],t[3],t[4],t[5],t[6],a)}else"number"==typeof e?(n=new Date).setTime(e):e.match(/([A-Z][a-z]{2}) ([A-Z][a-z]{2}) (\d+) (\d+:\d+:\d+) ([+-]\d+) (\d+)/)?(n=new Date).setTime(Date.parse([RegExp.$1,RegExp.$2,RegExp.$3,RegExp.$6,RegExp.$4,RegExp.$5].join(" "))):(e.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/),(n=new Date).setTime(Date.parse(e)));return n},t.strftime=function(e,n,o){o=this.lookup("date",o);var i=t.meridian();if(o||(o={}),o=this.prepareOptions(o,h),isNaN(e.getTime()))throw new Error("I18n.strftime() requires a valid date object, but received an invalid date.");var r=e.getDay(),s=e.getDate(),c=e.getFullYear(),l=e.getMonth()+1,d=e.getHours(),u=d,m=d>11?1:0,f=e.getSeconds(),p=e.getMinutes(),g=e.getTimezoneOffset(),y=Math.floor(Math.abs(g/60)),v=Math.abs(g)-60*y,b=(g>0?"-":"+")+(y.toString().length<2?"0"+y:y)+(v.toString().length<2?"0"+v:v);return u>12?u-=12:0===u&&(u=12),n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace("%a",o.abbr_day_names[r])).replace("%A",o.day_names[r])).replace("%b",o.abbr_month_names[l])).replace("%B",o.month_names[l])).replace("%d",a(s))).replace("%e",s)).replace("%-d",s)).replace("%H",a(d))).replace("%-H",d)).replace("%k",d)).replace("%I",a(u))).replace("%-I",u)).replace("%l",u)).replace("%m",a(l))).replace("%-m",l)).replace("%M",a(p))).replace("%-M",p)).replace("%p",i[m])).replace("%P",i[m].toLowerCase())).replace("%S",a(f))).replace("%-S",f)).replace("%w",r)).replace("%y",a(c))).replace("%-y",a(c).replace(/^0+/,""))).replace("%Y",c)).replace("%z",b)).replace("%Z",b)},t.toTime=function(e,t,n){var a=this.parseDate(t),o=this.lookup(e,n);if(null==a)return a;var i=a.toString();return i.match(/invalid/i)?i:o?this.strftime(a,o,n):i},t.toPercentage=function(e,t){return t=this.prepareOptions(t,this.lookup("number.percentage.format",t),this.lookup("number.format",t),b),this.toNumber(e,t)},t.toHumanSize=function(e,t){for(var n,a,o,i=1024,r=e,s=0;r>=i&&s<4;)r/=i,s+=1;return 0===s?(o=this.getFullScope("number.human.storage_units.units.byte",t),n=this.t(o,{count:r}),a=0):(o=this.getFullScope("number.human.storage_units.units."+w[s],t),n=this.t(o),a=r-Math.floor(r)==0?0:1),t=this.prepareOptions(t,{unit:n,precision:a,format:"%n%u",delimiter:""}),this.toNumber(r,t)},t.getFullScope=function(e,t){return t=t||{},c(e)&&(e=e.join(t.separator||this.defaultSeparator)),t.scope&&(e=[t.scope,e].join(t.separator||this.defaultSeparator)),e},t.extend=function(e,t){return void 0===e&&void 0===t?{}:g(e,t)},t.t=t.translate.bind(t),t.l=t.localize.bind(t),t.p=t.pluralize.bind(t),t}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).ahoy=t()}(this,function(){"use strict";function e(){return C.urlPrefix+C.visitsUrl}function t(){return C.urlPrefix+C.eventsUrl}function n(e){return 0===Object.keys(e).length}function a(){return(C.useBeacon||C.trackNow)&&n(C.headers)&&R&&"undefined"!=typeof window.navigator.sendBeacon&&!C.withCredentials}function o(e){var t=new FormData;for(var n in e)e.hasOwnProperty(n)&&t.append(n,e[n]);return t}function i(e,t,n){S.set(e,t,n,C.cookieDomain||C.domain)}function r(e){return S.get(e)}function s(e){S.set(e,"",-1)}function c(e){r("ahoy_debug")&&window.console.log(e)}function l(){for(var e;e=O.shift();)e();H=!0}function d(e,t){var n=e.matches||e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;return n?n.apply(e,[t])?e:e.parentElement?d(e.parentElement,t):null:(c("Unable to match"),null)}function u(e,t,n){document.addEventListener(e,function(e){var a=d(e.target,t);a&&n.call(a,e)})}function m(e){"interactive"===document.readyState||"complete"===document.readyState?setTimeout(e,0):document.addEventListener("DOMContentLoaded",e)}function f(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}function p(){C.cookies&&R&&i("ahoy_events",JSON.stringify(D),1)}function g(){var e=document.querySelector("meta[name=csrf-token]");return e&&e.content}function h(){var e=document.querySelector("meta[name=csrf-param]");return e&&e.content}function y(e){var t=g();t&&e.setRequestHeader("X-CSRF-Token",t)}function v(e,t,n){if(R)if(N&&N.ajax)N.ajax({type:"POST",url:e,data:JSON.stringify(t),contentType:"application/json; charset=utf-8",dataType:"json",beforeSend:y,success:n,headers:C.headers,xhrFields:{withCredentials:C.withCredentials}});else{var a=new XMLHttpRequest;for(var o in a.open("POST",e,!0),a.withCredentials=C.withCredentials,a.setRequestHeader("Content-Type","application/json"),C.headers)C.headers.hasOwnProperty(o)&&a.setRequestHeader(o,C.headers[o]);a.onload=function(){200===a.status&&n()},y(a),a.send(JSON.stringify(t))}}function b(e){var t={events:[e]};return C.cookies&&(t.visit_token=e.visit_token,t.visitor_token=e.visitor_token),delete e.visit_token,delete e.visitor_token,t}function w(e){B.ready(function(){v(t(),b(e),function(){for(var t=0;t<D.length;t++)if(D[t].id==e.id){D.splice(t,1);break}p()})})}function _(e){B.ready(function(){var n=b(e),a=h(),i=g();a&&i&&(n[a]=i),n.events_json=JSON.stringify(n.events),delete n.events,window.navigator.sendBeacon(t(),o(n))})}function k(){return C.page||window.location.pathname}function E(e){return e&&e.length>0?e:null}function T(e){for(var t in e)e.hasOwnProperty(t)&&null===e[t]&&delete e[t];return e}function x(){return T({tag:this.tagName.toLowerCase(),id:E(this.id),"class":E(this.className),page:k(),section:L(this)})}function L(e){for(;e&&e!==document;e=e.parentNode)if(e.hasAttribute("data-section"))return e.getAttribute("data-section");return null}function I(){if(H=!1,A=B.getVisitId(),M=B.getVisitorId(),$=r("ahoy_track"),!1===C.cookies||!1===C.trackVisits)c("Visit tracking disabled"),l();else if(A&&M&&!$)c("Active visit"),l();else if(A||i("ahoy_visit",A=f(),C.visitDuration),r("ahoy_visit")){c("Visit started"),M||i("ahoy_visitor",M=f(),C.visitorDuration);var t={visit_token:A,visitor_token:M,platform:C.platform,landing_page:window.location.href,screen_width:window.screen.width,screen_height:window.screen.height,js:!0};for(var n in document.referrer.length>0&&(t.referrer=document.referrer),C.visitParams)C.visitParams.hasOwnProperty(n)&&(t[n]=C.visitParams[n]);c(t),v(e(),t,function(){s("ahoy_track"),l()})}else c("Cookies disabled"),l()}var S={set:function(e,t,n,a){var o="",i="";if(n){var r=new Date;r.setTime(r.getTime()+60*n*1e3),o="; expires="+r.toGMTString()}a&&(i="; domain="+a),document.cookie=e+"="+escape(t)+o+i+"; path=/; samesite=lax"},get:function(e){var t,n,a=e+"=",o=document.cookie.split(";");for(t=0;t<o.length;t++){for(n=o[t];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(a))return unescape(n.substring(a.length,n.length))}return null}},C={urlPrefix:"",visitsUrl:"/ahoy/visits",eventsUrl:"/ahoy/events",page:null,platform:"Web",useBeacon:!0,startOnReady:!0,trackVisits:!0,cookies:!0,cookieDomain:null,headers:{},visitParams:{},withCredentials:!1,visitDuration:240,visitorDuration:1051200},B=window.ahoy||window.Ahoy||{};B.configure=function(e){for(var t in e)e.hasOwnProperty(t)&&(C[t]=e[t])},B.configure(B);var A,M,$,N=window.jQuery||window.Zepto||window.$,H=!1,O=[],R="undefined"!=typeof JSON&&"undefined"!=typeof JSON.stringify,D=[];B.ready=function(e){H?e():O.push(e)},B.getVisitId=B.getVisitToken=function(){return r("ahoy_visit")},B.getVisitorId=B.getVisitorToken=function(){return r("ahoy_visitor")},B.reset=function(){return s("ahoy_visit"),s("ahoy_visitor"),s("ahoy_events"),s("ahoy_track"),!0},B.debug=function(e){return!1===e?s("ahoy_debug"):i("ahoy_debug","t",525600),!0},B.track=function(e,t){var n={name:e,properties:t||{},time:(new Date).getTime()/1e3,id:f(),js:!0};return B.ready(function(){C.cookies&&!B.getVisitId()&&I(),B.ready(function(){c(n),n.visit_token=B.getVisitId(),n.visitor_token=B.getVisitorId(),a()?_(n):(D.push(n),p(),setTimeout(function(){w(n)},1e3))})}),!0},B.trackView=function(e){var t={url:window.location.href,title:document.title,page:k()};if(e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);B.track("$view",t)},B.trackClicks=function(e){if(e===undefined)throw new Error("Missing selector");u("click",e,function(e){var t=x.call(this,e);t.text="input"==t.tag?this.value:(this.textContent||this.innerText||this.innerHTML).replace(/[\s\r\n]+/g," ").trim(),t.href=this.href,B.track("$click",t)})},B.trackSubmits=function(e){if(e===undefined)throw new Error("Missing selector");u("submit",e,function(e){var t=x.call(this,e);B.track("$submit",t)})},B.trackChanges=function(e){if(c("trackChanges is deprecated and will be removed in 0.5.0"),e===undefined)throw new Error("Missing selector");u("change",e,function(e){var t=x.call(this,e);B.track("$change",t)})};try{D=JSON.parse(r("ahoy_events")||"[]")}catch(z){}for(var P=0;P<D.length;P++)w(D[P]);return B.start=function(){I(),B.start=function(){}},m(function(){C.startOnReady&&B.start()}),B}),I18n.defaultLocale="en",I18n.locale=document.body.dataset.locale,I18n.translations=JSON.parse(document.getElementById("i18n-translations").dataset.translations);var instantClick,InstantClick=instantClick=function(e,t,n){function a(e){var t=e.indexOf("#");return t<0?e:e.substr(0,t)}function o(e){for(;e&&"A"!=e.nodeName;)e=e.parentNode;return e}function i(e){do{if(!e.hasAttribute)break;if(e.hasAttribute("data-instant"))return!1;if(e.hasAttribute("data-no-instant"))return!0}while(e=e.parentNode);return!1}function r(e){var n=t.protocol+"//"+t.host;return!(e.target||e.hasAttribute("download")||0!=e.href.indexOf(n+"/")||e.href.indexOf("#")>-1&&a(e.href)==S||i(e))}function s(e,t,n,a){for(var o=!1,i=0;i<q[e].length;i++)if("receive"==e){var r=q[e][i](t,n,a);r&&("body"in r&&(n=r.body),"title"in r&&(a=r.title),o=r)}else q[e][i](t,n,a);return o}function c(t,n,o,i,r){var c=e.getElementById("page-content"),l=e.getElementById("member-menu-button");if(l&&l.classList.remove("showing"),e.body.replaceChild(n,c),e.getElementById("navigation-progress").classList.remove("showing"),o){const n=e.getElementById("route-change-target");n&&n.focus(),e.getElementById("page-route-change").textContent=t,history.pushState(null,null,o.replace("?samepage=true","").replace("&samepage=true",""));var d=o.indexOf("#"),u=d>-1&&(e.getElementById(o.substr(d+1))||e.querySelector(`[name=${o.substr(d+1)}].anchor`)),m=0,f=o.indexOf("samepage=true")>-1;if(u)for(;u.offsetParent;)m+=u.offsetTop,u=u.offsetParent;f||scrollTo(0,m),S=a(o)}else scrollTo(0,i);H&&e.title==t?e.title=t+String.fromCharCode(160):e.title=t,w(),r?s("restore"):s("change",!1)}function l(){j=!1,F=!1}function d(e){return e.replace(/<noscript[\s\S]+?<\/noscript>/gi,"")}function u(e){if(!(A>+new Date-500)){var t=o(e.target);t&&r(t)&&_(t.href)}}function m(e){if(!(A>+new Date-500)){var t=o(e.target);t&&r(t)&&(t.addEventListener("mouseout",h),N?(C=t.href,B=setTimeout(_,N)):_(t.href),getImageForLink(t))}}function f(e){A=+new Date;var t=o(e.target);t&&r(t)&&($?t.removeEventListener("mousedown",u):t.removeEventListener("mouseover",m),_(t.href),getImageForLink(t))}function p(e){var t=o(e.target);t&&r(t)&&(N?(C=t.href,B=setTimeout(_,N)):_(t.href),getImageForLink(t))}function g(e){try{var t=o(e.target);if(!t||!r(t))return;if(e.which>1||e.metaKey||e.ctrlKey)return;T(t.href),e.preventDefault()}catch(n){console.log(n)}}function h(){if(B)return clearTimeout(B),void(B=!1);j&&!F&&(M.abort(),l())}function y(){v(M,R)}function v(t,n){if(!(t.readyState<4)&&0!=t.status){if(z.ready=+new Date-z.start,e.getElementById("page-content")&&200===t.status&&t.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)){var o=e.implementation.createHTMLDocument("");o.documentElement.innerHTML=d(t.responseText);var i=o.title,r=o.getElementById("page-content"),c=s("receive",n,r,i);c&&("body"in c&&(r=c.body),"title"in c&&(i=c.title)),P[n]={body:r,title:i};a(n);for(var l,u,m=o.head.children,f=0,p=0;p<m.length;p++)if((l=m[p]).hasAttribute("data-instant-track")){u=l.getAttribute("href")||l.getAttribute("src")||l.innerHTML;for(var g=0;g<U.length;g++)U[g]==u&&f++}f!=U.length&&(D=!0)}else D=!0;F&&R===n&&(F=!1,T(R))}}function b(){var n=a(t.href);n!=S&&(n in O?(O[S]={body:e.getElementById("page-content"),title:e.title,scrollY:pageYOffset},S=n,c(O[n].title,O[n].body,!1,O[n].scrollY,!0)):t.href=t.href)}function w(t){if(e.body&&(e.body.addEventListener("touchstart",f,!0),e.body.addEventListener("focus",p,!0),$?e.body.addEventListener("mousedown",u,!0):e.body.addEventListener("mouseover",m,!0),e.body.addEventListener("click",g,!0)),!t){var n,a,o,i,r,s=e.body.getElementsByTagName("script"),c=[];for(r=0;r<s.length;r++)c.push(s[r]);for(r=0;r<c.length;r++)if((n=c[r])&&!n.hasAttribute("data-no-instant")){a=e.createElement("script");for(var l=0;l<n.attributes.length;l++)a.setAttribute(n.attributes[l].name,n.attributes[l].value);a.textContent=n.textContent,o=n.parentNode,i=n.nextSibling,o.removeChild(n),o.insertBefore(a,i)}}}function _(e,t){if(!(!$&&"display"in z&&+new Date-(z.start+z.display)<100)&&(B&&(clearTimeout(B),B=!1),e||(e=C),!j||e!=R&&!F)){if(j=!0,F=!1,D=!1,z={start:+new Date},-1==e.indexOf("?"))var n=e+"?i=i";else n=e+"&i=i";k(),s("fetch"),P[e]||("force"===t?E(e,function(){v(this,e)}):(R=e,M.open("GET",n),M.send()))}}function k(e){(Object.keys(P).length>13||"force"==e)&&(P={})}function E(e,t){var n=new XMLHttpRequest;if(-1==e.indexOf("?"))var a=e+"?i=i";else a=e+"&i=i";n.open("GET",a,!0),n.onreadystatechange=function(){4==n.readyState&&"function"==typeof t&&t.apply(n)},n.send()}function T(n){if(R=n,P[n])var a=P[n].body,o=P[n].title;else e.getElementById("navigation-progress").classList.add("showing");if("display"in z||(z.display=+new Date-z.start),B||!j)return B&&R&&R!=n?void(t.href=n):(_(n),s("wait"),void(F=!0));if(F)t.href=n;else if(D)t.href=R;else{if(!a)return s("wait"),void(F=!0);O[S]={body:e.getElementById("page-content"),title:e.title,scrollY:pageYOffset},l(),c(o,a,R)}}function x(n){if(!S)if(V){"mousedown"==n?$=!0:"number"==typeof n&&(N=n),S=a(t.href),O[S]={body:e.getElementById("page-content"),title:e.title,scrollY:pageYOffset};for(var o,i,r=e.head.children,c=0;c<r.length;c++)(o=r[c]).hasAttribute("data-instant-track")&&(i=o.getAttribute("href")||o.getAttribute("src")||o.innerHTML,U.push(i));(M=new XMLHttpRequest).addEventListener("readystatechange",y),w(!0),s("change",!0),addEventListener("popstate",b),I()}else s("change",!0)}function L(e,t){q[e].push(t)}function I(){if("ontouchstart"in e.documentElement){var t=e.createElement("script");t.src="https://dev.to/assets/lib/pulltorefresh-9b56f74a421b6273bdafaa34b17521df12711be7191050b1193dfd958a99a81a.js",e.head.appendChild(t);var n=setInterval(function(){if("undefined"!=typeof PullToRefresh){PullToRefresh.init({mainElement:"body",passive:!0,onRefresh:function(){window.location.reload()}});clearInterval(n)}},1)}}var S,C,B,A,M,$,N,H=n.indexOf(" CriOS/")>-1,O={},R=!1,D=!1,P={},z={},j=!1,F=!1,U=[],q={fetch:[],receive:[],wait:[],change:[],restore:[]},V="pushState"in history&&(!n.match("Android")||n.match("Chrome/")||n.match("Firefox/"))&&"file:"!=t.protocol;return{supported:V,init:x,isPreloadable:r,preload:_,removeExpiredKeys:k,display:T,on:L}}(document,location,navigator.userAgent);Honeybadger.configure({apiKey:document.body.dataset.honeybadgerKey,environment:"production",revision:document.body.dataset.releaseFootprint}),Honeybadger.beforeNotify(function(e){return![/ResizeObserver/i,/MetaMask/i,/MtPopUpList/i].some(t=>t.test(e.message))}),ahoy.configure({cookies:!1,trackVisits:!1}),initializeBaseApp();
//# sourceMappingURL=/assets/base-d6a20fb28d5f9dd35bad08f0c58832f50103dd998fbc64471e0a8e3de9bcf052.js.map