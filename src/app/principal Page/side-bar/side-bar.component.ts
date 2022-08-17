import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav !: MatSidenav;
  sidenavStatus !: boolean

  constructor( private observer : BreakpointObserver,
               private router : Router ) { }

  ngOnInit(): void {
    this.sidenavStatus=false;
  }
  onclicked(){
    this.sidenavStatus=!this.sidenavStatus
  }

  onLogOut(){
    this.router.navigateByUrl('/signIn');
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width:800px)']).subscribe((value)=>{
      if(value.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
        
      }else {
        this.sidenav.mode='side';
        this.sidenav.open();
        
      };
      // if(this.sidenav){
      //   this.sidenavStatus=false;
      //   console.log('bbbbbb');
      // }
      // else if(!this.sidenav.opened){
      //   this.sidenavStatus=true;
      //   console.log('aaaaa');
        
      // }
    })
  }
  
}
