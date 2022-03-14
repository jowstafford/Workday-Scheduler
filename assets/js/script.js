$(document).ready(function () {

    // Date and Time.
    const TIME = false;
    const now = moment().format("dddd LL LT");
    const PM_12 = moment().format("A");
    const AM_12 = moment().format("a");
    if (TIME) {
        PM_12 = 13; AM_12 = 1;
    }
    const currentDay = $("#currentDay");

    currentDay.text(now);

    // Stores the user input into local storage.
    $(".store").click(function () {

        const AM8 = document.getElementById("8").value;
        localStorage.setItem("INPUT8", AM8);

        const AM9 = document.getElementById("9").value;
        localStorage.setItem("INPUT9", AM9);

        const AM10 = document.getElementById("10").value;
        localStorage.setItem("INPUT10", AM10);

        const AM11 = document.getElementById("11").value;
        localStorage.setItem("INPUT11", AM11);

        const PM12 = document.getElementById("12").value;
        localStorage.setItem("INPUT12", PM12);

        const PM1 = document.getElementById("1").value;
        localStorage.setItem("INPUT1", PM1);

        const PM2 = document.getElementById("2").value;
        localStorage.setItem("INPUT2", PM2);

        const PM3 = document.getElementById("3").value;
        localStorage.setItem("INPUT3", PM3);

        const PM4 = document.getElementById("4").value;
        localStorage.setItem("INPUT4", PM4);

        const PM5 = document.getElementById("5").value;
        localStorage.setItem("INPUT5", PM5);
    });
    // Retrieves the user input from local storage. 
    // You can refresh and the information is still in the textbox.

    const OUTPUT8 = localStorage.getItem("INPUT8");
    document.getElementById("8").value = OUTPUT8;

    const OUTPUT9 = localStorage.getItem("INPUT9");
    document.getElementById("9").value = OUTPUT9;

    const OUTPUT10 = localStorage.getItem("INPUT10");
    document.getElementById("10").value = OUTPUT10;

    const OUTPUT11 = localStorage.getItem("INPUT11");
    document.getElementById("11").value = OUTPUT11;

    const OUTPUT12 = localStorage.getItem("INPUT12");
    document.getElementById("12").value = OUTPUT12;

    const OUTPUT1 = localStorage.getItem("INPUT1");
    document.getElementById("1").value = OUTPUT1;

    const OUTPUT2 = localStorage.getItem("INPUT2");
    document.getElementById("2").value = OUTPUT2;

    const OUTPUT3 = localStorage.getItem("INPUT3");
    document.getElementById("3").value = OUTPUT3;

    const OUTPUT4 = localStorage.getItem("INPUT4");
    document.getElementById("4").value = OUTPUT4;

    const OUTPUT5 = localStorage.getItem("INPUT5");
    document.getElementById("5").value = OUTPUT5;
});