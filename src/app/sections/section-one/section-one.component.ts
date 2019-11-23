import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-section-one',
    templateUrl: './section-one.component.html',
    styleUrls: ['./section-one.component.css']
})
export class SectionOneComponent implements AfterViewInit {
    words = ['SELECT.', 'CUSTOMIZE.', 'MOVE-IN.'];
    i = 0;
    timer;
    hideblink = false;
    constructor() {
    }

    ngAfterViewInit() {
        this.typingEffect();
    }


    deletingEffect() {
        const vm = this;
        const word = vm.words[vm.i].split('');
        const loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                document.getElementById('word').innerHTML = word.join('');
            } else {
                if (vm.words.length > (vm.i + 1)) {
                    vm.i++;
                } else {
                    vm.i = 0;
                    // document.getElementById('word').innerHTML = 'SELECT. CUSTOMIZE. MOVE-IN.';
                    // vm.hideblink = true;
                    // return false;
                }
                vm.typingEffect();
                return false;
            }
            setTimeout(loopDeleting, 100);
        };
        loopDeleting();
    }

    typingEffect() {
        const vm = this;
        const word = vm.words[vm.i].split('');
        const loopTyping = function() {
            if (word.length > 0) {
                document.getElementById('word').innerHTML += word.shift();
            } else {
                vm.deletingEffect();
                return false;
            }
            setTimeout(loopTyping, 200);
        };
        loopTyping();
    }
}
