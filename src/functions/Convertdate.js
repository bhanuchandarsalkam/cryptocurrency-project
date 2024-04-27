export const Convertdate=(number)=>{
    var mydate=new Date(number)
    return mydate.getDate() +"/"+ (mydate.getMonth()+1);
}