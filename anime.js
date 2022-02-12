function display()
{
    var nar = document.getElementById("naruto");
    var demon = document.getElementById("demonslayer");

    if (nar.checked==true)
        alert("The Option Naruto was Checked");
    else if (demon.checked==true)
        alert("The Option Demon Slayer was Checked");
    else
        alert("Nothing was checked");
}
