function two_d_selected(){
     is_enabled = false;
    if(is_enabled == false){
   const box_selector = document.getElementById("box-selector-one");
    box_selector.style.borderColor = "#2bd8ff";
    console.log("2d has been selected")
    is_enabled = true;
    console.log(is_enabled)
    }else {
        if(is_enabled == true){
            box_selector.style.borderColor = "#000";
            console.log("2d has been deselected")
            is_enabled = false;
            console.log(is_enabled)

        }
    }


}