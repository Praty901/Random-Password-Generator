function randompass (length, includealp, includenum, includesymbol,includeCap) {
    const alp = "abcdefghijklmnopqrstuvwxyz";
    const num = "1234567890";
    const symbol = "!@#$%^&*";
    const Upperletter=alp.toUpperCase();
    let password = '';
    let includeChar = '';
    

    includeChar +=includealp? alp : '';
    includeChar +=includenum? num : '';
    includeChar +=includesymbol? symbol : '';
    includeChar +=includeCap? Upperletter : '';
    
    for (let i = 0; i < length; i++) {
        const randomindex=Math.floor(Math.random()*includeChar.length);
        password+=includeChar.charAt(randomindex);
    }
    
 console.log(password);
 document.getElementById("in").value=password;
    
}
function generatepass(){
    
    const length=parseInt(document.getElementById("length").value);
    const includealp=document.getElementById("includealp").checked;
    const includenum=document.getElementById("includenum").checked;
    const includesymbol=document.getElementById("includesymbol").checked;
    const includeCap=document.getElementById("includeCap").checked;
   randompass(length,includealp,includenum,includesymbol,includeCap);
   
}

  
