import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UniqueNameValidator implements AsyncValidator {
  // Simulated existing names (could be replaced with a real API call)
  existingNames = ['John', 'Jane', 'Doe'];

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return of(this.existingNames.includes(control.value)).pipe(
      delay(1000), // Simulate server delay
      map(isTaken => (isTaken ? { nameTaken: true } : null)) // Return validation error if name exists
    );
  }
}
