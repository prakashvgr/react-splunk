const definition = {
    "dataSources": {
        "scores": {
            "type": "ds.test",
            "options": {
                "data": {
                    "fields": [
                        {
                            "name": "score"
                        },
                        {
                            "name": "players"
                        }
                    ],
                    "columns": [
                        [
                            "10",
                            "20",
                            "30",
                            "40",
                            "50",
                            "60",
                            "70",
                            "85",
                            "1000"
                        ],
                        [
                            "1250",
                            "800",
                            "300",
                            "120",
                            "50",
                            "0",
                            "20",
                            "10",
                            "1"
                        ]
                    ]
                }
            }
        },
        "search_small": {
            "name": "Mock, Foo and Bar",
            "type": "ds.test",
            "options": {
                "data": {
                    "fields": [
                        {
                            "name": "day after launch"
                        },
                        {
                            "name": "games"
                        }
                    ],
                    "columns": [
                        [
                            "10",
                            "20",
                            "30",
                            "43",
                            "34",
                            "60",
                            "70",
                            "85"
                        ],
                        [
                            "100",
                            "250",
                            "350",
                            "400",
                            "580",
                            "900",
                            "1200"
                        ]
                    ]
                },
                "meta": {}
            }
        },
        "search1_sparkline": {
            "type": "ds.test",
            "options": {
                "data": {
                    "fields": [
                        {
                            "name": "foo"
                        },
                        {
                            "name": "bar"
                        }
                    ],
                    "columns": [
                        [
                            "98",
                            "80",
                            "80",
                            "4",
                            "4",
                            "10",
                            "100",
                            "95",
                            "100"
                        ],
                        [
                            "100",
                            "100",
                            "90",
                            "30",
                            "25",
                            "5",
                            "15",
                            "95",
                            "100"
                        ]
                    ]
                },
                "meta": {}
            }
        },
        "search2_sparkline": {
            "type": "ds.test",
            "options": {
                "data": {
                    "fields": [
                        {
                            "name": "foo"
                        },
                        {
                            "name": "bar"
                        }
                    ],
                    "columns": [
                        [
                            "98",
                            "80",
                            "80",
                            "4"
                        ],
                        [
                            "100",
                            "100",
                            "90",
                            "30"
                        ]
                    ]
                },
                "meta": {}
            }
        },
        "search3_sparkline": {
            "type": "ds.test",
            "options": {
                "data": {
                    "fields": [
                        {
                            "name": "foo"
                        },
                        {
                            "name": "bar"
                        }
                    ],
                    "columns": [
                        [
                            "80",
                            "80",
                            "4",
                            "60"
                        ],
                        [
                            "100",
                            "100",
                            "90",
                            "30"
                        ]
                    ]
                },
                "meta": {}
            }
        }
    },
    "inputs": {},
    "layout": {
        "type": "absolute",
        "options": {
            "width": 1164,
            "height": 824,
            "display": "auto-scale",
            "backgroundColor": "transparent",
            "backgroundImage": {
                "x": 0,
                "y": 0,
                "src": "/dashboard-background.png", /* can be an external URL to your background image */
                "sizeType": "contain"
            }
        },
        "structure": [
            {
                "item": "viz_west",
                "type": "block",
                "position": {
                    "h": 150,
                    "w": 150,
                    "x": 20,
                    "y": 320
                }
            },
            {
                "item": "viz_east",
                "type": "block",
                "position": {
                    "h": 150,
                    "w": 150,
                    "x": 990,
                    "y": 310
                }
            },
            {
                "item": "viz_southwest",
                "type": "block",
                "position": {
                    "h": 150,
                    "w": 150,
                    "x": 20,
                    "y": 540
                }
            },
            {
                "item": "viz_southeast",
                "type": "block",
                "position": {
                    "h": 150,
                    "w": 150,
                    "x": 990,
                    "y": 540
                }
            },
            {
                "item": "viz_6PiblKet",
                "type": "block",
                "position": {
                    "h": 210,
                    "w": 360,
                    "x": 760,
                    "y": 40
                }
            },
            {
                "item": "viz_W9qdbhcA",
                "type": "block",
                "position": {
                    "h": 210,
                    "w": 360,
                    "x": 380,
                    "y": 40
                }
            },
            {
                "item": "viz_IDfFI4RK",
                "type": "line",
                "position": {
                    "to": {
                        "item": "viz_west",
                        "port": "e"
                    },
                    "from": {
                        "x": 363,
                        "y": 486
                    }
                }
            },
            {
                "item": "viz_JS0rKXE1",
                "type": "line",
                "position": {
                    "to": {
                        "item": "viz_southwest",
                        "port": "e"
                    },
                    "from": {
                        "x": 471,
                        "y": 608
                    }
                }
            },
            {
                "item": "viz_nnwvguVi",
                "type": "line",
                "position": {
                    "to": {
                        "x": 794,
                        "y": 467
                    },
                    "from": {
                        "item": "viz_east",
                        "port": "w"
                    }
                }
            },
            {
                "item": "viz_6QTtgBjM",
                "type": "line",
                "position": {
                    "to": {
                        "x": 737,
                        "y": 593
                    },
                    "from": {
                        "item": "viz_southeast",
                        "port": "w"
                    }
                }
            },
            {
                "item": "viz_ellipse_west",
                "type": "block",
                "position": {
                    "h": 20,
                    "w": 20,
                    "x": 364,
                    "y": 481
                }
            },
            {
                "item": "viz_ellipse_southwest",
                "type": "block",
                "position": {
                    "h": 20,
                    "w": 20,
                    "x": 470,
                    "y": 600
                }
            },
            {
                "item": "viz_ellipse_east",
                "type": "block",
                "position": {
                    "h": 20,
                    "w": 20,
                    "x": 780,
                    "y": 460
                }
            },
            {
                "item": "viz_ellipse_southeast",
                "type": "block",
                "position": {
                    "h": 20,
                    "w": 20,
                    "x": 720,
                    "y": 580
                }
            },
            {
                "item": "viz_lzmDISh5",
                "type": "block",
                "position": {
                    "h": 50,
                    "w": 300,
                    "x": 60,
                    "y": 160
                }
            },
            { 
                "item": "viz_1ZmXS2Ue",
                "type": "block",
                "position": {
                    "h": 200,
                    "w": 260,
                    "x": 450,
                    "y": 420
                }
            }
        ]
    },
    "title": "Buttercup Games",
    "description": "",
    "visualizations": {
        "viz_east": {
            "type": "viz.singlevalue",
            "title": "East",
            "encoding": {
                "fill": {
                    "field": "primary[0]",
                    "format": {
                        "type": "rangevalue",
                        "ranges": [
                            {
                                "from": 100,
                                "value": "#cb3b43"
                            },
                            {
                                "to": 100,
                                "from": 70,
                                "value": "#ff7152"
                            },
                            {
                                "to": 70,
                                "from": 50,
                                "value": "#fc9850"
                            },
                            {
                                "to": 50,
                                "from": 30,
                                "value": "#f4df7a"
                            },
                            {
                                "to": 30,
                                "from": 10,
                                "value": "#4beba8"
                            },
                            {
                                "to": 10,
                                "value": "#cb3b43"
                            }
                        ]
                    }
                }
            },
            "dataSources": {
                "primary": "search2_sparkline"
            },
            "eventHandlers": [
                {
                    "type": "value.click"
                }
            ]
        },
        "viz_west": {
            "type": "viz.singlevalue",
            "title": "West",
            "encoding": {
                "fill": {
                    "field": "primary[0]",
                    "format": {
                        "type": "rangevalue",
                        "ranges": [
                            {
                                "from": 100,
                                "value": "#fc9850"
                            },
                            {
                                "to": 100,
                                "from": 70,
                                "value": "#ff7152"
                            },
                            {
                                "to": 70,
                                "from": 50,
                                "value": "#fc9850"
                            },
                            {
                                "to": 50,
                                "from": 30,
                                "value": "#f4df7a"
                            },
                            {
                                "to": 30,
                                "from": 10,
                                "value": "#4beba8"
                            },
                            {
                                "to": 10,
                                "value": "#5fbcff"
                            }
                        ]
                    }
                }
            },
            "dataSources": {
                "primary": "search1_sparkline"
            },
            "eventHandlers": [
                {
                    "type": "value.click"
                }
            ]
        },
        "viz_6PiblKet": {
            "type": "viz.column",
            "title": "Score distribution",
            "options": {
                "yAxisScale": "log",
                "backgroundColor": "#142c4b",
                "legendPlacement": "none"
            },
            "dataSources": {
                "primary": "scores"
            }
        },
        "viz_6QTtgBjM": {
            "type": "abslayout.line",
            "options": {
                "strokeWidth": 2,
                "strokeDasharray": 5
            }
        },
        "viz_IDfFI4RK": {
            "type": "abslayout.line",
            "options": {
                "strokeWidth": 2,
                "strokeDasharray": 5
            }
        },
        "viz_JS0rKXE1": {
            "type": "abslayout.line",
            "options": {
                "strokeWidth": 2,
                "strokeDasharray": 5
            }
        },
        "viz_W9qdbhcA": {
            "type": "viz.column",
            "title": "Games per day",
            "options": {
                "backgroundColor": "#142c4b",
                "legendPlacement": "none",
            },
            "dataSources": {
                "primary": "search_small"
            }
        },
        "viz_nnwvguVi": {
            "type": "abslayout.line",
            "options": {
                "strokeWidth": 2,
                "strokeDasharray": 5
            }
        },
        "viz_southeast": {
            "type": "viz.singlevalue",
            "title": "Southeast",
            "encoding": {
                "fill": {
                    "field": "primary[1]",
                    "format": {
                        "type": "rangevalue",
                        "ranges": [
                            {
                                "from": 100,
                                "value": "#cb3b43"
                            },
                            {
                                "to": 100,
                                "from": 70,
                                "value": "#ff7152"
                            },
                            {
                                "to": 70,
                                "from": 50,
                                "value": "#fc9850"
                            },
                            {
                                "to": 50,
                                "from": 30,
                                "value": "#f4df7a"
                            },
                            {
                                "to": 30,
                                "from": 10,
                                "value": "#4beba8"
                            },
                            {
                                "to": 10,
                                "value": "#5fbcff"
                            }
                        ]
                    }
                },
                "trend": "primary[1]"
            },
            "dataSources": {
                "primary": "search2_sparkline"
            },
            "eventHandlers": [
                {
                    "type": "value.click"
                }
            ]
        },
        "viz_southwest": {
            "type": "viz.singlevalue",
            "title": "Southwest",
            "encoding": {
                "fill": {
                    "field": "primary[0]",
                    "format": {
                        "type": "rangevalue",
                        "ranges": [
                            {
                                "from": 100,
                                "value": "#cb3b43"
                            },
                            {
                                "to": 100,
                                "from": 70,
                                "value": "#ff7152"
                            },
                            {
                                "to": 70,
                                "from": 50,
                                "value": "#4caf50"
                            },
                            {
                                "to": 50,
                                "from": 30,
                                "value": "#f4df7a"
                            },
                            {
                                "to": 30,
                                "from": 10,
                                "value": "#4beba8"
                            },
                            {
                                "to": 10,
                                "value": "#5fbcff"
                            }
                        ]
                    }
                }
            },
            "dataSources": {
                "primary": "search3_sparkline"
            },
            "eventHandlers": [
                {
                    "type": "value.click"
                }
            ]
        },
        "viz_ellipse_east": {
            "type": "viz.ellipse",
            "options": {
                "rx": 10,
                "ry": 10,
                "fill": "#ffffff"
            },
            "eventHandlers": [
                {
                    "type": "ellipse.click"
                }
            ]
        },
        "viz_ellipse_west": {
            "type": "viz.ellipse",
            "options": {
                "rx": 10,
                "ry": 10,
                "fill": "#ffffff"
            },
            "eventHandlers": [
                {
                    "type": "ellipse.click"
                }
            ]
        },
        "viz_ellipse_southeast": {
            "type": "viz.ellipse",
            "options": {
                "rx": 10,
                "ry": 10,
                "fill": "#ffffff"
            },
            "eventHandlers": [
                {
                    "type": "ellipse.click"
                }
            ]
        },
        "viz_ellipse_southwest": {
            "type": "viz.ellipse",
            "options": {
                "rx": 10,
                "ry": 10,
                "fill": "#ffffff"
            },
            "eventHandlers": [
                {
                    "type": "ellipse.click"
                }
            ]
        },
        "viz_lzmDISh5": {
            "type": "viz.text",
            "options": {
                "content": "This customized application will help us detect and ban cheaters",
                "fontSize": 20,
                "fontFamily": "Arial"
            }
        },
        "viz_1ZmXS2Ue": {
            "type": "viz.img",
            "options": {
                "backgroundColor": "transparent",
                "src": "https://conf.splunk.com/content/dam/splunk-conf/images/logos/2019-conf-gradient-logo.svg"
            }
        },
    }
};
export default definition;