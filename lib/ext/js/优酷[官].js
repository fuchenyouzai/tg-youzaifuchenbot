var rule = {
    title: '优酷[官]',
    host: 'https://www.%79%6f%75%6b%75.com',
    homeUrl: '',
    searchUrl: 'https://search.%79%6f%75%6b%75.com/api/search?pg=fypage&keyword=**',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    multi: 1,
    url: '/category/data?optionRefresh=1&pageNo=fypage&params=fyfilter',
    filter_url: '{{fl}}',
    filter: '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',
    headers: {
        'User-Agent': 'PC_UA',
        'Cookie': 'cna=VvNvGX3e0ywCAavVEXlnA2bg; __ysuid=1626676228345Rl1; __ayft=1652434048647; __arycid=dm-1-00; __arcms=dm-1-00; __ayvstp=85; __arpvid=1667204023100cWWdgM-1667204023112; __ayscnt=10; __aypstp=60; isg=BBwcqxvvk3BxkWQGugbLpUSf7TrOlcC_U7GAj_YdfYfvQbzLHqYGT4Hgp6m5TvgX; tfstk=c3JOByYUH20ilVucLOhh0pCtE40lZfGc-PjLHLLfuX7SWNyAiQvkeMBsIw7PWDC..; l=eBQguS-PjdJFGJT-BOfwourza77OSIRA_uPzaNbMiOCPOb1B5UxfW6yHp4T6C3GVhsGJR3rp2umHBeYBqQd-nxvOF8qmSVDmn',
        'Referer': 'https://www.youku.com',
    },
    timeout: 5000,
    class_name: '电视剧&电影&综艺&动漫&少儿&纪录片&文化&亲子&教育&搞笑&生活&体育&音乐&游戏',
    class_url: '电视剧&电影&综艺&动漫&少儿&纪录片&文化&亲子&教育&搞笑&生活&体育&音乐&游戏',
    limit: 20,
    play_parse: true,
    lazy: $js.toString(() => {
        input = {
            parse: 1,
            jx: 1,
            url: input
        };
    }),
    一级: $js.toString(() => {
        let d = [];
        MY_FL.type = MY_CATE;
        let fl = stringify(MY_FL);
        fl = encodeUrl(fl);
        input = input.split("{")[0] + fl;
        if (MY_PAGE > 1) {
            let old_session = getItem("yk_session_" + MY_CATE, "{}");
            if (MY_PAGE === 2) {
                input = input.replace("optionRefresh=1", "session=" + encodeUrl(old_session))
            } else {
                input = input.replace("optionRefresh=1", "session=" + encodeUrl(old_session))
            }
        }
        let html = fetch(input, fetch_params);
        try {
            html = JSON.parse(html);
            let lists = html.data.filterData.listData;
            let session = html.data.filterData.session;
            session = stringify(session);
            if (session !== getItem("yk_session_" + MY_CATE, "{}")) {
                setItem("yk_session_" + MY_CATE, session)
            }
            lists.forEach(function (it) {
                let vid;
                if (it.videoLink.includes("id_")) {
                    vid = it.videoLink.split("id_")[1].split(".html")[0]
                } else {
                    vid = "msearch:"
                }
                d.push({
                    title: it.title,
                    img: it.img,
                    desc: it.summary,
                    url: "https://search.youku.com/api/search?appScene=show_episode&showIds=" + vid,
                    content: it.subTitle
                })
            })
        } catch (e) {
            log("一级列表解析发生错误:" + e.message)
        }
        setResult(d);
    }),
    二级: $js.toString(() => {
        var d = [];
        VOD = {};
        let html = request(input);
        let json = JSON.parse(html);
        if (/keyword/.test(input)) {
            input = "https://search.youku.com/api/search?appScene=show_episode&showIds=" + json.pageComponentList[0].commonData.showId;
            json = JSON.parse(fetch(MY_URL, fetch_params))
        }
        let video_lists = json.serisesList;
        var name = json.sourceName;
        if (/优酷/.test(name) && video_lists.length > 0) {
            let ourl = "https://v.youku.com/v_show/id_" + video_lists[0].videoId + ".html";
            let _img = video_lists[0].thumbUrl;
            let html = fetch(ourl, {
                headers: {
                    Referer: "https://v.youku.com/",
                    "User-Agent": PC_UA
                }
            });
            let json = /__INITIAL_DATA__/.test(html) ? html.split("window.__INITIAL_DATA__ =")[1].split(";")[0] : "{}";
            if (json === "{}") {
                log("触发了优酷人机验证");
                VOD.vod_remarks = ourl;
                VOD.vod_pic = _img;
                VOD.vod_name = video_lists[0].title.replace(/(\d+)/g, "");
                VOD.vod_content = "触发了优酷人机验证,本次未获取详情,但不影响播放(" + ourl + ")"
            } else {
                try {
                    json = JSON.parse(json);
                    let data = json.data.data;
                    let data_extra = data.data.extra;
                    let img = data_extra.showImgV;
                    let model = json.data.model;
                    let m = model.detail.data.nodes[0].nodes[0].nodes[0].data;
                    let _type = m.showGenre;
                    let _desc = m.updateInfo || m.subtitle;
                    let JJ = m.desc;
                    let _title = m.introTitle;
                    VOD.vod_pic = img;
                    VOD.vod_name = _title;
                    VOD.vod_type = _type;
                    VOD.vod_remarks = _desc;
                    VOD.vod_content = JJ
                } catch (e) {
                    log("海报渲染发生错误:" + e.message);
                    print(json);
                    VOD.vod_remarks = name
                }
            }
        }
        if (!/优酷/.test(name)) {
            VOD.vod_content = "非自家播放源,暂无视频简介及海报";
            VOD.vod_remarks = name
        }

        function adhead(url) {
            return urlencode(url)
        }

        play_url = play_url.replace("&play_url=", "&type=json&play_url=");
        video_lists.forEach(function (it) {
            let url = "https://v.youku.com/v_show/id_" + it.videoId + ".html";
            if (it.thumbUrl) {
                d.push({
                    desc: it.showVideoStage ? it.showVideoStage.replace("期", "集") : it.displayName,
                    pic_url: it.thumbUrl,
                    title: it.title,
                    url: play_url + adhead(url)
                })
            } else if (name !== "优酷") {
                d.push({
                    title: it.displayName ? it.displayName : it.title,
                    url: play_url + adhead(it.url)
                })
            }
        });
        VOD.vod_play_from = name;
        VOD.vod_play_url = d.map(function (it) {
            return it.title + "$" + it.url
        })
            .join("#");
    }),

    搜索: $js.toString(() => {
        var d = [];
        let html = request(input);
        let json = JSON.parse(html);
        json.pageComponentList.forEach(function (it) {
            if (it.hasOwnProperty("commonData")) {
                it = it.commonData;
                d.push({
                    title: it.titleDTO.displayName,
                    img: it.posterDTO.vThumbUrl,
                    desc: it.stripeBottom,
                    content: it.updateNotice + " " + it.feature,
                    url: "https://search.youku.com/api/search?appScene=show_episode&showIds=" + it.showId + "&appCaller=h5"
                })
            }
        });
        setResult(d)
    }),
}