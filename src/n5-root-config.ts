import { registerApplication, start } from "single-spa";

registerApplication({
    name: "@n5/mf-header",
    app: () => System.import("@n5/mf-header"),
    activeWhen: ["/home"]
});
 registerApplication({
   name: "@n5/mf-character",
   app: () => System.import("@n5/mf-character"),
   activeWhen: ["/mf-character"]
 });
registerApplication({
    name: "@n5/mf-main",
    app: () => System.import("@n5/mf-main"),
    activeWhen: ["/home"]
});
start({
  urlRerouteOnly: true,
});
