import { btn } from "./Navigation.js";
import { getCurrentIndex } from "./State.js";


export function selectedbtn(){
     btn[getCurrentIndex()].className =
            "bg-green-600 text-white rounded py-1 w-6 click ";
}
