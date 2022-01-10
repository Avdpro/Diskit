//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FOLT58GH0Imports*/
/*}#1FOLT58GH0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var DlgWait=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FOLT58GH1ExLocal*/
	/*}#1FOLT58GH1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FOLT58GH3ExState*/
		/*}#1FOLT58GH3ExState*/
	},);
	/*#{1FOLT58GH1PostState*/
	/*}#1FOLT58GH1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FOLT58GH1", 
		"locked": 0, "x": "FW/2", "y": "FH/2", "w": 380, "h": 80, "anchorH": 1, "anchorV": 1, 
		items: [
			{
				"type": "box", "jaxId": "1FOLTEE010", "x": 0, "y": 0, "w": "FW", "h": "FH", "color": [255,255,255,1], "border": 1, "borderColor": [128,128,128,1], 
				"shadow": 1, "shadowX": 0, "shadowY": 5, "shadowBlur": 8, "shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": "text", "jaxId": "1FOLTEE013", "id": "TxtInfo", "x": 0, "y": 0, "w": "FW", "h": "FH", "text": "Copying files...", "color": [0,0,0], "alignH": 1, 
						"alignV": 1, "fontSize": appCfg.txtSize.big
					}
				]
			}
		],
		faces: {
		},
		/*#{1FOLT58GH1ExAttrs*/
		/*}#1FOLT58GH1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FOLT58GH1CreateFunc*/
			/*}#1FOLT58GH1CreateFunc*/
		
		}
	};
	/*#{1FOLT58GH1ExViewDef*/
	cssVO.showDlg=function(vo){
		self.TxtInfo.text=vo.info||"Please wait...";
	};
	
	/*}#1FOLT58GH1ExViewDef*/
	
	return cssVO;
};

/*#{1FOLT58GH0PostCode*/
/*}#1FOLT58GH0PostCode*/

export {DlgWait};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "DlgWait.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FOLT58GH0", 
//			"attrs": {
//				"viewName": "\"DlgWait\"", "device": "iPad 1024x768", "w": "1024", "h": "768", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FOLT58GH1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOLT58GH2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FOLT58GH3", 
//						"attrs": {}, "funcs": {"jaxId":"1FOLT58GH4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "\"FW/2\"", "y": "\"FH/2\"", "w": "380", "h": "80", "anchorH": "Center", "anchorV": "Center"
//					}, 
//					"faces": null, "viewFaces": {"jaxId":"1FOLT58GH6","entrys":[]}, 
//					"funcs": {"jaxId":"1FOLT58GH7","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FOLTEE010", 
//							"attrs": {
//								"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[255,255,255,1]", "border": "1", "borderStyle": "Solid", 
//								"borderColor": "[128,128,128,1]", "coner": "0", "gradient": "\"\"", "shadow": "1", "shadowX": "0", "shadowY": "5", "shadowBlur": "8", "shadowSpread": "0", 
//								"shadowColor": "[0,0,0,0.5]"
//							}, 
//							"funcs": {"jaxId":"1FOLTEE012","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FOLTEE013", 
//									"attrs": {
//										"locked": "0", "id": "\"TxtInfo\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Copying files...\"", 
//										"color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Center", "alignV": "Center", 
//										"font": "\"\"", "fontSize": "#appCfg.txtSize.big", "bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FOLTEE015","funcs":[]}, "subs": []
//								}
//							]
//							
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FOLT58GH8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FOLT58GH10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}