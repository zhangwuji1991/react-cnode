import axios from 'axios';

//请求ip地址
let base = 'https://cnodejs.org';

//获取主题
export const Gettopic = params => {
	return axios.get(`${base}/api/v1/topics?tab=${params}`).then(
	 	res => res.data
	)
};

//获取文章详情
export const GettopicData = params => {
	return axios.get(`${base}/api/v1/topic/${params}`).then(
	 	res => res.data
	)
};

//获取用户详情
export const GetuserData = params => {
	return axios.get(`${base}/api/v1/user/${params}`).then(
		res => res.data
	)
};