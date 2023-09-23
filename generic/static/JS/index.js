window.onload = function () {
  zingchart.loadModules('maps, maps-usa', function (e) {
    const usa_map_config = {
      backgroundColor: 'none', // This is in the root
      plotarea: {
        backgroundColor: 'transparent',
        margin: 'dynamic',
        marginLeftOffset: '-10%',
        marginRightOffset: '10%',
        hoverState: {
          backgroundColor: 'blue'
        },
      },
      shapes: [{
        type: 'zingchart.maps',
        options: {
          name: 'usa',
          ignore: ['AK', 'HI'],
          style: {
            controls: {
              visible: false
            },
            cursor: 'pointer',
            hoverState: {
              backgroundColor: 'blue',
              fontColor: '#F5F5F5',
              alpha: 0.3,
            }
          },
        },
      }],
    };
    zingchart.render({
      id: 'usa_map',
      data: usa_map_config
    });
  })

  zingchart.loadModules('maps, maps-usa_al', function (e) {
    const county_map_config = {
      backgroundColor: 'none', // This is in the root
      plotarea: {
        backgroundColor: 'transparent',
        margin: 'dynamic',
        marginLeftOffset: '-10%',
        marginRightOffset: '10%',
        hoverState: {
          backgroundColor: 'blue'
        },
      },
      shapes: [{
        type: 'zingchart.maps',
        options: {
          name: 'usa_al',
          style: {
            controls: {
              visible: false
            },
            cursor: 'pointer',
            hoverState: {
              backgroundColor: 'blue',
              fontColor: '#F5F5F5',
              alpha: 0.3,
            }
          },
        },
      }],
    };
    zingchart.render({
      id: 'county_map',
      data: county_map_config
    });
  })
}
