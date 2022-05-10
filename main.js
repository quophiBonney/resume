function myFunction() {
    $('#sidebarCollapse').on('click', function(){
     $('#sidebar, #content').toggleClass('active');
    });
};
myFunction();

   $(document).ready(function(){
            $("#sidebarCollapse").on('click', function(){
                $("#sidebar").toggleClass('active');
            });
        });