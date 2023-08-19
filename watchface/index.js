try {
    (() => {
        let n = __$$hmAppManager$$__.currentApp;
        const g = n.current,
            { px: e } =
                (new DeviceRuntimeCore.WidgetFactory(
                    new DeviceRuntimeCore.HmDomApi(n, g)
                ),
                    n.app.__globals__),
            p = Logger.getLogger("watchface6");

        //store data
        const digiBig = [], digiMed = [], digiSmG = [], digiMeB = [], digiAODb = [], digiAODs = [];
        const mthc = [], mthe = [], mthAODc = [], mthAODe = [];
        const wkc = [], wktc = [], wke = [], wkAODc = [], wkAODtc = [], wkAODe = [];
        for (let i = 0; i <= 9; i++) {
            digiBig.push("Big" + i.toString() + ".png");
            digiMed.push("Med" + i.toString() + ".png");
            digiSmG.push("SmG" + i.toString() + ".png");
            digiMeB.push("MeB" + i.toString() + ".png");
            digiAODb.push("AODb" + i.toString() + ".png");
            digiAODs.push("AODs" + i.toString() + ".png");
        }
        for (let i of ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]) {
            mthc.push(i + "c.png");
            mthe.push(i + "e.png");
            mthAODc.push("AOD" + i + "c.png");
            mthAODe.push("AOD" + i + ".png");
        }
        for (let i of ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]) {
            wkc.push(i + "c.png");
            wktc.push(i + "tc.png");
            wke.push(i + "e.png");
            wkAODc.push("AOD" + i + "c.png");
            wkAODtc.push("AOD" + i + "tc.png");
            wkAODe.push("AOD" + i + "e.png");
        }
        const bg = {
            x: 0,
            y: 0,
            w: 192,
            h: 490,
            src: "bg.png",
            show_level: hmUI.show_level.ONLY_NORMAL
        },
            stelle = {
                x: -36,
                y: 0,
                w: 192,
                h: 490,
                src: "stelle.png",
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            time = {
                hour_zero: 1,
                hour_startX: 2, hour_startY: 290,
                hour_array: digiBig,
                hour_align: hmUI.align.RIGHT,
                minute_zero: 1,
                minute_startX: 2, minute_startY: 362,
                minute_array: digiBig,
                minute_follow: 0,
                am_x: 2, am_y: 264,
                pm_x: 2, pm_y: 264,
                am_sc_path: 'AMc.png', pm_sc_path: 'PMc.png',
                am_tc_path: 'AMc.png', pm_tc_path: 'PMc.png',
                am_en_path: 'AMe.png', pm_en_path: 'PMe.png',
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            date = {
                month_startX: 140, month_startY: 250,
                month_sc_array: mthc,
                month_tc_array: mthc,
                month_en_array: mthe,
                month_zero: 0,
                month_follow: 0,
                month_space: 0,
                month_is_character: true,
                day_startX: 140, day_startY: 280,
                day_sc_array: digiMed,
                day_tc_array: digiMed,
                day_en_array: digiMed,
                day_zero: 0,
                day_follow: 0,
                day_is_character: false,
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            week = {
                x: 140, y: 303,
                week_sc: wkc,
                week_tc: wktc,
                week_en: wke,
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            bat = {
                x: 93, y: 16,
                w: 40,
                h_space: 1.5,
                type: hmUI.data_type.BATTERY,
                font_array: digiMeB,
                align_h: hmUI.align.CENTER_H,
                show_level: hmUI.show_level.ONLY_NORMAL,
            },
            heartpulseDigi = {
                x: 150, y: 379,
                w: 40,
                h_space: 0,
                type: hmUI.data_type.HEART,
                font_array: digiSmG,
                align_h: hmUI.align.LEFT,
                show_level: hmUI.show_level.ONLY_NORMAL,
            },
            walkDigi = {
                x: 127, y: 357,
                w: 65,
                h_space: 0,
                type: hmUI.data_type.STEP,
                font_array: digiSmG,
                align_h: hmUI.align.LEFT,
                show_level: hmUI.show_level.ONLY_NORMAL,
            },
            lock = {
                x: 120, y: 451,
                src: 'lock.png',
                type: hmUI.system_status.LOCK,
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            dnd = {
                x: 44, y: 451,
                src: 'minus-circle.png',
                type: hmUI.system_status.DISTURB,
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            bleoff = {
                x: 82, y: 463,
                src: 'bluetoothoff.png',
                type: hmUI.system_status.DISCONNECT,
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            stelleQDark = {
                x: 9, y: 116,
                src: 'stelleQ.png',
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            timeDark = {
                hour_zero: 1,
                hour_startX: 30, hour_startY: 291,
                hour_array: digiAODb,
                hour_space: 3,
                hour_align: hmUI.align.CENTER,
                minute_startX: 102, minute_startY: 291,
                minute_space: 3,
                minute_zero: 1,
                minute_array: digiAODb,
                minute_align: hmUI.align.CENTER,
                minute_follow: 0,
                am_x: 27, am_y: 265,
                pm_x: 27, pm_y: 265,
                am_sc_path: 'AMc.png', pm_sc_path: 'PMc.png',
                am_tc_path: 'AMc.png', pm_tc_path: 'PMc.png',
                am_en_path: 'AMe.png', pm_en_path: 'PMe.png',
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            colonDark = {
                x: 90, y: 306,
                src: 'AODcolon.png',
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            dateDark = {
                month_startX: 30, month_startY: 347,
                month_sc_array: mthAODc,
                month_tc_array: mthAODc,
                month_en_array: mthAODe,
                month_zero: 0,
                month_space: 10,
                month_is_character: true,
                day_startX: 80, day_startY: 347,
                day_sc_array: digiAODs,
                day_tc_array: digiAODs,
                day_en_array: digiAODs,
                day_zero: 0,
                day_follow: 0,
                day_is_character: false,
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            weekDark = {
                x: 120, y: 347,
                week_sc: wkAODc,
                week_tc: wkAODtc,
                week_en: wkAODe,
                show_level: hmUI.show_level.ONLY_NORMAL
            },
            stelleQ = {
                x: 9, y: 116,
                src: 'stelleQ.png',
                show_level: hmUI.show_level.ONLY_AOD
            },
            timeAOD = {
                hour_zero: 1,
                hour_startX: 30, hour_startY: 291,
                hour_array: digiAODb,
                hour_space: 3,
                hour_align: hmUI.align.CENTER,
                minute_startX: 102, minute_startY: 291,
                minute_space: 3,
                minute_zero: 1,
                minute_array: digiAODb,
                minute_align: hmUI.align.CENTER,
                minute_follow: 0,
                am_x: 27, am_y: 265,
                pm_x: 27, pm_y: 265,
                am_sc_path: 'AMc.png', pm_sc_path: 'PMc.png',
                am_tc_path: 'AMc.png', pm_tc_path: 'PMc.png',
                am_en_path: 'AMe.png', pm_en_path: 'PMe.png',
                show_level: hmUI.show_level.ONLY_AOD
            },
            colonAOD = {
                x: 90, y: 306,
                src: 'AODcolon.png',
                show_level: hmUI.show_level.ONLY_AOD
            },
            dateAOD = {
                month_startX: 30, month_startY: 347,
                month_sc_array: mthAODc,
                month_tc_array: mthAODc,
                month_en_array: mthAODe,
                month_zero: 0,
                month_space: 10,
                month_is_character: true,
                day_startX: 80, day_startY: 347,
                day_sc_array: digiAODs,
                day_tc_array: digiAODs,
                day_en_array: digiAODs,
                day_zero: 0,
                day_follow: 0,
                day_is_character: false,
                show_level: hmUI.show_level.ONLY_AOD
            },
            weekAOD = {
                x: 120, y: 347,
                week_sc: wkAODc,
                week_tc: wkAODtc,
                week_en: wkAODe,
                show_level: hmUI.show_level.ONLY_AOD
            },
            preferences = {
                edit_id: 101,
                x: 0,
                y: 0,//84
                w: 192,
                h: 490,
                select_image: "",
                un_select_image: "",
                default_type: 0x186a0,
                optional_types: [{
                    type: 0x186a0,
                    preview: 'cover.png',
                    title_sc: '浅色模式-长按以应用',
                    title_tc: '淺色模式-按住以套用',
                    title_en: 'Light Mode - Hold to apply'
                }, {
                    type: 0x186a1,
                    preview: 'coverAOD.png',
                    title_sc: '深色模式-长按以应用',
                    title_tc: '深色模式-按住以套用',
                    title_en: 'Dark Mode - Hold to apply'
                }],
                count: 2,
                tips_BG: 'tip.png',
                tips_x: 35,
                tips_y: 410,
                tips_width: 121,
                tips_margin: 8
            };

        function decodeUtf8(array, outLimit = Infinity, startPosition = 0) {
            let out = "";
            let length = array.length;
            let i = startPosition, c, char2, char3;
            while (i < length && out.length < outLimit) {
                c = array[i++];
                switch (c >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        out += String.fromCharCode(c);
                        break;
                    case 12:
                    case 13:
                        char2 = array[i++];
                        out += String.fromCharCode(
                            (c & 31) << 6 | char2 & 63
                        );
                        break;
                    case 14:
                        char2 = array[i++];
                        char3 = array[i++];
                        out += String.fromCharCode(
                            (c & 15) << 12 | (char2 & 63) << 6 | (char3 & 63) << 0
                        );
                        break;
                }
            }
            return [out, i - startPosition];
        }

        g.module = DeviceRuntimeCore.WatchFace({
            init_view() {
                let prf = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, preferences);
                let mode = prf.getProperty(hmUI.prop.CURRENT_TYPE);
                const language = hmSetting.getLanguage();
                let filename, voiceover = [], res;
                switch (language) {
                    case 0:
                        filename = "voiceoversc.txt";
                        break;
                    case 1:
                        filename = "voiceovertc.txt";
                        break;
                    case 2:
                        filename = "voiceoveren.txt";
                        break;
                }
                const [fsStat, err] = hmFS.stat_asset(filename);
                if (err == 0) {
                    const buffer = new ArrayBuffer(fsStat.size);
                    const file = hmFS.open_asset(filename, hmFS.O_RDONLY);
                    hmFS.read(file, buffer, 0, fsStat.size);
                    hmFS.close(file);
                    res = decodeUtf8(new Uint8Array(buffer))[0];
                    voiceover = res.split(/\r\n |\n/);
                }
                function VoDisplay() {
                    const t = hmSensor.createSensor(hmSensor.id.TIME);
                    if (err == 0) {
                        if (t.month == 3 && t.day == 7) {
                            switch (language) {
                                case 0:
                                    hmUI.showToast({ text: "今天是三月七的生日,去给她挑个礼物吧。" });
                                    break;
                                case 1:
                                    hmUI.showToast({ text: "今天是三月七的生日,去給她挑個禮物吧。" });
                                    break;
                                case 2:
                                    hmUI.showToast({ text: "Today is March 7th's birthday, go pick her a present." });
                                    break;
                            }
                        } else {
                            // let select = parseInt(Math.random() * voiceover.length);
                            const time = hmSensor.createSensor(hmSensor.id.TIME);
                            const select = time.utc % voiceover.length;
                            hmUI.showToast({ text: voiceover[select] });
                        }
                    }
                }
                // console.log(voiceover);

                //start render
                switch (mode) {
                    case 0x186a0:
                        hmUI.createWidget(hmUI.widget.IMG, stelle);
                        hmUI.createWidget(hmUI.widget.IMG, bg);

                        hmUI.createWidget(hmUI.widget.IMG_TIME, time);
                        hmUI.createWidget(hmUI.widget.IMG_DATE, date);
                        hmUI.createWidget(hmUI.widget.IMG_WEEK, week);
                        hmUI.createWidget(hmUI.widget.TEXT_IMG, bat);
                        hmUI.createWidget(hmUI.widget.TEXT_IMG, heartpulseDigi);
                        hmUI.createWidget(hmUI.widget.TEXT_IMG, walkDigi);

                        hmUI.createWidget(hmUI.widget.IMG_STATUS, lock);
                        hmUI.createWidget(hmUI.widget.IMG_STATUS, dnd);
                        hmUI.createWidget(hmUI.widget.IMG_STATUS, bleoff);

                        let ts = hmUI.createWidget(hmUI.widget.IMG, stelle);
                        ts.addEventListener(hmUI.event.CLICK_UP, function () {
                            VoDisplay();
                        });
                        break;
                    case 0x186a1:
                        hmUI.createWidget(hmUI.widget.IMG_TIME, timeDark);
                        hmUI.createWidget(hmUI.widget.IMG, colonDark);
                        hmUI.createWidget(hmUI.widget.IMG_DATE, dateDark);
                        hmUI.createWidget(hmUI.widget.IMG_WEEK, weekDark);
                        let tsq = hmUI.createWidget(hmUI.widget.IMG, stelleQDark);
                        tsq.addEventListener(hmUI.event.CLICK_UP, function () {
                            VoDisplay();
                        });
                        break;
                }

                //render (AOD)
                hmUI.createWidget(hmUI.widget.IMG, stelleQ);
                hmUI.createWidget(hmUI.widget.IMG_TIME, timeAOD);
                hmUI.createWidget(hmUI.widget.IMG, colonAOD);
                hmUI.createWidget(hmUI.widget.IMG_DATE, dateAOD);
                hmUI.createWidget(hmUI.widget.IMG_WEEK, weekAOD);
            },
            onInit() {
                p.log("index.js on init invoke");
            },
            build() {
                this.init_view();
                p.log("index.js on ready invoke");
            },
            onDestory() {
                p.log("index.js on destory invoke");
            }
        });
    })();
} catch (n) {
    console.log(n);
}
