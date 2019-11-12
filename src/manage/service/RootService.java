package manage.service;

import java.util.Date;

import manage.dao.ClubDao;
import manage.entity.Club;

public class RootService {
	
	//申请社团加入
	public void addClub(Club c) {
		c.setBulidTime(new Date());
		new ClubDao().add(c);
	}
}
