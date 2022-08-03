import {Streak} from './interface/streak';
const addICon = document.querySelector(".toggle-icon-add") as HTMLElement;

const closeIcon = document.querySelector('.toggle-icon-close') as HTMLElement;

const btnAddStreak = document.querySelector(".btn-add-streak") as HTMLButtonElement;


const menuIcon = document.querySelector('.menu-icon') as HTMLElement;

const addingSteak = document.querySelector('.adding-streak') as HTMLElement;


const image = document.querySelector(".streak-img") as HTMLImageElement;


const headingStreak = document.querySelector(".heading-streak") as HTMLElement;


const addStreakTitle = document.querySelector(".streak-name") as HTMLInputElement;

const addStreakImage = document.querySelector(".streak-image") as HTMLInputElement;


const addStreakCurrentDate = document.querySelector(".start-date") as HTMLInputElement;

const errorText = document.querySelector(".error") as HTMLElement;

const streakItems = document.querySelector(".streaks") as HTMLElement;


const pop = document.querySelector(".pop") as HTMLElement;







const streaks: Streak[] = [];


addICon.addEventListener("click", () => {

        closeIcon.style.display = "flex";

        menuIcon.style.display = "flex";

        addingSteak.style.display = "flex";


        addICon.style.display = "none";


        image.style.display = "none";


        headingStreak.style.display = "none";


})



closeIcon.addEventListener("click", () => {

    addICon.style.display = "flex";


    image.style.display = "flex";

    headingStreak.style.display = "flex";

    addingSteak.style.display = "none";

    closeIcon.style.display = "none";

    menuIcon.style.display = "none";

    addingSteak.style.display = "none";
    

    
});






btnAddStreak.addEventListener("click", () => {


    
    const newStreak: Streak = {

        title: addStreakTitle.value,
    
        image: addStreakImage.value,
    
        date: addStreakCurrentDate.value,
    }


    if(addStreakImage.value || addStreakTitle.value || addStreakCurrentDate.value){


        streaks.push(newStreak);

        

        

        addStreakTitle.value = "";

        addStreakImage.value = "";

        addStreakCurrentDate.value = "";


        
        showStreak(streaks);


        


    }else{


        errorText.innerHTML = `<span> Please fill the values </span>`;
    }


    

    console.log(streaks);

});



function showStreak(streaksList){

    let li = "";

    streaksList.forEach((streak,index) => {


        li += `
  

      
  
        <li class="streak-item" onclick="MakeBold(${index});">

            <img src=${streak.image} alt="" >

            <span>${streak.date}</span>

            <span>${streak.title}</span>

        </li>


        `



    } );



    streakItems.innerHTML = li;

}


function MakeBold(index){

const streak = streaks[index];
pop.style.display = "flex";

pop.innerHTML = `

<div class="pops-item"> 

    <p>${streak.title}</p>



    <img src=${streak.image} height="150px" width="150px" />
    

    <p>${streak.date}</p>

    <p>24 days </p>


    <div class="pop-item-btn">

                <button class="btn-close" onclick="Close()">close</button>

                <button class="btn-delete" onclick="Delete(${index})">Delete</button>
    </div>



</div>`;



}

function Close(){

    pop.style.display = "none";
    
}


function Delete(index){


    

    streaks.splice(index,1);


    showStreak(streaks);

}


