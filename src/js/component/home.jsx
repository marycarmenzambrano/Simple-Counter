import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({seconds}) => {
	let number = seconds.toString()
	let unit = number[number.length -1]
	let ten = number[number.length -2]
	let hundred = number[number.length -3]
	let thousands = number[number.length -4]
	let tenthousand = number[number.length -5]
	let hundredthousand = number[number.length -6]
	return (
		<div className="text-center">
			<button className="btn btn-info">{hundredthousand==undefined? "0": hundredthousand}</button>
			<button className="btn btn-info">{tenthousand==undefined? "0": tenthousand}</button>
			<button className="btn btn-info">{thousands==undefined? "0": thousands}</button>
			<button className="btn btn-info">{hundred==undefined? "0": hundred}</button>
			<button className="btn btn-info">{ten==undefined? "0": ten}</button>
			<button className="btn btn-info">{unit}</button>
		</div>
	);
};

export default Home;
