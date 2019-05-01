
import { MatDialogModule, MatCardModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        MatDialogModule,
        MatCardModule,
        MatButtonModule],
    exports: [MatDialogModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class MaterialModule { }
