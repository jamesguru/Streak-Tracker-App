import { Streak } from "./interface/streak";
const addICon = document.querySelector(".toggle-icon-add") as HTMLElement;

const closeIcon = document.querySelector(".toggle-icon-close") as HTMLElement;

const btnAddStreak = document.querySelector(
  ".btn-add-streak"
) as HTMLButtonElement;

const menuIcon = document.querySelector(".menu-icon") as HTMLElement;

const addingSteak = document.querySelector(".adding-streak") as HTMLElement;

const image = document.querySelector(".streak-img") as HTMLImageElement;

const headingStreak = document.querySelector(".heading-streak") as HTMLElement;

const addStreakTitle = document.querySelector(
  ".streak-name"
) as HTMLInputElement;

const addStreakImage = document.querySelector(
  ".streak-image"
) as HTMLInputElement;

const addStreakCurrentDate = document.querySelector(
  ".start-date"
) as HTMLInputElement;

const errorText = document.querySelector(".error") as HTMLElement;

const streakItems = document.querySelector(".streaks") as HTMLElement;

const pop = document.querySelector(".pop") as HTMLElement;

const none = document.querySelector(".none") as HTMLElement;

const bestStreak = document.querySelector(".best") as HTMLElement;

const streaks: Streak[] = [];

const listDate: number[] = [];



addICon.addEventListener("click", () => {
  Toggle.ShowAddingStreak();

  showBestActivity();
});

closeIcon.addEventListener("click", () => {
  Toggle.HideAddingStreak();

  showBestActivity();

});



class Toggle {
  constructor() {}

  static ShowAddingStreak() {
    closeIcon.style.display = "flex";

    menuIcon.style.display = "flex";

    addingSteak.style.display = "flex";

    addICon.style.display = "none";

    image.style.display = "none";

    headingStreak.style.display = "none";
    
  }

  static HideAddingStreak() {
    addICon.style.display = "flex";

    image.style.display = "flex";

    headingStreak.style.display = "flex";

    addingSteak.style.display = "none";

    closeIcon.style.display = "none";

    menuIcon.style.display = "none";

    addingSteak.style.display = "none";
  }
}

class MyStreak {
  private added_streaks: Streak[] = streaks;

  constructor() {}

  static Close() {
    closeModal();
  }

  static Delete(index) {
    deleteModal(index);
  }

  static ShowPop(index) {
    const streak = streaks[index];
    pop.style.display = "flex";

    pop.innerHTML = `
    
    <div class="pops-item"> 
    
        <p>${streak.title}</p>
    
    
    
        <img src=${streak.image} height="150px" width="150px" />
        
    
        <p>${streak.date}</p>
    
        <p>${streak.diff} days</p>
    
    
        <div class="pop-item-btn">
    
                    <button class="btn-close" onclick="MyStreak.Close()">close</button>
    
                    <button class="btn-delete" onclick="MyStreak.Delete(${index})">Delete</button>
        </div>
    
    
    
    </div>`;
  }

  showStreak() {

    
    if (this.added_streaks) {


     none.style.display = "none";

      let li = "";

      this.added_streaks.forEach((streak, index) => {
        li += `
  

    

      
  
        <li class="streak-item" onclick="MyStreak.ShowPop(${index});">

            <img src=${streak.image} alt="" >

            <span>${streak.date}</span>

            <span>${streak.title}</span>

            <span>${streak.diff} days tracked</span>


        </li>


        `;
      });

      streakItems.innerHTML = li;

    } else {
        none.style.display = "flex";
    }
  }
}



class Time {
  constructor(startDate: string) {}

  static getDaysOfStreak(date: string) {
    let currentDate = new Date().getTime();

    let streakDate = new Date(date).getTime();

    const diffInDays: number = Math.floor(
      (currentDate - streakDate) / (1000 * 3600 * 24)
    );

    listDate.push(diffInDays);

    return diffInDays;
  }

  static getGreatestDayDifference() {
    if (listDate) {
      const sortedListDate:number[] = listDate.sort();

      const largestTime:number = sortedListDate[listDate.length-1];

      return largestTime;
    }
  }
}

const my_streak = new MyStreak();





btnAddStreak.addEventListener("click", () => {
  const newStreak: Streak = {
    title: addStreakTitle.value,

    image: addStreakImage.value,

    date: addStreakCurrentDate.value,

    currentDate: new Date(),

    diff: Time.getDaysOfStreak(addStreakCurrentDate.value) < 0 ? 0 : Time.getDaysOfStreak(addStreakCurrentDate.value),
  };

  if (
    addStreakImage.value ||
    addStreakTitle.value ||
    addStreakCurrentDate.value
  ) {
    streaks.push(newStreak);

    addStreakTitle.value = "";

    addStreakImage.value = "";

    addStreakCurrentDate.value = "";

    my_streak.showStreak();
  } else {
    errorText.innerHTML = `<span> Please fill the values </span>`;
  }

  console.log(streaks);
});

function closeModal() {
  pop.style.display = "none";

  my_streak.showStreak();

  showBestActivity();


}

function deleteModal(index) {
  streaks.splice(index, 1);

  pop.style.display = "none";

  my_streak.showStreak();

  showBestActivity();
}


function showBestActivity (){


    

        const getLargestTime:number |undefined = Time.getGreatestDayDifference();

        console.log(getLargestTime);

        console.log(getLargestTime);
    
        if(getLargestTime){
    
            streaks.forEach((streak:Streak,index:number)=>{
    
    
                if(streak.diff === getLargestTime){
    
                    console.log(streak);
                    bestStreak.innerHTML = `
                    
                    
                    <div>
                        <img src=${streak.image} alt="" >
    
                        <span>${streak.date}</span>
    
                        <span>${streak.title}</span>
    
                        <span>${streak.diff} days tracked</span>

                    </div>
    
                          `
    
    
                }else{
    
                    bestStreak.style.display="none";
    
                }
    
    
    
            })
    
    
    
        }else{
    
    
    
        }
    
    
    
   



}


