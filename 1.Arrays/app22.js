// OBJECTS
// - Objects are collections of porperties.
// - Properties are a jey value pair
// Rather than accessig data using an index, we use custom keys
//  We use {} to signify objects

const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorireBurn: 5755,
  workoutsThisWeek: " 5 of 7",
  avgGoodSleep: "2:13",
};
console.log(fitBitData);

// To access property we use '.'
console.log(fitBitData.workoutsThisWeek);
