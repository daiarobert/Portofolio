// var channelsightWidget = function () {
//   !(function () {
//     "use strict";
//     !(function () {
//       window.appInsightsSDK = "channelsightTelemetry";
//       var e = window.appInsightsSDK,
//         t =
//           window[e] ||
//           (function (e) {
//             function t(e) {
//               n[e] = function () {
//                 var t = arguments;
//                 n.queue.push(function () {
//                   n[e].apply(n, t);
//                 });
//               };
//             }
//             var n = { config: e, initialize: !0 },
//               i = document,
//               a = window;
//             setTimeout(function () {
//               var t = i.createElement("script");
//               (t.src =
//                 e.url ||
//                 "https://js.monitor.azure.com/scripts/b/ai.2.gbl.min.js"),
//                 i.getElementsByTagName("script")[0].parentNode.appendChild(t);
//             });
//             try {
//               n.cookie = i.cookie;
//             } catch (e) {}
//             (n.queue = []), (n.version = 2);
//             for (
//               var r = [
//                 "Event",
//                 "PageView",
//                 "Exception",
//                 "Trace",
//                 "DependencyData",
//                 "Metric",
//                 "PageViewPerformance",
//               ];
//               r.length;

//             )
//               t("track" + r.pop());
//             t("startTrackPage"), t("stopTrackPage");
//             var c = "Track" + r[0];
//             if (
//               (t("start" + c),
//               t("stop" + c),
//               t("addTelemetryInitializer"),
//               t("setAuthenticatedUserContext"),
//               t("clearAuthenticatedUserContext"),
//               t("flush"),
//               !(
//                 !0 === e.disableExceptionTracking ||
//                 (e.extensionConfig &&
//                   e.extensionConfig.ApplicationInsightsAnalytics &&
//                   !0 ===
//                     e.extensionConfig.ApplicationInsightsAnalytics
//                       .disableExceptionTracking)
//               ))
//             ) {
//               t("_" + (r = "onerror"));
//               var s = a[r];
//               (a[r] = function (e, t, i, a, c) {
//                 var o = s && s(e, t, i, a, c);
//                 return (
//                   !0 !== o &&
//                     n["_" + r]({
//                       message: e,
//                       url: t,
//                       lineNumber: i,
//                       columnNumber: a,
//                       error: c,
//                     }),
//                   o
//                 );
//               }),
//                 (e.autoExceptionInstrumented = !0);
//             }
//             return n;
//           })({
//             instrumentationKey: "64e0819b-102f-4031-bafb-5ccc8ddafd22",
//             disableExceptionTracking: !0,
//             enableDebug: !1,
//             disableAjaxTracking: !0,
//             disableFetchTracking: !0,
//             disableCorrelationHeaders: !0,
//             isCookieUseDisabled: !0,
//             disableCookiesUsage: !0,
//             enableSessionStorageBuffer: !1,
//             namePrefix: "channelsight",
//           });
//       (window[e] = t), t.queue && 0 === t.queue.length && t.trackPageView({});
//     })(),
//       (function () {
//         if (!document.getElementById("cswidgetjs")) {
//           var e = document.createElement("script");
//           (e.src = "https://cdn.channelsight.com/widget/scripts/cswidget.js"),
//             (e.id = "cswidgetjs"),
//             document.body.appendChild(e);
//         }
//       })();
//   })();
// };

// export default channelsightWidget;
