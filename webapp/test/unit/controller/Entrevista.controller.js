/*global QUnit*/

sap.ui.define([
	"sapbtp./pruebaentrevista/controller/Entrevista.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Entrevista Controller");

	QUnit.test("I should test the Entrevista controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
