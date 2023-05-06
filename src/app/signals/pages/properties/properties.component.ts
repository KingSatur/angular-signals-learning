import { Component, OnDestroy, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnDestroy {
  public user = signal({
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'mail',
    avatar: 'avatar',
  });
  public fullName = computed(() => {
    const user = this.user();
    return `${user.first_name} ${user.last_name}`;
  });

  public userChangedEffect = effect(() => {
    console.log('user changed', this.user(), 'counter', this.counter());
  });

  public counter = signal(0);

  ngOnDestroy(): void {
    this.userChangedEffect.destroy();
    throw new Error('Method not implemented.');
  }

  public increment() {
    this.counter.update((counter) => counter + 1);
  }

  public onFieldUpdated(field: keyof User, value: string) {
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    // this.user.update((user: User) => {
    //   return {
    //     ...user,
    //     [field]: value,
    //   };
    // });

    this.user.mutate((user: User) => {
      switch (field) {
        case 'id':
          user.id = Number(value);
          break;
        case 'first_name':
          user.first_name = value;
          break;
        case 'last_name':
          user.last_name = value;
          break;
        case 'email':
          user.email = value;
          break;
        case 'avatar':
          user.avatar = value;
          break;
      }
    });
  }
}
