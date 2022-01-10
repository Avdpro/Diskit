//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {btnStd} from "../gear/btnStd.js";
import {btnIcon} from "../gear/btnIcon.js";
/*#{1FE8AVRFS0Imports*/
import {JAXDisk} from "/jaxweb/lib/JAXDisk.js"
import {CCDisk} from "../data/CCDisk.js"
/*}#1FE8AVRFS0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var DlgCloud=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FE8AVRFS1ExLocal*/
	let dlgVO=null;
	let dlgMode;
	let dlgStage;
	let divLogs=null;
	let logs="";
	let divConfirm=null;
	let confirmTex="";
	let commitDiffVO=null;
	
	const MODE_CHECKIN="CheckIn";
	const MODE_CHECKOUT="CheckOut";
	const MODE_UPDATE="Update";
	const MODE_COMMIT="Commit";

	const STAGE_CHECKIN_INPUT="CheckInInput";
	const STAGE_CHECKIN_WORK="CheckInWork";
	const STAGE_CHECKIN_DONE="CheckInDone";
	const STAGE_CHECKIN_ERROR="CheckInError";

	const STAGE_CHECKOUT_INPUT="CheckOutInput";
	const STAGE_CHECKOUT_WORK="CheckOutWork";
	const STAGE_CHECKOUT_DONE="CheckOUtDone";
	const STAGE_CHECKOUT_ERROR="CheckOutError";

	const STAGE_UPDATE_WORK="UpdateWork";
	const STAGE_UPDATE_DONE="UpdateDone";
	const STAGE_UPDATE_DONE_FILES="UpdateDoneFiles";
	const STAGE_UPDATE_ERROR="UpdateError";

	const STAGE_COMMIT_CHECK="CommitCheck";
	const STAGE_COMMIT_NOCHANGE="CommitNoChange";
	const STAGE_COMMIT_ERROR="CommitError";
	const STAGE_COMMIT_INPUT="CommitInput";
	const STAGE_COMMIT_WORK="CommitWork";
	const STAGE_COMMIT_DONE="CommitDone";
	
	let workDisk=null;
	let checkOutDiskId=null;
	let updateDisk=null;
	/*}#1FE8AVRFS1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FE8AVRFS3ExState*/
		/*}#1FE8AVRFS3ExState*/
	},);
	/*#{1FE8AVRFS1PostState*/
	/*}#1FE8AVRFS1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FE8AVRFS1", 
		"locked": 0, "x": "FW/2", "y": 113, "w": appCfg.size.dlgCloudW, "h": 300, "anchorH": 1, 
		items: [
			{
				"type": "box", "jaxId": "1FE8B9DSU0", "id": "BG", "x": 0, "y": 0, "w": "FW", "h": 500, "color": appCfg.color.window, "border": 1, "shadow": 1, "shadowX": 0, 
				"shadowY": 3, "shadowBlur": 6, "shadowColor": [0,0,0,0.5]
			},
			{
				"type": "group", "jaxId": "1FE8B9DSU3"
			},
			{
				"type": "hud", "jaxId": "1FE8CHRPR0", "id": "HudCommit", "x": 0, "y": 0, "w": "FW", "h": "FH"
			},
			{
				"type": "hud", "jaxId": "1FE8CI52V0", "id": "HudNoCommit", "x": 0, "y": 0, "w": "FW", "h": "FH"
			},
			{
				"type": "hud", "jaxId": "1FE8B9DSU6", "id": "HudCheckIn", "x": 0, "y": 0, "w": "FW", "h": "FH", "display": 0, 
				items: [
					{
						"type": "text", "jaxId": "1FE8B9DSU9", "x": 20, "y": 10, "w": "FW", "h": 20, "text": "Check in disk", "color": [0,0,0], "fontSize": 16
					},
					{
						"type": "text", "jaxId": "1FE8BSJ0H0", "id": "LBName", "x": 0, "y": 40, "w": 80, "h": 20, "text": "Name:", "color": [0,0,0], "alignH": 2, "alignV": 1, 
						"fontSize": appCfg.txtSize.smallMid, 
						items: [
							{
								"type": "edit", "jaxId": "1FE8BSJ0H3", "id": "EdCheckInName", "x": "FW+5", "y": 0, "w": 200, "h": 20, "bgColor": [255,255,255,1], "borderStyle": 0
							}
						]
					},
					{
						"type": "text", "jaxId": "1FE8BSL5L0", "id": "LBVersion", "x": 0, "y": 70, "w": 80, "h": 20, "text": "Version:", "color": [0,0,0], "alignH": 2, 
						"alignV": 1, "fontSize": appCfg.txtSize.smallMid, 
						items: [
							{
								"type": "edit", "jaxId": "1FE8BSL5M1", "id": "EdCheckInVersion", "x": "FW+5", "y": 0, "w": 200, "h": 20, "bgColor": [255,255,255,1], "borderStyle": 0, 
								"text": "0.0.1"
							}
						]
					},
					{
						"type": "text", "jaxId": "1FE8C0FKR0", "id": "LBInfo", "x": 0, "y": 100, "w": 80, "h": 20, "text": "Info:", "color": [0,0,0], "alignH": 2, "alignV": 1, 
						"fontSize": appCfg.txtSize.smallMid, 
						items: [
							{
								"type": "edit", "jaxId": "1FE8C0FKS1", "id": "EdCheckInInfo", "x": "FW+5", "y": 0, "w": 320, "h": 20, "bgColor": [255,255,255,1], "borderStyle": 0
							}
						]
					},
					{
						"type": btnStd(app,150,"Check In",null),"jaxId": "1FE8DD7KN2", 
						"locked": 0, "id": "BtnCheckIn", "x": (appCfg.size.dlgCloudW-150)/2, "y": 140, 
						//函数
						OnClick:function(){
							/*#{1FEBSCIBI0Code*/
							self.startCheckIn();
							/*}#1FEBSCIBI0Code*/
						}
					}
				]
			},
			{
				"type": "hud", "jaxId": "1FEKRM4060", "id": "HudCheckOut", "x": 0, "y": 0, "w": "FW", "h": "FH", "display": 0, 
				items: [
					{
						"type": "text", "jaxId": "1FEKRM4075", "x": 20, "y": 10, "w": "FW", "h": 20, "text": "Check out disk", "color": [0,0,0], "fontSize": 16
					},
					{
						"type": "text", "jaxId": "1FEKRM4077", "id": "LBDiskId", "x": 0, "y": 40, "w": 120, "h": 20, "text": "Disk Id:", "color": [0,0,0], "alignH": 2, 
						"alignV": 1, "fontSize": appCfg.txtSize.smallMid, 
						items: [
							{
								"type": "edit", "jaxId": "1FEKRM4079", "id": "EdCheckOutDiskId", "x": "FW+5", "y": 0, "w": 240, "h": 20, "bgColor": [255,255,255,1], "borderStyle": 0
							}
						]
					},
					{
						"type": "text", "jaxId": "1FEKRM40711", "id": "LBVersion", "x": 0, "y": 70, "w": 120, "h": 20, "text": "Version Id:", "color": [0,0,0], "alignH": 2, 
						"alignV": 1, "fontSize": appCfg.txtSize.smallMid, 
						items: [
							{
								"type": "edit", "jaxId": "1FEKRM4081", "id": "EdCheckOutVersionIdx", "x": "FW+5", "y": 0, "w": 240, "h": 20, "bgColor": [255,255,255,1], "borderStyle": 0, 
								"placeHolder": "Current version idx"
							}
						]
					},
					{
						"type": "text", "jaxId": "1FEKRM4091", "id": "LBName", "x": 0, "y": 100, "w": 120, "h": 20, "text": "New disk name:", "color": [0,0,0], "alignH": 2, 
						"alignV": 1, "fontSize": appCfg.txtSize.smallMid, 
						items: [
							{
								"type": "edit", "jaxId": "1FEKRM4093", "id": "EdCheckOutDiskName", "x": "FW+5", "y": 0, "w": 240, "h": 20, "bgColor": [255,255,255,1], "borderStyle": 0
							}
						]
					},
					{
						"type": btnStd(app,150,"Check Out",null),"jaxId": "1FEKRM4095", 
						"locked": 0, "id": "BtnCheckOut", "x": (appCfg.size.dlgCloudW-150)/2, "y": 140, 
						//函数
						OnClick:function(){
							/*#{1FEKRM40A3Code*/
							self.startCheckOut();
							/*}#1FEKRM40A3Code*/
						}
					}
				]
			},
			{
				"type": "hud", "jaxId": "1FE8CHQI00", "id": "HudPreCommit", "x": 0, "y": 0, "w": "FW", "h": 500, "display": 0, 
				items: [
					{
						"type": "text", "jaxId": "1FEIHM97I0", "x": 20, "y": 18, "w": 100, "h": 20, "text": "Confirm items to commit:", "color": [0,0,0], "fontSize": appCfg.txtSize.big
					},
					{
						"type": btnStd(app,150,"Commit",null),"jaxId": "1FEIHM97I1", 
						"locked": 0, "id": "BtnDoCommit", "x": 150, "y": 445, 
						//函数
						OnClick:function(){
							/*#{1FEISU2L90Code*/
							self.startCommit();
							/*}#1FEISU2L90Code*/
						}
					},
					{
						"type": "box", "jaxId": "1FEIHM97I2", "id": "BoxConfirmItems", "x": 20, "y": 50, "w": "FW-40", "h": "FH-220", "color": [180,180,180,0], "border": 1, 
						"shadowColor": [0,0,0,0.5]
					},
					{
						"type": "text", "jaxId": "1FEIT9IKT0", "x": 18, "y": 390, "w": 100, "h": 20, "text": "Information:", "color": [0,0,0], "fontSize": 16
					},
					{
						"type": "edit", "jaxId": "1FEIT9IKT3", "id": "EdCommitInfo", "x": 20, "y": 410, "w": "FW-40", "h": 20, "bgColor": [255,255,255,1], "borderStyle": 0
					},
					{
						"type": "text", "jaxId": "1FEJ17APO0", "x": 18, "y": 340, "w": 100, "h": 20, "text": "Verison:", "color": [0,0,0], "fontSize": 16
					},
					{
						"type": "edit", "jaxId": "1FEJ197G90", "id": "EdCommitVersion", "x": 20, "y": 360, "w": "FW/2-30", "h": 20, "bgColor": [255,255,255,1], "borderStyle": 0
					},
					{
						"type": "edit", "jaxId": "1FEJ1IHQ60", "id": "EdCommitTag", "x": 235, "y": 360, "w": "FW/2-30", "h": 20, "bgColor": [255,255,255,1], "borderStyle": 0
					},
					{
						"type": "text", "jaxId": "1FEJ1IQFF0", "x": 235, "y": 340, "w": 100, "h": 20, "text": "Tag:", "color": [0,0,0], "fontSize": 16
					}
				]
			},
			{
				"type": "hud", "jaxId": "1FE8CJ1N90", "id": "HudWorkLog", "x": 0, "y": 0, "w": "FW", "h": "FH", 
				items: [
					{
						"type": "text", "jaxId": "1FE8DD7KN12", "id": "TxtWork", "x": 14, "y": 12, "w": 100, "h": 20, "text": "Work type:", "color": [0,0,0], "fontSize": 16
					},
					{
						"type": "box", "jaxId": "1FE8DD7KN15", "id": "BoxLog", "x": 15, "y": 38, "w": "FW-30", "h": 200, "color": [0,0,0,0], "border": 1, "shadowColor": [0,0,0,0.5]
					},
					{
						"type": btnStd(app,150,"Close",null),"jaxId": "1FE8D9M2C0", 
						"locked": 0, "id": "BtnCloseLog", "x": (appCfg.size.dlgCloudW-150)/2, "y": 253
					},
					{
						"type": btnStd(app,150,"Close",null),"jaxId": "1FE8D9N0K0", 
						"locked": 0, "id": "BtnCloseWork", "x": (appCfg.size.dlgCloudW-150)/2, "y": 253, 
						//函数
						OnClick:function(){
							/*#{1FEQAFTVB0Code*/
							app.closeDlg(self);
							return 1;
							/*}#1FEQAFTVB0Code*/
						}
					}
				]
			},
			{
				"type": btnIcon(app,24,"close.svg",null),"jaxId": "1FE8KO1NI0", 
				"locked": 0, "id": "BtnClose", "x": "FW-32", "y": 8, 
				//函数
				OnClick:function(){
					/*#{1FE8KO1NI5Code*/
					app.closeDlg(self);
					return 1;
					/*}#1FE8KO1NI5Code*/
				}
			}
		],
		faces: {
			"CheckIn": {
				"$":function(vo){
					/*#{1FE8C56TI0Func*/
					self.EdCheckInName.text=workDisk.name;
					self.EdCheckInVersion.text="0.0.1";
					self.EdCheckInInfo.text="Disk initial check in.";
					/*}#1FE8C56TI0Func*/
				},
				/*BG*/"#1FE8B9DSU0": {
					"h": 200
				},
				/*HudCommit*/"#1FE8CHRPR0": {
					"display": 0
				},
				/*HudNoCommit*/"#1FE8CI52V0": {
					"display": 0
				},
				/*HudCheckIn*/"#1FE8B9DSU6": {
					"display": 1
				},
				/*HudCheckOut*/"#1FEKRM4060": {
					"display": 0
				},
				/*HudPreCommit*/"#1FE8CHQI00": {
					"display": 0
				},
				/*HudWorkLog*/"#1FE8CJ1N90": {
					"display": 0
				},
				/*BtnClose*/"#1FE8KO1NI0": {
					"display": 1
				},
			},
			"CheckOut": {
				/*BG*/"#1FE8B9DSU0": {
					"h": 200
				},
				/*HudCommit*/"#1FE8CHRPR0": {
					"display": 0
				},
				/*HudNoCommit*/"#1FE8CI52V0": {
					"display": 0
				},
				/*HudCheckIn*/"#1FE8B9DSU6": {
					"display": 0
				},
				/*HudCheckOut*/"#1FEKRM4060": {
					"display": 1
				},
				/*HudPreCommit*/"#1FE8CHQI00": {
					"display": 0
				},
				/*HudWorkLog*/"#1FE8CJ1N90": {
					"display": 0
				},
				/*BtnClose*/"#1FE8KO1NI0": {
					"display": 1
				},
			},
			"PreCommit": {
				/*BG*/"#1FE8B9DSU0": {
					"h": 500
				},
				/*HudCommit*/"#1FE8CHRPR0": {
					"display": 0
				},
				/*HudNoCommit*/"#1FE8CI52V0": {
					"display": 0
				},
				/*HudCheckIn*/"#1FE8B9DSU6": {
					"display": 0
				},
				/*HudCheckOut*/"#1FEKRM4060": {
					"display": 0
				},
				/*HudPreCommit*/"#1FE8CHQI00": {
					"display": 1
				},
				/*HudWorkLog*/"#1FE8CJ1N90": {
					"display": 0
				},
				/*BtnClose*/"#1FE8KO1NI0": {
					"display": 1
				},
			},
			"WorkLog": {
				"$":function(vo){
					/*#{1FE8CCFAL0Func*/
					self.TxtWork.text=vo?(vo.title||"Working..."):"Working...";
					logs="";
					divLogs.innerText=logs;
					divLogs.scrollTop = divLogs.scrollHeight;
					self.BtnCloseWork.enable=0;
					/*}#1FE8CCFAL0Func*/
				},
				/*BG*/"#1FE8B9DSU0": {
					"h": 300
				},
				/*HudCommit*/"#1FE8CHRPR0": {
					"display": 0
				},
				/*HudNoCommit*/"#1FE8CI52V0": {
					"display": 0
				},
				/*HudCheckIn*/"#1FE8B9DSU6": {
					"display": 0
				},
				/*HudCheckOut*/"#1FEKRM4060": {
					"display": 0
				},
				/*HudPreCommit*/"#1FE8CHQI00": {
					"display": 0
				},
				/*HudWorkLog*/"#1FE8CJ1N90": {
					"display": 1
				},
				/*BtnClose*/"#1FE8KO1NI0": {
					"display": 0
				},
			},
			"WorkError": {
			},
			"WorkDone": {
				"$":function(vo){
					/*#{1FE8CDM3T0Func*/
					self.BtnCloseWork.enable=1;
					/*}#1FE8CDM3T0Func*/
				},
			}
		},
		/*#{1FE8AVRFS1ExAttrs*/
		/*}#1FE8AVRFS1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FE8AVRFS1CreateFunc*/
			divLogs=this.BoxLog.webObj;
			divLogs.style.overflowY="scroll";
			divLogs.style.overflowX="scroll";
			
			divConfirm=this.BoxConfirmItems.webObj;
			divConfirm.style.overflowY="scroll";
			divConfirm.style.overflowX="scroll";
			/*}#1FE8AVRFS1CreateFunc*/
		
		}
	};
	/*#{1FE8AVRFS1ExViewDef*/

	//------------------------------------------------------------------------
	//显示，初始化对话框函数:
	cssVO.showDlg=function(vo){
		dlgVO=vo;
		switch(vo.mode){
			case "CheckIn":
				self.initCheckIn();
				break;
			case "CheckOut":
				self.initCheckOut();
				break;
			case "Commit":
				self.initCommit();
				break;
			case "Update":
				self.initUpdate();
				break;
		}
	};
	
	//------------------------------------------------------------------------
	//记录日志:
	cssVO.textOut=cssVO.log=function(text){
		console.log(text);
		logs+=text+"\n";
		divLogs.innerText=logs;
		divLogs.scrollTop = divLogs.scrollHeight;
	};
	
	//************************************************************************
	//Check in相关机制:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//初始化CheckIn：
		cssVO.initCheckIn=function(){
			workDisk=dlgVO.disk;
			dlgMode=MODE_CHECKIN;
			dlgStage=STAGE_CHECKIN_INPUT;
			self.showFace("CheckIn");
		};
		
		//--------------------------------------------------------------------
		//开始CheckIn:
		cssVO.startCheckIn=function(){
			let diskName,info,checker,version;
			if(dlgStage!==STAGE_CHECKIN_INPUT){
				throw "Error stage";
			}
			diskName=self.EdCheckInName.text;
			checker=/^[ A-Za-z0-9_-]{3,30}$/;
			if(!checker.test(diskName)){
				window.alert("Wrong name: name should be 3~30 chars, only allow 'A'~'Z', 'a'~'z', '0'~'9', '-', '_' or space");
				return;
			}
			info=self.EdCheckInInfo.text||"";
			version=self.EdCheckInVersion.text||"0.0.1";
			self.showFace("WorkLog",{title:"Check in disk"});
			dlgStage=STAGE_CHECKIN_WORK;
			workDisk.DoCheckInDisk(this,diskName,0,info,version).then(()=>{
				self.showFace("WorkDone");
				app.toolBox.showItemTool(workDisk);
			}).catch(error=>{
				self.showFace("WorkDone");
			});
		};

	}
	
	//************************************************************************
	//Commit相关机制:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//初始化Commit:
		cssVO.initCommit=function(){
			let info,list,cloudDiskInfo;
			workDisk=dlgVO.disk;
			dlgMode=MODE_COMMIT;
			dlgStage=STAGE_COMMIT_CHECK;
			self.showFace("PreCommit");
			self.BtnDoCommit.enable=0;
			self.BtnDoCommit.setText("Commit");
			divConfirm.innerText="";
			
			workDisk.DoGetModifys().then(async(modifys)=>{
				if(modifys){
					//查看版本是不是OK:
					try{
						cloudDiskInfo=await workDisk.DoGetCloudInfo(modifys.diskId);
						if(!cloudDiskInfo){
							dlgStage=STAGE_COMMIT_ERROR;
							window.alert("Check disk version error.");
							self.BtnDoCommit.setText("Close");
							self.BtnDoCommit.enable=1;
						}
						if(cloudDiskInfo.code!==200){
							dlgStage=STAGE_COMMIT_ERROR;
							window.alret("Check disk version error "+cloudDiskInfo.code+": "+cloudDiskInfo.info);
							self.BtnDoCommit.setText("Close");
							self.BtnDoCommit.enable=1;
							return;
						}
						if(cloudDiskInfo.versionIdx!==modifys.versionIdx){
							dlgStage=STAGE_COMMIT_ERROR;
							divConfirm.innerText="Local disk version-idx is too old.\r\nPlease update disk before commit changes.";
							self.BtnDoCommit.setText("Close");
							self.BtnDoCommit.enable=1;
							return;
						}
					}catch(e){
						dlgStage=STAGE_COMMIT_ERROR;
						divConfirm.innerText="Check disk version error, please check your network.";
						self.BtnDoCommit.setText("Close");
						self.BtnDoCommit.enable=1;
						return;
					}

					if(modifys.conflicts.length){
						info="Files remain conflict:\r\n";
						list=modifys.conflicts;
						if(list.length){
							list.forEach(item=>{info+="--"+item+"\r\n"});
						}
						info+="Please resolve conflicts before commit changes.";
						dlgStage=STAGE_COMMIT_ERROR;
						self.BtnDoCommit.setText("Close");
						divConfirm.innerText=info;
						self.BtnDoCommit.enable=1;
						return;
					}else{
						info=`Cloud version: ${cloudDiskInfo.version}\n`
						info+=`Cloud versionIdx: ${cloudDiskInfo.versionIdx}\n\n`
						self.EdCommitVersion.text=cloudDiskInfo.version;
						self.EdCommitVersion.startEdit();

						info+="Delete:\r\n";
						list=modifys.deleteItems;
						if(list.length){
							list.forEach(item=>{info+="--"+item+"\r\n"});
						}else{
							info+="NA\r\n";
						}

						info+="\r\nNew folders:\r\n";
						list=modifys.newDirs;
						if(list.length){
							list.forEach(item=>{info+="--"+item+"\r\n"});
						}else{
							info+="NA\r\n";
						}

						info+="\r\nNew files:\r\n";
						list=modifys.newFiles;
						if(list.length){
							list.forEach(item=>{info+="--"+item+"\r\n"});
						}else{
							info+="None\r\n";
						}

						info+="\r\nModifed files:\r\n";
						list=modifys.files;
						if(list.length){
							list.forEach(item=>{info+="--"+item+"\r\n"});
						}else{
							info+="None\r\n";
						}

						commitDiffVO=modifys;
						divConfirm.innerText=info;
						self.BtnDoCommit.enable=1;
						return;
					}
				}else{
					dlgStage=STAGE_COMMIT_NOCHANGE;
					divConfirm.innerText="No changes detected.";
					self.BtnDoCommit.setText("Close");
					self.BtnDoCommit.enable=1;
				}
			});
		};
		
		//--------------------------------------------------------------------
		//开始Commit
		cssVO.startCommit=function(){
			var commitInfo,commitVersion,commitTag;

			if(dlgStage===STAGE_COMMIT_NOCHANGE){
				app.closeDlg(self);
				return;
			}

			if(dlgStage===STAGE_COMMIT_ERROR){
				app.closeDlg(self);
				return;
			}
			
			if(dlgStage!==STAGE_COMMIT_CHECK){
				throw "Error stage";
			}

			commitInfo=self.EdCommitInfo.text;
			commitVersion=self.EdCommitVersion.text;
			commitTag=self.EdCommitTag.text;
			self.showFace("WorkLog",{title:"Commit disk"});
			dlgStage=STAGE_COMMIT_WORK;
			workDisk.DoCommitDisk(self,commitDiffVO,commitVersion,commitInfo,commitTag).then(()=>{
				self.showFace("WorkDone");
				app.toolBox.showItemTool(workDisk);
			}).catch(e=>{
				//TODO: Code this:
				self.log(""+e);
				self.showFace("WorkDone");
			});
		};
	}
	
	//************************************************************************
	//Check out相关机制:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//初始化CheckOut
		cssVO.initCheckOut=function(){
			workDisk=null;
			dlgMode=MODE_CHECKOUT;
			dlgStage=STAGE_CHECKOUT_INPUT;
			self.BtnCheckOut.enable=1;
			self.BtnCheckOut.setText("Check Out");
			self.showFace("CheckOut");
		};

		//--------------------------------------------------------------------
		//开始CheckOut
		cssVO.startCheckOut=function(){
			if(dlgStage===STAGE_CHECKOUT_INPUT){
				self.BtnCheckOut.enable=0;
				self._startCheckOut();
			}else{
				app.closeDlg(self);
			}
		};
		//--------------------------------------------------------------------
		//CheckOut异步函数:
		cssVO._startCheckOut=async function(){
			let diskId,diskName,versionIdx,checker,diskObj;
			let resVO;

			if(dlgStage!==STAGE_CHECKOUT_INPUT){
				throw "Error Stage";
			}
			dlgStage=STAGE_CHECKOUT_WORK;

			diskId=self.EdCheckOutDiskId.text.trim();
			diskName=self.EdCheckOutDiskName.text.trim();
			versionIdx=self.EdCheckOutVersionIdx.text.trim();
			if(versionIdx===""){
				versionIdx=0;
			}else{
				versionIdx=parseInt(self.EdCheckOutVersionIdx.text);
				if(!(versionIdx>0)){
					window.alert("Wrong version idx format.");
					return;
				}
			}
			
			//检测名字合法性:
			checker=/^[ A-Za-z0-9_-]{3,30}$/;
			if(!checker.test(diskName)){
				window.alert("Wrong name: name should be 3~30 chars, only allow 'A'~'Z', 'a'~'z', '0'~'9', '-', '_', or space");
				return;
			}
			//检测磁盘是否存在:
			diskObj=await JAXDisk.openDisk(diskName,0);
			if(diskObj){
				window.alert("Wrong name: disk name already taken.");
				return;
			}
			
			resVO=await CCDisk.DoGetCloudInfo(appData,diskId);
			if(!resVO){
				dlgStage=STAGE_CHECKOUT_ERROR;
				window.alert("Get cloud info error.");
				self.BtnCheckOut.setText("Close");
				self.BtnCheckOut.enable=1;
				return;
			}
			if(resVO.code!==200){
				dlgStage=STAGE_CHECKOUT_ERROR;
				window.alert("Check disk version error "+resVO.code+": "+resVO.info);
				self.BtnCheckOut.setText("Close");
				self.BtnCheckOut.enable=1;
				return;
			}
			
			//准备正式Check out:
			if(!versionIdx){
				versionIdx=resVO.versionIdx;
			}else if(versionIdx>resVO.versionIdx){
				window.alert("Wrong version idx, cloud version idx is: "+resVO.versionIdx);
				self.BtnCheckOut.enable=1;
			}
			
			dlgStage=STAGE_COMMIT_WORK;
			self.showFace("WorkLog",{title:"Check out disk"});
			try{
				let disk;
				disk=await CCDisk.DoCheckOutDisk(appData,self,diskId,versionIdx,diskName);
				app.DoAddCheckOutDisk(disk);
				self.showFace("WorkDone");
			}catch(e){
				//TODO: Code this:
				self.showFace("WorkDone");
			}
		};
	}
	
	//************************************************************************
	//Update相关机制:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//初始化Update
		cssVO.initUpdate=function(){
			let recoverFiles;
			workDisk=dlgVO.disk;
			dlgMode=MODE_UPDATE;
			dlgStage=STAGE_UPDATE_WORK;
			recoverFiles=window.confirm("Recover missing files?");
			self.startUpdate(recoverFiles);	
		};

		//--------------------------------------------------------------------
		//Update异步函数:
		cssVO.startUpdate=async function(recoverFiles){
			let diskId,diskName,versionIdx,checker,diskObj;
			let resVO;

			if(dlgStage!==STAGE_UPDATE_WORK){
				throw "Error Stage";
			}
			dlgStage=STAGE_UPDATE_WORK;

			self.showFace("WorkLog",{title:"Update disk"});
			try{
				await workDisk.DoUpdateDisk(self,recoverFiles);
				self.showFace("WorkDone");
				app.listBox.refresh();
				app.toolBox.showItemTool(workDisk);
			}catch(e){
				//TODO: Code this:
				self.showFace("WorkDone");
			}
		};
	}

	/*}#1FE8AVRFS1ExViewDef*/
	
	return cssVO;
};

/*#{1FE8AVRFS0PostCode*/
/*}#1FE8AVRFS0PostCode*/

export {DlgCloud};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "DlgCloud.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FE8AVRFS0", 
//			"attrs": {
//				"viewName": "\"DlgCloud\"", "device": "iPad 1024x768", "w": "1024", "h": "768", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FE8AVRFS1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8AVRFS2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FE8AVRFS3", 
//						"attrs": {}, "funcs": {"jaxId":"1FE8AVRFS4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "0", "viewName": "\"uiView\"", "x": "\"FW/2\"", "y": "113", "w": "#appCfg.size.dlgCloudW", "h": "300", "anchorH": "Center"
//					}, 
//					"faces": null, 
//					"viewFaces": {
//						"jaxId": "1FE8AVRFS6", 
//						"entrys": [
//							{
//								"jaxId": "1FE8C56TI0", 
//								"attrs": {"Face Name":"\"CheckIn\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8DD7KM0", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FEKRURJV0", 
//								"attrs": {"Face Name":"\"CheckOut\"","Face Function":"0"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEKS66T70", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FE8C68Q20", 
//								"attrs": {"Face Name":"\"PreCommit\"","Face Function":"0"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8DD7KM1", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FE8CCFAL0", 
//								"attrs": {"Face Name":"\"WorkLog\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8DD7KM4", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FE8CDA8L0", 
//								"attrs": {"Face Name":"\"WorkError\"","Face Function":"0"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8DD7KM5", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FE8CDM3T0", 
//								"attrs": {"Face Name":"\"WorkDone\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8DD7KM6", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							}
//						]
//					}, 
//					"funcs": {"jaxId":"1FE8AVRFS7","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FE8B9DSU0", 
//							"attrs": {
//								"locked": "0", "id": "\"BG\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "500", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//								"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "#appCfg.color.window", "border": "1", "borderStyle": "Solid", 
//								"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "1", "shadowX": "0", "shadowY": "3", "shadowBlur": "6", "shadowSpread": "0", 
//								"shadowColor": "[0,0,0,0.5]"
//							}, 
//							"faces": {
//								"jaxId": "1FE8B9DSU1", 
//								"entrys": [
//									{
//										"jaxId": "1FE8DD7KM7", "entryId": "1FE8C56TI0", "faceName": "CheckIn", 
//										"attrs": {"h":"200"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE8DD7KM8", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FE8DD7KM9", "entryId": "1FE8CCFAL0", "faceName": "WorkLog", 
//										"attrs": {"h":"300"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE8DD7KM10", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEIHMMNR0", "entryId": "1FE8C68Q20", "faceName": "PreCommit", 
//										"attrs": {"h":"500"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEIHMMNR1", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEKS66T71", "entryId": "1FEKRURJV0", "faceName": "CheckOut", 
//										"attrs": {"h":"200"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEKS66T72", 
//											"attrs": []
//										}
//										
//									}
//								]
//							}, 
//							"funcs": {"jaxId":"1FE8B9DSU2","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "LayoutGroup", "jaxId": "1FE8B9DSU3", 
//							"attrs": {"locked":"0","id":"\"\""}, 
//							"funcs": {"jaxId":"1FE8B9DSU5","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "HudObj", "jaxId": "1FE8CHRPR0", 
//							"attrs": {
//								"locked": "0", "id": "\"HudCommit\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"faces": {
//								"jaxId": "1FE8DD7KM15", 
//								"entrys": [
//									{
//										"jaxId": "1FE8DD7KM16", "entryId": "1FE8C56TI0", "faceName": "CheckIn", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE8DD7KM17", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FE8DD7KM18", "entryId": "1FE8CCFAL0", "faceName": "WorkLog", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE8DD7KM19", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEIHMMNR3", "entryId": "1FE8C68Q20", "faceName": "PreCommit", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEIHMMNR4", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEKS66T73", "entryId": "1FEKRURJV0", "faceName": "CheckOut", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEKS66T74", 
//											"attrs": []
//										}
//										
//									}
//								]
//							}, 
//							"funcs": {"jaxId":"1FE8CHRPR1","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "HudObj", "jaxId": "1FE8CI52V0", 
//							"attrs": {
//								"locked": "0", "id": "\"HudNoCommit\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"faces": {
//								"jaxId": "1FE8DD7KM20", 
//								"entrys": [
//									{
//										"jaxId": "1FE8DD7KM21", "entryId": "1FE8C56TI0", "faceName": "CheckIn", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE8DD7KM22", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FE8DD7KM23", "entryId": "1FE8CCFAL0", "faceName": "WorkLog", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE8DD7KM24", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEIHMMNR5", "entryId": "1FE8C68Q20", "faceName": "PreCommit", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEIHMMNR6", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEKS66T75", "entryId": "1FEKRURJV0", "faceName": "CheckOut", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEKS66T76", 
//											"attrs": []
//										}
//										
//									}
//								]
//							}, 
//							"funcs": {"jaxId":"1FE8CI52V1","funcs":[]}, "subs": []
//						},
//						{
//							"type": "object", "def": "HudObj", "jaxId": "1FE8B9DSU6", 
//							"attrs": {
//								"locked": "1", "id": "\"HudCheckIn\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//								"display": "Hide", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"faces": {
//								"jaxId": "1FE8B9DSU7", 
//								"entrys": [
//									{
//										"jaxId": "1FE8DD7KM25", "entryId": "1FE8C56TI0", "faceName": "CheckIn", 
//										"attrs": {"display":"Show"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE8DD7KM26", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FE8DD7KM27", "entryId": "1FE8CCFAL0", "faceName": "WorkLog", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE8DD7KM28", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEIHMMNR13", "entryId": "1FE8C68Q20", "faceName": "PreCommit", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEIHMMNR14", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEKS66T79", "entryId": "1FEKRURJV0", "faceName": "CheckOut", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEKS66T710", 
//											"attrs": []
//										}
//										
//									}
//								]
//							}, 
//							"funcs": {"jaxId":"1FE8B9DSU8","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FE8B9DSU9", 
//									"attrs": {
//										"locked": "0", "id": "\"\"", "x": "20", "y": "10", "w": "\"FW\"", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Check in disk\"", "color": "[0,0,0]", 
//										"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "16", 
//										"bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FE8B9DSU11","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FE8BSJ0H0", 
//									"attrs": {
//										"locked": "0", "id": "\"LBName\"", "x": "0", "y": "40", "w": "80", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Name:\"", "color": "[0,0,0]", "autoSizeW": "0", 
//										"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Right", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//										"bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FE8BSJ0H2","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudEdit", "jaxId": "1FE8BSJ0H3", 
//											"attrs": {
//												"locked": "0", "id": "\"EdCheckInName\"", "x": "\"FW+5\"", "y": "0", "w": "200", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//												"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "bgColor": "[255,255,255,1]", 
//												"border": "1", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "text": "\"\"", "font": "\"\"", "color": "[0,0,0]", "fontSize": "16", 
//												"placeHolder": "\"\"", "selectOnFocus": "1", "outline": "1", "spellCheck": "1", "inputType": "text"
//											}, 
//											"funcs": {"jaxId":"1FE8BSJ0H5","funcs":[]}, "subs": []
//										}
//									]
//									
//								},
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FE8BSL5L0", 
//									"attrs": {
//										"locked": "0", "id": "\"LBVersion\"", "x": "0", "y": "70", "w": "80", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Version:\"", "color": "[0,0,0]", "autoSizeW": "0", 
//										"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Right", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//										"bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FE8BSL5M0","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudEdit", "jaxId": "1FE8BSL5M1", 
//											"attrs": {
//												"locked": "0", "id": "\"EdCheckInVersion\"", "x": "\"FW+5\"", "y": "0", "w": "200", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//												"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "bgColor": "[255,255,255,1]", 
//												"border": "1", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "text": "\"0.0.1\"", "font": "\"\"", "color": "[0,0,0]", "fontSize": "16", 
//												"placeHolder": "\"\"", "selectOnFocus": "1", "outline": "1", "spellCheck": "1", "inputType": "text"
//											}, 
//											"funcs": {"jaxId":"1FE8BSL5M2","funcs":[]}, "subs": []
//										}
//									]
//									
//								},
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FE8C0FKR0", 
//									"attrs": {
//										"locked": "0", "id": "\"LBInfo\"", "x": "0", "y": "100", "w": "80", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Info:\"", "color": "[0,0,0]", "autoSizeW": "0", 
//										"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Right", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//										"bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FE8C0FKS0","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudEdit", "jaxId": "1FE8C0FKS1", 
//											"attrs": {
//												"locked": "0", "id": "\"EdCheckInInfo\"", "x": "\"FW+5\"", "y": "0", "w": "320", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//												"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "bgColor": "[255,255,255,1]", 
//												"border": "1", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "text": "\"\"", "font": "\"\"", "color": "[0,0,0]", "fontSize": "16", 
//												"placeHolder": "\"\"", "selectOnFocus": "1", "outline": "1", "spellCheck": "1", "inputType": "text"
//											}, 
//											"funcs": {"jaxId":"1FE8C0FKS2","funcs":[]}, "subs": []
//										}
//									]
//									
//								},
//								{
//									"type": "object", "def": "Gear1FDAETMLJ0", "jaxId": "1FE8DD7KN2", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8DD7KN3", 
//										"attrs": {
//											"w": {"type":"int","valText":"150","initVal":0,"info":null,"tip":null}, 
//											"text": {
//												"type": "string", "valText": "\"Check In\"", "initVal": "", "info": null, 
//												"tip": null
//											}
//										}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8DD7KN4", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnCheckIn\"", "x": "#(appCfg.size.dlgCloudW-150)/2", "y": "140", "autoLayout": "Off"
//									}, 
//									"faces": null, 
//									"funcs": {
//										"jaxId": "1FE8DD7KN6", 
//										"funcs": [
//											{
//												"jaxId": "1FEBSCIBI0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEBSD5UD0", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}
//									
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "HudObj", "jaxId": "1FEKRM4060", 
//							"attrs": {
//								"locked": "1", "id": "\"HudCheckOut\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//								"display": "Hide", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"faces": {
//								"jaxId": "1FEKRM4061", 
//								"entrys": [
//									{
//										"jaxId": "1FEKRM4062", "entryId": "1FE8C56TI0", "faceName": "CheckIn", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEKRM4063", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEKRM4070", "entryId": "1FE8CCFAL0", "faceName": "WorkLog", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEKRM4071", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEKRM4072", "entryId": "1FE8C68Q20", "faceName": "PreCommit", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEKRM4073", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEKS66T82", "entryId": "1FEKRURJV0", "faceName": "CheckOut", 
//										"attrs": {"display":"Show"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEKS66T83", 
//											"attrs": []
//										}
//										
//									}
//								]
//							}, 
//							"funcs": {"jaxId":"1FEKRM4074","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FEKRM4075", 
//									"attrs": {
//										"locked": "0", "id": "\"\"", "x": "20", "y": "10", "w": "\"FW\"", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Check out disk\"", "color": "[0,0,0]", 
//										"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "16", 
//										"bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FEKRM4076","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FEKRM4077", 
//									"attrs": {
//										"locked": "0", "id": "\"LBDiskId\"", "x": "0", "y": "40", "w": "120", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Disk Id:\"", "color": "[0,0,0]", "autoSizeW": "0", 
//										"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Right", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//										"bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FEKRM4078","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudEdit", "jaxId": "1FEKRM4079", 
//											"attrs": {
//												"locked": "0", "id": "\"EdCheckOutDiskId\"", "x": "\"FW+5\"", "y": "0", "w": "240", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//												"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "bgColor": "[255,255,255,1]", 
//												"border": "1", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "text": "\"\"", "font": "\"\"", "color": "[0,0,0]", "fontSize": "16", 
//												"placeHolder": "\"\"", "selectOnFocus": "1", "outline": "1", "spellCheck": "1", "inputType": "text"
//											}, 
//											"funcs": {"jaxId":"1FEKRM40710","funcs":[]}, "subs": []
//										}
//									]
//									
//								},
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FEKRM40711", 
//									"attrs": {
//										"locked": "0", "id": "\"LBVersion\"", "x": "0", "y": "70", "w": "120", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Version Id:\"", "color": "[0,0,0]", 
//										"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Right", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//										"bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FEKRM4080","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudEdit", "jaxId": "1FEKRM4081", 
//											"attrs": {
//												"locked": "0", "id": "\"EdCheckOutVersionIdx\"", "x": "\"FW+5\"", "y": "0", "w": "240", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//												"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "bgColor": "[255,255,255,1]", 
//												"border": "1", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "text": "\"\"", "font": "\"\"", "color": "[0,0,0]", "fontSize": "16", 
//												"placeHolder": "\"Current version idx\"", "selectOnFocus": "1", "outline": "1", "spellCheck": "1", "inputType": "text"
//											}, 
//											"funcs": {"jaxId":"1FEKRM4090","funcs":[]}, "subs": []
//										}
//									]
//									
//								},
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FEKRM4091", 
//									"attrs": {
//										"locked": "0", "id": "\"LBName\"", "x": "0", "y": "100", "w": "120", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"New disk name:\"", "color": "[0,0,0]", 
//										"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Right", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", 
//										"bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FEKRM4092","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudEdit", "jaxId": "1FEKRM4093", 
//											"attrs": {
//												"locked": "0", "id": "\"EdCheckOutDiskName\"", "x": "\"FW+5\"", "y": "0", "w": "240", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//												"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "bgColor": "[255,255,255,1]", 
//												"border": "1", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "text": "\"\"", "font": "\"\"", "color": "[0,0,0]", "fontSize": "16", 
//												"placeHolder": "\"\"", "selectOnFocus": "1", "outline": "1", "spellCheck": "1", "inputType": "text"
//											}, 
//											"funcs": {"jaxId":"1FEKRM4094","funcs":[]}, "subs": []
//										}
//									]
//									
//								},
//								{
//									"type": "object", "def": "Gear1FDAETMLJ0", "jaxId": "1FEKRM4095", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEKRM40A0", 
//										"attrs": {
//											"w": {"type":"int","valText":"150","initVal":0,"info":null,"tip":null}, 
//											"text": {
//												"type": "string", "valText": "\"Check Out\"", "initVal": "", 
//												"info": null, "tip": null
//											}
//										}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEKRM40A1", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnCheckOut\"", "x": "#(appCfg.size.dlgCloudW-150)/2", "y": "140", "autoLayout": "Off"
//									}, 
//									"faces": null, 
//									"funcs": {
//										"jaxId": "1FEKRM40A2", 
//										"funcs": [
//											{
//												"jaxId": "1FEKRM40A3", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEKRM40A4", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}
//									
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "HudObj", "jaxId": "1FE8CHQI00", 
//							"attrs": {
//								"locked": "0", "id": "\"HudPreCommit\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "500", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//								"display": "Hide", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"faces": {
//								"jaxId": "1FE8CHQI01", 
//								"entrys": [
//									{
//										"jaxId": "1FE8DD7KM11", "entryId": "1FE8C56TI0", "faceName": "CheckIn", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE8DD7KM12", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FE8DD7KM13", "entryId": "1FE8CCFAL0", "faceName": "WorkLog", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE8DD7KM14", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEIHMMNR23", "entryId": "1FE8C68Q20", "faceName": "PreCommit", 
//										"attrs": {"display":"Show"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEIHMMNR24", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEKS66T80", "entryId": "1FEKRURJV0", "faceName": "CheckOut", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEKS66T81", 
//											"attrs": []
//										}
//										
//									}
//								]
//							}, 
//							"funcs": {"jaxId":"1FE8CHQI02","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FEIHM97I0", 
//									"attrs": {
//										"locked": "0", "id": "\"\"", "x": "20", "y": "18", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Confirm items to commit:\"", "color": "[0,0,0]", 
//										"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "#appCfg.txtSize.big", 
//										"bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FEIHMMNR26","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "Gear1FDAETMLJ0", "jaxId": "1FEIHM97I1", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEIHMMNR27", 
//										"attrs": {
//											"w": {"type":"int","valText":"150","initVal":0,"info":null,"tip":null}, 
//											"text": {
//												"type": "string", "valText": "\"Commit\"", "initVal": "", "info": null, 
//												"tip": null
//											}
//										}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEIHMMNR28", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnDoCommit\"", "x": "150", "y": "445", "autoLayout": "Off"
//									}, 
//									"faces": null, 
//									"funcs": {
//										"jaxId": "1FEIHMMNR30", 
//										"funcs": [
//											{
//												"jaxId": "1FEISU2L90", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEISUJBN0", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}
//									
//								},
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FEIHM97I2", 
//									"attrs": {
//										"locked": "0", "id": "\"BoxConfirmItems\"", "x": "20", "y": "50", "w": "\"FW-40\"", "h": "\"FH-220\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[180,180,180,0]", 
//										"border": "1", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", 
//										"shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//									}, 
//									"funcs": {"jaxId":"1FEIHMMNR32","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FEIT9IKT0", 
//									"attrs": {
//										"locked": "0", "id": "\"\"", "x": "18", "y": "390", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Information:\"", "color": "[0,0,0]", 
//										"autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "16", 
//										"bold": "0", "italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FEIT9IKT2","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudEdit", "jaxId": "1FEIT9IKT3", 
//									"attrs": {
//										"locked": "0", "id": "\"EdCommitInfo\"", "x": "20", "y": "410", "w": "\"FW-40\"", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "bgColor": "[255,255,255,1]", 
//										"border": "1", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "text": "\"\"", "font": "\"\"", "color": "[0,0,0]", "fontSize": "16", 
//										"placeHolder": "\"\"", "selectOnFocus": "1", "outline": "1", "spellCheck": "1", "inputType": "text"
//									}, 
//									"funcs": {"jaxId":"1FEIT9IKU1","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FEJ17APO0", 
//									"attrs": {
//										"locked": "0", "id": "\"\"", "x": "18", "y": "340", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Verison:\"", "color": "[0,0,0]", "autoSizeW": "0", 
//										"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "16", "bold": "0", 
//										"italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FEJ17APO1","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudEdit", "jaxId": "1FEJ197G90", 
//									"attrs": {
//										"locked": "0", "id": "\"EdCommitVersion\"", "x": "20", "y": "360", "w": "\"FW/2-30\"", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "bgColor": "[255,255,255,1]", 
//										"border": "1", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "text": "\"\"", "font": "\"\"", "color": "[0,0,0]", "fontSize": "16", 
//										"placeHolder": "\"\"", "selectOnFocus": "1", "outline": "1", "spellCheck": "1", "inputType": "text"
//									}, 
//									"funcs": {"jaxId":"1FEJ197G91","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudEdit", "jaxId": "1FEJ1IHQ60", 
//									"attrs": {
//										"locked": "0", "id": "\"EdCommitTag\"", "x": "235", "y": "360", "w": "\"FW/2-30\"", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "bgColor": "[255,255,255,1]", 
//										"border": "1", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "text": "\"\"", "font": "\"\"", "color": "[0,0,0]", "fontSize": "16", 
//										"placeHolder": "\"\"", "selectOnFocus": "1", "outline": "1", "spellCheck": "1", "inputType": "text"
//									}, 
//									"funcs": {"jaxId":"1FEJ1IHQ61","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FEJ1IQFF0", 
//									"attrs": {
//										"locked": "0", "id": "\"\"", "x": "235", "y": "340", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Tag:\"", "color": "[0,0,0]", "autoSizeW": "0", 
//										"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "16", "bold": "0", 
//										"italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FEJ1IQFG0","funcs":[]}, "subs": []
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "HudObj", "jaxId": "1FE8CJ1N90", 
//							"attrs": {
//								"locked": "0", "id": "\"HudWorkLog\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"faces": {
//								"jaxId": "1FE8DD7KN7", 
//								"entrys": [
//									{
//										"jaxId": "1FE8DD7KN8", "entryId": "1FE8C56TI0", "faceName": "CheckIn", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE8DD7KN9", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FE8DD7KN10", "entryId": "1FE8CCFAL0", "faceName": "WorkLog", 
//										"attrs": {"display":"Show"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FE8DD7KN11", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEIHMMNR7", "entryId": "1FE8C68Q20", "faceName": "PreCommit", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEIHMMNR8", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEKS66T77", "entryId": "1FEKRURJV0", "faceName": "CheckOut", 
//										"attrs": {"display":"Hide"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEKS66T78", 
//											"attrs": []
//										}
//										
//									}
//								]
//							}, 
//							"funcs": {"jaxId":"1FE8CJ1N91","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FE8DD7KN12", 
//									"attrs": {
//										"locked": "0", "id": "\"TxtWork\"", "x": "14", "y": "12", "w": "100", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "text": "\"Work type:\"", "color": "[0,0,0]", "autoSizeW": "0", 
//										"autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", "alignH": "Left", "alignV": "Top", "font": "\"\"", "fontSize": "16", "bold": "0", 
//										"italic": "0", "underline": "0"
//									}, 
//									"funcs": {"jaxId":"1FE8DD7KN14","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FE8DD7KN15", 
//									"attrs": {
//										"locked": "0", "id": "\"BoxLog\"", "x": "15", "y": "38", "w": "\"FW-30\"", "h": "200", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0", "color": "[0,0,0,0]", "border": "1", 
//										"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", 
//										"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]"
//									}, 
//									"funcs": {"jaxId":"1FE8DD7KN17","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "Gear1FDAETMLJ0", "jaxId": "1FE8D9M2C0", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8D9M2C1", 
//										"attrs": {
//											"w": {"type":"int","valText":"150","initVal":0,"info":null,"tip":null}, 
//											"text": {
//												"type": "string", "valText": "\"Close\"", "initVal": "", "info": null, 
//												"tip": null
//											}
//										}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8D9M2C2", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnCloseLog\"", "x": "#(appCfg.size.dlgCloudW-150)/2", "y": "253", "autoLayout": "Off"
//									}, 
//									"faces": null, "funcs": {"jaxId":"1FE8D9M2C4","funcs":[]}
//								},
//								{
//									"type": "object", "def": "Gear1FDAETMLJ0", "jaxId": "1FE8D9N0K0", 
//									"args": {
//										"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8D9N0K1", 
//										"attrs": {
//											"w": {"type":"int","valText":"150","initVal":0,"info":null,"tip":null}, 
//											"text": {
//												"type": "string", "valText": "\"Close\"", "initVal": "", "info": null, 
//												"tip": null
//											}
//										}
//									}, 
//									"stateObj": {
//										"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8D9N0K2", 
//										"attrs": {}
//									}, 
//									"attrs": {
//										"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnCloseWork\"", "x": "#(appCfg.size.dlgCloudW-150)/2", "y": "253", "autoLayout": "Off"
//									}, 
//									"faces": null, 
//									"funcs": {
//										"jaxId": "1FE8D9N0K3", 
//										"funcs": [
//											{
//												"jaxId": "1FEQAFTVB0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//												"args": {
//													"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FEQAGH2J0", 
//													"attrs": {}
//												}, 
//												"attrs": {"Mockup Result":"\"\""}
//											}
//										]
//									}
//									
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FE8KO1NI0", 
//							"args": {
//								"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8KO1NI1", 
//								"attrs": {
//									"w": {"type":"int","valText":"24","initVal":0,"info":null,"tip":null}, 
//									"image": {
//										"type": "string", "valText": "\"close.svg\"", "initVal": "", "info": null, 
//										"tip": null
//									}
//								}
//							}, 
//							"stateObj": {
//								"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8KO1NI2", 
//								"attrs": {}
//							}, 
//							"attrs": {
//								"locked": {"type":"auto","valText":"0","info":"","tip":""}, "id": "\"BtnClose\"", "x": "\"FW-32\"", "y": "8", "autoLayout": "Off"
//							}, 
//							"faces": {
//								"jaxId": "1FEIHMMNR33", 
//								"entrys": [
//									{
//										"jaxId": "1FEQAKI6D0", "entryId": "1FE8CCFAL0", "faceName": "WorkLog", 
//										"attrs": {"display":"Off"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEQAKI6D1", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEQAKI6D2", "entryId": "1FE8C56TI0", "faceName": "CheckIn", 
//										"attrs": {"display":"On"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEQAKI6D3", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEQAKI6D4", "entryId": "1FEKRURJV0", "faceName": "CheckOut", 
//										"attrs": {"display":"On"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEQAKI6D5", 
//											"attrs": []
//										}
//										
//									},
//									{
//										"jaxId": "1FEQAKI6D6", "entryId": "1FE8C68Q20", "faceName": "PreCommit", 
//										"attrs": {"display":"On"}, 
//										"anis": {
//											"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FEQAKI6D7", 
//											"attrs": []
//										}
//										
//									}
//								]
//							}, 
//							"funcs": {
//								"jaxId": "1FE8KO1NI4", 
//								"funcs": [
//									{
//										"jaxId": "1FE8KO1NI5", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//										"args": {
//											"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FE8KO1NI6", 
//											"attrs": {}
//										}, 
//										"attrs": {"Mockup Result":"\"\""}
//									}
//								]
//							}
//							
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FE8AVRFS8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FE8AVRFS10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}