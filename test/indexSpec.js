/*global define, describe, beforeEach, afterEach, it*/
define(function (require) {
    'use strict';

    describe('index', function () {
        var sut,
            $,
            ajaxSpy,
            sinon;
        beforeEach(function (done) {
            sut = require('index');
            $ = require('jquery');
            sinon = require('sinon');
            ajaxSpy=sinon.spy($, 'ajax');
            done();
        });
        describe('when loading our module', function () {
            it('should exist', function () {
                sut.should.not.be.null;
            });
        });

        describe('when starting the application', function () {
            it('should load tasks from the server', function () {
                ajaxSpy.should.have.been.called('api/tasks', {
                    method: 'GET'
                });
            });
        });
    });
});