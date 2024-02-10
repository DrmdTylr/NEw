var clicks = 0;

function yesYipee() {
    document.getElementById("gimg").src = "https://i.pinimg.com/originals/5a/47/0e/5a470e061d6a98f315f6f034d949f173.gif"
    document.getElementById("gimg").style.display = "block"
    document.getElementById("h1").style.display = "none"
}

function clickRej() {
    clicks += 1;
    if (clicks === 1) {
        document.getElementById('butl').style.width = parseInt(document.getElementById('butl').style.width,10) * 1.2 + "px";
        document.getElementById('butl').style.height = parseInt(document.getElementById('butl').style.height,10) * 1.5 + "px";
        document.getElementById('butl').style.fontSize = parseInt(document.getElementById('butl').style.fontSize,10) * 1.5 + "px";
        document.getElementById("butr").textContent = "Are you sure?"
    } 
    else if (clicks === 2) {
        document.getElementById('butl').style.width = parseInt(document.getElementById('butl').style.width,10) * 1.2 + "px";
        document.getElementById('butl').style.height = parseInt(document.getElementById('butl').style.height,10) * 1.5 + "px";
        document.getElementById('butl').style.fontSize = parseInt(document.getElementById('butl').style.fontSize,10) * 1.5 + "px";
        document.getElementById("butr").textContent = "Please?"
    } 
    else if (clicks === 3) {
        document.getElementById('butl').style.width = parseInt(document.getElementById('butl').style.width,10) * 1.2 + "px";
        document.getElementById('butl').style.height = parseInt(document.getElementById('butl').style.height,10) * 1.5 + "px";
        document.getElementById('butl').style.fontSize = parseInt(document.getElementById('butl').style.fontSize,10) * 1.5 + "px";
        document.getElementById("butr").textContent = "I'm begging you..."
    } 
    else if (clicks === 4) {
        document.getElementById('butl').style.width = parseInt(document.getElementById('butl').style.width,10) * 1.2 + "px";
        document.getElementById('butl').style.height = parseInt(document.getElementById('butl').style.height,10) * 1.5 + "px";
        document.getElementById('butl').style.fontSize = parseInt(document.getElementById('butl').style.fontSize,10) * 1.5 + "px";
        document.getElementById("butr").textContent = "I'm lonely please"
    } 
    else if (clicks === 5) {
        document.getElementById('butl').style.width = parseInt(document.getElementById('butl').style.width,10) * 1.2 + "px";
        document.getElementById('butl').style.height = parseInt(document.getElementById('butl').style.height,10) * 1.5 + "px";
        document.getElementById('butl').style.fontSize = parseInt(document.getElementById('butl').style.fontSize,10) * 1.5 + "px";
        document.getElementById("butr").textContent = "Picture of dog? :)"
        document.getElementById("img").src = "https://images.unsplash.com/photo-1615751072497-5f5169febe17?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
    } 
    else if (clicks === 6) {
        document.getElementById('butl').style.width = parseInt(document.getElementById('butl').style.width,10) * 1.2 + "px";
        document.getElementById('butl').style.height = parseInt(document.getElementById('butl').style.height,10) * 1.5 + "px";
        document.getElementById('butl').style.fontSize = parseInt(document.getElementById('butl').style.fontSize,10) * 1.5 + "px";
        document.getElementById("butr").textContent = "I will kill the dog"
        document.getElementById("gunimg").src = "https://freepngimg.com/save/22503-gun-in-hand-photos/892x540"
    } 
    else if (clicks === 7) {
        document.getElementById('butl').style.width = parseInt(document.getElementById('butl').style.width,10) * 1.2 + "px";
        document.getElementById('butl').style.height = parseInt(document.getElementById('butl').style.height,10) * 1.5 + "px";
        document.getElementById('butl').style.fontSize = parseInt(document.getElementById('butl').style.fontSize,10) * 1.5 + "px";
        document.getElementById("butr").textContent = "Don't make me do it..."
    } 
    else if (clicks === 8) {
        document.getElementById('butl').style.width = parseInt(document.getElementById('butl').style.width,10) * 1.2 + "px";
        document.getElementById('butl').style.height = parseInt(document.getElementById('butl').style.height,10) * 1.5 + "px";
        document.getElementById('butl').style.fontSize = parseInt(document.getElementById('butl').style.fontSize,10) * 1.5 + "px";
        document.getElementById("butr").textContent = "You did this"
        document.getElementById("video").src = "https://j.gifs.com/yxoaDP.gif"
    } 
    else if (clicks === 9) {
        document.getElementById('butl').style.width = parseInt(document.getElementById('butl').style.width,10) * 1.2 + "px";
        document.getElementById('butl').style.height = parseInt(document.getElementById('butl').style.height,10) * 1.5 + "px";
        document.getElementById('butl').style.fontSize = parseInt(document.getElementById('butl').style.fontSize,10) * 1.5 + "px";
        document.getElementById("coll").className = "col-7 butlhold"
        document.getElementById("colr").className = "col-5 butrhold"
        document.getElementById("butr").textContent = "PLEASE THERE NO SPACE"
        document.getElementById("img").src = ""
        document.getElementById("gunimg").src = ""
        document.getElementById("video").src = ""
    } 
    else if (clicks === 10) {
        document.getElementById('butl').style.width = parseInt(document.getElementById('butl').style.width,10) * 1.2 + "px";
        document.getElementById("coll").className = "col-8 butlhold"
        document.getElementById("colr").className = "col-4 butrhold"
        document.getElementById("butr").textContent = "THERES NO TIME"
    } 
    else if (clicks === 11) {
        document.getElementById('butl').style.width = parseInt(document.getElementById('butl').style.width,10) * 1.2 + "px";
        document.getElementById("coll").className = "col-9 butlhold"
        document.getElementById("colr").className = "col-3 butrhold"
        document.getElementById("butr").textContent = "WHY WOULD YOU DO THIS TO ME"
        document.getElementById("butr").style.height = "100px"
    } 
    else if (clicks === 12) {
        document.getElementById('butl').style.width = parseInt(document.getElementById('butl').style.width,10) * 1.2 + "px";
        document.getElementById("coll").className = "col-10 butlhold"
        document.getElementById("colr").className = "col-2 butrhold"
        document.getElementById("butr").textContent = ""
        document.getElementById("default").src = "https://media.tenor.com/M-CQ0gVzlxoAAAAM/peepo-sad-dance.gif"
        document.getElementById("butr").style.height = "50px"
    }
    else if (clicks === 13) {
        document.getElementById('butl').style.width = parseInt(document.getElementById('butl').style.width,10) * 1.2 + "px";
        document.getElementById("coll").className = "col-11 butlhold"
        document.getElementById("colr").className = "col-1 butrhold"
        document.getElementById("default").src = ""
        document.getElementById("butr").textContent = "I'll kill myself ig...."
        document.getElementById("butr").style.textAlign = "left"
    }
    else if (clicks === 14) {
        document.getElementById('butl').style.width = parseInt(document.getElementById('butl').style.width,10) * 1.2 + "px";
        document.getElementById("coll").className = "col-12 butlhold"
        document.getElementById("colr").className = "col-0 butrhold"
        document.getElementById("butr").textContent = ""
        document.getElementById("colr").style.paddingLeft = 0
        document.getElementById("coll").style.paddingRight = 0
    }
}