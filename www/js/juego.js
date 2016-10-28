var app={
  inicio: function(){

    function onError() {
        console.log('onError!');
    }

    navigator.accelerometer.watchAcceleration(this.onSuccess, onError,{ frequency: 1000 });
  },

  onSuccess: function(datosAceleracion){
    app.detectaAgitacion(datosAceleracion);
    app.representaValores(datosAceleracion);
  },

  detectaAgitacion: function(datosAceleracion){
    agitacionX = datosAceleracion.x > 10;
    agitacionY = datosAceleracion.y > 10;

    if (agitacionX || agitacionY){
      document.body.className = 'agitado';
    }else{
      document.body.className = '';
    }
  },

  representaValores: function(datosAceleracion){
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