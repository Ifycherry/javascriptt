// var ussd = prompt("Enter USSD Code");
// if (ussd == "*301#") {
//     let trans = prompt(
//         "1. Data\n" +
//         "2. Airtime\n" +
//         "3. Transfer"
//     );
//     if (trans === "1"){
//         alert("Data");
//     }else if(trans == "2"){
//         var tel = prompt("Enter Phone Number");
//         if(tel.length == 11 && !isNaN(tel) && (tel.startsWith("070") || tel.startsWith("090") || tel.startsWith("080") || tel.startsWith("081") || tel.startsWith("091"))){
//             let amt = prompt(`Enter Amount to be credited on ${tel}`);
//             if(!isNaN(amt) && amt >= 50 && amt <= 1000){
//                 alert(`${tel} has been credited with N${amt}`);
//             }else{
//                 alert("invalid Amount entered");
//             } 
//         }else{
//             alert("Invalid phone number" + tel)
//         }
//     }
//     else if(trans === "3"){
//         alert("Transfered")
//     }
// } else {
//     alert("Incorrect ussd code")
// }
