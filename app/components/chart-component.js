import Ember from 'ember'

export default Ember.Component.extend({
  didInsertElement() {
    let formatedData = [
      {
        key: this.get('data')['Nombre'],
        values: this.get('data')['Data']
      }
    ]

    let chart = nv.models.lineChart()
      .x(function(d) { return d.Fecha })    //Specify the data accessors.
      .y(function(d) { return d.Valor })
      .xTickFormat(function(d) { return d3.time.format("%Y")(new Date(d)) })
      // .staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
      // .tooltips(false)        //Don't show tooltips
      // .showValues(true)       //...instead, show the bar value right on top of each bar.
      // .transitionDuration(350)

    d3.select(`#${this.get('data')['COD']} svg`)
      .datum(formatedData)
      .call(chart);

    nv.utils.windowResize(chart.update)

    return chart
  }
});
