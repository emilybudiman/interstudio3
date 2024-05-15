const dog = [ 
{
    name: "Pit Bull Mix",
    year: "2016",
    borough: "Brooklyn",
    img: "images/pitbullmix.png",
    percent: "4.6",
},
{
    name: "Pit Bull Terrier",
    year: "2015",
    borough: "Brooklyn",
    img: "images/pitbullterrier.png",
    percent: "4.2",
},
{
    name: "Beagle",
    year: "2017",
    borough: "Queens",
    img: "images/beagle.png",
    percent: "2.1",
},
{
    name: "Bulldog",
    year: "2022",
    borough: "Manhattan",
    img: "images/bulldog.png",
    percent: "3.5",
},
{
    name: "Chihuahua",
    year: "2016",
    borough: "The Bronx",
    img: "images/chihuahua.png",
    percent: "7.5",
},
{
    name: "German Shepherd",
    year: "2017",
    borough: "Queens",
    img: "images/germanshepherd.png",
    percent: "6.8",
},
{
    name: "Husky",
    year: "2022",
    borough: "Queens",
    img: "images/husky.png",
    percent: "4.1",
},
{
    name: "Jack Russell Terrier",
    year: "2015",
    borough: "Queens",
    img: "images/jackruss.png",
    percent: "1.8",
},
{
    name: "Labrador Retriever",
    year: "2015",
    borough: "Manhattan",
    img: "images/lab.png",
    percent: "4",
},
{
    name: "Maltese",
    year: "2015, 2019",
    borough: "Queens",
    img: "images/maltese.png",
    percent: "4.3",
},
{
    name: "Pitbull",
    year: "2016",
    borough: "The Bronx",
    img: "images/pitbull.png",
    percent: "35.6",
},
{
    name: "Poodle",
    year: "2015",
    borough: "Queens",
    img: "images/poodle.png",
    percent: "5.3",
},
{
    name: "Rottweiler",
    year: "2017",
    borough: "Queens",
    img: "images/rottweiler.png",
    percent: "3.3",
},
{
    name: "Shih Tzu",
    year: "2017",
    borough: "Queens",
    img: "images/shihtzu.png",
    percent: "7.9",
},
{
    name: "Yorkshire Terrier",
    year: "2019",
    borough: "Queens",
    img: "images/yorkshire.png",
    percent: "4.8",
},
];

window.addEventListener("load", () => {
  init();
});

const init = function () {
  const dogGrid = document.getElementById("doggrid");


  dog.map(function (dog, i) {
    const dogItem = buildDogItem(dog, i);
    dogGrid.innerHTML = dogGrid.innerHTML + dogItem;
  });

    let dogDivs = [...document.getElementsByClassName("dog-item")];

  dogDivs.map((dogDiv, i) => {
    dogDiv.addEventListener(
      "click",

      () => {
        activatePopUp(dog[i]);
      }
    );
  });
};

const buildDogItem =function (dog, i){
    return `<div class="dog-item" style="left: ${dog.x}%; top: ${dog.y}%" id=${i}>
        <div class="dog-item"
            <div class="dog-info">
                <img src=${dog.img}>
                <div class="text-info">
                    <h1>${dog.name}</h1>
                    <h2>${dog.year}</h2>
                    <h2>${dog.borough}</h2>
                    <h2>${dog.percent}</h2x>
                </div>
            </div>
        </div>`;
}
