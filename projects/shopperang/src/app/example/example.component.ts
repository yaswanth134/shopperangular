import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  public bgStyle:string = 'red';
  public textStyle:string = 'white';
  public padding:string = '0px';
  public fontSize:string = '0px';

  public styleObject :{
    'background-color':string,
    'color':string,
    'padding':string,
    'font-size':string
  } = {
    'background-color':this.bgStyle,
    "font-size":this.fontSize+"px",
    'color':this.textStyle,
    'padding':this.padding
  };

  ApplyClick(){
    this.styleObject = {
      'background-color':this.bgStyle,
      "font-size":this.fontSize+"px",
      'color':this.textStyle,
      'padding':this.padding
    };
  }

  FontChange(){
    this.styleObject = {'background-color':this.bgStyle,
    "font-size":this.fontSize+"px",
    'color':this.textStyle,
    'padding':this.padding}
  }
}
