import { Item } from '../src/item';

describe('Item', () => {
  let item: Item;

  beforeEach(() => {
    item = new Item('Test');
  });

  it('creates an item with expected shape', () => {
    expect(item.value).toBe('Test');
    expect(item.next).toBe(null);
    expect(item.prev).toBe(null);
  });

  it('allows a new value to be passed', () => {
    item.value = 'Testing, Testing';

    expect(item.value).toBe('Testing, Testing');
    expect(item.next).toBe(null);
    expect(item.prev).toBe(null);
  });

  it("can add other items to prev and next", () => {
    item.next = new Item("Next Test");
    item.prev = new Item("Prev Test")

    expect(item.next.value).toBe("Next Test");
    expect(item.prev.value).toBe("Prev Test");
  })

  it("can remove items from next and prev", () => {
    item.next = new Item("Next Test");
    item.prev = new Item("Prev Test")
    item.next = null;

    expect(item.next).toBe(null);
    expect(item.prev.value).toBe("Prev Test");
  })
});
