function addMore(){
    document.getElementById("error").innerHTML = "";
    let name = document.getElementById("name").value;      //----------------------name = vo box jisme likhenge
    if(name == ""){
        document.getElementById("error").innerHTML = "Please Enter Value";
    }
    else{
        let box = document.getElementById("box");      //box == ul.
        let li = document.createElement("li");         //new
        li.textContent = name;

        let pos = box.firstElementChild;
        if(pos == null){
            box.appendChild(li);
        }
        else{
            box.insertBefore(li,pos);               //---------------insertBefore ka kaam submitted data ke upr agla data ko lekr aane ka kam hai. isko do value(li,pos) di gai hai,phli vo hai jaha texted data jaega aur dosary value index position degi jaha data jane vala hai.
        }
//----------------------------------------------------------This is for Delete(X) butn-----------------------------------------------------------------------------------------
        let a = document.createElement("a");
        a.textContent = "x";
        a.href = "javascript:void(0)";       //ye lgane se kahi par bhi redirect nahi karega jab bhi cross btn par click kia jaega.
        li.appendChild(a);
    }

    document.getElementById("name").value = "";      //---------ye type kie gye data ko upr append karne ke bad box me se remove karega
}

// ----------------------------------------------------------------This is for Delete btn working------------------------------------------------------------------------------------------

let btn  = document.querySelector("ul");
btn.addEventListener("click",function(e){                     //e ka kaam click kie gye remove btn(X) ki detals dena hai.
    let li = e.target.parentNode;               //Main Content       //---------parentnode cross button par click karne se uske parent yani li ki details de deta hai to puri li delete ki ja ske.
    box.removeChild(li)                                             //Ye remove karega
})