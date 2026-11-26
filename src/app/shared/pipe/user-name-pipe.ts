import { Pipe, PipeTransform, signal } from '@angular/core';
import { User } from '../../api/tickets/ticket.model';

@Pipe({
  name: 'userName',
})
export class UserNamePipe implements PipeTransform {
  transform(value: number | null, users:User[]): string {
    if(value === null){
      return 'Biriktirilmagan';
    }
    return users.find((user)=> user.id=== value)?.name ?? ''
  }
}
