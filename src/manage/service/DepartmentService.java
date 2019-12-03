package manage.service;

import java.util.ArrayList;
import java.util.List;

import manage.dao.ActionDao;
import manage.dao.ArticleDao;
import manage.dao.DepartmentDao;
import manage.dao.UserDao;
import manage.entity.Action;
import manage.entity.Article;
import manage.entity.ClubUser;
import manage.entity.Department;
import manage.entity.User;

/**
 * 1. 显示部门所有成员
 * 2. 修改部门信息
 * @author zoey
 *
 */
public class DepartmentService {
	
	//修改部门信息
	public void changeInfo(int did, String dname, String dintro) {
		new DepartmentDao().changeInfo(did, dname, dintro);
	}
	
	//查看部门成员
	public List<User> showUser(int did) {
		//查询此社团成员的ClubUser.class
		List<ClubUser> departUserList = new DepartmentDao().showDepartmentUser(did);
		//遍历ClubUser根据uid找出User信息并添加到userList列表中
		List<User> userList = new ArrayList();
		UserDao dao = new UserDao();
		for(ClubUser cu : departUserList) {
			User u = dao.selectByUid(cu.getUid());
			userList.add(u);
		}
		return userList;
	}
	
	//查看部门信息
	public Department showDepartmentInfo(int did) {
		Department d = new DepartmentDao().selectByDid(did);
		return d;
	}
	
	// 申请文章发布
	public void addVerifyArticle(Article a) {
		new ArticleDao().addVerify(a);
	}
	
	
	// 申请活动发布
	public void addVerifyAction(Action a) {
		new ActionDao().addVerify(a);
	}
	
	//展示此部门的用户申请表
	public List<ClubUser> showVerifyUser(int did) {
		List<ClubUser> list = new DepartmentDao().showUserVerify(did);
		return list;
	}
	
}
