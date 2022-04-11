# TripAdvisor Things To Do Scraper

Get data from TripAdvisor fast and easily. It's suitable for such use cases as scraping TripAdvisor emails, addresses, awards and many more attributes of things to do on TripAdvisor.

# Input - TripAdvisor Crawler

Enter the location, state how many items you want to get (max items) and download the data from the dataset.
For the input example, check the INPUT tab.

# Output - TripAdvisor Export

You can extract a variety of data about a places listed on Tripadvisor, including some of the most essential information, such as `email`, `phone`, `price` and `reviewTags`. Data can be downloaded in various formats, such as `JSON`, `CSV`, `XML` and others. For more details, see the [Apify Docs](https://www.apify.com/docs).

**Here is an example of `JSON` output:**

```json
[
  {
    "type": "ATTRACTION",
    "location_id": "106016",
    "name": "The Sixth Floor Museum at Dealey Plaza",
    "latitude": "32.779556",
    "longitude": "-96.80833",
    "num_reviews": "9177",
    "timezone": "America/Chicago",
    "location_string": "Dallas, Texas",
    "photo": {
      "images": {
        "original": {
          "width": "1032",
          "url": "https://media-cdn.tripadvisor.com/media/photo-o/0a/8e/89/61/texas-school-book-depository.jpg",
          "height": "581"
        },
        "large": {
          "width": "1024",
          "url": "https://media-cdn.tripadvisor.com/media/photo-w/0a/8e/89/61/texas-school-book-depository.jpg",
          "height": "576"
        }
      },
      "is_blessed": false,
      "uploaded_date": "2016-03-10T22:00:52-0500",
      "caption": "The Sixth Floor Museum/Texas School Book Depository",
      "id": "177113441",
      "helpful_votes": "8",
      "published_date": "2016-03-10T22:00:52-0500",
      "user": {
        "user_id": null,
        "member_id": "0",
        "type": "user"
      }
    },
    "api_detail_url": "https://api.tripadvisor.com/api/internal/1.14/location/106016",
    "awards": [
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2021",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2021"
      },
      {
        "award_type": "CERTIFICATE_OF_EXCELLENCE",
        "year": "2020",
        "images": {
          "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
        },
        "categories": [],
        "display_name": "Certificate of Excellence 2020"
      }
    ],
    "location_subtype": "none",
    "doubleclick_zone": "na.us.tx.dallas",
    "preferred_map_engine": "default",
    "raw_ranking": "4.097482681274414",
    "ranking_geo": "Dallas",
    "ranking_geo_id": "55711",
    "ranking_position": "8",
    "ranking_denominator": "242",
    "ranking_category": "attraction",
    "ranking_subcategory": "#8 of 242 things to do in Dallas",
    "subcategory_ranking": "#8 of 242 things to do in Dallas",
    "ranking": "#8 of 242 things to do in Dallas",
    "distance": null,
    "distance_string": null,
    "bearing": null,
    "rating": "4.5",
    "is_closed": false,
    "open_now_text": "Closed today",
    "is_long_closed": false,
    "neighborhood_info": [
      {
        "location_id": "20483800",
        "name": "Downtown Dallas"
      }
    ],
    "description": "One of Texas’ most visited historic sites, The Sixth Floor Museum at Dealey Plaza chronicles the life, death and legacy of President John F. Kennedy. The Museum is in the former Texas School Book Depository building, where evidence of a sniper was found after the assassination of President Kennedy on November 22, 1963. Much of the exhibit space looks as it appeared in the 1960s. Highlights include a sniper’s perch, the FBI model used by the Warren Commission, an original teletype machine that first transmitted news of the president’s death, Oswald’s wedding ring, historic films, photos and more. An interactive display overlooks Dealey Plaza. Admission includes an audio guide, available in eight languages including ASL. The museum is open daily except Thanksgiving and Christmas. RECOMMENDED: Buy timed-entry tickets in advance at jfk.org. The most convenient paid parking is adjacent to the building; stay in the far right lane of Elm Street to enter the parking lot.",
    "web_url": "https://www.tripadvisor.com/Attraction_Review-g55711-d106016-Reviews-The_Sixth_Floor_Museum_at_Dealey_Plaza-Dallas_Texas.html",
    "write_review": "https://www.tripadvisor.com/UserReview-g55711-d106016-The_Sixth_Floor_Museum_at_Dealey_Plaza-Dallas_Texas.html",
    "ancestors": [
      {
        "subcategory": [
          {
            "key": "city",
            "name": "City"
          }
        ],
        "name": "Dallas",
        "abbrv": null,
        "location_id": "55711"
      },
      {
        "subcategory": [
          {
            "key": "state",
            "name": "State"
          }
        ],
        "name": "Texas",
        "abbrv": "TX",
        "location_id": "28964"
      },
      {
        "subcategory": [
          {
            "key": "country",
            "name": "Country"
          }
        ],
        "name": "United States",
        "abbrv": null,
        "location_id": "191"
      }
    ],
    "category": {
      "key": "attraction",
      "name": "Attraction"
    },
    "subcategory": [
      {
        "key": "49",
        "name": "Museums"
      }
    ],
    "parent_display_name": "Dallas",
    "is_jfy_enabled": false,
    "nearest_metro_station": [],
    "phone": "+1 214-747-6660",
    "website": "http://www.jfk.org",
    "email": "jfk@jfk.org",
    "address_obj": {
      "street1": "411 Elm St",
      "street2": "",
      "city": "Dallas",
      "state": "TX",
      "country": "United States",
      "postalcode": "75202-3301"
    },
    "address": "411 Elm St, Dallas, TX 75202-3301",
    "hours": {
      "week_ranges": [
        [
          {
            "open_time": 600,
            "close_time": 1020
          }
        ],
        [],
        [],
        [
          {
            "open_time": 600,
            "close_time": 1020
          }
        ]
      ],
      "timezone": "America/Chicago"
    },
    "is_candidate_for_contact_info_suppression": false,
    "subtype": [
      {
        "key": "161",
        "name": "Specialty Museums"
      }
    ],
    "booking": {
      "provider": "Viator",
      "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2FDallas-attractions%2FSixth-Floor-Museum-at-Dealey-Plaza-tours-tickets%2Fd918-a2897%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=9fc4021a086c65089&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=106016&clt=TD&from=api&nt=true"
    },
    "offer_group": {
      "lowest_price": "$25.99",
      "offer_list": [
        {
          "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FDallas%2FJohn-F-Kennedy-Assassination-Tour-and-Sixth-Floor-Museum%2Fd918-157133P1%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=2f40c701b7557ec7a&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=106016&clt=TD&from=api&nt=true",
          "price": "$29.65",
          "rounded_up_price": "$30",
          "offer_type": "",
          "title": "One-Hour John F Kennedy Assassination Walking Tour",
          "product_code": "157133P1",
          "partner": "Viator",
          "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/99/98/83.jpg",
          "description": null,
          "primary_category": "Cultural Tours"
        }
      ],
      "has_see_all_url": true,
      "is_eligible_for_ap_list": true
    },
    "fee": "YES",
    "tags": {},
    "reviews": []
  }
]
```

# TripAdvisor Cost of Usage

Apify provides you with $5 free usage credits to use every month on the [Apify Free plan](https://apify.com/pricing) and you can get up to 200,000 results from this Tripadvisor Things To Do Scraper for $5. So it will be completely free for 200k results!

But if you need to get more data regularly you should grab an Apify subscription. We recommend our [\$49/month Personal plan](https://apify.com/pricing) - you can get up to 2 million things to do every month! Or if you want to scrape even more, grab our [Team plan](https://apify.com/pricing)!
