import React from "react"
import ReactDOM from "react-dom/client"
import logo from "./assests/logo.png"

/**
 * 
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Img
 *          - Name of Rest., Rating, Cuisine, Delivery Time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src={logo} 
                    width="150px" 
                    height="100px" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;

    return (
        <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
                alt="Meghna food"
                height="200px"
                width="180px"
            />
            <h3>{name}</h3>
            <p>{cuisines.join(",")}</p>
            <div className="rating">
                <p>{avgRating}</p>
                <p>{costForTwo}</p>
                <p>{sla.deliveryTime} mins</p>
            </div>
            
        </div>
    )
}

const resList = [
    {
      "info": {
        "id": "109168",
        "name": "Al Rabea Al Arabi Cafeteria",
        "cloudinaryImageId": "lu7b9y7xps4icwn6xzfj",
        "locality": "Opposite Lucky Hotel",
        "areaName": "Santosh Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Lebanese",
          "Arabian"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "109168",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5600
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5600
        },
        "parentId": "7582",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 6.3,
          "serviceability": "SERVICEABLE",
          "slaString": "34 mins",
          "lastMileTravelString": "6.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-02 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/al-rabea-al-arabi-cafeteria-opposite-lucky-hotel-santosh-nagar-hyderabad-109168",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "140117",
        "name": "Imperial Multi Cuisine Restaurant",
        "cloudinaryImageId": "ib97mlmkhuwwv51syyca",
        "locality": "Saroor Nagar West",
        "areaName": "Malakpet",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Indian",
          "Kebabs",
          "Tandoor"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "140117",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3100
        },
        "parentId": "19253",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 3.6,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "3.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-01 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/imperial-multi-cuisine-restaurant-saroor-nagar-west-malakpet-hyderabad-140117",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "8788",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "DD Colony",
        "areaName": "Amberpet",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "8788",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3700
        },
        "parentId": "2",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 47,
          "lastMileTravel": 4.4,
          "serviceability": "SERVICEABLE",
          "slaString": "47 mins",
          "lastMileTravelString": "4.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-02 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-dd-colony-amberpet-hyderabad-8788",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "108986",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
        "locality": "KMIT",
        "areaName": "Narayanguda",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.4,
        "veg": true,
        "feeDetails": {
          "restaurantId": "108986",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2500
        },
        "parentId": "6249",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "36 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-01 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nic-ice-creams-kmit-narayanguda-hyderabad-108986",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "28768",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "t3ubyjmvyny42wsdnrmo",
        "locality": "Kachiguda Main Road",
        "areaName": "Kachiguda",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "28768",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2500
        },
        "parentId": "2456",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 25,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-01 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-main-road-kachiguda-hyderabad-28768",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "355747",
        "name": "Grameen Kulfi",
        "cloudinaryImageId": "mwggy9gmdboqzi7gloms",
        "locality": "KMIT",
        "areaName": "Narayanguda",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "feeDetails": {
          "restaurantId": "355747",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2500
        },
        "parentId": "12175",
        "avgRatingString": "4.6",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "34 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-01 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/grameen-kulfi-kmit-narayanguda-hyderabad-355747",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "251577",
        "name": "Euphoria",
        "cloudinaryImageId": "edeiij1ua3zjnea7zdgc",
        "areaName": "Himayath Nagar",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Desserts",
          "Bakery"
        ],
        "avgRating": 4.7,
        "feeDetails": {
          "restaurantId": "251577",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3000
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3000
        },
        "parentId": "8132",
        "avgRatingString": "4.7",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "35 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-01 20:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/euphoria-himayath-nagar-hyderabad-251577",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "50091",
        "name": "Tipsy Topsy",
        "cloudinaryImageId": "mwhdqqnwxgbji07mknhd",
        "locality": "Saroor Nagar",
        "areaName": "Saidabad",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Italian",
          "Desserts",
          "Bakery"
        ],
        "avgRating": 3.7,
        "feeDetails": {
          "restaurantId": "50091",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3700
        },
        "parentId": "1045",
        "avgRatingString": "3.7",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "36 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-01 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/tipsy-topsy-saroor-nagar-saidabad-hyderabad-50091",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "10273",
        "name": "Scoops Ice Cream",
        "cloudinaryImageId": "b41zttj2l1cssxmr3oqc",
        "locality": "Koti Main road",
        "areaName": "Koti",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.5,
        "veg": true,
        "feeDetails": {
          "restaurantId": "10273",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2500
        },
        "parentId": "1354",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-01 22:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "D",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/scoops-ice-cream-main-road-koti-hyderabad-10273",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "233052",
        "name": "Oven Story Pizza",
        "cloudinaryImageId": "f986df6f1a1fcf2ff24d2eaf44d570a7",
        "locality": "Mahesh Nagar",
        "areaName": "Abids",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "233052",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3000
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3000
        },
        "parentId": "3534",
        "avgRatingString": "3.9",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "23-28 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-02 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/oven-story-pizza-mahesh-nagar-abids-hyderabad-233052",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "40377",
        "name": "Lucky Restaurant",
        "cloudinaryImageId": "uvapcfajlsbctskdhuhl",
        "locality": "Owaisi Nagar",
        "areaName": "Santosh Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Tandoor"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "40377",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5000
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5000
        },
        "parentId": "293683",
        "avgRatingString": "3.9",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 5.9,
          "serviceability": "SERVICEABLE",
          "slaString": "34 mins",
          "lastMileTravelString": "5.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-02 01:10:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/lucky-restaurant-owaisi-nagar-santosh-nagar-hyderabad-40377",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "408177",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Railway Quarters",
        "areaName": "Kachiguda",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "408177",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2500
        },
        "parentId": "721",
        "avgRatingString": "3.8",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "41 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-02 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-railway-quarters-kachiguda-hyderabad-408177",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "4138",
        "name": "Grand Hotel",
        "cloudinaryImageId": "g1arzw6qd7g9affkmgzk",
        "locality": "Abids",
        "areaName": "Abids",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Tandoor",
          "Haleem"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "4138",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2500
        },
        "parentId": "4001",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 1,
          "serviceability": "SERVICEABLE",
          "slaString": "42 mins",
          "lastMileTravelString": "1.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-02 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/grand-hotel-abids-hyderabad-4138",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "37103",
        "name": "KFC",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "locality": "Abids Road",
        "areaName": "Basheer Bagh",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "37103",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3000
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3000
        },
        "parentId": "547",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "46 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-02 00:28:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-abids-road-basheer-bagh-hyderabad-37103",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "16158",
        "name": "Royal Tiffin Centre",
        "cloudinaryImageId": "xxvnkzmpgmbojcakxws4",
        "locality": "Hanuman Tekdi",
        "areaName": "Koti",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "16158",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2500
        },
        "parentId": "4621",
        "avgRatingString": "3.8",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 58,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "58 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-02 01:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/royal-tiffin-centre-hanuman-tekdi-koti-hyderabad-16158",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "46872",
        "name": "Paradise Biryani",
        "cloudinaryImageId": "vhbgaebk4scj5fcfijzg",
        "locality": "Mahatma Gandhi Bus Station",
        "areaName": "Malakpet",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "Kebabs",
          "North Indian",
          "Hyderabadi"
        ],
        "avgRating": 3.6,
        "feeDetails": {
          "restaurantId": "46872",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2500
        },
        "parentId": "700",
        "avgRatingString": "3.6",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "32 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-01 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹1300",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/paradise-biryani-mahatma-gandhi-bus-station-malakpet-hyderabad-46872",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "27665",
        "name": "Pista House",
        "cloudinaryImageId": "xrnrtevdf9w3pfvxlaei",
        "locality": "Chikkadapalli Road",
        "areaName": "New Nallakunta",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Pizzas",
          "Snacks",
          "Desserts"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "27665",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2500
        },
        "parentId": "1732",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 45,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "45 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-01 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pista-house-chikkadapalli-road-new-nallakunta-hyderabad-27665",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "118745",
        "name": "McDonald's",
        "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
        "locality": "ABITS MPM MALL",
        "areaName": "Abids & Koti",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "118745",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2500
        },
        "parentId": "630",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 50,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "50 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-02 02:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-abits-mpm-mall-abids-and-koti-hyderabad-118745",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "15159",
        "name": "Faasos - Wraps & Rolls",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "locality": "Chikadpally",
        "areaName": "Himayatnagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "North Indian",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "15159",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3100
        },
        "parentId": "21809",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 52,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "52 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-02 03:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-chikadpally-himayatnagar-hyderabad-15159",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "7203",
        "name": "Taj Mahal-Abids",
        "cloudinaryImageId": "xtxi8kws7lmnwfardw0b",
        "locality": "Abids Road",
        "areaName": "Koti",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "South Indian"
        ],
        "avgRating": 4.4,
        "veg": true,
        "feeDetails": {
          "restaurantId": "7203",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2500
        },
        "parentId": "924",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "54 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-01 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/taj-mahal-abids-abids-road-koti-hyderabad-7203",
        "type": "WEBLINK"
      }
    }
  ];

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurant-container">
                {
                    resList.map((restaurant) => (
                        <RestaurantCard 
                            key={restaurant.info.id}
                            resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);