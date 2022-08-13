export default {
  props: ["item", "type", "parent", "removable"],
  methods: {
    getId(item) {
      const id = item._item.id;
      return `${id.clock}-${id.client}`;
    },
    removeFromParent() {
      const { item, parent } = this;
      const items = parent;
      const index = items.toArray().indexOf(item);
      if (index > -1) {
        items.delete(index);
      }
    }
  }
};
