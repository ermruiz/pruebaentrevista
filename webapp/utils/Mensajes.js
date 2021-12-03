sap.ui.define([
	"sap/m/MessageBox"
], function (MessageBox) {
	"use strict";

	return {

		showMessageError: function (error) {
			MessageBox.error("Error message", {
				title: "Error",
				id: "messageBoxId1",
				details: error,
				styleClass: "sapUiSizeCompact",
				contentWidth: "100px"
			});
		},
		
		showMessageInformation: function (info) {
			MessageBox.information("Information message", {
				title: "Información",
				id: "messageBoxId2",
				details: info,
				styleClass: "sapUiSizeCompact",
				contentWidth: "100px"
			});
		}

	};
});