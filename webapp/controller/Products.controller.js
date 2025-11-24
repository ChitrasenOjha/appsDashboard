sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, History, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("project1.controller.Products", {

    // Back navigation
    onNavBack: function () {
      const oHistory = History.getInstance();
      const sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("Home", {}, true);
      }
    },

    // Search functionality
    onSearch: function (oEvent) {
      var sQuery = oEvent.getParameter("newValue"); // for liveChange
      var oTable = this.byId("productsTable");
      var oBinding = oTable.getBinding("items");

      if (!oBinding) {
        return;
      }

      if (sQuery && sQuery.length > 0) {
        var oFilter = new Filter({
          filters: [
            new Filter("ProductName", FilterOperator.Contains, sQuery),
            new Filter("QuantityPerUnit", FilterOperator.Contains, sQuery)
          ],
          and: false
        });
        oBinding.filter([oFilter]);
      } else {
        oBinding.filter([]); // clear filter if search is empty
      }
    }

  });
});
