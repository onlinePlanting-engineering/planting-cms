import { Pipe, PipeTransform } from '@angular/core';
import { baseUrl } from '../_settings/index';

@Pipe({
    name: 'serialize'
})
export class UrlSerializePipe implements PipeTransform {
    private baseUrl: string = baseUrl;
    transform(value: string, args: string[]): any {
        if (value.startsWith('http://') || value.startsWith('https://')) {
            return value;
        }
        else {
            return `${baseUrl}${value}`;
        }
    }
}