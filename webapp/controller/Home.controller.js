sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("project1.controller.Home", {
    onProductsPress: function () {
      this.getOwnerComponent().getRouter().navTo("Products");
    },

    onEmployeesPress: function () {
      this.getOwnerComponent().getRouter().navTo("Employees");
    }
  });
});
