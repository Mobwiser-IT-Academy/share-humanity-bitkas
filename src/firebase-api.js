"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseApi = void 0;
var firebase = __importStar(require("firebase"));
var firebaseApi = /** @class */ (function () {
    function firebaseApi() {
        this.firebaseConfig = {
            apiKey: "AIzaSyAYWdQTsLGyJRfjc2Vnuu_FF4HkqkLfyRg",
            authDomain: "global-issues-8284f.firebaseapp.com",
            databaseURL: "https://global-issues-8284f.firebaseio.com",
            projectId: "global-issues-8284f",
            storageBucket: "global-issues-8284f.appspot.com",
            messagingSenderId: "405491061871",
            appId: "1:405491061871:web:8d9b82412361a7096d699a",
            measurementId: "G-R46VXRKEYW"
        };
        firebase.initializeApp(this.firebaseConfig);
        this.database = firebase.database();
    }
    firebaseApi.acessDatabase = function () {
        var firebaseObject = new firebaseApi();
        firebaseObject.database.ref('/')
            .once('value').then(function (snapshot) {
            var globalIssue;
            snapshot.forEach(function (child) {
                globalIssue = child.exportVal();
                var sec = document.createElement("section");
                sec.classList.add("subcorpo");
                var markup = "<h3 class=\"conteudo\"> \n            " + globalIssue.nome + " </h3>\n            <h4 class=\"conteudo\">People Afected:</h4>\n            <p class=\"conteudo\">" + globalIssue.afetados + "</p>\n            <h4 class=\"conteudo\">Rank of Priority:</h4>\n            <p class=\"conteudo\">" + globalIssue.rank + "</p>";
                document.getElementById("unica").appendChild(sec);
                sec.innerHTML = markup;
            });
        });
    };
    return firebaseApi;
}());
exports.firebaseApi = firebaseApi;
