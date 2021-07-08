import axios from "axios";

// export {};
// declare global {
// 	interface Window {
// 		___CORE_AXIOS___: AxiosInstance;
// 	}
// }

const instance = axios.create({
	baseURL: '',
	validateStatus: (status:any) => {
		return status >= 200 && status <= 503;
	},
});


export default instance;
