import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { EmptyError } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    title = 'cv-angular';
    selectedItem = 'ABOUT';
    aboutOffset?: Number;
    experienceOffset?: Number;
    skillsOffset?: Number;
    awardsOffset?: Number;
    contactOffset?: Number;
    @ViewChild('ABOUT') aboutElement?: ElementRef;
    @ViewChild('EXPERIENCE') experienceElement?: ElementRef;
    @ViewChild('SKILLS') skillsElement?: ElementRef;
    @ViewChild('AWARDS') awardsElement?: ElementRef;
    @ViewChild('CONTACT') contactElement?: ElementRef;

    constructor() {
    }

    ngAfterViewInit(): void {
        this.aboutOffset = (this.aboutElement?.nativeElement.offsetTop ?? 0);
        this.experienceOffset = (this.experienceElement?.nativeElement.offsetTop ?? 0);
        this.skillsOffset = (this.skillsElement?.nativeElement.offsetTop ?? 0);
        this.awardsOffset = (this.awardsElement?.nativeElement.offsetTop ?? 0);
        this.contactOffset = (this.contactElement?.nativeElement.offsetTop ?? 0);
    }

    scroll(event: any, el: HTMLElement) {
        this.selectedItem = event.target?.attributes?.id.nodeValue;

        console.log(el);

        el.scrollIntoView();
    }
    @HostListener("window:scroll", ["$event"])
    onWindowScroll(event: any) {
        // if (window.pageYOffset >= 0 && window.pageYOffset < 50) {
        //     this.selectedItem = 'ABOUT';
        // } else if (window.pageYOffset >= (this.experienceOffset ?? 0) && window.pageYOffset <  Number(this.experienceOffset) + 50) {
        //     this.selectedItem = 'EXPERIENCE';
        // } else if (window.pageYOffset >= (this.skillsOffset ?? 0) && window.pageYOffset < Number(this.skillsOffset) + 50) {
        //     this.selectedItem = 'SKILLS';
        // } else if (window.pageYOffset >= (this.awardsOffset ?? 0) && window.pageYOffset < Number(this.awardsOffset) + 50) {
        //     this.selectedItem = 'AWARDS';
        // } else if (window.pageYOffset >= Number(this.awardsOffset ?? 0) + 50) {
        //     this.selectedItem = 'CONTACT';
        // }
        // console.log(this.selectedItem, window.pageYOffset, this.awardsOffset);

    }
}
