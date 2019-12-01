function addactivity() {
    addSuction();
    var html = "";
    $("div.right").empty();
    //头部框架
    html += "<div class=\"right_view\">" +
        "<table id=\"NumThree\" class=\"TableBlack\">" +
        "<tbody id = \"content_show\">";
    //内容填充
    html += " <tr>" +
        "<td id= \"actionName\" style=\"font-size:18pt;\" colspan=\"2\">活动发布</td>" +
        "</tr>" +
        "<tr>" +
        "<td >部门选择</td>\n" +
        "<td><input list=\"select_activity\" />\n" +
        "<datalist id=\"select_activity\">\n" +
        "<option value=\"软件部\">\n" +
        "<option value=\"硬件部\">\n" +
        "</datalist></td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "<td >活动名称</td>\n" +
        "<td><input type=\"text\"></td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "<td>开始时间</td>\n" +
        "<td><input id = \"start_time\" type=\"datetime-local\" value=\"2015-09-24T13:59:59\"/></td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "<td>结束时间</td>\n" +
        "<td><input id = \"end_time\" type=\"datetime-local\" value=\"2015-09-24T13:59:59\"/></td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "<td >活动地点</td>\n" +
        "<td><input type=\"text\"></td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "<td>详情图片</td>\n" +
        "<td><input type=\"file\" id=\"image\" name=\"test\" accept=\"image/gif, image/jpeg, image/png, image/jpg\"></td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "<td >活动详情</td>\n" +
        "<td><input type=\"text\"></td>\n" +
        "</tr>\n" +
        "</tr>";
    html += "<tr>\n" +
        "<td bgcolor=\"#FFFFFF\" style=\"text-align: center;\" colspan=\"2\">\n" +
        "<input type=\"submit\" name=\"BtnYes2\" onclick=\"\" value=\"确认提交\" id=\"BtnYes2\" style=\"height:26px;width:100px;\">\n" +
        "&nbsp;</td>\n" +
        "</tr>";
    html += "</tbody>\n" +
        "          </table>\n" +
        "\t</div>";
    var comment = $("div.right");
    comment.html(html);
}

// URL："http://sopipi.club:8092/superbook/admin_Book_scanBook?uuid="+uuid + "&code="+code
// 请求头：Content-Type：application/json;
// 请求参数："isbn" : "9787208061644"
// 返回参数：
//    {
//        "book": {
//        "author": "卡勒德·胡赛尼（著）李继宏（译）",
//            "binding": "平装",
//            "gist": "　　“许多年过去了，人们说陈年旧事可以被埋葬，然而我终于明白这是错的，因为往事会自行爬上来。回首前尘，我意识到在过去二十六年里，自己始终在窥视着那荒芜的小径。”",
//            "img": "http://app2.showapi.com/isbn/img1/eaa363cbced8474e992dea310faf176d.jpg",
//            "isbn": "9787208061644",
//            "page": 362,
//            "paper": "胶版纸",
//            "price": 25,
//            "publisher": "上海人民出版社",
//            "title": "追风筝的人"
//    }
//    }


function addSuction() {
    // 发送异步请求
    var uuid = "1";
    $.ajax({
        url: "http://localhost:8090/superbook/admin_Book_scanBook?code=&uuid="+uuid, // 请求的Controller
        type: 'post', // 请求方式
        dataType: 'json', // 发送的数据类型
        crossDomain: true,
        data: {isbn : 9787208061644},// 要提交给服务端的数据
        success: function (json) { // 请求成功后如何处理结果?，json其实就是服务端返回的响应内容
            console.log(json); // 打印到控制看一看


            var Linkto,article, title, content,totalDiomond,commentNum,likeNum;
            // 循环遍历JSON数组, 为每个数组元素生成对应的dom元素
            $.each(json, function (index, item) { // index为下标, item为数组元素
                data.push(item.articleId);



            });
            console.log(data);
            var content = $('#article_list');
            content.html(html);

        }
    });
}