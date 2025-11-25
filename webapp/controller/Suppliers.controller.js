sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/ui/core/routing/History"
], function (Controller, Filter, FilterOperator, History) {
  "use strict";

  return Controller.extend("project1.controller.Suppliers", {

    onNavBack: function () {
      const oHistory = History.getInstance();
      const sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("Home", {}, true);
      }
    },

    // Search Suppliers
    onSearch: function (oEvent) {
      var sQuery = oEvent.getParameter("newValue");
      var oTable = this.byId("SuppliersTable");
      var oBinding = oTable.getBinding("items");

      if (oBinding) {
        if (sQuery) {
          var oFilter = new Filter({
            filters: [
              new Filter("CompanyName", FilterOperator.Contains, sQuery),
              new Filter("ContactName", FilterOperator.Contains, sQuery),
              new Filter("City", FilterOperator.Contains, sQuery)
            ],
            and: false
          });
          oBinding.filter([oFilter]);
        } else {
          oBinding.filter([]);
        }
      }
    }

  });
});
