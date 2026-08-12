import { KlesMaterialDatepickerModule, KlesMatDateAdapter } from "@3kles/kles-material-datepicker";
import { Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormField, MatLabel, MatHint, MatSuffix } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { KlesMatMomentAdapter, KLES_MAT_MOMENT_FORMATS } from "kles-material-moment-adapter";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatInput,
        MatHint,
        MatSuffix,
        MatDatepickerModule,
        KlesMaterialDatepickerModule
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    providers: [
        { provide: KlesMatDateAdapter, useClass: KlesMatMomentAdapter },
        { provide: DateAdapter, useClass: MomentDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: KLES_MAT_MOMENT_FORMATS }
    ]
})
export class AppComponent {
    form: FormGroup;

    constructor(private dateAdapter: DateAdapter<any>) {
        this.form = new FormGroup({
            date: new FormControl()
        });

        this.form.valueChanges.subscribe((value) => console.log('form value change!', value))
    }
}
