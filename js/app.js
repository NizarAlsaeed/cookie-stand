

var seattle={
    place:'Seattle',
    workingH:15,
    minCustomersPerH:23,
    maxCustomersPerH:65,
    avgCookiesPerCustomer:6.3,
    cookiesArry:[],
    calculateCookies:function (){ 
        let purchasedCookies,customersPerH;
        this.cookiesArry[this.workingH]=0;
    for(let i=0; i<this.workingH;i++){
        customersPerH=getRandomNumber(this.minCustomersPerH,this.maxCustomersPerH);
        purchasedCookies= this.avgCookiesPerCustomer*customersPerH;
        this.cookiesArry[i]=Math.round((purchasedCookies));
        this.cookiesArry[this.workingH]+=this.cookiesArry[i];
    }},
    render:function(){
        let prefex;
        const sectionEl=window.document.querySelector('#cookiesLists');
        const h2El=  document.createElement('h2');
        const ulEl=  document.createElement('ul');
        sectionEl.appendChild(h2El);
        h2El.textContent=this.place;
        sectionEl.appendChild(ulEl);
        for(let i=0; i<=this.workingH;i++){
            const liEl=document.createElement('li');
            ulEl.appendChild(liEl);
            //6am:11am- 12pm - 8 pm
                if(i<=5){
                    prefex = `${i+6}:00 am`;
                }
                if(i===6){
                    prefex = `${i+6}:00 pm`;
                }
                if(i>6){
                    prefex = `${i-6}:00 pm`;
                }
                if(i===this.workingH){
                    prefex = `Total: `;
                }
                liEl.textContent=`${prefex} ${this.cookiesArry[i]} cookies`;
            }

},
    
};


var tokyo={
    place:'Tokyo',
    workingH:15,
    minCustomersPerH:3,
    maxCustomersPerH:24,
    avgCookiesPerCustomer:1.2,
    cookiesArry:[],
    calculateCookies:function (){ 
        let purchasedCookies,customersPerH;
        this.cookiesArry[this.workingH]=0;
    for(let i=0; i<this.workingH;i++){
        customersPerH=getRandomNumber(this.minCustomersPerH,this.maxCustomersPerH);
        purchasedCookies= this.avgCookiesPerCustomer*customersPerH;
        this.cookiesArry[i]=Math.round((purchasedCookies));
        this.cookiesArry[this.workingH]+=this.cookiesArry[i];
    }},
    render:function(){
        let prefex;
        const sectionEl=window.document.querySelector('#cookiesLists');
        const h2El=  document.createElement('h2');
        const ulEl=  document.createElement('ul');
        sectionEl.appendChild(h2El);
        h2El.textContent=this.place;
        sectionEl.appendChild(ulEl);
        for(let i=0; i<=this.workingH;i++){
            const liEl=document.createElement('li');
            ulEl.appendChild(liEl);
            //6am:11am- 12pm - 8 pm
                if(i<=5){
                    prefex = `${i+6}:00 am`;
                }
                if(i===6){
                    prefex = `${i+6}:00 pm`;
                }
                if(i>6){
                    prefex = `${i-6}:00 pm`;
                }
                if(i===this.workingH){
                    prefex = `Total: `;
                }
                liEl.textContent=`${prefex} ${this.cookiesArry[i]} cookies`;
            }

},
    
};
var dubai={
    place:'Dubai',
    workingH:15,
    minCustomersPerH:11,
    maxCustomersPerH:38,
    avgCookiesPerCustomer:3.7,
    cookiesArry:[],
    calculateCookies:function (){ 
        let purchasedCookies,customersPerH;
        this.cookiesArry[this.workingH]=0;
    for(let i=0; i<this.workingH;i++){
        customersPerH=getRandomNumber(this.minCustomersPerH,this.maxCustomersPerH);
        purchasedCookies= this.avgCookiesPerCustomer*customersPerH;
        this.cookiesArry[i]=Math.round((purchasedCookies));
        this.cookiesArry[this.workingH]+=this.cookiesArry[i];
    }},
    render:function(){
        let prefex;
        const sectionEl=window.document.querySelector('#cookiesLists');
        const h2El=  document.createElement('h2');
        const ulEl=  document.createElement('ul');
        sectionEl.appendChild(h2El);
        h2El.textContent=this.place;
        sectionEl.appendChild(ulEl);
        for(let i=0; i<=this.workingH;i++){
            const liEl=document.createElement('li');
            ulEl.appendChild(liEl);
            //6am:11am- 12pm - 8 pm
                if(i<=5){
                    prefex = `${i+6}:00 am`;
                }
                if(i===6){
                    prefex = `${i+6}:00 pm`;
                }
                if(i>6){
                    prefex = `${i-6}:00 pm`;
                }
                if(i===this.workingH){
                    prefex = `Total: `;
                }
                liEl.textContent=`${prefex} ${this.cookiesArry[i]} cookies`;
            }

},
    
};
var paris={
    place:'Paris',
    workingH:15,
    minCustomersPerH:20,
    maxCustomersPerH:38,
    avgCookiesPerCustomer:2.3,
    cookiesArry:[],
    calculateCookies:function (){ 
        let purchasedCookies,customersPerH;
        this.cookiesArry[this.workingH]=0;
    for(let i=0; i<this.workingH;i++){
        customersPerH=getRandomNumber(this.minCustomersPerH,this.maxCustomersPerH);
        purchasedCookies= this.avgCookiesPerCustomer*customersPerH;
        this.cookiesArry[i]=Math.round((purchasedCookies));
        this.cookiesArry[this.workingH]+=this.cookiesArry[i];
    }},
    render:function(){
        let prefex;
        const sectionEl=window.document.querySelector('#cookiesLists');
        const h2El=  document.createElement('h2');
        const ulEl=  document.createElement('ul');
        sectionEl.appendChild(h2El);
        h2El.textContent=this.place;
        sectionEl.appendChild(ulEl);
        for(let i=0; i<=this.workingH;i++){
            const liEl=document.createElement('li');
            ulEl.appendChild(liEl);
            //6am:11am- 12pm - 8 pm
                if(i<=5){
                    prefex = `${i+6}:00 am`;
                }
                if(i===6){
                    prefex = `${i+6}:00 pm`;
                }
                if(i>6){
                    prefex = `${i-6}:00 pm`;
                }
                if(i===this.workingH){
                    prefex = `Total: `;
                }
                liEl.textContent=`${prefex} ${this.cookiesArry[i]} cookies`;
            }

},
    
};
var lima={
    place:'Lima',
    workingH:15,
    minCustomersPerH:2,
    maxCustomersPerH:16,
    avgCookiesPerCustomer:4.6,
    cookiesArry:[],
    calculateCookies:function (){ 
        let purchasedCookies,customersPerH;
        this.cookiesArry[this.workingH]=0;
    for(let i=0; i<this.workingH;i++){
        customersPerH=getRandomNumber(this.minCustomersPerH,this.maxCustomersPerH);
        purchasedCookies= this.avgCookiesPerCustomer*customersPerH;
        this.cookiesArry[i]=Math.round((purchasedCookies));
        this.cookiesArry[this.workingH]+=this.cookiesArry[i];
    }},
    render:function(){
        let prefex;
        const sectionEl=window.document.querySelector('#cookiesLists');
        const h2El=  document.createElement('h2');
        const ulEl=  document.createElement('ul');
        sectionEl.appendChild(h2El);
        h2El.textContent=this.place;
        sectionEl.appendChild(ulEl);
        for(let i=0; i<=this.workingH;i++){
            const liEl=document.createElement('li');
            ulEl.appendChild(liEl);
            //6am:11am- 12pm - 8 pm
                if(i<=5){
                    prefex = `${i+6}:00 am`;
                }
                if(i===6){
                    prefex = `${i+6}:00 pm`;
                }
                if(i>6){
                    prefex = `${i-6}:00 pm`;
                }
                if(i===this.workingH){
                    prefex = `Total: `;
                }
                liEl.textContent=`${prefex} ${this.cookiesArry[i]} cookies`;
            }

},
    
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  seattle.calculateCookies();
  seattle.render();
  tokyo.calculateCookies();
  tokyo.render();
  dubai.calculateCookies();
  dubai.render();
  paris.calculateCookies();
  paris.render();
  lima.calculateCookies();
  lima.render();

