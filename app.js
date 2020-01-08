var list=[];
do{
    var choice=prompt("What do you want to do?");
   if(choice=="new"){
       var newelement=prompt("What you would like to add sir ?");
       list.push(newelement);
       alert("todo is added")
   } 
    if(choice=="list"){
    alert("***********");
    list.forEach(function(gb,mb){
        alert(mb+" : "+gb)
    });
    alert("**********");
    }
    
    if(choice=="delete"){
        var index=prompt("Write the index sir ?");
        list.splice(index,1);
        alert("todo is deleted")
    }
    
    
    
}while(choice!="quit")
    
alert("Now you are done sir... :) ...!!");