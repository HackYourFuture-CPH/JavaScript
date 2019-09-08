const friend = ["Peter", "Julia", "Rasmus"];
const width = [8, 5, 20];
const depth = [10, 11, 200];
const height = [10, 8, 10];
const gardM2 = [100, 70, 800];
const paidPrice = [2500000, 1000000, 10];
const mult = [2.5 * 1000, 300];

function calculateVolume( width, depth, height){
	return width * depth * height;
}

function calculateHousePrice(volumeM, gardM2, mult ){
	const housePrice = volumeM * mult[0] + gardM2 * mult[1]
	return housePrice;
}

for(let i = 0; i<friend.length; i++){
	const volumeM = calculateVolume(width[i], depth[i], height[i]);
	const housePrice = calculateHousePrice(volumeM, gardM2[i], mult);

	if(housePrice < paidPrice[i]){
		console.log(`${friend[i]} has paid too much.`);
	} else {
		console.log(`${friend[i]} has paid too little.`);
	}
}
