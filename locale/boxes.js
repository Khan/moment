//! moment.js locale configuration
//! locale : boxes (boxes)
// NOTE(jeresig): This is a custom version of a moment.js locale plugin
// that we can use for testing purposes.

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var monthsShortDot = '□□□._□□□._□□□._□□□._□□□._□□□._□□□._□□□._□□□._□□□._□□□._□□□.'.split('_'),
        monthsShort = '□□□_□□□_□□□_□□□_□□□_□□□_□□□_□□□_□□□_□□□_□□□_□□□'.split('_');

    var boxes = moment.defineLocale('boxes', {
        months : '□□□□□_□□□□□□□_□□□□□_□□□□□_□□□□_□□□□□_□□□□□_□□□□□□_□□□□□□□□□□_□□□□□□□_□□□□□□□□□_□□□□□□□□□'.split('_'),
        monthsShort : function (m, format) {
            if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        weekdays : '□□□□□□□_□□□□□_□□□□□□_□□□□□□□□_□□□□□□_□□□□□□□_□□□□□□'.split('_'),
        weekdaysShort : '□□□._□□□._□□□._□□□._□□□._□□□._□□□.'.split('_'),
        weekdaysMin : '□□_□□_□□_□□_□□_□□_□□'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [□□] MMMM [□□] YYYY',
            LLL : 'D [□□] MMMM [□□] YYYY H:mm',
            LLLL : 'dddd, D [□□] MMMM [□□] YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[□□□ □ □□' + ((this.hours() !== 1) ? '□' : '') + '] LT';
            },
            nextDay : function () {
                return '[□□□□□□ □ □□' + ((this.hours() !== 1) ? '□' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [□ □□' + ((this.hours() !== 1) ? '□' : '') + '] LT';
            },
            lastDay : function () {
                return '[□□□□ □ □□' + ((this.hours() !== 1) ? '□' : '') + '] LT';
            },
            lastWeek : function () {
                return '[□□] dddd [□□□□□□ □ □□' + ((this.hours() !== 1) ? '□' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '□□ %s',
            past : '□□□□ %s',
            s : '□□□□ □□□□□□□□',
            m : '□□ □□□□□□',
            mm : '%d □□□□□□□',
            h : '□□□ □□□□',
            hh : '%d □□□□□',
            d : '□□ □□□',
            dd : '%d □□□□',
            M : '□□ □□□',
            MM : '%d □□□□',
            y : '□□ □□□',
            yy : '%d □□□□'
        },
        ordinalParse : /\d{1,2}□/,
        ordinal : '%d□',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return boxes;

}));
