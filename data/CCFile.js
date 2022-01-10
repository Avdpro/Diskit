//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {JAXDataObj} from "/jaxweb/lib/JAXDataObj.js"
/*#{1FBS3RLI00Imports*/
import pathLib from "/@path";
/*}#1FBS3RLI00Imports*/
/*自定义数据类*/
var CCFile;
let __Proto;

//*****************************************************
/*CCFile: Data object class*/
//*****************************************************
{
	CCFile=function(appData, disk, item){
		var jaxEnv,app;
		/*#{1FBS4FICA0Pre*/
		/*}#1FBS4FICA0Pre*/
		if(!appData){return;}
		JAXDataObj.call(this,appData.jaxEnv);
		this.appData=appData;
		
		//Data attributes:
		this.type = "file";
		this.isFolder = 0;
		this.path = "";
		this.name = "";
		this.baseName = "";
		this.baseVersion = 0;
		this.modified = 0;
		this.size = 0;
		this.modifiedTime = 0;
		/*#{1FBS4FICA0Post*/
		this.disk=disk;
		this.path=item.path;
		this.name=item.name;
		this.size=item.size;
		this.diskPath=item.diskPath;
		this.nameExt=pathLib.extname(item.path).toLowerCase();
		this.modifiedTime=item.modifyTime;
		this.modified=item.modified;
		this.baseVersionIdx=item.baseVersionIdx;
		/*}#1FBS4FICA0Post*/
	};
	__Proto=CCFile.prototype={};
	
	
	/*#{1FBS4FICA0Functions*/
	//------------------------------------------------------------------------
	//文件改名了:
	__Proto.rename=function(newName){
		let path;
		this.name=newName;
		path=JAXEnv.getPathDir(this.path);
		this.path=JAXEnv.genFilePath(path,newName);
		this.diskPath="/"+this.disk.name+"/"+this.path;
	};
	//------------------------------------------------------------------------
	//文件名是不是代表一个冲突文件。
	CCFile.isConflictFileName=function(fname){
		if(fname.endsWith(".conflict")){
			return true;
		}
		return false;
	};
	
	//------------------------------------------------------------------------
	//得到冲突文件对应的文件名:
	CCFile.getConflictDocName=function(cname){
		let idx,list;
		if((!cname.endsWith(".conflict"))&&(!cname.endsWith(".missing"))){
			return null;
		}
		list=cname.split(".");
		if(list.length<3){
			return null;
		}
		list.pop();//"conflict/missing"
		list.pop();//version-idx
		return list.join(".");
	};
	/*}#1FBS4FICA0Functions*/
};

/*#{1FBS3RLI00ExCodes*/
//Avdpro
/*}#1FBS3RLI00ExCodes*/
export {CCFile};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"jaxId": "1FBS3RLI00", "def": "CdyFileDataClass", 
//			"attrs": {"fileName":"\"CCFile\"","description":"\"\""}, 
//			"classObjs": {
//				"name": "classObjs", "type": "object", "def": "CdyDocObj", "jaxId": "1FBS3RLI01", 
//				"attrs": {
//					"CCFile": {
//						"type": "object", "def": "CdyDataClass", "name": "CCFile", "tip": "", "jaxId": "1FBS4FICA0", 
//						"attrs": {}, 
//						"args": {
//							"name": "Arguments", "type": "object", "def": "ClassObjArgObj", "jaxId": "1FBS4J1BL0", 
//							"attrs": {
//								"superClass": "\"JAXDataObj\"", 
//								"disk": {
//									"name": "disk", "type": "object", "def": "CdyAttrMockupObj", "mockupDef": "MockupRef1FBS4M8GE0", "mockupName": "game", "tip": ""
//								}, 
//								"item": {"type":"auto","valText":"null","info":null,"tip":null}
//							}
//						}, 
//						"pptsObj": {
//							"name": "Properties", "type": "object", "def": "ClassObjPptObj", "jaxId": "1FBS4J1BL1", 
//							"attrs": {
//								"type": {
//									"type": "string", "valText": "\"file\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"isFolder": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"path": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"name": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"baseName": {
//									"type": "string", "valText": "\"\"", "initVal": "", "info": null, 
//									"tip": null
//								}, 
//								"baseVersion": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"modified": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"size": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//								"modifiedTime": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}
//							}
//						}, 
//						"funcsObj": {"jaxId":"1FBS4J1BL2","funcs":[]}, 
//						"mockObjs": {
//							"name": "Mockups", "type": "object", "def": "CdyDocObj", "jaxId": "1FBS4J1BL3", 
//							"attrs": {
//								"jsfile": {
//									"type": "object", "def": "MockupRef1FBS4FICA0", "jaxId": "1FBSB4R530", 
//									"attrs": {
//										"isFolder": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//										"path": {
//											"type": "string", "valText": "\"gear/textSmall.js\"", "initVal": "", 
//											"info": null, "tip": null
//										}, 
//										"baseName": {
//											"type": "string", "valText": "\"textSmall.js\"", "initVal": "", 
//											"info": null, "tip": null
//										}, 
//										"baseVersion": {"type":"int","valText":"123","initVal":"","info":null,"tip":null}, 
//										"modified": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//										"size": {
//											"type": "int", "valText": "3202", "initVal": "", "info": null, 
//											"tip": null
//										}, 
//										"name": {
//											"type": "string", "valText": "\"textSmall.js\"", "initVal": "", 
//											"info": null, "tip": null
//										}, 
//										"modifiedTime": {"type":"int","valText":"0","initVal":"","info":null,"tip":null}, 
//										"type": {
//											"type": "string", "valText": "\"file\"", "initVal": "", "info": null, 
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