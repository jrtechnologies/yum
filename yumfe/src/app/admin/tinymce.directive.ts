import { Directive, OnDestroy, AfterViewInit, Provider, forwardRef, HostBinding, SecurityContext } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

declare var tinymce: any;

export const TinyMceValueAccessor: Provider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TinymceDirective),
    multi: true
};

// Tinymce directive
@Directive({
    selector: '[htmlEditor]',
    providers: [TinyMceValueAccessor]
})

export class TinymceDirective implements OnDestroy, AfterViewInit, ControlValueAccessor {
    static nextUniqueId = 0;
    private editor;
    private innerValue;
    private init = false;

    @HostBinding('attr.data-tinymce-uniqueid') uniqueId;
    onTouchedCallback: () => void = () => { };
    onChangeCallback: (_: any) => void = () => { };

    constructor(private sanitizer: DomSanitizer) {
        this.uniqueId = `tinymce-host-${TinymceDirective.nextUniqueId++}`;
    }

    // get accessor
    get value(): any {
        return this.innerValue;
    };

    // set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    ngAfterViewInit(): void {
        console.log('tinymce');
        tinymce.init({
            selector: `[data-tinymce-uniqueid=${this.uniqueId}]`,
            skin_url: 'assets/skins/lightgray',
            menubar: false,
            statusbar: false,
            schema: 'html5',
            setup: ed => {
                ed.on('init', ed2 => {
                    if (this.innerValue) ed2.target.setContent(this.innerValue);
                    this.init = true;
                });
            }
        }).then(editor => {
              this.editor = editor[0];
              editor[0].on('blur', () => this.updateValue());
        });
    }

    updateValue() {
        const content = tinymce.activeEditor.getContent();
        this.value = this.sanitizer.sanitize(SecurityContext.HTML, content);
    }

    writeValue(value): void {
        if (value !== this.innerValue) {
            this.innerValue = value;
            if (this.init && value) tinymce.activeEditor.setContent(value);
        }
    }

    registerOnChange(fn): void {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn): void {
        this.onTouchedCallback = fn;
    }

    ngOnDestroy(): void {
        if (this.init) tinymce.remove(`[data-tinymce-uniqueid=${this.uniqueId}]`);
    }
}
