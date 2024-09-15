var ussd = prompt("Enter Ussd Code ");
if (ussd == "*301#") {
    let trans = prompt(
        "Our codes have charged.For\n" +
        "1. Data Plans \n" +
        "2. Recharge 311\n" +
        "3. Borrow Airtime 303\n" +
        "4. Data Bal 323\n" +
        "5. Acct Bal 310\n " +
        "6. MTN  Share 312\n" +
        "7. VAS 305\n" +
        "8. NIN 996"
    );
    if (trans === "1") {
        let trans1 = prompt(
            "1. Data Plan\n" +
            "2. Social Bundles\n" +
            "3. Business Plan\n" +
            "4. XtraValue\n" +
            "5. Roaming/int'l\n" +
            "6. Borrow Credit/Recharge\n" +
            "0. Next"
        );
        if (trans1 === "1") {
            let Data_Plan = prompt(
                "Buy Data Plan\n" +
                "1. Daily\n" +
                "2. Weekly\n" +
                "3. Monthly\n" +
                "4. 2-3Month\n" +
                "5. Always ON\n" +
                "6. Broadband\n" +
                "7. Family Pack\n" +
                "8. Hot Deala\n" +
                "9. FREE Youtube\n" +
                "10. Manage Data\n" +
                "0.Back"
            );
            if (Data_Plan === "1") {
                let Daily = prompt(
                    "1. N50 for  40MB\n" +
                    "2. N100 for 100MB\n" +
                    "3. N100 for 350MB(1G/TT/YT)\n" +
                    "4. N200 for 200MB\n" +
                    "5. N350 for 1GB\n" +
                    "6. N800 for 3GB\n" +
                    "7. N500 for 2GB\n" +
                    "8. N600 for 2.5GB\n" +
                    "99. Next\n" +
                    "0. Back"
                );
                if (Daily === "1") {
                    let N50_for_40MB = prompt(
                        "You will be charged N50 for the\n" +
                        "purchase of 40MB Daily Plan.To\n" +
                        "proceed,select:\n" +
                        "1. Auto-Renew\n" +
                        "2. One-off\n" +
                        "3. Buy for a Friend\n" +
                        "4. Redeem Promo Code\n" +
                        "0. Back"
                    );

                    if (N50_for_40MB === "1") {
                        alert("Your N50_for 40MB have been activated successfully with Auto-Renew");
                    } else if (N50_for_40MB === "2") {
                        alert("Your N50_for 40MB have been activated successfully and will not renoew Automatically");
                    } else if (N50_for_40MB === "3") {
                        alert("Your N50_for_40MB have transfer successfully");
                    } else if (N50_for_40MB === "4") {
                        alert("Your Promo code have been redeem");
                    }
                    else if (N50_for_40MB === "0") {
                        let Daily = prompt(
                            "1. N50 for  40MB\n" +
                            "2. N100 for 100MB\n" +
                            "3. N100 for 350MB(1G/TT/YT)\n" +
                            "4. N200 for 200MB\n" +
                            "5. N350 for 1GB\n" +
                            "6. N800 for 3GB\n" +
                            "7. N500 for 2GB\n" +
                            "8. N600 for 2.5GB\n" +
                            "99. Next\n" +
                            "0. Back"
                        );
                    } else {
                        alert("incorrect code")
                    }
                }
                else if (Daily === "2") {
                    let N100_for_100MB = prompt(
                        "You will be charged N100 for the\n" +
                        "purchase of 100MB Daily Plan.To\n" +
                        "proceed,select:\n" +
                        "1. Auto-Renew\n" +
                        "2. One-off\n" +
                        "3. Buy for a Friend\n" +
                        "4. Redeem Promo Code\n" +
                        "0. Back"
                    );

                    if (N100_for_100MB === "1") {
                        alert("Your N100_for 100MB have been activated successfully with Auto-Renew");
                    } else if (N100_for_100MB === "2") {
                        alert("Your N100_for 100MB have been activated successfully and will not renoew Automatically");
                    } else if (N100_for_100MB === "3") {
                        alert("Your 100_for_100MB have transfer successfully");
                    } else if (N100_for_100MB === "4") {
                        alert("Your Promo code have been redeem");
                    }
                    else if (N100_for_100MB === "0") {
                        let Daily = prompt(
                            "1. N50 for  40MB\n" +
                            "2. N100 for 100MB\n" +
                            "3. N100 for 350MB(1G/TT/YT)\n" +
                            "4. N200 for 200MB\n" +
                            "5. N350 for 1GB\n" +
                            "6. N800 for 3GB\n" +
                            "7. N500 for 2GB\n" +
                            "8. N600 for 2.5GB\n" +
                            "99. Next\n" +
                            "0. Back"
                        );
                    } else {
                        alert("incorrect code")
                    }
                }
                else if (Daily === "3") {
                    let N100_for_350MB = prompt(
                        "You will be charged N100 for 350MB\n" +
                        "IG/TIKTOK/Youtube bundle.To\n" +
                        "proceed,select:\n" +
                        "1. Auto-Renew\n" +
                        "2. One-off\n" +
                        "0. Back\n" +
                        "00. MainMenu"
                    );
                    if (N100_for_350MB === "1") {
                        alert("Your N100_for 350MB for IG/TIKTOK/Youtube bundle have been activated successfully with Auto-Renew");
                    } else if (N100_for_350MB === "2") {
                        alert("Your N100_for 350MB for IG/TIKTOK/Youtube bundle have been activated successfully and will not renoew Automatically");
                    } else if (N100_for_350MB === "0") {
                        let Daily = prompt(
                            "1. N50 for  40MB\n" +
                            "2. N100 for 100MB\n" +
                            "3. N100 for 350MB(1G/TT/YT)\n" +
                            "4. N200 for 200MB\n" +
                            "5. N350 for 1GB\n" +
                            "6. N800 for 3GB\n" +
                            "7. N500 for 2GB\n" +
                            "8. N600 for 2.5GB\n" +
                            "99. Next\n" +
                            "0. Back"
                        );
                    }
                    else if (N100_for_350MB === "00") {
                        let Daily = prompt(
                            "1. Data Plan\n" +
                            "2. Social Bundles\n" +
                            "3. Business Plan\n" +
                            "4. XtraValue\n" +
                            "5. Roaming/int'l\n" +
                            "6. Borrow Credit/Recharge\n" +
                            "0. Next"
                        );
                    } else {
                        alert("incorrect code")
                    }
                }
                else if (Daily === "4") {
                    let N200_for_200MB = prompt(
                        "You will be charged N200 for the\n" +
                        "purchase of 200MB 3-Day Plan.To\n" +
                        "proceed,select:\n" +
                        "1. Auto-Renew\n" +
                        "2. One-off\n" +
                        "3. Buy for a Friend\n" +
                        "4. Redeem Promo Code\n" +
                        "0. Back"
                    );
                    if (N200_for_200MB === "1") {
                        alert("Your N200_for 200MB have been activated successfully with Auto-Renew");
                    } else if (N200_for_200MB === "2") {
                        alert("Your N200_for 200MB have been activated successfully and will not renoew Automatically");
                    } else if (N200_for_200MB === "3") {
                        alert("Your N200_for_200MB have transfer successfully");
                    } else if (N200_for_200MB === "4") {
                        alert("Your Promo code have been redeem");
                    }
                    else if (N200_for_200MB === "0") {
                        let Daily = prompt(
                            "1. N50 for  40MB\n" +
                            "2. N100 for 100MB\n" +
                            "3. N100 for 350MB(1G/TT/YT)\n" +
                            "4. N200 for 200MB\n" +
                            "5. N350 for 1GB\n" +
                            "6. N800 for 3GB\n" +
                            "7. N500 for 2GB\n" +
                            "8. N600 for 2.5GB\n" +
                            "99. Next\n" +
                            "0. Back"
                        );
                    
                    }else {
                        alert("incorrect code")
                    }
                }
                else if (Daily === "5") {
                    let N350_for_1GB = prompt (
                        "You will pay N350 for 1GB+3mins.\n" +
                        "proceed,select:\n" +
                        "1. Auto-Renew\n" +
                        "2. One-off\n" +
                        "3. Buy for a Friend\n" +
                        "4. Redeem Promo Code\n" +
                        "0. Back"
                    );
                    if (N350_for_1GB === "1") {
                        alert("Your N350_for 1GB+3mins have been activated successfully with Auto-Renew");
                    } else if (N350_for_1GB === "2") {
                        alert("Your N350_for 1GB+3mins have been activated successfully and will not renoew Automatically");
                    } else if (N350_for_1GB === "3") {
                        alert("Your N350_for_1GB+3mins have transfer successfully");
                    } else if (N350_for_1GB === "4") {
                        alert("Your Promo code have been redeem");
                    }
                    else if (N350_for_1GB === "0") {
                        let Daily = prompt(
                            "1. N50 for  40MB\n" +
                            "2. N100 for 100MB\n" +
                            "3. N100 for 350MB(1G/TT/YT)\n" +
                            "4. N200 for 200MB\n" +
                            "5. N350 for 1GB\n" +
                            "6. N800 for 3GB\n" +
                            "7. N500 for 2GB\n" +
                            "8. N600 for 2.5GB\n" +
                            "99. Next\n" +
                            "0. Back"
                        );
                    
                    }else {
                        alert("incorrect code")
                    }
                }
                else if (Daily === "6") {
                    let N800_for_3GB= prompt (
                        "You will pay N800 for 3GB (2 Days).\n" +
                        "proceed,select:\n" +
                        "1. Auto-Renew\n" +
                        "2. One-off\n" +
                        "3. Buy for a Friend\n" +
                        "0. Back"
                    );
                    if (N800_for_3GB === "1") {
                        alert("Your N800_for 3GB (2 Days) have been activated successfully with Auto-Renew");
                    } else if (N800_for_3GB === "2") {
                        alert("Your N800_for 3GB (2 Days) have been activated successfully and will not renoew Automatically");
                    } else if (N800_for_3GB === "3") {
                        alert("Your N800_for_3GB (2 Days) have transfer successfully");
                    }
                    else if (N800_for_3GB === "0") {
                        let Daily = prompt(
                            "1. N50 for  40MB\n" +
                            "2. N100 for 100MB\n" +
                            "3. N100 for 350MB(1G/TT/YT)\n" +
                            "4. N200 for 200MB\n" +
                            "5. N350 for 1GB\n" +
                            "6. N800 for 3GB\n" +
                            "7. N500 for 2GB\n" +
                            "8. N600 for 2.5GB\n" +
                            "99. Next\n" +
                            "0. Back"
                        );
                    }else {
                        alert("incorrect code")
                    } 
                }
                else if (Daily === "7") {
                    let N500_for_2GB= prompt (
                        "You will pay N500 for 2GB (2 Days).\n" +
                        "proceed,select:\n" +
                        "1. Auto-Renew\n" +
                        "2. One-off\n" +
                        "3. Buy for a Friend\n" +
                        "0. Back"
                    );
                    if (N500_for_2GB === "1") {
                        alert("Your N500_for 2GB (2 Days) have been activated successfully with Auto-Renew");
                    } else if (N500_for_2GB === "2") {
                        alert("Your N500_for 2GB (2 Days) have been activated successfully and will not renoew Automatically");
                    } else if (N500_for_2GB === "3") {
                        alert("Your N500_for_2GB (2 Days) have transfer successfully");
                    }
                    else if (N500_for_2GB === "0") {
                        let Daily = prompt(
                            "1. N50 for  40MB\n" +
                            "2. N100 for 100MB\n" +
                            "3. N100 for 350MB(1G/TT/YT)\n" +
                            "4. N200 for 200MB\n" +
                            "5. N350 for 1GB\n" +
                            "6. N800 for 3GB\n" +
                            "7. N500 for 2GB\n" +
                            "8. N600 for 2.5GB\n" +
                            "99. Next\n" +
                            "0. Back"
                        );
                    }else{
                        alert("incorrect code")
                    }
                }
                else if (Daily === "8") {
                    let N600_for_2_5GB = prompt (
                        "You will pay N600 for 2.5GB (2 Days).\n" +
                        "proceed,select:\n" +
                        "1. Auto-Renew\n" +
                        "2. One-off\n" +
                        "3. Buy for a Friend\n" +
                        "0. Back"
                    );
                    if (N600_for_2_5GB === "1") {
                        alert("Your N600_for 2.5GB (2 Days) have been activated successfully with Auto-Renew");
                    } else if (N600_for_2_5GB === "2") {
                        alert("Your N600_for 2_5GB (2 Days) have been activated successfully and will not renoew Automatically");
                    } else if (N600_for_2_5GB === "3") {
                        alert("Your N600_for_2_5GB (2 Days) have transfer successfully");
                    }
                    else if (N600_for_2_5GB === "0") {
                        let Daily = prompt(
                            "1. N50 for  40MB\n" +
                            "2. N100 for 100MB\n" +
                            "3. N100 for 350MB(1G/TT/YT)\n" +
                            "4. N200 for 200MB\n" +
                            "5. N350 for 1GB\n" +
                            "6. N800 for 3GB\n" +
                            "7. N500 for 2GB\n" +
                            "8. N600 for 2.5GB\n" +
                            "99. Next\n" +
                            "0. Back"
                        );
                    }else{
                        alert("incorrect code")
                    }
                }
                else if (Daily === "99"){
                    let Next = prompt(
                        "9. N400 for 1.5GB\n" +
                        "10. N30 for 250MB (Nightlife)\n"+
                        "11. N50 for 500MB (Nightlife)\n " +
                        "12. N25 for WhatsApp Daily\n" +
                        "13. N50 Jolly Combo Offer\n" +
                        "99. Next\n" +
                        "0. Back"
                    );
                  
                
            if (Next === "9") {
                let N400_for_1_5 = prompt(
                    "Your will be charged #50 for the\n" +
                    "purchase of 40MB Daily Plan.To\n" +
                    "Proceed,select:\n" +
                    "1. Auto-Renew\n" +
                    "2. One-off\n" +
                    "3. Buy for a Friend\n" +
                    "4. Redeem Promo Code\n" +
                    "0. Back"
                );
            
            if (N400_for_1_5 === "1"){
                alert("Activation of 1.5GB Daily Plan\n" +
                "failed due to insufficient balance.\n" +
                "Click https://mtnapp.page.link\n" +
                "/myMTNNGApp to recharge,dial\n" +
                "*671# to buy airtime\n" +
                "99. Next"
            );
            }else if (N400_for_1_5 === "2"){
                alert("Activation of 1.5GB Daily Plan\n" +
                "failed due to insufficient balance.\n" +
                "Click https://mtnapp.page.link\n" +
                "/myMTNNGApp to recharge,dial\n" +
                "*671# to buy airtime\n" +
                "99. Next"
            );
            }else if(N400_for_1_5 === "3") {
                alert("Enter Recipient's number\n" +
                "___________________"
            );
            }else if (N400_for_1_5 === "4") {
                alert("Input your coupon code\n" +
                "_________________________________"
            );
            }else if(N400_for_1_5 === "0"){
                alert(
                "Buy Data Plan\n" +
                "1. Daily\n" +
                "2. Weekly\n" +
                "3. Monthly\n" +
                "4. 2-3Month\n" +
                "5. Always ON\n" +
                "6. Broadband\n" +
                "7. Family Pack\n" +
                "8. Hot Deala\n" +
                "9. FREE Youtube\n" +
                "10. Manage Data\n" +
                "0.Back"
                );
            }
        }
        
              else if (Next === "10"){
                 let N30_for_250MB = prompt(
                     "You will be migrated to Pulse plan\n" +
                     "to purchase 250MB Pulse Night\n" +
                     "bundle valid for 1 Days.Do you wish\n" +
                     "to proceed?\n" +
                     "1. Yes\n" +
                     "2. No"
                 );
              
                 if (N30_for_250MB === "1"){
                    let Yes = prompt("Y'ello You would be migrated\n" +
                    "to Pulse to enjoy 250MB Pulse\n" +
                    "Nightlife for #25.\n" +
                    "1. Proceed\n" +
                    "0. Back"
                 );
        
                 }
                
            if (N30_for_250MB === "1"){
                let Proceed = prompt(
                    "Do you want your 250MB Pulse\n" +
                    "Nightlife bundle to automatically\n" +
                    "renew every 1 days?\n" +
                    "1. Yes (Auto-Renew)\n" +
                    "2. No (One-off)\n"
                );
            
            
              if (Proceed === "1") {
                 alert("Activation of 250mb Pulse Plan\n" +
                "failed due to insufficient balance.\n" +
                "Click https://mtnapp.page.link\n" +
                "/myMTNNGApp to recharge,dial\n" +
                "*671# to buy airtime\n" +
                "99. Next"
              );
              }
         
              else if (Proceed === "2"){
                alert("Activation of 250MB Pulse Plan\n" +
                "failed due to insufficient balance.\n" +
                "Click https://mtnapp.page.link\n" +
                "/myMTNNGApp to recharge,dial\n" +
                "*671# to buy airtime\n" +
                "99. Next"
              );
              }
            }
            //     else if(N30_for_250MB === "0"){
            //        let Proceed = prompt(
            //       "Buy Data Plan\n" +
            //       "1. Daily\n" +
            //       "2. Weekly\n" +
            //       "3. Monthly\n" +
            //       "4. 2-3Month\n" +
            //       "5. Always ON\n" +
            //       "6. Broadband\n" +
            //       "7. Family Pack\n" +
            //       "8. Hot Deala\n" +
            //       "9. FREE Youtube\n" +
            //       "10. Manage Data\n" +
            //       "0.Back"
            //       );
            //   }
              
            
            }
             else if (Next === "11"){
                let N50_for_500MB = prompt(
                    "You will be migrated to Pulse plan\n" +
                    "to purchase 500MB Pulse Night\n" +
                    "bundle valid for 1 Days.Do you wish\n" +
                    "to proceed?\n" +
                    "1. Yes\n" +
                    "2. No"  
                );
             if (N50_for_500MB === "1"){
             let Yes = prompt(
                "Y'ello You would be migrated\n" +
                    "to Pulse to enjoy 500MB Pulse\n" +
                    "Nightlife for #50.\n" +
                    "1. Proceed\n" +
                    "0. Back"
             );
             }
             if (N50_for_500MB === "1"){
                let Proceed = prompt(
                    "Do you want your 500MB Pulse\n" +
                    "Nightlife bundle to automatically\n" +
                    "renew every 1 days?\n" +
                    "1. Yes (Auto-Renew)\n" +
                    "2. No (One-off)\n"
                );
            
            if (Proceed === "1") {
                alert("Activation of 500mb Pulse Plan\n" +
               "failed due to insufficient balance.\n" +
               "Click https://mtnapp.page.link\n" +
               "/myMTNNGApp to recharge,dial\n" +
               "*671# to buy airtime\n" +
               "99. Next"
             );
             }
             else if (Proceed === "2") {
                alert("Activation of 500mb Pulse Plan\n" +
               "failed due to insufficient balance.\n" +
               "Click https://mtnapp.page.link\n" +
               "/myMTNNGApp to recharge,dial\n" +
               "*671# to buy airtime\n" +
               "99. Next"
             );
             }
            }else if(N50_for_500MB === "2") {
                alert("Y'ello1 The migrateion request was\n" +
                "canceeled successfully.Dail *406#\n" +
                "and try again later.Thank you!"
            );
             }

            }
        
        
        else if (Next === "12"){
            let N25_for_WhatsApp_Daily = prompt(
                "You will be charged N25 for this\n" +
                "purchase of Whatsapp Daily\n" +
                "Bundle. To proceed,select:\n" +
                "1. Auto-Renew\n" +
                "2. One-off\n" +
                "0. Back"  
            );
            if (N25_for_WhatsApp_Daily === "1") {
                alert("Activation of N25MB WhatsApp\n" +
                "Daily Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
            }
            else if (N25_for_WhatsApp_Daily === "2") {
                alert("Activation of N25MB WhatsApp\n" +
                "Daily Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
            }
        }else if (Next === "13"){
            let N50_Jolly_Combo_Offer = prompt(
                "You will be charged N50 for the\n" +
                "purchase of 20MB+3Mins+1 Tune\n" +
                "Jolly Combo.select:\n" +
                "1. Proceed (Auto-Renew)\n" +
                "2. Proceed (One-off)\n" +
                "3. Buy for other\n"  +
                "0. Back" 
            );
            if (N50_Jolly_Combo_Offer === "1"){
                alert("You are not eligible for this offer\n" +
                "Thank you!"
            );
            }
            else if (N50_Jolly_Combo_Offer ==="2"){
                alert("You are not eligible for this offer\n" +
                "Thank you!"
            );
            }
            else if (N50_Jolly_Combo_Offer === "3"){
                alert("You are not eligible for this offer\n" +
                "Thank you!"
            );
            }
        }
        else if (Next === "99"){
            let Next = prompt(
                "14. N100 Jolly Combo Offer\n" +
                "15. N50 Betamix Mini (40MB & 2\n" +
                "Mins)\n" +
                "16. N100 Betamix Max (100MB & 4\n" +
                "Mins)\n" +
                "0. Back"
            );
            if (Next === "14"){
                let N100_Jolly_Combo_Offer = prompt(
                "You will be charged N50 for the\n" +
                "purchase of 20MB+3Mins+1 Tune\n" +
                "Jolly Combo.select:\n" +
                "1. Proceed (Auto-Renew)\n" +
                "2. Proceed (One-off)\n" +
                "3. Buy for other\n"  +
                "0. Back" 
               );
            
            if (N100_Jolly_Combo_Offer === "1"){
                alert("You are not eligible for this offer\n" +
                "Thank you!"
            );
            }
            else if(N100_Jolly_Combo_Offer === "2"){
                alert("You are not eligible for this offer\n" +
                "Thank you!"
            );
            }
            else if (N100_Jolly_Combo_Offer === "3"){
                alert("You are not eligible for this offer\n" +
                "Thank you!"
            );
            }
        }
        else if (Next === "15") {
            let N50_Betamix_Mini_40MB_2_Mins = prompt(
                "You will be migrated to Beta Talk plan\n" +
                "to purchase Betamix Bundle Mini.\n" +
                "Do you wish to proceed\n" +
                "1. Yes\n" +
                "2. No                "
            );
            if (N50_Betamix_Mini_40MB_2_Mins === "1") {
                let Yes = prompt(
                    "You will be charged #50 for the\n" +
                    "purchase of Betamix Bundle Mini. To\n" +
                    "proceed,select:\n" +
                    "1. Auto-Renew\n" +
                    "2. One-off\n" +
                    "0. Back"
                );
            
            if (Yes === "1") {
                alert("Activation of Betamix Bundle Mini\n" +
                "Daily Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
            }
            else if (Yes ==="2") {
                alert("Activation of Betamix Bundle Mini\n" +
                "Daily Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
            }
            }
    
        else if (N50_Betamix_Mini_40MB_2_Mins ==="2"){
            alert("Y'ello! The migration request was\n" +
            "cancelled successfully. Thank you!"
        )
    }
     }  
     else if (Next === "16") {
        let N100_Betamix_Max_100MB_4_Mins = prompt(
            "You will be migrated to Beta Talk planooo\n" +
                "to purchase Betamix Bundle Mini.\n" +
                "Do you wish to proceed\n" +
                "1. Yes\n" +
                "2. No"
        );
    
        if (N100_Betamix_Max_100MB_4_Mins === "1") {
            let  Yes = prompt(
                "You will be charged #100 for the\n" +
                "purchase of Betamix Bundle Mini. To\n" +
                "proceed,select:\n" +
                "1. Auto-Renew\n" +
                "2. One-off\n" +
                "0. Back"
            );
        
        if (Yes === "1") {
                alert("Activation of Betamix Bundle Mini\n" +
                "Daily Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
            }
            else if (Yes ==="2") {
                alert("Activation of Betamix Bundle Mini\n" +
                "Daily Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
            } 

           }
          
        else if (N100_Betamix_Max_100MB_4_Mins === "2") {
            alert("Y'ello! The migration request was\n" +
            "cancelled successfully. Thank you!")
        }

    }
    }
    
        //  else if (Data_Plan === "2") {
        //  let Weekly = prompt(
        //      "ssssssssssss"
        //  );
        // }

        } else {
             alert("incorrect")
          }
        }
        else if (Data_Plan === "2") {
            let Weekly = prompt(
                "1. N350 for 350MB\n" +
                "2. N500 for 600MB(7days)\n" +
                "3. N500 for 750MB+N500(14Days)\n" +
                "4. N600 for 1GB\n" +
                "5. N1,000 for 1.5GB\n" +
                "6. N2,000 for 7GB\n" +
                "7, N1,500 for 5GB\n" +
                "99. Next"
            );
            if (Weekly === "1"){
                let N350_for_350MB = prompt (
                    "You will pay N350 for\n" +
                    "350MB+350MB YTNight+3mins. To\n" +
                    "proceed,select:\n" +
                    "1. Auto-Renew\n" +
                    "2. One-off\n" +
                    "3. Buy for a Friend\n" +
                    "4. Redeem Promo Code\n" +
                    "0. Back"
                );
            
            if (N350_for_350MB === "1") {
                alert("Activation of 350MB+3mins Weekly\n" +
                "Daily Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
            }
            else if (N350_for_350MB === "2") {
                alert("Activation of 350MB+3MINS Weekly\n" +
                "Daily Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
            }
            else if (N350_for_350MB === "3"){
                alert("Activation of 350MB+3MINS Weekly\n" +
                "Daily Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
            }
            else if (N350_for_350MB === "4") {
                alert("Activation of 350MB+3MINS Weekly\n" +
                "Daily Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
            }
        }
            else if (Weekly === "2") {
                let N500_for_600MB_7days = prompt(
                    "You will pay N500 for\n" +
                    "600MB+1GB YTNight+100mb\n" +
                    "YTMusic+3mins. to proceed,select:\n" +
                    "1. Auto-Renew\n" +
                    "2. One-off\n" +
                    "3. Buy for a Friend\n" +
                    "4. Redeem Promo Code\n" +
                    "0. Back"
                );
                if (N500_for_600MB_7days === "1") {
                    alert("Activation of 600MB Weekly\n" +
                "Daily Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
                    );
                } 
                else if (N500_for_600MB_7days === "2") {
                    alert("Activation of 600MB Weekly\n" +
                "Daily Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
                    );
                } 
                else if(N500_for_600MB_7days === "3") {
                    alert("Activation of 600MB Weekly\n" +
                "Daily Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
                    );
                }
                else if(N500_for_600MB_7days === "4") {
                    alert("Activation of 600MB Weekly\n" +
                "Daily Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
                    );
                } 
            }
            else if (Weekly === "3") {
                let N500_for_750MB_N500_14Days = prompt(
                    "Buy XtraData500 @N500 and get\n" +
                    "N500 talktime+750MB valid for\n" +
                    "14days. You'll be moved to Xtra Value\n" +
                    "Plan. To proceed,select:\n" +
                    "1. Auto-Renew\n" +
                    "2. One-off\n" +
                    "0. Back"
                );
                if (N500_for_750MB_N500_14Days === "1") {
                 alert(
                    "Y'ello Activation of Xtradata\n" +
                    "500 Weekly Bundle failed due to\n" +
                    "insufficient balance. Dail *904# to\n" +
                    "recharge from your bank account."
                 );   
                }
                else if (N500_for_750MB_N500_14Days === "2") {
                    alert(
                        "Y'ello Activation of Xtradata\n" +
                        "500 Weekly Bundle failed due to\n" +
                        "insufficient balance. Dail *904# to\n" +
                        "recharge from your bank account."
                     ); 
                }
            }
            else if (Weekly === "4") {
                let N600_for_1GB = prompt(
                    "You will pay N600 for 1GB+1GB\n" +
                    "YTNight+100MB YTMusic+5mins\n" +
                    "To proceed,select:\n" +
                    "1. Auto-Renew\n" +
                    "2. One-off\n" +
                    "3. Buy for a Friend\n" +
                    "4. Redeem Promo Code\n" +
                    "0. Back" 
                );
                if (N600_for_1GB === "1") {
                    alert("Activation of 1GB+5mins Weekly\n" +
                "Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
                    );
                }
                else if (N600_for_1GB === "2") {
                    alert("Activation of 1GB+5mins Weekly\n" +
                "Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
                    );
                }
                else if (N600_for_1GB === "3") {
                    alert("Activation of 1GB+5mins Weekly\n" +
                "Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
                    );
                }
                else if (N600_for_1GB === "4") {
                    alert("Activation of 1GB+5mins Weekly\n" +
                "Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
                    );
                }
            }
            else if (Weekly === "5") {
                let N1000_for_1_5GB = prompt (
                    "You will pay N1000 for 1.5GB+1.4GB\n" +
                    "YTNight+10mins. To proceed,select:\n" +
                    "1. Auto-Renew\n" +
                    "2. One-off\n" +
                    "3. Buy for a Friend\n" +
                    "4. Redeem Promo Code\n" +
                    "0. Back"   
                )
                if (N1000_for_1_5GB === "1"){
                    alert("Activation of 1.5GB+10mins Weekly\n" +
                "Data Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
                    );
                }
                else if (N1000_for_1_5GB === "2") {
                    alert("Activation of 1.5GB+10mins Weekly\n" +
                "Data Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
                    );
                }
                else if (N1000_for_1_5GB === "3") {
                    alert("Activation of 1.5GB+10mins Weekly\n" +
                "Data Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
                    );
                }else if (N1000_for_1_5GB === "4") {
                    alert("Activation of 1.5GB+10mins Weekly\n" +
                "Data Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
                    );
                }
            }
            else if (Weekly === "6") {
                let N2000_for_7GB = prompt(
                  "You will pay #2000 for 7GB Weekly\n" +
                  "Plan. To proceed,select\n" +
                  "1. Auto-Renew\n" +
                  "2. One-off\n" +
                  "3. Buy for a Friend\n" +
                  "0. Back"
                );
                if (N2000_for_7GB === "1") {
                    alert("Activation of 7GB Weekly Plan\n" +
                "Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
                }
                else if (N2000_for_7GB === "2"){
                    alert("Activation of 7GB Weekly Plan\n" +
                "Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
                }
                else if (N2000_for_7GB === "3"){
                    alert("Activation of 7GB Weekly Plan\n" +
                "Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
                }
            }
            else if (Weekly === "7"){
                let N1500_for_5GB = prompt(
                    "You will pay #1500 for 5GB Weekly\n" +
                    "Plan. To proceed,select\n" +
                    "1. Auto-Renew\n" +
                    "2. One-off\n" +
                    "3. Buy for a Friend\n" +
                    "0. Back"
                  );
                  if (N1500_for_5GB === "1") {
                    alert("Activation of 5GB Weekly Plan\n" +
                "Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
                  }
                  else if (N1500_for_5GB === "2") {
                    alert("Activation of 5GB Weekly Plan\n" +
                "Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
                  }
                  else if (N1500_for_5GB === "3") {
                    alert("Activation of 5GB Weekly Plan\n" +
                "Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
                  }
            }
            else if (Weekly === "99") {
                let Next = prompt(
                    "8. N50 for WhatsApp Weekly\n" +
                    "9. N500  for 750MB(YouTube Bundle)\n" +
                    "0. Back"
                );
                if (Next === "8") {
                    let N50_for_WhatsApp_Weekly = prompt(
                     "You will be charged N50 for the\n" +
                     "purchase of Whatsapp Weekly\n" +
                     "Bundle. To proceed,slecet:\n" +
                     "1. Auto-Renew\n" +
                     "2. One-off\n"+
                     "0. Back"
                    );
                    if (N50_for_WhatsApp_Weekly === "1"){
                        alert("Activation of 50MB WhatsApp\n" +
                    "Weekly Plan failed due to insufficient\n" +
                    "balance. Click https://mtnapp.page\n" +
                    ".link/myMTNNGApp to recharge,dial\n" +
                    "*671# to buy\n" +
                    "99.Next"
            );
            }
            else if(N50_for_WhatsApp_Weekly === "2"){
                alert("Activation of 50MB WhatsApp\n" +
               "Weekly Plan failed due to insufficient\n" +
               "balance. Click https://mtnapp.page\n" +
               ".link/myMTNNGApp to recharge,dial\n" +
               "*671# to buy\n" +
               "99.Next"
             );
            }           
                }
            
            else if (Next === "9") {
                let N500_for_750MB_YouTube_Bundle = prompt(
                    "You will be charged N500 for the\n" +
                     "purchase of Whatsapp Weekly\n" +
                     "Bundle. To proceed,slecet:\n" +
                     "1. Auto-Renew\n" +
                     "2. One-off\n"+
                     "0. Back"
                    );
                    if (N500_for_750MB_YouTube_Bundle  === "1"){
                        alert("Activation of 750MB Youtube Bundle\n" +
                        "Weekly Plan failed due to insufficient\n" +
                        "balance. Click https://mtnapp.page\n" +
                        ".link/myMTNNGApp to recharge,dial\n" +
                        "*671# to buy\n" +
                        "99.Next"
                      ); 
                    }
                    else if (N500_for_750MB_YouTube_Bundle  === "2"){
                        alert("Activation of 750MB Youtube Bundle\n" +
                        "Weekly Plan failed due to insufficient\n" +
                        "balance. Click https://mtnapp.page\n" +
                        ".link/myMTNNGApp to recharge,dial\n" +
                        "*671# to buy\n" +
                        "99.Next"
                      ); 
                    }   
            }
            }
        }else if (Data_Plan === "3") {
            let  Monthly = prompt(
                "1. N1000 for 1.2GB\n" +
                "2. N1200 for 1.5GB\n" +
                "3. N1500 for 5GB\n" +
                "4. N3000 for 8GB\n" +
                "5. N3500 for 15GB\n" +
                "6. N5500 for 20GB\n" +
                "7. N6500 for 25GB\n" +
                "99. Next\n" +
                "0. Back" 
            );
            if (Monthly === "1"){
                let N1000_for_1_2GB = prompt(
                    "Your will pay N1000 for 1.2GB+2GB\n" +
                    "YTNight+200MB YTMusic+5mins.To\n" +
                    "Proceed,select:\n" +
                    "1. Auto-Renew\n" +
                    "2. One-off\n" +
                    "3. Buy for a Friend\n" +
                    "4. Redeem Promo Code\n" +
                    "0. Back"
                );
                if (N1000_for_1_2GB === "1") {
                    alert("Activation of 1.2GB+5mins Monthly\n" +
                        "Plan failed due to insufficient\n" +
                        "balance. Click https://mtnapp.page\n" +
                        ".link/myMTNNGApp to recharge,dial\n" +
                        "*671# to buy\n" +
                        "99.Next"
                      ); 
                }
                else if (N1000_for_1_2GB === "2") {
                    alert("Activation of 1.2GB+5mins Monthly\n" +
                        "Plan failed due to insufficient\n" +
                        "balance. Click https://mtnapp.page\n" +
                        ".link/myMTNNGApp to recharge,dial\n" +
                        "*671# to buy\n" +
                        "99.Next"
                      );
                    }
                    else if (N1000_for_1_2GB === "3") {
                        alert("Activation of 1.2GB+5mins Monthly\n" +
                            "Plan failed due to insufficient\n" +
                            "balance. Click https://mtnapp.page\n" +
                            ".link/myMTNNGApp to recharge,dial\n" +
                            "*671# to buy\n" +
                            "99.Next"
                          );
                        }

            else if (N1000_for_1_2GB === "4") {
                    alert("Activation of 1.2GB+5mins Monthly\n" +
                        "Plan failed due to insufficient\n" +
                        "balance. Click https://mtnapp.page\n" +
                        ".link/myMTNNGApp to recharge,dial\n" +
                        "*671# to buy\n" +
                        "99.Next"
                      );
                    } 
                }
                   else if (Monthly === "2") {
                    let N1200_for_1_5GB = prompt(
                        "Your will pay N1200 for 1.5GB+2.4GB\n" +
                        "YTNight+5mins. Proceed,select:\n" +
                        "1. Auto-Renew\n" +
                        "2. One-off\n" +
                        "3. Buy for a Friend\n" +
                        "4. Redeem Promo Code\n" +
                        "0. Back" 
                    );
                    if (N1200_for_1_5GB === "1") {
                        alert("Activation of 1.5GB+5mins Monthly\n" +
                        "Plan failed due to insufficient\n" +
                        "balance. Click https://mtnapp.page\n" +
                        ".link/myMTNNGApp to recharge,dial\n" +
                        "*671# to buy\n" +
                        "99.Next"
                      );
                    }
                    else if (N1200_for_1_5GB === "2") {
                        alert("Activation of 1.5GB+5mins Monthly\n" +
                        "Plan failed due to insufficient\n" +
                        "balance. Click https://mtnapp.page\n" +
                        ".link/myMTNNGApp to recharge,dial\n" +
                        "*671# to buy\n" +
                        "99.Next"
                      );
                    }
                    else if (N1200_for_1_5GB === "3") {
                        alert("Activation of 1.5GB+5mins Monthly\n" +
                        "Plan failed due to insufficient\n" +
                        "balance. Click https://mtnapp.page\n" +
                        ".link/myMTNNGApp to recharge,dial\n" +
                        "*671# to buy\n" +
                        "99.Next"
                      );
                    }
                    else if (N1200_for_1_5GB === "") {
                        alert("Activation of 1.5GB+5mins Monthly\n" +
                        "Plan failed due to insufficient\n" +
                        "balance. Click https://mtnapp.page\n" +
                        ".link/myMTNNGApp to recharge,dial\n" +
                        "*671# to buy\n" +
                        "99.Next"
                      );
                    }
                   }
                   else if (Monthly === "3") {
                    let N1500_for_5GB = prompt(
                        "Your will be charged N1500 for the\n" +
                        "purchase of 5GB Monthy Plan. To\n" +
                        "Proceed,select:\n" +
                        "1. Proceed (Auto-Renew\n)" +
                        "2. Proceed (One-off\n)" +
                        "3. Redeem Promo Code\n" +
                        "0. Back"
                    );
                    if (N1500_for_5GB === "1") {
                        alert("Activation of 5GB Xtra\n" +
                    "Plan failed due to insufficient\n" +
                    "balance. Click https://mtnapp.page\n" +
                    ".link/myMTNNGApp to recharge,dial\n" +
                    "*671# to buy\n" +
                    "99.Next"
                  );

                    }
                    else if (N1500_for_5GB === "2") {
                        alert("Activation of 5GB Xtra\n" +
                    "Plan failed due to insufficient\n" +
                    "balance. Click https://mtnapp.page\n" +
                    ".link/myMTNNGApp to recharge,dial\n" +
                    "*671# to buy\n" +
                    "99.Next"
                  );

                    }
                    else if (N1500_for_5GB === "3") {
                        alert("Activation of 5GB Xtra\n" +
                    "Plan failed due to insufficient\n" +
                    "balance. Click https://mtnapp.page\n" +
                    ".link/myMTNNGApp to recharge,dial\n" +
                    "*671# to buy\n" +
                    "99.Next"
                  );

                    }
                   }
            else if (Monthly === "4") {
                let N3000_for_8GB = prompt(
                    "Your will pay N3000 for 8GB+2GB\n" +
                        "YTNight+5mins. Proceed,select:\n" +
                        "1. Auto-Renew\n" +
                        "2. One-off\n" +
                        "3. Buy for a Friend\n" +
                        "4. Redeem Promo Code\n" +
                        "0. Back" 
                    );
                    if (N3000_for_8GB === "1") {
                        alert("Activation of 8GB+15mins Monthly\n" +
                    "Plan failed due to insufficient\n" +
                    "balance. Click https://mtnapp.page\n" +
                    ".link/myMTNNGApp to recharge,dial\n" +
                    "*671# to buy\n" +
                    "99.Next"
                  );
                    }
                    else if (N3000_for_8GB === "2") {
                        alert("Activation of 8GB+15mins Monthly\n" +
                    "Plan failed due to insufficient\n" +
                    "balance. Click https://mtnapp.page\n" +
                    ".link/myMTNNGApp to recharge,dial\n" +
                    "*671# to buy\n" +
                    "99.Next"
                  );
                    }
                    else if (N3000_for_8GB === "3") {
                        alert("Activation of 8GB+15mins Monthly\n" +
                    "Plan failed due to insufficient\n" +
                    "balance. Click https://mtnapp.page\n" +
                    ".link/myMTNNGApp to recharge,dial\n" +
                    "*671# to buy\n" +
                    "99.Next"
                  );
                    }
                    else if (N3000_for_8GB === "4") {
                        alert("Activation of 8GB+15mins Monthly\n" +
                    "Plan failed due to insufficient\n" +
                    "balance. Click https://mtnapp.page\n" +
                    ".link/myMTNNGApp to recharge,dial\n" +
                    "*671# to buy\n" +
                    "99.Next"
                  );
                    }      
            }   
        
        else if (Monthly === "5") {
            let N3500_for_15GB = prompt(
                "Your will be charged N3500 for the\n" +
                "purchase of 5GB Monthy Plan. To\n" +
                "Proceed,select:\n" +
                "1. Proceed (Auto-Renew\n)" +
                "2. Proceed (One-off\n)" +
                "3. Redeem Promo Code\n" +
                "0. Back" 
            );
            if (N3500_for_15GB === "1") {
                alert("Activation of 15GB Xtraspecial\n" +
                "failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
              ); 
            }   
            else if (N3500_for_15GB === "2") {
                alert("Activation of 15GB Xtraspecial\n" +
                "failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
              ); 
            } 
            else if (N3500_for_15GB === "3") {
                alert("Activation of 15GB Xtraspecial\n" +
                "failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
              ); 
            }         
            }
            else if (Monthly === "6"){
                let N5500_for_20GB = prompt(
                    "Your will be charged N5500 for\n" +
                    "20GB+2GB YTNight+300MB\n" +
                        "YTMusic. To Proceed,select:\n" +
                        "1. Auto-Renew\n" +
                        "2. One-off\n" +
                        "3. Buy for a Friend\n" +
                        "4. Redeem Promo Code\n" +
                        "0. Back" 
                );
                if (N5500_for_20GB === "1") {
                    alert("Activation of 20GB+2.5mins Monthly\n" +
                    "Plan failed due to insufficient\n" +
                    "balance. Click https://mtnapp.page\n" +
                    ".link/myMTNNGApp to recharge,dial\n" +
                    "*671# to buy\n" +
                    "99.Next"
                );  
                }
                else if (N5500_for_20GB === "2") {
                    alert("Activation of 20GB+2.5mins Monthly\n" +
                    "Plan failed due to insufficient\n" +
                    "balance. Click https://mtnapp.page\n" +
                    ".link/myMTNNGApp to recharge,dial\n" +
                    "*671# to buy\n" +
                    "99.Next"
                ); 
            }
            else if (N5500_for_20GB === "3") {
                alert("Activation of 20GB+2.5mins Monthly\n" +
                "Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
            );
        }
            else if (N5500_for_20GB === "4") {
            alert("Activation of 20GB+2.5mins Monthly\n" +
            "Plan failed due to insufficient\n" +
            "balance. Click https://mtnapp.page\n" +
            ".link/myMTNNGApp to recharge,dial\n" +
            "*671# to buy\n" +
            "99.Next"
        );
        }
        }
        else if(Monthly === "7"){
                let N6500_for_25GB = prompt(
                    "Your will be charged N6500 for\n" +
                    "25GB+25mins. To Proceed,select:\n" +
                        "1. Auto-Renew\n" +
                        "2. One-off\n" +
                        "3. Buy for a Friend\n" +
                        "4. Redeem Promo Code\n" +
                        "0. Back"
                );
                if(N6500_for_25GB === "1") {
                    alert("Activation of 25GB+25mins Monthly\n" +
            "Plan failed due to insufficient\n" +
            "balance. Click https://mtnapp.page\n" +
            ".link/myMTNNGApp to recharge,dial\n" +
            "*671# to buy\n" +
            "99.Next"
        );
                }
                else if(N6500_for_25GB === "2") {
                    alert("Activation of 25GB+25mins Monthly\n" +
            "Plan failed due to insufficient\n" +
            "balance. Click https://mtnapp.page\n" +
            ".link/myMTNNGApp to recharge,dial\n" +
            "*671# to buy\n" +
            "99.Next"
        );
          }
          else if(N6500_for_25GB === "3") {
            alert("Activation of 25GB+25mins Monthly\n" +
            "Plan failed due to insufficient\n" +
            "balance. Click https://mtnapp.page\n" +
            ".link/myMTNNGApp to recharge,dial\n" +
            "*671# to buy\n" +
            "99.Next"
           );
            }
            else if(N6500_for_25GB === "4") {
                alert("Activation of 25GB+25mins Monthly\n" +
           "Plan failed due to insufficient\n" +
           "balance. Click https://mtnapp.page\n" +
           ".link/myMTNNGApp to recharge,dial\n" +
           "*671# to buy\n" +
           "99.Next"
        );
        }
        }
    
        else if(Monthly === "99") {
            let Next = prompt (
                "8. N11,000 for 40GB\n" +
                "9. N16,000 for 75GB\n" +
                "10. N22,000 for 120GB\n" +
                "11. N30,000 for 200GB\n" +
                "12. N1,000 for 1.5GB+N1000\n" +
                "13. N3,500 for 10GB\n" +
                "99. Next\n" +
                "0. Back"
            );
            if (Next === "8"){
                let N11000_for_40GB = prompt(
                "Your will pay N11000 for\n" +
                    "40GB+40mins. To Proceed,select:\n" +
                        "1. Auto-Renew\n" +
                        "2. One-off\n" +
                        "3. Buy for a Friend\n" +
                        "4. Redeem Promo Code\n" +
                        "0. Back"
            );
            if (N11000_for_40GB === "1") {
                alert("Activation of 40GB+40mins Monthly\n" +
           "Plan failed due to insufficient\n" +
           "balance. Click https://mtnapp.page\n" +
           ".link/myMTNNGApp to recharge,dial\n" +
           "*671# to buy\n" +
           "99.Next"
        );
            }
            else if (N11000_for_40GB === "2") {
                alert("Activation of 40GB+40mins Monthly\n" +
           "Plan failed due to insufficient\n" +
           "balance. Click https://mtnapp.page\n" +
           ".link/myMTNNGApp to recharge,dial\n" +
           "*671# to buy\n" +
           "99.Next"
        );
        }
        else if (N11000_for_40GB === "3") {
            alert("Activation of 40GB+40mins Monthly\n" +
       "Plan failed due to insufficient\n" +
       "balance. Click https://mtnapp.page\n" +
       ".link/myMTNNGApp to recharge,dial\n" +
       "*671# to buy\n" +
       "99.Next"
       );
        }else if (N11000_for_40GB === "3") {
            alert("Activation of 40GB+40mins Monthly\n" +
       "Plan failed due to insufficient\n" +
       "balance. Click https://mtnapp.page\n" +
       ".link/myMTNNGApp to recharge,dial\n" +
       "*671# to buy\n" +
       "99.Next"
        );
        }else if (N11000_for_40GB === "4") {
            alert("Activation of 40GB+40mins Monthly\n" +
       "Plan failed due to insufficient\n" +
       "balance. Click https://mtnapp.page\n" +
       ".link/myMTNNGApp to recharge,dial\n" +
       "*671# to buy\n" +
       "99.Next"
       );
       }
       }
        
        else if (Next === "9") {
            let N16000_for_75GB = prompt(
                    "Your will pay N16000 for\n" +
                        "75GB+40mins. To Proceed,select:\n" +
                            "1. Auto-Renew\n" +
                            "2. One-off\n" +
                            "3. Buy for a Friend\n" +
                            "4. Redeem Promo Code\n" +
                            "0. Back"
                );
                if (N16000_for_75GB === "1") {
                    alert("Activation of 75GB+40mins Monthly\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                   );
                }
                else if (N16000_for_75GB === "2") {
                    alert("Activation of 75GB+40mins Monthly\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                   );
                }
                else if (N16000_for_75GB === "3") {
                    alert("Activation of 75GB+40mins Monthly\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                   );
                }
                else if (N16000_for_75GB === "4") {
                    alert("Activation of 75GB+40mins Monthly\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                   );
                }
                   }
                   else if (Next === "10"){
                   let N22000_for_120GB = prompt(
                    "Your will pay N22000 for\n" +
                        "120GB+80mins. To Proceed,select:\n" +
                            "1. Auto-Renew\n" +
                            "2. One-off\n" +
                            "3. Buy for a Friend\n" +
                            "4. Redeem Promo Code\n" +
                            "0. Back"
                   );
                   if (N22000_for_120GB === "1") {
                    alert("Activation of 120GB+80mins Monthly\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                   );
                   }
                   else if (N22000_for_120GB === "2") {
                    alert("Activation of 120GB+80mins Monthly\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                   );
                   }
                   else if (N22000_for_120GB === "3") {
                    alert("Activation of 120GB+80mins Monthly\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                   );
                   }
                   else if (N22000_for_120GB === "4") {
                    alert("Activation of 120GB+80mins Monthly\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                   );
                   }
                   }
                   else if (Next === "11") {
                    let N30000_for_200GB = prompt(
                        "Your will be charged N22000 for the\n" +
                        "purchase of 200GB Monthly Plan. To\n"  +
                         "Proceed,select:\n" +
                            "1. Auto-Renew\n" +
                            "2. One-off\n" +
                            "3. Buy for a Friend\n" +
                            "4. Redeem Promo Code\n" +
                            "0. Back"
                    );
                    if (N30000_for_200GB === "1") {
                        alert("Activation of 200GB Monthly Plan\n" +
                      "failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                   );
                    }
                    else if (N30000_for_200GB === "2") {
                        alert("Activation of 200GB Monthly Plan\n" +
                      "failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                   );
                    }
                    else if (N30000_for_200GB === "3") {
                        alert("Activation of 200GB Monthly Plan\n" +
                      "failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                   );
                    }
                    else if (N30000_for_200GB === "4") {
                        alert("Activation of 200GB Monthly Plan\n" +
                      "failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                   );
                    }
                   }
                   else if (Next === "12") {
                    let N1000_for_1_5GB_N1000 = prompt(
                       "Buy XtraData 1000 @N1,000 & get\n" +
                       "N1000 talktime+1.5GB valid for\n" +
                       "30days. You'll be moved to XtraValue\n" +
                       "Plan. To proceed,select:\n" +
                       "1. Auto-Renew\n" +
                       "2. One-off\n" +
                       "0. Back"
                    );
                    if (N1000_for_1_5GB_N1000 === "1") {
                        alert("Y'ello Activation of Xtradata 1000\n" +
                        "Monthly Bundle failed due to\n" +
                        "insufficient balance. Dail *904# to\n" +
                        "recharge from your bank account."
                    );
                    }
                    else if (N1000_for_1_5GB_N1000 === "2") {
                        alert("Y'ello Activation of Xtradata 1000\n" +
                        "Monthly Bundle failed due to\n" +
                        "insufficient balance. Dail *904# to\n" +
                        "recharge from your bank account."
                    );
                    }
                   }
                   else if (Next === "13") {
                    let N3500_for_10GB = prompt(
                       "You will pay N3500 for 10GB+2GB\n" +
                       "YTNight+300MB YTMusic+20mins.\n" +
                       "To proceed, select:\n" +
                       "1. Auto-Renew\n" +
                       "2. One-off\n" +
                       "3. Buy for a Friend\n" +
                       "0. Back"
                    );
                    if (N3500_for_10GB === "1") {
                        alert("Activation of 10GB+20mins Monthly\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                   );
                    }
                    else if (N3500_for_10GB === "2") {
                        alert("Activation of 10GB+20mins Monthly\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                   );
                    }
                    else if (N3500_for_10GB === "3") {
                        alert("Activation of 10GB+20mins Monthly\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                   );
                    }
                   }
                   else if (Next === "99") {
                    let Next = prompt(
                        "14. N2,000 for 4.5GB+N2000\n" +
                        "Talttime\n" +
                        "0 .Back"
                    );
                    if (Next === "14") {
                        let N2000_for_4_5GB_N2000 = prompt(
                            "Buy XtraData2000 @N2,000 & get\n" +
                            "N2000 talktime+4.5GB valid for\n" +
                            "30days. You'll be moved to XtraValue\n" +
                            "Plan. To proceed,select:\n" +
                            "1. Auto-Renew\n" +
                            "2. One-off\n" +
                            "0. Back"
                         );
                         if (N2000_for_4_5GB_N2000 === "1") {
                            alert("Y'ello Activation of Xtradata 2000\n" +
                        "Monthly Bundle failed due to\n" +
                        "insufficient balance. Dail *904# to\n" +
                        "recharge from your bank account."
                    );
                         }
                        else if  (N2000_for_4_5GB_N2000 === "2") {
                            alert("Y'ello Activation of Xtradata 2000\n" +
                        "Monthly Bundle failed due to\n" +
                        "insufficient balance. Dail *904# to\n" +
                        "recharge from your bank account."
                    );
                         }
                    }
                   }
                }
            }
            else if (Data_Plan === "4") {
                let Month = prompt(
                     "2-3Month Plan\n" +
                     "1. N8000 for 30GB/60Days\n" +
                     "2. N20,000 for 100GB/60Days\n" +
                     "3. N30,000 for 160GB/60Days\n" +
                     "4. N50,000 for 4000GB/90Days\n" +
                     "5. N75,000 for 600GB/90Days\n" +
                     "0. Back"
                );
                if (Month === "1") {
                    let N8000_for_30GB_60Days = prompt(
                        "Your will be charged N8000 for the\n" +
                "purchase of 30GB Month2- Plan. To\n" +
                "Proceed,select:\n" +
                "1. Auto-Renew\n" +
                "2. One-off\n" +
                "3. Buy for a Friend\n" +
                "4. Redeem Promo Code\n" +
                "0. Back"
                    );
                    if (N8000_for_30GB_60Days === "1") {
                        alert("Activation of 30GB-2 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                    else if (N8000_for_30GB_60Days === "2") {
                        alert("Activation of 30GB-2 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                    else if (N8000_for_30GB_60Days === "3") {
                        alert("Activation of 30GB-2 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                    else if (N8000_for_30GB_60Days === "4") {
                        alert("Activation of 30GB-2 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                   }
                    else if (Month === "2") {
                        let N20000_for_100GB_60Days = prompt(  
                    "Your will be charged N20000 for the\n" +
                    "purchase of 100GB Month2- Plan. To\n" +
                    "Proceed,select:\n" +
                    "1. Auto-Renew\n" +
                    "2. One-off\n" +
                    "3. Buy for a Friend\n" +
                    "4. Redeem Promo Code\n" +
                    "0. Back"
                    );
                    if (N20000_for_100GB_60Days === "1") {
                        alert("Activation of 100GB-2 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                    else if (N20000_for_100GB_60Days === "2") {
                        alert("Activation of 100GB-2 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                    else if (N20000_for_100GB_60Days === "3") {
                        alert("Activation of 100GB-2 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                    else if (N20000_for_100GB_60Days === "4") {
                        alert("Activation of 100GB-2 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                    }
                else if (Month === "3"){
                    let N30000_for_160GB_60Days = prompt(
                        "Your will be charged N30000 for the\n" +
                    "purchase of 160GB Month2- Plan. To\n" +
                    "Proceed,select:\n" +
                    "1. Auto-Renew\n" +
                    "2. One-off\n" +
                    "3. Buy for a Friend\n" +
                    "4. Redeem Promo Code\n" +
                    "0. Back"
                    );
                    if (N30000_for_160GB_60Days === "1") {
                        alert("Activation of 160GB-2 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                    else if (N30000_for_160GB_60Days === "2") {
                        alert("Activation of 160GB-2 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                    else if (N30000_for_160GB_60Days === "3") {
                        alert("Activation of 160GB-2 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    } 
                    else if (N30000_for_160GB_60Days === "4") {
                        alert("Activation of 160GB-2 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                }
                else if (Month === "4") {
                    let  N50000_for_4000GB_90Days = prompt(  
                    "Your will be charged N50000 for the\n" +
                    "purchase of 400GB 3-MonthPlan. To\n" +
                    "Proceed,select:\n" +
                    "1. Auto-Renew\n" +
                    "2. One-off\n" +
                    "3. Buy for a Friend\n" +
                    "4. Redeem Promo Code\n" +
                    "0. Back"
                    );
                    if (N50000_for_4000GB_90Days === "1") {
                        alert("Activation of 400GB-3 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                    else if (N50000_for_4000GB_90Days === "2") {
                        alert("Activation of 400GB-3 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                    else if (N50000_for_4000GB_90Days === "3") {
                        alert("Activation of 400GB-3 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                    else if (N50000_for_4000GB_90Days === "4") {
                        alert("Activation of 400GB-3 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                }
                }
                else if (Month === "5") {
                    let N75000_for_600GB_90Days = prompt(
                        "Your will be charged N750000 for the\n" +
                    "purchase of 600GB 3-MonthPlan. To\n" +
                    "Proceed,select:\n" +
                    "1. Auto-Renew\n" +
                    "2. One-off\n" +
                    "3. Buy for a Friend\n" +
                    "4. Redeem Promo Code\n" +
                    "0. Back"
                    );
                    if (N75000_for_600GB_90Days === "1") {
                        alert("Activation of 600GB-3 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                    else if (N75000_for_600GB_90Days === "2") {
                        alert("Activation of 600GB-3 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
                    else if (N75000_for_600GB_90Days === "3") {
                        alert("Activation of 600GB-3 Month\n" +
                      "Plan failed due to insufficient\n" +
                      "balance. Click https://mtnapp.page\n" +
                      ".link/myMTNNGApp to recharge,dial\n" +
                      "*671# to buy\n" +
                      "99.Next"
                    );
                    }
            else if (N75000_for_600GB_90Days === "4") {
                alert("Activation of 600GB-3 Month\n" +
              "Plan failed due to insufficient\n" +
              "balance. Click https://mtnapp.page\n" +
              ".link/myMTNNGApp to recharge,dial\n" +
              "*671# to buy\n" +
              "99.Next"
            );
            }  
            }
             }
            else if (Data_Plan === "5") {
                let Always_ON = prompt(
                    "Always On Bundle\n" +
                    "1. N60 for 200MB/ 24 Hrs\n" +
                    "2. N120 for 450MB/ 7 Days\n" +
                    "3. N3000 for 15GB/ 30 Days\n" +
                    "4. N6000 for 45GB/ 30 Days\n" +
                    "0. Back\n" +
                    "00. MainMenu"
                );
                if (Always_ON === "1") {
                    let N60_for_200MB_24_Hrs = prompt(
                        "Your will be charged N60 for 200MB\n" +
                        "Plan. 50MB will be used anytime &\n" +
                        "150MB from 12AM-5AM. To proceed," +
                        "select:\n" +
                        "1. Auto-Renew\n" +
                        "2. One-off\n" +
                        "3. Buy for a Friend\n" +
                        "4. Redeem Promo Code\n" +
                        "0. Back"
                    );
            if (N60_for_200MB_24_Hrs === "1"){
                alert("Activation of 200MB Daily Day and\n" +
                "Night Plan failed due to insufficient\n" +
                "balance. Click https://mtnapp.page\n" +
                ".link/myMTNNGApp to recharge,dial\n" +
                "*671# to buy\n" +
                "99.Next"
              );
                }
                else if (N60_for_200MB_24_Hrs === "2"){
                    alert("Activation of 200MB Daily Day and\n" +
                    "Night Plan failed due to insufficient\n" +
                    "balance. Click https://mtnapp.page\n" +
                    ".link/myMTNNGApp to recharge,dial\n" +
                    "*671# to buy\n" +
                    "99.Next"
                  );
                    }
                    else if (N60_for_200MB_24_Hrs === "3"){
                        alert("Activation of 200MB Daily Day and\n" +
                        "Night Plan failed due to insufficient\n" +
                        "balance. Click https://mtnapp.page\n" +
                        ".link/myMTNNGApp to recharge,dial\n" +
                        "*671# to buy\n" +
                        "99.Next"
                      );
                        }
                        else if (N60_for_200MB_24_Hrs === "4"){
                            alert("Activation of 200MB Daily Day and\n" +
                            "Night Plan failed due to insufficient\n" +
                            "balance. Click https://mtnapp.page\n" +
                            ".link/myMTNNGApp to recharge,dial\n" +
                            "*671# to buy\n" +
                            "99.Next"
                          );
                            }
                        }
                        else if (Always_ON === "2") {
                            let N120_for_450MB_7_Days = prompt(
                                "Your will be charged N120 for 450MB\n" +
                                "Plan. 120MB will be used anytime &\n" +
                                "150MB from 12AM-5AM. To proceed," +
                                "select:\n" +
                                "1. Auto-Renew\n" +
                                "2. One-off\n" +
                                "3. Buy for a Friend\n" +
                                "4. Redeem Promo Code\n" +
                                "0. Back" 
                            );
                            if (N120_for_450MB_7_Days === "1") {
                                alert("Activation of 450MB Daily Day and\n" +
                            "Night Plan failed due to insufficient\n" +
                            "balance. Click https://mtnapp.page\n" +
                            ".link/myMTNNGApp to recharge,dial\n" +
                            "*671# to buy\n" +
                            "99.Next"
                          );
                            }
                            else if (N120_for_450MB_7_Days === "2") {
                                alert("Activation of 450MB Daily Day and\n" +
                            "Night Plan failed due to insufficient\n" +
                            "balance. Click https://mtnapp.page\n" +
                            ".link/myMTNNGApp to recharge,dial\n" +
                            "*671# to buy\n" +
                            "99.Next"
                          );
                            }
                            else if (N120_for_450MB_7_Days === "3") {
                                alert("Activation of 450MB Daily Day and\n" +
                            "Night Plan failed due to insufficient\n" +
                            "balance. Click https://mtnapp.page\n" +
                            ".link/myMTNNGApp to recharge,dial\n" +
                            "*671# to buy\n" +
                            "99.Next"
                          );
                            }
                            else if (N120_for_450MB_7_Days === "4") {
                                alert("Activation of 450MB Daily Day and\n" +
                            "Night Plan failed due to insufficient\n" +
                            "balance. Click https://mtnapp.page\n" +
                            ".link/myMTNNGApp to recharge,dial\n" +
                            "*671# to buy\n" +
                            "99.Next"
                          );
                            }
                        }
                        else if (Always_ON === "3") {
                            let  N3000_for_15GB_30_Days = prompt(
                                "Your will be charged N300 for\n" +
                                "15GB monthiy Always On Plan. To\n" +
                                "proceed,select:\n" +
                                "1. Auto-Renew\n" +
                                "2. One-off\n" +
                                "3. Buy for a Friend\n" +
                                "0. Back" 
                            );
                            if (N3000_for_15GB_30_Days === "1") {
                                alert(
                                    "Activated of 15GB Monthly Always\n" +
                                    "On Plan failed due to insufficient\n" +
                                    "balance. Please recharge or dial\n" +
                                    "*303# to borrow airtime and try\n" +
                                    "again. Thank you"
                                );
                            }
                             else if (N3000_for_15GB_30_Days === "2") {
                                alert(
                                    "Activated of 15GB Monthly Always\n" +
                                    "On Plan failed due to insufficient\n" +
                                    "balance. Please recharge or dial\n" +
                                    "*303# to borrow airtime and try\n" +
                                    "again. Thank you"
                                );
                            }
                            else if (N3000_for_15GB_30_Days === "3") {
                                alert(
                                    "Activated of 15GB Monthly Always\n" +
                                    "On Plan failed due to insufficient\n" +
                                    "balance. Please recharge or dial\n" +
                                    "*303# to borrow airtime and try\n" +
                                    "again. Thank you"
                                );
                            }
                        }
                        else if (Always_ON === "4") {
                            let N6000_for_45GB_30_Days = prompt(
                                "Your will be charged N6000 for\n" +
                                "45GB monthiy Always On Plan. To\n" +
                                "proceed,select:\n" +
                                "1. Auto-Renew\n" +
                                "2. One-off\n" +
                                "3. Buy for a Friend\n" +
                                "0. Back"  
                            );
                            if (N6000_for_45GB_30_Days === "1") {
                                alert(
                                    "Activated of 45GB Monthly Always\n" +
                                    "On Plan failed due to insufficient\n" +
                                    "balance. Please recharge or dial\n" +
                                    "*303# to borrow airtime and try\n" +
                                    "again. Thank you"
                                );
                            }
                            else if (N6000_for_45GB_30_Days === "2") {
                                alert(
                                    "Activated of 45GB Monthly Always\n" +
                                    "On Plan failed due to insufficient\n" +
                                    "balance. Please recharge or dial\n" +
                                    "*303# to borrow airtime and try\n" +
                                    "again. Thank you"
                                );
                            }
                            else if (N6000_for_45GB_30_Days === "3") {
                                alert(
                                    "Activated of 45GB Monthly Always\n" +
                                    "On Plan failed due to insufficient\n" +
                                    "balance. Please recharge or dial\n" +
                                    "*303# to borrow airtime and try\n" +
                                    "again. Thank you"
                                );
                            }
                        }
            }
            else if (Data_Plan === "6") {
                let Broadband = prompt(
                  "1. Link Device\n" +
                  "2. Recharge Device\n" +
                  "3. Buy Data Bundle on Device\n " +
                  "4. Check Device Balance\n" +
                  "5. Vewi & Unlink Device"
                );
                if (Broadband === "1") {
                    let Link_Device = prompt ("1.Link  Device\n" +
                        "0. Back"
                    );
                }
                else if (Broadband === "2") {
                    alert("No Mifi Consumer attached")
                }
                else if (Broadband === "3") {
                    let Buy_Data_Bundle_on_Device = prompt(
                        "1. Daily Bundles\n" +
                        "2. Weekly Bundles\n" +
                        "3. Monthly Bundles\n" +
                        "4. 2-3Month Plan\n" +
                        "5. MIFI Bundle\n" +
                        "6. Router(Broadband) Bundles\n" +
                        "0. Back"
                    );
                    if (Buy_Data_Bundle_on_Device === "1"){
                        alert("No Mifi Consumer attached")
                    }
                    else if (Buy_Data_Bundle_on_Device === "2") {
                        alert("No Mifi Consumer attached")
                    }
                    else if (Buy_Data_Bundle_on_Device === "3") {
                        alert("No Mifi Consumer attached")
                    }
                    else if (Buy_Data_Bundle_on_Device === "4") {
                        alert("No Mifi Consumer attached")
                    }
                    else if (Buy_Data_Bundle_on_Device === "5") {
                        alert("No Mifi Consumer attached")
                    }
                    else if (Buy_Data_Bundle_on_Device === "6") {
                        alert("No Mifi Consumer attached")
                    }
                }
                 else if (Broadband === "4") {
                    let Check_Device_Balance = prompt(
                        "1. Airtime Balance\n" +
                        "2. Data Balance\n" +
                        "3. Broadband Balance\n" +
                        "4. Broadband Points balance\n" +
                        "0. Back"
                    );
                    if (Check_Device_Balance === "1") {
                        alert("No Mifi Consumer attached")
                }
                else if (Check_Device_Balance === "2") {
                    alert("No Mifi Consumer attached")
                }
                else if (Check_Device_Balance === "3") {
                    alert("No Mifi Consumer attached")
                }
                else if (Check_Device_Balance === "4") {
                    alert("No Mifi Consumer attached")
                }
                 }
                else if (Broadband === "5") {
                    let Vewi_Unlink_Device = prompt(
                        "1. Unlink Device\n" +
                        "2. View Device\n" +
                        "0. Back"
                    );
                    if (Vewi_Unlink_Device === "1") {
                        alert("No Mifi Consumer attached")
                    }
                    else if (Vewi_Unlink_Device === "2") [
                        alert("No Mifi Consumer attached")
                    ]
                }
            }
            else if (Data_Plan === "7") {
                let Family_Packs = prompt(
                    "1. Buy Family Pack\n" +
                    "2. Add New Beneficiary/Sponsor\n" +
                    "3. Manage Benificiary/Sponsor\n" +
                    "4. Balance Enquiry\n" +
                    "5. Deactivate service\n" +
                    "6. Help\n" +
                    "0. Back\n" +
                    "00. MainMenu"
                );
                if (Family_Packs === "1") {
                    let Buy_Family = prompt(
                        "1. Buy Family Pack\n" +
                        "2. 3-Monthly\n" +
                        "3. Top-Up Plan\n" +
                        "0. Back"
                    );
                    if (Buy_Family === "1") {
                        let Buy_Family_Pack = prompt(
                        "1. N5,000 for 20GB\n" +
                        "2. N10,000 for 40GB\n" +
                        "3. N15,000 for 75GB\n" +
                        "4. N20,000 for 120GB\n" +
                        "5. N30,000 for 200GB\n" +
                        "0. Back"
                        );
                        if (Buy_Family_Pack === "1") {
                            let N5000_for_20GB = prompt(
                            "You will be charged N5,000 for the\n" +
                            "purchase of 20GB Family Pack\n" +
                            "Monthly Plan. To proceed, select:\n" +
                            "1. Auto Renew\n" +
                            "2. One-Off purchase\n" +
                            "0. Back\n" +
                            "00. MainMenu"
                        );
                        
                        if (N5000_for_20GB === "1") {
                            alert(
                                "Activated of 20GB Monthly Always\n" +
                                "Plan failed due to insufficient\n" +
                                "balance. Click https://mtnapp.page\n" +
                                ".link/myMTNNGApp to recharge, dial\n" +
                                "*671# to buy\n" +
                                "99.Next"
                            );
                        }
                        else if (N5000_for_20GB === "2") {
                            alert(
                                "Activated of 20GB Monthly Always\n" +
                                "Plan failed due to insufficient\n" +
                                "balance. Click https://mtnapp.page\n" +
                                ".link/myMTNNGApp to recharge, dial\n" +
                                "*671# to buy\n" +
                                "99.Next"
                            );
                             
                        }
                        }
                        else if (Buy_Family_Pack === "2") {
                            let N10000_for_40GB = prompt(
                                "You will be charged N10,000 for the\n" +
                            "purchase of 40GB Family Pack\n" +
                            "Monthly Plan. To proceed, select:\n" +
                            "1. Auto Renew\n" +
                            "2. One-Off purchase\n" +
                            "0. Back\n" +
                            "00. MainMenu"
                            );
                            if (N10000_for_40GB === "1") {
                                alert(
                                    "Activated of 40GB Monthly Always\n" +
                                    "Plan failed due to insufficient\n" +
                                    "balance. Click https://mtnapp.page\n" +
                                    ".link/myMTNNGApp to recharge, dial\n" +
                                    "*671# to buy\n" +
                                    "99.Next"
                                );
                            }
                            else if (N10000_for_40GB === "2") {
                                alert(
                                    "Activated of 40GB Monthly Always\n" +
                                    "Plan failed due to insufficient\n" +
                                    "balance. Click https://mtnapp.page\n" +
                                    ".link/myMTNNGApp to recharge, dial\n" +
                                    "*671# to buy\n" +
                                    "99.Next"
                                );
                            }
                        }
                            else if (Buy_Family_Pack === "3") {
                                let N15000_for_75GB = prompt(
                                    "You will be charged N15,000 for the\n" +
                                    "purchase of 75GB Family Pack\n" +
                                    "Monthly Plan. To proceed, select:\n" +
                                    "1. Auto Renew\n" +
                                    "2. One-Off purchase\n" +
                                    "0. Back\n" +
                                    "00. MainMenu" 
                                );
                                if (N15000_for_75GB === "1") {
                                    alert(
                                        "Activated of 75GB Monthly Always\n" +
                                        "Plan failed due to insufficient\n" +
                                        "balance. Click https://mtnapp.page\n" +
                                        ".link/myMTNNGApp to recharge, dial\n" +
                                        "*671# to buy\n" +
                                        "99.Next"
                                    );
                                }
                                else if (N15000_for_75GB === "2") {
                                    alert(
                                        "Activated of 75GB Monthly Always\n" +
                                        "Plan failed due to insufficient\n" +
                                        "balance. Click https://mtnapp.page\n" +
                                        ".link/myMTNNGApp to recharge, dial\n" +
                                        "*671# to buy\n" +
                                        "99.Next"
                                    );
                                }
                            }
                            else if (Buy_Family_Pack === "4"){
                                let N20000_for_120GB = prompt(
                                    "You will be charged N20,000 for the\n" +
                                    "purchase of 120GB Family Pack\n" +
                                    "Monthly Plan. To proceed, select:\n" +
                                    "1. Auto Renew\n" +
                                    "2. One-Off purchase\n" +
                                    "0. Back\n" +
                                    "00. MainMenu"  
                                );
                                if (N20000_for_120GB === "1") {
                                    alert(
                                        "Activated of 120GB Monthly Always\n" +
                                        "Plan failed due to insufficient\n" +
                                        "balance. Click https://mtnapp.page\n" +
                                        ".link/myMTNNGApp to recharge, dial\n" +
                                        "*671# to buy\n" +
                                        "99.Next"
                                    );
                                }
                                else if (N20000_for_120GB === "2") {
                                    alert(
                                        "Activated of 120GB Monthly Always\n" +
                                        "Plan failed due to insufficient\n" +
                                        "balance. Click https://mtnapp.page\n" +
                                        ".link/myMTNNGApp to recharge, dial\n" +
                                        "*671# to buy\n" +
                                        "99.Next"
                                    );
                                }
                            }
                        else if (Buy_Family_Pack === "5") {
                            let N30000_for_200GB = prompt(
                                "You will be charged N30,000 for the\n" +
                                    "purchase of 200GB Family Pack\n" +
                                    "Monthly Plan. To proceed, select:\n" +
                                    "1. Auto Renew\n" +
                                    "2. One-Off purchase\n" +
                                    "0. Back\n" +
                                    "00. MainMenu"
                            );
                            if (N30000_for_200GB === "1") {
                                alert(
                                    "Activated of 200GB Monthly Always\n" +
                                    "Plan failed due to insufficient\n" +
                                    "balance. Click https://mtnapp.page\n" +
                                    ".link/myMTNNGApp to recharge, dial\n" +
                                    "*671# to buy\n" +
                                    "99.Next"
                                );
                            }
                            else if (N30000_for_200GB === "2") {
                                alert(
                                    "Activated of 200GB Monthly Always\n" +
                                    "Plan failed due to insufficient\n" +
                                    "balance. Click https://mtnapp.page\n" +
                                    ".link/myMTNNGApp to recharge, dial\n" +
                                    "*671# to buy\n" +
                                    "99.Next"
                                );
                            }
                        }
                    
                    }
                }
                        else if(Family_Packs === "2") {
                            let Add_New_Beneficiary_Sponsor = prompt (
                                "1. Add New Beneficiary\n" +
                                "2. Allocate Family Pack\n" +
                                "3. Reset Family Pack\n" +
                                "0. Back\n" +
                                "00. MainMenu"
                            );
                            if (Add_New_Beneficiary_Sponsor === "1") {
                                let Add_New_Beneficiary = prompt(
                                    "To add beneficiary to your Family\n" +
                                    "Pack service enter phone number"
                                     );
                                //    let num=  prompt(
                                //         alert("enter phone number")
                                //      )

                                 if(Add_New_Beneficiary.length < 11 || Add_New_Beneficiary.length > 11){
                                    alert(`incorrect code`)
                                 }else if(isNaN(Add_New_Beneficiary) ){
                                    alert(`invalid code`)
                                 }else if(!isNaN(Add_New_Beneficiary) && Add_New_Beneficiary.length === 11 && Add_New_Beneficiary.trim().length == 11 ){
                                    alert(`successsfull transfered`)
                                 }else{
                                    alert(`all fail`)
                                 }
                                        
                                    

                                    
                        }
                            else if (Add_New_Beneficiary_Sponsor === "2") {
                                   alert(
                                    "No Consumer on the entered\n" +
                                    "MSISDN"
                                );
                            } 
                            else if (Add_New_Beneficiary_Sponsor === "3") {
                                let Reset_Family_Pack = prompt(
                                "1. Reset all  beneficiaries\n" +
                                "2. Reset beneficiary\n" +
                                "0. Back\n" +
                                "00. MainM,enu"
                            );
                            }
                        }
                            else if(Family_Packs === "3") {
                                let Manage_Benificiary_Sponsor = prompt(
                                   "1. View Beneficiary\n" +
                                   "2. View Sponsor\n" +
                                   "3. Delect All Beneficiaries\n" +
                                   "4. Delect Beneficiary\n" +
                                   "5. Delect Sponsor\n" +
                                   "6. Ask for data\n" +
                                   "0. Back\n" +
                                   "00. MainMenu"
                                );
                                if  (Manage_Benificiary_Sponsor === "1") {
                                    alert ("No Consumer on the entered\n" +
                                        "MSISDN"
                                    );
                                }
                                else if (Manage_Benificiary_Sponsor === "2") {
                                    alert ("No Consumer on the entered\n" +
                                        "MSISDN"
                                    );
                                }
                                else if (Manage_Benificiary_Sponsor === "3") {
                                    alert ("No Consumer on the entered\n" +
                                        "MSISDN"
                                    );
                                }
                                else if (Manage_Benificiary_Sponsor === "4") {
                                    alert ("No Consumer on the entered\n" +
                                        "MSISDN"
                                    );
                                }
                                else if (Manage_Benificiary_Sponsor === "5") {
                                    alert ("No Consumer on the entered\n" +
                                        "MSISDN"
                                    );
                                }
                                else if (Manage_Benificiary_Sponsor === "6") {
                                    alert ("No Consumer on the entered\n" +
                                        "MSISDN"
                                    );
                                }
                            }
                        }
                            else if (Data_Plan === "8"){
                                let Hot_Deals = prompt (
                                    "New Xtravalue Plan\n" +
                                    "1.N500-750MB+N500 Talktime. Val/\n" +
                                    "14days\n" +
                                    "2.N1,000-1.5GB+N1000 Talktime\n" +
                                    "3.N2,000-4.5GB+N2000 Talktime\n" +
                                    "Val/30days\n" +
                                    "0. Back"
                                );
                                if (Hot_Deals === "1") {
                                    let N500_750MB_N500_Talktime_Val_14days = prompt(
                                    "Buy XtraData 500 @N500 and get\n" +
                                    "N500 talk time and 750MB, Valid\n" +
                                    "for 14 days. You will be moved to\n" +
                                    "XtraValue Traiff plan\n" +
                                    "1. Auto-Renew\n" +
                                    "2. One-off\n" +
                                    "0. Back"
                                );
                                if (N500_750MB_N500_Talktime_Val_14days === "1") {
                                    alert("Y'ello Activation of Xtradata\n" +
                                        "500 Weeekly Bundle failed due to\n" +
                                        "insufficient balance. Dial *904# to\n" +
                                        "recharge from your bank account"
                                    )
                                }
                                else if (N500_750MB_N500_Talktime_Val_14days === "2") {
                                    alert("Y'ello Activation of Xtradata\n" +
                                        "500 Weeekly Bundle failed due to\n" +
                                        "insufficient balance. Dial *904# to\n" +
                                        "recharge from your bank account"
                                    )
                                }
                                }
                                else if (Hot_Deals === "2") {
                                    let N1000_1_5GB_N1000_Talktime = prompt(
                                        "Buy XtraData 1000 @1000 and get\n" +
                                    "N1000 talk time and 1.5GB, Valid\n" +
                                    "for 30 days. You will be moved to\n" +
                                    "XtraValue Traiff plan\n" +
                                    "1. Auto-Renew\n" +
                                    "2. One-off\n" +
                                    "0. Back"
                                    )
                                
                                if (N1000_1_5GB_N1000_Talktime === "1") {
                                    alert("Y'ello Activation of Xtradata 1000\n" +
                                        "Monthly Bundle failed due to\n" +
                                        "insufficient balance. Dial *904# to\n" +
                                        "recharge from your bank account"
                                    )
                                }
                                else if (N1000_1_5GB_N1000_Talktime === "2") {
                                    alert("Y'ello Activation of Xtradata 1000\n" +
                                        "Monthly Bundle failed due to\n" +
                                        "insufficient balance. Dial *904# to\n" +
                                        "recharge from your bank account"
                                    )
                                }
                                }
                               else if (Hot_Deals === "3") {
                                let N2000_4_5GB_N2000_Talktime_Val_30days = prompt(
                                    "Buy XtraData 2000 @2000 and get\n" +
                                    "N2000 talk time and 4.5GB, Valid\n" +
                                    "for 30 days. You will be moved to\n" +
                                    "XtraValue Traiff plan\n" +
                                    "1. Auto-Renew\n" +
                                    "2. One-off\n" +
                                    "0. Back"
                                );
                                if (N2000_4_5GB_N2000_Talktime_Val_30days === "1") {
                                    alert("Y'ello Activation of Xtradata 2000\n" +
                                    "Monthly Bundle failed due to\n" +
                                    "insufficient balance. Dial *904# to\n" +
                                    "recharge from your bank account"
                                )
                                }
                                else if (N2000_4_5GB_N2000_Talktime_Val_30days === "2") {
                                    alert("Y'ello Activation of Xtradata 2000\n" +
                                    "Monthly Bundle failed due to\n" +
                                    "insufficient balance. Dial *904# to\n" +
                                    "recharge from your bank account"
                                )
                                }
                               }
                            } 
                            else if (Data_Plan === "9") {
                                let Free_Youtube = prompt(
                                    "Buy & get Free data to stream\n" +
                                    "Youtube@Night (11 pm to 6am).\n" +
                                    "1.Weeekly Plan\n" +
                                    "2.Monthly Plan\n" +
                                    "0.Back\n" +
                                    "00.MainMenu"
                                );
                                if (Free_Youtube === "1") {
                                    let Weeekly_Plan = prompt(
                                        "Weekly Plan\n" +
                                        "1.N350 for 350MB\n" +
                                        "2.N600 for 1GB\n" +
                                        "3.N1000 for 1.5GB\n" +
                                        "4.N500 for 600MB\n" +
                                        "0.Back\n" +
                                        "00,MainMenu"
                                    );
                                     if (Weeekly_Plan === "1"){
                                     let N350_for_350MB = prompt(
                                     "You will pay N350 for\n" +
                                     "350MB+350MB YTNight+3mins. To\n" +
                                     "proceed, selected:\n" +
                                     "1.Auto-Renew\n" +
                                     "2.One-off\n" +
                                     "3.Buy for a Friend\n" +
                                     "4.Redeem Promo Code\n" +
                                     "0.Back"
                                            );
                                        
                                        
                                           if(N350_for_350MB === "1") {
                                               alert("Activation of 350MB+mins Weekly\n" +
                                           "Data Plan failed due to insufficient\n" +
                                           "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                            );
                                           }
                                           else if (N350_for_350MB === "2") {
                                                   alert("Activation of 350MB+mins Weekly\n" +
                                               "Data Plan failed due to insufficient\n" +
                                               "balance. Click https://mtnapp.page\n" +
                                               ".link/myMTNNGApp to recharge, dial\n" +
                                               "*671# to\n" +
                                               "99.Next"
                                            );
                                           }
                                           else if (N350_for_350MB === "3") {
                                               alert("Activation of 350MB+mins Weekly\n" +
                                           "Data Plan failed due to insufficient\n" +
                                           "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                        );
                                       }
                                       else if (N350_for_350MB === "4") {
                                           alert("Activation of 350MB+mins Weekly\n" +
                                             "Data Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                             }   
                                  
                                      }
                                 
                                 else if(Weeekly_Plan === "2") {
                                    let N600_for_1GB = prompt(
                                        "You will pay N600 for 1GB+1GB\n" +
                                     "YTNight+100MB YTMusic+5mins.\n" +
                                     "To proceed, selected:\n" +
                                     "1.Auto-Renew\n" +
                                     "2.One-off\n" +
                                     "3.Buy for a Friend\n" +
                                     "0.Back"
                                    );
                                    if (N600_for_1GB === "1"){
                                        alert("Activation of 1GB+5mins Weekly\n" +
                                             "Data Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N600_for_1GB === "2") {
                                        alert("Activation of 1GB+5mins Weekly\n" +
                                             "Data Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N600_for_1GB === 3) {
                                        alert("Activation of 1GB+5mins Weekly\n" +
                                             "Data Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                 }
                                 else if (Weeekly_Plan === "3") {
                                    let N1000_for_1_5GB = prompt(
                                        "You will pay N1000 for 1.5GB+1.4GB\n" +
                                     "YTNight+10mins. To proceed, selected:\n" +
                                     "1.Auto-Renew\n" +
                                     "2.One-off\n" +
                                     "3.Buy for a Friend\n" +
                                     "0.Back"
                                    );
                                    if (N1000_for_1_5GB === "1") {
                                        alert("Activation of 1.5GB+10mins Weekly\n" +
                                             "Data Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N1000_for_1_5GB === "2") {
                                        alert("Activation of 1.5GB+10mins Weekly\n" +
                                             "Data Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N1000_for_1_5GB === "3") {
                                        alert("Activation of 1.5GB+10mins Weekly\n" +
                                             "Data Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                 }
                                 else if (Weeekly_Plan === "4") {
                                    let N500_for_600MB = prompt(
                                        "You will pay N500 for\n" +
                                        "600MB+1GB YTNight+100MB." +
                                        "YTMusic+3mins.To proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One-off\n" +
                                        "3.Buy for a Friend\n" +
                                        "4.Redeem Promo Code\n" +
                                        "0.Back" 
                                    );
                                    if (N500_for_600MB === "1") {
                                        alert("Activation of 600MB Weekly Plan\n" +
                                             "failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                            }
                                            else if (N500_for_600MB === "2") {
                                                alert("Activation of 600MB Weekly Plan\n" +
                                             "failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                            }
                                            else if (N500_for_600MB === "3") {
                                                alert("Activation of 600MB Weekly Plan\n" +
                                             "failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                            }
                                            else if (N500_for_600MB === "4") {
                                                alert("Activation of 600MB Weekly Plan\n" +
                                             "failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                            }
                             }
                            }
                            else if (Free_Youtube === "2") {
                                let Monthly_Plan = prompt(
                                    "Monthly Plan\n" +
                                    "1.N1000 for 1.2GB\n" +
                                    "2.N1200 for 1.5GB\n" +
                                    "3.N2,000 for 4GB\n" +
                                    "4.N3,000 for 8GB\n" +
                                    "5.N3,500 for 10GB\n" +
                                    "6.N4,000 for 12GB\n" +
                                    "7.N5,500 for 20GB\n" +
                                    "0.Back\n" +
                                    "00.MainMenu"
                                );
                                if (Monthly_Plan === "1") {
                                    let N1000_for_1_2GB = prompt(
                                        "You will pay N1000 for 1.2GB+2GB\n" +
                                        "YTNight+200MB YTMusic+5mins. To\n" + 
                                        "proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One-off\n" +
                                        "3.Buy for a Friend\n" +
                                        "4.Redeem Promo Code\n" +
                                        "0.Back"
                                    );
                                    if (N1000_for_1_2GB === "1") {
                                        alert("Activation of 1.2GB+5mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N1000_for_1_2GB === "2") {
                                        alert("Activation of 1.2GB+5mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N1000_for_1_2GB === "3") {
                                        alert("Activation of 1.2GB+5mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N1000_for_1_2GB === "4") {
                                        alert("Activation of 1.2GB+5mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                }
                                else if (Monthly_Plan === "2") {
                                  let  N1200_for_1_5GB = prompt(
                                    "You will pay N1200 for 1.5GB+2.4GB\n" +
                                        "YTNight+5mins. To proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One-off\n" +
                                        "3.Buy for a Friend\n" +
                                        "4.Redeem Promo Code\n" +
                                        "0.Back"
                                  );
                                  if (N1200_for_1_5GB === "2") {
                                    alert("Activation of 1.5GB+5mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                  }
                                  else if (N1200_for_1_5GB === "2") {
                                    alert("Activation of 1.5GB+5mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                  }
                                  else if (N1200_for_1_5GB === "3") {
                                    alert("Activation of 1.5GB+5mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                  }
                                  else if (N1200_for_1_5GB === "4") {
                                    alert("Activation of 1.5GB+5mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                  }
                                }
                                else if (Monthly_Plan === "3") {
                                    let N2000_for_4GB = prompt(
                                        "You will pay N2000 for 4GB+2GB\n" +
                                        "YTNight+200MB YTMusic+10mins\n" +
                                        "To proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One-off\n" +
                                        "3.Buy for a Friend\n" +
                                        "4.Redeem Promo Code\n" +
                                        "0.Back"
                                    );
                                    if (N2000_for_4GB === "1") {
                                        alert("Activation of 4GB+5mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N2000_for_4GB === "2") {
                                        alert("Activation of 4GB+5mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N2000_for_4GB === "3") {
                                        alert("Activation of 4GB+5mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N2000_for_4GB === "4") {
                                        alert("Activation of 4GB+5mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                }
                                else if (Monthly_Plan === "4") {
                                    let N3000_for_8GB = prompt(
                                        "You will pay N2000 for 8GB+2GB\n" +
                                        "YTNight+200MB YTMusic+15mins\n" +
                                        "To proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One-off\n" +
                                        "3.Buy for a Friend\n" +
                                        "0.Back"
                                    );
                                    if (N3000_for_8GB === "1") {
                                        alert("Activation of 8GB+15mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N3000_for_8GB === "2") {
                                        alert("Activation of 8GB+15mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N3000_for_8GB === "3") {
                                        alert("Activation of 8GB+15mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                }
                                else if (Monthly_Plan === "5") {
                                    let N3500_for_10GB = prompt(
                                        "You will pay N3500 for 10GB+2GB\n" +
                                        "YTNight+300MB YTMusic+20mins\n" +
                                        "To proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One-off\n" +
                                        "3.Buy for a Friend\n" +
                                        "4.Redeem Promo Code\n" +
                                        "0.Back" 
                                    );
                                    if (N3500_for_10GB === "1") {
                                        alert("Activation of 10GB+20mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N3500_for_10GB === "2") {
                                        alert("Activation of 10GB+20mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N3500_for_10GB === "3") {3013
                                        alert("Activation of 10GB+20mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N3500_for_10GB === "4") {
                                        alert("Activation of 10GB+20mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                }
                                else if (Monthly_Plan === "6") {
                                    let N4000_for_12GB = prompt(
                                        "You will pay N4000 for 12GB+2GB\n" +
                                        "YTNight+300MB YTMusic+25mins\n" +
                                        "To proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One-off\n" +
                                        "3.Buy for a Friend\n" +
                                        "4.Redeem Promo Code\n" +
                                        "0.Back" 
                                    );
                                    if (N4000_for_12GB === "1") {
                                        alert("Activation of 12GB+25mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N4000_for_12GB === "2") {
                                        alert("Activation of 12GB+25mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N4000_for_12GB === "3") {
                                        alert("Activation of 12GB+25mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N4000_for_12GB === "4") {
                                        alert("Activation of 12GB+25mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                }
                                else if (Monthly_Plan === "7") {
                                    let N5500_for_20GB = prompt(
                                        "You will pay N5,500 for 20GB+2GB\n" +
                                        "YTNight+300MB YTMusic+25mins\n" +
                                        "To proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One-off\n" +
                                        "3.Buy for a Friend\n" +
                                        "4.Redeem Promo Code\n" +
                                        "0.Back"
                                    );
                                    if (N5500_for_20GB === "1") {
                                        alert("Activation of 20GB+25mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N5500_for_20GB === "2") {
                                        alert("Activation of 20GB+25mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N5500_for_20GB === "3") {
                                        alert("Activation of 20GB+25mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (N5500_for_20GB === "4") {
                                        alert("Activation of 20GB+25mins Monthly\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                }
                            }
                        }
                    }
                        else if (trans1 === "2") {
                            let Social_Bundles = prompt (
                                "1.WhatsApp\n" +
                                "2.Facebook\n" +
                                "3.Instagram\n" +
                                "4.TikTot\n" +
                                "5.Ayoba\n" +
                                "6.All Social Bundle\n" +
                                "7.YouTube,Instagram, and TikTot\n" +
                                "8.Opera Mini & News\n" +
                                "9.Social Mega bundle\n" +
                                "99.Next"
                            );
                            if  (Social_Bundles === "1") {
                                let WhatsApp = prompt(
                                    "WhatsApp\n" +
                                    "1.Daily @ N25 for 25MB\n" +
                                    "2.Weekly @ N50 for 50MB\n" +
                                    "3.Monthly @ N150 for 150MB\n" +
                                    "0.Back"
                                );
                                if (WhatsApp === "1") {
                                    let Daily_N25_for_25MB = prompt(
                                        "You will be charged N25 for this\n" +
                                        "purchase of 25MB WhatsApp Daily\n" +
                                        "Bundle. To proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One=off Purchase\n" +
                                        "3.Buy for a Friend\n" +
                                        "0.Back"
                                    );
                                    if (Daily_N25_for_25MB === "1") {
                                        alert("Activation of 25MB WhatsApp\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (Daily_N25_for_25MB === "2") {
                                        alert("Activation of 25MB WhatsApp\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (Daily_N25_for_25MB === "3") {
                                        alert("Activation of 25MB WhatsApp\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                }
                                else if (WhatsApp === "2") {
                                    let Weekly_N50_for_50MB = prompt (
                                        "You will be charged N50 for this\n" +
                                        "purchase of 50MB WhatsApp Daily\n" +
                                        "Bundle. To proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One=off Purchase\n" +
                                        "3.Buy for a Friend\n" +
                                        "0.Back"  
                                    );
                                    if (Weekly_N50_for_50MB === "1") {
                                        alert("Activation of 50MB WhatsApp\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (Weekly_N50_for_50MB === "2") {
                                        alert("Activation of 50MB WhatsApp\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                    else if (Weekly_N50_for_50MB === "3") {
                                        alert("Activation of 50MB WhatsApp\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                    }
                                }
                                else if (WhatsApp === "3") {
                                   let  Monthly_N150_for_150MB = prompt(
                                    "You will be charged N150 for this\n" +
                                        "purchase of 150MB WhatsApp Daily\n" +
                                        "Bundle. To proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One=off Purchase\n" +
                                        "3.Buy for a Friend\n" +
                                        "0.Back"
                                   );
                                   if (Monthly_N150_for_150MB === "1") {
                                    alert("Activation of 150MB WhatsApp\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                   }
                                   else if (Monthly_N150_for_150MB === "2") {
                                    alert("Activation of 150MB WhatsApp\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                   }
                                   else if (Monthly_N150_for_150MB === "3") {
                                    alert("Activation of 150MB WhatsApp\n" +
                                             "Plan failed due to insufficient\n" +
                                            "balance. Click https://mtnapp.page\n" +
                                           ".link/myMTNNGApp to recharge, dial\n" +
                                           "*671# to\n" +
                                           "99.Next"
                                              );
                                            }
                                }
                            }
                            else if (Social_Bundles === "2") {
                                let Facebook = prompt(
                                    "Facebook\n" +
                                    "1.Daily @ N25 for 25MB\n" +
                                    "2.Weekly @ N50 for 50MB\n" +
                                    "3.Monthly @ N150 for 150MB\n" +
                                    "0.Back"
                                );
                                if (Facebook === "1") {
                                    let Daily_N25_for_25MB = prompt(
                                    "You will be charged N25 for this\n" +
                                    "purchase of 25MB WhatsApp Daily\n" +
                                    "Bundle. To proceed, select:\n" +
                                    "1.Auto-Renew\n" +
                                    "2.One=off Purchase\n" +
                                    "3.Buy for a Friend\n" +
                                    "0.Back"
                                ); 
                                if (Daily_N25_for_25MB === "1") {
                                    alert("Activation of 25MB Facebook\n" +
                                    "Plan failed due to insufficient\n" +
                                   "balance. Click https://mtnapp.page\n" +
                                  ".link/myMTNNGApp to recharge, dial\n" +
                                  "*671# to\n" +
                                  "99.Next"
                                     ); 
                                }
                                else if (Daily_N25_for_25MB === "2") {
                                    alert("Activation of 25MB Facebook\n" +
                                    "Plan failed due to insufficient\n" +
                                   "balance. Click https://mtnapp.page\n" +
                                  ".link/myMTNNGApp to recharge, dial\n" +
                                  "*671# to\n" +
                                  "99.Next"
                                     ); 
                                }
                                else if (Daily_N25_for_25MB === "3") {
                                    alert("Activation of 25MB Facebook\n" +
                                    "Plan failed due to insufficient\n" +
                                   "balance. Click https://mtnapp.page\n" +
                                  ".link/myMTNNGApp to recharge, dial\n" +
                                  "*671# to\n" +
                                  "99.Next"
                                     ); 
                                }
                                }
                                else if (Facebook ==="2") {
                                    let Weekly_N50_for_50MB = prompt(
                                        "You will be charged N50 for this\n" +
                                    "purchase of 50MB WhatsApp Daily\n" +
                                    "Bundle. To proceed, select:\n" +
                                    "1.Auto-Renew\n" +
                                    "2.One=off Purchase\n" +
                                    "3.Buy for a Friend\n" +
                                    "0.Back"
                                    );
                                    if (Weekly_N50_for_50MB === "1") {
                                        alert("Activation of 50MB Facebook\n" +
                                    "Plan failed due to insufficient\n" +
                                   "balance. Click https://mtnapp.page\n" +
                                  ".link/myMTNNGApp to recharge, dial\n" +
                                  "*671# to\n" +
                                  "99.Next"
                                     ); 
                                    }
                                    else if (Weekly_N50_for_50MB === "2") {
                                        alert("Activation of 50MB Facebook\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                    }
                                    else if (Weekly_N50_for_50MB === "3") {
                                        alert("Activation of 50MB Facebook\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                    }
                                }
                                else if (Facebook === "3") {
                                    let Monthly_N150_for_150MB = prompt(
                                        "You will be charged N150 for this\n" +
                                    "purchase of 150MB WhatsApp Daily\n" +
                                    "Bundle. To proceed, select:\n" +
                                    "1.Auto-Renew\n" +
                                    "2.One=off Purchase\n" +
                                    "3.Buy for a Friend\n" +
                                    "0.Back"
                                    );
                                    if (Monthly_N150_for_150MB === "1") {
                                        alert("Activation of 150MB Facebook\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                    }
                                    else if (Monthly_N150_for_150MB === "2") {
                                        alert("Activation of 150MB Facebook\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                    }
                                    else if (Monthly_N150_for_150MB === "3") {
                                        alert("Activation of 150MB Facebook\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                    }
                                }
                            }
                                else if (Social_Bundles === "3") {
                                    let Instagram = prompt(
                                        "Instagram\n" +
                                        "1.N200 for 1GB/3-days\n" +
                                        "0.Back"
                                    );
                                    if (Instagram === "1") {
                                        let N200_for_1GB_3_days = prompt(
                                        "You will be charged N200 for this\n" +
                                        "purchase of 1GB Instagram 3-Day\n" +
                                        "Plan. To proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One=off Purchase\n" +
                                        "3.Buy for a Friend\n" +
                                        "0.Back"
                                    );  
                                    if (N200_for_1GB_3_days === "1") {
                                        alert("Activation of 1GB Instagram\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                    }
                                    else if (N200_for_1GB_3_days === "2") {
                                        alert("Activation of 1GB Instagram\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                    }
                                    else if (N200_for_1GB_3_days === "3") {
                                        alert("Activation of 1GB Instagram\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                    }
                                    }
                                }
                            else if (Social_Bundles === "4") {
                                let TikTot = prompt(
                                    "TikTok\n" +
                                    "1.N50 for 200MB/1 day\n" +
                                    "2.N350 for 2GB/7 days\n" +
                                    "0.Back"
                                );
                                if (TikTot === "1") {
                                    let N50_for_200MB_1_day = prompt(
                                    "You will be charged N50 for this\n" +
                                    "purchase of 200MB TikTok Daily\n" +
                                    "Bundle. To proceed, select:\n" +
                                    "1.Auto-Renew\n" +
                                    "2.One=off Purchase\n" +
                                    "3.Buy for a Friend\n" +
                                    "0.Back"
                                );
                                if (N50_for_200MB_1_day === "1") {
                                    alert("Activation of 200MB Instagram\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                }
                                else if (N50_for_200MB_1_day === "2"){
                                    alert("Activation of 200MB Instagram\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                }
                                else if (N50_for_200MB_1_day === "3") {
                                    alert("Activation of 200MB Instagram\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                }
                                }
                                else if (TikTot === "2") {
                                    let N350_for_2GB_7_days = prompt(
                                        "You will be charged N350 for this\n" +
                                        "purchase of 2GB TikTok Daily\n" +
                                        "Bundle. To proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One=off Purchase\n" +
                                        "3.Buy for a Friend\n" +
                                        "0.Back"
                                    );
                                    if (N350_for_2GB_7_days === "1") {
                                        alert("Activation of 2GB Instagram\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                    }
                                    else if (N350_for_2GB_7_days === "2") {
                                        alert("Activation of 2GB Instagram\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                    }
                                    else if (N350_for_2GB_7_days === "3") {
                                        alert("Activation of 2GB Instagram\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                    }
                                }
                            }
                            else if (Social_Bundles === "5") {
                                let Ayoba = prompt(
                                    "1.N25 for 25MB/1 day\n" +
                                    "2.N50 for 50MB/7 days\n" +
                                    "3.N150 for 150MB/30 days\n" +
                                    "0.Back"
                                );
                                if (Ayoba === "1"){
                                    let N25_for_25MB_1_day = prompt(
                                        "You will be charged N25 for the\n" +
                                        "purchase of 25MB Ayoba Daily\n" +
                                        "Bundle. To proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One=off Purchase\n" +
                                        "3.Buy for a Friend\n" +
                                        "0.Back"
                                    );
                                    if (N25_for_25MB_1_day === "1") {
                                        alert("Activation of 25MB Ayoba\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                    }
                                    else if (N25_for_25MB_1_day === "2") {
                                        alert("Activation of 25MB Ayoba\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                    }
                                    else if (N25_for_25MB_1_day === "3") {
                                        alert("Activation of 25MB Ayoba\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         ); 
                                    }
                                }
                                else if (Ayoba === "2") {
                                    let N50_for_50MB_7_days = prompt(
                                        "You will be charged N50 for the\n" +
                                        "purchase of 50MB Ayoba Daily\n" +
                                        "Bundle. To proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One=off Purchase\n" +
                                        "3.Buy for a Friend\n" +
                                        "0.Back"
                                    );
                                    if (N50_for_50MB_7_days === "1"){
                                        alert("Activation of 50MB Ayoba\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         );
                                    }
                                    else if (N50_for_50MB_7_days === "2") {
                                        alert("Activation of 50MB Ayoba\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         );
                                    }
                                    else if (N50_for_50MB_7_days === "3"){
                                        alert("Activation of 50MB Ayoba\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         );
                                    }
                                }
                                else if (Ayoba === "3") {
                                    let N150_for_150MB_30_days = prompt(
                                        "You will be charged N150 for the\n" +
                                        "purchase of 150MB Ayoba Daily\n" +
                                        "Bundle. To proceed, select:\n" +
                                        "1.Auto-Renew\n" +
                                        "2.One=off Purchase\n" +
                                        "3.Buy for a Friend\n" +
                                        "0.Back"
                                    );
                                    if (N150_for_150MB_30_days === "1") {
                                        alert("Activation of 150MB Ayoba\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         );
                                    }
                                    else if (N150_for_150MB_30_days === "2") {
                                        alert("Activation of 150MB Ayoba\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         );
                                    }
                                    else if (N150_for_150MB_30_days === "3") {
                                        alert("Activation of 150MB Ayoba\n" +
                                        "Plan failed due to insufficient\n" +
                                       "balance. Click https://mtnapp.page\n" +
                                      ".link/myMTNNGApp to recharge, dial\n" +
                                      "*671# to\n" +
                                      "99.Next"
                                         );
                                    }
                                }
                            }
                        
                        
                        }
                    
                    
                    
      } else {
          alert("input error,please try again")
      }
    
       } else {
      alert("invalid ussd code");
       
    } 
