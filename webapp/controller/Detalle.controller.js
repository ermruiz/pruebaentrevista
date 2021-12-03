sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/btp/pruebaentrevista/model/models",
    "sap/ui/model/json/JSONModel",
    ],
    function (Controller,  models,JSONModel) {
        "use strict";
    
        return Controller.extend("sap.btp.pruebaentrevista.controller.Detalle", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("detalle").attachMatched(this._onRouteMatched, this);
            },
            _onRouteMatched: function (oEvent) {
                var oArgs, oView;
                oArgs = oEvent.getParameter("arguments");
                oView = this.getView();
                console.log(oArgs)
                models.createAjaxExternalCallCharacter(oArgs.id).then(function(oResponse){
                    var oModel = new JSONModel();
                    oModel.setData(oResponse);
                    oView.setModel(oModel, "characterData");
                    console.log(oView.getModel("characterData"));
                });
            },
    
            handleNavButtonPress: function (evt) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("home");
            },
        });
    });