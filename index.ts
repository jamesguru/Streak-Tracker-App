import { log } from "console";

const addICon = document.querySelector(".toggle-icon-add") as HTMLElement;

const closeIcon = document.querySelector('.toggle-icon-close') as HTMLElement;

const btnAddStreak = document.querySelector(".btn-add-streak") as HTMLButtonElement;


const menuIcon = document.querySelector('.menu-icon') as HTMLElement;

const addingSteak = document.querySelector('.adding-streak') as HTMLElement;


const image = document.querySelector(".streak-image") as HTMLImageElement;


const headingStreak = document.querySelector(".heading-streak") as HTMLElement;


const addStreakTitle = document.querySelector(".streak-name") as HTMLInputElement;

const addStreakImage = document.querySelector(".streak-image") as HTMLInputElement;


const addStreakCurrentDate = document.querySelector(".start-date") as HTMLInputElement;




let toggle:boolean = false;

interface Streak{


    title:string,

    image:string,

    date:string,
}



const streaks: Streak[] = [];


addICon.addEventListener("click", () => {


    toggle =  !toggle;





    if (toggle){



        closeIcon.style.display = "flex";

        menuIcon.style.display = "flex";

        addingSteak.style.display = "flex";


        addICon.style.display = "none";


        image.style.display = "none";


        headingStreak.style.display = "none";



    }else{

        addICon.style.display = "flex";


        image.style.display = "flex";


        addingSteak.style.display = "flex";



    }
})



closeIcon.addEventListener("click", () => {


   

    toggle = !toggle;



        console.log(toggle);

    window.location.reload();

    
});


btnAddStreak.addEventListener("click", () => {




    
    const newStreak: Streak = {

        title: addStreakTitle.value,
    
        image: addStreakImage.value,
    
        date: addStreakCurrentDate.value,
    }

    streaks.push(newStreak);


    console.log(streaks);

})


