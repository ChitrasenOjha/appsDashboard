sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History"
], function (Controller, History) {
  "use strict";

  return Controller.extend("project1.controller.CategoryDetails", {

    onInit: function () {
      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.getRoute("CategoryDetails").attachMatched(this._onRouteMatched, this);
    },

    _onRouteMatched: function (oEvent) {
      var sCategoryID = oEvent.getParameter("arguments").CategoryID;

      var sPath = "/Categories(" + sCategoryID + ")";

      this.getView().bindElement({
        path: sPath
      });
    },

    onNavBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("Products", {}, true);
      }
    }

  });
});
