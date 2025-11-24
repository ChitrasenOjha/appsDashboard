sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("project1.controller.ProductDetails", {

    onInit: function () {
      this.getOwnerComponent().getRouter()
        .getRoute("ProductDetails")
        .attachPatternMatched(this._onRouteMatched, this);
    },

    _onRouteMatched: function (oEvent) {
      var productId = oEvent.getParameter("arguments").ProductID;

      // Bind full product details
      var sPath = "/Products(" + productId + ")";
      this.getView().bindElement({
        path: sPath
      });
    },

    onNavBack: function () {
      history.go(-1);
    }

  });
});
