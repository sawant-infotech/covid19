/*

 ////////  //     //  //     //  ////////   //     //   ////////   ///////////////   ////////  ////    //     //  /////////  ////  
//         //     //  //     //  //     //  //     //  //     //  //     //     //  //           //    //     //  //     //    //
//         //     //  //     //  //     //  //     //  //     //  //     //     //  //           //    //     //  //     //    //
 ///////   /////////  //     //  /////////  /////////  /////////  //     //     //   ////////    //    /////////  //     //    //
       //  //     //  //     //  //     //  //     //  //     //  //     //     //         //    //           //  //     //    //
       //  //     //  //     //  //     //  //     //  //     //  //     //     //         //    //           //  //     //    //
////////   //     //   ///////   ////////   //     //  //     //  //     //     //  ////////   //////         //  /////////  ////// 



 ////////  //     //  //     //  ////////   //     //   ////////   ///////////////  
//         //     //  //     //  //     //  //     //  //     //  //     //     //    
//         //     //  //     //  //     //  //     //  //     //  //     //     //    
 ///////   /////////  //     //  /////////  /////////  /////////  //     //     //
       //  //     //  //     //  //     //  //     //  //     //  //     //     //   
       //  //     //  //     //  //     //  //     //  //     //  //     //     //   
////////   //     //   ///////   ////////   //     //  //     //  //     //     //  


 ////////   ///////    ///////////////  ////////   //     //   ///////     //////    ///////  
//         //     //  //     //     //  //     //  //     //  //     //      //        //    
//         //     //  //     //     //  //     //  //     //  //     //      //        //    
 ////////  /////////  //     //     //  /////////  /////////  /////////      //        //
       //  //     //  //     //     //  //     //  //     //  //     //      //        //   
       //  //     //  //     //     //  //     //  //     //  //     //      //        //   
////////   //     //  //     //     //  ////////   //     //  //     //    ///       //////  


 ////////  /////////   //     //     //  ////////    ////////  //////////
//         //     //   //     //     //  //     //  //     //      //    
//         //     //   //     //     //  //     //  //     //      //    
 ///////   /////////   //     //     //  /////////  //     //      //
       //  //     //   //     //     //  //     //  //     //      //   
       //  //     //   //     //     //  //     //  //     //      //   
////////   //     //    //////////////   //     //  //     //      //

*/
var preloader = document.getElementById('loading-screen-animation');
function loading_function(){
   preloader.style.display = 'none';
}


// disable right click
        document.addEventListener("DOMContentLoaded", function () {
            var bodyElement = document.querySelector("body");

            bodyElement.addEventListener("contextmenu", function (event) {
                event.preventDefault();
                alert("Right click disabled.");
            });
        });

        // disable copy
        document.addEventListener("DOMContentLoaded", function () {
            document.addEventListener("selectstart", function (event) {
                event.preventDefault();
            });

            document.addEventListener("copy", function (event) {
                event.preventDefault();
            });
        });

        document.onkeydown = function (e) {
            if ((e.ctrlKey && e.shiftKey && e.keyCode === 73) ||  // Ctrl+Shift+I
                (e.ctrlKey && e.keyCode === 67) ||  // Ctrl+C
                (e.ctrlKey && e.keyCode === 86) ||  // Ctrl+V
                (e.ctrlKey && e.keyCode === 85) ||  // Ctrl+U
                (e.ctrlKey && e.keyCode === 117)) { // Ctrl+F6
                alert('Not allowed');
                return false;
            } else {
                return true;
            }
        };
