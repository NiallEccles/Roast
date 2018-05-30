import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  constructor(private http: HttpClient) {}

  public data =
        {
          "results": [
          {
            "title": "Bac O's Omelet",
            "href": "http://www.recipezaar.com/Bac-Os-Omelet-299705",
            "ingredients": "american cheese, bacon, eggs, egg whites",
            "thumbnail": ""
          },
          {
            "title": "Bacon &amp; Blue Cheese Omelette (Bleu Cheese Omelet)",
            "href":
              "http://www.recipezaar.com/Bacon-Blue-Cheese-Omelette-Bleu-Cheese-Omelet-260956",
            "ingredients": "blue cheese, butter, bacon, eggs, cream, salt",
            "thumbnail": "http://img.recipepuppy.com/111297.jpg"
          },
          {
            "title": "Irishman's Omelet",
            "href": "http://www.recipezaar.com/Irishmans-Omelet-20964",
            "ingredients": "bacon, eggs, chives, parsley, onions, potato",
            "thumbnail": "http://img.recipepuppy.com/347026.jpg"
          },
          {
            "title": "Flaeskeaeggekage (Danish Bacon &amp; Egg Pancake/Omelet)",
            "href":
              "http://www.recipezaar.com/Flaeskeaeggekage-Danish-Bacon-Egg-PancakeOmelet-168286",
            "ingredients": "bacon, chives, eggs, flour, milk, salt",
            "thumbnail": "http://img.recipepuppy.com/566642.jpg"
          },
          {
            "title": "Bacon Potato Omelet",
            "href": "http://allrecipes.com/Recipe/Bacon-Potato-Omelet/Detail.aspx",
            "ingredients": "bacon, cheddar cheese, eggs, onions, potato, salt",
            "thumbnail": "http://img.recipepuppy.com/9294.jpg"
          },
          {
            "title": "Cauliflower and Feta Omelet",
            "href":
              "http://www.epicurious.com/recipes/food/views/Cauliflower-and-Feta-Omelet-241479",
            "ingredients":
              "eggs, olive oil, feta cheese, parsley, garlic, cauliflower",
            "thumbnail": "http://img.recipepuppy.com/128794.jpg"
          },
          {
            "title": "Popeyes Spinach Bacon And Eggbeater Omelet Recipe",
            "href":
              "http://www.grouprecipes.com/63754/popeyes-spinach-bacon-and-eggbeater-omelet.html",
            "ingredients":
              "grape tomatoes, spinach, kosher salt, bacon, olive oil, spices",
            "thumbnail": "http://img.recipepuppy.com/247364.jpg"
          },
          {
            "title": "Bacon and Sour Cream Omelet",
            "href":
              "http://www.bigoven.com/25936-Bacon-and-Sour-Cream-Omelet-recipe.html",
            "ingredients": "eggs, water, bacon, green onion, sour cream, butter",
            "thumbnail": "http://img.recipepuppy.com/599504.jpg"
          },
          {
            "title":
              "Oven Bacon-Denver Omelet \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n",
            "href":
              "http://www.kraftfoods.com/kf/recipes/oven-bacon-denver-omelet-110429.aspx",
            "ingredients":
              "bacon, eggs, milk, cheddar cheese, green pepper, green onion",
            "thumbnail": "http://img.recipepuppy.com/600247.jpg"
          },
          {
            "title": "\nHashed Brown Omelet Recipe\n\n",
            "href": "http://cookeatshare.com/recipes/hashed-brown-omelet-56889",
            "ingredients":
              "bacon, onions, green pepper, eggs, lowfat milk, american cheese",
            "thumbnail": "http://img.recipepuppy.com/902918.jpg"
          }
        ]
      }

  ngOnInit() {}

  getData() {
    // this.http.get('http://www.recipepuppy.com/api/?i=bacon,garlic&q=omelet&p=3')
    //   .subscribe(
    //     (data: any[]) => {
    //       console.log(data);
    //     }
    //   );
    console.log(this.data);
  }

}
