import axios from "axios";

const deleteCredit = async (id) => {
	const data = await await axios
		.delete(`http://localhost:1000/credit/delete/${id}`)
		.then((response) => {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});

	return data;
};

export default deleteCredit;
