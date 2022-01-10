//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {JAXDataObj} from "/jaxweb/lib/JAXDataObj.js"
/*App的总数据文件*/
/*#{1FBOMFC1B4Imports*/
import {CCUser} from "./data/CCUser.js";
import {WebAPI} from "./lib/WebAPI.js";
/*}#1FBOMFC1B4Imports*/

//----------------------------------------------------------------------------
/*App的入口文件*/
var appData={};

//App数据初始化函数:
appData.initData=function(jaxEnv){
	/*#{1FBOMFC1B4initPre*/
	JAXDataObj.call(this,jaxEnv,jaxEnv.app,"appData");
	/*}#1FBOMFC1B4initPre*/
	this.jaxEnv=jaxEnv;
	this.version="0.0.0";
	this.user={
	};
	/*#{1FBOMFC1B4initPost*/
	this.app=jaxEnv.app;
	this.loginDone=0;
	this.loginVO=null;
	this.user=new CCUser(this);
	this.checkLoginTimer=null;
	/*}#1FBOMFC1B4initPost*/
};
/*#{1FBOMFC1B4ExFuncs*/
var toolBoxRegs={
};

//----------------------------------------------------------------------------
//检查是不是已经登录了://
appData.checkLogin=async function(){
	let loginVO,time,resVO;
	if(this.checkLoginTimer){
		clearTimeout(this.checkLoginTimer);
		this.checkLoginTimer=null;
	}
	time=Date.now();
	loginVO=this.loadLoginInfo();
	if(!loginVO){
		this.emitNotify("Offline");
		return false;
	}
	this.user.loadLoginInfo(loginVO);
	if(!loginVO.apiPath || !loginVO.userId || !loginVO.token || loginVO.tokenExipre<=time){
		this.emitNotify("Offline");
		return false;
	}
	this.loginVO=loginVO;
	//resVO=await this.makeCall("login",{userId:loginVO.userId,token:loginVO.token});
	this.loginDone=1;
	this.emitNotify("Online");
	return true;
};

//----------------------------------------------------------------------------
//读取保存在本地的登录信息:
appData.loadLoginInfo=function(){
	let voText,vo;
	voText=localStorage.getItem("LoginVO");
	if(voText){
		vo=JSON.parse(voText);
		this.loginVO=vo;
		return vo;
	}
	return null;
};

//----------------------------------------------------------------------------
//通过appData进行call，需要login:
appData.makeCall=async function(msg,vo){
	if(!this.loginDone){
		if(!this.checkLogin()){
			throw "System offline."
		}
	}
	vo.userId=this.loginVO.userId;
	vo.token=this.loginVO.token;
	try{
		return await WebAPI.makeCall(msg,vo);
	}catch(e){
		if(e.code===403){
			//TODO: Network error.
		}
		throw e;
	}
};

//****************************************************************************
//:Tool Box plug-in management:
//****************************************************************************
{
	//------------------------------------------------------------------------
	//Register a toolbox
	appData.regToolBox=function(vo){
		toolBoxRegs[vo.codeName]=vo;
	};

	//------------------------------------------------------------------------
	//Get a toolbox register:
	appData.getToolBox=function(codeName){
		return toolBoxRegs[codeName]
	};

	//------------------------------------------------------------------------
	//Get all toolBox type-def:
	appData.getToolBoxRegs=function(){
		return Object.values(toolBoxRegs);
	};

	//------------------------------------------------------------------------
	//Get toolBox by doc:
	appData.getToolBoxByPath=function(path,item){
		let list=Object.values(toolBoxRegs);
		let maxDef,maxMatch,match;
		maxMatch=0;
		maxDef=null;
		for(let def of list){
			if(def.checkPath){
				match=def.checkPath(path,item);
			}else{
				match=10;
			}
			if(match>maxMatch){
				maxMatch=match;
				maxDef=def;
			}
		}
		return maxDef;
	};
}

/*}#1FBOMFC1B4ExFuncs*/

export {appData};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"jaxId": "1FBOMFC1B4", 
//			"dataObj": {
//				"version": "\"0.0.0\"", 
//				"user": {
//					"name": "user", "type": "object", "def": "CdyAttrMockupObj", "mockupDef": "MockupRef1FBS3N7TK0", "mockupName": "avdpro", "tip": ""
//				}
//			}, 
//			"funcs": {"jaxId":"1FBOMFC1B5","funcs":[]}
//		}/*Doc}#*/;
//	}