//Write an Arrow function to print different menu for different day in a week.

const printMenu = day => {
  switch(day.toLowerCase()) {
      case 'monday':
          console.log("Monday menu : veg");
          break;
      case 'tuesday':
          console.log("Tuesday menu : veg/non-veg");
          break;
      case 'wednesday':
          console.log("Wednesday menu : veg/non-veg");
          break;
      case 'thursday':
          console.log("Thursday menu : veg ");
          break;
      case 'friday':
          console.log("Friday  menu: veg/non-veg ");
          break;
      case 'saturday':
          console.log("Saturday menu : non-veg ");
          break;
      case 'sunday':
          console.log("Sunday menu : non-veg ");
          break;
      default:
          console.log("Invalid day!");
  }
};

printMenu('Monday'); 
printMenu('Friday'); 
printMenu('Sunday');