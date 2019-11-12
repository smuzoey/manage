package manage.util;
/**
 * 
 * @author 再几何
 *
 *将数据库中的datetime和java中的date进行转换
 */
public class DateUtil {
	
	/**
	 * java时间转换为数据库时间
	 * @param d
	 * @return
	 */
	public static java.sql.Timestamp dtot(java.util.Date d) {
		if (null == d)
			return null;
		return new java.sql.Timestamp(d.getTime());
	}

	/**
	 * 数据库时间转换为java时间
	 * @param t
	 * @return
	 */
	public static java.util.Date ttod(java.sql.Timestamp t) {
		if (null == t)
			return null;
		return new java.util.Date(t.getTime());
	}
}
