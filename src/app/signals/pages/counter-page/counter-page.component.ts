import {
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  public counter: WritableSignal<number> = signal(0);
  public squareCounter = computed(() => this.counter() ** 2);

  constructor() {
    this.counter.mutate((value) => value + 1);
  }

  increaseBy(value: number) {
    this.counter.update((currentValue) => currentValue + value);
  }
}
