let search = document.getElementById('search');
let myLocation = [];
let myCurrent = [];
var let ='';




function getCurrentLoaction(){
  if(!navigator.geolocation){
throw new Error("Invalid geoloction");

  }
}




 navigator.geolocation.getCurrentPosition(liveDisplay);


  async function liveDisplay(disply){
    let coords ='';
  if(search.value !== "")
  {
    coords = search.value;
  }else{
      coords = disply.coords.latitude + "," + disply.coords.longitude;
    
  }

  console.log(`http://api.weatherapi.com/v1/current.json?key=6224f19640d94318ae414442240312&q=${coords}`);
  var weatherAPI = fetch(`http://api.weatherapi.com/v1/current.json?key=6224f19640d94318ae414442240312&q=${coords}&days=3`);

var res = await (await weatherAPI).json();
myLocation = res.location;
myCurrent = res.current;
console.log(myCurrent.temp_c);

    //  disply.coords.
            // console.log(`Latitude: ${lat}, longitude: ${lng}`);
            // var weatherAPI = fetch(`https://api.weatherapi.com/v1/search.xml?key=6224f19640d94318ae414442240312&q=${lat},${lng}`);
           

            // var finalResult = (await weatherAPI).json();
            // myLocation = finalResult.location;
            // myCurrent = finalResult.current;


            // // var date = myLocation.localtime;
            // var currentdate = new Date(date);
            // console.log(finalResult);
            display();

          }
        
     
       

    //   console.log(`Latitude: ${lat}, longitude: ${lng}`);
    
    
  
  // liveDisplay();


  function display()
  {
    var cartona ='';
    var date = myLocation.localtime;
     var currentdate = new Date(date);
     var nextday = new Date(date);
     
   

  console.log(nextday.to);

   
     cartona = `
        
        <div class="col-md-4">
              <div class="forcast-Header d-flex space-between">
                <h6 class="me-auto">${currentdate.toLocaleString('en',{weekday:'long'})}</h6>
                <h6 class="ms-auto">${currentdate.getDate()} ${currentdate.toLocaleString('default', { month: 'long' })}</h6>
              </div>
              <div class="forecast-content" id="current">
                <div class="location py-5">${myLocation.name}</div>
                <div class="degree">
                  <div class="num h1">${myCurrent.temp_c}<sup>o</sup>C</div>

                  <div class="forecast-icon">
                    <img
                      src="${myCurrent.condition.icon}"
                      alt=""
                      width="90"
                    />
                  </div>
                </div>
                <div class="custom">${myCurrent.condition.text}</div>
                <span class="m-4"><img src="images/icon-umberella.png" alt="" />20%</span>
                <span class="m-4"><img src="images/icon-wind.png" alt="" />18km/h</span>
                <span class="m-4"><img src="images/icon-compass.png" alt="" />East</span>
              </div>
            </div>
        

            <div class="col-md-4 " >
              <div class="forcast-Header d-flex space-between">
                <h6 class="mx-auto">${currentdate.toLocaleString('en',{weekday:'long'})}</h6>
                
              </div>
              <div class="forecast-content center " id="center">
                <div class="location py-5">${myLocation.name}</div>
                <div class="degree">
                  <div class="num h1">${myCurrent.temp_c}<sup>o</sup>C</div>

                  <div class="forecast-des text-center">
                    <h6>${myCurrent.condition.text}</h6>
                  </div>
                </div>
              </div>
            </div>
   <div class="col-md-4 " >
              <div class="forcast-Header d-flex space-between">
                <h6 class="mx-auto">${currentdate.toLocaleString('en',{weekday:'long'})}</h6>
                
              </div>
              <div class="forecast-content center " id="center">
                <div class="location py-5">${myLocation.name}</div>
                <div class="degree">
                  <div class="num h1">${myCurrent.temp_c}<sup>o</sup>C</div>

                  <div class="forecast-des text-center">
                    <h6>${myCurrent.condition.text}</h6>
                  </div>
                </div>
              </div>
            </div>
        
        `
console.log(cartona);
    document.querySelector('#weatherCards').innerHTML = cartona;
        // document.getElementById(weatherCards).innerHTML = cartona;
    }
  