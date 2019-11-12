# manage
社团管理系统



[toc]

## User

#####1. 注册
请求头: Content-Type：application/json;
URL: "http://localhost:8080/manage/admin_User_register"
请求参数:  uid, phone, uname, IDCard, faculty, className, heardImg, password, sex
```
{
            "uid":"201731104180",
            "phone":"13477178888",
            "uname":"ZhangYu",
            "IDCard":"421087199999999999",
            "faculty":"Computer",
            "className":"Software1701",
            "heardImg":"https://images.cnblogs.com/cnblogs_com/zoey686/1581380/o_191103075456%E5%A3%81%E7%BA%B82.jpeg",
            "password":"123456",
            "sex":"female"
}
```

返回参数
```
{
        "flag": "true"
}
```
</br>


#####2. 登陆
学号和密码进行登陆
URL: "http://localhost:8080/manage/admin_User_login"
请求参数: uid, password
```
{
        "uid":"201731104180",
         "password":"123456"
}
```

返回参数
```
{
     "flag": true
}
```
</br>

#####3.修改密码
URL: "http://localhost:8080/manage/admin_User_changePwd"
请求参数: uid, oldPwd, newPwd
```
{
	"uid":"201731104180",
	"oldPwd":"123456",
	"newPwd":"111111"
}
```

返回参数
```
{
    "flag": true
}
```
</br>


#####4.显示个人信息
URL:"http://localhost:8080/manage/admin_User_showInfo"
请求参数: uid
```
{
	"uid":"201731104180"
}
```

返回参数
```
{
    "User": {
        "IDCard": "421087199999999999",
        "className": "Software1701",
        "faculty": "Computer",
        "heardImg": "https://images.cnblogs.com/cnblogs_com/zoey686/1581380/o_191103075456%E5%A3%81%E7%BA%B82.jpeg",
        "password": "111111",
        "phone": "13477178888",
        "sex": "female",
        "uid": "201731104180",
        "uname": "ZhangYu"
    }
}
```
</br>

#####5.修改头像
URL:"http://localhost:8080/manage/admin_User_changeImg"
请求参数: uid, img
```
{
	"uid":"201731104180",
	"img":"https://images.cnblogs.com/cnblogs_com/zoey686/1581380/o_191103075448%E5%A3%81%E7%BA%B81.jpeg"
}
```

返回参数
```
{
    "flag": "true"
}
```
</br>
</br>

##Department

#####1. 修改部门信息
URL: "http://localhost:8080/manage/admin_Department_changeInfo"
所需参数: did, dname, dintro
```
{
	"did":1,
	"dname":"organizationNEW!!!",
	"dintro":"aaaaaaaaaaaaaaaaaNEW!!"
}
```

返回参数
```
{
    "flag": "true"
}
```
</br>

#####2. 显示部门所有成员信息
URL: "http://localhost:8080/manage/admin_Department_showDepartmentUser"
所需参数: did
```
{
	"did":1
}
```

返回参数
```
[
    {
        "DepartmentUser": {
            "IDCard": "421087199999999999",
            "className": "Software1701",
            "faculty": "Computer",
            "heardImg": "https://images.cnblogs.com/cnblogs_com/zoey686/1581380/o_191103075448%E5%A3%81%E7%BA%B81.jpeg",
            "password": "111111",
            "phone": "13477178888",
            "sex": "female",
            "uid": "201731104180",
            "uname": "ZhangYu"
        }
    }
]
```
</br>

#####3. 显示部门信息
URL: "http://localhost:8080/manage/admin_Department_showDepartmentInfo"
所需参数: did
```
{
	"did":1
}
```

返回参数
```
{
    "DepartmentInfo": {
        "cid": 1,
        "did": 1,
        "dintro": "aaaaaaaaaaaaaaaaaNEW!!",
        "dname": "organizationNEW!!!"
    }
}
```
</br>

#####4. 提交审核的文章
URL: "http://localhost:8080/manage/admin_Department_addVerifyArticle"
所需参数: cid(社团号), uid(作者), content, title
```
{
	"cid":1,
	"uid":"201731104180",
	"content":"nei rong xixixiix",
	"title":"Atitle"
}
```
返回参数
```
{
    "flag": "true"
}
```
</br>

#####5. 提交审核的活动
URL:"http://localhost:8080/manage/admin_Department_addVerifyAction",
所需参数: aname(活动名称), cid(社团号), aintro, aimg, startTime, endTime
```
{
	"aname":"computer fix",
	"cid":1,
	"aintro":"this is a introduction for the aciton",
	"aimg":"https://images.cnblogs.com/cnblogs_com/zoey686/1581380/o_191103075448%E5%A3%81%E7%BA%B81.jpeg",
	"startTime": "",
	"endTime":""
}
```

返回参数
```
{
    "flag": "true"
}
```
</br>
</br>

##Club

#####1. 添加部门
URL:"http://localhost:8080/manage/admin_Club_addDepartment"
所需参数: dname, cid, dintro
```
{
	"dname":"organization",
	"cid":1,
	"dintro":"aaaaaaaaaaaaaaaaa"
}
```
返回参数
```
{
    "flag": "true"
}
```
</br>

#####2. 添加成员
URL:"http://localhost:8080/manage/admin_Club_addUser"
所需参数: uid, cid, did, position
```
{
	"uid":"201731104180",
	"cid":1,
	"did":1,
	"position":"chairman"
}
```

返回参数
```
{
    "flag": "true"
}
```
</br>

#####3. 修改成员职位
URL:"http://localhost:8080/manage/admin_Club_changePosition",
所需参数: uid, cid, did, position
```
{
	"uid":"201731104180",
	"cid":1,
	"did":1,
	"position":"minister"
}
```

返回参数
```
{
    "flag": "true"
}
```
</br>

#####4. 修改社团简介
URL:"http://localhost:8080/manage/admin_Club_changeCintro",
所需参数: cid, cintro
```
{
"cid":1,
"cintro":"new introduction!"
}
```

返回参数
```
{
    "flag": "true"
}
```
</br>

#####5. 展示社团的全部部门
URL:"http://localhost:8080/manage/admin_Club_showDepartments"
所需参数: cid
```
{
    "cid":1
}
```

返回参数
```
[
    {
        "Department": {
            "cid": 1,
            "did": 1,
            "dintro": "aaaaaaaaaaaaaaaaaNEW!!",
            "dname": "organizationNEW!!!"
        }
    }
]
```
</br>

#####6. 显示此社团全部成员
URL:"http://localhost:8080/manage/admin_Club_showClubUser"
所需参数: cid
```
{
    "cid":1
}
```
返回参数
```
[
    {
        "ClubUser": {
            "IDCard": "421087199999999999",
            "className": "Software1701",
            "faculty": "Computer",
            "heardImg": "https://images.cnblogs.com/cnblogs_com/zoey686/1581380/o_191103075448%E5%A3%81%E7%BA%B81.jpeg",
            "password": "111111",
            "phone": "13477178888",
            "sex": "female",
            "uid": "201731104180",
            "uname": "ZhangYu"
        }
    }
]
```
<br>

#####7. 显示社团信息
URL:"http://localhost:8080/manage/admin_Club_showClubInfo"
所需参数: cid
```
{
    "cid":1
}
```
返回参数(时间未显示)
```
{
    "clubInfo": {
        "bulidTime": null,
        "chairman": "201731104180",
        "cid": 1,
        "cintro": "new introduction!",
        "cname": "Computer Science",
        "vicechairman": "201731104180"
    }
}
```
</br>

#####8. 展示此社团所有的审核活动
URL:"http://localhost:8080/manage/admin_Club_showVerifyActions"
所需参数: cid
```
{
    "cid":1
}
```
返回参数
```
[
    {
        "size": 1
    },
    {
        "action": {
            "aImg": "",
            "aid": 1,
            "aintro": "this is a introduction for the aciton",
            "aname": "computer fix",
            "cid": 1,
            "endTime": null,
            "startTime": null
        }
    }
]
```
</br>

#####9. 展示此社团所有的审核文章
URL:"http://localhost:8080/manage/admin_Club_showVerifyArticles"
所需参数: cid
```
{
    "cid":1
}
```
返回参数
```
[
    {
        "size": 12
    },
    {
        "article": {
            "artid": 7,
            "cid": 1,
            "content": "",
            "createTime": {
                "date": 10,
                "day": 0,
                "hours": 16,
                "minutes": 5,
                "month": 10,
                "nanos": 0,
                "seconds": 34,
                "time": 1573373134000,
                "timezoneOffset": -480,
                "year": 119
            },
            "title": "titie",
            "uid": "201731104180"
        }
    },
    {
        "article": {
            "artid": 8,
            "cid": 1,
            "content": "",
            "createTime": {
                "date": 10,
                "day": 0,
                "hours": 16,
                "minutes": 6,
                "month": 10,
                "nanos": 0,
                "seconds": 7,
                "time": 1573373167000,
                "timezoneOffset": -480,
                "year": 119
            },
            "title": "titie",
            "uid": "201731104180"
        }
    },
    ...............
]
```
</br>

#####10. 审核通过某活动
URL: "http://localhost:8080/manage/admin_Club_agreeAction",
所需参数: aid, aname, cid, aintro, aImg, startTime, endTime
```
{
	"aid":1,
	"aname":"computer fix",
	"cid":1,
	"aintro":"this is a introduction for the aciton",
	"aImg":"",
	"startTime":"",
	"endTime":""
}
```

返回参数
```
{
    "falg": "true"
}
```

#####11. 审核通过某文章
URL: "http://localhost:8080/manage/admin_Club_agreeArticle",
所需参数: artid, cid, uid, content, title
```
{
	"artid":18,
	"cid":1,
	"uid":"201731104180",
	"content":"nei rong xixixiix",
	"title":"Atitle",
}
```
返回参数
```
{
    "falg": "true"
}
```
</br>
</br>



##Root

#####1. 添加社团
URL:"http://localhost:8080/manage/admin_Root_addClub"
所需参数: cname, chariman, vicechairman, cintro
```
{
	"cname":"Computer Science",
	"chairman":"201731104180",
	"vicechairman":"201731104180",
	"cintro":"fix computer",
}
```

返回参数
```
{
    "flag": "true"
}
```
