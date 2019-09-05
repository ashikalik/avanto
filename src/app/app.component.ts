import { Component } from "@angular/core";
import { Directionality } from "@angular/cdk/bidi";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "evento";
  private isRtl: boolean;
  public direction: string;
  private translate;

  constructor(dir: Directionality, translate: TranslateService) {
    this.translate = translate;
    this.direction = "ltr";
    this.isRtl = dir.value === "rtl";
    translate.setDefaultLang("en");
    translate.use("en");
  }

  onDirectionChanged(newDirecion: string) {
    console.log(newDirecion);
    this.direction = newDirecion;
    if (this.direction === "RTL") this.translate.use("ar");
    else this.translate.use("en");
  }
}
