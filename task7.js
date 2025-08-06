let greeting= "chichewa";

let greeting1 = "chichewa";
let greeting2 ="yao";
let greeting3 ="tumbuka";

if( greeting1==="chichewa"){

    console.log("muli bwanji");
}
 else if(greeting2==="yao"){
    console.log("muli uli");
}
 else{
    console.log("muli wuli");
}

switch(greeting){

    case "chichewa":
        console.log("muli bwanji"  )
        break;

        case "tumbuka":
            console.log("muli wuli")
            break;

            case "yao":
                console.log("muli uli")
                break;

                default :
                console.log("unknown language")

}

