'**********************************************************************************************************************
'Test Name:		创建群 (ec登陆后主面板)
'Purpose:			
'Requirement:	
'Note:			 
'Starting Page:	创建群
'Created by:		zhangyang	 			
'Creation date:	14/05/2018
'
'Modification History: 
'Date:				Changed by:			Purpose:
'**********************************************************************************************************************
Option Explicit

'定义参数变量
Dim strType, strSubType, strNotes
Dim strGroupName, strGrpupMemberName1

'==================================================================
'依据业务脚本调用，确定执行步骤
Call SetActionTableRow(Parameter("Action"))
'==================================================================

strType = DataTable("Type", dtLocalSheet)
strSubType = DataTable("SubType", dtLocalSheet)
strNotes = DataTable("Notes", dtLocalSheet)

strGroupName = EvaluateInputParam(DataTable("EC群名", dtLocalSheet))
strGrpupMemberName1 = EvaluateInputParam(DataTable("群成员1", dtLocalSheet))


Call CloseOptionalDialog(2)

'*****************************************************************
'脚本说明：检查当前是否在登录界面
'*****************************************************************
If Window("EC10登录界面_操作项").InsightObject("登录按钮").Exist(5) Then
	Reporter.ReportEvent micPass, "Verify Page - 登录界面","At 登录界面 Page"
Else
	Reporter.ReportEvent micFail, "Verify Page - 登录界面","Not at 登录界面 Page"
	Call ExitRun()
End If
'*****************************************************************
'脚本说明：登录界面可操作步骤
'*****************************************************************
Select Case Lcase(strType)
	Case Lcase("创建群")
		Select Case Lcase(strSubType)
			'1.输入群名
			Case Lcase("输入群名")
			Window("EC10登录界面_操作项").InsightObject("账号输入框").type strUserName

			'2.输入登录账号密码
			Case Lcase("输入密码")
				Window("EC10登录界面_操作项").InsightObject("账号密码输入框").type strPassword

			'3.单击登录按钮进行登录
			Case Lcase("点击登录按钮")
				Window("EC10登录界面_操作项").InsightObject("登录按钮").Click

			
		End Select
End Select