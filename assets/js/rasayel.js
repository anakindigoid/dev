!(function (e, a) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = a()) : "function" == typeof define && define.amd ? define([], a) : "object" == typeof exports ? (exports.RasayelOmniWidget = a()) : (e.RasayelOmniWidget = a());
})(self, function () {
    return (() => {
        "use strict";
        var e = {
                383: (e, a, t) => {
                    t.d(a, { Z: () => l });
                    var n = t(645),
                        i = t.n(n)()(function (e) {
                            return e[1];
                        });
                    i.push([e.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap);"]),
                        i.push([
                            e.id,
                            "*{font-family:Inter,Arial,Helvetica,sans-serif;line-height:1;margin:0;padding:0}a{text-decoration:none}a:visited{color:inherit}button{background:none;border:none}.omnichannel-widget-wrapper{--text-color-primary:#5c5c5c;--text-color-secondary:#989898;--color-green:#0bb189;--color-blue:#3679ff;--channel-icon-size:30px;direction:ltr;position:relative}.omnichannel-widget-wrapper.is-fixed{bottom:2rem;position:fixed;left:2rem;z-index:999999}.omnichannel-button{border-radius:9999999px;bottom:0;box-shadow:0 0 20px rgba(0,0,0,.16);color:var(--color-blue);cursor:pointer;position:absolute;left:0;transition:color .2s ease-in-out}.omnichannel-button:hover{color:#2655b3}.omnichannel-button svg{height:3.75rem;width:3.75rem}.omnichannel-channel-item a svg{flex-shrink:0;height:var(--channel-icon-size);width:var(--channel-icon-size)}.omnichannel-channel-item a .omnichannel-channel-icon-fill{align-items:center;background:var(--color-blue);border-radius:9999999999px;display:flex;height:var(--channel-icon-size);justify-content:center;width:var(--channel-icon-size)}.omnichannel-channel-item a .omnichannel-channel-icon-fill svg{color:#fff;flex-shrink:0;height:24px;width:24px}.omnichannel-widget-popup{background:#fff;border-radius:10px;bottom:75px;box-shadow:0 7px 29px 0 hsla(240,5%,41%,.2);display:flex;flex-direction:column;overflow:hidden;padding:30px 0;position:absolute;left:4px;width:300px}.omnichannel-widget-popup.is-hidden{display:none}.omnichannel-header{align-items:center;color:var(--text-color-primary);display:flex;flex-direction:column;order:1;position:relative}.omnichannel-header-title{font-size:14px;max-width:80%;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}.omnichannel-header-message{color:var(--text-color-secondary);font-size:12px;margin-top:6px;text-align:center}.omnichannel-header-minimize-button{color:var(--text-color-secondary);cursor:pointer;height:30px;position:absolute;left:12px;top:-20px;transform:rotate(45deg);width:30px}.omnichannel-header-minimize-button svg{width:10px}.omnichannel-channels{border-radius:99999999999px;display:flex;flex-direction:column;list-style:none;margin-top:30px;order:2;padding:0 28px}.omnichannel-channels li{background:#f5f7fb;border-radius:999999px;padding:8px 18px}.omnichannel-channels li a{display:flex}.omnichannel-channels li+li{margin-top:13px}.omnichannel-channels.is-minimal{align-items:center;flex-direction:row;flex-wrap:wrap;gap:10px;justify-content:center}.omnichannel-channels.is-minimal li{align-items:center;background:none;display:flex;justify-content:center;padding:0}.omnichannel-channels.is-minimal .omnichannel-channel-item-info{display:none}.omnichannel-channels.is-minimal li+li{margin-top:0}.omnichannel-channels.is-minimal .omnichannel-channel-item{--channel-icon-size:36px}.omnichannel-channel-item-info{display:flex;flex-direction:column;margin-left:10px}.omnichannel-channel-item-info-title{color:var(--text-color-primary);font-size:13px}.omnichannel-channel-item-info-id,.omnichannel-channel-item-info-title{max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.omnichannel-channel-item-info-id{color:var(--text-color-secondary);font-size:11px;margin-top:4px}.omnichannel-powered-by{align-items:center;display:flex;justify-content:center;margin-top:16px;order:3;width:100%}.omnichannel-powered-by svg{height:16px;width:16px}.omnichannel-powered-by span{color:var(--color-green);font-size:11px;margin-left:5px}",
                            "",
                        ]);
                    const l = i;
                },
                645: (e) => {
                    e.exports = function (e) {
                        var a = [];
                        return (
                            (a.toString = function () {
                                return this.map(function (a) {
                                    var t = e(a);
                                    return a[2] ? "@media ".concat(a[2], " {").concat(t, "}") : t;
                                }).join("");
                            }),
                                (a.i = function (e, t, n) {
                                    "string" == typeof e && (e = [[null, e, ""]]);
                                    var i = {};
                                    if (n)
                                        for (var l = 0; l < this.length; l++) {
                                            var s = this[l][0];
                                            null != s && (i[s] = !0);
                                        }
                                    for (var r = 0; r < e.length; r++) {
                                        var o = [].concat(e[r]);
                                        (n && i[o[0]]) || (t && (o[2] ? (o[2] = "".concat(t, " and ").concat(o[2])) : (o[2] = t)), a.push(o));
                                    }
                                }),
                                a
                        );
                    };
                },
                209: (e) => {
                    e.exports =
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.45 36.45"><defs><filter id="abc_svg__a" x="0" y="0" width="54.450001" height="54.450001" filterUnits="userSpaceOnUse"><feOffset/><feGaussianBlur stdDeviation="3" result="blur"/><feFlood flood-opacity=".161"/><feComposite operator="in" in2="blur" result="result1"/><feComposite in="SourceGraphic" in2="result1"/></filter></defs><g data-name="Group 1670"><g transform="translate(-9 -9)" filter="url(#abc_svg__a)"><path data-name="Path 95" d="M27.225 9A18.225 18.225 0 1045.45 27.225 18.224 18.224 0 0027.225 9zm0 6.627z" fill="#4bea66"/></g><path d="M18.225 9.171c-5.589 0-10.12 3.774-10.12 8.429a8.263 8.263 0 004.917 7.218 8.01 8.01 0 01-1.77 2.477 10.837 10.837 0 004.11-1.615 12.015 12.015 0 002.863.349c5.589 0 10.12-3.774 10.12-8.429s-4.531-8.429-10.12-8.429z" fill="#fff"/></g></svg>';
                },
                735: (e) => {
                    e.exports =
                        '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 47.832 47.832"><g data-name="Layer 1"><circle data-name="Ellipse 68" cx="23.916" cy="23.916" r="23.916" fill="#fff"/><path data-name="Path 1293" d="M20.563 32.927V21.685h-.02a3.865 3.865 0 0 0 .02-.4 4.4655 4.4655 0 1 0-8.931 0 3.868 3.868 0 0 0 .02.4h-.02v11.158a4.465 4.465 0 0 0 4.469 4.452h4.465v-4.368z" fill="#005de4"/><path data-name="Path 1294" d="M11.635 29.044s.988-2.9 5.2-2.9h6.78v-3.968l-11.978.044z" fill="#0056bb"/><path data-name="Path 1295" d="M36.19 14.988a4.465 4.465 0 0 0-4.465-4.465h-4.469v4.368a.671.671 0 0 0 0 .084v11.172h.02c0 .131-.02.262-.02.393a4.469 4.469 0 1 0 8.934 0 2.569 2.569 0 0 0-.02-.393h.02z" fill="#00c09b"/><circle data-name="Ellipse 69" cx=".662" cy=".662" r=".662" transform="translate(29.94 27.719)" fill="#fff"/><circle data-name="Ellipse 70" cx=".662" cy=".662" r=".662" transform="translate(25.485 27.719)" fill="#fff"/><circle data-name="Ellipse 71" cx=".662" cy=".662" r=".662" transform="translate(21.03 27.719)" fill="#fff"/><path data-name="Path 1296" d="M36.196 18.785s-.988 2.9-5.2 2.9h-6.778v3.971l11.978-.044z" fill="#00b491"/><path data-name="Path 1297" d="M30.673 23.916h-10.1a4.465 4.465 0 0 0 0 8.927h11.151a4.465 4.465 0 0 0 4.462-4.465v-9.959a5.571 5.571 0 0 1-5.513 5.497z" fill="#05d5a3"/><path data-name="Path 1298" d="M27.252 14.989H16.105a4.465 4.465 0 0 0-4.465 4.465v9.959a5.571 5.571 0 0 1 5.517-5.5h10.1a4.465 4.465 0 1 0 0-8.927z" fill="#3679ff"/><circle data-name="Ellipse 72" cx=".662" cy=".662" r=".662" transform="translate(25.475 18.816)" fill="#fff"/><circle data-name="Ellipse 73" cx=".662" cy=".662" r=".662" transform="translate(21.02 18.816)" fill="#fff"/><circle data-name="Ellipse 74" cx=".662" cy=".662" r=".662" transform="translate(16.564 18.816)" fill="#fff"/><circle data-name="Ellipse 75" cx=".662" cy=".662" r=".662" transform="translate(21.033 27.689)" fill="#fff"/><circle data-name="Ellipse 76" cx=".662" cy=".662" r=".662" transform="translate(25.488 27.689)" fill="#fff"/><circle data-name="Ellipse 77" cx=".662" cy=".662" r=".662" transform="translate(29.944 27.689)" fill="#fff"/></g></svg>';
                },
                125: (e) => {
                    e.exports =
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.45 36.45"><defs><filter id="email_svg__a" x="0" y="0" width="54.450001" height="54.450001" filterUnits="userSpaceOnUse"><feOffset/><feGaussianBlur stdDeviation="3" result="blur"/><feFlood flood-opacity=".161"/><feComposite operator="in" in2="blur" result="result1"/><feComposite in="SourceGraphic" in2="result1"/></filter></defs><g data-name="Group 1593"><g data-name="Group 1590"><g filter="url(#email_svg__a)" transform="translate(-9 -9)"><path data-name="Path 95" d="M27.225 9A18.225 18.225 0 1045.45 27.225 18.224 18.224 0 0027.225 9zm0 6.627z" fill="#3679ff"/></g><path data-name="Path 1245" d="M21.89 18.224a3.661 3.661 0 10-3.664 3.664 3.66 3.66 0 003.664-3.664zm0 0v1.373a2.288 2.288 0 004.576 0v-1.373a8.236 8.236 0 10-8.236 8.236m4.118-1.1a8.2 8.2 0 01-4.118 1.1" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></g></svg>';
                },
                758: (e) => {
                    e.exports =
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill-rule="evenodd"><path data-name="Path 1281" d="M99.999 49.993a50 50 0 10-57.814 49.391V64.451H29.481V49.993h12.704V38.976c0-12.53 7.467-19.456 18.886-19.456a76.868 76.868 0 0111.194.978v12.305H65.96c-6.209 0-8.15 3.854-8.15 7.811v9.38h13.865L69.46 64.451H57.812V99.39A50.008 50.008 0 00100 49.999z" fill="#1977f3"/><path data-name="Path 1282" d="M69.455 64.45l2.215-14.457H57.805v-9.38c0-3.951 1.933-7.811 8.15-7.811h6.306V20.497a76.86 76.86 0 00-11.194-.978c-11.42 0-18.886 6.919-18.886 19.455v11.019H29.476v14.456h12.705v34.94a50.262 50.262 0 007.811.603 51.126 51.126 0 007.811-.604V64.45z" fill="#fefefe"/></g></svg>';
                },
                789: (e) => {
                    e.exports =
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.45 36.45"><defs><filter id="instagram_svg__a" x="0" y="0" width="54.450001" height="54.450001" filterUnits="userSpaceOnUse"><feOffset/><feGaussianBlur stdDeviation="3" result="blur"/><feFlood flood-opacity=".161"/><feComposite operator="in" in2="blur" result="result1"/><feComposite in="SourceGraphic" in2="result1"/></filter></defs><g data-name="Group 1659"><g transform="translate(-9 -9)" filter="url(#instagram_svg__a)"><path data-name="Path 95" d="M27.225 9A18.225 18.225 0 1045.45 27.225 18.224 18.224 0 0027.225 9zm0 6.627z" fill="#f00075"/></g><g fill="#fff"><path d="M18.221 9.225c-2.444 0-2.751.01-3.711.054a6.609 6.609 0 00-2.185.418 4.412 4.412 0 00-1.594 1.038 4.411 4.411 0 00-1.038 1.594 6.607 6.607 0 00-.418 2.182c-.044.96-.054 1.266-.054 3.711s.01 2.751.054 3.711a6.606 6.606 0 00.418 2.185 4.412 4.412 0 001.039 1.593 4.412 4.412 0 001.589 1.041 6.608 6.608 0 002.185.418c.96.044 1.266.054 3.711.054s2.751-.01 3.711-.054a6.607 6.607 0 002.185-.418 4.412 4.412 0 001.594-1.038 4.412 4.412 0 001.038-1.594 6.606 6.606 0 00.418-2.185c.044-.96.054-1.266.054-3.711s-.01-2.751-.054-3.711a6.607 6.607 0 00-.418-2.185 4.411 4.411 0 00-1.038-1.594 4.412 4.412 0 00-1.594-1.038 6.609 6.609 0 00-2.185-.418c-.956-.043-1.263-.053-3.707-.053zm0 1.622c2.4 0 2.688.009 3.637.052a4.979 4.979 0 011.671.31 2.788 2.788 0 011.035.673 2.788 2.788 0 01.673 1.035 4.979 4.979 0 01.31 1.671c.043.949.052 1.234.052 3.637s-.009 2.688-.052 3.637a4.98 4.98 0 01-.31 1.671 2.789 2.789 0 01-.673 1.035 2.787 2.787 0 01-1.035.673 4.977 4.977 0 01-1.671.31c-.949.043-1.233.052-3.637.052s-2.688-.009-3.637-.052a4.977 4.977 0 01-1.671-.31 2.788 2.788 0 01-1.035-.673 2.789 2.789 0 01-.673-1.035 4.981 4.981 0 01-.31-1.671c-.043-.949-.052-1.234-.052-3.637s.009-2.688.052-3.637a4.979 4.979 0 01.31-1.671 2.788 2.788 0 01.673-1.035 2.788 2.788 0 011.035-.673 4.979 4.979 0 011.671-.31c.949-.043 1.234-.052 3.637-.052"/><path d="M18.221 21.224a3 3 0 01-3-3 3 3 0 013-3 3 3 0 013 3 3 3 0 01-3 3zm0-7.618a4.62 4.62 0 00-4.62 4.62 4.62 4.62 0 004.62 4.62 4.62 4.62 0 004.62-4.62 4.62 4.62 0 00-4.62-4.62M24.106 13.421a1.081 1.081 0 01-1.081 1.081 1.08 1.08 0 01-1.08-1.081 1.08 1.08 0 011.08-1.081 1.081 1.081 0 011.081 1.081"/></g></g></svg>';
                },
                652: (e) => {
                    e.exports =
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.45 36.45"><defs><filter id="line_svg__a" x="0" y="0" width="54.450001" height="54.450001" filterUnits="userSpaceOnUse"><feOffset/><feGaussianBlur stdDeviation="3" result="blur"/><feFlood flood-opacity=".161"/><feComposite operator="in" in2="blur" result="result1"/><feComposite in="SourceGraphic" in2="result1"/></filter></defs><g data-name="Group 1663"><g transform="translate(-9 -9)" filter="url(#line_svg__a)"><path data-name="Path 95" d="M27.225 9A18.225 18.225 0 1045.45 27.225 18.224 18.224 0 0027.225 9zm0 6.627z" fill="#4cc764"/></g><g data-name="Group 1669"><g data-name="Group 1666"><g data-name="Group 1664"><path data-name="Path 1307" d="M28.809 17.396c0-4.736-4.748-8.59-10.585-8.59-5.837 0-10.585 3.853-10.585 8.59 0 4.246 3.766 7.8 8.852 8.474.345.075.814.227.932.522a2.177 2.177 0 01.034.957s-.124.747-.151.906c-.046.267-.213 1.047.917.571a34.181 34.181 0 008.316-6.145 7.643 7.643 0 002.27-5.285z" fill="#fff"/></g><g data-name="Group 1665" transform="translate(11.112 15.107)" fill="#4cc764"><path data-name="Path 1308" d="M14.178 5.024a.2.2 0 00.2-.2v-.751a.2.2 0 00-.2-.2h-2.021v-.78h2.021a.2.2 0 00.2-.2v-.751a.2.2 0 00-.2-.2h-2.021v-.779h2.021a.2.2 0 00.2-.2V.212a.2.2 0 00-.2-.2h-2.974a.2.2 0 00-.2.2v4.603a.2.2 0 00.2.2h2.974z"/><path data-name="Path 1309" d="M3.176 5.024a.2.2 0 00.2-.2v-.751a.2.2 0 00-.2-.2H1.155V.206a.2.2 0 00-.2-.2H.204a.2.2 0 00-.2.2v4.609a.2.2 0 00.2.2h2.974z"/><rect data-name="Rectangle 138" width="1.155" height="5.024" rx=".577" transform="translate(4.013)"/><path data-name="Path 1310" d="M10.076 0h-.751a.2.2 0 00-.2.2v2.744L7.011.09a.167.167 0 00-.016-.021L6.983.056 6.972.047h-.005L6.956.04H6.95L6.939.034h-.006L6.921.029H6.1a.2.2 0 00-.2.2v4.619a.2.2 0 00.2.2h.751a.2.2 0 00.2-.2V2.105l2.116 2.858a.209.209 0 00.052.051l.013.008h.046a.209.209 0 00.053.007h.747a.2.2 0 00.2-.2V.21a.2.2 0 00-.202-.21z"/></g></g></g></g></svg>';
                },
                54: (e) => {
                    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.423 7.423"><path fill="none" stroke="#acacac" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.362 1.061L1.061 6.362"/></svg>';
                },
                78: (e) => {
                    e.exports =
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.45 36.45"><defs><filter id="phone_svg__a" x="0" y="0" width="54.450001" height="54.450001" filterUnits="userSpaceOnUse"><feOffset/><feGaussianBlur stdDeviation="3" result="blur"/><feFlood flood-opacity=".161"/><feComposite operator="in" in2="blur" result="result1"/><feComposite in="SourceGraphic" in2="result1"/></filter></defs><g data-name="Group 1671"><g transform="translate(-9 -9)" filter="url(#phone_svg__a)"><path data-name="Path 95" d="M27.225 9A18.225 18.225 0 1045.45 27.225 18.224 18.224 0 0027.225 9zm0 6.627z" fill="#3679ff"/></g><path data-name="Path 1311" d="M24.672 25.963l1.962-1.962a1.061 1.061 0 00-.01-1.511l-2.582-2.518a1.061 1.061 0 00-1.493.01l-1.806 1.806a.916.916 0 01-.121.1.084.084 0 00-.014.01.952.952 0 01-1.043.022l-.069-.043a15.592 15.592 0 01-2.737-2.182 15.592 15.592 0 01-2.178-2.735l-.043-.069a.952.952 0 01.022-1.043.084.084 0 01.01-.014.933.933 0 01.1-.121l1.805-1.805a1.064 1.064 0 00.006-1.5L13.965 9.83a1.063 1.063 0 00-1.51-.009l-1.963 1.963a2.939 2.939 0 00-.3 4.084 50.431 50.431 0 004.817 5.578 50.431 50.431 0 005.578 4.817 2.948 2.948 0 004.086-.3z" fill="#fff"/></g></svg>';
                },
                949: (e) => {
                    e.exports =
                        '<defs id="rasayel_svg__defs12"><style id="style10">.rasayel_svg__cls-5{fill:#fff}</style></defs><g id="rasayel_svg__Layer_2" data-name="Layer 2"><g id="rasayel_svg__Layer_1-2" data-name="Layer 1"><path d="M24.27 60.92a1.79 1.79 0 000-.23V30.35h-.06c0-.35.06-.71.06-1.07a12.15 12.15 0 00-24.27 0c0 .36 0 .72.05 1.07H0v30.34a12.15 12.15 0 0012.14 12.15h12.15V60.92z" id="rasayel_svg__path28" fill="#005de4"/><path d="M0 50.36s2.68-7.87 14.13-7.87h18.44v-10.8L0 31.81z" id="rasayel_svg__path30" fill="#0056bb"/><path d="M66.76 12.14A12.14 12.14 0 0054.62 0H42.48V42.48h.05c0 .36-.05.72-.05 1.08a12.14 12.14 0 0024.28 0c0-.36 0-.72-.05-1.08h.05z" id="rasayel_svg__path32" fill="#00c09b"/><circle class="rasayel_svg__cls-5" cx="51.58" cy="48.56" r="1.8" id="rasayel_svg__circle34"/><circle class="rasayel_svg__cls-5" cx="39.46" cy="48.56" r="1.8" id="rasayel_svg__circle36"/><circle class="rasayel_svg__cls-5" cx="27.35" cy="48.56" r="1.8" id="rasayel_svg__circle38"/><path d="M66.79 22.47s-2.69 7.88-14.14 7.88H34.22v10.8L66.79 41z" id="rasayel_svg__path40" fill="#00b491"/><path d="M51.76 36.42H24.3a12.14 12.14 0 100 24.27h30.32a12.13 12.13 0 0012.14-12.14V21.48a15.15 15.15 0 01-15 14.94z" id="rasayel_svg__path42" fill="#05d5a3"/><path d="M42.47 12.15H12.14A12.13 12.13 0 000 24.28v27.08a15.13 15.13 0 0115-14.94h27.47a12.14 12.14 0 100-24.27z" id="rasayel_svg__path44" fill="#3679ff"/><circle class="rasayel_svg__cls-5" cx="39.43" cy="24.35" r="1.8" id="rasayel_svg__circle46"/><circle class="rasayel_svg__cls-5" cx="27.32" cy="24.35" r="1.8" id="rasayel_svg__circle48"/><circle class="rasayel_svg__cls-5" cx="15.21" cy="24.35" r="1.8" id="rasayel_svg__circle50"/><circle class="rasayel_svg__cls-5" cx="27.36" cy="48.48" r="1.8" id="rasayel_svg__circle52"/><circle class="rasayel_svg__cls-5" cx="39.47" cy="48.48" r="1.8" id="rasayel_svg__circle54"/><circle class="rasayel_svg__cls-5" cx="51.58" cy="48.48" r="1.8" id="rasayel_svg__circle56"/></g></g></>';
                },
                938: (e) => {
                    e.exports =
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.45 36.45"><defs><filter id="sms_svg__a" x="0" y="0" width="54.450001" height="54.450001" filterUnits="userSpaceOnUse"><feOffset/><feGaussianBlur stdDeviation="3" result="blur"/><feFlood flood-opacity=".161"/><feComposite operator="in" in2="blur" result="result1"/><feComposite in="SourceGraphic" in2="result1"/></filter></defs><g data-name="Group 1624"><g filter="url(#sms_svg__a)" data-name="Group 1590" transform="translate(-9 -9)"><path data-name="Path 95" d="M27.225 9A18.225 18.225 0 1045.45 27.225 18.224 18.224 0 0027.225 9zm0 6.627z" fill="#3679ff"/></g><path data-name="Path 1288" d="M10.795 22.185c1.617 0 2.75-.858 2.75-2.3v-.021c0-1.276-.836-1.859-2.464-2.255-1.485-.352-1.837-.616-1.837-1.21v-.024c0-.506.462-.913 1.254-.913a3.2 3.2 0 011.766.585.654.654 0 00.352.1.629.629 0 00.638-.627.611.611 0 00-.3-.539 4.237 4.237 0 00-2.434-.716 2.355 2.355 0 00-2.629 2.233v.022c0 1.419.924 1.9 2.563 2.3 1.43.33 1.738.627 1.738 1.177v.022c0 .572-.528.968-1.364.968a3.339 3.339 0 01-2.156-.792.655.655 0 00-1.034.506.635.635 0 00.264.517 4.794 4.794 0 002.893.967zm3.685-.71a.648.648 0 00.66.66.657.657 0 00.671-.66v-4.614l1.87 2.805a.632.632 0 001.133 0l1.881-2.827v4.62a.681.681 0 00.671.671.669.669 0 00.682-.671v-6.446a.678.678 0 00-.682-.682h-.143a.681.681 0 00-.616.352l-2.343 3.663-2.332-3.652a.712.712 0 00-.627-.363h-.141a.678.678 0 00-.682.682zm11.584.71c1.617 0 2.75-.858 2.75-2.3v-.021c0-1.276-.836-1.859-2.464-2.255-1.485-.352-1.837-.616-1.837-1.21v-.024c0-.506.462-.913 1.254-.913a3.2 3.2 0 011.771.583.654.654 0 00.352.1.629.629 0 00.638-.627.611.611 0 00-.3-.539 4.237 4.237 0 00-2.442-.715 2.355 2.355 0 00-2.629 2.233v.022c0 1.419.924 1.9 2.563 2.3 1.43.33 1.738.627 1.738 1.177v.022c0 .572-.528.968-1.364.968a3.339 3.339 0 01-2.156-.792.655.655 0 00-1.034.506.635.635 0 00.264.517 4.794 4.794 0 002.896.968z" fill="#fff"/></g></svg>';
                },
                450: (e) => {
                    e.exports =
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="none" fill-rule="evenodd" transform="scale(.1)"><circle fill="#2AABEE" cx="500" cy="500" r="500"/><path d="M226.328 494.722c145.76-63.505 242.957-105.372 291.59-125.6 138.855-57.755 167.707-67.787 186.513-68.118 4.137-.073 13.385.952 19.375 5.813 5.059 4.104 6.45 9.649 7.117 13.54.666 3.892 1.495 12.757.836 19.684-7.525 79.061-40.084 270.924-56.648 359.474-7.009 37.47-20.81 50.033-34.17 51.262-29.036 2.672-51.085-19.189-79.208-37.624-44.006-28.847-68.867-46.804-111.583-74.953-49.366-32.531-17.364-50.411 10.77-79.631C468.281 550.92 596.214 434.556 598.69 424c.31-1.32.597-6.241-2.326-8.84-2.924-2.598-7.239-1.71-10.353-1.003-4.413 1.002-74.714 47.468-210.902 139.4-19.955 13.702-38.03 20.378-54.223 20.028-17.853-.386-52.194-10.094-77.723-18.393-31.313-10.178-56.2-15.56-54.032-32.846 1.128-9.003 13.527-18.211 37.196-27.624z" fill="#fff"/></g></svg>';
                },
                692: (e) => {
                    e.exports =
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.45 36.45"><defs><filter id="twitter_svg__a" x="0" y="0" width="54.450001" height="54.450001" filterUnits="userSpaceOnUse"><feOffset/><feGaussianBlur stdDeviation="3" result="blur"/><feFlood flood-opacity=".161"/><feComposite operator="in" in2="blur" result="result1"/><feComposite in="SourceGraphic" in2="result1"/></filter></defs><g data-name="Group 1658"><g transform="translate(-9 -9)" filter="url(#twitter_svg__a)"><path data-name="Path 95" d="M27.225 9A18.225 18.225 0 1045.45 27.225 18.224 18.224 0 0027.225 9zm0 6.627z" fill="#1da1f2"/></g><path data-name="Path 1301" d="M15.539 26.186a10.487 10.487 0 0010.559-10.559c0-.161 0-.321-.011-.48a7.55 7.55 0 001.851-1.921 7.407 7.407 0 01-2.131.584 3.724 3.724 0 001.632-2.053 7.437 7.437 0 01-2.357.9 3.715 3.715 0 00-6.324 3.381 10.536 10.536 0 01-7.648-3.877 3.714 3.714 0 001.149 4.954 3.684 3.684 0 01-1.684-.465v.047a3.712 3.712 0 002.976 3.641 3.705 3.705 0 01-1.676.064 3.715 3.715 0 003.467 2.577 7.446 7.446 0 01-4.609 1.592 7.556 7.556 0 01-.883-.054 10.506 10.506 0 005.688 1.664" fill="#fff"/></g></svg>';
                },
                23: (e) => {
                    e.exports =
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.45 36.45"><defs><filter id="viber_svg__a" x="0" y="0" width="54.450001" height="54.450001" filterUnits="userSpaceOnUse"><feOffset/><feGaussianBlur stdDeviation="3" result="blur"/><feFlood flood-opacity=".161"/><feComposite operator="in" in2="blur" result="result1"/><feComposite in="SourceGraphic" in2="result1"/></filter></defs><g data-name="Group 1661"><g transform="translate(-9 -9)" filter="url(#viber_svg__a)"><path data-name="Path 95" d="M27.225 9A18.225 18.225 0 1045.45 27.225 18.224 18.224 0 0027.225 9zm0 6.627z" fill="#7360f2"/></g><g data-name="logo icon white" fill="#fff"><path data-name="Path 296" d="M25.331 10.461c-.479-.444-2.419-1.852-6.737-1.87 0 0-5.095-.31-7.6 1.969-1.385 1.385-1.87 3.406-1.922 5.913-.052 2.507-.117 7.2 4.411 8.478v1.946s0 .789.491.947c.625.2.993-.4 1.6-1.046.327-.356.783-.876 1.122-1.274a17.423 17.423 0 005.749-.421c.625-.2 4.166-.654 4.744-5.358.614-4.844-.264-7.905-1.858-9.284zm.526 8.939c-.491 3.921-3.36 4.166-3.885 4.335a16.016 16.016 0 01-4.949.427s-1.963 2.337-2.577 2.98a.333.333 0 01-.28.117c-.105-.029-.134-.152-.134-.333v-3.235c-3.833-1.069-3.611-5.066-3.564-7.157.047-2.091.438-3.809 1.607-4.966 2.1-1.9 6.427-1.618 6.427-1.618 3.652 0 5.4 1.116 5.808 1.484 1.36 1.157 2.044 3.917 1.547 7.966z"/><path data-name="Path 297" d="M20.371 16.608a.245.245 0 01-.245-.234 1.169 1.169 0 00-1.227-1.274.246.246 0 11.029-.491 1.642 1.642 0 011.689 1.753.245.245 0 01-.234.257z"/><path data-name="Path 298" d="M21.627 17.028a.245.245 0 01-.24-.251 2.816 2.816 0 00-.73-2.063 3.044 3.044 0 00-2.127-.929.245.245 0 11.035-.485 3.547 3.547 0 012.454 1.081 3.313 3.313 0 01.847 2.384.24.24 0 01-.24.263z"/><path data-name="Path 299" d="M22.906 17.53a.245.245 0 01-.245-.245 4.674 4.674 0 00-1.315-3.506 4.5 4.5 0 00-3.237-1.28.2455.2455 0 110-.491 5 5 0 013.576 1.42 5.189 5.189 0 011.461 3.833.245.245 0 01-.245.245z"/><path data-name="Path 300" d="M18.963 19.634a.666.666 0 00.526-.2l.362-.456a.783.783 0 011-.134 10.192 10.192 0 01.9.584c.275.2.83.666.83.672a.684.684 0 01.146.9 3.762 3.762 0 01-.748.923 1.49 1.49 0 01-.765.368.327.327 0 01-.111 0 1.021 1.021 0 01-.321-.047 11.4 11.4 0 01-2.092-.97 12.235 12.235 0 01-1.753-1.169 9.218 9.218 0 01-.789-.7h-.029a10.369 10.369 0 01-.7-.795 12.741 12.741 0 01-1.169-1.753 11.055 11.055 0 01-.964-2.092 1.063 1.063 0 01-.053-.327.584.584 0 010-.111 1.455 1.455 0 01.368-.76 3.792 3.792 0 01.824-.894.689.689 0 01.906.146s.467.584.666.83a9.718 9.718 0 01.584.9.8.8 0 01-.14 1l-.456.356a.678.678 0 00-.2.532 4.727 4.727 0 003.178 3.19z"/></g></g></svg>';
                },
                60: (e) => {
                    e.exports =
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.45 36.45"><defs><filter id="vk_svg__a" x="0" y="0" width="54.450001" height="54.450001" filterUnits="userSpaceOnUse"><feOffset/><feGaussianBlur stdDeviation="3" result="blur"/><feFlood flood-opacity=".161"/><feComposite operator="in" in2="blur" result="result1"/><feComposite in="SourceGraphic" in2="result1"/></filter></defs><g data-name="Group 1677"><g transform="translate(-9 -9)" filter="url(#vk_svg__a)"><path data-name="Path 95" d="M27.225 9A18.225 18.225 0 1045.45 27.225 18.224 18.224 0 0027.225 9zm0 6.627z" fill="#2787f5"/></g><path data-name="Path 1314" d="M28.125 13.77c.148-.493 0-.855-.7-.855h-2.33a1 1 0 00-1.012.658 19.459 19.459 0 01-2.859 4.756c-.542.542-.789.715-1.084.715-.148 0-.362-.173-.362-.665V13.77c0-.591-.172-.855-.665-.855h-3.655a.561.561 0 00-.592.535c0 .561.838.69.924 2.267v3.425c0 .751-.136.887-.431.887-.789 0-2.707-2.9-3.844-6.21-.223-.644-.447-.9-1.041-.9H8.15c-.665 0-.8.313-.8.658 0 .616.789 3.672 3.672 7.713a9.063 9.063 0 007.095 4.256c1.479 0 1.662-.332 1.662-.9v-2.094c0-.665.14-.8.608-.8.345 0 .936.172 2.317 1.5 1.577 1.577 1.837 2.285 2.724 2.285h2.322c.665 0 1-.332.805-.988a9.987 9.987 0 00-1.962-2.726c-.542-.641-1.355-1.331-1.6-1.676-.345-.444-.246-.641 0-1.035.002.003 2.836-3.987 3.132-5.342z" fill="#fff" fill-rule="evenodd"/></g></svg>';
                },
                46: (e) => {
                    e.exports =
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.45 36.45"><defs><filter id="wechat_svg__a" x="0" y="0" width="54.450001" height="54.450001" filterUnits="userSpaceOnUse"><feOffset/><feGaussianBlur stdDeviation="3" result="blur"/><feFlood flood-opacity=".161"/><feComposite operator="in" in2="blur" result="result1"/><feComposite in="SourceGraphic" in2="result1"/></filter></defs><g data-name="Group 1662"><g transform="translate(-9 -9)" filter="url(#wechat_svg__a)"><path data-name="Path 95" d="M27.225 9A18.225 18.225 0 1045.45 27.225 18.224 18.224 0 0027.225 9zm0 6.627z" fill="#05c863"/></g><g fill="#fff" fill-rule="evenodd"><path data-name="Path 1305" d="M24.392 19.943a.842.842 0 11.842-.842.854.854 0 01-.842.842m-4.15 0a.842.842 0 11.842-.842.854.854 0 01-.842.842m6.159 4.727a4.845 4.845 0 002.142-3.9c0-2.858-2.764-5.163-6.2-5.163-3.436 0-6.2 2.3-6.2 5.163 0 2.863 2.764 5.163 6.2 5.163a7.3 7.3 0 002.027-.277.449.449 0 01.184-.023.749.749 0 01.322.092l1.359.784c.046.023.069.046.115.046a.206.206 0 00.207-.207c0-.046-.023-.092-.023-.161 0-.023-.184-.645-.276-1.037a.292.292 0 01-.023-.138.326.326 0 01.161-.346"/><path data-name="Path 1306" d="M17.775 15.071a.962.962 0 11.962-.962.97.97 0 01-.962.962m-4.932 0a.962.962 0 11.962-.962.97.97 0 01-.962.962m2.523-5.173c-4.109 0-7.456 2.761-7.456 6.188a5.754 5.754 0 002.585 4.67.521.521 0 01.208.414c0 .046-.023.115-.023.161-.115.46-.323 1.219-.346 1.242a.541.541 0 00-.046.184.256.256 0 00.254.253.329.329 0 00.139-.046l1.639-.943a.78.78 0 01.392-.115.64.64 0 01.208.023 9.344 9.344 0 002.424.345h.416a4.761 4.761 0 01-.254-1.518c0-3.106 3.047-5.636 6.787-5.636h.417c-.534-2.968-3.627-5.222-7.344-5.222"/></g></g></svg>';
                },
                116: (e) => {
                    e.exports =
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.456 79.454"><defs><linearGradient id="whatsapp_svg__b" x1="56.835" y1="63.035" x2="56.835" gradientUnits="userSpaceOnUse" gradientTransform="scale(.99785 1.00216)" y2="39.819"><stop offset="0" stop-color="#20b038"/><stop offset="1" stop-color="#60d66a"/></linearGradient><linearGradient id="whatsapp_svg__c" x1="49.989" y1="56.594" x2="49.989" gradientUnits="userSpaceOnUse" gradientTransform="scale(.99785 1.00215)" y2="32.54"><stop offset="0" stop-color="#f9f9f9"/><stop offset="1" stop-color="#fff"/></linearGradient><filter id="whatsapp_svg__a" x="0" y="0" width="29.167" height="29.271" filterUnits="userSpaceOnUse"><feOffset/><feGaussianBlur stdDeviation="1" result="blur"/><feFlood flood-opacity=".161"/><feComposite operator="in" in2="blur" result="result1"/><feComposite in="SourceGraphic" in2="result1"/></filter></defs><g data-name="Asset 2"><g data-name="Layer 2"><g data-name="WhatsApp Logo"><g transform="matrix(3.42984 0 0 3.41505 -10.29 -10.262)" filter="url(#whatsapp_svg__a)"><path data-name="shape 3" d="M45.13 63.171l1.637-5.971a11.535 11.535 0 1110 5.775h-.005a11.532 11.532 0 01-5.511-1.4z" transform="translate(-42.13 -36.9)" fill="url(#whatsapp_svg__b)"/></g><g data-name="shape 2"><path data-name="Path 1219" d="M37.88 56.716l1.7-6.187a11.95 11.95 0 1110.354 5.981 11.94 11.94 0 01-5.71-1.454zm6.627-3.823l.363.215a9.922 9.922 0 005.055 1.384 9.929 9.929 0 10-8.413-4.653l.237.375-1 3.664z" transform="matrix(3.42984 0 0 3.41505 -131.363 -112.816)" fill="url(#whatsapp_svg__c)"/></g><g data-name="shape 1"><path data-name="Path 1220" d="M29.658 22.287c-.768-1.708-1.571-1.732-2.305-1.763-.59-.027-1.28-.023-1.965-.023a3.773 3.757 0 00-2.744 1.277 11.48 11.43 0 00-3.584 8.503 19.914 19.828 0 004.18 10.546 42.043 41.862 0 0017.493 15.388c8.646 3.398 10.413 2.732 12.286 2.544a10.386 10.34 0 006.91-4.85 8.437 8.401 0 00.59-4.845c-.264-.427-.94-.683-1.965-1.188-1.025-.506-6.057-2.978-6.997-3.316-.94-.339-1.622-.513-2.304.512-.683 1.024-2.645 3.312-3.242 3.995-.596.683-1.193.769-2.219.257a27.97 27.85 0 01-8.231-5.062 30.615 30.483 0 01-5.697-7.062c-.59-1.024-.062-1.564.449-2.08.46-.457 1.029-1.192 1.537-1.786a6.952 6.922 0 001.028-1.707 1.88 1.871 0 00-.085-1.786c-.268-.496-2.24-5.54-3.135-7.554z" fill="#fff" fill-rule="evenodd"/></g></g></g></g></svg>';
                },
            },
            a = {};
        function t(n) {
            var i = a[n];
            if (void 0 !== i) return i.exports;
            var l = (a[n] = { id: n, exports: {} });
            return e[n](l, l.exports, t), l.exports;
        }
        (t.n = (e) => {
            var a = e && e.__esModule ? () => e.default : () => e;
            return t.d(a, { a }), a;
        }),
            (t.d = (e, a) => {
                for (var n in a) t.o(a, n) && !t.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
            }),
            (t.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a));
        var n = {};
        return (
            (() => {
                t.d(n, { default: () => p });
                const e = t(735),
                    a = t(949),
                    i = { FACEBOOK: t(758), TELEGRAM: t(450), WABA: t(116), EMAIL: t(125), SMS: t(938), INSTAGRAM: t(789), LINE: t(652), VIBER: t(23), PHONE: t(78), ABC: t(209), WECHAT: t(46), TWITTER: t(692), VK: t(60) };
                function l(e, a) {
                    var t;
                    const n = { TELEGRAM: (e) => `@${e}`, FACEBOOK: (e) => `m.me/${e}`, TWITTER: (e) => `@${e}` };
                    return (null === (t = n[a]) || void 0 === t ? void 0 : t.call(n, e)) || e;
                }
                function s(e, a) {
                    var t;
                    const n = {
                        WABA: (e) => `https://wa.me/${e}`,
                        TELEGRAM: (e) => `https://t.me/${e}`,
                        FACEBOOK: (e) => `https://m.me/${e}`,
                        EMAIL: (e) => `mailto:${e}`,
                        SMS: (e) => `sms:${e}`,
                        INSTAGRAM: (e) => `https://www.instagram.com/${e}`,
                        TWITTER: (e) => `https://twitter.com/${e}`,
                        VIBER: (e) => `viber://chat?number=${e}`,
                        WECHAT: (e) => `weixin://dl/chat?${e}`,
                        LINE: (e) => `https://line.me/R/${e}`,
                        ABC: (e) => `https://bcrw.apple.com/urn:biz:${e}`,
                        PHONE: (e) => `tel:${e}`,
                        VK: (e) => `https://vk.com/${e}`,
                    };
                    return null === (t = n[a]) || void 0 === t ? void 0 : t.call(n, e);
                }
                function r(e) {
                    return (
                        {
                            FACEBOOK: "Facebook",
                            TELEGRAM: "Telegram",
                            WABA: "WhatsApp",
                            EMAIL: "Email",
                            SMS: "SMS",
                            INSTAGRAM: "Instagram",
                            TWITTER: "Twitter",
                            VIBER: "Viber",
                            WECHAT: "WeChat",
                            LINE: "LINE",
                            ABC: "ABC",
                            PHONE: "Call us",
                            VK: "VKontakte",
                        }[e] || e.toLowerCase()
                    );
                }
                var o = t(383);
                const c = "rasayel-omnichannel-widget";
                class d {
                    static create(t, n) {
                        var i, l;
                        if ((this.instance && this.destroy(), (this.instance = new d()), this.update(t), null === (i = null == n ? void 0 : n.attachToDocument) || void 0 === i || i)) {
                            this.isDefined ||
                            (function (t) {
                                const n = document.createElement("template"),
                                    i = (function () {
                                        const a = document.createElement("button");
                                        return (a.type = "button"), (a.className = "omnichannel-button"), (a.innerHTML = e), a;
                                    })(),
                                    { channels: l, title: s, message: r, minimal: p } = d.config,
                                    m = f(l, p),
                                    u = h(s, r),
                                    g = (function () {
                                        const e = document.createElement("a");
                                        return (e.className = "omnichannel-powered-by"), (e.innerHTML = `${a}`), (e.href = "https://rasayel.io"), (e.target = "_blank"), (e.rel = "noopener"), e;
                                    })(),
                                    v = t ? "is-fixed" : "";
                                n.innerHTML = `\n    <style>${o.Z.toString()}</style>\n    <div class="omnichannel-widget-wrapper ${v}">\n    <div class="omnichannel-widget-popup is-hidden">\n      ${u.outerHTML}\n      ${
                                    m.outerHTML
                                }\n      ${g.outerHTML}\n    </div>\n      ${i.outerHTML}\n    </div>\n  `;
                                class x extends HTMLElement {
                                    constructor() {
                                        super(), this.attachShadow({ mode: "open" }).appendChild(n.content.cloneNode(!0));
                                    }
                                    update() {
                                        var e, a, t, n;
                                        const { channels: i, minimal: l, title: s, message: r } = d.config,
                                            o = f(i, l),
                                            c = h(s, r),
                                            p = null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.querySelector("ul"),
                                            m = null === (a = this.shadowRoot) || void 0 === a ? void 0 : a.querySelector(".omnichannel-header"),
                                            u = null === (t = this.shadowRoot) || void 0 === t ? void 0 : t.querySelector(".omnichannel-widget-popup");
                                        null == p || p.remove(), null == u || u.appendChild(o), null == m || m.remove(), null == u || u.appendChild(c);
                                        const g = null === (n = this.shadowRoot) || void 0 === n ? void 0 : n.querySelector(".omnichannel-header-minimize-button");
                                        null == g ||
                                        g.addEventListener("click", () => {
                                            this.close();
                                        });
                                    }
                                    open() {
                                        var e;
                                        const a = null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.querySelector(".omnichannel-widget-popup");
                                        null == a || a.classList.toggle("is-hidden", !1);
                                    }
                                    close() {
                                        var e;
                                        const a = null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.querySelector(".omnichannel-widget-popup");
                                        null == a || a.classList.toggle("is-hidden", !0);
                                    }
                                    connectedCallback() {
                                        var e;
                                        const a = null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.querySelector(".omnichannel-button");
                                        null == a ||
                                        a.addEventListener("click", () => {
                                            var e;
                                            const a = null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.querySelector(".omnichannel-widget-popup");
                                            null == a || a.classList.toggle("is-hidden");
                                        }),
                                            this.update();
                                    }
                                }
                                customElements.get(c) || customElements.define(c, x), (d.isDefined = !0);
                            })(null === (l = null == n ? void 0 : n.fixedPosition) || void 0 === l || l);
                            const t = document.createElement(c, { is: c });
                            ((null == n ? void 0 : n.containerElm) || document.body).appendChild(t), (this.instance.component = t);
                        }
                    }
                    static get config() {
                        return { channels: this.instance.channels, title: this.instance.title, message: this.instance.message, minimal: this.instance.minimal };
                    }
                    static update(e) {
                        var a, t;
                        (null == e ? void 0 : e.channels) &&
                        (this.instance.channels = e.channels
                            .filter((e) => {
                                return e && ((a = e.type), Object.keys(i).includes(a));
                                var a;
                            })
                            .map((e) => ({
                                type: e.type,
                                href: s(e.identifier, e.type),
                                icon: i[e.type],
                                identifier: e.identifier,
                                name: e.friendlyName || r(e.type),
                                channelName: r(e.type),
                                formattedIdentifier: l(e.identifier, e.type),
                            }))),
                        (null == e ? void 0 : e.title) && (this.instance.title = e.title),
                        (null == e ? void 0 : e.message) && (this.instance.message = e.message),
                            (this.instance.minimal = null !== (a = null == e ? void 0 : e.minimal) && void 0 !== a ? a : this.instance.minimal),
                        null === (t = this.instance.component) || void 0 === t || t.update();
                    }
                    static destroy() {
                        this.instance.component && document.body.removeChild(this.instance.component);
                    }
                    static open() {
                        var e;
                        null === (e = this.instance.component) || void 0 === e || e.open();
                    }
                    static close() {
                        var e;
                        null === (e = this.instance.component) || void 0 === e || e.close();
                    }
                }
                function f(e, a) {
                    const t = e.map((e) => {
                            const t = document.createElement("a");
                            (t.href = e.href),
                            "EMAIL" !== e.type && ((t.target = "_blank"), (t.rel = "noopener")),
                                (t.innerHTML = `\n    ${e.icon}\n    <div class="omnichannel-channel-item-info">\n      <p class="omnichannel-channel-item-info-title">${e.name}</p>\n      <p class="omnichannel-channel-item-info-id">${e.formattedIdentifier}</p>\n    </div>\n  `);
                            const n = document.createElement("li");
                            return (n.className = "omnichannel-channel-item"), n.appendChild(t), a && (n.title = e.channelName), n;
                        }),
                        n = document.createElement("ul");
                    return (n.className = "omnichannel-channels " + (a ? "is-minimal" : "")), n.append(...t), n;
                }
                function h(e, a) {
                    const n = document.createElement("div");
                    n.className = "omnichannel-header";
                    const i = document.createElement("p");
                    if (((i.textContent = e), (i.className = "omnichannel-header-title"), n.appendChild(i), a)) {
                        const e = document.createElement("p");
                        (e.className = "omnichannel-header-message"), (e.textContent = a), n.appendChild(e);
                    }
                    const l = document.createElement("button");
                    return (l.type = "button"), (l.className = "omnichannel-header-minimize-button"), (l.innerHTML = t(54)), n.appendChild(l), n;
                }
                d.isDefined = !1;
                const p = d;
            })(),
                n.default
        );
    })();
});
