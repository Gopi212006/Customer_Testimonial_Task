

  let  customer=[

   {
    Image:"https://www.course-api.com/images/people/person-3.jpeg",
    name:"Bill Anderson",
    role:"THE BOSS",
    deatils:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate",
   },
   {
    Image:"https://www.course-api.com/images/people/person-1.jpeg",
    name:"Susan Smith",
    role:"WEB DEVELOPER",
    deatils:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet urna in justo iaculis rutrum at at leo. Fusce risus diam, cursus ac aliquam eget, accumsan vitae sapien. Etiam rutrum egestas ex, tincidunt pharetra mauris faucibus vel. Vivamus ornare imperdiet justo quis hendrerit.",
   },


   {

    Image:"https://www.course-api.com/images/people/person-2.jpeg",
    name:"Anna Johnson",
    role:"WEB DESIGNER",
    deatils:"Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product",
   },


   {

    Image:"https://www.course-api.com/images/people/person-4.jpeg",
    name:" Peter Jones",
    role:"INTERN",
    deatils:"Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero",
   }


  ];



  let custImg=document.getElementById('CustomerImages')
  let custName=document.getElementById('CustomerName')
  let custRole=document.getElementById('CustomerRole')
  let custdetails=document.getElementById('CustomerDeatils')
  let indexValue=0;
  

  custImg.src=customer[indexValue].Image;
  custName.textContent=customer[indexValue].name;
  custRole.textContent=customer[indexValue].role;
  custdetails.textContent=customer[indexValue].deatils;

  let leftButton=document.getElementById("leftBtn");
  let rightButton=document.getElementById("rightBtn");


  console.log(rightButton);
  console.log(leftButton);
  


  rightButton.addEventListener("click",()=>{
    if (indexValue<customer.length-1){
        indexValue++;
    }
    else{
        indexValue=0;
    }

    custImg.src=customer[indexValue].Image;
    custName.textContent=customer[indexValue].name;
    custRole.textContent=customer[indexValue].role;
    custdetails.textContent=customer[indexValue].deatils;

  });


  leftButton.addEventListener("click",()=>{
    if (indexValue>0){
        indexValue--;
    }
    else{
        indexValue=customer.length-1;
        }

    custImg.src=customer[indexValue].Image;
    custName.textContent=customer[indexValue].name;
    custRole.textContent=customer[indexValue].role;
    custdetails.textContent=customer[indexValue].deatils;

  });

