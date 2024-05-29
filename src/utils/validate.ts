/**
 * 数据非空验证
 * @Author IdleRain
 * @Date: 2023/10/11
 */
export function isEmpty(data: any) {
  if (data === null) return true;
  if (typeof data === 'undefined') return true;
  if (Object.prototype.toString.call(data) === '[object Array]') return data.length === 0;
  if (Object.prototype.toString.call(data) === '[object Object]')
    return Object.keys(data).length === 0;
  if (typeof data === 'string') return data.trim() === '';
  return false;
}

/**
 * 判断输入的是电话
 * @Author IdleRain
 * @Date: 2023/10/11
 */
export function isPhone(phone: string) {
  const regex = /^(\+?0?\d{2,4}-?)?\d{6,11}$/;
  return regex.test(phone);
}

/**
 * 判断输入的是手机
 * @Author IdleRain
 * @Date: 2023/10/11
 */
export function isMobile(mobile: string | number) {
  mobile = mobile.toString();
  const reg = /^1[3-9]\d{9}$/;
  return reg.test(mobile);
}

/**
 * 判断输入的是邮箱
 * @Author IdleRain
 * @Date: 2023/10/11
 */
export function isEmail(email: string) {
  const regex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  return regex.test(email);
}

/**
 * 判断输入的是URL
 * @Author IdleRain
 * @Date: 2023/10/11
 */
export function isURL(url: string) {
  const regex =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return regex.test(url);
}

/**
 * 判断是小写字母
 * @Author IdleRain
 * @Date: 2023/10/11
 */
export function isLowerCase(str: string) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * 判断是大写字母
 * @Author IdleRain
 * @Date: 2023/10/11
 */
export function isUpperCase(str: string) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * 判断是大小写字母
 * @Author IdleRain
 * @Date: 2023/10/11
 */
export function isAlphabets(str: string) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
 * 判断是用户名
 * @Author IdleRain
 * @Date: 2023/10/20
 */
export function isUsername(str: string) {
  const reg = /^[A-Za-z]+\d*$/;
  return reg.test(str);
}
