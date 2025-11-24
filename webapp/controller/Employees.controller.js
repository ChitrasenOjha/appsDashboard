sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, History, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("project1.controller.Employees", {

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
      var sQuery = oEvent.getParameter("newValue"); // liveChange uses "newValue"
      var oTable = this.byId("EmployeesTable");
      var oBinding = oTable.getBinding("items");

      if (oBinding) {
        if (sQuery) {
          var oFilter = new Filter({
            filters: [
              new Filter("FirstName", FilterOperator.Contains, sQuery),
              new Filter("LastName", FilterOperator.Contains, sQuery),
              new Filter("Title", FilterOperator.Contains, sQuery)
            ],
            and: false
          });
          oBinding.filter([oFilter]);
        } else {
          oBinding.filter([]); // clear filter if empty
        }
      }
    },
    onEmployeePress: function (oEvent) {
      var oItem = oEvent.getSource();
      var oCtx = oItem.getBindingContext();

      var sEmployeeID = oCtx.getProperty("EmployeeID");

      this.getOwnerComponent()
        .getRouter()
        .navTo("EmployeeDetails", { employeeId: sEmployeeID });
    }


  });
});

