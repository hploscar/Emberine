import Ember from 'ember';

export default Ember.Controller.extend({
  queryFormVisible: false,
  operation: "",
  capitulos: [],
  subCapitulos: [],
  tables: [],
  datos: [],
  showButton: false,
  chartData: [],
  actions: {
    toggleQueryFormVisibility() {
      this.toggleProperty('queryFormVisible')
    },
    showButton() {
      this.set('showButton', true)
    },
    selectSeries(serie) {
      let self = this
      this.get('store').queryRecord('capitulosraiz-operacion', serie ).then(operacion => {
        self.get('store').queryRecord('capitulos', operacion.get('Operation')).then(capitulos => {
          self.set('capitulos', capitulos.get('data'))
        })
        // self.set('operation', operacion.get('Nombre'))
      })
    },
    selectCapitulo(id) {
      let self = this
      this.get('store').queryRecord('tablas-capitulo', id).then(tablas => {
        if (tablas.get('Data').length == 0) {
          self.get('store').queryRecord('capitulos', id).then(capitulos => {
            self.set('subCapitulos', capitulos.get('data')['Data'])
          })
        } else {
          self.set('tables', tablas.get('data'))
        }

      })
    },
    loadDataTable(id) {
      let self = this
      this.toggleProperty('queryFormVisible')
      this.get('store').queryRecord('datos-tabla', id).then(datos => {
        self.set('datos', datos.get('data')['Data'])
      })
    },
    loadChart(charts) {
      this.set('charts', charts.split(','))
      this.set('chartData',[])
      let chartData = this.get('chartData')
      this.get('charts').map((c) => {
        chartData.pushObjects(this.get('datos').filter((dato) => {
          return dato.COD === c
        }))
      })
      this.set('chartData', chartData)
    }
  }
});
