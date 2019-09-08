import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"]
})
export class PartnersComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    // $("#carouselExample").on("slide.bs.carousel", function(e) {
    //   /*
      
    //   CC 2.0 License Iatek LLC 2018
    //   Attribution required
      
    //   */
    //   console.log("dd");

    //   var $e = $(e.relatedTarget);
    //   var idx = $e.index();
    //   var itemsPerSlide = 4;
    //   var totalItems = $(".carousel-item").length;

    //   if (idx >= totalItems - (itemsPerSlide - 1)) {
    //     var it = itemsPerSlide - (totalItems - idx);
    //     for (var i = 0; i < it; i++) {
    //       // append slides to end
    //       if (e.direction == "left") {
    //         $(".carousel-item")
    //           .eq(i)
    //           .appendTo(".carousel-inner");
    //       } else {
    //         $(".carousel-item")
    //           .eq(0)
    //           .appendTo(".carousel-inner");
    //       }
    //     }
    //   }
    // });
  }

  ngOnInit() {}
}
