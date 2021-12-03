sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/base/Log",
    "sap/btp/pruebaentrevista/model/models"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.base.Log} Log
	 */
	function (Controller, Log, JSONModel, models) {
		"use strict";
        var oExternalData;
		return Controller.extend("sap.btp.pruebaentrevista.controller.Entrevista", {
			onInit: function () {
                var that = this;
                models.createAjaxExternalCallList().then(function(oResponse){
                    var oModel = new sap.ui.model.json.JSONModel();
                    oModel.setData(oResponse);
                    that.getView().setModel(oModel, "externalData");
                    console.log(that.byId("gridList").getModel("externalData"));
                });
			},
            handleListItemPress: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var idCharacter =  361; //oEvent.getSource().getBindingContext().getProperty("id");
                oRouter.navTo("detalle", {
                    id: idCharacter
                });
            }
            
		});
	});
