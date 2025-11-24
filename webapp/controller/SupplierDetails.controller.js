sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.SupplierDetails", {

        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("SupplierDetails").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {
            var sSupplierID = oEvent.getParameter("arguments").SupplierID;
            var sPath = "/Suppliers(" + sSupplierID + ")";

            this.getView().bindElement({
                path: sPath
            });
        },

        onNavBack: function () {
            history.go(-1);
        }

    });
});
