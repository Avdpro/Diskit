//Auto genterated by Cody
/*App的基础配置文件文件*/
//----------------------------------------------------------------------------
/*VO Object*/
var appCfg={
	"txtSize": {
		"small": 12, "mid": 16, "big": 20, "bigger": 24, "large": 28, "larger": 32, "huge": 40, "huger": 48, "shuge": 60, "smallMid": 14
	},
	"size": {
		"btnIcon": 32, "naviBoxW": 200, "headerH": 48, "naviItemH": 24, "listItemH": 24, "stateBoxH": 24, "listHeadH": 20, "listColW1": 300, "listColW2": 150, 
		"listColW3": 200, "toolBoxW": 375, "btnStdH": 32, "dlgCloudW": 450
	},
	"color": {
		"highLight": [220,240,255,1], "btnDown": [50,147,250,1], "window": [250,250,250,1], "headBox": [220,220,220,1], "stateBox": [210,210,210,1], "gntSelect": "linear-gradient(to right, rgba(190,220,2550,1), 50%, rgba(220,240,255,0.5))", 
		"gntFile": "linear-gradient(to right, rgba(190,220,255,1), 10%, rgba(220,240,255,0.5))", "btnStdFace": [30,100,180,1], "btnStdDown": [35,105,200,1], 
		"btnStdGray": [200,200,200,1], "btnStdText": [255,255,255,1]
	},
	"shortCuts": {
		"Backspace": {
			"action": "Delete", "altKey": false, "ctrlKey": false, "metaKey": false, "shiftKey": false
		},
		"Delete": {
			"action": "Delete", "altKey": false, "ctrlKey": false, "metaKey": false, "shiftKey": false
		},
		"c": {
			"action": "Copy", "altKey": false, "ctrlKey": false, "metaKey": true, "shiftKey": false
		},
		"v": {
			"action": "PasteX", "altKey": false, "ctrlKey": false, "metaKey": true, "shiftKey": false
		},
		"a": {
			"action": "SelectAll", "altKey": false, "ctrlKey": false, "metaKey": true, "shiftKey": false
		}
	},
	/*#{1FBOMFC1A11*/
	fileIcons:{
		".css":"assets/filetype/ft_css.svg",
		".js":"assets/filetype/ft_js.svg",
		".mjs":"assets/filetype/ft_js.svg",
		".json":"assets/filetype/ft_json.svg",
		".html":"assets/filetype/ft_html.svg",
		".md":"assets/filetype/ft_md.svg",
		".ts":"assets/filetype/ft_ts.svg",
		".zip":"assets/filetype/ft_zip.svg",
		".svg":"assets/filetype/ft_img.svg",
	}
	/*}#1FBOMFC1A11*/
};

/*#{1FBOMFC1A0ExFuncs*/
//Check platform and set shortcut
var userAgent = navigator.userAgent;
var platform = navigator.platform;

var gecko = /gecko\/\d/i.test(userAgent);
var ie_upto10 = /MSIE \d/.test(userAgent);
var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
var edge = /Edge\/(\d+)/.exec(userAgent);
var ie = ie_upto10 || ie_11up || edge;
var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
var webkit = !edge && /WebKit\//.test(userAgent);
var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
var chrome = !edge && /Chrome\//.test(userAgent);
var presto = /Opera\//.test(userAgent);
var safari = /Apple Computer/.test(navigator.vendor);
var firefox = userAgent.toLowerCase().indexOf('firefox') > -1;
var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
var phantom = /PhantomJS/.test(userAgent);

var ios = safari && (/Mobile\/\w+/.test(userAgent) || navigator.maxTouchPoints > 2);
var android = /Android/.test(userAgent);

var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
var mac = ios || /Mac/.test(platform);
var chromeOS = /\bCrOS\b/.test(userAgent);
var windows = /win/i.test(platform);

//****************************************************************************
//Device Info:
//****************************************************************************
{
	appCfg.deviceInfo={
		"mac":mac,
		"windows":windows,
		"ios":ios,
		"android":android,
		"safari":safari,
		"chrome":chrome,
		"firefox":firefox,
		"mobile":mobile,
		//TODO: add language etc.
	};
}

//****************************************************************************
//Key short-cuts goes here:
//****************************************************************************
{
	let shortcutsVO;
	if(mac){
		shortcutsVO={
			"Backspace": {
				"action": "Delete", "altKey": false, "ctrlKey": false, "metaKey": false, "shiftKey": false
			},
			"Delete": {
				"action": "Delete", "altKey": false, "ctrlKey": false, "metaKey": false, "shiftKey": false
			},
			"KeyC": {
				"action": "Copy", "altKey": false, "ctrlKey": false, "metaKey": true, "shiftKey": false
			},
			"KeyV": {
				"action": "PasteX", "altKey": false, "ctrlKey": false, "metaKey": true, "shiftKey": false
			},
			"KeyA": {
				"action": "SelectAll", "altKey": false, "ctrlKey": false, "metaKey": true, "shiftKey": false
			},
			"ArrowUp": {
				"action": "ItemUp", "altKey": false, "ctrlKey": false, "metaKey": false, "shiftKey": false
			},
			"ArrowDown": {
				"action": "ItemDown", "altKey": false, "ctrlKey": false, "metaKey": false, "shiftKey": false
			},
		};
	}else{
		shortcutsVO={
			"Backspace": {
				"action": "Delete", "altKey": false, "ctrlKey": false, "metaKey": false, "shiftKey": false
			},
			"Delete": {
				"action": "Delete", "altKey": false, "ctrlKey": false, "metaKey": false, "shiftKey": false
			},
			"KeyC": {
				"action": "Copy", "altKey": false, "ctrlKey": true, "metaKey": false, "shiftKey": false
			},
			"KeyV": {
				"action": "PasteX", "altKey": false, "ctrlKey": true, "metaKey": false, "shiftKey": false
			},
			"KeyA": {
				"action": "SelectAll", "altKey": false, "ctrlKey": true, "metaKey": false, "shiftKey": false
			},
			"ArrowUp": {
				"action": "ItemUp", "altKey": false, "ctrlKey": false, "metaKey": false, "shiftKey": false
			},
			"ArrowDown": {
				"action": "ItemDown", "altKey": false, "ctrlKey": false, "metaKey": false, "shiftKey": false
			},
		};
	}
	appCfg.shortCuts=shortcutsVO;
}
/*}#1FBOMFC1A0ExFuncs*/

export {appCfg};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "appCfg.js", "type": "object", "def": "CdyFileAppCfg", "jaxId": "1FBOMFC1A0", 
//			"attrs": {
//				"appCfg": {
//					"name": "appCfg", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBOMFC1A1", 
//					"attrs": {
//						"txtSize": {
//							"name": "txtSize", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBONOCKO0", 
//							"attrs": {
//								"small": {"type":"int","valText":"12","initVal":"","info":null,"tip":null}, 
//								"mid": {"type":"int","valText":"16","initVal":"","info":null,"tip":null}, 
//								"big": {"type":"int","valText":"20","initVal":"","info":null,"tip":null}, 
//								"bigger": {"type":"int","valText":"24","initVal":"","info":null,"tip":null}, 
//								"large": {"type":"int","valText":"28","initVal":"","info":null,"tip":null}, 
//								"larger": {"type":"int","valText":"32","initVal":"","info":null,"tip":null}, 
//								"huge": {"type":"int","valText":"40","initVal":"","info":null,"tip":null}, 
//								"huger": {"type":"int","valText":"48","initVal":"","info":null,"tip":null}, 
//								"shuge": {"type":"int","valText":"60","initVal":"","info":null,"tip":null}, 
//								"smallMid": {"type":"int","valText":"14","initVal":"","info":null,"tip":null}
//							}
//						}, 
//						"size": {
//							"name": "size", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBONOCKO2", 
//							"attrs": {
//								"btnIcon": {"type":"int","valText":"32","initVal":"","info":null,"tip":null}, 
//								"naviBoxW": {"type":"int","valText":"200","initVal":"","info":null,"tip":null}, 
//								"headerH": {"type":"int","valText":"48","initVal":"","info":null,"tip":null}, 
//								"naviItemH": {"type":"int","valText":"24","initVal":"","info":null,"tip":null}, 
//								"listItemH": {"type":"int","valText":"24","initVal":"","info":null,"tip":null}, 
//								"stateBoxH": {"type":"int","valText":"24","initVal":"","info":null,"tip":null}, 
//								"listHeadH": {"type":"int","valText":"20","initVal":"","info":null,"tip":null}, 
//								"listColW1": {"type":"int","valText":"300","initVal":"","info":null,"tip":null}, 
//								"listColW2": {"type":"int","valText":"150","initVal":"","info":null,"tip":null}, 
//								"listColW3": {"type":"int","valText":"200","initVal":"","info":null,"tip":null}, 
//								"toolBoxW": {"type":"int","valText":"375","initVal":"","info":null,"tip":null}, 
//								"btnStdH": {"type":"int","valText":"32","initVal":"","info":null,"tip":null}, 
//								"dlgCloudW": {"type":"int","valText":"450","initVal":"","info":null,"tip":null}
//							}
//						}, 
//						"color": {
//							"name": "color", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBONOCKO1", 
//							"attrs": {
//								"highLight": {
//									"type": "colorRGBA", "valText": "[220,240,255,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"btnDown": {
//									"type": "colorRGBA", "valText": "[50,147,250,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"window": {
//									"type": "colorRGBA", "valText": "[250,250,250,1]", "initVal": "", 
//									"info": null, "tip": "Window face color"
//								}, 
//								"headBox": {
//									"type": "colorRGBA", "valText": "[220,220,220,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"stateBox": {
//									"type": "colorRGBA", "valText": "[210,210,210,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"gntSelect": {
//									"type": "string", "valText": "\"linear-gradient(to right, rgba(190,220,2550,1), 50%, rgba(220,240,255,0.5))\"", "initVal": "", 
//									"info": null, "tip": "Selected"
//								}, 
//								"gntFile": {
//									"type": "string", "valText": "\"linear-gradient(to right, rgba(190,220,255,1), 10%, rgba(220,240,255,0.5))\"", "initVal": "", 
//									"info": null, "tip": "File line"
//								}, 
//								"btnStdFace": {
//									"type": "colorRGBA", "valText": "[30,100,180,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"btnStdDown": {
//									"type": "colorRGBA", "valText": "[35,105,200,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"btnStdGray": {
//									"type": "colorRGBA", "valText": "[200,200,200,1]", "initVal": "", 
//									"info": null, "tip": null
//								}, 
//								"btnStdText": {
//									"type": "colorRGBA", "valText": "[255,255,255,1]", "initVal": "", 
//									"info": null, "tip": null
//								}
//							}
//						}, 
//						"shortCuts": {
//							"name": "shortCuts", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2JIRBC0", 
//							"attrs": {
//								"Backspace": {
//									"name": "Backspace", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2JIRBC1", 
//									"attrs": {
//										"action": {
//											"type": "string", "valText": "\"Delete\"", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"altKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"ctrlKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"metaKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"shiftKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}
//									}
//								}, 
//								"Delete": {
//									"name": "Delete", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCCO265I0", 
//									"attrs": {
//										"action": {
//											"type": "string", "valText": "\"Delete\"", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"altKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"ctrlKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"metaKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"shiftKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}
//									}
//								}, 
//								"c": {
//									"name": "c", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCCNC5DA0", 
//									"attrs": {
//										"action": {
//											"type": "string", "valText": "\"Copy\"", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"altKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"ctrlKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"metaKey": {
//											"type": "bool", "valText": "true", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"shiftKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}
//									}
//								}, 
//								"v": {
//									"name": "v", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCCNC5DA1", 
//									"attrs": {
//										"action": {
//											"type": "string", "valText": "\"PasteX\"", "initVal": "", "info": null, "tip": ""
//										}, 
//										"altKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"ctrlKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"metaKey": {
//											"type": "bool", "valText": "true", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"shiftKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}
//									}
//								}, 
//								"a": {
//									"name": "a", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FCD76BV30", 
//									"attrs": {
//										"action": {
//											"type": "string", "valText": "\"SelectAll\"", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"altKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"ctrlKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"metaKey": {
//											"type": "bool", "valText": "true", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"shiftKey": {
//											"type": "bool", "valText": "false", "initVal": "", "info": null, 
//											"tip": null
//										}
//									}
//								}
//							}
//						}
//					}
//				}
//			}
//		}/*Doc}#*/;
//	}