/*$http.post('/login', { username: username, password: password })
            .success(function (response) {
                service.SetCredentials(username, password);
                callback(response);
            });*/
     $http.get('http://jsonplaceholder.typicode.com/users?email='+$scope.user).then(function (r) {   
        var datos = r.data;
        var response = false;
        if( datos.length == 1 ){
            console.log(datos[0].email);
            //if( $scope.user === datos[0].email &&  $scope.password === datos[0].zipcode )
            if( $scope.user === datos[0].email &&  $scope.password == datos[0].zipcode )
            if( $scope.user === datos[0].email ){
                response = true;
                service.SetCredentials(datos[0].email, datos[0].zipcode);
                callback(response);
            }else{
                console.log("Error en usuario o Contraseña");
                callback(response);
            }
        }else{
            console.log("No existe el usuario!!");
            $scope.dataLoading = false;
            }
        });

     $http.get('http://jsonplaceholder.typicode.com/users?email='+$scope.user)
        .then(function (r) {
            var datos = r.data;
            console.log("respuesta");
            console.log(r);
            console.log(datos[0].email);
            service.SetCredentials(datos[0].email, datos[0].zipcode);
            callback(r);
        });
   
ngdialog
   http://www.cssscript.com/modals-and-popups-provider-for-angular-js-applications-ngdialog/
   https://github.com/likeastore/ngDialog#api

   file:///home/h4d4/Development/ngDialog-master/example/index.html

   http://stackoverflow.com/questions/16935095/correct-way-to-integrate-jquery-plugins-in-angularjs
   https://github.com/gaurav123337/AngularOtherJqueryPluginDemo/blob/master/html/index.html

   http://vodkabears.github.io/remodal/#modal


<!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>-->
<!--<script defer="true" src="js/dependencies/jquery.remodal.js"></script>-->
<!--<script>window.jQuery || document.write('<script src="js/dependencies/jquery-1.11.0.min.js"><\/script>')</script>-->
<!-- Instead of JQuery, you can use zepto now! -->
<!--<script src="js/zepto.min.js"></script>-->
<!--<script src="js/dependencies/jquery.remodal.js"></script> -->
<!-- Events -->
<!--<script>
    $(document).on('open', '.remodal', function () {
        console.log('open');
    });

    $(document).on('opened', '.remodal', function () {
        console.log('opened');
    });

    $(document).on('close', '.remodal', function () {
        console.log('close');
    });

    $(document).on('closed', '.remodal', function () {
        console.log('closed');
    });

    $(document).on('confirm', '.remodal', function () {
        console.log('confirm');
    });

    $(document).on('cancel', '.remodal', function () {
        console.log('cancel');
    });

    // You can open or close it like this:
    // var inst = $.remodal.lookup[$('[data-remodal-id=modal]').data('remodal')];
    // inst.open();
    // inst.close();

    // Or init in this way:
    var inst = $('[data-remodal-id=modal2]').remodal();
    // inst.open();
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-28353704-2', 'designify.me');
  ga('send', 'pageview');

</script>-->