import {
  Component,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  public currentUserId: WritableSignal<number> = signal(1);
  public currentUser: WritableSignal<User | undefined> = signal(undefined);
  public userWasFound: WritableSignal<boolean> = signal(false);
  public completeName: Signal<string> = computed(() => {
    const user = this.currentUser();
    if (!user) {
      return 'User not found';
    }
    return `${user.first_name} ${user.last_name}`;
  });

  constructor(private readonly userService: UserServiceService) {}

  ngOnInit(): void {
    this.loadUser(this.currentUserId());
  }

  public loadUser(id: number) {
    this.currentUserId.set(id);
    this.currentUser.set(undefined);
    if (id <= 0) {
      this.currentUser.set(undefined);
      this.userWasFound.set(false);
      return;
    }
    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
      error: (error: any) => {
        this.currentUser.set(undefined);
        this.userWasFound.set(false);
      },
    });
  }
}
