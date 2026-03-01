var rule = {
    title: '360影视[官]',
    host: 'https://www.360kan.com',
    homeUrl: 'https://api.web.360kan.com/v1/rank?cat=2&size=9',
    detailUrl: 'https://api.web.360kan.com/v1/detail?cat=fyclass&id=fyid',
    searchUrl: 'https://api.so.360kan.com/index?force_v=1&kw=**&from=&pageno=fypage&v_ap=1&tab=all',
    url: 'https://api.web.360kan.com/v1/fyfilter&size=35&pageno=fypage&callback=',
    filterable: 1,
    filter_url: 'filter/list?catid=fyclass&rank={{fl.排序}}&cat={{fl.类型}}&year={{fl.年代}}&area={{fl.地区}}',
    filter: "H4sIAAAAAAAAA+2Y3U4bRxTH38XXXOwCadLc9Ql6U+WmiioukFqFkiqllaIIyWCb2ObDhvDl2Bgo2CYEgw2UmnVsv8zO7Potuvb5GlfVai8oUSru/Dtn5sz5786eM+M3MTv29Ps3sRfTr2NPY16zrcrLsbHY7NTP0yb/PjXz2/Rw4GxgVqmTfuJkYA4gNj+G1u2SytTQikA+L93UiRT6EHhe9sTtlGgeAPn0Ql7Ht9GHwDFr6+q2TTEBOGamJush8Lzshdc5pXkAPK/yVmIicC7pXdfJUC4A7Fs887bXyQdg6PM226JvADxv+62fcWgeAOfpnKrOFuUJQD7304F/3kAfAsesr/jpMsUE4Fxyx/4RPxcA9q0tqdwl+QA4ZiKrF99TTADJperllziXIXDM1I3bpveHMP984IUNp0oNteLIhmOOtOGWUsF4Cn5c6xdkYbdVV8VOv1rQrQscgTA6QuUa+rbLD2QILPqqEYwg0QD8crpr4kMgX3//g/gQOOZORZfOKCaArLdlrrdlzvOXm+JD4OfQ/Ut8COxbbSinSj6AyC/n9tptHxkvhzjKyxm3xr9C2/CnYX8k9kemfVLsk6Z9QuwTpn1c7OOm3Ra7bdotsVuG3f6a7cFPw/5E7E9M+2OxPzbtotc29dqi1zb12qLXNvXaotc29dqi1zb12qLLNnVZossydVmiyzJ1WaLLEl26eK13PqBnZu6H19NTr0Z2iV7bUE5Odgnz6C7RpbjfW/cSdb17gNFeTc2++PHlnCw1HOK2sqNDZqbmpn8dGaVyO6rS8S+SxqhfXv40OzdI7PlYbPyuWpp/Epc2ghClxYSWxJA2GdZG+omOai1SVQHgmAs3KpGjmACRSv5S0XWWyQfA2utVtUJtEiFKq1DZpurtcLsbAlfNStm/2KOqCcDrNVaDpkrrAbD2vQ29WyHtQzAfmzq/UU6dlhzCiDvsgJFI6QJ1CARppFW3SzsRIdLh4/6aHsB9Nb2w5hXW9MKaZVhj09sNlT1Qe4d8QCJ+aFMPbeqLb1MTd9amkk2VO/JqcfqMmPkLLO27jiMjhDnffNk749YDwN92PCNTEaTYfVSrfMAE4LzOe34jTUkBmIU3uW8U3gA42819fc3FFYDnFd67n/gmAiA16Mq9zXMNGgLnsrCiSnTTQjDqU/+IckGQmnejGrweAPtaLZ2mtovAz6WxrpI9ei4AXIU77/xFap8I5q3vnG5vCEbT0VsFaToDkA/g0rhJAkS5EfrXf3ht0oDA85odv0PvFoF9G3WdpZaM8P+49YXd0M5qwfYgH8BnKTLD+jF5V/UjyMQ/5NIAEOWgM2jlwc6uXBmtHZi/yPqmzEbg2e2cSrVoKkCUQ2TYl6WWNvoFagMIUSqcXjuRAzsC+xaWvXSTfADsu2zrJFU4BM7ltq0T9GgQeN7BoSrSiRXBOK56GdYAINvCkUMyAm9t51LVqfohcMxkL/juKSYAV4BePliFKgBAlAuJjp9KngjsC/mvzCtmdYEqFULIQV/mfawYlwcA8ZV1lncwQJTjv3fclW6CIBenZeOCB/CPfpqhVy8sPexP1WkaI5hpxLfPvhE3Avm+eyYu+G2cib2t05H/FEdMcida8drvRv97NE33Uo/Daum/XgoejvVf3LFe9Nqm3v/2uB+A6LVMvZbotUy9lui1RO/ItQHhczX0+b8BBMe+jowZAAA=",
    filter_def: {},
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    timeout: 5000,
    class_name: '电视剧&电影&综艺&动漫',
    class_url: '2&1&3&4',
    limit: 5,
    multi: 1,
    searchable: 2,
    play_parse: true,
    lazy: 'js:input=input.split("?")[0];log(input);',
    // 疑似t4专用的
    // lazy:'js:input={parse: 1, playUrl: "", jx: 1, url: input.split("?")[0]}',
    // 手动调用解析请求json的url,此lazy不方便
    // lazy:'js:input="https://cache.json.icu/home/api?type=ys&uid=292796&key=fnoryABDEFJNPQV269&url="+input.split("?")[0];log(input);let html=JSON.parse(request(input));log(html);input=html.url||input',
    推荐: 'json:data;title;cover;comment;cat+ent_id;description',
    一级: 'json:data.movies;title;cover;pubdate;id;description',
    二级: '',
    二级: $js.toString(() => {
        let html = JSON.parse(fetch(input, fetch_params));
        let data = html.data;
        let tilte = data.title;
        let img = data.cdncover;
        let vod_type = data.moviecategory.join(",");
        let area = data.area.join(",");
        let director = data.director.join(",");
        let actor = data.actor.join(",");
        let content = data.description;
        let base_vod = {
            vod_id: input,
            vod_name: tilte,
            type_name: vod_type,
            vod_actor: actor,
            vod_director: director,
            vod_content: content,
            vod_remarks: area,
            vod_pic: urljoin2(input, img)
        };
        let delta = 50;
        let vod_play = {};
        let sites = data.playlink_sites;
        sites.forEach(function (site) {
            let playList = "";
            let vodItems = [];
            print(data)
            if (data.allupinfo) {
                let total = parseInt(data.allupinfo[site]);
                print(total)
                for (let j = 1; j < total; j += delta) {
                    let end = Math.min(total, j + delta - 1);
                    print(end)
                    let url2 = buildUrl(input, { start: j, end: end, site: site });
                    let vod_data = JSON.parse(fetch(url2), fetch_params).data;
                    if (vod_data != null) {
                        if (vod_data.allepidetail) {
                            vod_data = vod_data.allepidetail[site];
                            vod_data.forEach(function (item, index) {
                                vodItems.push((item.playlink_num || "") + "$" + urlDeal(item.url || ""))
                            })
                        } else {
                            vod_data = vod_data.defaultepisode;
                            vod_data.forEach(function (item, index) {
                                vodItems.push((item.period || "") + (item.name || "") + "$" + urlDeal(item.url) || "")
                            })
                        }
                    }
                }
            } else {
                let item = data.playlinksdetail[site];
                vodItems.push((item.sort || "") + "$" + urlDeal(item.default_url || ""))
            } if (vodItems.length > 0) {
                playList = vodItems.join("#")
            } if (playList.length < 1) {
                return
            } vod_play[site] = playList
        });
        let tabs = Object.keys(vod_play);
        let playUrls = []; for (let id in tabs) {
            print("id:" + id); playUrls.push(vod_play[tabs[id]])
        } if (tabs.length > 0) {
            let vod_play_from = tabs.join("$$$"); let vod_play_url = playUrls.join("$$$");
            base_vod.vod_play_from = vod_play_from;
            base_vod.vod_play_url = vod_play_url
        }
        VOD = base_vod;
    }),
    搜索: 'json:data.longData.rows;titleTxt||titlealias;cover;cat_name;cat_id+en_id;description',
}