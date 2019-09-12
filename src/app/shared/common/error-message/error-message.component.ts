import { Component, OnInit, Input } from "@angular/core";
import { ServerError } from "../../../core/model/common/server-error";

@Component({
  selector: "app-error-message",
  templateUrl: "./error-message.component.html",
  styleUrls: ["./error-message.component.scss"]
})
export class ErrorMessageComponent implements OnInit {
  @Input() serverError: ServerError;

  constructor() {}

  ngOnInit() {}
}
