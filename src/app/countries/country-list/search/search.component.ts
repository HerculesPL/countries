import { Component, Output, Input, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component ({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit, OnDestroy{

    //event emitter onTyping to country-list.component
    @Output() onTyping = new EventEmitter<string>();
    //receiving value from input field in country-list.component typed on filter
    @Input() value: string = '';
    debounce: Subject<string> = new Subject<string>();
    
    //emit event after 300ms
    ngOnInit(): void {
        this.debounce
        .pipe(debounceTime(300))
        .subscribe(filter => this.onTyping.emit(filter));
    }
    //destroying component  
    ngOnDestroy(): void {
        this.debounce.unsubscribe();
        
    }
}