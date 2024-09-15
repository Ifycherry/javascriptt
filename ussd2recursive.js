try{
var ussd = prompt("Enter USSD code: ")
if (ussd == 301){
    mainmenu();
}else{
    alert("Invalid entry try again")
}

function mainmenu(){
   let trans= prompt(
    "1.Data\n"+
    "2.Airtime\n"+
    "3.Account Bal\n"+
    "4.TransferSer\n"+
    "5.MoreCredit\n"+
    "6.VAS\n"+
    "7.Hot Deals\n"+
    "8.NIN\n"+
    "9.Next\n"+
    "\n"+
    "\n"+
    "Previous Menu:#\n"+
    "Main Menu:0.\n"
   );
   if (trans == "1"){
    Data();
   }else if (trans == "2"){
    Airtime();
   }else if (trans == "3"){
      Account_Bal();
   }else if (trans == "4"){
    Transfer_Serv();
   }else if (trans == "5"){
    MoreCredit();
   }else if (trans == "6"){
    VAS();
   }else if (trans == "7"){
    alert("hot deal")
   }else if (trans == "8"){
    alert("nin")
   }else if (trans == "9"){
    alert("next")
   }else if (trans == "#"){
    mainmenu();
   }else if (trans == "0"){
    mainmenu();
   }else{
    alert("Invalid code")
   }
}

function Data(){
    let Data = prompt(
        "1.Buy Data\n"+
        "2.Check Data Balance\n"+
        "3.Streaming Bundle\n"+
        "4.Data Gifting\n"+
        "5.Next\n"+
        "\n"+
        "\n"+
        "Previous Menu:#\n"+
       "Main Menu:0.\n"
    );
    if (Data == "1"){
        Buy_Data();
    }else if (Data == "2"){
        Check_Data_Balance();
    }else if (Data == "3"){
        Streaming_Bundles();
    }else if(Data == "4"){
        Data_Gifting();
    }else if (Data == "5"){
         Next();
    }else if (Data == "#"){
        mainmenu();
    }else if (Data == "0"){
        mainmenu();
    }
}

function Buy_Data(){
    let Buy_Data = prompt(
        "1.Daily & Wkend\n"+
        "2.14Days Data Plan\n"+
        "3.Night Time Only\n"+
        "4.Weekly\n"+
        "5.Monthly\n"+
        "6.Next\n"+
        "\n"+
        "\n"+
        "Previous Menu:#\n"+
       "Main Menu:0.\n"
    );
    if (Buy_Data == "1"){
        Daily_Wkend();
    }else if (Buy_Data == "2"){
        for_14Days_Data_Plan();
    }else if (Buy_Data == "3"){
        Night_Time_Only();
    }else if(Buy_Data== "4"){
        Weekly();
    }else if (Buy_Data == "5"){
        Monthly();
    }else if (Buy_Data == "6"){
        Next();
    }
    else if (Buy_Data == "#"){
        Data();
    }else if (Data == "0"){
        mainmenu();
    }
   }

    function Daily_Wkend(){
     let Daily_Wkend = prompt(
        "1.Daily 50MB\n"+
        "2.Daily 100MB+60MB Socials\n"+
        "3.Daily 650MB\n"+
        "4.Daily 200MB+300secs\n"+
        "5.Next\n"+
        "\n"+
        "\n"+
        "Previous Menu:#\n"+
       "Main Menu:0.\n"
     );
     if (Daily_Wkend == "1"){
        Daily_50MB();
    }else if (Daily_Wkend == "2"){
        for_100MB_60MB_Socials();
    }else if (Daily_Wkend == "3"){
        Daily_650MB();
    }else if(Daily_Wkend == "4"){
        Daily_200MB_300sec();
    }else if (Daily_Wkend == "5"){
        Next();
    }else if (Daily_Wkend == "#"){
        Buy_Data();
    }else if (Daily_Wkend == "0"){
        mainmenu();
    }
    }

    function Daily_50MB(){
        let Daily_50MB = prompt(
            "Buy now @#50 and select your\n"+
            "preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"
        );
        if (Daily_50MB == "1"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (Daily_50MB == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (Daily_50MB == "#"){
          Daily_Wkend();  
        }else if (Daily_50MB == "0"){
            mainmenu();
        }else {
            alert("Invalid entry try again.")
        }
    }

    function for_100MB_60MB_Socials(){
        let for_100MB_60MB_Socials = prompt(
            "Buy now @#100 and select your\n"+
            "preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"
        );
        if (for_100MB_60MB_Socials == "1"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_100MB_60MB_Socials == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_100MB_60MB_Socials == "#"){
          Daily_Wkend();  
        }else if (for_100MB_60MB_Socials == "0"){
            mainmenu();
        }else {
            alert("Invalid entry try again.")
        }
    }

    function Daily_650MB(){
        let Daily_650MB = prompt(
            "Buy now @#200 VAT and select\n"+
            "preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"
        );
        if (Daily_650MB == "1"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (Daily_650MB == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (Daily_650MB == "#"){
          Daily_Wkend();  
        }else if (Daily_650MB == "0"){
            mainmenu();
        }else {
            alert("Invalid entry try again.")
        } 
    }

    function Daily_200MB_300sec(){
        let Daily_200MB_300sec = prompt(
            "Buy 200MB(100MB all time+100MB\n"+
            "night+300sec) for #150 and select\n"+
            "preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"
        );
        if (Daily_200MB_300sec == "1"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (Daily_200MB_300sec == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (Daily_200MB_300sec == "#"){
          Daily_Wkend();  
        }else if (Daily_200MB_300sec == "0"){
            mainmenu();
        }else {
            alert("Invalid entry try again.")
        } 
    }

    function Next(){
        let Next = prompt(
            "1.Nights & Weekened Plan\n"+
            "2.Data+Social\n"+
            "3.Data+Content\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"
        );
        if (Next == "1"){
            Nights_Weekened_Plan();
        }else if (Next == "2"){
            Data_Social();
        }else if (Next == "3"){
            Data_Content();
        }else if (Next == "#"){
           Daily_Wkend() ;
        }else if (Next == "0"){
            mainmenu();
        }else {
            alert("Incorrect code")
        }
    }

    function Nights_Weekened_Plan(){
        let Nights_Weekened_Plan = prompt(
            "1.3GB Night & Weekend Plan\n"+
            "2.7GB Night & Weekend Plan\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0."
        );
        if (Nights_Weekened_Plan == "1"){
            for_3GB_Night_Weekend_Plan();
        }else if (Nights_Weekened_Plan == "2"){
            for_7GB_Night_Weekend_Plan();
        }else if (Nights_Weekened_Plan == "#"){
            Next();
        }else if (Nights_Weekened_Plan == "0"){
            mainmenu();
        }else{
            alert("Invalid entry")
        }
    }

    function for_3GB_Night_Weekend_Plan(){
        let for_3GB_Night_Weekend_Plan = prompt(
            "Buy now @#1000 and select\n"+
            "preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"  
        );
        if (for_3GB_Night_Weekend_Plan == "1"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_3GB_Night_Weekend_Plan == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_3GB_Night_Weekend_Plan == "#"){
          Nights_Weekened_Plan();  
        }else if (for_3GB_Night_Weekend_Plan == "0"){
            mainmenu();
        }else {
            alert("Invalid entry try again.")
        } 
    }

    function for_7GB_Night_Weekend_Plan(){
        let for_7GB_Night_Weekend_Plan = prompt(
            "Buy now @#1000 and select\n"+
            "preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"  
        );
        if (for_7GB_Night_Weekend_Plan == "1"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_7GB_Night_Weekend_Plan == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_7GB_Night_Weekend_Plan == "#"){
          Nights_Weekened_Plan();  
        }else if (for_7GB_Night_Weekend_Plan == "0"){
            mainmenu();
        }else {
            alert("Invalid entry try again.")
        } 
    }

    function Data_Social(){
        let Data_Social = prompt(
          "1.1GB Daily+Socials\n"+
          "2.2GB 3-Days+Social\n"+
          "\n"+
          "\n"+
          "Previous Menu:#\n"+
          "Main Menu:0.\n"
        );
        if (Data_Social == "1"){
            for_1GB_Daily_Socials();
        }else if (Data_Social == "2"){
            for_7GB_Daily_Socials();
        }else if (Data_Social == "#"){
            Next();
        }else if (Data_Social == "0"){
            mainmenu();
        }else{
            alert("Invalid entry")
        }
    }

    function for_1GB_Daily_Socials(){
        let for_1GB_Daily_Socials = prompt(
            "Buy now @#300 and select\n"+
            "preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"  
        );
        if (for_1GB_Daily_Socials == "1"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_1GB_Daily_Socials == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_1GB_Daily_Socials == "#"){
          Data_Social();  
        }else if (for_1GB_Daily_Socials == "0"){
            mainmenu();
        }else {
            alert("Invalid entry try again.")
        } 
    }

    function for_7GB_Daily_Socials(){
        let for_7GB_Daily_Socials = prompt(
            "Buy now @#500 and select\n"+
            "preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"  
        );
        if (for_7GB_Daily_Socials == "1"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_7GB_Daily_Socials == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_7GB_Daily_Socials == "#"){
          Data_Social();  
        }else if (for_7GB_Daily_Socials == "0"){
            mainmenu();
        }else {
            alert("Invalid entry try again.")
        } 
    }

    function Data_Content(){
        let Data_Content = prompt(
            "1.100MB + Content Valid for 24hrs\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"
        );
        if (Data_Content == "1"){
            for_100MB_Content_Valid_24hrs();
        }else if (Data_Content == "#"){
          Next();  
        }else if (Data_Content == "0"){
            mainmenu();
        }else{
            alert("Invalid entry")
        }
    }

    function for_100MB_Content_Valid_24hrs(){
        let for_100MB_Content_Valid_24hrs = prompt(
            "Buy now @#150 and select your\n"+
            "preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"  
        );
        if (for_100MB_Content_Valid_24hrs == "1"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_100MB_Content_Valid_24hrs == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_100MB_Content_Valid_24hrs == "#"){
          Data_Content();  
        }else if (for_100MB_Content_Valid_24hrs == "0"){
            mainmenu();
        }else {
            alert("Invalid entry try again.")
        } 
    }

    function for_14Days_Data_Plan(){
        let for_14Days_Data_Plan = prompt(
            "1.2GB(800MB+1.2GB night) for\n"+
            "#500\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"
        );
        if (for_14Days_Data_Plan == "1"){
            for_2GB_800MB_1_2GB_night_500();
        }else if (for_14Days_Data_Plan == "#"){
            Buy_Data();
        }else if (for_14Days_Data_Plan == "0"){
            mainmenu();
        }else{
            alert("Invalid entry")
        }
    }

    function for_2GB_800MB_1_2GB_night_500(){
       let for_2GB_800MB_1_2GB_night_500 = prompt(
        "Buy now @#500 and select\n"+
            "preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"  
        );
        if (for_2GB_800MB_1_2GB_night_500 == "1"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_2GB_800MB_1_2GB_night_500 == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_2GB_800MB_1_2GB_night_500 == "#"){
          for_14Days_Data_Plan();  
        }else if (for_2GB_800MB_1_2GB_night_500 == "0"){
            mainmenu();
        }else {
            alert("Invalid entry try again.")
        } 
    }

    function Night_Time_Only(){
        let Night_Time_Only = prompt(
            "1.1.5GB Night only @#200\n"+
            "2.2.5GB Night only @#300\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n" 
        );
        if (Night_Time_Only == "1"){
            for_1_5GB_Night_only_200();
        }else if (Night_Time_Only == "2"){
            for_2_5GB_Night_only_300();
        }else if (Night_Time_Only == "#"){
            Buy_Data();
        }else if (Night_Time_Only == "0"){
            mainmenu();
        }else{
            alert("Invalid entry")
        }
    }

    function for_1_5GB_Night_only_200(){
        let for_1_5GB_Night_only_200 = prompt(
            "Buy 1.5GB Night only now @#200\n"+
            "and select preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"  
        );
        if (for_1_5GB_Night_only_200 == "1"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_1_5GB_Night_only_200 == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_1_5GB_Night_only_200 == "#"){
          Night_Time_Only();  
        }else if (for_1_5GB_Night_only_200 == "0"){
            mainmenu();
        }else {
            alert("Invalid entry try again.")
        } 
    }

    function for_2_5GB_Night_only_300(){
        let for_2_5GB_Night_only_300 = prompt(
            "Buy 1.5GB Night only now @#200\n"+
            "and select preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"  
        );
        if (for_2_5GB_Night_only_300 == "1"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_2_5GB_Night_only_300 == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_2_5GB_Night_only_300 == "#"){
          Night_Time_Only();  
        }else if (for_2_5GB_Night_only_300 == "0"){
            mainmenu();
        }else {
            alert("Invalid entry try again.")
        } 
    }

    function Weekly(){
        let Weekly = prompt(
           "1.250MB Weekly Plan\n"+
           "2.Weekly Data Plan+Social\n"+
           "3.Data+Content\n"+
           "\n"+
           "\n"+
           "Previous Menu:#\n"+
           "Main Menu:0.\n"
        );
        if (Weekly == "1"){
            for_250MB_Weekly_Plan();
        }else if (Weekly == "2"){
            Weekly_Data_Plan_Social();
        }else if (Weekly == "3"){
            Data_Content();
        }else if (Weekly){
            Buy_Data();
        }else if (Weekly == "0"){
            mainmenu();
        }else {
            alert("Invalid entry")
        }
    }

    function for_250MB_Weekly_Plan(){
        let for_250MB_Weekly_Plan = prompt(
            "Buy 250MB weekly plan @#200 and\n"+
            "select your preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
           "\n"+
           "Previous Menu:#\n"+
           "Main Menu:0.\n"
        );
        if (for_250MB_Weekly_Plan == "1"){
            alert("Dear customer,your request was\n"+
            "not successful due to insufficient\n"+
            "balance,.Please, recharged and try\n"+
            "again."
        ) 
        }else if (for_250MB_Weekly_Plan == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_250MB_Weekly_Plan == "#"){
            Weekly();
        }else if (for_250MB_Weekly_Plan == "0"){
            mainmenu();
        }else{
            alert("Invalid entry")
        }
    }

    function Weekly_Data_Plan_Social(){
        let Weekly_Data_Plan_Social = prompt(
            "1.1GB Weekly Data Plan+Social\n"+
            "2.7GB (6GB+1GB Night) weekly data\n"+
            "plan\n"+
            "\n"+
           "\n"+
           "Previous Menu:#\n"+
           "Main Menu:0.\n"
        );
        if (Weekly_Data_Plan_Social == "1"){
            for_1GB_Weekly_Data_Plan_Social();
        }else if (Weekly_Data_Plan_Social == "2"){
            for_7GB_6GB_1GB_Night_weekly_data();
        }else if (Weekly_Data_Plan_Social == "#"){
            Weekly();
        }else if (Weekly_Data_Plan_Social == "0"){
            mainmenu();
        }else{
            alert("Invalid entry")
        }
    }

    function for_1GB_Weekly_Data_Plan_Social(){
        let for_1GB_Weekly_Data_Plan_Social = prompt(
            "Buy now @#500 and select your\n"+
            "select your preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
           "\n"+
           "Previous Menu:#\n"+
           "Main Menu:0.\n"
        );
        if (for_1GB_Weekly_Data_Plan_Social == "1"){
            alert("Dear customer,your request was\n"+
            "not successful due to insufficient\n"+
            "balance,.Please, recharged and try\n"+
            "again."
        ) 
        }else if (for_1GB_Weekly_Data_Plan_Social == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_1GB_Weekly_Data_Plan_Social == "#"){
            Weekly_Data_Plan_Social();
        }else if (for_1GB_Weekly_Data_Plan_Social == "0"){
            mainmenu();
        }else{
            alert("Invalid entry")
        }   
    }

    function for_7GB_6GB_1GB_Night_weekly_data(){
    let for_7GB_6GB_1GB_Night_weekly_data = prompt(
    "Buy now @#1500 and select your\n"+
            "select your preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
           "\n"+
           "Previous Menu:#\n"+
           "Main Menu:0.\n"
        );
        if (for_7GB_6GB_1GB_Night_weekly_data == "1"){
            alert("Dear customer,your request was\n"+
            "not successful due to insufficient\n"+
            "balance,.Please, recharged and try\n"+
            "again."
        ) 
        }else if (for_7GB_6GB_1GB_Night_weekly_data == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_7GB_6GB_1GB_Night_weekly_data == "#"){
            Weekly_Data_Plan_Social();
        }else if (for_7GB_6GB_1GB_Night_weekly_data == "0"){
            mainmenu();
        }else{
            alert("Invalid entry")
        }   
    }

       function Data_Content(){
       let Data_Content = prompt(
       "1.250MB+Content\n"+
       "\n"+
       "\n"+
       "Previous Menu:#\n"+
       "Main Menu:0.\n"
       );
       if (Data_Content == "1"){
       for_250MB_Content();
       }else if (Data_Content == "#"){
       Buy_Data();
       }else if (Data_Content == "0"){
       mainmenu();
       }else{
       alert("Invalid entry")
       }
     }

     function for_250MB_Content(){
     let for_250MB_Content = prompt(
     "Buy now @#250 and select your\n"+
            "select your preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
           "\n"+
           "Previous Menu:#\n"+
           "Main Menu:0.\n"
        );
        if (for_250MB_Content == "1"){
            alert("Dear customer,your request was\n"+
            "not successful due to insufficient\n"+
            "balance,.Please, recharged and try\n"+
            "again."
        ) 
        }else if (for_250MB_Content == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (for_250MB_Content == "#"){
            Data_Content();
        }else if (for_250MB_Content == "0"){
            mainmenu();
        }else{
            alert("Invalid entry")
        }   
     }

     function Monthly(){
        let Monthly = prompt(
            "1.Monthly 500MB\n"+
            "2.Monthly 4GB-11GB\n"+
            "3.Monthly 12GB-125GB\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"
        );
        if (Monthly == "1"){
            Monthly_500MB();
        }else if (Monthly == "2"){
            Monthly_4GB_11GB();
        }else if (Monthly == "3"){
            Monthly_12GB_125GB();
        }else if (Monthly == "#"){
            Buy_Data();
        }else if (Monthly == "0"){
            mainmenu();
        }else{
            alert("Invalid entry")
        }
       }

       function Monthly_500MB(){
        let Monthly_500MB = prompt(
            "Buy now @#500 and select your\n"+
            "select your preferred option\n"+
            "1.Auto-Renewal\n"+
            "2.One-Off\n"+
            "\n"+
           "\n"+
           "Previous Menu:#\n"+
           "Main Menu:0.\n"
        );
        if (Monthly_500MB == "1"){
            alert("Dear customer,your request was\n"+
            "not successful due to insufficient\n"+
            "balance,.Please, recharged and try\n"+
            "again."
        ) 
        }else if (Monthly_500MB == "2"){
            alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
        }else if (Monthly_500MB == "#"){
            Monthly();
        }else if (Monthly_500MB == "0"){
            mainmenu();
        }else{
            alert("Invalid entry")
        }
       }

       function Monthly_4GB_11GB(){
        let Monthly_4GB_11GB = prompt(
            "1.4GB @#1000\n"+
            "2.6.2GB @#1200\n"+
            "3.7.5GB @#1500\n"+
            "4.9.5GB @#2000\n"+
            "5.11GB @#2500\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"
        );
        if (Monthly_4GB_11GB == "1"){
            for_4GB_1000();
        }else if (Monthly_4GB_11GB == "2"){
            for_6_2GB_1200();
        }else if (Monthly_4GB_11GB == "3"){
            for_7_5GB_1500();
        }else if (Monthly_4GB_11GB == "4"){
            for_9_5GB_2000();
        }else if (Monthly_4GB_11GB == "5"){
            for_11GB_2500();
        }else if (Monthly_4GB_11GB == "#"){
          Monthly();  
        }else if (Monthly_4GB_11GB == "0"){
            mainmenu
        }else{
            alert("Invalid entry")
        }
       }

       function for_4GB_1000(){
       let for_4GB_1000 = prompt(
       "Buy 4GB(2GB all time+2GB night) for\n"+
       "#1000 and select preferred option\n"+
       "1.Auto-Renewal\n"+
        "2.One-Off\n"+
       "\n"+
       "\n"+
       "Previous Menu:#\n"+
       "Main Menu:0.\n"
       );
       if (for_4GB_1000 == "1"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_4GB_1000 == "2"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_4GB_1000 == "#"){
       Monthly_4GB_11GB();
       }else if (for_4GB_1000 == "0"){
       mainmenu();
       }else{
       alert("Invalid entry")
       }
       }

       function for_6_2GB_1200(){
       let for_6_2GB_1200 = prompt(
       "Buy 6.2GB(2GB all time+4GB night) for\n"+
       "#1200 and select preferred option\n"+
       "1.Auto-Renewal\n"+
        "2.One-Off\n"+
       "\n"+
       "\n"+
       "Previous Menu:#\n"+
       "Main Menu:0.\n"
       );
       if (for_6_2GB_1200 == "1"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_6_2GB_1200 == "2"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_6_2GB_1200 == "#"){
       Monthly_4GB_11GB();
       }else if (for_6_2GB_1200 == "0"){
       mainmenu();
       }else{
       alert("Invalid entry")
       }
       }

       function for_7_5GB_1500(){
       let for_7_5GB_1500 = prompt(
       "Buy 7.5GB(4GB all time+2GB night) for\n"+
       "#1000 and select preferred option\n"+
       "1.Auto-Renewal\n"+
        "2.One-Off\n"+
       "\n"+
       "\n"+
       "Previous Menu:#\n"+
       "Main Menu:0.\n"
       );
       if (for_7_5GB_1500 == "1"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_7_5GB_1500 == "2"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_7_5GB_1500 == "#"){
       Monthly_4GB_11GB();
       }else if (for_7_5GB_1500 == "0"){
       mainmenu();
       }else{
       alert("Invalid entry")
       }
       }

       function for_9_5GB_2000(){
       let for_9_5GB_2000 = prompt(
       "Buy 9.5GB(4GB all time+4GB night) for\n"+
       "#2000 and select preferred option\n"+
       "1.Auto-Renewal\n"+
        "2.One-Off\n"+
       "\n"+
       "\n"+
       "Previous Menu:#\n"+
       "Main Menu:0.\n"
       );
       if (for_9_5GB_2000 == "1"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_9_5GB_2000 == "2"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_9_5GB_2000 == "#"){
       Monthly_4GB_11GB();
       }else if (for_9_5GB_2000 == "0"){
       mainmenu();
       }else{
       alert("Invalid entry")
       }
       }

       function for_11GB_2500(){
       let for_11GB_2500 = prompt(
       "Buy 11GB(6GB all time+4GB night) for\n"+
       "#1000 and select preferred option\n"+
       "1.Auto-Renewal\n"+
        "2.One-Off\n"+
       "\n"+
       "\n"+
       "Previous Menu:#\n"+
       "Main Menu:0.\n"
       );
       if (for_11GB_2500 == "1"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_11GB_2500 == "2"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_11GB_2500 == "#"){
       Monthly_4GB_11GB();
       }else if (for_11GB_2500 == "0"){
       mainmenu();
       }else{
       alert("Invalid entry")
       }
       }

       function Monthly_12GB_125GB(){
        let Monthly_12GB_125GB = prompt(
        "1.15GB for #3000\n"+
        "2.18.5GB @#4000\n"+
        "3.22GB @#5000\n"+
        "4.35GB @#7000\n"+
        "5.50GB for #10000\n"+
        "6.80GB for #15000\n"+
        "7.125GB for #20000\n"+
        "\n"+
        "\n"+
        "Previous Menu:#\n"+
        "Main Menu:0.\n"
        );
        if (Monthly_12GB_125GB == "1"){
        for_15GB_3000();
        }else if (Monthly_12GB_125GB == "2"){
        for_18_5GB_4000();
        }else if (Monthly_12GB_125GB == "3"){
         for_22GB_5000();
        }else if (Monthly_12GB_125GB == "4"){
        for_35GB_7000();
        }else if (Monthly_12GB_125GB == "5"){
        for_50GB_10000();
        }else if (Monthly_12GB_125GB == "6"){
        for_80GB_15000();
        }else if (Monthly_12GB_125GB == "7"){
        for_125GB_20000();
       }else if (Monthly_12GB_125GB == "#"){
        Buy_Data();
       }else if (Monthly_12GB_125GB == "0"){
       mainmenu();
       }else{
       alert("Invalid entry")
       }
       }

       function for_15GB_3000(){
       let for_15GB_3000 = prompt(
       "Buy 15GB(10GB all time+5GB night) \n"+
       "#3000 and select preferred\n"+ 
       "option\n"+
       "1.Auto-Renewal\n"+
        "2.One-Off\n"+
       "\n"+
       "\n"+
       "Previous Menu:#\n"+
       "Main Menu:0.\n"
       );
        if (for_15GB_3000 == "1"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_15GB_3000 == "2"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_15GB_3000 == "#"){
       Monthly_12GB_125GB();
       }else if (for_15GB_3000 == "0"){
       mainmenu();
       }else{
       alert("Invalid entry")
       }
       }

       function for_18_5GB_4000(){
       let for_18_5GB_4000 = prompt(
       "Buy 18.5GB(12GB all time+5GB night) \n"+
       "#4000 and select preferred\n"+ 
       "option\n"+
       "1.Auto-Renewal\n"+
        "2.One-Off\n"+
       "\n"+
       "\n"+
       "Previous Menu:#\n"+
       "Main Menu:0.\n"
       );
        if (for_18_5GB_4000 == "1"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_18_5GB_4000 == "2"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_18_5GB_4000 == "#"){
       Monthly_12GB_125GB();
       }else if (for_18_5GB_4000 == "0"){
       mainmenu();
       }else{
       alert("Invalid entry")
       }
       }

       function for_22GB_5000(){
       let for_22GB_5000 = prompt(
       "Buy 22GB(15GB all time+5GB night) \n"+
       "#5000 and select preferred\n"+ 
       "option\n"+
       "1.Auto-Renewal\n"+
        "2.One-Off\n"+
       "\n"+
       "\n"+
       "Previous Menu:#\n"+
       "Main Menu:0.\n"
       );
        if (for_22GB_5000 == "1"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_22GB_5000 == "2"){
       alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            )
       }else if (for_22GB_5000 == "#"){
       Monthly_12GB_125GB();
       }else if (for_22GB_5000 == "0"){
       mainmenu();
       }else{
       alert("Invalid entry")
       }
       }

       function for_35GB_7000(){
        let for_35GB_7000 = prompt(
        "Buy 35GB(20GB all time+10GB night) \n"+
        "#7000 and select preferred\n"+ 
        "option\n"+
        "1.Auto-Renewal\n"+
         "2.One-Off\n"+
        "\n"+
        "\n"+
        "Previous Menu:#\n"+
        "Main Menu:0.\n"
        );
         if (for_35GB_7000 == "1"){
        alert("Dear customer,your request was\n"+
                 "not successful due to insufficient\n"+
                 "balance,.Please, recharged and try\n"+
                 "again."
             )
        }else if (for_35GB_7000 == "2"){
        alert("Dear customer,your request was\n"+
                 "not successful due to insufficient\n"+
                 "balance,.Please, recharged and try\n"+
                 "again."
             )
        }else if (for_35GB_7000 == "#"){
        Monthly_12GB_125GB();
        }else if (for_35GB_7000 == "0"){
        mainmenu();
        }else{
        alert("Invalid entry")
        }
        }

        function for_50GB_10000(){
            let for_50GB_10000 = prompt(
            "Buy 50GB(15GB all time+5GB night) \n"+
            "#10000 and select preferred\n"+ 
            "option\n"+
            "1.Auto-Renewal\n"+
             "2.One-Off\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"
            );
             if (for_50GB_10000 == "1"){
            alert("Dear customer,your request was\n"+
                     "not successful due to insufficient\n"+
                     "balance,.Please, recharged and try\n"+
                     "again."
                 )
            }else if (for_50GB_10000 == "2"){
            alert("Dear customer,your request was\n"+
                     "not successful due to insufficient\n"+
                     "balance,.Please, recharged and try\n"+
                     "again."
                 )
            }else if (for_50GB_10000 == "#"){
            Monthly_12GB_125GB();
            }else if (for_50GB_10000 == "0"){
            mainmenu();
            }else{
            alert("Invalid entry")
            }
          }

          function for_80GB_15000(){
            let for_80GB_15000 = prompt(
            "Buy 80GB(15GB all time+5GB night) \n"+
            "#15000 and select preferred\n"+ 
            "option\n"+
            "1.Auto-Renewal\n"+
             "2.One-Off\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"
            );
             if (for_80GB_15000 == "1"){
            alert("Dear customer,your request was\n"+
                     "not successful due to insufficient\n"+
                     "balance,.Please, recharged and try\n"+
                     "again."
                 )
            }else if (for_80GB_15000 == "2"){
            alert("Dear customer,your request was\n"+
                     "not successful due to insufficient\n"+
                     "balance,.Please, recharged and try\n"+
                     "again."
                 )
            }else if (for_80GB_15000 == "#"){
            Monthly_12GB_125GB();
            }else if (for_80GB_15000 == "0"){
            mainmenu();
            }else{
            alert("Invalid entry")
            }
          }

          function for_125GB_20000(){
            let for_125GB_20000 = prompt(
            "Buy 125GB(20GB all time+15GB night) \n"+
            "#20000 and select preferred\n"+ 
            "option\n"+
            "1.Auto-Renewal\n"+
             "2.One-Off\n"+
            "\n"+
            "\n"+
            "Previous Menu:#\n"+
            "Main Menu:0.\n"
            );
             if (for_125GB_20000 == "1"){
            alert("Dear customer,your request was\n"+
                     "not successful due to insufficient\n"+
                     "balance,.Please, recharged and try\n"+
                     "again."
                 )
            }else if (for_125GB_20000 == "2"){
            alert("Dear customer,your request was\n"+
                     "not successful due to insufficient\n"+
                     "balance,.Please, recharged and try\n"+
                     "again."
                 )
            }else if (for_125GB_20000 == "#"){
            Monthly_12GB_125GB();
            }else if (for_125GB_20000 == "0"){
            mainmenu();
            }else{
            alert("Invalid entry")
            }
          }

          function Next(){
            let Next = prompt(
                "1.Bi-Monthly\n"+
                "2.Quarterly\n"+
                "3.Bi-Annual\n"+
                "4.Annual\n"+
                "\n"+
                "\n"+
                "Previous Menu:#\n"+
                "Main Menu:0.\n"
            );
            if(Next == "1"){
                Bi_Monthly();
            }else if (Next == "2"){
                Quarterly();
            }else if (Next == "3"){
                Bi_Annual();
            }else if (Next == "4"){
                Annual();
            }else if (Next == "#"){
                 Buy_Data();
            }else if (Next == "0"){
                mainmenu();
            }else{
                alert("Invalid entry")
            }
          }

          function Bi_Monthly(){
            let Bi_Monthly = prompt(
                "1.225GB Bi-Monthly data plan for\n"+
                "#30000\n"+
                "\n"+
                "\n"+
                "Previous Menu:#\n"+
                "Main Menu:0.\n"
            );
            if (Bi_Monthly  == "1"){
                for_225GB_Bi_Monthly_data_plan_30000();
            }else if (Bi_Monthly == "#"){
                Next();
            }else if (Bi_Monthly == "0"){
                mainmenu();
            }else{
                 alert("Invalid entry")
            }
          }

          function for_225GB_Bi_Monthly_data_plan_30000(){
            let for_225GB_Bi_Monthly_data_plan_30000 = prompt(
                "Buy now @#30000 and select\n"+
                "preferred option\n"+
                "1.Auto-Renewal\n"+
                "2.One-Off\n"+
                "\n"+
               "\n"+
               "Previous Menu:#\n"+
               "Main Menu:0.\n"
            );
            if (for_225GB_Bi_Monthly_data_plan_30000 == "1"){
                alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            ) 
            }else if (for_225GB_Bi_Monthly_data_plan_30000 == "2"){
                alert("Dear customer,your request was\n"+
                    "not successful due to insufficient\n"+
                    "balance,.Please, recharged and try\n"+
                    "again."
                )
            }else if (for_225GB_Bi_Monthly_data_plan_30000 == "#"){
                Bi_Monthly();
            }else if (for_225GB_Bi_Monthly_data_plan_30000 == "0"){
                mainmenu();
            }else{
                alert("Invalid entry")
            }   
          }

          function Quarterly(){
            let Quarterly = prompt(
                "1.425GB Quaterly data plan for\n"+
                "#50000\n"+
                "\n"+
                "\n"+
                "Previous Menu:#\n"+
                "Main Menu:0.\n"
            );
            if (Quarterly  == "1"){
                for_425GB_Quarterly_data_plan_50000();
            }else if (Quarterly == "#"){
                Next();
            }else if (Quarterly == "0"){
                mainmenu();
            }else{
                 alert("Invalid entry")
            }
          }

          function for_425GB_Quarterly_data_plan_50000(){
            let for_425GB_Quarterly_data_plan_50000 = prompt(
                "Buy now @#50000 and select\n"+
                "preferred option\n"+
                "1.Auto-Renewal\n"+
                "2.One-Off\n"+
                "\n"+
               "\n"+
               "Previous Menu:#\n"+
               "Main Menu:0.\n"
            );
            if (for_425GB_Quarterly_data_plan_50000 == "1"){
                alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            ) 
            }else if (for_425GB_Quarterly_data_plan_50000 == "2"){
                alert("Dear customer,your request was\n"+
                    "not successful due to insufficient\n"+
                    "balance,.Please, recharged and try\n"+
                    "again."
                )
            }else if (for_425GB_Quarterly_data_plan_50000 == "#"){
                Quarterly();
            }else if (for_425GB_Quarterly_data_plan_50000 == "0"){
                mainmenu();
            }else{
                alert("Invalid entry")
            }   
          }

          function Bi_Annual(){
            let Bi_Annual = prompt(
                "1.600GB Quaterly data plan for\n"+
                "#70000\n"+
                "\n"+
                "\n"+
                "Previous Menu:#\n"+
                "Main Menu:0.\n"
            );
            if (Bi_Annual  == "1"){
              for_600GB_Bi_Annual_70000();
            }else if (Bi_Annual == "#"){
                Next();
            }else if (Bi_Annual == "0"){
                mainmenu();
            }else{
                 alert("Invalid entry")
            }
          }

          function for_600GB_Bi_Annual_70000(){
            let for_600GB_Bi_Annual_70000 = prompt(
                "Buy now @#70000 and select\n"+
                "preferred option\n"+
                "1.Auto-Renewal\n"+
                "2.One-Off\n"+
                "\n"+
               "\n"+
               "Previous Menu:#\n"+
               "Main Menu:0.\n"
            );
            if (for_600GB_Bi_Annual_70000 == "1"){
                alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            ) 
            }else if (for_600GB_Bi_Annual_70000 == "2"){
                alert("Dear customer,your request was\n"+
                    "not successful due to insufficient\n"+
                    "balance,.Please, recharged and try\n"+
                    "again."
                )
            }else if (for_600GB_Bi_Annual_70000 == "#"){
                Bi_Annual();
            }else if (for_600GB_Bi_Annual_70000 == "0"){
                mainmenu();
            }else{
                alert("Invalid entry")
            }   
          }

          function Annual(){
            let Annual = prompt(
                "1.1TB Annual data plan for\n"+
                "#100000\n"+
                "\n"+
                "\n"+
                "Previous Menu:#\n"+
                "Main Menu:0.\n"
            );
            if (Annual  == "1"){
                for_1TB_Annual_100000();
            }else if (Annual == "#"){
                Next();
            }else if (Annual == "0"){
                mainmenu();
            }else{
                 alert("Invalid entry")
            }
          }

          function for_1TB_Annual_100000(){
            let for_1TB_Annual_100000 = prompt(
                "Buy now @#100000 and select\n"+
                "preferred option\n"+
                "1.Auto-Renewal\n"+
                "2.One-Off\n"+
                "\n"+
               "\n"+
               "Previous Menu:#\n"+
               "Main Menu:0.\n"
            );
            if (for_1TB_Annual_100000 == "1"){
                alert("Dear customer,your request was\n"+
                "not successful due to insufficient\n"+
                "balance,.Please, recharged and try\n"+
                "again."
            ) 
            }else if (for_1TB_Annual_100000 == "2"){
                alert("Dear customer,your request was\n"+
                    "not successful due to insufficient\n"+
                    "balance,.Please, recharged and try\n"+
                    "again."
                )
            }else if (for_1TB_Annual_100000 == "#"){
                Annual();
            }else if (for_1TB_Annual_100000 == "0"){
                mainmenu();
            }else{
                alert("Invalid entry")
            }   
          }

          function Check_Data_Balance(){
          "Your main data balance is 10MB\n"+
          "valid till 2024-06-18. Get 7GB + Free\n"+
          "Social @ #1,500 Valid for 7days. Dail\n"+
          "*229*2*2# Now!"
          }

          function Streaming_Bundles(){
          let Streaming_Bundles = prompt(
          "1.Daily Streaming\n"+
          "2.3 Day\n"+
          "3.Weekly Streaming\n"+
          "4.Monthly Streaming\n"+
          "\n"+
          "\n"+
          "Previous Menu:#\n"+
          "Main Menu:0.\n"
          );
          if (Streaming_Bundles == "1"){
          Daily_Streaming();
          }else if (Streaming_Bundles == "2"){
          for_3_Day();
          }else if (Streaming_Bundles == "3"){
          Weekly_Streaming();
          }else if (Streaming_Bundles == "4"){
          Monthly_Streaming();
          }else if (Streaming_Bundles == "#"){
          Data();
          }else if (Streaming_Bundles == "0"){
          mainmenu
          }else{
          alert("Invalid entry")
          }
          }

          function Daily_Streaming(){
            let Daily_Streaming = prompt(
                "1.10 mins Video\n"+
                "2.30 mins Video\n"+
                "3.60 mins Video\n"+
                "4.2 Hours Video\n"+
                "\n"+
                "\n"+
                "Previous Menu:#\n"+
                "Main Menu:0.\n"
            );
            if (Daily_Streaming == "1"){
                for_10_mins_Video();
                }else if (Daily_Streaming == "2"){
                for_30_mins_Video();
                }else if (Daily_Streaming == "3"){
                for_60_mins_Video();
                }else if (Daily_Streaming == "4"){
                for_2_Hours_Video();
                }else if (Daily_Streaming == "#"){
                Streaming_Bundles();
                }else if (Daily_Streaming == "0"){
                mainmenu
                }else{
                alert("Invalid entry")
                }
               }

               function for_10_mins_Video(){
                let for_10_mins_Video = prompt(
                    "1Buy now at #25\n"+
                    "\n"+
                    "\n"+
                    "Previous Menu:#\n"+
                    "Main Menu:0.\n"
                );
                if (for_10_mins_Video == "1"){
                    alert("Dear customer, your request was\n"+
                        "not succesful due to insufficient\n"+
                        "balance. Please, recharge and try\n"+
                        "again."
                    )
                }else if (for_10_mins_Video == "#"){
                    Daily_Streaming();
                }else if (for_10_mins_Video == "0"){
                    mainmenu();
                }else{
                    alert("Invalid entry")
                }
               }

               function for_30_mins_Video(){
                let for_30_mins_Video = prompt(
                    "1Buy now at #60\n"+
                    "\n"+
                    "\n"+
                    "Previous Menu:#\n"+
                    "Main Menu:0.\n"
                );
                if (for_30_mins_Video == "1"){
                    alert("Dear customer, your request was\n"+
                        "not succesful due to insufficient\n"+
                        "balance. Please, recharge and try\n"+
                        "again."
                    )
                }else if (for_30_mins_Video == "#"){
                    Daily_Streaming();
                }else if (for_30_mins_Video == "0"){
                    mainmenu();
                }else{
                    alert("Invalid entry")
                }
               }

               function for_60_mins_Video(){
                let for_60_mins_Video = prompt(
                    "1Buy now at #110\n"+
                    "\n"+
                    "\n"+
                    "Previous Menu:#\n"+
                    "Main Menu:0.\n"
                );
                if (for_60_mins_Video == "1"){
                    alert("Dear customer, your request was\n"+
                        "not succesful due to insufficient\n"+
                        "balance. Please, recharge and try\n"+
                        "again."
                    )
                }else if (for_60_mins_Video == "#"){
                    Daily_Streaming();
                }else if (for_60_mins_Video == "0"){
                    mainmenu();
                }else{
                    alert("Invalid entry")
                }
               }

               function for_2_Hours_Video(){
                let for_2_Hours_Video = prompt(
                    "1Buy now at #200\n"+
                    "\n"+
                    "\n"+
                    "Previous Menu:#\n"+
                    "Main Menu:0.\n"
                );
                if (for_2_Hours_Video == "1"){
                    alert("Dear customer, your request was\n"+
                        "not succesful due to insufficient\n"+
                        "balance. Please, recharge and try\n"+
                        "again."
                    )
                }else if (for_2_Hours_Video == "#"){
                    Daily_Streaming();
                }else if (for_2_Hours_Video == "0"){
                    mainmenu();
                }else{
                    alert("Invalid entry")
                }
               }

               function for_3_Day(){
                let for_3_Day =prompt(
                    "1.3 Hours Video\n"+
                    "\n"+
                    "\n"+
                    "Previous Menu:#\n"+
                    "Main Menu:0.\n"
                );
                if (for_3_Day == "1"){
                    for_3_Hours_Video();
                }else if (for_3_Day == "#"){
                    Streaming_Bundles();
                }else if (for_3_Day == "0"){
                    mainmenu();
                }
               }

               function for_3_Hours_Video(){
                let for_3_Hours_Video = prompt(
                    "1.Buy now @#500 and select\n"+
                    "preferred option\n"+
                    "\n"+
                    "\n"+
                    "Previous Menu:#\n"+
                    "Main Menu:0.\n"
                );
                if (for_3_Hours_Video == "1"){
                    alert("Dear customer, your request was\n"+
                    "not succesful due to insufficient\n"+
                    "balance. Please, recharge and try\n"+
                    "again."
                )  
                }else if (for_3_Hours_Video == "#"){
                    for_3_Day();
                }else if (for_3_Hours_Video == "0"){
                    mainmenu();
                }
               }

               function Weekly_Streaming(){
                let Weekly_Streaming =prompt(
                    "1.7 Hours Video\n"+
                    "\n"+
                    "\n"+
                    "Previous Menu:#\n"+
                    "Main Menu:0.\n"
                );
                if (Weekly_Streaming == "1"){
                    for_2_Hours_Video();
                }else if (Weekly_Streaming == "#"){
                    Streaming_Bundles();
                }else if (Weekly_Streaming == "0"){
                    mainmenu();
                }
               }

               function for_7_Hours_Video(){
                let for_7_Hours_Video = prompt(
                    "1.Buy now @#1000 and select\n"+
                    "preferred option\n"+
                    "\n"+
                    "\n"+
                    "Previous Menu:#\n"+
                    "Main Menu:0.\n"
                );
                if (for_7_Hours_Video == "1"){
                    alert("Dear customer, your request was\n"+
                    "not succesful due to insufficient\n"+
                    "balance. Please, recharge and try\n"+
                    "again."
                )  
                }else if (for_7_Hours_Video == "#"){
                    Weekly_Streaming();
                }else if (for_7_Hours_Video == "0"){
                    mainmenu();
                }
               }

               function Monthly_Streaming(){
                let Monthly_Streaming = prompt(
                    "1.15 Hours Video\n"+
                    "2.40 hours Video\n"+
                    "3.90 Hours Video\n"+
                    "\n"+
                    "\n"+
                    "Previous Menu:#\n"+
                    "Main Menu:0.\n"
                );
                if (Monthly_Streaming == "1"){
                    for_15_Hours_Video();
                }else if (Monthly_Streaming == "2"){
                    for_40_hours_Video();
                }else if (Monthly_Streaming == "3"){
                    for_90_Hours_Video();
                }else if (Monthly_Streaming == "#"){
                    Streaming_Bundles();
                }else if (Monthly_Streaming == "0"){
                    mainmenu();
                }else{
                    alert("Invalid entry")
                }
               }

               function for_15_Hours_Video(){
                let for_15_Hours_Video = prompt(
                    "Buy now @#2500 and select\n"+
                    "preferred option\n"+
                    "\n"+
                    "\n"+
                    "1. Auto-Renewal\n"+
                    "2.One-Off\n"+
                    "Previous Menu:#\n"+
                    "Main Menu:0.\n" 
                );
                if (for_15_Hours_Video == "1"){
                    alert("Dear customer, your request was\n"+
                    "not succesful due to insufficient\n"+
                    "balance. Please, recharge and try\n"+
                    "again."
                )  
                }else if (for_15_Hours_Video == "2"){
                    alert("Dear customer, your request was\n"+
                    "not succesful due to insufficient\n"+
                    "balance. Please, recharge and try\n"+
                    "again."
                )  
                }else if (for_15_Hours_Video == "#"){
                    Monthly_Streaming();
                }else if (for_15_Hours_Video == "0"){
                    mainmenu();
                }else{
                    alert("Invalid entry")
                }
               }

               function for_40_hours_Video(){
                let for_40_hours_Video = prompt(
                    "Buy now @#6000 and select\n"+
                    "preferred option\n"+
                    "\n"+
                    "\n"+
                    "1. Auto-Renewal\n"+
                    "2.One-Off\n"+
                    "Previous Menu:#\n"+
                    "Main Menu:0.\n" 
                );
                if (for_40_hours_Video == "1"){
                    alert("Dear customer, your request was\n"+
                    "not succesful due to insufficient\n"+
                    "balance. Please, recharge and try\n"+
                    "again."
                )  
                }else if (for_40_hours_Video == "2"){
                    alert("Dear customer, your request was\n"+
                    "not succesful due to insufficient\n"+
                    "balance. Please, recharge and try\n"+
                    "again."
                )  
                }else if (for_40_hours_Video == "#"){
                    Monthly_Streaming();
                }else if (for_40_hours_Video == "0"){
                    mainmenu();
                }else{
                    alert("Invalid entry")
                }
               }

            //    function for_15_Hours_Video(){
            //     let for_15_Hours_Video = prompt(
            //         "Buy now @#2500 and select\n"+
            //         "preferred option\n"+
            //         "\n"+
            //         "\n"+
            //         "1. Auto-Renewal\n"+
            //         "2.One-Off\n"+
            //         "Previous Menu:#\n"+
            //         "Main Menu:0.\n" 
            //     );
            //     if (for_15_Hours_Video == "1"){
            //         alert("Dear customer, your request was\n"+
            //         "not succesful due to insufficient\n"+
            //         "balance. Please, recharge and try\n"+
            //         "again."
            //     )  
            //     }else if (for_15_Hours_Video == "2"){
            //         alert("Dear customer, your request was\n"+
            //         "not succesful due to insufficient\n"+
            //         "balance. Please, recharge and try\n"+
            //         "again."
            //     )  
            //     }else if (for_15_Hours_Video == "#"){
            //         Monthly_Streaming();
            //     }else if (for_15_Hours_Video == "0"){
            //         mainmenu();
            //     }else{
            //         alert("Invalid entry")
            //     }
            //     }

                function for_90_Hours_Video(){
                    let for_90_Hours_Video = prompt(
                        "Buy now @#11000 and select\n"+
                        "preferred option\n"+
                        "\n"+
                        "\n"+
                        "1. Auto-Renewal\n"+
                        "2.One-Off\n"+
                        "Previous Menu:#\n"+
                        "Main Menu:0.\n" 
                    );
                    if (for_90_Hours_Video == "1"){
                        alert("Dear customer, your request was\n"+
                        "not succesful due to insufficient\n"+
                        "balance. Please, recharge and try\n"+
                        "again."
                    )  
                    }else if (for_90_Hours_Video == "2"){
                        alert("Dear customer, your request was\n"+
                        "not succesful due to insufficient\n"+
                        "balance. Please, recharge and try\n"+
                        "again."
                    )  
                    }else if (for_90_Hours_Video == "#"){
                        Monthly_Streaming();
                    }else if (for_90_Hours_Video == "0"){
                        mainmenu();
                    }else{
                        alert("Invalid entry")
                    }
                   }

                   function Data_Gifting(){
                    let Data_Gifting = prompt(
                        "1.Gift Internet Plan\n"+
                        "2.Gift Heavy Internet Plan\n"+
                        "\n"+
                        "\n"+
                        "Previous Menu:#\n"+
                        "Main Menu:0.\n"
                    );
                    if (Data_Gifting == "1"){
                        Gift_Internet_Plan();
                    }else if (Data_Gifting == "2"){
                        Gift_Heavy_Internet_Plan();
                    }else if (Data_Gifting == "#"){
                        Buy_Data();
                    }else if (Data_Gifting == "0"){
                        mainmenu();
                    }else{
                        alert("Invalid entry")
                    }
                   }

                   function Gift_Internet_Plan(){
                    let Gift_Internet_Plan = prompt(
                        "1.Gift 50MB\n"+
                        "2.Gift 100MB\n"+
                        "3.Gift 250MB\n"+
                        "4.Gift 50MB\n"+
                        "5.Next\n"+
                        "\n"+
                        "\n"+
                        "Previous Menu:#\n"+
                        "Main Menu:0.\n"
                    );
                    if (Gift_Internet_Plan == "1"){
                        Gift_50MB();
                    }else if (Gift_Internet_Plan == "2"){
                        Gift_100MB();
                    }else if (Gift_Internet_Plan == "3"){
                        Gift_250MB();
                    }else if (Gift_Internet_Plan == "4"){
                        Gift_500MB();
                    }else if (Gift_Internet_Plan == "5"){
                        Next();
                    }else if (Gift_Internet_Plan == "#"){
                        Data_Gifting();
                    }else if (Gift_Internet_Plan == "0"){
                        mainmenu();
                    }else {
                       alert("Invalid entry")
                    }
                   }

                   function Gift_50MB(){
                    let Gift_50MB = prompt(
                        "Gift 50MB valid for a day now @50\n"+
                        "1.Enter 1*PhoneNo#\n"+
                        "\n"+
                        "\n"+
                        "Previous Menu:#\n"+
                        "Main Menu:0.\n"
                    );
                    if (Gift_50MB == "1"){
                        alert("Your request is been processed\n"+
                            "a confirmation will be sent to you via SMS\n"+
                            "thank you."
                        )
                    }else if (Gift_50MB == "#"){
                        Gift_Internet_Plan();
                    }else if (Gift_50MB == "0"){
                        mainmenu();
                    }else{
                        alert("Invalid entry")
                    }
                   }

                   function Gift_100MB(){
                    let Gift_100MB = prompt(
                        "Gift 100MB valid for a day now @#100\n"+
                        "1.Enter 1*PhoneNo#\n"+
                        "\n"+
                        "\n"+
                        "Previous Menu:#\n"+
                        "Main Menu:0.\n"
                    );
                    if (Gift_100MB == "1"){
                        alert("Your request is been processed\n"+
                            "a confirmation will be sent to you via SMS\n"+
                            "thank you."
                        )
                    }else if (Gift_100MB == "#"){
                        Gift_Internet_Plan();
                    }else if (Gift_100MB == "0"){
                        mainmenu();
                    }else{
                        alert("Invalid entry")
                    }
                   }

                   function Gift_250MB(){
                    let Gift_250MB = prompt(
                        "Gift 250MB valid for a day now\n"+
                        "@#200\n"+
                        "1.Enter 1*PhoneNo#\n"+
                        "\n"+
                        "\n"+
                        "Previous Menu:#\n"+
                        "Main Menu:0.\n"
                    );
                    if (Gift_250MB == "1"){
                        alert("Your request is been processed\n"+
                            "a confirmation will be sent to you via SMS\n"+
                            "thank you."
                        )
                    }else if (Gift_250MB == "#"){
                        Gift_Internet_Plan();
                    }else if (Gift_250MB == "0"){
                        mainmenu();
                    }else{
                        alert("Invalid entry")
                    }
                    }

                    function Gift_500MB(){
                        let Gift_500MB = prompt(
                            "Gift 500MB valid for a day now\n"+
                            "@#500\n"+
                            "1.Enter 1*PhoneNo#\n"+
                            "\n"+
                            "\n"+
                            "Previous Menu:#\n"+
                            "Main Menu:0.\n"
                        );
                        if (Gift_500MB == "1"){
                            alert("Your request is been processed\n"+
                                "a confirmation will be sent to you via SMS\n"+
                                "thank you."
                            )
                        }else if (Gift_500MB == "#"){
                            Gift_Internet_Plan();
                        }else if (Gift_500MB == "0"){
                            mainmenu();
                        }else{
                            alert("Invalid entry")
                        }
                        }

                        function Next(){
                            let Next = prompt(
                                "1.Gift 4.2GB\n"+
                                "2.Gift 6.5GB\n"+
                                "3.Gift 9.5GB\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (Next == "1"){
                                Gift_4_2GB();
                            }else if (Next == "2"){
                                 Gift_6_5GB();
                            }else if (Next == "3"){
                                Gift_9_5GB();
                            }else if (Next == "#"){
                                Data_Gifting();
                            }else if (Next == "0"){
                                mainmenu
                            }else{
                                alert("Invalid entry")
                            }
                        }

                        function Gift_4_2GB(){
                            let Gift_4_2GB = prompt(
                                "Gift 4.2GB(2GB all time + 2.2GB\n"+
                                "night) valid for a month now\n"+
                                "@#1000\n"+
                                "1.Enter 1*PhoneNo#\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (Gift_4_2GB == "1"){
                                alert("Your request is been processed\n"+
                                "a confirmation will be sent to you via SMS\n"+
                                "thank you."
                            ) 
                            }else if (Gift_4_2GB == "#"){
                                Next();
                            }else if (Gift_4_2GB == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            }
                        }

                        function Gift_6_5GB(){
                            let Gift_6_5GB = prompt(
                                "Gift 6.5GB(5GB all time + 2.2GB\n"+
                                "night) valid for a month now\n"+
                                "@#1200\n"+
                                "1.Enter 1*PhoneNo#\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (Gift_6_5GB == "1"){
                                alert("Your request is been processed\n"+
                                "a confirmation will be sent to you via SMS\n"+
                                "thank you."
                            ) 
                            }else if (Gift_6_5GB == "#"){
                                Next();
                            }else if (Gift_6_5GB == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            }
                        }

                        function Gift_9_5GB(){
                            let Gift_9_5GB = prompt(
                                "Gift 9.5GB(5.5GB all time + 4GB\n"+
                                "night) valid for a month now\n"+
                                "@#2000\n"+
                                "1.Enter 1*PhoneNo#\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (Gift_9_5GB == "1"){
                                alert("Your request is been processed\n"+
                                "a confirmation will be sent to you via SMS\n"+
                                "thank you."
                            ) 
                            }else if (Gift_9_5GB == "#"){
                                Next();
                            }else if (Gift_9_5GB == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            }
                        }

                        function Gift_Heavy_Internet_Plan(){
                            let Gift_Heavy_Internet_Plan = prompt(
                                "1.Gift 18.5GB (15GB all time + 3.5GB\n"+
                                "night)\n"+
                                "2.Gift 24GB\n"+
                                "3.Gift 35GB\n"+
                                "4.Monthly 50GB\n"+
                                "5.Monthly 80GB\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (Gift_Heavy_Internet_Plan == "1"){
                                Gift_18_5GB_15GB_all_time_3_5GB_night();
                            }else if (Gift_Heavy_Internet_Plan == "2"){
                                Gift_24GB();
                            }else if (Gift_Heavy_Internet_Plan == "3"){
                                Gift_35GB();
                            }else if (Gift_Heavy_Internet_Plan == "4"){
                                Monthly_50GB();
                            }else if (Gift_Heavy_Internet_Plan == "5"){
                                Monthly_80GB();
                            }else if (Gift_Heavy_Internet_Plan == "#"){
                                Data_Gifting();
                            }else if (Gift_Heavy_Internet_Plan == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            }
                        }

                        function Gift_18_5GB_15GB_all_time_3_5GB_night(){
                            let Gift_18_5GB_15GB_all_time_3_5GB_night = prompt(
                                "Gift 18.5GB(15GB all time + 3.5GB\n"+
                                "night) valid for a month now\n"+
                                "@#4000\n"+
                                "1.Enter 1*PhoneNo#\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (Gift_18_5GB_15GB_all_time_3_5GB_night == "1"){
                                alert("Your request is been processed\n"+
                                "a confirmation will be sent to you via SMS\n"+
                                "thank you."
                            ) 
                            }else if (Gift_18_5GB_15GB_all_time_3_5GB_night == "#"){
                                Gift_Heavy_Internet_Plan();
                            }else if (Gift_18_5GB_15GB_all_time_3_5GB_night == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            } 
                        }

                        function Gift_24GB(){
                            let Gift_24GB = prompt(
                             "Gift 24GB valid for a month now\n"+
                                "@#5000\n"+
                                "1.Enter 1*PhoneNo#\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (Gift_24GB == "1"){
                                alert("Your request is been processed\n"+
                                "a confirmation will be sent to you via SMS\n"+
                                "thank you."
                            ) 
                            }else if (Gift_24GB == "#"){
                                Gift_Heavy_Internet_Plan();
                            }else if (Gift_24GB == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            }
                           }


                           function Gift_35GB(){
                            let Gift_35GB = prompt(
                             "Gift 35GB valid for a month now\n"+
                                "@#2000\n"+
                                "1.Enter 1*PhoneNo#\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (Gift_35GB == "1"){
                                alert("Your request is been processed\n"+
                                "a confirmation will be sent to you via SMS\n"+
                                "thank you."
                            ) 
                            }else if (Gift_35GB == "#"){
                                Gift_Heavy_Internet_Plan();
                            }else if (Gift_35GB == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function Monthly_50GB(){
                            let Monthly_50GB = prompt(
                                "Gift 50GB valid for a month now\n"+
                                "@#10000\n"+
                                "1.Enter 1*PhoneNo#\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (Monthly_50GB == "1"){
                                alert("Your request is been processed\n"+
                                "a confirmation will be sent to you via SMS\n"+
                                "thank you."
                            ) 
                            }else if (Monthly_50GB == "#"){
                                Gift_Heavy_Internet_Plan();
                            }else if (Monthly_50GB == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function Monthly_80GB(){
                            let Monthly_80GB = prompt(
                                "Gift 80GB valid for a month now\n"+
                                "@#15000\n"+
                                "1.Enter 1*PhoneNo#\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (Monthly_80GB == "1"){
                                alert("Your request is been processed\n"+
                                "a confirmation will be sent to you via SMS\n"+
                                "thank you."
                            ) 
                            }else if (Monthly_80GB == "#"){
                                Gift_Heavy_Internet_Plan();
                            }else if (Monthly_80GB == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function Next(){
                            let Next = prompt(
                                "1.Data Transfer\n"+
                                "2.Data Family Plan\n"+
                                "3.Opt-OutData Plan\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (Next == "1"){
                                Data_Transfer();
                            }else if (Next == "2"){
                                Data_Family_Plan();
                            }else if (Next == "3"){
                                alert("opt")
                            }else if (Next == "#"){
                                Data();
                            }else if (Next == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function Data_Transfer(){
                           let Data_Transfer = prompt(
                           "1.Enter Pin*DataSize*RecipientNo#"
                           );
                           if (Data_Transfer.length > 11 || Data_Transfer.length < 11){
                            alert("Incorrect code")
                           }else if (isNaN(Data_Transfer )){
                            alert("Incorrect entry")
                           }else if (!isNaN(Data_Transfer) &&  Data_Transfer.length == "11" && Data_Transfer.trim().length == "11"){
                            alert("Your request is been processed\n"+
                                "a confirmation will be sent via SMS\n"+
                                "thank you."
                            )
                           }else{
                            alert("Invalid entry")
                           }
                           }

                           function Data_Family_Plan(){
                            let Data_Family_Plan = prompt(
                                "1.Activate Family Plan\n"+
                                "2.Share Data Quota\n"+
                                "3.Receivers list\n"+
                                "4.Data Balance\n"+
                                "5.Delete Receiver\n"+
                                "6.Optout of Family plan"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (Data_Family_Plan == "1"){
                                Activate_Family_Plan();
                            }else if (Data_Family_Plan == "2"){
                                Share_Data_Quota();
                            }else if (Data_Family_Plan == "3"){
                                Receivers_list();
                            }else if (Data_Family_Plan == "4"){
                                Data_Balance();
                            }else if (Data_Family_Plan == "5"){
                                Delete_Receiver();
                            }else if (Data_Family_Plan == "6"){
                                Optout_of_Family_plan();
                            }else if (Data_Family_Plan == "#"){
                                Next();
                            }else if (Data_Family_Plan == "0"){
                                mainmenu
                           }else{
                            alert("Invalid entry")
                           }
                           }

                           function Activate_Family_Plan(){
                            let Activate_Family_Plan = prompt(
                                "1.Activate now at No Cost\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (Activate_Family_Plan == "1"){
                                alert("Sorry, the operation failed. Please try\n"+ 
                                "again. Thank you for using 9mobile"
                            )
                            }else if (Activate_Family_Plan == "#"){
                                Data_Family_Plan();
                            }else if (Activate_Family_Plan == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function Share_Data_Quota(){
                           let Share_Data_Quota = prompt(
                           "1.To Share Enter\n"+
                           "1*PIN*DataQuota*PhoneNo#\n"+
                           "\n"+
                           "\n"+
                           "Previous Menu:#\n"+
                           "Main Menu:0.\n"
                           );
                           if (Share_Data_Quota == "1"){
                            alert("Sorry the operation failed.Please try\n"+
                           "again.Thank you for using 9mobile")
                           }else if (Share_Data_Quota == "#"){
                            Data_Family_Plan();
                           }else if (Share_Data_Quota == "0"){
                            mainmenu();
                           }
                           else{
                           alert("Invalid entry")
                           }
                           }

                           function Receivers_list(){
                           alert("Sorry the operation failed.Please try\n"+
                           "again.Thank you for using 9mobile")
                           }

                           function Data_Balance(){
                           alert("Sorry the operation failed.Please try\n"+
                           "again.Thank you for using 9mobile")
                           }

                           function Delete_Receiver(){
                           let Delete_Receiver = prompt(
                           "1.To delect Enter 1*pin*PhoneNo#\n"+
                           "\n"+
                           "\n"+
                           "Previous Menu:#\n"+
                           "Main Menu:0.\n"
                           );
                           if (Delete_Receiver == "1"){
                            alert("Sorry the operation failed.Please try\n"+
                           "again.Thank you for using 9mobile")
                           }else if (Delete_Receiver == "#"){
                           Data_Family_Plan();
                           }else if (Delete_Receiver == "0"){
                            mainmenu();
                           }
                           else{
                           alert("Invalid entry")
                           }
                           }

                           function Optout_of_Family_plan(){
                            alert("Sorry the operation failed.Please try\n"+
                           "again.Thank you for using 9mobile")
                           }

                           function Airtime(){
                            let Airtime = prompt(
                                "1.TopUp from bank\n"+
                                "2.Enter Recharge PIN\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (Airtime == "1"){
                                TopUp_from_bank();
                            }else if (Airtime == "2"){
                                Enter_Recharge_PIN();
                            }else if (Airtime == "#"){
                              mainmenu(); 
                            }else if (Airtime == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function TopUp_from_bank(){
                            let TopUp_from_bank = prompt(
                                "1.TopUp from your bank account\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (TopUp_from_bank == "1"){
                                TopUp_from_your_bank_account();
                            }else if (Airtime == "#"){
                                Airtime(); 
                              }else if (Airtime == "0"){
                                  mainmenu();
                              }else{
                                  alert("Invalid entry")
                              }
                           }

                           function TopUp_from_your_bank_account(){
                            let TopUp_from_your_bank_account = prompt(
                                "Welcome to 9mobile! Please choose\n"+
                                "an option\n"+
                                "1.Buy Airtime\n"+
                                "2.Buy Data\n"+
                                "3.Add Bank Account\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0.\n"
                            );
                            if (TopUp_from_your_bank_account == "1"){
                                Buy_Airtime();
                            }else if (TopUp_from_your_bank_account == "2"){
                                Buy_Data();
                            }else if (TopUp_from_your_bank_account == "3"){
                                Add_Bank_Account();
                            }else if (TopUp_from_your_bank_account == "#"){
                                TopUp_from_bank();
                            }else if (TopUp_from_your_bank_account == "0"){
                                mainmenu();
                            }else {
                                alert("Invalid entry")
                            }
                           }

                           function Buy_Airtime(){
                            let Buy_Airtime = prompt(
                                "9Mboile Airtime Topup - Topup\n"+
                                "Quicker dial *695*Amount#\n"+
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (Buy_Airtime == "1"){
                                ACCESS();
                            }else if (Buy_Airtime == "2"){
                                PROVIDUS();
                            }else if (Buy_Airtime == "3"){
                                FIDELITY();
                            }else if (Buy_Airtime == "4"){
                                FCMB();
                            }else if (Buy_Airtime == "5"){
                                HERITAGE();
                            }else if (Buy_Airtime == "6"){
                                UBA();
                            }else if (Buy_Airtime == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }
                           
                               function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }


                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }
                            function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function next(){
                            Buy_Airtime(); 
                           }


                           function Buy_Data(){
                            let Buy_Data = prompt(
                                "Buy Data quicker with *695*2#\n"+
                                "Please select plan\n"+
                                "1.1 day-50MB-#50\n"+
                                "2.1 day-200MB-#100\n"+
                                "3.1 day-300MB-#150\n"+
                                "4.1 day-650MB-#200\n"+
                                "N.Next"
                            );
                            if (Buy_Data == "1"){
                                for_1_day_50MB_50();
                            }else if (Buy_Data == "2"){
                                for_1_day_200MB_100();
                            }else if (Buy_Data == "3"){
                                for_1_day_300MB_150();
                            }else if (Buy_Data == "4"){
                                for_1_day_650MB_200();
                            }else if (Buy_Data == "N"){
                                Next();
                            }
                           }

                           function for_1_day_50MB_50(){
                            let for_1_day_50MB_50 = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (for_1_day_50MB_50 == "1"){
                                ACCESS();
                            }else if (for_1_day_50MB_50 == "2"){
                                PROVIDUS();
                            }else if (for_1_day_50MB_50 == "3"){
                                FIDELITY();
                            }else if (for_1_day_50MB_50 == "4"){
                                FCMB();
                            }else if (for_1_day_50MB_50 == "5"){
                                HERITAGE();
                            }else if (for_1_day_50MB_50 == "6"){
                                UBA();
                            }else if (for_1_day_50MB_50 == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }


                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                            function next(){
                             Buy_Data();
                            }

                           function for_1_day_200MB_100(){
                            let for_1_day_200MB_100 = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (for_1_day_200MB_100 == "1"){
                                ACCESS();
                            }else if (for_1_day_200MB_100 == "2"){
                                PROVIDUS();
                            }else if (for_1_day_200MB_100 == "3"){
                                FIDELITY();
                            }else if (for_1_day_200MB_100 == "4"){
                                FCMB();
                            }else if (for_1_day_200MB_100 == "5"){
                                HERITAGE();
                            }else if (for_1_day_200MB_100 == "6"){
                                UBA();
                            }else if (for_1_day_200MB_100 == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }


                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                            function next(){
                             Buy_Data();
                            }

                           function for_1_day_300MB_150(){
                            let for_1_day_300MB_150 = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (for_1_day_300MB_150 == "1"){
                                ACCESS();
                            }else if (for_1_day_300MB_150 == "2"){
                                PROVIDUS();
                            }else if (for_1_day_300MB_150 == "3"){
                                FIDELITY();
                            }else if (for_1_day_300MB_150 == "4"){
                                FCMB();
                            }else if (for_1_day_300MB_150 == "5"){
                                HERITAGE();
                            }else if (for_1_day_300MB_150 == "6"){
                                UBA();
                            }else if (for_1_day_300MB_150 == "N"){
                              Next();
                            }else{
                                alert("Invalid entry")
                            }
                           }


                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                            function next(){
                             Buy_Data();
                            }

                           function for_1_day_650MB_200(){
                            let for_1_day_650MB_200 = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (for_1_day_650MB_200 == "1"){
                                ACCESS();
                            }else if (for_1_day_650MB_200 == "2"){
                                PROVIDUS();
                            }else if (for_1_day_650MB_200 == "3"){
                                FIDELITY();
                            }else if (for_1_day_650MB_200 == "4"){
                                FCMB();
                            }else if (for_1_day_650MB_200 == "5"){
                                HERITAGE();
                            }else if (for_1_day_650MB_200 == "6"){
                                UBA();
                            }else if (for_1_day_650MB_200 == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }


                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                            function next(){
                             Buy_Data();
                            }


                           function Next(){
                              let Next = prompt(
                                "Buy Data quicker with *695*2#\n"+
                                "Please select plan\n"+
                                "5.1 day-1.1GB-#300\n"+
                                "6.3 days-2.1GB-#500\n"+
                                "7.7 days-7.1GB-#1500\n"+
                                "8.30 days-4.2GB-#1000\n"+
                                "N.N_ext P.Previous\n"
                            );
                            if (Next == "5"){
                                for_1_day_1_1GB_300();
                            }else if (Next == "6"){
                                 for_3_days_2_1GB_500();
                            }else if (Next == "7"){
                                 for_7_days_7_1GB_1500();
                            }else if (Next == "8"){
                                 for_30_days_4_2GB_1000();
                            }else if (Next == "N"){
                                  N_ext();
                            }
                             else if (Next == "P"){
                                  Buy_Data();
                             }
                             else{
                                 alert("Invalid entry")
                            }
                            }


                           function for_1_day_1_1GB_300(){
                            let for_1_day_1_1GB_300 = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (for_1_day_1_1GB_300 == "1"){
                                ACCESS();
                            }else if (for_1_day_1_1GB_300 == "2"){
                                PROVIDUS();
                            }else if (for_1_day_1_1GB_300 == "3"){
                                FIDELITY();
                            }else if (for_1_day_1_1GB_300 == "4"){
                                FCMB();
                            }else if (for_1_day_1_1GB_300 == "5"){
                                HERITAGE();
                            }else if (for_1_day_1_1GB_300 == "6"){
                                UBA();
                            }else if (for_1_day_1_1GB_300 == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }


                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }


                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }


                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }


                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }


                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }


                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }


                             function next(){
                              for_1_day_1_1GB_300();
                             }

                           function for_3_days_2_1GB_500(){
                            let for_3_days_2_1GB_500 = prompt(
                            "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            )
                            if (for_3_days_2_1GB_500 == "1"){
                                ACCESS();
                            }else if (for_3_days_2_1GB_500 == "2"){
                                PROVIDUS();
                            }else if (for_3_days_2_1GB_500 == "3"){
                                FIDELITY();
                            }else if (for_3_days_2_1GB_500 == "4"){
                                FCMB();
                            }else if (for_3_days_2_1GB_500 == "5"){
                                HERITAGE();
                            }else if (for_3_days_2_1GB_500 == "6"){
                                UBA();
                            }else if (for_3_days_2_1GB_500 == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                            function next(){
                             for_3_days_2_1GB_500();
                            }

                           function for_7_days_7_1GB_1500(){
                            let for_7_days_7_1GB_1500 = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (for_7_days_7_1GB_1500 == "1"){
                                ACCESS();
                            }else if (for_7_days_7_1GB_1500 == "2"){
                                PROVIDUS();
                            }else if (for_7_days_7_1GB_1500 == "3"){
                                FIDELITY();
                            }else if (for_7_days_7_1GB_1500 == "4"){
                                FCMB();
                            }else if (for_7_days_7_1GB_1500 == "5"){
                                HERITAGE();
                            }else if (for_7_days_7_1GB_1500 == "6"){
                                UBA();
                            }else if (for_7_days_7_1GB_1500 == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function next(){
                            for_7_days_7_1GB_1500();
                           }

                           function for_30_days_4_2GB_1000(){
                            let for_30_days_4_2GB_1000 = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (for_30_days_4_2GB_1000 == "1"){
                                ACCESS();
                            }else if (for_30_days_4_2GB_1000 == "2"){
                                PROVIDUS();
                            }else if (for_30_days_4_2GB_1000 == "3"){
                                FIDELITY();
                            }else if (for_30_days_4_2GB_1000 == "4"){
                                FCMB();
                            }else if (for_30_days_4_2GB_1000 == "5"){
                                HERITAGE();
                            }else if (for_30_days_4_2GB_1000 == "6"){
                                UBA();
                            }else if (for_30_days_4_2GB_1000 == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function next(){
                            for_30_days_4_2GB_1000();
                           }

                           function N_ext(){
                            let N_ext = prompt(
                                "Buy Data quicker with *695*2#\n"+
                                "Please select plan\n"+
                                "9.30 days - 6.5GB #1200\n"+
                                "10.30 days - 9.5GB #2000\n"+
                                "11.30 days - 11GB #2500\n"+
                                "12.30 days - 12GB #3000\n"+
                                "N.Ne-xt P:Previous\n"
                            );
                            if (N_ext == "9"){
                                for_30_days_6_5GB_1200();
                            }else if (N_ext == "10"){
                                for_30_days_9_5GB_2000();
                            }else if (N_ext == "11"){
                                for_30_days_11GB_2500();
                            }else if (N_ext == "12"){
                                for_30_days_12GB_3000
                            }else if (N_ext == "N"){
                                Ne_xt();
                            }else if (N_ext == "P"){
                                N-ext();
                            }
                           }

                           function for_30_days_6_5GB_1200(){
                            let for_30_days_6_5GB_1200 = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (for_30_days_6_5GB_1200 == "1"){
                                ACCESS();
                            }else if (for_30_days_6_5GB_1200 == "2"){
                                PROVIDUS();
                            }else if (for_30_days_6_5GB_1200 == "3"){
                                FIDELITY();
                            }else if (for_30_days_6_5GB_1200 == "4"){
                                FCMB();
                            }else if (for_30_days_6_5GB_1200 == "5"){
                                HERITAGE();
                            }else if (for_30_days_6_5GB_1200 == "6"){
                                UBA();
                            }else if (for_30_days_6_5GB_1200 == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function next(){
                            for_30_days_6_5GB_1200();
                           }

                           function for_30_days_9_5GB_2000(){
                            let for_30_days_9_5GB_2000 = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (for_30_days_9_5GB_2000 == "1"){
                                ACCESS();
                            }else if (for_30_days_9_5GB_2000 == "2"){
                                PROVIDUS();
                            }else if (for_30_days_9_5GB_2000 == "3"){
                                FIDELITY();
                            }else if (for_30_days_9_5GB_2000 == "4"){
                                FCMB();
                            }else if (for_30_days_9_5GB_2000 == "5"){
                                HERITAGE();
                            }else if (for_30_days_9_5GB_2000 == "6"){
                                UBA();
                            }else if (for_30_days_9_5GB_2000 == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function next(){
                            for_30_days_9_5GB_2000();
                           }

                           function for_30_days_11GB_2500(){
                            let for_30_days_11GB_2500 = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (for_30_days_11GB_2500 == "1"){
                                ACCESS();
                            }else if (for_30_days_11GB_2500 == "2"){
                                PROVIDUS();
                            }else if (for_30_days_11GB_2500 == "3"){
                                FIDELITY();
                            }else if (for_30_days_11GB_2500 == "4"){
                                FCMB();
                            }else if (for_30_days_11GB_2500 == "5"){
                                HERITAGE();
                            }else if (for_30_days_11GB_2500 == "6"){
                                UBA();
                            }else if (for_30_days_11GB_2500 == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function next(){
                            for_30_days_11GB_2500();
                           }


                           function for_30_days_12GB_3000(){
                            let for_30_days_12GB_3000 = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (for_30_days_12GB_3000 == "1"){
                                ACCESS();
                            }else if (for_30_days_12GB_3000 == "2"){
                                PROVIDUS();
                            }else if (for_30_days_12GB_3000 == "3"){
                                FIDELITY();
                            }else if (for_30_days_12GB_3000 == "4"){
                                FCMB();
                            }else if (for_30_days_12GB_3000 == "5"){
                                HERITAGE();
                            }else if (for_30_days_12GB_3000 == "6"){
                                UBA();
                            }else if (for_30_days_12GB_3000 == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function next(){
                            for_30_days_12GB_3000();
                           }

                           function Ne_xt(){
                            let Ne_xt = prompt(
                                "Buy Data quicker with *695*2#\n"+
                                "Please select plan\n"+
                                "13. 30 days - 18.5GB - #4000\n"+
                                "14. 30 days - 24GB - #5000\n"+
                                "15. 30 days - 35GB - #7000\n"+
                                "16. 30 days - 50GB - #10000\n"+
                                "P. Previous\n"
                            );
                            if (Ne_xt == "13"){
                                for_30_days_18_5GB_4000();
                            }else if (Ne_xt == "14"){
                                for_30_days_24GB_5000();
                            }else if (Ne_xt == "14"){
                                for_30_days_35GB_7000();
                            }else if (Ne_xt == "14"){
                                for_30_days_50GB_10000();
                            }else if (Ne_xt == "P"){
                                N_ext();
                            }
                           }

                           function for_30_days_18_5GB_4000(){
                            let for_30_days_18_5GB_4000 = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (for_30_days_18_5GB_4000 == "1"){
                                ACCESS();
                            }else if (for_30_days_18_5GB_4000 == "2"){
                                PROVIDUS();
                            }else if (for_30_days_18_5GB_4000 == "3"){
                                FIDELITY();
                            }else if (for_30_days_18_5GB_4000 == "4"){
                                FCMB();
                            }else if (for_30_days_18_5GB_4000 == "5"){
                                HERITAGE();
                            }else if (for_30_days_18_5GB_4000 == "6"){
                                UBA();
                            }else if (for_30_days_18_5GB_4000 == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function next(){
                            for_30_days_18_5GB_4000();
                           }

                           function for_30_days_24GB_5000(){
                            let for_30_days_24GB_5000 = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (for_30_days_24GB_5000 == "1"){
                                ACCESS();
                            }else if (for_30_days_24GB_5000 == "2"){
                                PROVIDUS();
                            }else if (for_30_days_24GB_5000 == "3"){
                                FIDELITY();
                            }else if (for_30_days_24GB_5000 == "4"){
                                FCMB();
                            }else if (for_30_days_24GB_5000 == "5"){
                                HERITAGE();
                            }else if (for_30_days_24GB_5000 == "6"){
                                UBA();
                            }else if (for_30_days_24GB_5000 == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function next(){
                            for_30_days_24GB_5000();
                           }

                           function for_30_days_35GB_7000(){
                            let for_30_days_35GB_7000 = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (for_30_days_35GB_7000 == "1"){
                                ACCESS();
                            }else if (for_30_days_35GB_7000 == "2"){
                                PROVIDUS();
                            }else if (for_30_days_35GB_7000 == "3"){
                                FIDELITY();
                            }else if (for_30_days_35GB_7000 == "4"){
                                FCMB();
                            }else if (for_30_days_35GB_7000 == "5"){
                                HERITAGE();
                            }else if (for_30_days_35GB_7000 == "6"){
                                UBA();
                            }else if (for_30_days_35GB_7000 == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function next(){
                            for_30_days_35GB_7000();
                           }

                           function for_30_days_50GB_10000(){
                            let for_30_days_50GB_10000 = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"
                            );
                            if (for_30_days_50GB_10000 == "1"){
                                ACCESS();
                            }else if (for_30_days_50GB_10000 == "2"){
                                PROVIDUS();
                            }else if (for_30_days_50GB_10000 == "3"){
                                FIDELITY();
                            }else if (for_30_days_50GB_10000 == "4"){
                                FCMB();
                            }else if (for_30_days_50GB_10000 == "5"){
                                HERITAGE();
                            }else if (for_30_days_50GB_10000 == "6"){
                                UBA();
                            }else if (for_30_days_50GB_10000 == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function next(){
                            for_30_days_50GB_10000();
                           }

                           function Add_Bank_Account(){
                            let Add_Bank_Account = prompt(
                                "Please select your Bank\n"+
                                "1.ACCESS\n"+
                                "2.PROVIDUS\n"+
                                "3.FIDELITY\n"+
                                "4.FCMB\n"+
                                "5.HERITAGE\n"+
                                "6.UBA\n"+
                                "n.next\n"   
                            );
                            if (Add_Bank_Account == "1"){
                                ACCESS();
                            }else if (Add_Bank_Account == "2"){
                                PROVIDUS();
                            }else if (Add_Bank_Account == "3"){
                                FIDELITY();
                            }else if (Add_Bank_Account == "4"){
                                FCMB();
                            }else if (Add_Bank_Account == "5"){
                                HERITAGE();
                            }else if (Add_Bank_Account == "6"){
                                UBA();
                            }else if (Add_Bank_Account == "n"){
                              next();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function ACCESS(){
                            let ACCESS = prompt(
                                "Please provide your account number"
                            )
                            if (ACCESS.length > "10" || ACCESS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(ACCESS)){
                                alert("Check your entry")
                            }else if (!isNaN(ACCESS) && ACCESS.length == "10" && ACCESS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function PROVIDUS(){
                            let  PROVIDUS= prompt(
                                "Please provide your account number"
                            )
                            if (PROVIDUS.length > "10" || PROVIDUS.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(PROVIDUS)){
                                alert("Check your entry")
                            }else if (!isNaN(PROVIDUS) && PROVIDUS.length == "10" && PROVIDUS.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FIDELITY(){
                            let FIDELITY = prompt(
                                "Please provide your account number"
                            )
                            if (FIDELITY.length > "10" || FIDELITY.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FIDELITY)){
                                alert("Check your entry")
                            }else if (!isNaN(FIDELITY) && FIDELITY.length == "10" && FIDELITY.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function FCMB(){
                            let FCMB = prompt(
                                "Please provide your account number"
                            )
                            if (FCMB.length > "10" || FCMB.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(FCMB)){
                                alert("Check your entry")
                            }else if (!isNaN(FCMB) && FCMB.length == "10" && FCMB.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function HERITAGE(){
                            let HERITAGE = prompt(
                                "Please provide your account number"
                            )
                            if (HERITAGE.length > "10" || HERITAGE.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(HERITAGE)){
                                alert("Check your entry")
                            }else if (!isNaN(HERITAGE) && HERITAGE.length == "10" && HERITAGE.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function UBA(){
                            let UBA = prompt(
                                "Please provide your account number"
                            )
                            if (UBA.length > "10" || UBA.length < "10"){
                                alert("Incorrect code")
                            }else if (isNaN(UBA)){
                                alert("Check your entry")
                            }else if (!isNaN(UBA) && UBA.length == "10" && UBA.trim().length == "10"){
                                alert("Your request is been processed\n"+
                                    "a confirmation will be sent via SMS\n"+
                                    "thank you for using 9mobile"
                                )
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function next(){
                            Add_Bank_Account();
                           }

                           function Enter_Recharge_PIN(){
                            let Enter_Recharge_PIN = prompt(
                                "1.To Recharge:Enter\n"+
                                "1*RechargeCardPin#\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0\n"
                            );
                            if (Enter_Recharge_PIN == "1"){
                                alert("Sorry, the operation failed. Please try\n"+
                                    "again. Thank you for using 9mobile"
                                )
                            }else if (Enter_Recharge_PIN == "#"){
                                Airtime();
                            }else if (Enter_Recharge_PIN == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            }
                           }


                           function Account_Bal(){
                               let Account_Bal = prompt(
                                "1.Back\n"+
                                "2.Check Airtime Balance\n"+
                                "3.Check Data Balance\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0\n"
                            );
                            if (Account_Bal == "1"){
                                Back();
                            }else if(Account_Bal == "2"){
                                Check_Airtime_Balance();
                            }else if (Account_Bal == "3"){
                                Check_Data_Balance();
                            }else if (Account_Bal == "#"){
                              mainmenu();
                            }else if (Account_Bal == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function Back(){
                            mainmenu();
                           }

                           function Check_Airtime_Balance(){
                            alert("Sorry, the operation failed. Please try\n"+
                                    "again. Thank you for using 9mobile"
                                )
                           }

                           function Check_Data_Balance(){
                            alert("Sorry, the operation failed. Please try\n"+
                                    "again. Thank you for using 9mobile"
                                )
                           }

                           function Transfer_Serv(){
                            let Transfer_Serv = prompt(
                                "1.Airtime Transfer\n"+
                                "2.Data Transfer\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0\n"
                            );
                            if (Transfer_Serv == "1"){
                                Airtime_Transfer();
                            }else if (Transfer_Serv == "2"){
                                alert("Dta")
                            }else if (Transfer_Serv == "#"){
                                mainmenu();
                            }else if (Transfer_Serv == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function Airtime_Transfer(){
                            let Airtime_Transfer = prompt(
                                "Service fee is #10.24. VAT inclusive\n"+
                                "1.Press 1 to continue\n"+
                                "\n"+
                                "\n"+
                                "Previous Menu:#\n"+
                                "Main Menu:0\n"
                            );
                            if (Airtime_Transfer == "1"){
                                Press_1_to_continue();
                            }else if (Transfer_Serv == "#"){
                                Transfer_Serv();
                            }else if (Transfer_Serv == "0"){
                                mainmenu();
                            }else{
                                alert("Invalid entry")
                            }
                           }

                           function Press_1_to_continue(){
                            let Press_1_to_continue = prompt(
                                "Enter\n"+
                                "PIN*AirtimeAmount*RecipientNo#"
                            )
                            if (Press_1_to_continue.length == "11" && isNaN(Press_1_to_continue) && (Press_1_to_continue.startsWith("070") || Press_1_to_continue.startsWith("080") || Press_1_to_continue.startsWith("081") || Press_1_to_continue.startsWith("090"))){
                                        alert(Press_1_to_continue);
                                     }else{
                                         alert(Press_1_to_continue + "is invalid");
                                         Press_1_to_continue();
                                      }
                                    }

                                    function MoreCredit(){
                                        let MoreCredit = prompt(
                                            "1.MoreCredit\n"+
                                            "2.Borrow+Save\n"+
                                            "\n"+
                                            "\n"+
                                            "Previous Menu:#\n"+
                                            "Main Menu:0\n"
                                        );
                                        if (MoreCredit == "1"){
                                            More_Credit();
                                        }else if (MoreCredit == "2"){
                                            Borrow_Save();
                                        }else if (MoreCredit == "#"){
                                            mainmenu();
                                        }else if (MoreCredit == "0"){
                                            mainmenu();
                                        }else{
                                            alert("Invalid entry")
                                        }
                                    }

                                    function More_Credit(){
                                        let More_Credit = prompt(
                                            "1.Borrow Airtime\n"+
                                            "2.Borrow Data\n"+
                                            "\n"+
                                            "\n"+
                                            "Back:0\n"
                                        );
                                        if (More_Credit == "1"){
                                            Borrow_Airtime();
                                        }else if (More_Credit == "2"){
                                            Borrow_Data();
                                        }else if (More_Credit == "0"){
                                            MoreCredit();
                                        }else{
                                            alert("Invalid entry")
                                        }
                                    }

                                    function Borrow_Airtime(){
                                        let Borrow_Airtime = prompt(
                                            "1.Choose Loan Amount\n"+
                                            "2.Check Eligibility\n"+
                                            "3.Check Debit Status\n"+
                                            "4.Enable Loan\n"+
                                            "5.Disable Loan\n"+
                                            "\n"+
                                            "\n"+
                                            "Back:0\n"
                                        );
                                        if (Borrow_Airtime == "1"){
                                            Check_Loan_Amount();
                                        }else if (Borrow_Airtime == "2"){
                                            Check_Eligibility();
                                        }else if (Borrow_Airtime == "3"){
                                            Check_Debit_Status();
                                        }else if (Borrow_Airtime == "4"){
                                            Enable_Loan();
                                        }else if (Borrow_Airtime == "5"){
                                            Disable_Loan();
                                        }else if (Borrow_Airtime == "0"){
                                            More_Credit();
                                        }else{
                                            alert("Invalid entry")
                                        }
                                    }

                                    function Check_Loan_Amount(){
                                        let Check_Loan_Amount = prompt(
                                            "1.Get #50\n"+
                                            "2.Get #100\n"+
                                            "3.Get #200\n"+
                                            "4.Get #500\n"+
                                            "5.Get #1000\n"+
                                            "6.Get #2000\n"+
                                            "\n"+
                                            "\n"+
                                            "Back:0\n"
                                        );
                                        if (Check_Loan_Amount == "1"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Check_Loan_Amount == "2"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Check_Loan_Amount == "3"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Check_Loan_Amount == "4"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Check_Loan_Amount == "5"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Check_Loan_Amount == "6"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                    }else if (Check_Loan_Amount == "0"){
                                        Borrow_Airtime();
                                    }
                                    }

                                    function Check_Eligibility(){
                                        alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                    }

                                    function Check_Debit_Status(){
                                        alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                    }

                                    function Enable_Loan(){
                                        let Enable_Loan = prompt(
                                            "1.1 to Confirm\n"+
                                            "2.0 to go back\n"+
                                            "\n"+
                                            "\n"+
                                            "Back:0\n"
                                        );
                                        if (Enable_Loan == "1"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Enable_Loan == "2"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Enable_Loan == "0"){
                                            Borrow_Airtime();
                                        }else{
                                            alert("Invalid entry")
                                        }
                                    }

                                    function Disable_Loan(){
                                        let Disable_Loan = prompt(
                                            "1.1 to Confirm\n"+
                                            "2.0 to go back\n"+
                                            "\n"+
                                            "\n"+
                                            "Back:0\n"
                                        );
                                        if (Disable_Loan == "1"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Disable_Loan == "2"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Disable_Loan == "0"){
                                            Borrow_Airtime();
                                        }else{
                                            alert("Invalid entry")
                                        } 
                                    }

                                    function Borrow_Data(){
                                        let Borrow_Data = prompt(
                                            "1.Choose Loan Amount\n"+
                                            "2.Check Eligibility\n"+
                                            "3.Check Debit Status\n"+
                                            "4.Enable Loan\n"+
                                            "5.Disable Loan\n"+
                                            "\n"+
                                            "\n"+
                                            "Back:0\n"
                                        );
                                        if (Borrow_Data == "1"){
                                            Check_Loan_Amount();
                                        }else if (Borrow_Data == "2"){
                                            Check_Eligibility();
                                        }else if (Borrow_Data == "3"){
                                            Check_Debit_Status();
                                        }else if (Borrow_Data == "4"){
                                            Enable_Loan();
                                        }else if (Borrow_Data == "5"){
                                            Disable_Loan();
                                        }else if (Borrow_Data == "0"){
                                            More_Credit();
                                        }else{
                                            alert("Invalid entry")
                                        }
                                    }

                                    function Check_Loan_Amount(){
                                        let Check_Loan_Amount = prompt(
                                            "1.Get #50\n"+
                                            "2.Get #100\n"+
                                            "3.Get #200\n"+
                                            "4.Get #500\n"+
                                            "5.Get #1000\n"+
                                            "6.Get #2000\n"+
                                            "\n"+
                                            "\n"+
                                            "Back:0\n"
                                        );
                                        if (Check_Loan_Amount == "1"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Check_Loan_Amount == "2"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Check_Loan_Amount == "3"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Check_Loan_Amount == "4"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Check_Loan_Amount == "5"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Check_Loan_Amount == "6"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                    }else if (Check_Loan_Amount == "0"){
                                        Borrow_Data();
                                    }
                                    }

                                    function Check_Eligibility(){
                                        alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                    }

                                    function Check_Debit_Status(){
                                        alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                    }

                                    function Enable_Loan(){
                                        let Enable_Loan = prompt(
                                            "1.1 to Confirm\n"+
                                            "2.0 to go back\n"+
                                            "\n"+
                                            "\n"+
                                            "Back:0\n"
                                        );
                                        if (Enable_Loan == "1"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Enable_Loan == "2"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Enable_Loan == "0"){
                                            Borrow_Data();
                                        }else{
                                            alert("Invalid entry")
                                        }
                                    }

                                    function Disable_Loan(){
                                        let Disable_Loan = prompt(
                                            "1.1 to Confirm\n"+
                                            "2.0 to go back\n"+
                                            "\n"+
                                            "\n"+
                                            "Back:0\n"
                                        );
                                        if (Disable_Loan == "1"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Disable_Loan == "2"){
                                            alert("Your request is being processed\n"+
                                                "Please wait for a confirmation SMS\n"+
                                                "thank you."
                                            )
                                        }else if (Disable_Loan == "0"){
                                            Borrow_Data();
                                        }else{
                                            alert("Invalid entry")
                                        } 
                                    }

                                    function Borrow_Save(){
                                        let Borrow_Save = prompt(
                                            "1.Loan + Save\n"+
                                            "2.Help\n"+
                                            "\n"+
                                            "\n"+
                                            "Previous Menu:#\n"+
                                            "Main Menu:0\n"
                                        );
                                        if (Borrow_Save == "1"){
                                            alert("We currently do not have a loan offer\n"+
                                                "for you,please try again in 30 days.\n"+
                                                "Thank you"
                                            )
                                        }else if (Borrow_Save == "2"){
                                            alert("Sorry, the operation failed. Please try\n"+
                                            "again. Thank you for using 9mobile."
                                            )
                                        }else if (Borrow_Save == "#"){
                                            MoreCredit();
                                        }else if (Borrow_Save == "0"){
                                            mainmenu();
                                        }
                                    }

                                    function VAS(){
                                        let VAS = prompt(
                                            "1.Stop VAS\n"+
                                            "2.DND\n"+
                                            "3.RBT\n"+
                                            "4.Cash Token (Win Up to\n"+
                                            "100million)\n"+
                                            "\n"+
                                            "\n"+
                                            "Previous Menu:#\n"+
                                            "Main Menu:0\n"
                                        );
                                        if (VAS == "1"){
                                            Stop_VAS();
                                        }else if (VAS == "2"){
                                            alert("Connection problem or invalid MMI\n"+
                                                "code"
                                            )
                                        }else if (VAS == "3"){
                                            RBT();
                                        }else if (VAS == "4"){
                                            alert("cash")
                                        }else if (VAS == "#"){
                                            mainmenu();
                                        }else if (VAS == "0"){
                                            mainmenu()
                                        }else{
                                            alert("Invalid entry")
                                        }
                                    }

                                    function Stop_VAS(){
                                        let Stop_VAS = prompt(
                                            "\n"+
                                            "\n"+
                                            "\n"+
                                            "Previous Menu:#\n"+
                                            "Main Menu:0 . Next:99\n"
                                        );
                                        if (Stop_VAS == "#"){
                                            VAS();
                                        }else if (Stop_VAS == "0"){
                                            mainmenu();
                                        }else if (Stop_VAS == "99"){
                                            alert("MMI complete.\n"+
                                                "______\n"+
                                                "Connection problem or invalid MMI\n"+
                                                "code."
                                            )
                                        }
                                    }

                                    function RBT(){
                                        let RBT = prompt(
                                            "Welcome\n"+
                                            "1:Subscribe RBT Service\n"+
                                            "2:Subscribe Tune\n"+
                                            "3:Gift Tune\n"+
                                            "4:My Tunes\n"+
                                            "5:Unsubscribe\n"
                                        );
                                        if (RBT == "1"){
                                            Subscribe_RBT_Service();
                                        }else if (RBT == "2"){
                                            Subscribe_Tunes();
                                        }else if (RBT == "3"){
                                            Gift_Tunes();
                                        }else if (RBT == "4"){
                                            alert("my")
                                        }else if (RBT == "5"){
                                            alert("un")
                                    }else{
                                        alert("Invalid entry")
                                    }
                                   }

                                   function Subscribe_RBT_Service(){
                                    let Subscribe_RBT_Service = prompt(
                                        "Subscribe now @ #20.48\n"+
                                        "1.Confirm\n"+
                                        "Privious Menu-#\n"
                                    );
                                    if (Subscribe_RBT_Service == "1"){
                                        alert("Provision operation failed due to\n"+
                                            "internal error."
                                        )
                                    }else if (Subscribe_RBT_Service == "#"){
                                        RBT();
                                    }else if (Subscribe_RBT_Service == "#"){
                                        RBT();
                                    }
                                   }

                                   function Subscribe_Tunes(){
                                    let Subscribe_Tunes = prompt(
                                        "Subscribe Tunes\n"+
                                        "1:Hot Tunes\n"+
                                        "2:New Tunes\n"+
                                        "3:Search Tunes\n"+
                                        "4:RBT Genres\n"+
                                        "#:Back\n"+
                                        "0:Menu\n"
                                    );
                                    if (Subscribe_Tunes == "1"){
                                        Hot_Tunes();
                                    }else if (Subscribe_Tunes == "2"){
                                        New_Tunes();
                                    }else if (Subscribe_Tunes == "3"){
                                        Search_Tunes();
                                    }else if (Subscribe_Tunes == "4"){
                                        RBT_Genres();
                                    }else if (Subscribe_Tunes == "#"){
                                        RBT();
                                    }else if (Subscribe_Tunes == ""){
                                        mainmenu();
                                    }
                                   }

                                   function Hot_Tunes(){
                                    let Hot_Tunes = prompt(
                                            "Hot Tunes\n"+
                                            "1:WEEKLY\n"+
                                            "2:MONTHLY\n"+
                                            "#:Back\n"+
                                            "0:Menu\n"
                                        );
                                        if (Hot_Tunes == "1"){
                                            WEEKLY();
                                        }else if (Hot_Tunes == "2"){
                                            MONTHLY();
                                        }else if (Hot_Tunes == "#"){
                                            Subscribe_Tunes();
                                        }else if (Hot_Tunes == "0"){
                                            mainmenu();
                                        }else{
                                            alert("Invalid entry")
                                        }  
                                   }

                                   function WEEKLY(){
                                    let WEEKLY = prompt(
                                    "Select a preferred option\n"+
                                    "\n"+
                                    "\n"+
                                    "#:Back\n"+
                                    "0:Menu\n"
                                    );
                                    if (WEEKLY == "#"){
                                        Hot_Tunes();
                                    }else if (WEEKLY == "0"){
                                        mainmenu();
                                    }else{
                                        alert("Invalid entry")
                                    }
                                   }

                                   function MONTHLY(){
                                    let MONTHLY = prompt(
                                        "Select a preferred option\n"+
                                        "1:Dont let me go\n"+
                                        "2:Nigeria\n"+
                                        "3:Chukwubuike\n"+
                                        "4:AMAZING GRACE\n"+
                                        "5:No place like home\n"+
                                        "#:Back\n"+
                                        "0:Menu\n"
                                    );
                                    if (MONTHLY == "1"){
                                        Dont_let_me_go();
                                    }else if (MONTHLY == "2"){
                                        Nigeria();
                                    }else if (MONTHLY == "3"){
                                        Chukwubuike();
                                    }else if (MONTHLY == "4"){
                                        AMAZING_GRACE();
                                    }else if (MONTHLY == "5"){
                                        No_place_like_home();
                                    }else if (MONTHLY == "#"){
                                        Hot_Tunes();
                                    }else if (MONTHLY == "0"){
                                        mainmenu();
                                    }
                                   }

                                   function Dont_let_me_go(){
                                    let Dont_let_me_go = prompt(
                                        "You are about to select Dont let me\n"+
                                        "go by Floss_16354 @51.2 for 30\n"+
                                        "days\n"+
                                        "1: Confirm\n"+
                                        "Previous Menu:0\n"
                                    );
                                    if (Dont_let_me_go == "1"){
                                        alert("Subscriber not found\n")
                                    }else if (Dont_let_me_go == "#"){
                                        MONTHLY();
                                    }else if (Dont_let_me_go == "0"){
                                       Subscribe_Tunes(); 
                                    }
                                   }

                                   function Nigeria(){
                                    let Nigeria = prompt(
                                        "You are about to select Nigeria\n"+
                                        "go by Floss_16354 @51.2 for 30\n"+
                                        "days\n"+
                                        "1: Confirm\n"+
                                        "Previous Menu:0\n"
                                    );
                                    if (Nigeria == "1"){
                                        alert("Subscriber not found\n")
                                    }else if (Nigeria == "#"){
                                        MONTHLY();
                                    }else if (Nigeria == "0"){
                                       Subscribe_Tunes(); 
                                    }
                                   }

                                   function Chukwubuike(){
                                    let Chukwubuike = prompt(
                                        "You are about to select Chukwubuike\n"+
                                        "go by Floss_16354 @51.2 for 30\n"+
                                        "days\n"+
                                        "1: Confirm\n"+
                                        "Previous Menu:0\n"
                                    );
                                    if (Chukwubuike == "1"){
                                        alert("Subscriber not found\n")
                                    }else if (Chukwubuike == "#"){
                                        MONTHLY();
                                    }else if (Chukwubuike == "0"){
                                       Subscribe_Tunes(); 
                                    }
                                   }

                                   function AMAZING_GRACE(){
                                    let AMAZING_GRACE = prompt(
                                        "You are about to select AMAZING GRACE\n"+
                                        "go by Floss_16354 @51.2 for 30\n"+
                                        "days\n"+
                                        "1: Confirm\n"+
                                        "Previous Menu:0\n"
                                    );
                                    if (AMAZING_GRACE == "1"){
                                        alert("Subscriber not found\n")
                                    }else if (AMAZING_GRACE == "#"){
                                        MONTHLY();
                                    }else if (AMAZING_GRACE == "0"){
                                       Subscribe_Tunes(); 
                                    }
                                   }

                                   function No_place_like_home(){
                                    let No_place_like_home = prompt(
                                        "You are about to select No_place_like_home\n"+
                                        "go by Floss_16354 @51.2 for 30\n"+
                                        "days\n"+
                                        "1: Confirm\n"+
                                        "Previous Menu:0\n"
                                    );
                                    if (No_place_like_home == "1"){
                                        alert("Subscriber not found\n")
                                    }else if (No_place_like_home == "#"){
                                        MONTHLY();
                                    }else if (No_place_like_home == "0"){
                                       Subscribe_Tunes(); 
                                    }
                                   }


                                   function New_Tunes(){
                                    let New_Tunes = prompt(
                                        "New Tunes\n"+
                                        "1:WEEKLY\n"+
                                        "2:MONTHLY\n"+
                                        "#:Back\n"+
                                        "0:Menu\n"
                                    );
                                    if (New_Tunes == "1"){
                                        WEE_KLY();
                                    }else if (New_Tunes == "2"){
                                        MONTH_LY();
                                    }else if (New_Tunes == "#"){
                                        Subscribe_Tunes();
                                    }else if (New_Tunes == "0"){
                                        mainmenu();
                                    }else{
                                        alert("Invalid entry")
                                    }
                                   }

                                   function WEE_KLY(){
                                    let WEE_KLY = prompt(
                                    "Select a preferred option\n"+
                                    "\n"+
                                    "\n"+
                                    "#:Back\n"+
                                    "0:Menu\n"
                                    );
                                    if (WEE_KLY == "#"){
                                        New_Tunes();
                                    }else if (WEE_KLY == "0"){
                                        mainmenu();
                                    }else{
                                        alert("Invalid entry")
                                    }
                                   }

                                   function MONTH_LY(){
                                    let MONTH_LY = prompt(
                                        "Select a preferred option\n"+
                                        "1:NATIONAL ANTHEM TUNGBA_2\n"+
                                        "2:VUVUZELA_1\n"+
                                        "3:Uwa Mgbede\n"+
                                        "4:Zungusha (feat. YKEE BENDA\n"+
                                        "5:Ghen Ghen\n"+
                                        "#:Back\n"+
                                        "0:Menu\n"
                                    );
                                    if (MONTH_LY == "1"){
                                        NATIONAL_ANTHEM_TUNGBA_2();
                                    }else if (MONTH_LY == "2"){
                                        VUVUZELA_1();
                                    }else if (MONTH_LY == "3"){
                                        Uwa_Mgbede();
                                    }else if (MONTH_LY == "4"){
                                        Zungusha_feat_YKEE_BENDA();
                                    }else if (MONTH_LY == "5"){
                                        Ghen_Ghen();
                                    }else if (MONTH_LY == "#"){
                                        New_Tunes();
                                    }else if (MONTH_LY == "0"){
                                        mainmenu();
                                    }
                                   }

                                   function NATIONAL_ANTHEM_TUNGBA_2(){
                                    let NATIONAL_ANTHEM_TUNGBA_2 = prompt(
                                        "You are about to select NATIONAL ANTHEM TUNGBA\n"+
                                        "go by Floss_16354 @51.2 for 30\n"+
                                        "days\n"+
                                        "1: Confirm\n"+
                                        "Previous Menu:0\n"
                                    );
                                    if (NATIONAL_ANTHEM_TUNGBA_2 == "1"){
                                        alert("Subscriber not found\n")
                                    }else if (NATIONAL_ANTHEM_TUNGBA_2 == "#"){
                                        MONTH_LY();
                                    }else if (NATIONAL_ANTHEM_TUNGBA_2 == "0"){
                                       Subscribe_Tunes(); 
                                    }
                                   }

                                   function VUVUZELA_1(){
                                    let VUVUZELA_1 = prompt(
                                        "You are about to select VUVUZELA_1\n"+
                                        "go by Floss_16354 @51.2 for 30\n"+
                                        "days\n"+
                                        "1: Confirm\n"+
                                        "Previous Menu:0\n"
                                    );
                                    if (VUVUZELA_1 == "1"){
                                        alert("Subscriber not found\n")
                                    }else if (VUVUZELA_1 == "#"){
                                        MONTH_LY();
                                    }else if (VUVUZELA_1 == "0"){
                                       Subscribe_Tunes(); 
                                    }
                                   }

                                   function Uwa_Mgbede(){
                                    let Uwa_Mgbede = prompt(
                                        "You are about to select Uwa Mgbede\n"+
                                        "go by Floss_16354 @51.2 for 30\n"+
                                        "days\n"+
                                        "1: Confirm\n"+
                                        "Previous Menu:0\n"
                                    );
                                    if (Uwa_Mgbede == "1"){
                                        alert("Subscriber not found\n")
                                    }else if (Uwa_Mgbede == "#"){
                                        MONTH_LY();
                                    }else if (Uwa_Mgbede == "0"){
                                       Subscribe_Tunes(); 
                                    }
                                   }

                                   function Zungusha_feat_YKEE_BENDA(){
                                    let Zungusha_feat_YKEE_BENDA = prompt(
                                        "You are about to select Zungusha feat YKEE BENDA\n"+
                                        "go by Floss_16354 @51.2 for 30\n"+
                                        "days\n"+
                                        "1: Confirm\n"+
                                        "Previous Menu:0\n"
                                    );
                                    if (Zungusha_feat_YKEE_BENDA == "1"){
                                        alert("Subscriber not found\n")
                                    }else if (Zungusha_feat_YKEE_BENDA == "#"){
                                        MONTH_LY();
                                    }else if (Zungusha_feat_YKEE_BENDA == "0"){
                                       Subscribe_Tunes(); 
                                    }
                                   }

                                   function Ghen_Ghen(){
                                    let Ghen_Ghen = prompt(
                                        "You are about to select Ghen Ghen\n"+
                                        "go by Floss_16354 @51.2 for 30\n"+
                                        "days\n"+
                                        "1: Confirm\n"+
                                        "Previous Menu:0\n"
                                    );
                                    if (Ghen_Ghen == "1"){
                                        alert("Subscriber not found\n")
                                    }else if (Ghen_Ghen == "#"){
                                        MONTH_LY();
                                    }else if (Ghen_Ghen == "0"){
                                       Subscribe_Tunes(); 
                                    }
                                   }

                                function Search_Tunes(){
                                    let Search_Tunes = prompt(
                                        "Search Tunes\n"+
                                        "1:Search by artist name\n"+
                                        "2:Search by CRBT code\n"+
                                        "3:Search by song title\n"+
                                        "#:Back\n"+
                                        "0:Menu\n"
                                    );
                                    if (Search_Tunes == "1"){
                                        Search_by_artist_name();
                                    }else if (Search_Tunes == "2"){
                                        Search_by_CRBT_code();
                                    }else if (Search_Tunes == "3"){
                                        Search_by_song_title();
                                    }else if (Search_Tunes == "#"){
                                      RBT();
                                    }else if (Search_Tunes == "2"){
                                        mainmenu();
                                    }
                                }
                            
                            
                                function Search_by_artist_name(){
                                    let Search_by_artist_name = prompt(
                                        ".Search by artist name"
                                    )
                                    alert("Not found or match")
                                }

                                function Search_by_CRBT_code(){
                                    let Search_by_CRBT_code = prompt(
                                        ".Search by CRBT code"
                                    )
                                    alert("Not found or match")
                                } 
                                

                                function Search_by_song_title(){
                                    let Search_by_song_title = prompt(
                                        ".Search by song title"
                                    )
                                    alert("Not found or match")
                                } 
                                
                                function RBT_Genres(){
                                    let RBT_Genres = prompt(
                                        "RBT Genres\n"+
                                        "1:New Tunes\n"+
                                        "#:Back\n"+
                                        "0:Menu\n"
                                    );
                                    if (RBT_Genres == "1"){
                                        New_Tunes();
                                    }else if (RBT_Genres == "#"){
                                        Subscribe_Tunes();
                                    }else if (RBT_Genres == "0"){
                                        mainmenu();
                                    }else{
                                        alert("Invalid entry")
                                    }
                                }

                                function New_Tunes(){
                                    let New_Tunes = prompt(
                                        "RBT Genres\n"+
                                        "1:Life, Gabs_579, #51.20\n"+
                                        "2:Evidence,Xclaim_1919, #51.20\n"+
                                        "3:Rain,Kaabo aka Shotron_7579\n"+
                                        "#51.20\n"+
                                        "4:Next\n"+
                                        "#:Back\n"+
                                        "0:Menu\n"
                                    );
                                    if (New_Tunes == "1"){
                                        Life_Gabs_579_51_20();
                                    }else if (New_Tunes == "2"){
                                        Evidence_Xclaim_1919_51_20();
                                    }else if (New_Tunes == "3"){
                                        Rain_Kaabo_aka_Shotron_7579_51_20();
                                    }else if (New_Tunes == "4"){
                                        alert("Next")
                                    }else if (New_Tunes == "#"){
                                        RBT_Genres();
                                    }else if (New_Tunes == "0"){
                                        mainmenu();
                                    }
                                }

                                function Life_Gabs_579_51_20(){
                                    let Life_Gabs_579_51_20 = prompt(
                                        "You are about to select Life by\n"+
                                        "Gab_579 @51.2 FOR 30 days\n"+
                                        "1:Confirm\n"+
                                        "Previous Menu-#\n"
                                    );
                                    if (Life_Gabs_579_51_20 == "1"){
                                         let Life_Gabs_579_51_20 = prompt(
                                         "Subscriber not found\n"+
                                          "#:Back\n"
                                         )
                                          RBT_Genres()
                                    }else if (Life_Gabs_579_51_20 == "-#"){
                                        Subscribe_Tunes();
                                    }
                                    }
                                    
                                

                                function Evidence_Xclaim_1919_51_20(){
                                    let Evidence_Xclaim_1919_51_20 = prompt(
                                        "You are about to select Evidence\n"+
                                        "Xclaim_1919 @51.2 FOR 30 days\n"+
                                        "1:Confirm\n"+
                                        "Previous Menu-#\n"
                                    );
                                    if (Evidence_Xclaim_1919_51_20 == "1"){
                                        let Evidence_Xclaim_1919_51_20 = prompt(
                                        "Subscriber not found\n"+
                                        "#:Back\n"
                                        );
                                         RBT_Genres();
                                    }else if (Evidence_Xclaim_1919_51_20 == "-#"){
                                        Subscribe_Tunes();
                                    }
                                }

                                function Rain_Kaabo_aka_Shotron_7579_51_20(){
                                let Rain_Kaabo_aka_Shotron_7579_51_20 = prompt(
                                "You are about to select Rain by\n"+
                                        "Kaabo aka Shotron_7579 @51.2 FOR 30 days\n"+
                                        "1:Confirm\n"+
                                        "Previous Menu-#\n"
                                    );
                                    if (Rain_Kaabo_aka_Shotron_7579_51_20 == "1"){
                                        let Rain_Kaabo_aka_Shotron_7579_51_20 = prompt(
                                        "Subscriber not found\n"+
                                         "#:Back\n"
                                        );
                                         RBT_Genres();
                                    }else if (Rain_Kaabo_aka_Shotron_7579_51_20 == "-#"){
                                        Subscribe_Tunes();
                                    }
                                }

                                function Gift_Tunes(){
                                    let Gift_Tunes = prompt(
                                        "Gift Tunes\n"+
                                        "1:WEEKLY\n"+
                                        "2:MONTHLY\n"+
                                        "#:Back\n"+
                                        "0:Menu\n"
                                    );
                                    if (Gift_Tunes == "1"){
                                        WEEKLY();
                                    }else if (Gift_Tunes == "2"){
                                        MONTHLY();
                                    }else if (Gift_Tunes == "#"){
                                        Subscribe_Tunes();
                                    }else if (Gift_Tunes == "0"){
                                        mainmenu();
                                    }else{
                                        alert("Invalid entry")
                                    }
                                   }

                                   function WEEKLY(){
                                    let WEEKLY = prompt(
                                    "Select a preferred option\n"+
                                    "\n"+
                                    "\n"+
                                    "#:Back\n"+
                                    "0:Menu\n"
                                    );
                                    if (WEEKLY == "#"){
                                        Gift_Tunes();
                                    }else if (WEEKLY == "0"){
                                        mainmenu();
                                    }else{
                                        alert("Invalid entry")
                                    }
                                   }

                                   function MONTHLY(){
                                    let MONTHLY = prompt(
                                        "Select a preferred option\n"+
                                        "1:Roju\n"+
                                        "2:ADONAI\n"+
                                        "3:Woju\n"+
                                        "4:Attention\n"+
                                        "5:Delicious\n"+
                                        "#:Back\n"+
                                        "0:Menu\n"
                                    );
                                    if (MONTHLY == "1"){
                                        Roju();
                                    }else if (MONTHLY == "2"){
                                        ADONAI();
                                    }else if (MONTHLY == "3"){
                                        Woju();
                                    }else if (MONTHLY == "4"){
                                        Attention();
                                    }else if (MONTHLY == "5"){
                                        Delicious();
                                    }else if (MONTHLY == "#"){
                                        New_Tunes();
                                    }else if (MONTHLY == "0"){
                                        mainmenu();
                                    }
                                   }

                                   function Roju(){
                                    let Roju = prompt(
                                        "You are about to select Roju\n"+
                                        "@51.2 for 30\n"+
                                        "days\n"+
                                        "1: Confirm\n"+
                                        "Previous Menu:0\n"
                                    );
                                    if (Roju == "1"){
                                        alert("Subscriber not found\n")
                                    }else if (Roju == "#"){
                                        MONTHLY();
                                    }else if (Roju == "0"){
                                       Subscribe_Tunes(); 
                                    }
                                   }

                                   function ADONAI(){
                                    let ADONAI = prompt(
                                        "You are about to select ADONAI\n"+
                                        " @51.2 for 30\n"+
                                        "days\n"+
                                        "1: Confirm\n"+
                                        "Previous Menu:0\n"
                                    );
                                    if (ADONAI == "1"){
                                        alert("Subscriber not found\n")
                                    }else if (ADONAI == "#"){
                                        MONTHLY();
                                    }else if (ADONAI == "0"){
                                       Subscribe_Tunes(); 
                                    }
                                   }

                                   function Woju(){
                                    let Uwa_Woju = prompt(
                                        "You are about to select Woju\n"+
                                        "@51.2 for 30\n"+
                                        "days\n"+
                                        "1: Confirm\n"+
                                        "Previous Menu:0\n"
                                    );
                                    if (Woju == "1"){
                                        alert("Subscriber not found\n")
                                    }else if (Woju == "#"){
                                        MONTHLY();
                                    }else if (Woju == "0"){
                                       Subscribe_Tunes(); 
                                    }
                                   }

                                   function Attention(){
                                    let Attention = prompt(
                                        "You are about to select Attention\n"+
                                        "@51.2 for 30\n"+
                                        "days\n"+
                                        "1: Confirm\n"+
                                        "Previous Menu:0\n"
                                    );
                                    if (Attention == "1"){
                                        alert("Subscriber not found\n")
                                    }else if (Attention == "#"){
                                        MONTHLY();
                                    }else if (Attention == "0"){
                                       Subscribe_Tunes(); 
                                    }
                                   }

                                   function Delicious(){
                                    let Delicious = prompt(
                                        "You are about to select Delicious\n"+
                                        "@51.2 for 30\n"+
                                        "days\n"+
                                        "1: Confirm\n"+
                                        "Previous Menu:0\n"
                                    );
                                    if (Delicious == "1"){
                                        alert("Subscriber not found\n")
                                    }else if (Delicious == "#"){
                                        MONTHLY();
                                    }else if (Delicious == "0"){
                                       Subscribe_Tunes(); 
                                    }
                                   }

                                   function My_Tunes(){
                                    let My_Tunes = prompt(
                                        "My Tunes\n"+
                                        "1:WEEKLY\n"+
                                        "2:MONTHLY\n"+
                                        "#:Back\n"+
                                        "0:Menu\n"
                                    );
                                    if (My_Tunes == "1"){
                                        WEEKLY();
                                    }else if (My_Tunes == "2"){
                                        MONTHLY();
                                    }else if (Gift_Tunes == "#"){
                                        Subscribe_Tunes();
                                    }else if (My_Tunes == "0"){
                                        mainmenu();
                                    }else{
                                        alert("Invalid entry")
                                    }  
                                   }



}catch(e){
    alert(e);
}