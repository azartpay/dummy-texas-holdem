/**
 * Created by dummy-team
 * 2017-12-04
 */

require('../poem/configuration/constants');
var logger = require('../poem/logging/logger4js').helper;
var ErrorCode = require('../constants/error_code.js');
var errorCode = new ErrorCode();
var RequestSender = require('../poem/http/request.js');
var Map = require('../poem/mem/map.js');

var LIST_BOARDS_SERVICE = '/board/list_boards';
var CREATE_BOARD_SERVICE = '/board/create_board';
var UPDATE_BOARD_SERVICE = '/board/update_board';

exports.listBoardsWorkUnit = function (conditions, phoneNumber, token, callback) {
    // send HTTP request to engine server to list boards
    var queryParams = new Map();
    var requestSender =
        new RequestSender(APP_SERVER_ADDRESS,
            APP_SERVER_PORT,
            LIST_BOARDS_SERVICE,
            queryParams);
    var headers = {
        'Content-Type': 'application/json',
        'phone-number': phoneNumber,
        'token': token
    };

    requestSender.sendPostRequest(conditions, headers, function (listBoardsErr, boardsResponse) {
        if (errorCode.SUCCESS.code === listBoardsErr &&
            JSON.parse(boardsResponse).status.code === errorCode.SUCCESS.code) {
            logger.info("list boards successfully");
            var boards = JSON.parse(boardsResponse).entity;
            logger.info("response of boards = " + JSON.stringify(boards));
            callback(errorCode.SUCCESS, boards);
        } else {
            logger.error("list boards failed");
            callback(errorCode.FAILED, null);
        }
    });
};

exports.createBoardWorkUnit = function (gameName, phoneNumber, token, callback) {
    // send HTTP request to engine server to list boards
    var queryParams = new Map();
    var requestSender =
        new RequestSender(APP_SERVER_ADDRESS,
            APP_SERVER_PORT,
            CREATE_BOARD_SERVICE,
            queryParams);

    var headers = {
        'Content-Type': 'application/json',
        'phone-number': phoneNumber,
        'token': token
    };

    var createBoardParameters = {
        phoneNumber: phoneNumber,
        gameName: gameName
    };

    requestSender.sendPostRequest(createBoardParameters, headers, function (listBoardsErr, boardsResponse) {
        if (errorCode.SUCCESS.code === listBoardsErr &&
            JSON.parse(boardsResponse).status.code === errorCode.SUCCESS.code) {
            logger.info("create board successfully");
            var boards = JSON.parse(boardsResponse).entity;
            logger.info("response of create board = " + JSON.stringify(boards));
            callback(errorCode.SUCCESS, boards);
        } else {
            logger.error("create board failed");
            callback(errorCode.FAILED, null);
        }
    });
};

exports.updateBoardsWorkUnit = function (ticket, gameName, newBoard, phoneNumber, token, callback) {
    // send HTTP request to engine server to list boards
    var queryParams = new Map();
    var requestSender =
        new RequestSender(APP_SERVER_ADDRESS,
            APP_SERVER_PORT,
            UPDATE_BOARD_SERVICE,
            queryParams);

    var headers = {
        'Content-Type': 'application/json',
        'phone-number': phoneNumber,
        'token': token
    };

    var updateBoardParameters = {
        ticket: ticket,
        gameName: gameName,
        newBoard: newBoard
    };

    requestSender.sendPostRequest(updateBoardParameters, headers, function (listBoardsErr, boardsResponse) {
        if (errorCode.SUCCESS.code === listBoardsErr &&
            JSON.parse(boardsResponse).status.code === errorCode.SUCCESS.code) {
            logger.info("update board successfully");
            var boards = JSON.parse(boardsResponse).entity;
            logger.info("response of updated board = " + JSON.stringify(boards));
            callback(errorCode.SUCCESS, boards);
        } else {
            logger.error("update board failed");
            callback(errorCode.FAILED, null);
        }
    });
};