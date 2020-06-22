// Contants used for both visualizations
const indicatorDataPath = "/visualizations/csv/"; //change this to alter the path to the data file

// Function and config used for summary data visualizations.
var summarySpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": "container",
  "height": "container",
  "autosize": "fit",
  "data": {"url": "visualizations/csv/bikeLanP.csv"},
  "mark": {"type": "bar", "tooltip": true},
  "encoding": {
    "x": {
      "field": "Neighborhood",
      "type": "nominal",
      "sort": {"op": "mean", "field": "Data Value"},
      "axis":null
    },
    "y": {
      "field": "Data Value",
      "type": "quantitative",
      "axis": {"title":null}
    },
    "color": {
        "condition": {
            "test": "datum.Neighborhood=='Canarsie - Flatlands'",
            "value": "orange"
        },
        "value": "gray"
    }
  }
}
; //this is the template vega-lite json

function buildSummarySpec(neighborhood,dataSlug) {
  // make a copy of the vega-lite spec
  var temp = JSON.parse(JSON.stringify(summarySpec));
  // graft the neighborhood on to the specification for the color-coding
  temp.encoding.color.condition.test = "datum.Neighborhood=='"+neighborhood+"'";
  // graft the data file path on to the specification for the indicator
  temp.data.url = indicatorDataPath+dataSlug+".csv"; //note the function needs access to the indicatorDataPath global var
  // return the vega-lite spec
  return temp;
};

// Function and config used for trend data visualizations.

var trendSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": "container",
  "height": "container",
  "autosize": "fit",
  "data": {"url": "visualizations/csv/poveACSP_trend.csv"},
  "layer":[{
      "mark": {"type": "line", "point": false, "tooltip": true},
      "encoding": {
        "x": {
          "field": "Time",
          "type": "ordinal",
          "axis": {"title": null,"labelAngle":45}
        },
        "y": {
          "field": "Data Value",
          "type": "quantitative",
          "axis": {"title": null}
        },
        "detail": {
            "field": "Neighborhood",
            "type":"nominal"
        },
        "color": {
          "value": "lightgrey"
      }
      }
  },{
      "mark": {"type": "line", "point": true, "tooltip": true},
      "encoding": {
        "x": {
          "field": "Time",
          "type": "ordinal",
          "axis": {"title": null,"labelAngle":45}
        },
        "y": {
          "field": "Data Value",
          "type": "quantitative",
          "axis": {"title": null}
        },
        "detail": {
            "field": "Neighborhood",
            "type":"nominal"
        },
        "color": {
          "condition": {
              "test": "datum.Neighborhood=='Canarsie - Flatlands'",
              "value": "orange"
          },
          "value": null
      }
      }
      }]
}
; //this is the template vega-lite json

// this function creates a trend spec from a template that is customized with the data and neighborhood
function buildTrendSpec(neighborhood,dataSlug) {
  // make a copy of the vega-lite spec
  var temp = JSON.parse(JSON.stringify(trendSpec));
  // graft the neighborhood on to the specification for the color-coding
  temp.layer[1].encoding.color.condition.test = "datum.Neighborhood=='"+neighborhood+"'";
  // graft the data file path on to the specification for the indicator
  temp.data.url = indicatorDataPath+dataSlug+"_trend.csv"; //note the function needs access to the indicatorDataPath global var
  // return the vega-lite spec
  return temp;
};