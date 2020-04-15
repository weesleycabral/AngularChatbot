import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

// import {
//     MatInputModule,
//     MatButtonModule,
//     MatTooltipModule,
//     MatFormFieldModule,
//     MatToolbarModule,
//     MatIconModule,
// } from '@angular/material';

const modules = [
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
];

@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule { }
