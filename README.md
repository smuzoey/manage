</br>

# manage

社团管理系统后端, 目前接口信息如下

</br>
<h2 id = "catalog">目录</h2>


- [User](#User)
    - [注册](#register)
    - [登陆](#login)
    - [修改密码](#changePwd)
    - [修改头像](#changeImg)
    - [展示某人加入社团的信息](#showUserClubs)
    - [用户申请加入某社团,某部门](#applyForJoinClub)
    - [提交创建社团的申请](#applyToCreateClub)

- [Department](#Department)
    - [修改部门信息](#changeInfo)
    - [显示部门全部成员](#showDepartmentUser)
    - [显示部门信息](#showDepartmentInfo)
    - [提交审核文章](#addVerifyArticle)
    - [提交审核活动](#addVerifyAction)
    - [展示此部门审核表](#showUserVerify)
    - [提交修改职位申请: 未写]

- [Club](#Club)
    -  [添加部门](#addDepartment)
    -  [添加成员](#addUser)
    -  [修改成员职位](#changePosition)
    -  [修改社团简介](#changeCintro)
    -  [展示社团的全部部门](#showDepartmens)
    -  [展示社团全部成员](#showClubUser)
    -  [显示社团信息](#showClubInfo)
    -  [显示此社团所有审核通过的活动](#showVerifyActions)
    -  [显示此社团所有审核通过的文章](#showVerifyArticles)
    -  [审核通过某活动](#agreeAction)
    -  [审核通过某文章](#agreeArticle)
    -  [同意添加某成员加入本社团某部门](#agreeUserVerify)
    -  [拒绝添加某成员加入本社团某部门](#disagreeUserVerify)
    -  [展示此社团审核表](#ClubShowUserVerify)
    -  [8同意修改职位 未写]
    -  [9拒绝修改职位 未写]
  
- [Root](#Root)
    - [添加社团](#addClub)
    - [展示所有社团](#showClubs)
    - [展示所有审核通过的文章](#showArticles)
    - [展示所有审核通过的文章的前num个](#showNumArticles)
    - [展示所有审核通过的活动](#showActions)
    - [展示所有审核通过的活动的前num个](#showNumActions)
    - [展示创建社团的请求](#showClubVerify)
    - [同意社团创立申请](#agreeClubVerify)
    - [拒绝创建创立申请](#disagreeClubVerify)

<br>
<br>

------------------------------------------------------------------



<h2 id="User">User</h2>

<h3 id = "register">1. 注册</h3>
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
</br>

<h3 id = "login">2. 登陆</h3>
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
</br>

<h3 id = "changePwd">3.修改密码</h3>

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
</br>


<h3 id = "showInfo">4.显示个人信息</h3>
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
</br>

<h3 id = "changeImg">5.修改头像</h3>
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

<h3 id = "showUserClubs">6. 展示某用户加入的所有社团的信息</h3>
URL: "http://localhost:8080/manage/admin_User_showUserClubs"

请求参数: uid
```
{
"uid":"201731104180"
}
```

返回参数: cid, did, joinTime, position,uid
```
[
    {
        "ClubNum": 1
    },
    {
        "cid": 1,
        "did": 1,
        "joinTime": null,
        "position": "minister",
        "uid": "201731104180"
    }
]
```

</br>
</br>

<h3 id = "applyForJoinClub">7. 申请加入某社团某部门</h3>
URL: http://localhost:8080/manage/admin_User_applyForJoinClub

请求参数: uid, cid, did
```
{
	"uid":"20173110481",
	"cid":1,
	"did":1
}
```

返回参数: flag
```
{
    "flag": "true"
}
```
<br>
<br>

<h3 id = "applyToCreateClub">8. 申请创建一个社团</h3>
URL: http://localhost:8080/manage/admin_User_applyToCreateClub

请求参数: cname, chariman(cid), cintro
```
{
	"cname":"Swing",
	"chairman":"20173114182",
	"cintro":"swing!"
}
```

返回参数:
```
{
    "flag": "true"
}
```


<br>
<br>

-----------------------------------------------

<h2 id = "Department">Department</h2>

<h3 id = "changeInfo">1. 修改部门信息</h3>
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

<h3 id = "showDepartmentUser">2. 显示部门所有成员信息</h3>
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

<h3 id = "showDepartmentInfo">3. 显示部门信息</h3>
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

<h3 id = "addVerifyArticle">4. 提交审核的文章</h3>
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

<h3 id = "addVerifyAction">5. 提交审核的活动</h3>
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

<h3 id = "showUserVerify"> 6. 展示社团部门申请加入表</h3>
URL: http://localhost:8080/manage/admin_Department_showUserVerify

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
        "VerifyClubUser": {
            "cid": 1,
            "did": 1,
            "joinTime": null,
            "position": "",
            "uid": "20173110481"
        }
    }
]
```

</br>
</br>

---------------------------------------------------------------

<h2 id = "Club">Club</h2>

<h3 id = "addDepartment">1. 添加部门</h3>
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

<h3 id = "addUser">2. 添加成员</h3>
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

<h3 id = "changePosition">3. 修改成员职位</h3>
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

<h3 id = "changeCintro">4. 修改社团简介</h3>
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

<h3 id = "showDepartmens">5. 展示社团的全部部门</h3>
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

<h3 id = "showClubUser">6. 显示此社团全部成员</h3>
URL: http://localhost:8080/manage/admin_Club_showClubUser

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

<h3 id = "showClubInfo">7. 显示社团信息</h3>
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

<h3 id = "showVerifyActions">8. 展示此社团所有的审核活动</h3>
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

<h3 id = "showVerifyArticles">9. 展示此社团所有的审核文章</h3>
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

<h3 id = "agreeAction">10. 审核通过某活动</h3>
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

<h3 id = "agreeArticle">11. 审核通过某文章</h3>
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

<h3 id = "agreeUserVerify">12. 同意用户加入社团的请求</h3>
URL: http://localhost:8080/manage/admin_Club_agreeUserVerify

所需参数:
```
{
	"uid":"201731104181",
	"cid":1,
	"did":1
}
```

返回参数:
```
{
    "falg": "true"
}
```

</br>
</br>

<h3 id = "disagreeUserVerify">13. 拒绝用户加入社团的请求</h3>
URL: http://localhost:8080/manage/admin_Club_disagreeUserVerify

所需参数:
```
{
	"uid":"201731104183",
	"cid":1,
	"did":1
}
```

返回参数:
```
{
    "falg": "true"
}
```

</br>
</br>

<h3 id = "ClubShowUserVerify">14. 展示此社团的全部加入申请表</h3>
URL: http://localhost:8080/manage/admin_Club_showUserVerify

所需参数: cid
```
{
	"cid":2
}
```

返回参数:
```
[
    {
        "VerifyClubUser": {
            "cid": 2,
            "did": 4,
            "joinTime": null,
            "position": "",
            "uid": "201731104187"
        }
    }
]
```


</br>
</br>
----------------------------------------------

<h2 id = "Root">Root</h2>

<h3 id = "addClub">1. 添加社团</h3>
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
<br>
<br>

<h3 id = "showClubs">2.展示所有社团信息</h3>
URL: "http://localhost:8080/manage/admin_Root_showClubs"

所需参数: 无

返回参数: size(Club个数), Club[buildTime, chairman, cid, cintro, cname, vicechairman]
```
[
    {
        "size": 1
    },
    {
        "Club": {
            "bulidTime": null,
            "chairman": "201731104180",
            "cid": 1,
            "cintro": "new introduction!",
            "cname": "Computer Science",
            "vicechairman": "201731104180"
        }
    }
]
```
<br>
<br>

<h3 id = "showArticles">3.展示所有社团审核通过的文章</h3>
URL: "http://localhost:8080/manage/admin_Root_showArticles"

所需参数: 无

返回参数: size(文章个数), Article[Artid, cid, content, createTime, title,uid] 
```
[
    {
        "size": 2
    },
    {
        "Article": {
            "artid": 1,
            "cid": 1,
            "content": "1234",
            "createTime": {
                "date": 10,
                "day": 0,
                "hours": 17,
                "minutes": 8,
                "month": 10,
                "nanos": 0,
                "seconds": 3,
                "time": 1573376883000,
                "timezoneOffset": -480,
                "year": 119
            },
            "title": "",
            "uid": ""
        }
    },
    {
        "Article": {
            "artid": 2,
              ......
        }
    }
]
```
<br>
<br>

<h3 id = "showNumArticles">4. 展示所有社团审核通过的文章的前 num 篇</h3>
URL: "http://localhost:8080/manage/admin_Root_showNumArticles"

所需参数: num
```
{
	"num":1
}
```

返回参数: size(文章个数), Article[Artid, cid, content, createTime, title,uid]
```
[
    {
        "size": 1
    },
    {
        "Article": {
            "artid": 2,
            "cid": 1,
            "content": "nei rong xixixiix",
            "createTime": {
                "date": 12,
                "day": 2,
                "hours": 16,
                "minutes": 43,
                "month": 10,
                "nanos": 0,
                "seconds": 31,
                "time": 1573548211000,
                "timezoneOffset": -480,
                "year": 119
            },
            "title": "Atitle",
            "uid": "201731104180"
        }
    }
]
```

<h3 id = "showActions">5. 展示所有社团审核通过的活动</h3>
URL: "http://localhost:8080/manage/admin_Root_showActions"

所需参数: 无

返回参数: size, Action[aImg, aid, aintro, aname, cid, endTime, startTime]
```
[
    {
        "size": 1
    },
    {
        "Action": {
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

<br>
<br>

<h3 id = "showNumActions">6. 展示所有社团审核通过的活动的前 num 个</h3>
URL: "http://localhost:8080/manage/admin_Root_showNumActions"

所需参数: num
```
{
	"num":1
}
```

返回参数: size, Action[aImg, aid, aintro, aname, cid, endTime, startTime]
```
[
    {
        "size": 1
    },
    {
        "Action": {
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

<br>
<br>

<h3 id = "showClubVerify">7. 展示创建社团的申请表</h3>
URL: http://localhost:8080/manage/admin_Root_showClubVerify

所需参数: 无
```
{
}
```

返回参数: 
```
[
    {
        "VerifyClub": {
            "bulidTime": null,
            "chairman": "20173114182",
            "cid": 1,
            "cintro": "swing!",
            "cname": "Swing",
            "vicechairman": ""
        }
    }
]
```

<br>
<br>

<h3 id = "agreeClubVerify">8. 同意用户创建社团的申请</h3>
URL: http://localhost:8080/manage/admin_Root_agreeClubVerify

所需参数: chairman, cid, cintro, cname
```
{
            "chairman": "20173114182",
            "cid": 1,
            "cintro": "swing!",
            "cname": "Swing"
}
```

返回参数:
```
{
    "falg": "true"
}
```

<h3 id = "disagreeClubVerify">8. 不同意用户创建社团的申请</h3>
URL: http://localhost:8080/manage/admin_Root_disagreeClubVerify

所需参数: chairman, cid, cintro, cname
```
{
            "chairman": "201731104180",
            "cid": 3,
            "cintro": "studing",
            "cname": "Study"
}
```

返回参数:
```
{
    "falg": "true"
}
```
