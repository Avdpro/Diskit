//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FBUE6HN50Imports*/
/*}#1FBUE6HN50Imports*/
//----------------------------------------------------------------------------
/*Hud控件节点，没有内容，可以有子节点*/
var itemName=function (app, item, node, box, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FBUE6HN51ExLocal*/
	/*}#1FBUE6HN51ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FBUE6HN53ExState*/
		/*}#1FBUE6HN53ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FBUE6HN51Mid*/
	/*}#1FBUE6HN51Mid*/
	
	cssVO={
		"type": "hud", "jaxId": "1FBUE6HN51", "x": 0, "y": 0, "w": "FW", "h": 24, "autoLayout": 1, "uiEvent": -1, 
		items: [
			{
				"type": "image", "jaxId": "1FBUE8CDT0", "id": "ImgIcon", "x": 3, "y": 2, "w": 20, "h": 20, "image": "assets/"+(item.isFolder?"mulu.svg":"wenjian.svg"), 
				"autoSize": 0, "fitSize": 1
			},
			{
				"type": "text", "jaxId": "1FBUEHPST3", "id": "TxtName", "x": 25, "y": 0, "w": 100, "h": 24, "text": item.name, "color": [0,0,0], "alignV": 1, "fontSize": appCfg.txtSize.smallMid
			}
		],
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FBUE6HN51CreateFunc*/
			let ext=item.nameExt;
			if(item.type==="file"){
				let icon=appCfg.fileIcons[ext];
				if(icon){
					self.ImgIcon.image=icon;
				}
			}
			if(item.modified){
				if(item.baseVersionIdx>0){
					self.appendNewChild({type:"image",x:"FW-22",y:2,w:20,h:20,image:"assets/modified.svg","fitSize": 1});
				}else{
					self.appendNewChild({type:"image",x:"FW-22",y:2,w:20,h:20,image:"assets/newmark.svg","fitSize": 1});
				}
			}
			/*}#1FBUE6HN51CreateFunc*/
		}
	};
	/*#{1FBUE6HN51ExViewDef*/
	node.setName=function(newName){
		self.TxtName.text=newName;
	};
	/*}#1FBUE6HN51ExViewDef*/
	
	return cssVO;
};

/*#{1FBUE6HN50PostCode*/
/*}#1FBUE6HN50PostCode*/

export {itemName};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "itemName.js", "def": "CdyFileUIGear", "jaxId": "1FBUE6HN50", 
//			"attrs": {
//				"gearName": "\"itemName\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FBUE6HN90", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FBUE6HN92","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudObj", "jaxId": "1FBUE6HN51", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBUE6HN52", 
//					"attrs": {
//						"item": {
//							"name": "item", "type": "object", "def": "CdyAttrMockupObj", "mockupDef": "MockupRef1FBS4FICA0", "mockupName": "jsfile", "tip": undefined
//						}, 
//						"node": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}, 
//						"box": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FBUE6HN53", 
//					"attrs": {}, "funcs": {"jaxId":"1FBUE6HN93","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//					"clip": "Off", "uiEvent": "TreeOff", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {"jaxId":"1FBUE6HN94","entrys":[]}, 
//				"funcs": {"jaxId":"1FBUE6HN96","funcs":[]}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudImage", "jaxId": "1FBUE8CDT0", 
//						"attrs": {
//							"locked": "1", "id": "\"ImgIcon\"", "x": "3", "y": "2", "w": "20", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "image": "#\"assets/\"+(item.isFolder?\"mulu.svg\":\"wenjian.svg\")", "autoSize": "0", "fitSize": "1", "alpha": "1", 
//							"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FBUE8CDT1","funcs":[]}, "subs": []
//					},
//					{
//						"type": "object", "def": "HudTxt", "jaxId": "1FBUEHPST3", 
//						"attrs": {
//							"locked": "0", "id": "\"TxtName\"", "x": "25", "y": "0", "w": "100", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "text": "#item.name", "color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", 
//							"wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", "bold": "0", "italic": "0", 
//							"underline": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FBUEHPST5","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}