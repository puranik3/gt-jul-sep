import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replaceCharacter'
})
export class ReplaceCharacterPipe implements PipeTransform {
    transform( value: string, characterToReplace: string, replacementCharacter: string ) : string {
        return value.replace( characterToReplace, replacementCharacter );
    }
}