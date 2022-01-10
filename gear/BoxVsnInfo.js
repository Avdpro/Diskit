//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FOJEMDHK0Imports*/
import {JAXDisk} from "/jaxweb/lib/JAXDisk.js";
/*}#1FOJEMDHK0Imports*/
//----------------------------------------------------------------------------
/*Hud控件节点，没有内容，可以有子节点*/
var BoxVsnInfo=function (app, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FOJEMDHK1ExLocal*/
	/*}#1FOJEMDHK1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FOJEMDHK3ExState*/
		/*}#1FOJEMDHK3ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FOJEMDHK1Mid*/
	/*}#1FOJEMDHK1Mid*/
	
	cssVO={
		"type": "hud", "jaxId": "1FOJEMDHK1", "x": 0, "y": 0, "w": "FW", "h": 100, "autoLayout": 1, 
		items: [
			{
				"type": "text", "jaxId": "1FOJEPRTV0", "x": 30, "y": 5, "w": 100, "h": 20, "text": "Modify time:", "color": [80,80,80], "alignV": 2, "fontSize": appCfg.txtSize.smallMid
			},
			{
				"type": "text", "jaxId": "1FOJEPT0J0", "id": "TxtModifyTime", "x": 0, "y": 5, "w": "FW-40", "h": 20, "text": "2022-1-3 12:20 GMT+9", "color": [0,0,0], 
				"alignH": 2, "alignV": 2, "fontSize": appCfg.txtSize.smallMid
			},
			{
				"type": "text", "jaxId": "1FOJETDLE0", "x": 30, "y": 30, "w": 100, "h": 20, "text": "Base version:", "color": [80,80,80], "alignV": 2, "fontSize": appCfg.txtSize.smallMid
			},
			{
				"type": "text", "jaxId": "1FOJEU4170", "id": "TxtVsnIdx", "x": 0, "y": 30, "w": "FW-40", "h": 20, "text": "21", "color": [0,0,0], "alignH": 2, "alignV": 2, 
				"fontSize": appCfg.txtSize.smallMid
			},
			{
				"type": "text", "jaxId": "1FOJF0OUH0", "x": 30, "y": 55, "w": 100, "h": 20, "text": "Is modified:", "color": [80,80,80], "alignV": 2, "fontSize": appCfg.txtSize.smallMid
			},
			{
				"type": "text", "jaxId": "1FOJF1F8K0", "id": "TxtModified", "x": 0, "y": 55, "w": "FW-40", "h": 20, "text": "Yes", "color": [0,0,0], "alignH": 2, 
				"alignV": 2, "fontSize": appCfg.txtSize.smallMid
			},
			{
				"type": "box", "jaxId": "1FOJFC8GS0", "x": 30, "y": 30, "w": "FW-70", "h": 1, "shadowColor": [0,0,0,0.5]
			},
			{
				"type": "box", "jaxId": "1FOJFC9KM0", "x": 30, "y": 55, "w": "FW-70", "h": 1, "shadowColor": [0,0,0,0.5]
			},
			{
				"type": "box", "jaxId": "1FOJFCL8C0", "x": 30, "y": 80, "w": "FW-70", "h": 1, "shadowColor": [0,0,0,0.5]
			}
		],
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FOJEMDHK1CreateFunc*/
			/*}#1FOJEMDHK1CreateFunc*/
		}
	};
	/*#{1FOJEMDHK1ExViewDef*/

	//------------------------------------------------------------------------
	//Get a I/O object based by fullPath
	let getEntry=async function(diskPath){
		let pts,diskName,path,disk,item;
		if(diskPath.startsWith("/")){
			pts=diskPath.split("/");
			diskName=pts[1];
			pts=pts.slice(2);
			path=pts.join("/");
		}else{
			throw new Error("CCDisk.getEntry: illegal path: "+diskPath);
		}
		if(!diskName){
			return {name:"/",dir:1,root:1};
		}
		disk=await JAXDisk.openDisk(diskName,0);
		if(!disk){
			return null;
		}
		item=await disk.getEntry(path);
		return item;
	};

	//------------------------------------------------------------------------
	cssVO.showInfo=async function(item){
		let entry;
		let disk=item.disk.diskObj;
		self.TxtModifyTime.text="---";
		self.TxtVsnIdx.text="---";
		self.TxtModified.text="---";
		entry=await getEntry(item.diskPath);
		if(entry){
			self.TxtModifyTime.text=(new Date(entry.modifyTime)).toLocaleString();
			if(entry.baseVersionIdx>0){
				self.TxtVsnIdx.text=entry.baseVersionIdx;
				self.TxtModified.text=entry.modified?"Yes":"No";
			}else{
				self.TxtVsnIdx.text="NA";
				self.TxtModified.text="Yes";
			}
		}
	};
	/*}#1FOJEMDHK1ExViewDef*/
	
	return cssVO;
};

/*#{1FOJEMDHK0PostCode*/
/*}#1FOJEMDHK0PostCode*/

export {BoxVsnInfo};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "BoxVsnInfo.js", "def": "CdyFileUIGear", "jaxId": "1FOJEMDHK0", 
//			"attrs": {
//				"gearName": "\"BoxVsnInfo\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FOJEMDHL0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FOJEMDHL2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudObj", "jaxId": "1FOJEMDHK1", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOJEMDHK2", 
//					"attrs": {}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FOJEMDHK3", 
//					"attrs": {}, "funcs": {"jaxId":"1FOJEMDHL3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "1", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "100", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {"jaxId":"1FOJEMDHL4","entrys":[]}, 
//				"funcs": {"jaxId":"1FOJEMDHL6","funcs":[]}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FOJEPRTV0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "30", "y": "5", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Modify time:\"", "color": "[80,80,80]", 
//							"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Bottom", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//							"bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"funcs": {"jaxId":"1FOJEPRTV2","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FOJEPT0J0", 
//						"attrs": {
//							"locked": "0", "id": "\"TxtModifyTime\"", "x": "0", "y": "5", "w": "\"FW-40\"", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"2022-1-3 12:20 GMT+9\"", 
//							"color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Right", "alignV": "Bottom", "font": "\"\"", 
//							"fontSize": "#appCfg.txtSize.smallMid", "bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"funcs": {"jaxId":"1FOJEPT0J1","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FOJETDLE0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "30", "y": "30", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Base version:\"", "color": "[80,80,80]", 
//							"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Bottom", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//							"bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"funcs": {"jaxId":"1FOJETDLE1","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FOJEU4170", 
//						"attrs": {
//							"locked": "0", "id": "\"TxtVsnIdx\"", "x": "0", "y": "30", "w": "\"FW-40\"", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"21\"", "color": "[0,0,0]", 
//							"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Right", "alignV": "Bottom", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//							"bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"funcs": {"jaxId":"1FOJEU4171","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FOJF0OUH0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "30", "y": "55", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Is modified:\"", "color": "[80,80,80]", 
//							"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Bottom", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//							"bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"funcs": {"jaxId":"1FOJF0OUH1","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FOJF1F8K0", 
//						"attrs": {
//							"locked": "0", "id": "\"TxtModified\"", "x": "0", "y": "55", "w": "\"FW-40\"", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//							"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Yes\"", "color": "[0,0,0]", 
//							"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Right", "alignV": "Bottom", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//							"bold": "0", "italic": "0", "underline": "0"
//						}, 
//						"funcs": {"jaxId":"1FOJF1F8K1","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FOJFC8GS0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "30", "y": "30", "w": "\"FW-70\"", "h": "1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[180,180,180,1]", "border": "0", "borderStyle": "Solid", 
//							"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//							"shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FOJFC8GS2","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FOJFC9KM0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "30", "y": "55", "w": "\"FW-70\"", "h": "1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[180,180,180,1]", "border": "0", "borderStyle": "Solid", 
//							"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//							"shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FOJFC9KM1","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudBox", "jaxId": "1FOJFCL8C0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "30", "y": "80", "w": "\"FW-70\"", "h": "1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[180,180,180,1]", "border": "0", "borderStyle": "Solid", 
//							"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//							"shadowColor": "[0,0,0,0.5]"
//						}, 
//						"funcs": {"jaxId":"1FOJFCL8C1","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}