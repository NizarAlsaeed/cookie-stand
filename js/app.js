function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Shop (place, minCustomersPerH,maxCustomersPerH,avgCookiesPerCustomer) {
  this.place=place;
  this.workingH=15;
  this.minCustomersPerH=minCustomersPerH;
  this.maxCustomersPerH=maxCustomersPerH;
  this.avgCookiesPerCustomer=avgCookiesPerCustomer;
  this.cookiesArry=[];
  shopLocationArr.push(this);
}

Shop.prototype.calculateCookies=function (){
  let purchasedCookies,customersPerH;
  this.cookiesArry[this.workingH]=0;
  for(let i=0; i<this.workingH;i++){
    customersPerH=getRandomNumber(this.minCustomersPerH,this.maxCustomersPerH);
    purchasedCookies= this.avgCookiesPerCustomer*customersPerH;
    this.cookiesArry[i]=Math.round((purchasedCookies));
    this.cookiesArry[this.workingH]+=this.cookiesArry[i];
    //insert data to tableDataArr
    tableDataArr[multiArrIndex][i]=(this.cookiesArry[i]);
    tableDataArr[multiArrIndex][this.workingH]=this.cookiesArry[this.workingH];}
};

Shop.prototype.render=function(){
  this.calculateCookies();
  const rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);
  const thEl = document.createElement('th');
  rowEl.appendChild(thEl);
  thEl.textContent = this.place;
  rowEl.appendChild(thEl);
  for(let i=0; i<=this.workingH;i++){
    const tdEl = document.createElement('td');
    rowEl.appendChild(tdEl);
    tdEl.textContent=` ${this.cookiesArry[i]} `;}
};



let tableDataArr=[[],[],[],[],[],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
let multiArrIndex;
let shopLocationArr=[];
const sectionEl=window.document.querySelector('#cookiesLists');
const tableEl = document.createElement('table');
sectionEl.appendChild(tableEl);


function tableHeader(){
  const rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);
  const thEl = document.createElement('th');
  rowEl.appendChild(thEl);
  thEl.textContent = 'Shop Location';
  rowEl.appendChild(thEl);
  let prefex;
  for(let i=0; i<=15;i++){
    const tdEl = document.createElement('th');
    rowEl.appendChild(tdEl);
    if(i<=5){
      prefex = `${i+6}:00 am`;
    }
    else if(i===6){
      prefex = `${i+6}:00 pm`;
    }
    else if(i>6){
      prefex = `${i-6}:00 pm`;
    }
    if(i===15){
      prefex = 'Daily Location Total ';
    }
    tdEl.textContent=`${prefex}  `;}
}
let totalDataArray=[];
function startRendring(numberOfShops,workHours){
  multiArrIndex=0;
  for (let i = 0; i < shopLocationArr.length; i++) {
    shopLocationArr[i].render();
    multiArrIndex++;
  }
  // Total Row Rendring Without Data
  const rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);
  const thEl = document.createElement('th');
  rowEl.appendChild(thEl);
  thEl.textContent = 'Totals';
  rowEl.appendChild(thEl);
  for(let i=0; i<(workHours+2);i++){
    const tdEl = document.createElement('th');
    rowEl.appendChild(tdEl);
    totalDataArray.push(tdEl);
  }
}
function getTotal(numberOfShops,workHours){
  tableDataArr[numberOfShops]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  //calculate totals
  for (let i = 0; i < numberOfShops; i++) {
    for(let j=0;j<(workHours+2);j++){
      tableDataArr[numberOfShops][j] +=tableDataArr[i][j];
    }}
  //update total data
  for(let i=0; i<(workHours+2);i++){
    totalDataArray[i].textContent=tableDataArr[numberOfShops][i];
  }

}



//-------------------------------------------------------------------
new Shop('Seattle',23 ,65,6.3);
new Shop('Tokyo',3 ,24,1.2);
new Shop('Dubai',11 ,38,3.7);
new Shop('Paris',20 ,38,2.3);
new Shop('Lima',2 ,16,4.6);


let locationsNumber = 5;
tableHeader();
startRendring(locationsNumber,14);
getTotal(locationsNumber,14);
console.table(tableDataArr);

const form=document.querySelector('#userAddLocation');
form.addEventListener('submit',function(event){
  event.preventDefault();
  console.log(event.target);
  const locationName=event.target.locationName.value;
  const minCustomers=event.target.minCustomers.value;
  const maxCustomers=event.target.maxCustomers.value;
  const avgSellsPerPerson=event.target.avgSellsPerPerson.value;
  console.table(tableDataArr);
  locationsNumber++;
  tableDataArr.splice((locationsNumber-1), 0, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  console.table(tableDataArr);
  new Shop(locationName,minCustomers,maxCustomers,avgSellsPerPerson).render();
  multiArrIndex++;
  console.table(tableDataArr);
  getTotal(locationsNumber,14);
  console.table(tableDataArr);

});

