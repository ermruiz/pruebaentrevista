sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
    "sap/ui/core/BusyIndicator",
    "sap/btp/pruebaentrevista/utils/Mensajes"
], function (JSONModel, Device, BusyIndicator, Mensajes) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
        createAjaxExternalCallList: function (oData) {
            BusyIndicator.show();
			return new Promise(function (resolve, reject) {
				$.ajax({
					url: "https://rickandmortyapi.com/api/character/?page=19",
					method: "GET",
					dataType: "json",
					//crossDomain: true,
					cache: false,
					contentType: "application/json; charset=utf-8",
					//data: JSON.stringify(oData),
					success: function (result) {
                        BusyIndicator.hide();
						resolve(result);

					},
					error: function (err) {
                        BusyIndicator.hide();
						Mensajes.showMessageError(err);
					}
				});
			});
		},
        createAjaxExternalCallCharacter: function (id) {
            BusyIndicator.show();
			return new Promise(function (resolve, reject) {
				$.ajax({
					url: "https://rickandmortyapi.com/api/character/" + id,
					method: "GET",
					dataType: "json",
					//crossDomain: true,
					cache: false,
					contentType: "application/json; charset=utf-8",
					//data: JSON.stringify(oData),
					success: function (result) {
                        BusyIndicator.hide();
						resolve(result);

					},
					error: function (err) {
                        BusyIndicator.hide();
						Mensajes.showMessageError(err);
					}
				});
			});
		}
		

	};
});