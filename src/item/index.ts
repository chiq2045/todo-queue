import { Item as ItemType } from '../../types';

const map = new WeakMap<any, ItemType>();

export class Item {
  constructor(value: string) {
    map.set(this, {
      value,
      next: null,
      prev: null
    });
  }

	get value() {
		return map.get(this).value;
	}

  get next() {
    return map.get(this).next;
  }

  get prev() {
    return map.get(this).prev;
  }

	set value(v: any) {
		map.set(this, {...map.get(this), value: v})
	}

  set next(v: Item | null) {
    map.set(this, {...map.get(this), next: v})
  }

  set prev(v: Item | null) {
    map.set(this, {...map.get(this), prev: v});
  }
}
