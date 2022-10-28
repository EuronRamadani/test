import axios from "axios";

const getCreditList = async () => {
	const apiCaller = axios.create({
		baseURL: "http://localhost:1000/",
	});
	const { data } = await apiCaller.get(`/credit/`);

	return data;
};

export default getCreditList;
