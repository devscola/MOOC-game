var app={
  inicio: function(){

    function onError() {
        console.log('onError!');
    }

    navigator.accelerometer.watchAcceleration(this.onSuccess, onError,{ frequency: 1000 });
  },

  onSuccess: function(datosAceleracion){
    app.representa(datosAceleracion.x, '#valorx');
    app.representa(datosAceleracion.y, '#valory');
    app.representa(datosAceleracion.z, '#valorz');
  },

  representa: function(dato, elementoHTML){
    redondeo = Math.round(dato * 100) / 100
    document.querySelector(elementoHTML).innerHTML= redondeo;
  }

};

if ('addEventListener' in document) {
    document.addEventListener('deviceready', function() {
        app.inicio();
    }, false);
}