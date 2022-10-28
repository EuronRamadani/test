import axios from "axios";

const createCredit = async (PostBody) => {
	const apiCaller = axios.create({
		baseURL: "http://localhost:1000/",
	});
	const { data } = await apiCaller.post("/credit/create", PostBody);

	return data;
};

export default createCredit;
