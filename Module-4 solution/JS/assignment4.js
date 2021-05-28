var array=["Bhavesh","Yaakov","jay","Harshit","jaydeep","Vishal","jagdish","Rashesh","JAY"]

for (let index = 0; index < array.length; index++) {
    if(array[index][0]=="j" || array[index][0]=="J"){
    console.log("Goodbye "+array[index])
    }
    else{
        console.log("Hello "+array[index])
    }
    
}